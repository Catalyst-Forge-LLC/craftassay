import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { test } from "node:test";
import { assertSkillsPresent, packageRoot, skillDir, skillNames } from "./index.js";

test("skill folders ship SKILL.md", () => {
	assert.deepEqual(assertSkillsPresent(), []);
	for (const name of skillNames) {
		assert.ok(existsSync(join(skillDir(name), "SKILL.md")), name);
	}
});

function readSkill(): string {
	return readFileSync(join(skillDir("craftassay"), "SKILL.md"), "utf8").replace(
		/\r\n/g,
		"\n",
	);
}

test("comb skill is the review workflow and does not name a CLI", () => {
	const skill = readSkill();
	assert.match(skill, /^---\nname: craftassay\n/m);
	assert.match(skill, /Write the deliverables using `references\/report\.md`/);
	assert.match(skill, /## Review workflow/);
	assert.match(skill, /Do not issue a release-readiness verdict/);
	assert.match(skill, /references\/output\.md/);
	assert.doesNotMatch(skill, /## The hour/);
	assert.doesNotMatch(skill, /No action → drop/);
	assert.doesNotMatch(skill, /npx craftassay/);
	assert.doesNotMatch(skill, /API key/);
	const folded =
		skill
			.match(/^---\n([\s\S]*?)\n---/)?.[1]
			?.match(/description:\s*>-\n([\s\S]*)$/)?.[1]
			?.replace(/\s+/g, " ")
			.trim() ?? "";
	assert.ok(folded.length > 0 && folded.length <= 200, `skill description is ${folded.length} chars`);
});

test("package ships skills and has no bin", () => {
	const pkg = JSON.parse(readFileSync(join(packageRoot, "package.json"), "utf8")) as {
		bin?: unknown;
		files: string[];
		exports: Record<string, unknown>;
	};
	assert.equal(pkg.bin, undefined);
	assert.ok(pkg.files.includes("skills"));
	assert.ok("./skills/*" in pkg.exports);
});

test("public copy names the product and the landing example", () => {
	const home = readFileSync(join(packageRoot, "site", "pages", "home.md"), "utf8");
	const readme = readFileSync(join(packageRoot, "README.md"), "utf8");
	const filepress = readFileSync(join(packageRoot, "site", "filepress.config.ts"), "utf8");
	assert.match(filepress, /What works, what creates friction, and what to improve first/);
	assert.match(home, /title: See your work with fresh eyes/);
	assert.doesNotMatch(home, /title: What works, what creates friction/);
	assert.match(home, /## See a sample review/);
	assert.match(home, /nothing leaves the machine/);
	assert.match(home, /CraftAssay and Cold-eye/);
	assert.match(home, /node_modules\/craftassay\/skills\/craftassay\//);
	assert.match(home, /Cold-eye/);
	assert.match(home, /Smell Check/);
	assert.doesNotMatch(home, /Sibling of/);
	assert.doesNotMatch(home, /Not Cold-eye/);
	assert.doesNotMatch(home, /npm \*\*`craftassay`\*\*/);
	assert.match(readme, /installable review skill/i);
	assert.match(readme, /does not run an automatic scanner/);
	assert.doesNotMatch(home, /npx craftassay/);
	const about = readFileSync(join(packageRoot, "site", "pages", "about.md"), "utf8");
	assert.match(home, /An assay tests what something is made of/);
	assert.match(about, /An assay is a test of composition and quality/);
	assert.match(about, /CraftAssay/);
	assert.doesNotMatch(about, /capitalization/);
	assert.doesNotMatch(about, /second word/);
	assert.doesNotMatch(about, /\*\*Assay\*\*/);
	assert.match(about, /craftassay\.dev/);
	assert.match(about, /craftassay\.com/);
	assert.match(home, /\[About\]\(\/about\)/);
	assert.doesNotMatch(home, /Why the name/);
	const logo = readFileSync(join(packageRoot, "site", "static", "logo.png"));
	assert.equal(logo.readUInt32BE(0), 0x89504e47);
	assert.ok(logo.length > 10_000);
});

test("docs nav has a markdown file for every item", () => {
	const nav = JSON.parse(
		readFileSync(join(packageRoot, "site", "docs", "_nav.json"), "utf8"),
	) as { sections: Array<{ items: Array<{ id: string }> }> };
	for (const section of nav.sections) {
		for (const item of section.items) {
			assert.ok(existsSync(join(packageRoot, "site", "docs", `${item.id}.md`)), item.id);
		}
	}
	execFileSync("node", [join(packageRoot, "site", "scripts", "build-docs.mjs")], {
		cwd: join(packageRoot, "site"),
	});
	assert.ok(existsSync(join(packageRoot, "site", "docs", "dist", "index.html")));
	assert.ok(existsSync(join(packageRoot, "site", "docs", "dist", "skill", "index.html")));
});

test("static sync copies the skill onto the site", () => {
	execFileSync("node", [join(packageRoot, "scripts", "sync-skill-static.mjs")], {
		cwd: packageRoot,
	});
	const skillSrc = readFileSync(join(skillDir("craftassay"), "SKILL.md"), "utf8");
	const skillStatic = readFileSync(
		join(packageRoot, "site", "static", "skills", "craftassay", "SKILL.md"),
		"utf8",
	);
	const skillCursor = readFileSync(
		join(packageRoot, ".cursor", "skills", "craftassay", "SKILL.md"),
		"utf8",
	);
	assert.equal(skillStatic, skillSrc);
	assert.equal(skillCursor, skillSrc);
	const zipPath = join(packageRoot, "site", "static", "skills", "craftassay.zip");
	assert.ok(existsSync(zipPath));
	const zip = readFileSync(zipPath);
	assert.equal(zip.readUInt32LE(0), 0x04034b50);
});

test("install and files pages name the hook and finish the redirects", () => {
	const install = readFileSync(join(packageRoot, "site", "docs", "install.md"), "utf8");
	assert.match(install, /does not run an automatic scanner/);
	assert.match(install, /## Cursor or Claude Code/);
	assert.match(install, /## claude\.ai/);
	assert.match(install, /Do not unzip/);
	assert.match(install, /craftassay\.zip/);
	assert.doesNotMatch(install, /missing from the package/);
	assert.ok(!existsSync(join(packageRoot, "site", "pages", "install.md")));
	assert.ok(!existsSync(join(packageRoot, "site", "pages", "skill.md")));
	const redirects = readFileSync(join(packageRoot, "site", "static", "_redirects"), "utf8");
	assert.match(redirects, /\/install \/docs\/install 308/);
	assert.match(redirects, /\/skill \/docs\/skill 308/);
	const filepress = readFileSync(join(packageRoot, "site", "filepress.config.ts"), "utf8");
	assert.match(filepress, /href: "\/docs\/install"/);
	assert.match(filepress, /href: "\/docs\/skill"/);
	assert.match(filepress, /url: "https:\/\/craftassay\.dev"/);
	assert.doesNotMatch(filepress, /href: "\/install"/);
	assert.doesNotMatch(filepress, /href: "\/posts"/);
});

test("fixture shows report shape without scoring a live portfolio", () => {
	const first = join(packageRoot, "fixtures", "harbor-note", "expected", "2026-09-11");
	const second = join(packageRoot, "fixtures", "harbor-note", "expected", "2026-09-18");
	for (const dir of [first, second]) {
		for (const name of ["report.md", "scorecard.md", "findings.md", "coverage.md"]) {
			assert.ok(existsSync(join(dir, name)), `${dir} ${name}`);
		}
	}
	const report = readFileSync(join(first, "report.md"), "utf8");
	assert.match(report, /CraftAssay Review: HarborNote/);
	assert.match(report, /Illustrative fixture/);
	assert.match(report, /Uniqueness \| NR/);
	assert.match(report, /fixture-provided/);
	assert.match(report, /Aesthetics\s+was not rated because no rendered UI was inspected/);
	assert.match(report, /\*\*Subject identity:\*\* https:\/\/harbornote\.example\//);
	assert.doesNotMatch(report, /Aesthetic score is from this text page/);
	const comparison = readFileSync(join(second, "report.md"), "utf8");
	assert.match(comparison, /CraftAssay Comparison: HarborNote/);
	assert.match(comparison, /harbornote-F001 \| open \| resolved/);
	assert.match(comparison, /Utility \| 6 \| 6 \| 0/);
	assert.match(comparison, /Uniqueness \| NR \| NR \| n\/a/);
	assert.match(comparison, /Aesthetics \| NR \| NR \| n\/a/);
	assert.doesNotMatch(comparison, /Uniqueness \| NR \| NR \| 0/);
	assert.doesNotMatch(comparison, /Aesthetics \| NR \| NR \| 0/);
	const findings1 = readFileSync(join(first, "findings.md"), "utf8");
	assert.match(findings1, /verify-first/);
	assert.match(findings1, /Signup alone does not establish/);
	const output = readFileSync(join(skillDir("craftassay"), "references", "output.md"), "utf8");
	assert.match(output, /subject identity/);
	assert.match(output, /the path\s+must match, not only the host/i);
	assert.match(output, /before.*create the current run folder/i);
	assert.match(output, /explicit request to compare two different subjects/i);
	const skill = readSkill();
	assert.match(skill, /Discover any baseline \*\*now\*\*, before you write/);
	const siteReport = readFileSync(join(packageRoot, "site", "docs", "sample-report.md"), "utf8");
	assert.match(siteReport, /Aesthetics was not rated because no rendered UI was inspected/);
	const siteComparison = readFileSync(
		join(packageRoot, "site", "docs", "sample-comparison.md"),
		"utf8",
	);
	assert.match(siteComparison, /Uniqueness \| NR \| NR \| n\/a/);
	assert.match(siteComparison, /Aesthetics \| NR \| NR \| n\/a/);
});
