---
name: verify
description: Build, launch, and drive the Blackjack Trainer to verify changes at the browser surface.
---

# Verifying BlackJack-Trainer-v2

## Build & launch

```bash
npm install --ignore-scripts        # root: express for server.js
cd client && npm install && CI=true npm run build
PORT=3111 node server.js            # serves client/build
```

## Gotchas

- Tailwind v3 is compiled into the bundle via CRA's PostCSS integration
  (`client/tailwind.config.js` + `@tailwind` directives in `client/src/index.css`) —
  no CDN and no style-injection workaround needed.
- Drive with Playwright + system Chromium (`executablePath: '/opt/pw-browsers/chromium'`).
- Symbols (check/cross/flame/heartbreak) are inline SVGs from
  `src/components/Icons.js`, not emoji text — select scoreboard counters via
  their `title` attributes (e.g. `span[title="Correct decisions"]`).

## Flows worth driving

- Main menu → "Strategy Trainer" → "Tap to Deal" → action buttons
  (Hit/Stand/Double/Split) or keys A/S/D/F, Space to deal next hand.
- Grading feedback (✅/❌) is transient (1.5 s); the History sidebar result
  lines (`li span.text-yellow-300`) are a stable "round finished" signal.
- Streak box text is `N Streak!`, only rendered at N ≥ 2; "Streak Lost"
  banner replaces it for 1.5 s after a reset from ≥ 2.
- Actions are locked ~500 ms after each move — wait ≥ 700 ms between inputs.
