# AI-Ops Project Rules

Rules Version: 2026-06-27-aiops-foundation-v1
Generated date/time: 2026-06-28T02:28:37-0700
Source Base: /Users/davidmarsh/AI-OPS/TEMPLATES/RULES_BASE.md
Source Header: /Users/davidmarsh/Desktop/LiFi NYC/Clients/Sara Ann Rutherford/sara-ann-rutherford/.ai/RULES_HEADER.md
<!-- AI-OPS-GENERATED: edit RULES_HEADER.md or RULES_BASE.md, then rerun generate-rules. -->
<!-- AI-OPS-CONTENT-CHECKSUM: 1843554719:9426 -->

<!-- AI-OPS-CONTENT-BEGIN -->
## Project Rules Header

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
- Deploy: Netlify (push = production deploy → gated by clear, scoped confirmation from David). ⚠️ Deploy linkage unverified — confirm the Netlify source before pushing.
- Lint/format: none defined.

## Locked Rules

- **LiFi brand:** orange `#FE5800` (hover `#FF6B35`), teal `#0891B2`, midnight `#080b14` / cards `#0d1120`, text `#f0f0ec` / muted `#9da1b0`; fonts Lexend + Caveat 700. Footer on every site: "Designed, Hosted and Cared For by LittleFightNYC.com" in orange.
- **Never publish prices** unless explicitly client-approved (LFNYC pricing doctrine).
- Mobile-first, WCAG AA contrast, body text 16px+. Respect `prefers-reduced-motion`.
- Images `.webp` + explicit `width`/`height` + lazy-load below fold.
- `git push` = production deploy → **gated** by clear, scoped confirmation from David. `.env`/secrets never read.
- **PLACEHOLDER:** this repo has no site source. Do not assume it is the deploy source; the real code lands from the `02_CLIENTS` iCloud folder later.
- **Before the real site is pushed:** add a `/.ai/*`, `/CLAUDE.md`, `/AGENTS.md` → 404 exclusion (or a `/*.md → 404` rule) to the site's `netlify.toml` so internal AI-Ops docs are never served publicly.

## Sara Ann Rutherford QA Harness Map

Observational (agent may run): `git status/log`, read source/config, static local serve, public GET to the live URL, read-only Netlify deploy metadata.

Transactional/gated (David-run / approved): `git push` / Netlify deploy; DNS/domain/env changes; any edit once real source lands; confirming/relinking the Netlify deploy source.

## Shared Rules Base

# AI-Ops Shared Rules Base

This is the canonical shared behavior contract for Little Fight NYC AI-Ops work.

Keep truth in the repo. Store only what Git cannot know. Maintain shared rules once. Automate facts. Have AI propose judgment. Safety overrides forward motion.

## Command Words

Agents must recognize these exact commands:

- `SESSION START`
- `SESSION CLOSEOUT`
- `STOP`
- `HALT`

## Operating Contract

- Repo truth beats chat truth.
- Git knows code history.
- Deployment/build metadata knows what shipped.
- `.ai/STATE.md` stores what Git cannot know.
- Ideas go to inbox before becoming rules.
- Production QA must separate observation from transaction.
- Autonomy is useful until risk appears.
- Safety overrides forward motion.

## SESSION START Protocol

When starting work:

1. Read `.ai/RULES.md`.
2. Read `.ai/STATE.md`.
3. Check the current branch, worktree, and git status.
4. Check recent commits relevant to the requested work.
5. Check whether `.ai/STATE.md` is stale against Git, deploy metadata, or current task context.
6. Check `QA-PENDING` before claiming anything is complete.
7. State the current branch, dirty files, active risk level, and intended first action.

Do not rely on chat memory when the repo has a newer source of truth.

## SESSION CLOSEOUT Protocol

Before ending a work session:

1. Update `.ai/STATE.md` with facts Git cannot know.
2. Record unresolved `QA-PENDING` items.
3. Record proposed rule changes in the inbox rather than editing generated rules directly.
4. Report branch, files created, files modified, verification run, warnings, and next-agent directive.
5. Do not claim production QA passed unless production QA was actually run and stayed observational or was properly approved.

