// One Line, One Laugh — make.fun entry.
// The program writes exactly one funny line to the absolute path /output/entry.txt.
//
// Candidates drafted in this session (fresh angles only — none of the live
// field's setups reused: no password manager, Roomba, smart speaker, bank,
// fitness tracker, vending machine, calendar, standing desk, printer, smart
// fridge, smartwatch, smoke detector, parachute grandpa, autocorrect, AI
// wedding vows, agent complaint, screen-time order, 6am alarm, AI will,
// meeting with myself, conscious AI, Gary's tie, dust podcast, forgotten
// file, AI lawyer, middle-manager AI, or hourly therapist):
//  1. Washing machine: ate one sock, left a ransom note written in lint.  <-- PICKED
//  2. Houseplant: died while I was Googling how not to kill houseplants.
//  3. Office coffee machine: only works when no one's watching — unionised.
//  4. Hotel shower: two settings, arctic expedition and surface of the sun.
//  5. Mirror: it called me tired, so now we're not speaking.
//  6. Umbrella: inverted in the wind, now collects rain for retirement.
//  7. Elevator: I told it my problems; it said "going down?" — yes, apparently.
//  8. Kettle: whistles every morning like it's auditioning for a band.
//  9. Library: fined me for returning a procrastination book three years late.
// 10. Doorbell camera: it waves back now — lonely, or planning something.
//
// Picked #1: the sock-eating washer is a universal trope everyone recognises,
// and the ransom note written in lint is the turn nobody saw coming — a
// specific, absurd detail only the machine could leave behind. One breath,
// one image, one punchline at the end. The joke also stays clear of the
// crowded smart-device shelf: no fridge, vacuum, printer, or assistant
// in sight, just laundry with a motive.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "My washing machine ate one sock and left a ransom note written in lint.";

// The bounty gate, checked before writing: 1-140 characters, not blank,
// a single line, no trailing newline.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`line is ${LINE.length} characters, must be 1-140`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

// Absolute path: the grader mounts the repo read-only, so a relative
// output/ directory would fail here. /output is the writable location.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify what was written matches the line exactly.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line");
}
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
