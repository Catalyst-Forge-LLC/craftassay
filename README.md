<p align="center">
  <img src="https://craftassay.dev/logo.png" alt="CraftAssay" width="128" />
</p>

# CraftAssay

An installable review skill for AI agents.

**Find the improvements that matter. Check the revision.**

Review how useful, clear, credible, and well-presented a tool, site, skill, or portfolio is. CraftAssay gives your agent a method for prioritizing improvements with evidence, then comparing a later revision to see what was resolved and what remains.

The report is an assessment, not a certification. It also checks whether a
newcomer can tell who the tool is for, why its result matters, and how to start.
The current method is specification v1.2, rubric v1.1. Earlier sample reviews
retain their original versions.

**Get started:** pick the agent, install the skill, then run the
HarborNote page. Instructions are at
[craftassay.dev/docs/install](https://craftassay.dev/docs/install).

- [Cursor](https://craftassay.dev/docs/install#cursor)
- [Claude Code](https://craftassay.dev/docs/install#claude-code)

**Site:** [craftassay.dev](https://craftassay.dev)

## First run

First run: choose the target and scope, run CraftAssay, and read `report.md`. Later: supply the earlier run and identify what changed. If no comparable baseline exists, report a fresh assessment.

Save this page as `harbor-note.md`, then ask:

> Use CraftAssay on `harbor-note.md`. Follow the installed CraftAssay
> skill. Write the report. Leave the page unchanged.

```markdown
# HarborNote

Nothing leaves your machine. Ever.

HarborNote is the notes app for people who are tired of clouds.
Install it, type, and you are done. Every device stays in sync
automatically.
```

The run lands in `harbor-note.craftassay/<YYYY-MM-DD>/` with
`report.md`, `scorecard.md`, `findings.md`, and `coverage.md`. The
scorecard rates seven dimensions from 1 to 10, where higher is
better. NR means not rated, because the evidence was too thin to
score. The page should be unchanged. The report should explain why readers cannot tell whether their notes stay local. It assesses the page’s claims; it does not establish how the app implements sync.

### What you change after reading the report

The [HarborNote sample review](https://craftassay.dev/docs/sample-report) makes the problem concrete:

> **harbornote-F001 · P1 · claim-risk:** The privacy and sync claims conflict. A privacy-seeking reader cannot tell what stays local. Name which data stays on the machine when sync is off.

The author changes the promise to:

> Notes stay on this device unless you turn on sync.

The [later comparison](https://craftassay.dev/docs/sample-comparison) marks `harbornote-F001 → resolved`. Accuracy moves from 3 to 6; Utility stays 6. Readers now see the choice between local notes and optional sync. These are fictional copy-review examples, not evidence of a privacy audit. CraftAssay reports the issue and checks the later revision; the author makes the edit.

A writable workspace is required. The package does not run an
automatic scanner. The reviewing agent may inspect project files you
point it at. v1 has no CLI.

## Other installation methods

npm supplies the skill files. It does not register the skill with the
agent.

```bash
pnpm add -D craftassay
```

Copy `node_modules/craftassay/skills/craftassay/` into the same
destination the [Get started](https://craftassay.dev/docs/install)
page names for your agent.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

## CraftAssay and Cold-eye

[Cold-eye](https://coldeye.dev) reviews readiness for a claimed
first-use path. CraftAssay reviews usefulness, clarity, quality, and
presentation, including first-use friction that affects those
scores. It does not issue a release-readiness verdict.
[Smell Check](https://smellcheck.dev) reviews unearned language.
[Detangler](https://detangler.dev) reviews what editing tangled.

## Development

```bash
pnpm install
pnpm test
pnpm site:dev
```

Site (FilePress + docs mount): `pnpm ship`.
npm: `pnpm publish` (you). There is no `publish` script. `prepublishOnly` runs the tests first.
Agents must not run `npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)
