import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/craftassay";
const npm = "https://www.npmjs.com/package/craftassay";

export default defineFilepressConfig({
	title: "CraftAssay",
	description:
		"Evidence-backed reviews of usefulness, clarity, quality, and presentation. An agent with the skill writes the report.",
	tagline: "What works, what creates friction, and what to improve first.",
	url: "https://craftassay.dev",
	author: "Catalyst Forge LLC",
	logo: "/logo.png",
	ogImage: "/logo.png",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Docs", href: "/docs/" },
		{ label: "Install", href: "/docs/install" },
		{ label: "Skill", href: "/docs/skill" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "Docs", href: "/docs/" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
		{ label: "craftassay.com", href: "https://craftassay.com" },
	],
	topics: [],
	paths: [{ url: "/docs", dir: "docs/dist" }],
});
