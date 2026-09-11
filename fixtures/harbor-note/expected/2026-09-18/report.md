# CraftAssay Comparison: HarborNote

Review date: 2026-09-18. Specification v1.1. Rubric v1.0.

Illustrative fixture. Not a live product review.

Baseline: `../2026-09-11/` dated 2026-09-11. This run writes here
only. The baseline folder was not modified.

## Main judgment

The privacy absolute is gone. Notes stay on the device unless the
user turns on sync. First use still starts at signup. The page
still leads with a slogan before the job.

## Coverage and limits

Inspected `fixtures/harbor-note/revised.md` only. Same limits as
the baseline. No executable app. No live host. No rendered UI.

## Scoring definitions

Utility, Accuracy, Uniqueness, Quality, Clarity, Aesthetics, and
Overall appeal. Accuracy is freedom from misleading claims in the
inspected presentation, not a measured bug rate.

## Project scorecard

| Dimension | Score | Confidence |
| --- | ---: | --- |
| Utility | 6 | medium |
| Accuracy | 6 | high |
| Uniqueness | NR | insufficient |
| Quality | 4 | medium |
| Clarity | 6 | high |
| Aesthetics | NR | insufficient |
| Overall appeal | 5 | medium |

## HarborNote (`harbornote.example`)

**User and job:** A person who wants local notes without a cloud.
**What works and should remain:** Notes that work without a network,
and a privacy line that names the sync exception.
**Review:** Automatic sync is now optional. The universal "Ever"
claim is gone. Signup still opens first use. The first sentence is
still a slogan.
**Material findings:** harbornote-F003 (open), harbornote-F004 (open).
**Recommended changes, in order:** Lead with local notes. Confirm
whether a first install can leave sync off.
**Boundary to preserve:** Local-first notes, and the opt-in sync
exception.
**Evidence and limits:** Revised fixture text only.

## Highest-confidence errors and claim issues

No remaining contradiction between a universal privacy guarantee
and automatic sync. Signup is still not treated as proof that note
content leaves the device.

## Prioritized actions

1. Lead with the notes job, then the slogan.
2. Verify whether an install can leave sync off.

## Comparison with baseline

| Finding | Baseline | Current |
| --- | --- | --- |
| harbornote-F001 | open | resolved |
| harbornote-F002 | open | resolved |
| harbornote-F003 | open | open |
| harbornote-F004 | open | open |

| Project | Dimension | Baseline | Current | Delta | Comparability | Evidence and reason |
| --- | --- | ---: | ---: | ---: | --- | --- |
| HarborNote | Utility | 6 | 6 | 0 | matched | The job is still local notes. Bounding the privacy claim did not change usefulness. |
| HarborNote | Accuracy | 3 | 6 | +3 | matched | Product or presentation improvement. The page no longer claims nothing leaves, then promises automatic sync. |
| HarborNote | Uniqueness | NR | NR | 0 | matched | Still no focused comparison. |
| HarborNote | Quality | 4 | 4 | 0 | matched | The whitepaper 404 is gone. First use still starts at signup, so the score does not move. |
| HarborNote | Clarity | 5 | 6 | +1 | matched | Product or presentation improvement. A reader can now name when notes stay local. One-point editorial judgment. |
| HarborNote | Aesthetics | NR | NR | 0 | matched | Still no rendered UI. |
| HarborNote | Overall appeal | 4 | 5 | +1 | matched | Product or presentation improvement. The contradiction that caused hesitation is gone. Signup still sits on first use. |

A finding can resolve without a score change. Utility stayed at 6
after F001 was corrected. Quality stayed at 4 after F002 was
corrected.
