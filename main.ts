import { mkdirSync as makeDir, writeFileSync as save } from "node:fs";

// One emoji for a stranger's smile: a baby chick. Small, soft and
// unmistakably cheerful at a glance — cute enough to make anyone smile,
// with no joke that could land wrong and nothing intimate about it.
const emoji = "🐥";

const glyphs = Array.from(emoji);
if (glyphs.length !== 1) {
  throw new Error("expected one emoji, counted " + glyphs.length);
}
if (emoji.trim() === "") {
  throw new Error("entry must not be blank");
}
if (emoji.length > 8) {
  throw new Error("entry must be at most 8 characters, got " + emoji.length);
}

const folder = process.env.MAKEFUN_OUTPUT_DIR || "/output";
makeDir(folder, { recursive: true });
save(folder + "/entry.txt", emoji, "utf8");
console.log("wrote", emoji);
