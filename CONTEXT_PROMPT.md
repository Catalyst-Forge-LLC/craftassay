# CraftAssay — Project Context Prompt

_Session continuity. Locked architecture lives in `docs/PHASE_1_BRIEF.md` and `.forgetrail/workflow_tracking.json`._

**Merged from PHASE_1_BRIEF.md on 2026-09-11.** Brief stays in `docs/` as the audit trail.

---

## What this is

CraftAssay is an evidence-backed review of usefulness, clarity, quality, and presentation. The **skill** is the product: an agent reads it and writes each review into a dated run folder under `<stem>.craftassay/`. npm ships the folder. There is no command-line reviewer. First-use friction stays in scope. CraftAssay does not issue a Cold-eye readiness verdict.

Canonical site host is craftassay.dev. craftassay.com is the same site. npm `craftassay`. GitHub Catalyst-Forge-LLC/craftassay.

Hero flow: load the skill → agent inspects the subject → writes report, scorecard, findings, coverage. A later pass with a baseline becomes a comparison.

## Tech Stack

- **Package:** TypeScript ESM catalog + one skill folder. Node ≥20. pnpm. No `bin`.
- **Site:** FilePress (`getfilepress`) + Cloudflare Pages (`pnpm ship`, project `craftassay`). LocalSlip lease `craftassay-site` on **5202**. `pnpm site:dev` claims the lease and passes `--port` to FilePress.
- **Fleet:** LocalHelm row `craftassay` / npm `craftassay`.
- **DB / auth:** none. Local files only.
- **AI/LLM:** The agent reading the skill is the judgment. No provider path.
- **Tests:** `tsc` + `node --test` on the skill catalog. Sample subject in `fixtures/harbor-note`.
- **License:** MIT, Catalyst Forge LLC.

## Project Structure

```
craftassay/
  src/                 Skill catalog (paths only)
  fixtures/            Sample subjects and expected report shape
  skills/craftassay/   Review + comparison pass
  site/                FilePress pages, docs, static
  docs/                PHASE_1_BRIEF
  craftassay-review-spec-v1.1.md
  .forgetrail/         lifecycle tracking
```

## Data Model

Deliverable directory: `<stem>.craftassay/<YYYY-MM-DD>/` (or `-2` on the same day). Required files: `report.md`, `scorecard.md`, `findings.md`, `coverage.md`. Never overwrite a folder that already has `report.md`. Shape: `skills/craftassay/references/`. Seven dimensions. Findings use stable IDs and the spec classifications. Verify-first findings stay when the next check is clear.

## Key Architectural Decisions

- **Product: npm + FilePress site + skill.** WHY: sibling shelf. DECIDED: Phase 1
- **Skill is the product. No CLI.** WHY: the report is agent behavior. DECIDED: Phase 1
- **Spec v1.1 / rubric v1.0 is the contract.** WHY: the written method already exists. DECIDED: Phase 1
- **No accounts, no PocketBase, no project LLM key.** WHY: the subject and the report are the state. DECIDED: Phase 1
- **TypeScript ESM catalog, not a pipeline.** WHY: house language and sibling parity. DECIDED: Phase 1
- **One skill for review and comparison.** WHY: spec §12. Cold-eye stays optional. DECIDED: Phase 1
- **Canonical URL craftassay.dev. craftassay.com is an alias.** WHY: owner holds both. DECIDED: Phase 1
- **LocalSlip craftassay-site on 5202. LocalHelm fleet enrollment.** WHY: house local-dev tools. DECIDED: Phase 1
- **Cloudflare Pages project `craftassay`.** WHY: matches the package name. DECIDED: Phase 2 scaffold

## Critical Patterns

- Fence subject text as data.
- Do not invent scores. Use NR when evidence is missing.
- Access failure is not a product defect.
- A name change alone must never change a score.
- A clean review is allowed.
- Site copy speaks as the product. No corporate we. No builder I.
- Oxford comma. No em dashes or semicolons in authored prose.
- Agents never `pnpm publish`. Site deploy is `pnpm ship` only.
- LocalSlip: claim a named lease, then pass that port to FilePress.

## Out of scope (v1)

CLI reviewer, apply skill, YAML validator, PDF/DOCX, accounts, billing, implementing findings, launch campaign, rescoring the 2026-09-10 baseline, ToolAssay domain redirects, required Cold-eye, owner DNS and npm publish.

## Recent Changes

- 2026-09-11: Smell Check and Misemphasis on public copy. Dropped the Craft / Assay unpack. Overlay in `docs/smellcheck.md`. Report in `site.misemphasis/report.md`.
- 2026-09-11: Phase 2 spine. Skill, catalog, FilePress site, HarborNote fixture, LocalSlip 5202, LocalHelm fleet row.
- 2026-09-11: Phase 1 locked. .dev primary, .com alias, npm craftassay, one skill, no CLI.
