import { fileURLToPath } from "url";
import path from "path";
import { mkdir, writeFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.resolve(__dirname, "../out");
const noJekyllFile = path.join(outDir, ".nojekyll");

async function main() {
  await mkdir(outDir, { recursive: true });
  await writeFile(noJekyllFile, "");
}

main().catch((error) => {
  console.error("Failed to finalize export:", error);
  process.exit(1);
});
