/// <reference types="vite/client" />

import "./page.css";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import flashcardsMarkdown from "../md_exports/flashcards.md?raw";
import flashcardsDefinitionsMarkdown from "../md_exports/flashcards-def.md?raw";
import flashcardsDefinitionsMarkdown2 from "./public/def2.md?raw";
import qcmMarkdown from "../qcm_50_cards_qcm_style.md?raw";
import qcmMarkdown2 from "../qcm_50_cards_2.md?raw";
import qcmMarkdown3 from "../qcm_50_cards_3.md?raw";
import qcmMarkdown4 from "../qcm_50_cards_4.md?raw";
import qcmMarkdown5 from "../qcm_teacher.md?raw";
import qcmMarkdown6 from "../qcm_teacher2.md?raw";
import qcmMarkdown7 from "../qcm_teacher3.md?raw";

type Flashcard = {
  id: string;
  cardNumber: number;
  section: string;
  question: string;
  answer: string;
  qcmOptions?: Array<{ label: string; text: string; raw: string }>;
  qcmCorrectAnswer?: string;
  qcmCorrectLabel?: string;
  qcmContext?: string;
};

type DeckType = "main" | "definitions" | "qcm";
type DefinitionCategory = "set1" | "set2" | "set3";
type QcmCategory =
  | "set1"
  | "set2"
  | "set3"
  | "set4"
  | "set5"
  | "set6"
  | "set7";
