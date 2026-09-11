---
title: What works, what creates friction, and what to improve first.
description: Evidence-backed reviews of usefulness, clarity, quality, and presentation. An agent writes the report, scores, and findings.
order: 0
---

An assay tests what something is made of, and how good it is. CraftAssay does that for a tool, a site, or a page: usefulness, clarity, quality, and presentation. An agent reads the skill and writes the report. The skill does not edit the source. Run it again later to compare this review with the last one.

[Docs](/docs/) · [Install](/docs/install) · [Skill](/docs/skill) · [About](/about)

## What you get

The skill writes a folder next to the work: `report.md`, a scorecard, a findings register, and a coverage record.

| Label | Means |
| --- | --- |
| **Review** | Inspect, assess, score, and recommend |
| **Findings** | Specific issues with evidence and a smallest fix |
| **Scores** | Seven dimensions, or NR when evidence is missing |
| **Evidence** | What was inspected, and what was not |
| **Compare versions** | Finding status and explained score changes |

Accuracy is freedom from misleading claims in the inspected presentation. It is not a measured bug rate.

## Sample finding

The [sample report](/docs/sample-report) uses a fictional notes page. The hero says nothing leaves the machine. The same page sells signup and automatic sync.

Bound the privacy claim. Notes can still work without a network.

Name the job, keep what works, and fix the smallest thing that removes the friction.

## Not Cold-eye

[Cold-eye](https://coldeye.dev) asks whether a newcomer can use what is presented as ready. CraftAssay asks how useful, clear, credible, and well-presented the work is. A clean Cold-eye review does not mean CraftAssay will score the work highly. A high CraftAssay score is not release approval.

[Smell Check](https://smellcheck.dev) reviews unearned language. [Detangler](https://detangler.dev) reviews what editing tangled.

## Install

[Download the zip](/docs/install), put the folder where the table says, and ask for a CraftAssay review of the work.

```bash
pnpm add -D craftassay
```

Then copy `skills/craftassay` out of `node_modules`.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
