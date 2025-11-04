# Purging the Legacy GitHub Pages Cache

Date: 2025-11-04

## Overview

The production site continued surfacing UI components from the pre-Next.js "old" implementation even after we migrated the repository and deleted the legacy code. Most notably, visitors still saw the old "Filters" button (`<button id="btn-filters">`) and the rest of the legacy DOM. This document breaks down how we reproduced the issue, traced it back to stale cached assets, and verified the fix—culminating in manually unregistering the legacy service worker via DevTools.

## Symptoms

| Symptom | Observation |
| ------- | ----------- |
| Legacy UI visible | Production showed the old site layout, including the `btn-filters` button. |
| Actions success but stale bundle | GitHub Actions workflow succeeded and produced the new bundle, yet browsers displayed the old UI. |
| Local export correct | `out/` directory locally matched the new App Router UI; no legacy assets present. |

## Detection

1. Verified the latest workflow artifact (`github-pages`) after the restructure. Zipped contents contained only Next.js static export assets (`_next`, `types/`, etc.) and no `old-site/` files.
2. Ran `grep -R "btn-filters"` against local sources, the `out/` export, and the artifact. No matches, confirming the new build lacks the legacy button.
3. Confirmed that direct `curl` to GitHub Pages produced new markup while the browser still served legacy UI, proving the discrepancy lived entirely in the client-side cache.

## Root Cause Analysis

- The legacy `sw.js` registered by the old site persisted in user browsers. It cached HTML/CSS/JS assets aggressively (offline-first strategy).
- Even after removing `old-site/`, users with a previously installed service worker continued to receive the outdated files from cache.
- The initial cleanup commit added `LegacyServiceWorkerCleanup` to the App Router providers; however, browsers that hadn't downloaded the new bundle retained the old service worker until a hard refresh or manual unregister.

## Resolution Steps

### 1. Remove Legacy Assets from the Repository

- Deleted `old-site/` directory entirely to guarantee no legacy code ships.
- Added `old-site/` to `.gitignore` so the archive can't return accidentally.
- Updated documentation to note the legacy site now lives only in Git history.

### 2. Add `bun deploy` Helper

- Created `scripts/deploy.ts` to run `build:pages`, enforce clean state, and `git push` to `main` to trigger Pages.
- Added `"deploy": "bun scripts/deploy.ts"` and documented `bun deploy` in the README.

### 3. Trigger Fresh Build & Deploy

- Ran `bun deploy`, which pushed commit `470acf1` and triggered the Pages workflow.
- The workflow artifact inspection confirmed only the new Next.js bundle was uploaded.
- Subsequent fixes added trailing slashes to every internal Pokémon link so SPA navigation always targets the exported directories. This prevented follow-up reports of blank pages after the service-worker purge.

### 4. Verify Production HTML

- Used `curl -sL https://bradleymatera.github.io/Interactive-Pokedex/` locally to fetch live HTML and piped through `grep -n "btn-filters"`. No matches (exit code 1), proving GitHub Pages serves the new markup.

### 5. Manual Service Worker Reset (Breakthrough)

- Recommended user actions:
  - Force-refresh with DevTools → Network → "Disable cache" → `Cmd+Shift+R`.
  - **Unregister the old service worker via DevTools → Application → Service Workers.**
  - Test in private/incognito mode to ensure the Next.js UI loads cleanly.

The manual unregister step was the silver bullet: as soon as the user removed the legacy service worker, the page reloaded with the new Next.js layout and the `btn-filters` button disappeared immediately.

## Verification Checklist

- [x] `old-site/` removed from repository and ignored.
- [x] `out/` export contains only Next.js bundle.
- [x] GitHub Pages artifact contains no legacy files.
- [x] `curl` output shows new App Router HTML without `btn-filters`.
- [x] User confirmed UI matches the new site after cache purge.

## Lessons Learned / Best Practices

1. **Purge or Update Service Workers** during migrations. Include runtime cleanup logic as we did, but plan for unavoidable caching edge cases in end-user browsers and document the DevTools unregister flow.
2. **Inspect workflow artifacts** any time production and local builds diverge. It quickly tells whether the CI build is correct.
3. **Provide a one-command deploy** (`bun deploy`) to ensure consistent build + push flow and reduce human error.
4. **Document cache-clearing steps** for QA and stakeholders. Service worker artifacts are notoriously persistent.
5. **Align SPA routing with static exports.** App Router links must include trailing slashes when deploying to GitHub Pages. Testing client navigation against the exported `out/` directory caught the final regression.

## Next Steps / Follow-ups

- Monitor GitHub Pages after future deploys to ensure legacy assets never reappear.
- Consider a versioned asset strategy or `Cache-Control` headers if additional caching issues surface.
- Optionally add a modal or toast in the app warning users to refresh if an old service worker is detected; consider showing explicit instructions for unregistering.

---

For reference: this fix landed in commit `470acf1c2c91b841f798d5236c7ecf94f53d5773` (`refactor: remove old site files and modules`) and subsequent actions triggered via `bun deploy`.
