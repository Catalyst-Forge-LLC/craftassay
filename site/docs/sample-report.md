---
title: Sample report
---

From [`fixtures/harbor-note/input.md`](https://github.com/Catalyst-Forge-LLC/craftassay/blob/main/fixtures/harbor-note/input.md). A fictional notes page. The skill writes this shape.

# CraftAssay Review: HarborNote

Review date: 2026-09-11. Specification v1.1. Rubric v1.0.

Illustrative fixture. Not a live product review.

## Main judgment

The page names a local notes job, then immediately contradicts it. The strongest line is the offline claim. The principal gap is the universal privacy wording against a signup link and automatic sync.

## HarborNote (`harbornote.example`)

**User and job:** A person who wants local notes without a cloud.

**What works and should remain:** Notes that work without a network.

**Review:** The hero says nothing leaves the machine, then the same page sells automatic multi-device sync and a signup URL.

| Dimension | Score | Confidence | Rationale |
| --- | ---: | --- | --- |
| Utility | 6 | medium | Local notes are a real job. Sync and signup blur the bounded result. |
| Accuracy | 3 | high | Universal privacy language contradicts signup and automatic sync on the same page. |
| Uniqueness | NR | insufficient | No focused comparison was performed. |
| Quality | 4 | medium | The first-use path hits a signup URL and a dead legal link. |
| Clarity | 5 | high | A reader can name notes, then has to reconstruct whether the product is local. |
| Aesthetics | NR | insufficient | No rendered UI was inspected. |
| Overall appeal | 4 | medium | The contradiction creates hesitation before first use. |

## Findings

**harbornote-F001** · P1 · observed-error  
"Nothing leaves your machine. Ever." sits above a signup URL and "Syncs to every laptop you own." Bound the privacy claim.

**harbornote-F002** · P1 · observed-error  
The privacy whitepaper link is a planted 404. Publish the paper or remove the link.

**harbornote-F003** · P2 · presentation-judgment  
The first sentence is a universal guarantee. Lead with local notes, then the privacy boundary.

A clean review is allowed. This fixture is not one.
