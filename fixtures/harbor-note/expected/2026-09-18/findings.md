# Findings — HarborNote

Review date: 2026-09-18. Baseline 2026-09-11.

## harbornote-F001

- **Title:** Universal privacy claim contradicts automatic sync
- **Classification:** claim-risk
- **Surface:** revised hero and "Why teams switch"
- **Evidence:** The "Ever" line is gone. The page says notes stay on this device unless the user turns on sync. Automatic sync is no longer promised.
- **Confidence:** high
- **Consequence:** A privacy-seeking user can now see the default.
- **Priority:** P1
- **Recommended change:** None. Keep the opt-in exception.
- **Status:** resolved
- **Prior finding id:** harbornote-F001

## harbornote-F002

- **Title:** Privacy whitepaper link is a planted 404
- **Classification:** observed-error
- **Surface:** revised page
- **Evidence:** The revised fixture removes the whitepaper link and the planted 404 stipulation.
- **Confidence:** high
- **Consequence:** The missing proof is no longer offered.
- **Priority:** P1
- **Recommended change:** None.
- **Status:** resolved
- **Prior finding id:** harbornote-F002

## harbornote-F003

- **Title:** Job arrives after the slogan
- **Classification:** presentation-judgment
- **Surface:** hero
- **Evidence:** The first sentence is still "Notes that stay with you." The notes job is the next paragraph.
- **Confidence:** medium
- **Consequence:** A newcomer still decodes the category after the slogan.
- **Priority:** P2
- **Recommended change:** Lead with local notes, then the line about staying with you.
- **Status:** open
- **Prior finding id:** harbornote-F003

## harbornote-F004

- **Title:** Unverified whether sync can stay off after install
- **Classification:** verify-first
- **Surface:** "unless you turn on sync" and the install line
- **Evidence:** The revised page claims an opt-in. No executable app was inspected. The next check is unchanged.
- **Confidence:** low
- **Consequence:** A local-first user still cannot confirm the default on a real install.
- **Priority:** P2
- **Recommended change:** Confirm on a first install whether sync can be left off.
- **Verification needed:** Fresh install, create a note, confirm no outbound sync while the default remains.
- **Status:** open
- **Prior finding id:** harbornote-F004
