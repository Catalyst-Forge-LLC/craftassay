---
title: See your work with fresh eyes.
description: An installable review skill for AI agents. Evidence-backed reviews of usefulness, clarity, quality, and presentation.
order: 0
---

An installable review skill for AI agents. An assay tests what something is made of, and how good it is. CraftAssay does that for a tool, a site, or a page: usefulness, clarity, quality, and presentation.

An agent reads the skill and writes the report. The skill does not edit the source. Run it again later to compare this review with the last one. The report is an assessment, not a certification.

<div class="cta-row">
  <a class="cta cta-primary" href="/docs/install">Install in your agent</a>
  <a class="cta cta-secondary" href="https://github.com/Catalyst-Forge-LLC/craftassay">View on GitHub</a>
</div>

## See a sample review

A useful finding names the surface, shows the evidence, explains the consequence, and gives a change you can check.

A fictional notes page. The hero says nothing leaves the machine. The same page promises automatic sync.

| Dimension | Score |
| --- | ---: |
| Utility | 6 |
| Accuracy | 3 |
| Uniqueness | NR |
| Quality | 4 |
| Clarity | 5 |
| Aesthetics | NR |
| Overall appeal | 4 |

Scores run from 1 to 10, and higher is better: 3 is weak, 5 mixed, 7 solid, 9 excellent. NR means not rated, because the evidence was too thin to score that dimension. Here nobody compared other notes apps or looked at a rendered interface.

**harbornote-F001** · P1 · claim-risk  
"Nothing leaves your machine. Ever." sits above "Syncs to every laptop you own." A privacy-seeking user cannot tell what stays local. Recommended change: name which data stays on the machine when sync is off.

P1 is the highest of three priorities. Claim-risk means the wording promises more than the page supports.

A later pass reviews the revised page, which says notes stay on the device unless you turn on sync. That finding is marked resolved. Utility stays 6. Accuracy moves to 6 because the contradiction is gone.

[Install in your agent](/docs/install) · [HarborNote review](/docs/sample-report) · [Then the comparison](/docs/sample-comparison)

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A tool, site, skill, spec, portfolio, URL, or paste |
| Writes | A dated run folder: `report.md`, a scorecard, findings, and coverage |
| Changes | Nothing. Read the findings, then make the smallest useful correction yourself or ask the agent for that named edit |

| Label | Means |
| --- | --- |
| **Review** | Inspect, assess, score, and recommend |
| **Findings** | Specific issues with evidence and the smallest useful correction |
| **Scores** | Seven dimensions from 1 to 10, or NR (not rated) when evidence is missing |
| **Evidence** | What was inspected, and what was not |
| **Compare versions** | Finding status and explained score changes |

Accuracy is freedom from misleading claims in the inspected presentation. It is not a measured bug rate.

## CraftAssay and Cold-eye

[Cold-eye](https://coldeye.dev) asks whether a newcomer can use what is presented as ready. CraftAssay asks how useful, clear, credible, and well-presented the work is. First-use friction still belongs in a CraftAssay finding when it affects those scores. CraftAssay does not issue a release-readiness verdict. A clean Cold-eye review does not mean CraftAssay will score the work highly.

[Smell Check](https://smellcheck.dev) reviews unearned language. [Detangler](https://detangler.dev) reviews what editing tangled.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT. [About](/about)
