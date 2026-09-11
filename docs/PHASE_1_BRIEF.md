# CraftAssay — Phase 1 architecture brief

Canonical review contract: [`../craftassay-review-spec-v1.1.md`](../craftassay-review-spec-v1.1.md). This file is the stack and repo shape. If they drift on review behavior, the spec wins.

**Status:** draft  
**Last updated:** 2026-09-11  
**Phase 1 exit:** Do not mark Phase 1 complete until this brief is **locked** and major commitments are in `.forgetrail/workflow_tracking.json` `decisions[]`.

---

## 1. Problem and outcome

Builders ship tools, sites, skills, and portfolios. A useful critique needs a stable job, evidence, scores that can be compared later, and findings that name the smallest fix. Informal reviews drift. Scores move without a reason. Findings vanish or get counted twice.

CraftAssay is an evidence-backed review of usefulness, clarity, quality, and presentation. An agent with the skill writes the report. The FilePress site explains the method and how to install the skill. The name combines craft with assay. Site copy must explain the service in plain language before relying on the metaphor. Familiar labels are Review, Findings, Scores, Evidence, and Compare versions.

**Project archetype:** `product`

**What “done” looks like for v1:**

- Comb skill (`craftassay`) writes a CraftAssay review (and a comparison when a baseline is supplied) under `<stem>.craftassay/`.
- Deliverables match spec §11: readable report, scorecard, findings register, coverage record. Comparison adds baseline mapping and explained score changes.
- Site: home, docs (introduction, install, skill, report, sample), about.
- npm `craftassay` ships the skill folder plus a tiny path catalog. No `bin`.
- Spec v1.1 and rubric v1.0 stay in the repo as the contract.
- LocalSlip lease `craftassay-site` on preferred port **5202**. Repo enrolled in the workspace LocalHelm fleet.

---

## 2. Users and hero flow

**Primary users:** owners of a tool, site, skill, specification, or related portfolio who want a candid, comparable critique. Agents running the skill for those owners.

**Hero flow:** load the skill → agent inspects the supplied subject using spec §4–5 → writes the report, scorecard, and findings → owner reads the main judgment and prioritized changes. A later pass with the earlier report attached becomes a comparison under spec §9.

**Also:** install the skill folder. Read the site for the job, install path, and a sample report.

---

## 3. Constraints

- **Technical:** TypeScript ESM, Node ≥20, pnpm. No accounts. Review inputs stay local. The host agent does the judgment. The package does not call a project-owned model.
- **Business:** proposed npm slug `craftassay`. Proposed site host craftassay.dev unless a different registered domain is named at lock. GitHub Catalyst-Forge-LLC/craftassay. The maintainer publishes to npm and ships the site.
- **Non-goals for v1:** a command-line reviewer, accounts, PocketBase, a hosted scoring API, implementation of reviewed products, launch campaigns, Cold-eye as a required dependency, migrating historical ToolAssay domains.

**State:** local files only. The subject and the `.craftassay/` report tree are the state.

**Exports:** Markdown report is the primary deliverable. Optional YAML interchange from spec Appendix B may be included as a companion file. Not a PDF or DOCX product.

**Tenancy:** none.

**Review text:** fence as data. Do not send it to a project-owned cloud API.

**Live web search:** no project search key. The host agent may use the tools it already has. Record access limits instead of inventing product defects.

**State persistence (web):** none. The site is static FilePress. No `localStorage` product state.

**Content-generation:** the skill is instructions the host agent follows (BYO-LLM). Site pages are hand-authored. No runtime LLM route and no seed script.

---

## 4. Stack and tooling

| Area | Choice | Status | Notes |
| --- | --- | --- | --- |
| Package | Skill folder + TypeScript path catalog. No `bin`. | proposed | Sibling of Smell Check, Detangler, Misemphasis, Cold-eye |
| Language | TypeScript, ESM (`"type": "module"`) | proposed | House rule |
| Runtime | Node ≥20 | proposed | |
| Package manager | pnpm | proposed | |
| DB / auth | none | proposed | Local files only |
| Site | FilePress (`getfilepress`) + Cloudflare Pages | proposed | `pnpm ship` |
| Local ports | LocalSlip lease `craftassay-site` on **5202** | proposed | Claim once. FilePress reads the lease. |
| Fleet | LocalHelm row `craftassay` / npm `craftassay` | proposed | Add to workspace `localhelm.fleet.json` at scaffold |
| Tests | `tsc` + `node --test` on the catalog | proposed | Fixtures are sample subjects, not a scoring engine |
| License | MIT, Catalyst Forge LLC | proposed | |
| GitHub | Catalyst-Forge-LLC/craftassay | proposed | |

```
craftassay/
├── src/                      # skill catalog (paths only)
├── skills/craftassay/        # review + comparison pass
├── fixtures/                 # sample subjects and expected report shape
├── site/                     # FilePress
├── docs/                     # this brief
├── craftassay-review-spec-v1.1.md
└── package.json              # name: craftassay, no bin
```

