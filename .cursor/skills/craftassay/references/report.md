# Report shape

Write `report.md` first. The other files must agree with it.

Title:

`CraftAssay Review: <subject>`

Then review date, specification version **v1.1**, rubric version **v1.0**.

For a comparison, use `CraftAssay Comparison: <subject>` and add the
baseline mapping after the actions.

## Order

Omit catalog and suite sections when the subject is one project or
one site. Do not invent portfolio content.

1. **Main judgment** — strengths and the principal gap
2. **Coverage and limits** — what was checked, what was not
3. **Catalog assessment** — portfolios only
4. **Scoring definitions** — the seven dimensions, and that Accuracy
   is not a runtime bug rate
5. **Project scorecard** — table, with source links when they exist
6. **Per-project critique** — use the block below
7. **Suite-member detail** — only when children have their own jobs
8. **Highest-confidence errors and claim issues**
9. **Prioritized actions** — a short sequence
10. **Comparison with baseline** — only when a baseline exists
11. **Evidence appendix** — or point at `coverage.md` and `scorecard.md`

## Per-project block

```markdown
### Project name and stable ID

**Subject identity:** ...
**User and job:** ...
**What works and should remain:** ...
**Review:** ...
**Material findings:** ...
**Recommended changes, in order:** ...
**Boundary to preserve:** ...
**Evidence and limits:** ...

| Dimension | Score | Confidence | Rationale |
| --- | ---: | --- | --- |
| Utility | ... | ... | ... |
```

Use direct prose. Explain both positive and negative judgments.
Avoid hype, vague praise, and performative hostility.

For this owner, use the Oxford comma. Avoid em dashes and semicolons
in authored prose. Technical syntax may keep required punctuation.
