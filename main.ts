// Entry for make.fun "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709).
//
// The entry itself is the post on X: a short video about an AI agent building
// the browser game "Solmar Bay: Sunset Heat" from one prompt, posted natively
// on X from a public account, its text carrying make.fun and our play code.
// The video (18 seconds, with music and sound effects) is the post; this
// program only hands the post's address to the grader.
// This program does the only thing the grader asks of code: it hands the
// post's address to the gate by copying POST.json from the repository root
// into /output. Nothing it writes about the post is scored; the house reads
// the post's views and interactions from X itself.
//
// Node 22, standard library only, no network.
//
// Run it locally the same way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outDir, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