---

## 5. Data model (sketch)

**Deliverable directory:** `<stem>.craftassay/`

**Core files (names may tighten at scaffold, contract may not):**

- `report.md` — human-readable review in spec §8 order, adapted for single-subject vs portfolio
- `scorecard` — seven dimensions, confidence, rationale
- `findings` — stable IDs, classification, priority, status
- `coverage` — inspected surfaces and limits
- optional `record.yaml` — Appendix B interchange, not a required runtime validator

**Entities from the spec:** project inventory records, dimension scores (`1–10` or `NR`), findings, comparison rows, coverage cells.

**Existing data:** the Catalyst Forge 2026-09-10 baseline in spec Appendix A is historical evidence. v1 may ship it as a documented example. It is not rescored at scaffold.

---

## 6. Integrations and external systems

| Integration | Purpose | Auth / secrets | Risk notes |
| --- | --- | --- | --- |
| Hosting agent | Reads the skill and writes the report | None in this repo | Installing the skill does not grant access or enforce the spec |
| FilePress / Wrangler | Marketing site | Cloudflare via local wrangler login | `pnpm ship` |
| LocalSlip | Named local port for `filepress dev` | None | Missing CLI is not fatal. Preferred port 5202. |
| LocalHelm | Fleet enroll, Sites, Ship | None | Push is never `--force`. Maintainer publishes npm. |
| npm | Package distribution | Maintainer only | Agents never publish |
| Cold-eye | Optional related review | None | Recommendation or imported source, not a dependency |

No payments, email, analytics, or search API.

---

## 7. Hardest problems and risks

1. The spec is large. The skill must stay usable. Lead with the invocation, the seven dimensions, and the report contract. Keep the full spec in-repo for depth.
2. CraftAssay vs Cold-eye. Site and skill must state the different questions without inventing a ban on shared findings.
3. Domain and npm names are proposed, not proven available in this brief.
4. Aesthetic and uniqueness scores need inspected surfaces. The skill must allow `NR` instead of inventing scores.
5. A name change or expanded surface must never silently change a baseline score.

---

## 8. Architectural decisions (numbered)

**D1.** Skill plus FilePress site plus path catalog. No command-line reviewer. WHY: sibling parity. The host agent is the judgment. Rejected: project-owned LLM CLI, hosted review app.

**D2.** Spec v1.1 / rubric v1.0 is the contract. WHY: the written method already exists. Rejected: a shorter unofficial rubric.

**D3.** Local files only. No PocketBase, no accounts, no project LLM key. WHY: the report is the state. Rejected: saved-review backend.

**D4.** TypeScript ESM, pnpm, FilePress, Cloudflare Pages. WHY: house stack and the requested site. Rejected: a separate SvelteKit app.

**D5.** LocalSlip `craftassay-site` on 5202. LocalHelm fleet enrollment at scaffold. WHY: house local-dev tools. Rejected: everyone fighting for 5173.

**D6.** One skill for review and comparison. Cold-eye stays optional. WHY: spec §0 and §12. Rejected: a second compare package, or a required Cold-eye gate.

---

## 9. Open questions (before or during Phase 2)

| # | Question | Owner / resolve by |
| - | -------- | ------------------ |
| 1 | Live site host. Propose `https://craftassay.dev`. Historical ToolAssay domains stay out of v1 unless named. | User, at lock |
| 2 | npm package name `craftassay`. Confirm reservation or an alternate slug. | User, at lock |
| 3 | Preferred LocalSlip port 5202. | User, at lock, or accept default |
| 4 | Cloudflare Pages project name. Propose `craftassay`. | Can match package name at scaffold |

---

## 10. Explicitly out of scope (v1)

- Implementing findings in the reviewed products
- A launch or catalog campaign
- A full source audit, pentest, or accessibility certification product
- Automatic rewrite of the subject
- Runtime scoring without a host agent
- PocketBase, auth, billing
- Redirecting old ToolAssay domains
- Making Cold-eye a required step

---

## 11. First feature batch (post-scaffold)

1. Path catalog, skill folder, and a fixture that shows report shape.
2. FilePress site: home, introduction, install, skill, report, sample, about.
3. LocalSlip lease script and `pnpm site:dev`.
4. LocalHelm fleet row and `pnpm ship`.
5. Sample report drawn from the spec’s method, not a pretend recertification of the 2026-09-10 portfolio.

---

## 12. Handoff checklist (before leaving Phase 1)

- [ ] User has confirmed stack, folder shape, report tree, hero flow, and v1 boundaries
- [ ] This brief is **locked** (no `[draft]` ambiguity) or remaining items are only in §9
- [ ] `.forgetrail/workflow_tracking.json` updated: `decisions[]` for each major D#, phase 1 notes summarize sign-off
- [ ] Phase 2 opener will read **this file** + `.forgetrail/workflow_tracking.json` first
