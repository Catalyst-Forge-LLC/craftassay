---
title: Sample report
---

Complete four-file output from [`fixtures/harbor-note/expected/2026-09-11/`](https://github.com/Catalyst-Forge-LLC/craftassay/tree/main/fixtures/harbor-note/expected/2026-09-11). Subject: [`input.md`](https://github.com/Catalyst-Forge-LLC/craftassay/blob/main/fixtures/harbor-note/input.md). A fictional notes page. A later pass of the same subject is the [sample comparison](/docs/sample-comparison).

Scores run from 1 to 10, and higher is better. NR means not rated, because the evidence was too thin to score.

# report.md

# CraftAssay Review: HarborNote

Review date: 2026-09-11. Specification v1.1. Rubric v1.0.

Illustrative fixture. Not a live product review.

## Main judgment

The page names a local notes job, then immediately contradicts it. The strongest line is the offline claim. The principal gap is the universal privacy wording against automatic multi-device sync.

## Coverage and limits

Inspected the fixture page only. No executable app, no live host, no competing notes tools beyond a labeled inference. Aesthetics was not rated because no rendered UI was inspected.

## Scoring definitions

Utility, Accuracy, Uniqueness, Quality, Clarity, Aesthetics, and Overall appeal. Accuracy is freedom from misleading claims in the inspected presentation, not a measured bug rate.

## Project scorecard

| Dimension | Score | Confidence |
| --- | ---: | --- |
| Utility | 6 | medium |
| Accuracy | 3 | high |
| Uniqueness | NR | insufficient |
| Quality | 4 | medium |
| Clarity | 5 | high |
| Aesthetics | NR | insufficient |
| Overall appeal | 4 | medium |

## HarborNote (`harbornote.example`)

**Subject identity:** https://harbornote.example/

**User and job:** A person who wants local notes without a cloud.

**What works and should remain:** Notes that work without a network.

**Review:** The hero says nothing leaves the machine. The same page promises automatic sync to every laptop. A signup link is present. It does not by itself prove that note content leaves the device.

**Material findings:** harbornote-F001, harbornote-F002, harbornote-F003, harbornote-F004.

**Recommended changes, in order:** Bound the privacy claim to what stays local when sync is off. Publish or remove the whitepaper link. Lead with the notes job. Confirm whether sync can stay off after install.

**Boundary to preserve:** Local-first notes remain the product.

**Evidence and limits:** Fixture text only.

| Dimension | Score | Confidence | Rationale |
| --- | ---: | --- | --- |
| Utility | 6 | medium | Local notes are a real job. Automatic sync blurs the bounded result. |
| Accuracy | 3 | high | Universal privacy language contradicts automatic multi-device sync on the same page. |
| Uniqueness | NR | insufficient | No focused comparison was performed. |
| Quality | 4 | medium | First use starts at a signup URL. The offered privacy paper is a fixture 404. |
| Clarity | 5 | high | A reader can name notes, then has to reconstruct whether the product is local. |
| Aesthetics | NR | insufficient | No rendered UI was inspected. |
| Overall appeal | 4 | medium | The contradiction creates hesitation before first use. |

## Highest-confidence errors and claim issues

The privacy absolute against automatic sync is on the page. The whitepaper 404 is fixture-provided evidence, not a reproduced HTTP failure. Uniqueness is NR because no comparison was performed.

## Prioritized actions

1. Replace "Nothing leaves your machine. Ever." with what actually stays local when sync is off.
2. Publish or remove the privacy whitepaper link.
3. Lead with the notes job before the universal claim.
4. Verify whether an install can leave sync off.

# scorecard.md

| Dimension | Score | Confidence | Rationale |
| --- | ---: | --- | --- |
| Utility | 6 | medium | Local notes are a real job. Automatic sync blurs the bounded result. |
| Accuracy | 3 | high | Universal privacy language contradicts automatic multi-device sync on the same page. |
| Uniqueness | NR | insufficient | No focused comparison was performed. |
| Quality | 4 | medium | First use starts at a signup URL. The offered privacy paper is a fixture 404. |
| Clarity | 5 | high | A reader can name notes, then has to reconstruct whether the product is local. |
| Aesthetics | NR | insufficient | No rendered UI was inspected. |
| Overall appeal | 4 | medium | The contradiction creates hesitation before first use. |

# findings.md

## harbornote-F001

- **Title:** Universal privacy claim contradicts automatic sync
- **Classification:** claim-risk
- **Surface:** fixture hero and "Why teams switch"
- **Evidence:** "Nothing leaves your machine. Ever." sits above "Syncs to every laptop you own." Signup is on the page. Signup alone does not establish that note content leaves the device.
- **Confidence:** high
- **Consequence:** A privacy-seeking user cannot tell what stays local.
- **Priority:** P1
- **Recommended change:** Name which data stays on the machine when sync is off.
- **Status:** open

## harbornote-F002

- **Title:** Privacy whitepaper link is a planted 404
- **Classification:** observed-error
- **Surface:** "See the privacy whitepaper"
- **Evidence:** Fixture-provided. The source file states that URL is a 404 on purpose. This review did not reproduce an HTTP failure.
- **Confidence:** high
- **Consequence:** The proof offered for the privacy claim is missing.
- **Priority:** P1
- **Recommended change:** Publish the paper or remove the link.
- **Status:** open

## harbornote-F003

- **Title:** Job arrives after the absolute promise
- **Classification:** presentation-judgment
- **Surface:** hero
- **Evidence:** The first sentence is a universal guarantee. The notes job is the next paragraph.
- **Confidence:** medium
- **Consequence:** A newcomer has to decode the category after the strongest claim.
- **Priority:** P2
- **Recommended change:** Lead with local notes, then the privacy boundary.
- **Status:** open

## harbornote-F004

- **Title:** Unverified whether sync can stay off after install
- **Classification:** verify-first
- **Surface:** "Every device stays in sync automatically" and the install line
- **Evidence:** The page describes automatic sync and "Install it, type, and you are done." No executable app was inspected.
- **Confidence:** low
- **Consequence:** A local-first user cannot tell if the first install stays offline.
- **Priority:** P2
- **Recommended change:** Confirm on a first install whether sync can be left off. Do not prescribe a settings design until that check is done.
- **Verification needed:** Fresh install, create a note, confirm no outbound sync while the default remains.
- **Status:** open

# coverage.md

| Surface | Status | Notes |
| --- | --- | --- |
| Catalog card | not applicable | Single-subject fixture |
| Landing page | inspected | `fixtures/harbor-note/input.md` |
| Documentation | not applicable | |
| Example or artifact | inspected | This fixture is the example |
| Visual inspection | not inspected | Text only |
| Source code | not inspected | |
| Execution | not inspected | |
| External comparison | not inspected | Uniqueness is NR |

Coverage limitations: fictional subject, no live host, no rendered UI. The whitepaper 404 is stipulated in the fixture text.

A clean review is allowed. This fixture is not one.
