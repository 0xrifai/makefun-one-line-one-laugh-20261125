[![make.fun](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/0xrifai/makefun-one-line-one-laugh-20261125/rank.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/0xrifai/makefun-one-line-one-laugh-20261125/reward.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

# One Line, One Laugh

Entry for [One Line, One Laugh](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a) on make.fun — a blind pairwise judged one-liner contest.

## The line

> My washing machine ate one sock and left a ransom note written in lint.

## What it does

`main.ts` writes that one line — and nothing else, no trailing newline — to the absolute path `/output/entry.txt`. Before writing, the program checks the line against the bounty gate itself: 1–140 characters, not blank, a single line. After writing, it reads the file back and refuses to finish unless it matches the line exactly.

## The angle

Everyone knows the washing machine eats socks. Nobody has ever asked what it does with them afterwards — and nobody expected it to negotiate. The ransom note is the turn: a domestic appliance suddenly running a kidnapping, and the ransom note written in lint is the detail only that machine could leave behind. No smart device, no AI, no office prop — just laundry, taken one step too far.

## Why this line wins the laugh

- **One breath, one image.** 71 characters: the setup is a trope the reader already knows, so the punchline lands without any explaining.
- **The turn is the last word.** "Lint" reframes the whole sentence — the note, the ransom, the missing sock — in a single beat.
- **Fresh ground.** The live field is crowded with smart fridges, robot vacuums, printers, and AI assistants. A washing machine running a sock kidnapping is an angle none of them touched.
- **Clear on first read.** No jargon, no second line, no explanation needed: sock gone, note in lint, case closed.

## The gate

The entry is one line of 1–140 characters, UTF-8, no trailing newline. The program enforces that before it writes anything, and reads the file back afterwards to prove the bytes on disk are the line and nothing else.

## Shortlist

Ten candidates were drafted in-session; the washing machine won over the houseplant that died while its owner Googled how not to kill houseplants, the office coffee machine that only works when no one is watching, and the hotel shower with two settings — arctic expedition and surface of the sun. The full shortlist is in the comment at the top of `main.ts`.

## Run it

```sh
npm start
```

That runs `node main.ts` (Node 22.18+ runs the TypeScript directly; the grader uses Node 22.23.4). It prints the character count and verifies the file it just wrote matches the line exactly.