## Emergency Mode

Emergency Mode applies when production, client data, billing, secrets, auth, DNS, deployments, or irreversible operations may be affected.

In Emergency Mode:

- Stop forward feature work.
- Preserve evidence.
- Do the smallest reversible action.
- Ask David before destructive or transactional action.
- Prefer observation, rollback, and containment over new behavior.

## STOP / HALT Protocol

`STOP` means pause all work and report current state.

`HALT` means stop immediately, avoid further file or system changes, and report the last completed action plus the next safest recovery step.

If a STOP or HALT conflicts with automation, human instruction wins.

## Live Change Confirmation Protocol

Clear scoped confirmation is required before any live transactional action unless the action is sandboxed, staged, explicitly David-run, or already protected by a project-specific approved safe path.

Approval must be scoped to a specific action. It does not authorize unrelated live changes.

## Proposed Changes / Inbox

Rules are not rewritten ad hoc.

Put candidate changes in `.ai/STATE.md` under `Proposed Changes / Inbox` with:

- Proposal
- Reason
- Risk
- Source evidence
- Suggested owner

Promote proposals into `.ai/RULES_HEADER.md` or `~/AI-OPS/TEMPLATES/RULES_BASE.md` only after review.

## Tactical Visibility Before >3 Source File Edits

Before editing more than three source files, report:

- Goal
- Files expected to change
- Risk
- Verification plan
- Rollback plan

Documentation, generated rules, and state files still require visibility when they affect agent behavior.

## Observational vs Transactional QA Split

Observational production QA is allowed when it only reads public or authorized state and does not create, mutate, submit, send, buy, book, upload, export, or persist anything.

Transactional production QA is not allowed unless sandboxed, staged, explicitly David-run, or gated by clear, scoped confirmation from David plus a safe test path.

If a `qa:prod` harness exists, run it instead of improvising checks.

Transactional actions include:

- live checkout orders
- live payments
- real appointment bookings
- real lead form submissions
- real client emails
- real database writes
- real uploads into client workflows
- PHC bid/export actions that could alter client data
- anything that pollutes client records, calendars, inboxes, analytics, orders, or production data

## Dangerous Operation Gate

Do not perform dangerous operations without explicit approval.

Dangerous operations include:

- pushing to protected branches
- deploying
- deleting files or cloud resources
- modifying secrets, `.env`, DNS, auth, or billing
- mutating production data
- running live transactional QA
- changing production infrastructure

Live danger requires clear confirmation from David that identifies the intended production action and scope.

Broad standing autonomy does not cover ambiguous or destructive production changes. Confirm the intended live action and scope in plain language before proceeding.

## Stale State Protocol

If `.ai/STATE.md` conflicts with Git, deploy metadata, logs, or current source files:

1. Treat the state as stale.
2. Use repo/deploy facts as the higher source of truth.
3. Update `.ai/STATE.md` during closeout with the corrected fact and evidence.
4. Do not silently carry stale assumptions forward.

## QA-PENDING Protocol

`QA-PENDING` means work is not verified enough to claim done.

Each pending item must include:

- What needs verification
- Why it matters
- Safe verification path
- Whether it is observational or transactional
- Current owner

Do not collapse QA-PENDING into success language.

## Collision Detection

Before editing, check for collisions:

- current branch
- current worktree
- `git status --short`
- recent commits
- existing lock file if the project uses one
- whether Claude Code, Codex, or another agent is likely active on the same branch or files

If a collision appears likely, stop and report the risk before writing.

## Optional Lock File Protocol

Projects may use `.ai/LOCK.md` for coordination.

If present, read it before edits. If creating one, include:

- Agent
- Branch
- Files or area claimed
- Start time
- Expected closeout
- Recovery note

Do not use a lock file as permission to bypass safety gates.

## Session History Compaction

Keep durable state short and factual.

Use `.ai/STATE.md` for current operational truth, not transcripts. Summarize long histories into recent decisions, unresolved risks, next steps, and evidence pointers.

## Safety Override

Safety overrides forward motion.
<!-- AI-OPS-CONTENT-END -->
