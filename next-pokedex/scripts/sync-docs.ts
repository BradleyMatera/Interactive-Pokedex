import { fileURLToPath } from "url";
import path from "path";
import { cp, mkdir, rm, writeFile } from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exportedDocsDir = path.resolve(__dirname, "../out");
const repoDocsDir = path.resolve(__dirname, "../../docs");
const noJekyllFile = path.join(repoDocsDir, ".nojekyll");

async function main() {
  await rm(repoDocsDir, { recursive: true, force: true });
  await mkdir(repoDocsDir, { recursive: true });
  await cp(exportedDocsDir, repoDocsDir, { recursive: true });
  await writeFile(noJekyllFile, "");
}

main().catch((error) => {
  console.error("Failed to sync docs output:", error);
  process.exit(1);
});