type CardStatus = "learned" | "not_learned";
type StatusMap = Record<string, CardStatus>;
type MenuView = "progress" | "concepts";
type ProgressFilter = "all" | "learned" | "not_learned";
type StudyMode = "all" | "learned" | "not_learned";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function parseFlashcards(markdown: string): Flashcard[] {
  const cards: Flashcard[] = [];
  const lines = markdown.replace(/\r/g, "").split("\n");

  let currentSection = "General";
  let cardNumber: number | null = null;
  let question: string | null = null;
  let answerBuffer: string[] = [];
  let inAnswer = false;

  const flush = () => {
    if (cardNumber !== null && question && answerBuffer.length > 0) {
      const answer = answerBuffer.join("\n").trim();
      cards.push({
        id: `card-${cardNumber}`,
        cardNumber,
        section: currentSection,
        question: question.trim(),
        answer,
      });
    }
    cardNumber = null;
    question = null;
    answerBuffer = [];
    inAnswer = false;
  };

  for (const rawLine of lines) {
    const line = rawLine;

    const cardMatch = line.match(/^#{2,3}\s+Card\s+(\d+)\s*$/i);
    if (cardMatch) {
      flush();
      cardNumber = Number(cardMatch[1]);
      continue;
    }

    const sectionMatch = line.match(/^##\s+(.*)$/);
    if (sectionMatch && !/^##\s+Card\s+\d+\s*$/i.test(line)) {
      flush();
      currentSection = sectionMatch[1].trim();
      continue;
    }

    if (cardNumber === null) continue;

    const qMatch = line.match(/^\*\*Q:\*\*\s*(.*)$/);
    if (qMatch) {
      question = qMatch[1];
      continue;
    }

    if (/^<details>/i.test(line)) {
      inAnswer = true;
      continue;
    }

    if (/^<\/details>/i.test(line)) {
      inAnswer = false;
      continue;
    }

    if (inAnswer) {
      const aMatch = line.match(/^\*\*A:\*\*\s*(.*)$/);
      if (aMatch) {
        answerBuffer.push(aMatch[1]);
      } else {
        answerBuffer.push(line);
      }
    }
  }

  flush();
  return cards;
}

function parseDefinitionFlashcards(markdown: string, idPrefix = "def"): Flashcard[] {
  const cards: Flashcard[] = [];
  const lines = markdown.replace(/\r/g, "").split("\n");

  let currentSection = "Definitions";
  let term: string | null = null;
  let answerBuffer: string[] = [];
  let inAnswer = false;
  let runningNumber = 0;

  const flush = () => {
    if (term && answerBuffer.length > 0) {
      runningNumber += 1;
      const rawAnswer = answerBuffer.join("\n").trim();
      const normalizedTerm = term.trim();
      const answerStartsWithTerm = new RegExp(
        `^\\*\\*?\\s*${normalizedTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\*\\*?\\s*[—:-]`,
        "i",
      ).test(rawAnswer);
      const answer = answerStartsWithTerm
        ? rawAnswer
        : `**${normalizedTerm}** — ${rawAnswer}`;
      cards.push({
        id: `${idPrefix}-${runningNumber}`,
        cardNumber: runningNumber,
        section: currentSection,
        question: normalizedTerm,
        answer,
      });
    }
    term = null;
    answerBuffer = [];
    inAnswer = false;
  };

  for (const rawLine of lines) {
    const line = rawLine;

    const sectionMatch = line.match(/^##\s+(.*)$/);
    if (sectionMatch && !line.startsWith("### ")) {
      flush();
      currentSection = sectionMatch[1].trim();
      continue;
    }

    const termMatch = line.match(/^###\s+Term:\s*(.+)$/i);
    if (termMatch) {
      flush();
      term = termMatch[1];
      continue;
    }

    if (term === null) continue;

    if (/^<details>/i.test(line)) {
      inAnswer = true;
      continue;
    }

    if (/^<\/details>/i.test(line)) {
      inAnswer = false;
      continue;
    }

    if (inAnswer) {
      answerBuffer.push(line);
    }
  }

  flush();
  return cards;
}

function parseQcmFlashcards(markdown: string, idPrefix = "qcm"): Flashcard[] {
  const cards: Flashcard[] = [];
  const lines = markdown.replace(/\r/g, "").split("\n");

  let currentSection = "QCM";
  let cardNumber: number | null = null;
  let question: string | null = null;
  let context: string | null = null;
  let answer: string | null = null;
  let optionsBuffer: string[] = [];
  let inDetails = false;

  const flush = () => {
    if (cardNumber !== null && question && answer) {
      const options = optionsBuffer
        .map((raw) => {
          const match = raw.match(/^- ([A-D])\.\s*\*?\s*(.*)$/i);
          if (!match) return null;
          return {
            raw,
            label: match[1].toUpperCase(),
            text: match[2].trim(),
          };
        })
        .filter(
          (option): option is { label: string; text: string; raw: string } =>
            option !== null,
        );
      const answerLabelMatch = answer.trim().match(/^([A-D])(?:\.|\b)/i);
      const answerLabel = answerLabelMatch
        ? answerLabelMatch[1].toUpperCase()
        : undefined;
      const selectedOption = answerLabel
        ? options.find((option) => option.label === answerLabel)
        : undefined;
      const normalizedAnswer = selectedOption
        ? `${selectedOption.label}. ${selectedOption.text}`
        : answer.trim();
      const formattedAnswer = `**Correct answer:** ${normalizedAnswer}`;
      cards.push({
        id: `${idPrefix}-${cardNumber}`,
        cardNumber,
        section: currentSection,
        question: question.trim(),
        answer: formattedAnswer,
        qcmOptions: options,
        qcmCorrectAnswer: normalizedAnswer,
        qcmCorrectLabel: answerLabel,
        qcmContext: context ? context.trim() : undefined,
      });
    }
    cardNumber = null;
    question = null;
    context = null;
    answer = null;
    optionsBuffer = [];
    inDetails = false;
  };

  for (const rawLine of lines) {
    const line = rawLine;

    const cardMatch = line.match(/^#{2,3}\s+Card\s+(\d+)\s*$/i);
    if (cardMatch) {
      flush();
      cardNumber = Number(cardMatch[1]);
      continue;
    }

    const sectionMatch = line.match(/^##\s+(.*)$/);
    if (sectionMatch && !/^##\s+Card\s+\d+\s*$/i.test(line)) {
      flush();
      currentSection = sectionMatch[1].trim();
      continue;
    }

    if (cardNumber === null) continue;

    const qcmMatch = line.match(/^\*\*QCM:\*\*\s*\*?\s*(.*)$/i);
    if (qcmMatch) {
      question = qcmMatch[1];
      continue;
    }

    if (/^<details>/i.test(line)) {
      inDetails = true;
      continue;
    }

    if (/^<\/details>/i.test(line)) {
      inDetails = false;
      continue;
    }

    const answerMatch = line.match(/^\*\*Answer:\*\*\s*(.*)$/i);
    if (answerMatch) {
      answer = answerMatch[1];
      continue;
    }

    if (/^- [A-D]\./.test(line.trim())) {
      optionsBuffer.push(line.trim());
      continue;
    }

    // Capture the italic case-study paragraph that sits between the QCM
    // question and the <details> block (single-asterisk italics, e.g.
    // "*SunHarvest Agriculture deploys ...*"). Skip bold (`**...**`).
    if (question && !inDetails && context === null) {
      const trimmed = line.trim();
      const italicMatch = trimmed.match(/^\*([^*].*[^*])\*$/);
      if (italicMatch) {
        context = italicMatch[1];
      }
    }
  }

  flush();
  return cards;
}

function renderInlineMarkdown(text: string): string {
  const escape = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  let html = escape(text);
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s).,!?;:]|$)/g, "$1<em>$2</em>");
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");
  return html;
}

function renderMarkdownBlock(markdown: string): string {
  const lines = markdown.split("\n");
  const html: string[] = [];
  let listOpen: "ul" | "ol" | null = null;
  let paragraphBuffer: string[] = [];

  const flushParagraph = () => {
    if (paragraphBuffer.length > 0) {
      html.push(`<p>${renderInlineMarkdown(paragraphBuffer.join(" "))}</p>`);
      paragraphBuffer = [];
    }
  };

  const closeList = () => {
    if (listOpen) {
      html.push(`</${listOpen}>`);
      listOpen = null;
    }
  };

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.trim() === "") {
      flushParagraph();
      closeList();
      continue;
    }

    const ulMatch = line.match(/^\s*[-•]\s+(.*)$/);
    const olMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);

    if (ulMatch) {
      flushParagraph();
      if (listOpen !== "ul") {
        closeList();
        html.push("<ul>");
        listOpen = "ul";
      }
      html.push(`<li>${renderInlineMarkdown(ulMatch[1])}</li>`);
      continue;
    }

    if (olMatch) {
      flushParagraph();
      if (listOpen !== "ol") {
        closeList();
        html.push("<ol>");
        listOpen = "ol";
      }
      html.push(`<li>${renderInlineMarkdown(olMatch[2])}</li>`);
      continue;
    }

    closeList();
    paragraphBuffer.push(line.trim());
  }

  flushParagraph();
  closeList();

  return html.join("");
}

