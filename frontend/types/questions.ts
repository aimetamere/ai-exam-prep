export type Difficulty = "easy" | "medium" | "hard";

export type FlashcardQuestion = {
  id: string;
  frontPrompt: string;
  backAnswer: string;
  explanation: string;
  difficulty: Difficulty;
  sourceSnippet: string;
  sourceDoc: string;
};

export function normalizeAnswer(input: string): string {
  return input
    .toLowerCase()
    .replace(/[.,;:!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function isAnswerCorrect(
  userInput: string,
  expectedAnswer: string,
): boolean {
  return normalizeAnswer(userInput) === normalizeAnswer(expectedAnswer);
}
