# Sara Ann Rutherford AI-Ops State

## Identity

- Project Code: LFNYC-SAR
- Name: Sara Ann Rutherford
- Tier: Tier 1 · Risk: Low (static artist site; PLACEHOLDER repo)
- Canonical Path: /Users/davidmarsh/Desktop/LiFi NYC/Clients/Sara Ann Rutherford/sara-ann-rutherford
- Git-backed: yes · Remote: https://github.com/omgitsthedm/sara-ann-rutherford.git · Default branch: `master`

## Current Stamp

- Updated: 2026-06-28
- Updated By: Claude
- Basis: AI-Ops onboarding (handoff-ready). Read-only scope.
- Git HEAD at onboarding: 36c35f6

## Rules Version

- 2026-06-27-aiops-foundation-v1

## State Confidence

- High for path/repo/branch/remote. LOW for stack/build/publish-model/live-source — repo is a placeholder (README only); per README the real source is still in the `02_CLIENTS` iCloud folder and the Netlify deploy linkage is unverified.

## Current Live Truth

- Live URL: `https://sara-ann-rutherford.netlify.app` (Netlify project `sara-ann-rutherford`, primary URL; current deploy state: ready). README also cites `https://saraann-final.netlify.app` — unverified discrepancy.
- Host: Netlify. Publish model UNVERIFIED — this git repo holds only README.md; live content is not confirmed to deploy from here.
- Production QA status: not run by AI-Ops.

## Repo State

- Branch `master`, in sync with origin at onboarding; clean working tree.
- Contents: README.md only (placeholder). No `netlify.toml`, no `package.json`, no site source.

## Risk / Compliance

- Low. No forms, payments, or regulated copy.
- LFNYC pricing doctrine applies: never publish prices without client approval.

## QA-PENDING

- Confirm the Netlify deploy source for `sara-ann-rutherford` (GitHub repo, manual deploy, or another project?).
- Resolve live-URL discrepancy (`sara-ann-rutherford.netlify.app` vs `saraann-final.netlify.app`).
- Get the real site source committed from the `02_CLIENTS` iCloud folder, then re-onboard stack/build/publish facts.
- Before any deploy of real content: add a `/.ai/*` + `/CLAUDE.md` + `/AGENTS.md` (or `/*.md`) → 404 exclusion to the future `netlify.toml`.

## Do Not Touch

- `.env`/secrets.
- `git push` to `master` (= production deploy) without clear, scoped confirmation from David.
- The Netlify deploy linkage / domain config (confirm before changing).

## Proposed Changes / Inbox

- None yet.

## Next Steps Queue

- Verify Netlify deploy source + live URL.
- Land real site source from iCloud `02_CLIENTS`, then re-onboard.

## Recent Session History

- 2026-06-28: Claude onboarded Sara Ann Rutherford to AI-Ops (handoff-ready). Created `.ai/{LOCK,RULES_HEADER,RULES,STATE}.md` + `AGENTS.md` + `CLAUDE.md` (Commands + AI-Ops pointer). No source/content change. Repo is a placeholder (README only); no `netlify.toml` exists so no exposure redirect was added (flagged for when real source lands).

## Next Agent Directive

Read `.ai/RULES.md` + `.ai/STATE.md` + `CLAUDE.md` first. This is a PLACEHOLDER repo (README only) — real source still in iCloud `02_CLIENTS`, Netlify deploy linkage unverified. Static artist site on `master`. `git push` = production deploy (gated). Don't read `.env`/secrets. Before pushing real content, add a `/.ai/*` + `/CLAUDE.md` + `/AGENTS.md` → 404 exclusion to the new `netlify.toml`.

## Emergency / Bypass Notes

- No bypass for deploy/push/production mutations.
- Bypass/YOLO is only an execution accelerator for approved local setup and read-only verification.
- Emergency mode: stop, preserve evidence, smallest reversible action.
