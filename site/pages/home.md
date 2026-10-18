---
title: "Know what to improve first."
description: "Give your agent a tool, page, or portfolio. CraftAssay checks whether its value comes across, weighs the evidence, and ranks useful improvements. A later review shows what changed."
order: 0
---

<section class="value-hero" aria-label="CraftAssay overview"><div class="value-intro"><div class="value-headline"><p class="value-kind">Review and comparison skill for your AI agent</p><h1>Know what to improve first.</h1></div><div class="value-pitch"><p class="value-lede">Give your agent a tool, page, or portfolio. CraftAssay checks whether its value comes across, weighs the evidence, and ranks useful improvements. A later review shows what changed.</p><div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install CraftAssay</a><a class="cta cta-secondary" href="#see-a-sample-review">See the finding and correction</a></div><p class="value-limit">Four review files, seven dimensions. An assessment, not a certification. The source stays unchanged.</p></div></div>
<figure class="value-proof worked-example" id="see-a-sample-review" tabindex="-1">
<figcaption>Resolve a privacy promise that contradicts itself</figcaption>
<p class="example-context">HarborNote is a fictional notes app. These excerpts connect its sample review, the author’s revised page, and the later comparison.</p>
<section class="example-step" aria-labelledby="example-step-1">
<h2 id="example-step-1"><span>1 · Original page</span> Can my notes leave this device?</h2>
<blockquote><p>“Nothing leaves your machine. Ever.”<br>“Syncs to every laptop you own.”</p></blockquote><p>The page offers both claims without explaining how they fit together.</p>
</section>
<section class="example-step example-report" aria-labelledby="example-step-2">
<h2 id="example-step-2"><span>2 · CraftAssay finding</span> Fix the claim before polishing the pitch</h2>
<p><strong>harbornote-F001 · P1 · claim-risk</strong><br>Surface: the page’s privacy and sync claims.</p><p>A privacy-seeking reader cannot tell what stays local. Name which data stays on the machine when sync is off.</p><p>P1 is the highest priority. The finding gives the author a specific correction to make.</p>
</section>
<section class="example-step" aria-labelledby="example-step-3">
<h2 id="example-step-3"><span>3 · Author edit + later review</span> The choice is now explicit</h2>
<blockquote><p>Notes stay on this device unless you turn on sync.</p></blockquote><p><strong>Later comparison:</strong> <code>harbornote-F001 → resolved</code></p><p class="example-payoff">Readers can distinguish local notes from optional sync. The review checks that the contradiction is gone.</p>
</section>
<p class="value-note">This is a review of fictional copy, not a privacy audit. The author makes the edit. Scores support the finding: Accuracy moves from 3 to 6; Utility stays 6.</p>
<p class="example-links"><a href="/docs/sample-report">Read the full review</a> · <a href="/docs/sample-comparison">Inspect the later comparison</a></p>
</figure></section>

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A tool, site, skill, spec, portfolio, URL, or paste |
| Writes | A dated run folder: `report.md`, a scorecard, findings, and coverage |
| Changes | Nothing. Read the findings, then make the smallest useful correction yourself or ask the agent for that named edit |

| Label | Means |
| --- | --- |
| **Review** | Inspect, assess, score, and recommend |
| **Findings** | Specific issues with evidence and the smallest useful correction |
| **Scores** | Seven dimensions from 1 to 10, or NR (not rated) when evidence is missing |
| **Evidence** | What was inspected, and what was not |
| **Compare versions** | Finding status and explained score changes |

Accuracy is freedom from misleading claims in the inspected presentation. It is not a measured bug rate.

## CraftAssay and Cold-eye

[Cold-eye](https://coldeye.dev) asks whether a newcomer can use what is presented as ready. CraftAssay asks how useful, clear, credible, and well-presented the work is. First-use friction still belongs in a CraftAssay finding when it affects those scores. CraftAssay does not issue a release-readiness verdict. A clean Cold-eye review does not mean CraftAssay will score the work highly.

[Smell Check](https://smellcheck.dev) reviews unearned language. [Detangler](https://detangler.dev) reviews what editing tangled.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT. [About](/about)
