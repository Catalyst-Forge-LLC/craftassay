---
title: Install
---

The [skill](/docs/skill) is the product. One folder. The agent reads it and writes the report.

[craftassay.zip](/skills/craftassay.zip)

The package does not run an automatic scanner. The reviewing agent may inspect project files you point it at.

You do not need npm. You need a folder that contains `SKILL.md`.

## Cursor or Claude Code

1. Download the zip.
2. Unzip it. You should see `SKILL.md` and a `references/` folder.
3. Put that folder here:

| Where you work | Put the folder here |
| --- | --- |
| Cursor | `.cursor/skills/craftassay/` in the project, or `~/.cursor/skills/craftassay/` |
| Claude Code | `~/.claude/skills/craftassay/` or `.claude/skills/craftassay/` in the repo |

4. Ask for a CraftAssay review of the work.

## claude.ai

1. Download the zip.
2. Open Settings → Customize → Skills.
3. Upload the zip. Do not unzip it.

4. Ask for a CraftAssay review of the work.

That is the whole install. The agent reads the folder and writes the report.

## If you already use npm

```bash
pnpm add -D craftassay
```

Copy `node_modules/craftassay/skills/craftassay/` into a skills directory.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/craftassay) and copy `skills/craftassay/`.

Node.js 20+. The package is [`craftassay`](https://www.npmjs.com/package/craftassay) on npm.

Example prompts: [Skill](/docs/skill). A [sample report](/docs/sample-report).

## What the skill writes

| Folder | Deliverable |
| --- | --- |
| `<stem>.craftassay/<YYYY-MM-DD>/` next to the file | `report.md`, `scorecard.md`, `findings.md`, `coverage.md` |
| `craftassay/<YYYY-MM-DD>/` at a named root | same files |
| `subject.craftassay/<YYYY-MM-DD>/` for a URL or paste | same files |

Each run gets a new dated folder. The agent does not overwrite a folder that already has `report.md`.
