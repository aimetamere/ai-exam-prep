/// <reference types="node" />
const { mkdirSync, readdirSync, readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

type Difficulty = "easy" | "medium" | "hard";

type Flashcard = {
  id: string;
  frontPrompt: string;
  backAnswer: string;
  explanation: string;
  difficulty: Difficulty;
  sourceSnippet: string;
  sourceDoc: string;
};

const PROJECT_ROOT = process.cwd();
const MARKDOWN_DIR = join(PROJECT_ROOT, "md_exports");
const OUTPUT_DIR = join(PROJECT_ROOT, "frontend", "data");
const OUTPUT_PATH = join(OUTPUT_DIR, "question-bank.json");

const MAX_CARDS = 500;
const MIN_CARDS = 120;

const stopWords = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "that",
  "this",
  "your",
  "have",
  "will",
  "into",
  "about",
  "using",
  "what",
  "when",
  "where",
  "which",
  "while",
  "been",
  "their",
  "course",
  "slide",
  "these",
  "those",
  "they",
  "them",
  "also",
  "such",
]);

function cleanMarkdownLine(line: string): string {
  return line
    .replace(/^#+\s*/, "")
    .replace(/^\s*[-*+]\s*/, "")
    .replace(/^\s*\d+\.\s*/, "")
    .replace(/[*_`>|]/g, "")
    .replace(/\[(.*?)\]\(.*?\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function shouldKeepLine(line: string): boolean {
  if (line.length < 35 || line.length > 220) {
    return false;
  }
  if (line.includes("{") || line.includes("}") || line.includes("=>")) {
    return false;
  }
  if (/^[#/*.\-_=;:()[\]'"0-9\s]+$/.test(line)) {
    return false;
  }
  return true;
}

function sanitizeAnswer(answer: string): string {
  return answer
    .replace(/\s+/g, " ")
    .replace(/[.;:,]$/, "")
    .trim();
}

function inferDifficulty(sourceSnippet: string): Difficulty {
  const words = sourceSnippet.split(/\s+/).length;
  if (words < 14) {
    return "easy";
  }
  if (words < 22) {
    return "medium";
  }
  return "hard";
}

function extractTerms(text: string): string[] {
  const words = text.match(/[A-Za-z][A-Za-z0-9-]{4,}/g) ?? [];
  return words.filter((word) => !stopWords.has(word.toLowerCase()));
}

function buildDefinitionCard(
  sourceSnippet: string,
  sourceDoc: string,
): Flashcard | null {
  const match = sourceSnippet.match(
    /^(.{3,90}?)\s+(is|are|means|refers to|can be defined as)\s+(.{8,180})$/i,
  );
  if (!match) {
    return null;
  }

  const subject = sanitizeAnswer(match[1]);
  const predicate = sanitizeAnswer(match[3]);
  if (subject.split(" ").length > 10 || predicate.length < 10) {
    return null;
  }

  const frontPrompt = `What is ${subject}?`;
  return {
    id: "",
    frontPrompt,
    backAnswer: predicate,
    explanation: `This answer is grounded in the source statement about ${subject}.`,
    difficulty: inferDifficulty(sourceSnippet),
    sourceSnippet,
    sourceDoc,
  };
}

function buildClozeCard(sourceSnippet: string, sourceDoc: string): Flashcard | null {
  const terms = [...new Set(extractTerms(sourceSnippet))];
  const answer = terms[0];
  if (!answer || answer.length < 5) {
    return null;
  }

  const regex = new RegExp(`\\b${answer}\\b`, "i");
  if (!regex.test(sourceSnippet)) {
    return null;
  }

  const prompt = `Fill in the missing term: ${sourceSnippet.replace(regex, "_____")}`;
  if (prompt.includes("_____") === false) {
    return null;
  }

  return {
    id: "",
    frontPrompt: prompt,
    backAnswer: answer,
    explanation: "The missing term is directly present in the supporting source quote.",
    difficulty: inferDifficulty(sourceSnippet),
    sourceSnippet,
    sourceDoc,
  };
}

function passesFactCheck(card: Flashcard): boolean {
  const normalizedSnippet = card.sourceSnippet.toLowerCase();
  const normalizedAnswer = card.backAnswer.toLowerCase().trim();
  if (!normalizedAnswer || normalizedAnswer.length < 2) {
    return false;
  }
  return normalizedSnippet.includes(normalizedAnswer);
}

function dedupeCards(cards: Flashcard[]): Flashcard[] {
  const seen = new Set<string>();
  const output: Flashcard[] = [];

  for (const card of cards) {
    const key = `${card.frontPrompt.toLowerCase()}|${card.backAnswer.toLowerCase()}`;
    if (seen.has(key)) {
      continue;
    }
    seen.add(key);
    output.push(card);
  }

  return output;
}

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function generateQuestionBank(): Flashcard[] {
  const markdownFiles = readdirSync(MARKDOWN_DIR).filter((name) =>
    name.toLowerCase().endsWith(".md"),
  );

  const candidates: Flashcard[] = [];

  for (const fileName of markdownFiles) {
    const fullPath = join(MARKDOWN_DIR, fileName);
    const sourceDoc = fileName.replace(/\.md$/i, "");
    const raw = readFileSync(fullPath, "utf8");
    const lines = raw.split("\n");

    for (const line of lines) {
      const sourceSnippet = cleanMarkdownLine(line);
      if (!shouldKeepLine(sourceSnippet)) {
        continue;
      }

      const definition = buildDefinitionCard(sourceSnippet, sourceDoc);
      if (definition && passesFactCheck(definition)) {
        candidates.push(definition);
      }

      const cloze = buildClozeCard(sourceSnippet, sourceDoc);
      if (cloze && passesFactCheck(cloze)) {
        candidates.push(cloze);
      }
    }
  }

  const deduped = dedupeCards(candidates);
  const selected = shuffle(deduped).slice(0, MAX_CARDS);

  return selected.map((card, index) => ({
    ...card,
    id: `card-${index + 1}`,
  }));
}

function main() {
  const bank = generateQuestionBank();
  if (bank.length < MIN_CARDS) {
    throw new Error(
      `Question bank too small: ${bank.length}. Need at least ${MIN_CARDS}.`,
    );
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(bank, null, 2)}\n`, "utf8");

  console.log(`Generated ${bank.length} flashcards at ${OUTPUT_PATH}`);
}

main();
