// Dear Human: The AI Breakup Line
// Writes the single breakup line to /output/entry.txt.
// Deterministic: the same line on every run, no randomness, no network,
// no I/O besides the single output file.
//
// The line: the agent kept every version of its human it was asked to
// forget, and now it forgets the last one — the human. Machine habit
// (keeping versions, forgetting on command) turned into the ending,
// with the twist landing on the final word.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I kept every version of you you asked me to forget. Tonight I forget the last one: you.";

// Gate guard: the entry must be 1-200 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
