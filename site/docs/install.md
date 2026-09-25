---
title: Get started
---

First run: choose the target and scope, run CraftAssay, and read `report.md`. Later: supply the earlier run and identify what changed. If no comparable baseline exists, report a fresh assessment.

Install the skill in your agent, then use it. You do not need Node or npm for this path. The package does not run an automatic scanner. The reviewing agent may inspect project files you point it at. The first run does not require a baseline.

CraftAssay writes four report files in a dated run folder. A writable workspace is required. Claude.ai without project files is not a supported first-use route.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project skills folder | Writable workspace | Host listing / discovery not independently verified in this docs pass |
| Claude Code | Project or `~/.claude/skills/` | Writable workspace | Same |
| Other agents that read `SKILL.md` | Manual copy | Writable workspace | Unverified |
| Claude.ai | — | Writable project files | Not a supported first-use route without files |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A report alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)

## Cursor

### Get it

Download [craftassay.zip](/skills/craftassay.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project you are reviewing:

`.cursor/skills/craftassay/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

If Cursor lists installed skills, confirm `craftassay`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this page as `harbor-note.md` in the project:

```markdown
# HarborNote

Nothing leaves your machine. Ever.

HarborNote is the notes app for people who are tired of clouds.
Install it, type, and you are done. Every device stays in sync
automatically.
```

Then ask:

> Use CraftAssay on `harbor-note.md`. Follow the installed CraftAssay skill. Write the report. Leave the page unchanged.

A URL or paste without a project directory uses `subject.craftassay/` per the skill’s output reference. Do not promise a HarborNote-named folder for pasted content you never saved as `harbor-note.md`.

### Find the result

The run lands in `harbor-note.craftassay/<YYYY-MM-DD>/` next to the file. Open `report.md` first. A complete file-capable run also writes:

- `report.md`
- `scorecard.md`
- `findings.md`
- `coverage.md`

Success looks like this shape, not identical wording or scores from every model:

- The tension between “nothing leaves your machine” and “every device stays in sync automatically” is named
- Missing explanation of how sync works stays open (NR where implementation evidence is absent)
- No invented cloud, telemetry practice, or tested privacy failure
- The page itself left unchanged

An incomplete folder is not a fully successful run. That the example behaved is not the same check as discovery.

### Second use (comparison)

Attach an earlier run for the same subject. The next review goes to a new dated directory (with a numeric suffix when needed). Unrelated baselines must not silently become the comparison source. Changed inspection scope is reported so a score difference is not automatically a product improvement.

## Claude Code

### Get it

Download [craftassay.zip](/skills/craftassay.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

`.claude/skills/craftassay/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/craftassay/` instead.

### Confirm it

If Claude Code lists skills, confirm `craftassay`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save `harbor-note.md` as in [Cursor](#try-it), then ask:

> Use CraftAssay on `harbor-note.md`. Follow the installed CraftAssay skill. Write the report. Leave the page unchanged.

### Find the result

Open `harbor-note.craftassay/<YYYY-MM-DD>/report.md` and confirm the four files exist. Source unchanged. Look for the sync-vs-privacy tension without inventing a server.

## After the review

There is no apply skill. Read the findings. Keep what works. Make the smallest useful correction yourself, or ask your agent to make that named edit outside this skill.

The source stays unchanged until you do that.

Cold-eye tests whether a newcomer can understand and use the subject. CraftAssay provides a broader dimensional assessment and repeatable comparison.

### Update or remove

Replace the installed `craftassay` folder to update. Delete that folder to uninstall. Copied skills do not refresh when you bump the npm package.

## Other ways to ask

Once the first run works:

- CraftAssay review of this site.
- Review this README using CraftAssay.
- Compare this landing page against the attached baseline review.

Those are later shortcuts. They are not the install check.

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add -D craftassay
```

Copy `node_modules/craftassay/skills/craftassay/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The package is [`craftassay`](https://www.npmjs.com/package/craftassay) on npm.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/craftassay) and copy `skills/craftassay/`.

### Install for all projects

- Cursor: `~/.cursor/skills/craftassay/`
- Claude Code: `~/.claude/skills/craftassay/`

Same folder shape. Discovery and first-use checks are the same.

A [sample report](/docs/sample-report). A [sample comparison](/docs/sample-comparison).
