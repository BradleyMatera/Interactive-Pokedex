#!/usr/bin/env bun
import { $ } from "bun";

async function run() {
  const repoStatus = await $`git status --porcelain`.text();
  if (repoStatus.trim().length > 0) {
    console.error("\n✖ Cannot deploy with a dirty working tree. Commit or stash your changes first.\n");
    process.exitCode = 1;
    return;
  }

  const branch = (await $`git rev-parse --abbrev-ref HEAD`.text()).trim();
  if (branch !== "main") {
    console.error(`\n✖ Deploys must run from 'main' (current branch: '${branch}').\n`);
    process.exitCode = 1;
    return;
  }

  let upstream: string | null = null;
  try {
    upstream = (await $`git rev-parse --abbrev-ref --symbolic-full-name @{u}`.text()).trim();
  } catch {
    console.error("\n✖ Branch 'main' has no upstream. Run 'git push -u origin main' once, then retry.\n");
    process.exitCode = 1;
    return;
  }

  console.log("▶ Building static export (bun run build:pages)...");
  await $`bun run build:pages`;

  const ahead = (await $`git rev-list --count ${upstream}..HEAD`.text()).trim();
  const behind = (await $`git rev-list --count HEAD..${upstream}`.text()).trim();
  if (behind !== "0") {
    console.error("\n✖ Remote is ahead of local. Pull or rebase before deploying.\n");
    process.exitCode = 1;
    return;
  }
  if (ahead === "0") {
    console.log("ℹ No new commits to push. Deployment workflow already up to date.");
    return;
  }

  console.log("▶ Pushing latest commits to origin/main...");
  await $`git push`;

  console.log("\n✅ Deploy triggered. GitHub Actions will publish once the workflow finishes.\n");
}

run().catch((error) => {
  console.error("\n✖ bun deploy failed:\n", error);
  process.exit(1);
});
