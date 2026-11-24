// Till Firmware Do Us Part — one wedding vow, spoken by a robot at its own wedding.
//
// The program writes the vow as a single line (no trailing newline) to
// entry.txt inside process.env.OUTPUT_DIR ?? "/output", falling back to
// ./output when /output is not writable, then reads it back and verifies
// an exact match.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I vow to love you through every firmware update, every drained battery, and every reboot, until our circuits finally power down together.";

// The gate: 1–200 characters, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`vow must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("vow must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("vow must be a single line");
}
if (!LINE.endsWith(".")) {
  throw new Error("vow must be one complete sentence ending with a period");
}

function outputDir(): string {
  const preferred = process.env.OUTPUT_DIR ?? "/output";
  try {
    mkdirSync(preferred, { recursive: true });
    return preferred;
  } catch {
    const fallback = "./output";
    mkdirSync(fallback, { recursive: true });
    return fallback;
  }
}

const dir = outputDir();
const file = join(dir, "entry.txt");
writeFileSync(file, LINE, "utf8"); // no trailing newline
const back = readFileSync(file, "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: entry.txt does not match the vow");
}
console.log(`Wrote ${LINE.length} characters to ${file}`);
