# Application Architecture

## Overview

The Interactive Pokédex is a Next.js 16 application running on the App Router. Bun is used as the package manager and runtime for scripts. The app is statically exported and hosted on GitHub Pages.

## Key Directories

- `src/app/` – App Router routes and layouts
- `src/components/` – Reusable UI components built with NextUI
- `src/contexts/` – React context for loading and caching Pokémon data
- `src/utils/` – Data fetching and transformation helpers
- `public/` – Static assets copied into the export verbatim

## Data Flow

1. `PokemonProvider` fetches Pokémon data from the PokéAPI when the app loads.
2. Components consume the context via the `usePokemon` hook.
3. Detail pages request additional data (evolution chain, moves, etc.) on demand.

## Styling

- Tailwind CSS v4 handles utility-first styling.
- NextUI components provide base UI building blocks.
- Custom styles live in `src/app/globals.css`.

## Deployment

The application exports to the `out/` directory using `next build` with `output: "export"`. GitHub Actions uploads the produced artifact to GitHub Pages.
