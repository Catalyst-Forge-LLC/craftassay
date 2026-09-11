# CraftAssay Review: HarborNote

Review date: 2026-09-11. Specification v1.1. Rubric v1.0.

Illustrative fixture. Not a live product review.

## Main judgment

The page names a local notes job, then immediately contradicts it.
The strongest line is the offline claim. The principal gap is the
universal privacy wording against automatic multi-device sync.

## Coverage and limits

Inspected the fixture page only. No executable app, no live host,
no competing notes tools beyond a labeled inference. Aesthetics
was not rated because no rendered UI was inspected.

## Scoring definitions

Utility, Accuracy, Uniqueness, Quality, Clarity, Aesthetics, and
Overall appeal. Accuracy is freedom from misleading claims in the
inspected presentation, not a measured bug rate.

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
**Review:** The hero says nothing leaves the machine. The same page
promises automatic sync to every laptop. A signup link is present.
It does not by itself prove that note content leaves the device.
**Material findings:** harbornote-F001, harbornote-F002,
harbornote-F003, harbornote-F004.
**Recommended changes, in order:** Bound the privacy claim to what
stays local when sync is off. Publish or remove the whitepaper
link. Lead with the notes job. Confirm whether sync can stay off
after install.
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

The privacy absolute against automatic sync is on the page. The
whitepaper 404 is fixture-provided evidence, not a reproduced HTTP
failure. Uniqueness is NR because no comparison was performed.

## Prioritized actions

1. Replace "Nothing leaves your machine. Ever." with what actually
   stays local when sync is off.
2. Publish or remove the privacy whitepaper link.
3. Lead with the notes job before the universal claim.
4. Verify whether an install can leave sync off.
