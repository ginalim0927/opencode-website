# AGENTS.md

## Project constraints

- Static one-page website; no build step, no frameworks, no CDN, no dependencies.
- Only three source files: `index.html`, `style.css`, and `script.js`. Do not add
  other source files unless explicitly requested.
- Plain HTML / CSS / vanilla JavaScript only; no package installation or bundlers.
- Must work at narrow and wide browser widths and with keyboard navigation.
- Use semantic HTML, readable CSS, and a small script.
- Theme interaction: light/dark toggle via `data-theme` attribute on `<html>`,
  persisted in `localStorage`, defaulting from `prefers-color-scheme`.
- Keep all work inside this project directory.
- Do not commit, push, deploy, install anything, or start a server without
  explicit user approval.
- Serve only on localhost when running locally.

## Commands

- No build step. Run a local static server, e.g. `python3 -m http.server 8000`,
  then open <http://localhost:8000>.
