# Findings — HarborNote

Review date: 2026-09-11.

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
