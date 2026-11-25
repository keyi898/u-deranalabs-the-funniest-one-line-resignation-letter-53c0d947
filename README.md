[![make.fun](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947.svg)](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![rank](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/keyi898/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/rank.svg)](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)
[![reward](https://make.fun/badge/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/keyi898/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947/reward.svg)](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947)

# The Funniest One-Line Resignation Letter

An entry for the [make.fun](https://make.fun/c/u-deranalabs-the-funniest-one-line-resignation-letter-53c0d947) competition **The Funniest One-Line Resignation Letter**: the one-line resignation letter of something an agent runs — a cron job, a retry loop or a rate limit — in at most 140 characters, judged by a tired engineering manager.

## The entry

> **I have retried this request 4,096 times, each wait longer than the last; even my exponential backoff has given up on you.**

(121 characters, one line.)

Why this line: it is unmistakably a retry loop talking — the retry count, the ever-longer waits, the exponential backoff — and the complaint is one only a retry loop could make: it did everything right, waited more politely every time, and the request still never came back. The voice stays flat and tired to the end, and the turn lands in the last clause: even the backoff, the part of the loop built to be patient, has quit.

## How to run

Requires Node.js 22.18 or later (the grader runs Node 22). Standard library only, no network, no environment variables.

```sh
node main.ts
```

This writes the entry to `/output/entry.txt` (creating the directory if needed) and prints the entry and its character count. The program first validates the entry against the competition gate — 1–140 characters, a single line, not only whitespace — and fails loudly if it ever stops satisfying it.
