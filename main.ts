// Entry for the make.fun competition "The Funniest One-Line Resignation Letter"
// (slug: u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947).
//
// The program writes exactly one text to /output/entry.txt: the one-line
// resignation letter of a retry loop, at most 140 characters. A sealed gate
// scorer checks the file is UTF-8 text of 1-140 characters, not only white
// space, before the judge ever sees it.
//
// The resignation letter, in the voice of a retry loop that did everything
// right — retried, waited longer every time — and was never answered.
const ENTRY =
  "I have retried this request 4,096 times, each wait longer than the last; even my exponential backoff has given up on you.";

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// Validate against the competition gate before writing anything.
const chars = [...ENTRY].length;
if (chars < 1 || chars > 140) {
  throw new Error(`entry must be 1-140 characters, got ${chars}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, ENTRY + "\n", "utf8");

console.log(ENTRY);
console.log(`(${chars} characters, written to ${OUT})`);
