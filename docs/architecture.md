# Application Architecture

## Overview

The Interactive Pokédex is a Next.js 16 application running on the App Router. Bun powers package management and build tooling. The app is designed for static export and is published to GitHub Pages, so every page must resolve to a concrete HTML file inside `out/`.

## Key Directories

- `src/app/` – App Router routes, layouts, route-specific loading states, and shared providers
- `src/components/` – Reusable UI components (cards, detail views, list wrappers, loading indicators)
- `src/contexts/` – React providers that orchestrate client-side data hydration for Pokémon and items
- `src/utils/` – Data fetching and transformation helpers that normalize PokéAPI responses into UI-friendly shapes
- `public/` – Static assets copied into the export verbatim (favicons, manifest stubs, etc.)

## Runtime Model

The application blends prerendered detail pages with client-side interactivity:

1. **Providers & grid bootstrapping.** `PokemonProvider` and `ItemProvider` run as client components seeded in `src/app/providers.tsx`. On first render they call `fetchAllPokemon`/`fetchAllItems`, cache the result in state, and expose loading/error status through hooks. The list view, search page, and item dex all read from those providers so a single network fetch populates multiple surfaces.
2. **Static Pokémon pages.** `src/app/pokemon/[name]/page.tsx` enumerates the Gen 1 roster via `generateStaticParams`. During `next build` each entry calls `fetchPokemonDetails`, which collates stats, sprite variants, moves, evolution requirements, and item interactions. The response becomes a serialized payload streamed with the prerendered HTML, so visiting `/pokemon/bulbasaur/` never issues runtime API calls.
3. **Client navigation.** Routes generated in the grid, search results, and item references include trailing slashes. This keeps the client router aligned with the static export (which writes to `/pokemon/bulbasaur/index.html`). The layout also ships `LegacyServiceWorkerCleanup` to unregister the pre-migration cache so the static bundle always wins.
4. **UI composition.** Presentation combines Tailwind CSS utilities, NextUI primitives, and custom spritesheet helpers. Dynamic interactions—sprite drop-downs, tab groups, search filtering—are all implemented inside client components layered on top of the static data.

## Styling

- Tailwind CSS v4 handles utility-first styling.
- NextUI components provide accessible, theme-aware primitives (Tabs, Dropdowns, Buttons, Cards, Chips).
- Custom styles and theme overrides live in `src/app/globals.css`, while gradient/type color helpers live in dedicated hooks.

## Deployment Considerations

- `bun run build:pages` executes `next build` with `output: "export"`, emits HTML into `out/`, drops `.nojekyll`, and honours `basePath`/`assetPrefix` so GitHub Pages loads static assets from `/Interactive-Pokedex/_next/...`.
- Links must preserve trailing slashes to match exported directory names; this is enforced in `PokemonCard`, search navigation, and other client-side pushes.
- The GitHub Actions workflow (`deploy.yml`) mirrors the local build and publishes the generated artifact to GitHub Pages.
