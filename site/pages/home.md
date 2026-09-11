---
title: See your work with fresh eyes.
description: Evidence-backed reviews of usefulness, clarity, quality, and presentation. An agent writes the report, scores, and findings.
order: 0
---

An assay tests what something is made of, and how good it is. CraftAssay does that for a tool, a site, or a page: usefulness, clarity, quality, and presentation. An agent reads the skill and writes the report. The skill does not edit the source. Run it again later to compare this review with the last one.

## See a sample review

[HarborNote review](/docs/sample-report) · [Then the comparison](/docs/sample-comparison)

The sample is a fictional notes page. The hero says nothing leaves the machine. The same page promises automatic sync.

| Dimension | Score |
| --- | ---: |
| Utility | 6 |
| Accuracy | 3 |
| Uniqueness | NR |
| Quality | 4 |
| Clarity | 5 |
| Aesthetics | NR |
| Overall appeal | 4 |

**harbornote-F001** · P1 · claim-risk  
"Nothing leaves your machine. Ever." sits above automatic sync to every laptop. Bound the privacy claim. Notes can still work without a network.

A later pass resolves that finding. Utility stays 6. Accuracy moves to 6 because the contradiction is gone.

## What you get

The skill writes a dated run folder next to the work: `report.md`, a scorecard, a findings register, and a coverage record.

| Label | Means |
| --- | --- |
| **Review** | Inspect, assess, score, and recommend |
| **Findings** | Specific issues with evidence and the smallest useful correction |
| **Scores** | Seven dimensions, or NR when evidence is missing |
| **Evidence** | What was inspected, and what was not |
| **Compare versions** | Finding status and explained score changes |

Accuracy is freedom from misleading claims in the inspected presentation. It is not a measured bug rate.

Name the job, keep what works, and make the smallest useful correction that removes the friction.

## CraftAssay and Cold-eye

[Cold-eye](https://coldeye.dev) asks whether a newcomer can use what is presented as ready. CraftAssay asks how useful, clear, credible, and well-presented the work is. First-use friction still belongs in a CraftAssay finding when it affects those scores. CraftAssay does not issue a release-readiness verdict. A clean Cold-eye review does not mean CraftAssay will score the work highly.

[Smell Check](https://smellcheck.dev) reviews unearned language. [Detangler](https://detangler.dev) reviews what editing tangled.

## Install

[Download the zip](/docs/install), put the folder where the table says, and ask for a CraftAssay review of the work.

```bash
pnpm add -D craftassay
```

Then copy `node_modules/craftassay/skills/craftassay/` into a skills directory.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT. [About](/about)
