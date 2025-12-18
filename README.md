# Interactive Pokédex

https://bradleymatera.github.io/Interactive-Pokedex/

## 1. Project Overview

Interactive Pokédex is a small Next.js 16 web app that statically publishes a Pokédex for the first 151 Pokémon. It is an educational, fan-made project that demonstrates static export to GitHub Pages, client-side search/filtering, and prerendered detail pages. Pokémon names, images, and data belong to their respective owners; this project is not affiliated with Nintendo, Game Freak, or The Pokémon Company.

## 2. Project Intent and Scope

- Showcase how to combine Next.js App Router with static export (`output: "export"`) for GitHub Pages.
- Practice working with client-side data providers for list/search views while prerendering heavy detail pages.
- Keep scope to Generation 1 data: basic stats, moves (first 10), evolution chains, and a curated item list.
- Stay fan-made and non-commercial.

## 3. How the Application Works

User perspective:
1. Home page lists the 151 Pokémon with search and pagination. Cards link to `/pokemon/{name}/`.
2. Search page filters the in-memory list and links directly to detail pages.
3. Item Dex lists items with search/pagination.
4. Detail pages show prerendered data (sprites, stats, moves, evolutions, and placeholder locations).

System perspective:
1. On the client, `PokemonProvider` and `ItemProvider` fetch the full Pokémon list and item list from PokéAPI when the app loads. These lists drive the home/search/item pages.
2. At build time, `generateStaticParams` enumerates the 151 names. `fetchPokemonDetails` runs for each name to collect sprites, species info, moves (first 10), evolution chain, and item interactions. The results are serialized into the static HTML so detail pages load without runtime API calls.
3. Routing uses trailing slashes to match the static export layout (`/pokemon/bulbasaur/` maps to `out/pokemon/bulbasaur/index.html`).
4. The app renders client components for interactive areas (search, theme toggle, pagination) and server components for layouts/pages.

## 4. Technical Architecture (routing, data flow, rendering)

- Routing: Next.js App Router in `src/app`. Static routes for home, search, items, types. Dynamic route for `/pokemon/[name]/` with `generateStaticParams`.
- Data flow:
  - Grid/search/item pages: client-side fetch via `PokemonProvider` and `ItemProvider` using `fetchAllPokemon` / `fetchAllItems`.
  - Detail pages: build-time fetch via `fetchPokemonDetails` (sprites, species, evolutions, first 10 moves, basic item interactions, placeholder locations).
- Rendering:
  - Home/search/items/types: client components for interactivity, hydrated with provider data.
  - Detail pages: prerendered HTML with serialized data; no runtime API calls needed on navigation.
- Styling: Tailwind CSS v4 and NextUI components with a light/dark theme toggle.
- Static export: `next.config.ts` sets `output: "export"`, `trailingSlash: true`, and `assetPrefix/basePath` for GitHub Pages.

## 5. Deployment Model and Constraints

- Hosting: GitHub Pages at `/Interactive-Pokedex/`.
- Build: `bun run build:pages` runs `next build` with static export and writes `out/.nojekyll`.
- Deployment: GitHub Actions workflow publishes `out/` to Pages on pushes to `main` (or via manual dispatch). `bun deploy` wraps build + push.
- Constraints: No server-side rendering at runtime; all routes must exist as static files. Links must include trailing slashes. Image optimization is disabled (`unoptimized: true`) and remote image hosts are whitelisted.

## 6. Known Issues and Limitations

- Client-side fetching: Home/search/item views rely on client fetches to PokéAPI on first load; slow networks can delay initial data.
- Move data: Only the first 10 moves are fetched per Pokémon.
- Location data: Uses placeholder locations (not a live query).
- Item interactions: Limited to held items and evolution item contexts; not a full item encyclopaedia.
- Routing: Internal links use trailing slashes to match the export; avoid removing them.
- Theme: Light/dark toggle switches CSS variables; if system overrides are forced, behavior depends on browser settings.
- Not official: This is an unofficial, fan-made, non-commercial project.

## 7. Educational Value and Learning Goals

- Demonstrate static export with the Next.js App Router for GitHub Pages.
- Show a hybrid data strategy: client providers for lists, build-time fetch for heavy detail pages.
- Practice handling remote sprites without Next.js image optimization.
- Illustrate trailing-slash routing for static hosting and how to align client navigation with exported files.
- Provide a concise example of light/dark theming with NextUI and Tailwind on the App Router.
