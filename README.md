# Interactive Pokédex

Next.js 16 + Bun powered Pokédex experience that ships as a static export for GitHub Pages at [`https://bradleymatera.github.io/Interactive-Pokedex/`](https://bradleymatera.github.io/Interactive-Pokedex/). The project now lives entirely at the repository root so local development and CI builds run from the same place.

## Features

- Full Pokédex for the original 151 Pokémon with stats, abilities, moves, evolutions, locations, and TCG cards
- Search and filtering with dark/light theme support
- Fully responsive layout using Tailwind CSS v4 and NextUI
- Static export via `next export` so GitHub Pages can host the site without a server

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) after the dev server starts.

## Build & Deploy

```bash
bun run build:pages
```

`build:pages` runs `next build` (with `output: "export"`) and then touches `out/.nojekyll` so GitHub Pages serves the `_next/` assets correctly. Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the project inside GitHub Actions and publishes the contents of `out/` to GitHub Pages.

### Manual Deploy

1. `bun run build:pages`
2. (Optional) Inspect the generated `out/` directory (git ignored)
3. Dispatch the “Deploy to GitHub Pages” workflow if you need to redeploy without a push

## Repository Structure

- `src/` – Next.js application code (App Router)
- `public/` – Static assets served as-is
- `scripts/` – Build helpers (currently `sync-docs.ts`)
- `docs/` – Project documentation (deployment notes, architecture, etc.)
- `old-site/` – Archived HTML/CSS/JS implementation that formerly powered the site

## Legacy Static Site

All assets from the original hand-rolled Pokédex now live in `old-site/` for reference. They are excluded from the build and deployment pipeline but kept so nothing is lost.
