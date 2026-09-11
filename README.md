<p align="center">
  <img src="site/static/logo.png" alt="CraftAssay" width="128" />
</p>

# CraftAssay

An installable review skill for AI agents.

An assay tests what something is made of, and how good it is.
CraftAssay does that for a tool, a site, or a page. It writes
findings and scores that can be compared across revisions.
npm **`craftassay`**.

The report is an assessment, not a certification.

**Docs:** [craftassay.dev/docs](https://craftassay.dev/docs) · **Site:** [craftassay.dev](https://craftassay.dev)

## Review, then decide

Submit a tool, a site, a skill, a spec, or a portfolio. The agent
writes a dated run folder with `report.md` plus a scorecard,
findings, and coverage. The skill does not edit the source.

A later pass with the earlier report attached becomes a comparison.
It does not overwrite the earlier folder.

## Install

```bash
pnpm add -D craftassay
```

Copy `node_modules/craftassay/skills/craftassay/` to
`.cursor/skills/craftassay`. Or skip npm and
[install the skill](https://craftassay.dev/docs/install) as a folder.

The package does not run an automatic scanner. The reviewing agent
may inspect project files you point it at. v1 has no CLI.

## CraftAssay and Cold-eye

[Cold-eye](https://coldeye.dev) reviews readiness for a claimed
first-use path. CraftAssay reviews usefulness, clarity, quality, and
presentation, including first-use friction that affects those
scores. It does not issue a release-readiness verdict.
[Smell Check](https://smellcheck.dev) reviews unearned language.
[Detangler](https://detangler.dev) reviews what editing tangled.

## Development

```bash
pnpm install
pnpm test
pnpm site:dev
```

Site (FilePress + docs mount): `pnpm ship`.
npm: `pnpm publish` (you). There is no `publish` script. `prepublishOnly` runs the tests first.
Agents must not run `npm publish`.

## License

MIT. Copyright Catalyst Forge LLC.
