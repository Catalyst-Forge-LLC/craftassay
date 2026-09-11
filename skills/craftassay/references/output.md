# Output folders

Each review run gets its own directory. Required filenames stay
`report.md`, `scorecard.md`, `findings.md`, and `coverage.md`
inside that run folder.

## Parent folder

| Subject | Parent |
| --- | --- |
| A file | `<stem>.craftassay/` next to the file. `README.md` → `README.craftassay/` |
| A named folder or system | `craftassay/` at that root |
| A URL or paste with no project directory | `subject.craftassay/` in the working directory |

## Run folder

Write to `<parent>/<YYYY-MM-DD>/`.

If that directory already exists, use `<YYYY-MM-DD>-2`, then
`-3`, and so on.

Never write into a directory that already contains `report.md`.
Never write into a supplied baseline path.

## Finding an earlier local review

1. A baseline they attached wins. Use it. Do not modify it.
2. Else look under the parent folder for the newest run that
   contains `report.md`. Prefer a `CraftAssay Review:` or
   `CraftAssay Comparison:` title.
3. If none exists, this is the first review.

A dated or numbered run folder is enough. No database.
