# Sara Ann Rutherford AI-Ops Rules Header

Project Code:

LFNYC-SAR

Project Name:

Sara Ann Rutherford

Business Line:

Client Projects under Little Fight NYC

Tier:

Tier 1 — plain static artist/portfolio site. **PLACEHOLDER repo** — no site source committed yet.

Risk:

Low — personal artist site; no forms / payments / regulated copy. The real risk is treating this placeholder repo as the source of truth when it is not.

Canonical Path:

/Users/davidmarsh/Desktop/LiFi NYC/Clients/Sara Ann Rutherford/sara-ann-rutherford

Remote:

https://github.com/omgitsthedm/sara-ann-rutherford.git  (default branch: `master`)

Host:

Netlify — project `sara-ann-rutherford` (primary URL `sara-ann-rutherford.netlify.app`). ⚠️ This git repo currently contains only `README.md`; per README the real source lives in the LiFi `02_CLIENTS` iCloud folder and has not finished downloading / been pushed. **Publish model UNVERIFIED — do not guess; confirm the deploy source before any push/deploy.**

Live URL:

`https://sara-ann-rutherford.netlify.app` (Netlify primary). README also references `https://saraann-final.netlify.app` — discrepancy to verify.

Stack:

Static artist website (per README; actual source not yet in this repo). No build step, no `package.json`.

## Commands

- Dev / preview: none defined (no source in repo). Once real site lands: serve statically (e.g. `npx serve .`); no build.
- Build: none (static).
- Deploy: Netlify (push = production deploy → gated by `APPROVE LIVE CHANGE`). ⚠️ Deploy linkage unverified — confirm the Netlify source before pushing.
- Lint/format: none defined.

## Locked Rules

- **LiFi brand:** orange `#FE5800` (hover `#FF6B35`), teal `#0891B2`, midnight `#080b14` / cards `#0d1120`, text `#f0f0ec` / muted `#9da1b0`; fonts Lexend + Caveat 700. Footer on every site: "Designed, Hosted and Cared For by LittleFightNYC.com" in orange.
- **Never publish prices** unless explicitly client-approved (LFNYC pricing doctrine).
- Mobile-first, WCAG AA contrast, body text 16px+. Respect `prefers-reduced-motion`.
- Images `.webp` + explicit `width`/`height` + lazy-load below fold.
- `git push` = production deploy → **gated** by `APPROVE LIVE CHANGE`. `.env`/secrets never read.
- **PLACEHOLDER:** this repo has no site source. Do not assume it is the deploy source; the real code lands from the `02_CLIENTS` iCloud folder later.
- **Before the real site is pushed:** add a `/.ai/*`, `/CLAUDE.md`, `/AGENTS.md` → 404 exclusion (or a `/*.md → 404` rule) to the site's `netlify.toml` so internal AI-Ops docs are never served publicly.

## Sara Ann Rutherford QA Harness Map

Observational (agent may run): `git status/log`, read source/config, static local serve, public GET to the live URL, read-only Netlify deploy metadata.

Transactional/gated (David-run / approved): `git push` / Netlify deploy; DNS/domain/env changes; any edit once real source lands; confirming/relinking the Netlify deploy source.
