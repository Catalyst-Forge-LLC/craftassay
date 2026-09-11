---
title: Install
---

The [skill](/docs/skill) is the product. One folder. The agent reads it and writes the report.

[craftassay.zip](/skills/craftassay.zip)

Nothing scans the tree. You point the agent at the subject.

## Drop the folder in

You do not need npm. You need a folder that contains `SKILL.md`.

1. Download the zip.
2. Unzip it. You should see `SKILL.md` and a `references/` folder.
3. Put that folder here:

| Where you work | Put the folder here |
| --- | --- |
| Cursor | `.cursor/skills/craftassay/` in the project, or `~/.cursor/skills/craftassay/` |
| Claude Code | `~/.claude/skills/craftassay/` or `.claude/skills/craftassay/` in the repo |
| claude.ai | Settings → Customize → Skills → upload the zip (do not unzip) |

4. Ask for a CraftAssay review of the subject.

That is the whole install. The agent reads the folder and writes the report.

## If you already use npm

```bash
pnpm add -D craftassay
```

Copy `node_modules/craftassay/skills/craftassay/` into a skills directory. If the folder is missing from the package, use the zip.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/craftassay) and copy `skills/craftassay/`.

Node.js 20+. The package is [`craftassay`](https://www.npmjs.com/package/craftassay) on npm.

Example prompts: [Skill](/docs/skill). A [sample report](/docs/sample-report).

## What the skill writes

| Folder | Deliverable |
| --- | --- |
| `<stem>.craftassay/` next to the file, or `craftassay/` at a named root | `report.md`, `scorecard.md`, `findings.md`, `coverage.md` |

The agent may keep other notes in that folder. The report is the deliverable.
