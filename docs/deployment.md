# Deployment Guide

The Interactive Pokédex deploys to GitHub Pages using a static export produced by Next.js.

## Build Command

```bash
bun run build:pages
```

This script runs `next build` with `output: "export"`, which emits the static site into the `out/` directory. After the build completes a `.nojekyll` file is added to prevent GitHub Pages from treating directories that start with an underscore as special.

## GitHub Actions Workflow

- Workflow file: `.github/workflows/deploy.yml`
- Trigger: pushes to the `main` branch or manual dispatch
- Key steps:
  1. Check out the repository
  2. Install dependencies with Bun
  3. Execute `bun run build:pages`
  4. Upload the `out/` directory as the Pages artifact
  5. Deploy the artifact with `actions/deploy-pages`

## Manual Deployment Steps

1. Run `bun run build:pages`
2. Inspect the generated `out/` directory (note that it is git ignored)
3. Trigger the GitHub Pages workflow via the Actions tab if needed

The `docs/` directory is now reserved exclusively for documentation like this file.
