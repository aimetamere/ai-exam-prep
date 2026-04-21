/// <reference types="vite/client" />

import "./page.css";
import React, { useEffect, useMemo, useRef, useState } from "react";
import flashcardsMarkdown from "../md_exports/flashcards.md?raw";
import flashcardsDefinitionsMarkdown from "../md_exports/flashcards-def.md?raw";

type Flashcard = {
  id: string;
  cardNumber: number;
  section: string;
  question: string;
  answer: string;
};

type DeckType = "main" | "definitions";
type CardStatus = "learned" | "not_learned";
type StatusMap = Record<string, CardStatus>;

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

    const sectionMatch = line.match(/^##\s+(.*)$/);
    if (sectionMatch && !line.startsWith("### ")) {
      flush();
      currentSection = sectionMatch[1].trim();
      continue;
    }

    const cardMatch = line.match(/^###\s+Card\s+(\d+)\s*$/i);
    if (cardMatch) {
      flush();
      cardNumber = Number(cardMatch[1]);
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

function parseDefinitionFlashcards(markdown: string): Flashcard[] {
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
        id: `def-${runningNumber}`,
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

function getOrCreateUserId(): string {
  const existing = window.localStorage.getItem(USER_ID_STORAGE_KEY);
  if (existing) return existing;
  const id = crypto.randomUUID();
  window.localStorage.setItem(USER_ID_STORAGE_KEY, id);
  return id;
}

export default function Page() {
  const [deckType, setDeckType] = useState<DeckType>("main");
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [statusByCard, setStatusByCard] = useState<StatusMap>({});
  const [statusError, setStatusError] = useState<string | null>(null);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [drag, setDrag] = useState(0);
  const [exit, setExit] = useState<null | "left" | "right">(null);
  const dragStartX = useRef<number | null>(null);
  const lastPointerX = useRef<number | null>(null);
  const lastPointerTime = useRef<number | null>(null);
  const swipeVelocity = useRef(0);
  const dragMoved = useRef(false);
  const userIdRef = useRef<string | null>(null);

  const applyDragResistance = (dx: number) =>
    Math.tanh(dx / MAX_DRAG) * MAX_DRAG;

  useEffect(() => {
    userIdRef.current = getOrCreateUserId();
  }, []);

  useEffect(() => {
    try {
      const isDefinitionsDeck = deckType === "definitions";
      const source = isDefinitionsDeck
        ? flashcardsDefinitionsMarkdown
        : flashcardsMarkdown;
      if (!source.trim()) {
        throw new Error(
          isDefinitionsDeck
            ? "flashcards-def.md is empty."
            : "flashcards.md is empty.",
        );
      }
      const parsed = isDefinitionsDeck
        ? parseDefinitionFlashcards(source)
        : parseFlashcards(source);
      if (parsed.length === 0) {
        throw new Error(
          isDefinitionsDeck
            ? "No cards parsed from flashcards-def.md."
            : "No cards parsed from flashcards.md.",
        );
      }
      setDeck(shuffle(parsed));
      setStatusByCard({});
      setStatusError(null);
      setLoadError(null);
      setIndex(0);
      setFlipped(false);
      setDrag(0);
      setExit(null);
    } catch (err) {
      setDeck([]);
      setLoadError(err instanceof Error ? err.message : "Unknown error");
    }
  }, [deckType]);

  useEffect(() => {
    if (!userIdRef.current || deck.length === 0) return;
    const aborter = new AbortController();

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
        setStatusByCard(payload.statuses ?? {});
        setStatusError(null);
      } catch (err) {
        if (aborter.signal.aborted) return;
        setStatusError(
          err instanceof Error ? err.message : "Could not load statuses",
        );
      }
    };

    void loadStatuses();
    return () => aborter.abort();
  }, [deck, deckType]);

  const card = deck[index];
  const upcoming = deck[index + 1];
  const total = deck.length;

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
    const cardId = card.id;
    const previous = statusByCard[cardId];
    setStatusByCard((current) => ({ ...current, [cardId]: nextStatus }));
    setStatusError(null);

    try {
      const response = await fetch("/api/card-status", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-user-id": userIdRef.current,
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
      setStatusByCard((current) => {
        const copy = { ...current };
        if (previous) copy[cardId] = previous;
        else delete copy[cardId];
        return copy;
      });
      setStatusError(
        err instanceof Error ? err.message : "Could not save status",
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
    if (exit) return;
    dragStartX.current = e.clientX;
    lastPointerX.current = e.clientX;
    lastPointerTime.current = performance.now();
    swipeVelocity.current = 0;
    dragMoved.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragStartX.current === null || exit) return;
    const dx = e.clientX - dragStartX.current;
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
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    dragStartX.current = null;
    lastPointerX.current = null;
    lastPointerTime.current = null;

    if (!dragMoved.current) {
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
    return (
      <main className="stage">
        <p className="hint">Loading…</p>
      </main>
    );
  }

  const isDone = index >= total - 1 && exit === "left";
  const progress = ((index + 1) / total) * 100;
  const activeStatus = card ? statusByCard[card.id] : null;

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
          ↻
        </button>
        <button
          type="button"
          className="deck-switch"
          onClick={() =>
            setDeckType((current) =>
              current === "main" ? "definitions" : "main",
            )
          }
          aria-label={
            deckType === "main"
              ? "Switch to definition cards"
              : "Switch to main cards"
          }
          title={
            deckType === "main"
              ? "Switch to definition cards"
              : "Switch to main cards"
          }
        >
          {deckType === "main" ? "Definitions" : "Main"}
        </button>
      </div>

      <div className="deck">
        {upcoming && (
          <div className="card card--peek" aria-hidden="true">
            <div className="card-face card-face--front">
              <p
                className="card-q"
                dangerouslySetInnerHTML={{ __html: upcomingQuestionHtml }}
              />
            </div>
          </div>
        )}

        <div
          className={`card ${flipped ? "is-flipped" : ""}`}
          style={cardStyle}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          role="button"
          tabIndex={0}
        >
          <div className="card-inner">
            <div className="card-face card-face--front">
              <span className="card-tag">{card.section}</span>
              <p
                className="card-q"
                dangerouslySetInnerHTML={{ __html: questionHtml }}
              />
            </div>

            <div className="card-face card-face--back">
              <span className="card-tag card-tag--back">Answer</span>
              <div
                className="card-a"
                dangerouslySetInnerHTML={{ __html: answerHtml }}
              />
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
        Tap to flip · swipe for next · ← → arrows · space to flip
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
