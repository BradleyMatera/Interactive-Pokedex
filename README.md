# Interactive Pokédex

Next.js 16 + Bun powered Pokédex experience that ships as a static export for GitHub Pages at [`https://bradleymatera.github.io/Interactive-Pokedex/`](https://bradleymatera.github.io/Interactive-Pokedex/). The project now lives entirely at the repository root so local development and CI builds run from the same place.

## Features

- Full Pokédex for the original 151 Pokémon with stats, abilities, moves, evolutions, locations, and TCG cards
- Search and filtering with dark/light theme support
- Fully responsive layout using Tailwind CSS v4 and NextUI
- Static export via `next export` so GitHub Pages can host the site without a server

## How It Works

- **Data providers.** `PokemonProvider` and `ItemProvider` bootstrap the app by fetching the first‑generation roster and the curated item dex on the client. They expose memoised lists and loading state via the `usePokemon` and `useItems` hooks so cards, search, and the item directory all stay in sync.
- **Static detail pages.** `src/app/pokemon/[name]/page.tsx` enumerates every supported Pokémon through `generateStaticParams`. During `next build` each entry calls `fetchPokemonDetails`, assembling evolutions, items, moves, and location metadata from the PokéAPI and baking the result into the exported HTML.
- **Hybrid rendering.** List and search views are client components (for interactivity and filtering), while the heavy data aggregation happens ahead of time. This keeps runtime requests light—visiting a Pokémon detail page is a purely static experience backed by prerendered JSON streams.
- **UI composition.** NextUI widgets provide accessible building blocks (Tabs, Dropdowns, Cards), Tailwind supplies utility classes, and shared helpers (for sprite galleries, typographic gradients, etc.) live in `src/components/`.
- **Routing guarantees.** Every internal link now includes a trailing slash so client navigation aligns with the exported directory structure (`/pokemon/<name>/`). Paired with the runtime `LegacyServiceWorkerCleanup`, this ensures the GitHub Pages build serves the latest bundle without white screens or cached legacy assets.

## Production Status

- The GitHub Pages deployment is now fully navigable again; internal links and search results include trailing slashes so client-side routing matches the exported file structure.

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

### One-Command Deploy

```bash
bun deploy
```

`bun deploy` verifies the working tree is clean, ensures you are on `main`, builds the static export, and pushes commits to `origin/main` so the Pages workflow kicks off automatically.

### Manual Deploy

1. `bun run build:pages`
2. (Optional) Inspect the generated `out/` directory (git ignored)
3. Dispatch the “Deploy to GitHub Pages” workflow if you need to redeploy without a push

## Repository Structure

- `src/` – Next.js application code (App Router)
- `public/` – Static assets served as-is
- `scripts/` – Build helpers (currently `sync-docs.ts`)
- `docs/` – Project documentation (deployment notes, architecture, etc.)

## Legacy Static Site

The legacy hand-rolled Pokédex has been removed from the repository to guarantee it can’t ship with the production build. If you ever need those assets again, retrieve them from the Git history instead of reintroducing them to `main`.
