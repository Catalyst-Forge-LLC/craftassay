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

URL and paste reviews share that last parent. Do not treat every
run under it as the same subject.

## Run folder

Write to `<parent>/<YYYY-MM-DD>/`.

If that directory already exists, use `<YYYY-MM-DD>-2`, then
`-3`, and so on.

Never write into a directory that already contains `report.md`.
Never write into a supplied baseline path.

## Subject identity

Record identity before you search for a baseline. Write it on the
report as `**Subject identity:** …`.

| Subject | Identity |
| --- | --- |
| A file | The file path you reviewed |
| A named folder or system | That root path |
| A URL | Scheme, host, and the relevant path. Not the domain alone. Ignore fragment. Ignore a trailing slash. Keep a query only when it selects the page |
| A paste | The title they named, or the first heading. If neither exists, ask |

Also record the intended audience and included surfaces. That is
the scope.

## Finding an earlier local review

Do this **before** you create the current run folder or write
`report.md`. Newest must not mean the report you are about to write.

1. A baseline they attached wins. Use it. Do not modify it. An
   explicit request to compare two different subjects also wins.
2. Else look under the parent folder for runs that already contain
   `report.md`. Keep a candidate only when **subject identity
   matches** and **scope is compatible** (same audience and
   included surfaces, or a stated superset). For URLs, the path
   must match, not only the host.
3. Among matching candidates, take the newest.
4. If none match, this is an initial review. Do not invent a
   baseline from an unrelated site or paste in the same folder.

A dated or numbered run folder is enough. No database.
