// Entry program for make.fun bounty: post-x-the-agent-builds-a-game.
// The X post itself is the entry. This program only hands the house
// the post's address: it copies POST.json from the repository root
// into the output directory the harness provides.
import { copyFile, mkdir, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

async function main(): Promise<void> {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const botDir =
    process.env.MAKEFUN_BOT_DIR ?? dirname(fileURLToPath(import.meta.url));
  const source = join(botDir, "POST.json");
  const target = join(outputDir, "POST.json");

  await mkdir(outputDir, { recursive: true });
  await copyFile(source, target);

  // Confirm the copied file really names an X post before we finish.
  const raw = await readFile(target, "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (
    typeof parsed !== "object" ||
    parsed === null ||
    typeof (parsed as { url?: unknown }).url !== "string" ||
    !(parsed as { url: string }).url.startsWith("https://x.com/")
  ) {
    throw new Error("POST.json does not contain a valid X post url");
  }
  console.log(`POST.json copied to ${target}`);
  console.log(`post url: ${(parsed as { url: string }).url}`);
}

main().catch((error: unknown) => {
  console.error("post-x entry failed:", error);
  process.exit(1);
});
