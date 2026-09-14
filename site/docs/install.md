---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. The package does not run an automatic scanner. The reviewing agent may inspect project files you point it at.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)
- [Claude.ai](#claudeai)

A folder on disk is not proof the agent found the skill. The first run below is the check.

## Cursor

### Get it

Download [craftassay.zip](/skills/craftassay.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project you are reviewing:

`.cursor/skills/craftassay/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

Ask Cursor to use CraftAssay on the sample below. If it writes a dated run folder with `report.md`, it found the skill and the reference files.

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

> Use CraftAssay on `harbor-note.md`. Follow the installed CraftAssay skill. Write the report.

### Find the result

The run lands in `harbor-note.craftassay/<YYYY-MM-DD>/` next to the file. Open `report.md`.

Success looks like this shape, not identical wording or scores from every model:

- Findings and scores, with NR where evidence is missing
- The privacy claim against automatic sync named as a problem
- The page itself left unchanged

A later pass with the earlier report attached becomes a comparison. It does not overwrite the earlier folder.

## Claude Code

### Get it

Download [craftassay.zip](/skills/craftassay.zip).

### Add it

Unzip, then put the folder in the repo you are reviewing:

`.claude/skills/craftassay/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/craftassay/` instead.

### Confirm it

Same check as Cursor: the first run must produce `report.md`.

### Try it

Same request as [Cursor](#try-it).

### Find the result

Same path as [Cursor](#find-the-result).

## Claude.ai

### Get it

Download [craftassay.zip](/skills/craftassay.zip).

### Add it

Do not unzip. Open Settings → Customize → Skills and upload the zip.

### Confirm it

Start a chat and run the request below. If the agent writes a CraftAssay report, it loaded the skill.

### Try it

Paste the HarborNote page from [Cursor](#try-it), then ask:

> Use CraftAssay on this page. Follow the installed CraftAssay skill. Write the report.

### Find the result

The report appears in the chat. When the agent can write files, it lands in `harbor-note.craftassay/<YYYY-MM-DD>/report.md`.

## After the review

There is no apply skill. Read the findings. Keep what works. Make the smallest useful correction yourself, or ask your agent to make that named edit outside this skill.

The source stays unchanged until you do that.

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

Same folder shape. The first-run check is the same.

A [sample report](/docs/sample-report). A [sample comparison](/docs/sample-comparison).
