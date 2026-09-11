# Findings

Each material finding should contain:

```yaml
finding_id: "project-id-F001"
project_id: "project-id"
title: "Specific issue or opportunity"
classification: "observed-error | source-backed-discrepancy | claim-risk | presentation-judgment | verify-first"
surface: "Exact page, artifact, or inspected behavior"
evidence: "What was observed, with an appropriate source"
observed_at: "ISO date/time if available"
subject_version: null
confidence: "high | medium | low"
consequence: "Why this matters to the intended user"
priority: "P1 | P2 | P3"
recommended_change: "Smallest sufficient correction"
acceptance_criteria: []
verification_needed: "Focused next check, if any"
status: "open | resolved | partially-resolved | unchanged | regressed | not-rechecked | superseded | withdrawn"
prior_finding_id: null
```

## Classification

- **observed-error** — a specific contradiction, incorrect link,
  metadata mismatch, or reproduced defect in scope
- **source-backed-discrepancy** — a claim differs from a relevant
  authoritative source. Check versions first
- **claim-risk** — wording is broader than the presented evidence
- **presentation-judgment** — editorial or visual assessment on
  the user's path
- **verify-first** — an unresolved implementation question. Say
  what to inspect before prescribing a fix

## Priority

- **P1** — consequential claim or consistency problem, or a major
  obstacle to understanding or first use
- **P2** — examples, documentation, visual proof, or an established
  workflow
- **P3** — optional enhancement. Keep it off the required list

Prefer correcting a page over changing correct runtime behavior to
defend an exaggerated claim. Prefer showing an existing capability
over building a new one. Preserve successful boundaries.

Do not invent a security emergency from a copy issue.

On a comparison, stable IDs matter more than original wording.
`withdrawn` means the original finding was mistaken. `superseded`
means the product changed. `not-rechecked` means evidence was
unavailable. None of those is resolved.