const SWIPE_THRESHOLD = 90;
const FLY_DISTANCE = 520;
const FLING_VELOCITY_THRESHOLD = 0.55;
const MAX_DRAG = 260;
const EXIT_DURATION_MS = 320;
const USER_ID_STORAGE_KEY = "ai-exam-user-id";
const STATUS_STORAGE_KEY_PREFIX = "ai-exam-card-status";

function getOrCreateUserId(): string {
  const existing = window.localStorage.getItem(USER_ID_STORAGE_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  window.localStorage.setItem(USER_ID_STORAGE_KEY, id);
  return id;
}

function getStatusStorageKey(userId: string, deckType: DeckType): string {
  return `${STATUS_STORAGE_KEY_PREFIX}:${userId}:${deckType}`;
}

function readLocalStatuses(userId: string, deckType: DeckType): StatusMap {
  try {
    const raw = window.localStorage.getItem(getStatusStorageKey(userId, deckType));
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const entries = Object.entries(parsed as Record<string, unknown>).filter(
      ([, value]) => value === "learned" || value === "not_learned",
    ) as Array<[string, CardStatus]>;
    return Object.fromEntries(entries);
  } catch {
    return {};
  }
}

function writeLocalStatuses(
  userId: string,
  deckType: DeckType,
  statuses: StatusMap,
): void {
  try {
    window.localStorage.setItem(
      getStatusStorageKey(userId, deckType),
      JSON.stringify(statuses),
    );
  } catch {
    // Ignore quota/storage errors and keep in-memory state working.
  }
}

export default function Page() {
  const [deckType, setDeckType] = useState<DeckType>("main");
  const [definitionCategory, setDefinitionCategory] =
    useState<DefinitionCategory>("set1");
  const [qcmCategory, setQcmCategory] = useState<QcmCategory>("set1");
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [statusByCard, setStatusByCard] = useState<StatusMap>({});
  const [statusError, setStatusError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [drag, setDrag] = useState(0);
  const [exit, setExit] = useState<null | "left" | "right">(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuView, setMenuView] = useState<MenuView>("progress");
  const [menuQuery, setMenuQuery] = useState("");
  const [progressFilter, setProgressFilter] = useState<ProgressFilter>("all");
  const [studyMode, setStudyMode] = useState<StudyMode>("all");
  const [selectedQcmAnswers, setSelectedQcmAnswers] = useState<
    Record<string, string>
  >({});
  const [autoFlipLock, setAutoFlipLock] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const dragStartY = useRef<number | null>(null);
  const lastPointerX = useRef<number | null>(null);
  const lastPointerTime = useRef<number | null>(null);
  const swipeVelocity = useRef(0);
  const dragMoved = useRef(false);
  const blockGestureForScroll = useRef(false);
  const hasPointerCapture = useRef(false);
  const userIdRef = useRef<string | null>(null);
  const deckRef = useRef<HTMLDivElement | null>(null);
  const frontFaceRef = useRef<HTMLDivElement | null>(null);
  const backFaceRef = useRef<HTMLDivElement | null>(null);
  const [cardHeightPx, setCardHeightPx] = useState<number | null>(null);

  const applyDragResistance = (dx: number) =>
    Math.tanh(dx / MAX_DRAG) * MAX_DRAG;

  useEffect(() => {
    userIdRef.current = getOrCreateUserId();
  }, []);

  useEffect(() => {
    let cancelled = false;

    void (async () => {
      try {
        const isDefinitionsDeck = deckType === "definitions";
        const isQcmDeck = deckType === "qcm";

        let activeDefinitionSource: string;
        let activeDefinitionFileName: string;
        let activeDefinitionPrefix: string;

        if (isDefinitionsDeck && definitionCategory === "set2") {
          activeDefinitionSource = flashcardsDefinitionsMarkdown2;
          activeDefinitionFileName = "public/def2.md";
          activeDefinitionPrefix = "def2";
        } else if (isDefinitionsDeck && definitionCategory === "set3") {
          activeDefinitionFileName = "public/def3.md";
          activeDefinitionPrefix = "def3";
          const res = await fetch("/def3.md", { cache: "no-store" });
          if (!res.ok) {
            throw new Error(
              `Could not load ${activeDefinitionFileName} (${res.status}).`,
            );
          }
          activeDefinitionSource = await res.text();
        } else if (isDefinitionsDeck) {
          activeDefinitionSource = flashcardsDefinitionsMarkdown;
          activeDefinitionFileName = "md_exports/flashcards-def.md";
          activeDefinitionPrefix = "def";
        } else {
          activeDefinitionSource = "";
          activeDefinitionFileName = "";
          activeDefinitionPrefix = "def";
        }

        const activeQcmSource =
          qcmCategory === "set2"
            ? qcmMarkdown2
            : qcmCategory === "set3"
              ? qcmMarkdown3
              : qcmCategory === "set4"
                ? qcmMarkdown4
                : qcmCategory === "set5"
                  ? qcmMarkdown5
                  : qcmCategory === "set6"
                    ? qcmMarkdown6
                    : qcmCategory === "set7"
                      ? qcmMarkdown7
                      : qcmMarkdown;
        const activeQcmFileName =
          qcmCategory === "set2"
            ? "qcm_50_cards_2.md"
            : qcmCategory === "set3"
              ? "qcm_50_cards_3.md"
              : qcmCategory === "set4"
                ? "qcm_50_cards_4.md"
                : qcmCategory === "set5"
                  ? "qcm_teacher.md"
                  : qcmCategory === "set6"
                    ? "qcm_teacher2.md"
                    : qcmCategory === "set7"
                      ? "qcm_teacher3.md"
                      : "qcm_50_cards_qcm_style.md";
        const activeQcmPrefix =
          qcmCategory === "set2"
            ? "qcm2"
            : qcmCategory === "set3"
              ? "qcm3"
              : qcmCategory === "set4"
                ? "qcm4"
                : qcmCategory === "set5"
                  ? "qcm5"
                  : qcmCategory === "set6"
                    ? "qcm6"
                    : qcmCategory === "set7"
                      ? "qcm7"
                      : "qcm1";

        const source = isDefinitionsDeck
          ? activeDefinitionSource
          : isQcmDeck
            ? activeQcmSource
            : flashcardsMarkdown;

        if (!source.trim()) {
          throw new Error(
            isDefinitionsDeck && definitionCategory === "set3"
              ? `${activeDefinitionFileName} is empty on disk. Save the file in your editor (or restore its contents) so the dev server can serve it at /def3.md.`
              : isDefinitionsDeck
                ? `${activeDefinitionFileName} is empty.`
                : isQcmDeck
                  ? `${activeQcmFileName} is empty.`
                  : "flashcards.md is empty.",
          );
        }

        const parsed = isDefinitionsDeck
          ? parseDefinitionFlashcards(source, activeDefinitionPrefix)
          : isQcmDeck
            ? parseQcmFlashcards(source, activeQcmPrefix)
            : parseFlashcards(source);

        if (parsed.length === 0) {
          throw new Error(
            isDefinitionsDeck
              ? `No cards parsed from ${activeDefinitionFileName}.`
              : isQcmDeck
                ? `No cards parsed from ${activeQcmFileName}.`
                : "No cards parsed from flashcards.md.",
          );
        }

        if (cancelled) return;

        setDeck(shuffle(parsed));
        setStatusByCard({});
        setStatusError(null);
        setLoadError(null);
        setIndex(0);
        setFlipped(false);
        setDrag(0);
        setExit(null);
        setStudyMode("all");
        setSelectedQcmAnswers({});
        setAutoFlipLock(false);
      } catch (err) {
        if (cancelled) return;
        setDeck([]);
        setLoadError(err instanceof Error ? err.message : "Unknown error");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [deckType, definitionCategory, qcmCategory]);

  useEffect(() => {
    if (!userIdRef.current || deck.length === 0) return;
    const aborter = new AbortController();
    const userId = userIdRef.current;

    // Load from local storage first so progress is available offline.
    const localStatuses = readLocalStatuses(userId, deckType);
    setStatusByCard(localStatuses);

    const loadStatuses = async () => {
      try {
        const response = await fetch(
          `/api/card-status?deckType=${encodeURIComponent(deckType)}`,
          {
            headers: { "x-user-id": userIdRef.current as string },
            signal: aborter.signal,
          },
        );
        if (!response.ok) {
          throw new Error(`Status load failed (${response.status})`);
        }
        const payload = (await response.json()) as { statuses?: StatusMap };
        // Keep local values if both local and remote contain a card.
        const merged = { ...(payload.statuses ?? {}), ...localStatuses };
        setStatusByCard(merged);
        writeLocalStatuses(userId, deckType, merged);
        setStatusError(null);
      } catch (err) {
        if (aborter.signal.aborted) return;
        setStatusError(
          err instanceof Error
            ? `${err.message}. Using local progress.`
            : "Could not load statuses. Using local progress.",
        );
      }
    };

    void loadStatuses();
    return () => aborter.abort();
  }, [deck, deckType]);

  const learnedCards = useMemo(
    () => deck.filter((item) => statusByCard[item.id] === "learned"),
    [deck, statusByCard],
  );
  const notLearnedCards = useMemo(
    () => deck.filter((item) => statusByCard[item.id] === "not_learned"),
    [deck, statusByCard],
  );
  const activeDeck = useMemo(() => {
    if (studyMode === "learned") return learnedCards;
    if (studyMode === "not_learned") return notLearnedCards;
    return deck;
  }, [deck, learnedCards, notLearnedCards, studyMode]);
  const card = activeDeck[index];
  const upcoming = activeDeck[index + 1];
  const total = activeDeck.length;

  useEffect(() => {
    if (index < total) return;
    setIndex(0);
    setFlipped(false);
    setDrag(0);
    setExit(null);
  }, [index, total]);

  useLayoutEffect(() => {
    const measure = () => {
      const deckEl = deckRef.current;
      const frontEl = frontFaceRef.current;
      const backEl = backFaceRef.current;
      if (!deckEl || !frontEl || !backEl) return;

      const availableHeight = deckEl.clientHeight;
      if (availableHeight <= 0) return;

      const neededHeight = Math.ceil(
        Math.max(frontEl.scrollHeight, backEl.scrollHeight),
      );
      const minHeight = 380;
      const nextHeight = Math.min(
        Math.max(neededHeight, minHeight),
        availableHeight,
      );
      setCardHeightPx((prev) => (prev === nextHeight ? prev : nextHeight));
    };

    const raf = window.requestAnimationFrame(measure);
    window.addEventListener("resize", measure);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
    };
  }, [
    index,
    selectedQcmAnswers,
    deckType,
    definitionCategory,
    qcmCategory,
    flipped,
    total,
  ]);

  const goToCard = (cardId: string) => {
    let nextIndex = activeDeck.findIndex((item) => item.id === cardId);
    if (nextIndex < 0) {
      setStudyMode("all");
      nextIndex = deck.findIndex((item) => item.id === cardId);
    }
    if (nextIndex < 0) return;
    setIndex(nextIndex);
    setFlipped(false);
    setDrag(0);
    setExit(null);
    setIsMenuOpen(false);
  };

  const menuCards = useMemo(() => {
    const normalizedQuery = menuQuery.trim().toLowerCase();
    let source = deck;
    if (menuView === "progress") {
      if (progressFilter === "learned") source = learnedCards;
      else if (progressFilter === "not_learned") source = notLearnedCards;
    }
    if (!normalizedQuery) return source;
    return source.filter((item) =>
      item.question.toLowerCase().includes(normalizedQuery),
    );
  }, [
    menuQuery,
    menuView,
    progressFilter,
    deck,
    learnedCards,
    notLearnedCards,
  ]);

  const setStudyModeFromMenu = (mode: StudyMode) => {
    setStudyMode(mode);
    setIndex(0);
    setFlipped(false);
    setDrag(0);
    setExit(null);
    setIsMenuOpen(false);
  };

  const goNext = () => {
    if (index + 1 >= total) return;
    setExit("left");
    window.setTimeout(() => {
      setIndex((i) => i + 1);
      setFlipped(false);
      setDrag(0);
      setExit(null);
    }, EXIT_DURATION_MS);
  };

  const goPrev = () => {
    if (index === 0) return;
    setExit("right");
    window.setTimeout(() => {
      setIndex((i) => i - 1);
      setFlipped(false);
      setDrag(0);
      setExit(null);
    }, EXIT_DURATION_MS);
  };

  const reshuffle = () => {
    setDeck((d) => shuffle(d));
    setIndex(0);
    setFlipped(false);
    setDrag(0);
    setExit(null);
  };

  const setCardStatus = async (nextStatus: CardStatus) => {
    if (!card || !userIdRef.current) return;
    const userId = userIdRef.current;
    const cardId = card.id;
    const nextStatuses = { ...statusByCard, [cardId]: nextStatus };
    setStatusByCard(nextStatuses);
    writeLocalStatuses(userId, deckType, nextStatuses);
    setStatusError(null);

    try {
      const response = await fetch("/api/card-status", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-user-id": userId,
        },
        body: JSON.stringify({
          cardId,
          deckType,
          status: nextStatus,
        }),
      });
      if (!response.ok) {
        throw new Error(`Status save failed (${response.status})`);
      }
    } catch (err) {
      setStatusError(
        err instanceof Error
          ? `${err.message}. Saved locally.`
          : "Could not save status to server. Saved locally.",
      );
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, total]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (exit || autoFlipLock) return;
    dragStartX.current = e.clientX;
    dragStartY.current = e.clientY;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    swipeVelocity.current = 0;
    dragMoved.current = false;
    blockGestureForScroll.current = false;
    hasPointerCapture.current = false;

    // On touch devices, defer pointer capture until horizontal intent is clear.
    if (e.pointerType !== "touch") {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
      hasPointerCapture.current = true;
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null || exit || autoFlipLock) return;
    const dx = e.clientX - dragStartX.current;
    const dy = dragStartY.current === null ? 0 : e.clientY - dragStartY.current;

    if (e.pointerType === "touch" && !hasPointerCapture.current) {
      // Decide intent: vertical scroll vs horizontal swipe.
      if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) {
        blockGestureForScroll.current = true;
        setDrag(0);
        return;
      }
      if (Math.abs(dx) > 12 && Math.abs(dx) >= Math.abs(dy)) {
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
        hasPointerCapture.current = true;
      } else {
        return;
      }
    }

    if (blockGestureForScroll.current) return;
    const now = performance.now();
    if (lastPointerX.current !== null && lastPointerTime.current !== null) {
      const dt = Math.max(now - lastPointerTime.current, 1);
      const instantVelocity = (e.clientX - lastPointerX.current) / dt;
      swipeVelocity.current = swipeVelocity.current * 0.6 + instantVelocity * 0.4;
    }
    lastPointerX.current = e.clientX;
    lastPointerTime.current = now;
    if (Math.abs(dx) > 6) dragMoved.current = true;
    setDrag(applyDragResistance(dx));
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (blockGestureForScroll.current) {
      blockGestureForScroll.current = false;
      dragStartX.current = null;
      dragStartY.current = null;
      lastPointerX.current = null;
      lastPointerTime.current = null;
      hasPointerCapture.current = false;
      return;
    }

    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    dragStartX.current = null;
    dragStartY.current = null;
    lastPointerX.current = null;
    lastPointerTime.current = null;
    hasPointerCapture.current = false;

    if (!dragMoved.current) {
      if (deckType === "qcm" && !selectedQcmAnswer) {
        setDrag(0);
        return;
      }
      setFlipped((f) => !f);
      setDrag(0);
      return;
    }

    const flingLeft =
      swipeVelocity.current < -FLING_VELOCITY_THRESHOLD && index + 1 < total;
    const flingRight =
      swipeVelocity.current > FLING_VELOCITY_THRESHOLD && index > 0;

    if ((dx < -SWIPE_THRESHOLD || flingLeft) && index + 1 < total) {
      goNext();
    } else if ((dx > SWIPE_THRESHOLD || flingRight) && index > 0) {
      goPrev();
    } else {
      setDrag(0);
    }
  };

  const cardStyle = useMemo(() => {
    if (exit === "left") {
      return {
        transform: `translateX(-${FLY_DISTANCE}px) rotate(-14deg)`,
        opacity: 0,
        transition:
          "transform 320ms cubic-bezier(.17,.84,.32,1), opacity 320ms ease-out",
      } as React.CSSProperties;
    }
    if (exit === "right") {
      return {
        transform: `translateX(${FLY_DISTANCE}px) rotate(14deg)`,
        opacity: 0,
        transition:
          "transform 320ms cubic-bezier(.17,.84,.32,1), opacity 320ms ease-out",
      } as React.CSSProperties;
    }
    const rotate = drag / 24;
    const transition =
      dragStartX.current === null
        ? "transform 280ms cubic-bezier(.2,.85,.28,1)"
        : "none";
    return {
      transform: `translateX(${drag}px) rotate(${rotate}deg)`,
      transition,
    } as React.CSSProperties;
  }, [drag, exit]);

  const answerHtml = useMemo(
    () => (card ? renderMarkdownBlock(card.answer) : ""),
    [card],
  );
  const questionHtml = useMemo(
    () => (card ? renderInlineMarkdown(card.question) : ""),
    [card],
  );
  const contextHtml = useMemo(
    () => (card?.qcmContext ? renderInlineMarkdown(card.qcmContext) : ""),
    [card],
  );
  const upcomingQuestionHtml = useMemo(
    () => (upcoming ? renderInlineMarkdown(upcoming.question) : ""),
    [upcoming],
  );

  if (loadError) {
    return (
      <main className="stage">
        <p className="error">Could not load cards: {loadError}</p>
      </main>
    );
  }

  if (!card) {
    if (total === 0) {
      return (
        <main className="stage">
          <p className="hint">No cards in this filter yet.</p>
          <button
            type="button"
            className="restart"
            onClick={() => setStudyMode("all")}
          >
            Show all cards
          </button>
        </main>
      );
    }
    return (
      <main className="stage">
        <p className="hint">Loading…</p>
      </main>
    );
  }

  const isDone = index >= total - 1 && exit === "left";
  const progress = ((index + 1) / total) * 100;
  const activeStatus = card ? statusByCard[card.id] : null;
  const isQcmCard = deckType === "qcm";
  const selectedQcmAnswer = card ? selectedQcmAnswers[card.id] : undefined;
  const selectedQcmLabel = selectedQcmAnswer
    ? selectedQcmAnswer.match(/^([A-D])\./i)?.[1]?.toUpperCase()
    : undefined;
  const isQcmCorrect =
    isQcmCard &&
    Boolean(selectedQcmLabel) &&
    Boolean(card.qcmCorrectLabel) &&
    selectedQcmLabel === card.qcmCorrectLabel;

  const mainCardStyle = cardHeightPx
    ? ({ ...cardStyle, height: `${cardHeightPx}px` } as React.CSSProperties)
    : cardStyle;
  const peekCardStyle = cardHeightPx
    ? ({ height: `${cardHeightPx}px` } as React.CSSProperties)
    : undefined;

  return (
    <main className="stage">
      <div className="topbar">
        <span className="counter">
          {index + 1} <span className="counter-sep">/</span> {total}
        </span>
        <div className="bar">
          <div className="bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <button
          type="button"
          className="reshuffle"
          onClick={reshuffle}
          aria-label="Shuffle deck"
          title="Shuffle deck"
        >
          Shuffle
        </button>
        <button
          type="button"
          className="icon-btn"
          onClick={() => {
            setMenuView("progress");
            setIsMenuOpen(true);
          }}
          aria-label="Open learned and not learned cards"
          title="Open learned and not learned cards"
        >
          Menu
        </button>
        {deckType === "definitions" && (
          <button
            type="button"
            className="icon-btn"
            onClick={() => {
              setMenuView("concepts");
              setIsMenuOpen(true);
            }}
            aria-label="Open concepts menu"
            title="Open concepts menu"
          >
            Concepts
          </button>
        )}
        <div className="deck-toggle" role="tablist" aria-label="Deck type">
          <button
            type="button"
            className={`deck-switch ${deckType === "main" ? "is-active" : ""}`}
            onClick={() => setDeckType("main")}
            aria-label="Switch to main cards"
            aria-selected={deckType === "main"}
            role="tab"
            title="Main cards"
          >
            Main
          </button>
          <button
            type="button"
            className={`deck-switch ${deckType === "definitions" ? "is-active" : ""}`}
            onClick={() => setDeckType("definitions")}
            aria-label="Switch to definition cards"
            aria-selected={deckType === "definitions"}
            role="tab"
            title="Definition cards"
          >
            Definitions
          </button>
          <button
            type="button"
            className={`deck-switch ${deckType === "qcm" ? "is-active" : ""}`}
            onClick={() => setDeckType("qcm")}
            aria-label="Switch to QCM cards"
            aria-selected={deckType === "qcm"}
            role="tab"
            title="QCM cards"
          >
          
            QCM
          </button>
        </div>
        {deckType === "qcm" && (
          <div className="deck-toggle" role="tablist" aria-label="QCM category">
            <button
              type="button"
              className={`deck-switch ${qcmCategory === "set1" ? "is-active" : ""}`}
              onClick={() => setQcmCategory("set1")}
              aria-label="Switch to QCM set 1"
              aria-selected={qcmCategory === "set1"}
              role="tab"
              title="QCM set 1"
            >
              QCM 1
            </button>
            <button
              type="button"
              className={`deck-switch ${qcmCategory === "set2" ? "is-active" : ""}`}
              onClick={() => setQcmCategory("set2")}
              aria-label="Switch to QCM set 2"
              aria-selected={qcmCategory === "set2"}
              role="tab"
              title="QCM set 2"
            >
              QCM 2
            </button>
            <button
              type="button"
              className={`deck-switch ${qcmCategory === "set3" ? "is-active" : ""}`}
              onClick={() => setQcmCategory("set3")}
              aria-label="Switch to QCM set 3"
              aria-selected={qcmCategory === "set3"}
              role="tab"
              title="QCM set 3"
            >
              QCM 3
            </button>
            <button
              type="button"
              className={`deck-switch ${qcmCategory === "set4" ? "is-active" : ""}`}
              onClick={() => setQcmCategory("set4")}
              aria-label="Switch to QCM set 4"
              aria-selected={qcmCategory === "set4"}
              role="tab"
              title="QCM set 4"
            >
              QCM 4
            </button>
            <button
              type="button"
              className={`deck-switch ${qcmCategory === "set5" ? "is-active" : ""}`}
              onClick={() => setQcmCategory("set5")}
              aria-label="Switch to QCM teacher set"
              aria-selected={qcmCategory === "set5"}
              role="tab"
              title="QCM teacher set"
            >
              QCM Teacher
            </button>
            <button
              type="button"
              className={`deck-switch ${qcmCategory === "set6" ? "is-active" : ""}`}
              onClick={() => setQcmCategory("set6")}
              aria-label="Switch to QCM teacher set 2"
              aria-selected={qcmCategory === "set6"}
              role="tab"
              title="QCM teacher set 2"
            >
              QCM Teacher 2
            </button>
            <button
              type="button"
              className={`deck-switch ${qcmCategory === "set7" ? "is-active" : ""}`}
              onClick={() => setQcmCategory("set7")}
              aria-label="Switch to QCM teacher set 3"
              aria-selected={qcmCategory === "set7"}
              role="tab"
              title="QCM teacher set 3"
            >
              QCM Teacher 3
            </button>
          </div>
        )}
        {deckType === "definitions" && (
          <div className="deck-toggle" role="tablist" aria-label="Definition category">
            <button
              type="button"
              className={`deck-switch ${definitionCategory === "set1" ? "is-active" : ""}`}
              onClick={() => setDefinitionCategory("set1")}
              aria-label="Switch to definition set 1"
              aria-selected={definitionCategory === "set1"}
              role="tab"
              title="Definition set 1"
            >
              Def 1
            </button>
            <button
              type="button"
              className={`deck-switch ${definitionCategory === "set2" ? "is-active" : ""}`}
              onClick={() => setDefinitionCategory("set2")}
              aria-label="Switch to definition set 2"
              aria-selected={definitionCategory === "set2"}
              role="tab"
              title="Definition set 2"
            >
              Def 2
            </button>
            <button
              type="button"
              className={`deck-switch ${definitionCategory === "set3" ? "is-active" : ""}`}
              onClick={() => setDefinitionCategory("set3")}
              aria-label="Switch to definition set 3"
              aria-selected={definitionCategory === "set3"}
              role="tab"
              title="Definition set 3"
            >
              Def 3
            </button>
          </div>
        )}
      </div>

      {isMenuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
          role="presentation"
        >
          <section
            className="menu-sheet"
            onClick={(e) => e.stopPropagation()}
            aria-label="Card menu"
          >
            <div className="menu-header">
              <h2 className="menu-title">
                {menuView === "progress" ? "Progress" : "Concepts"}
              </h2>
              <button
                type="button"
                className="menu-close"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="menu-toolbar">
              <div className="menu-tabs" role="tablist" aria-label="Menu views">
                <button
                  type="button"
                  className={`menu-tab ${menuView === "progress" ? "is-active" : ""}`}
                  onClick={() => setMenuView("progress")}
                >
                  Progress
                </button>
                {deckType === "definitions" && (
                  <button
                    type="button"
                    className={`menu-tab ${menuView === "concepts" ? "is-active" : ""}`}
                    onClick={() => setMenuView("concepts")}
                  >
                    Concepts
                  </button>
                )}
              </div>
              {menuView === "progress" && (
                <div className="menu-tabs menu-tabs--sub" role="tablist" aria-label="Progress filters">
                  <button
                    type="button"
                    className={`menu-tab ${progressFilter === "all" ? "is-active" : ""}`}
                    onClick={() => setProgressFilter("all")}
                  >
                    All
                  </button>
                  <button
                    type="button"
                    className={`menu-tab ${progressFilter === "learned" ? "is-active" : ""}`}
                    onClick={() => setProgressFilter("learned")}
                  >
                    Learned
                  </button>
                  <button
                    type="button"
                    className={`menu-tab ${progressFilter === "not_learned" ? "is-active" : ""}`}
                    onClick={() => setProgressFilter("not_learned")}
                  >
                    Not learned
                  </button>
                </div>
              )}
              <input
                className="menu-search"
                value={menuQuery}
                onChange={(e) => setMenuQuery(e.target.value)}
                placeholder={
                  menuView === "concepts" ? "Search concepts..." : "Search cards..."
                }
                aria-label="Search cards in menu"
              />
            </div>

            <div className="menu-summary">
              <span>Learned: {learnedCards.length}</span>
              <span>Not learned: {notLearnedCards.length}</span>
              <span>Total: {deck.length}</span>
              <span>
                View:{" "}
                {studyMode === "all"
                  ? "All"
                  : studyMode === "learned"
                    ? "Learned"
                    : "Not learned"}
              </span>
            </div>
            {menuView === "progress" && (
              <div className="menu-study-actions">
                <button
                  type="button"
                  className="menu-tab"
                  onClick={() => setStudyModeFromMenu("all")}
                >
                  Study all
                </button>
                <button
                  type="button"
                  className="menu-tab"
                  onClick={() => setStudyModeFromMenu("learned")}
                >
                  Study learned
                </button>
                <button
                  type="button"
                  className="menu-tab"
                  onClick={() => setStudyModeFromMenu("not_learned")}
                >
                  Study not learned
                </button>
              </div>
            )}
            <div className="menu-list">
              {menuCards.length === 0 && (
                <p className="menu-empty">No cards match your filter.</p>
              )}
              {menuCards.map((item) => {
                const status = statusByCard[item.id];
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`menu-item ${
                      status === "learned"
                        ? "menu-item--learned"
                        : "menu-item--not-learned"
                    }`}
                    onClick={() => goToCard(item.id)}
                  >
                    {item.question}
                  </button>
                );
              })}
            </div>
          </section>
        </div>
      )}

      <div className="deck" ref={deckRef}>
        {upcoming && (
          <div className="card card--peek" aria-hidden="true" style={peekCardStyle}>
            <div
              className={`card-face card-face--front ${
                isQcmCard ? "card-face--front-qcm" : ""
              }`}
            >
              <p
                className="card-q"
                dangerouslySetInnerHTML={{ __html: upcomingQuestionHtml }}
              />
            </div>
          </div>
        )}

        <div
          className={`card ${flipped ? "is-flipped" : ""}`}
          style={mainCardStyle}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          role="button"
          tabIndex={0}
        >
          <div className="card-inner">
            <div
              ref={frontFaceRef}
              className={`card-face card-face--front ${
                isQcmCard ? "card-face--front-qcm" : ""
              }`}
            >
              <span className="card-tag">{card.section}</span>
              <p
                className="card-q"
                dangerouslySetInnerHTML={{ __html: questionHtml }}
              />
              {isQcmCard && card.qcmContext && (
                <p
                  className="qcm-context"
                  dangerouslySetInnerHTML={{ __html: contextHtml }}
                />
              )}
              {isQcmCard && card.qcmOptions && card.qcmOptions.length > 0 && (
                <div className="qcm-options">
                  {card.qcmOptions.map((option) => {
                    const isSelected = selectedQcmAnswer === option.raw;
                    return (
                      <button
                        key={option.raw}
                        type="button"
                        className={`qcm-option-btn ${isSelected ? "is-selected" : ""}`}
                        onPointerDown={(e) => e.stopPropagation()}
                        onPointerUp={(e) => e.stopPropagation()}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedQcmAnswers((prev) => ({
                            ...prev,
                            [card.id]: option.raw,
                          }));
                          setAutoFlipLock(true);
                          window.setTimeout(() => {
                            setFlipped(true);
                            setAutoFlipLock(false);
                          }, 180);
                        }}
                      >
                        <span className="qcm-option-label">{option.label}</span>
                        <span className="qcm-option-text">{option.text}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <div ref={backFaceRef} className="card-face card-face--back">
              <span className="card-tag card-tag--back">Answer</span>
              {isQcmCard ? (
                <div className="card-a qcm-answer">
                  {selectedQcmAnswer && (
                    <p className={`qcm-result ${isQcmCorrect ? "is-correct" : "is-wrong"}`}>
                      {isQcmCorrect ? "Correct" : "Incorrect"}
                    </p>
                  )}
                  <p>
                    <strong>Your choice:</strong>{" "}
                    {selectedQcmAnswer ?? "Not selected"}
                  </p>
                  <p>
                    <strong>Correct answer:</strong>{" "}
                    {card.qcmCorrectAnswer ?? card.answer}
                  </p>
                </div>
              ) : (
                <div
                  className="card-a"
                  dangerouslySetInnerHTML={{ __html: answerHtml }}
                />
              )}
              <div className="card-actions">
                <button
                  type="button"
                  className={`status-btn ${activeStatus === "learned" ? "is-active" : ""}`}
                  onPointerDown={(e) => e.stopPropagation()}
                  onPointerUp={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    void setCardStatus("learned");
                  }}
                >
                  👍 Learned
                </button>
                <button
                  type="button"
                  className={`status-btn ${activeStatus === "not_learned" ? "is-active" : ""}`}
                  onPointerDown={(e) => e.stopPropagation()}
                  onPointerUp={(e) => e.stopPropagation()}
                  onClick={(e) => {
                    e.stopPropagation();
                    void setCardStatus("not_learned");
                  }}
                >
                  👎 Not learned
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="hint">
        {deckType === "qcm"
          ? "Select option to reveal answer · swipe next · ← →"
          : "Tap to flip · swipe for next · ← → arrows · space to flip"}
      </p>
      {statusError && <p className="hint">{statusError}</p>}

      {isDone && (
        <button type="button" className="restart" onClick={reshuffle}>
          Restart deck
        </button>
      )}
    </main>
  );
}
