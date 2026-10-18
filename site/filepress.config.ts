import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/craftassay";
const npm = "https://www.npmjs.com/package/craftassay";

export default defineFilepressConfig({
	title: "CraftAssay",
	description: "Give your agent a tool, page, or portfolio. CraftAssay checks whether its value comes across, weighs the evidence, and ranks useful improvements. A later review shows what changed.",
	tagline: "What works, what creates friction, and what to improve first.",
	lede: "Review and comparison skill for your AI agent",
	url: "https://craftassay.dev",
	author: "Catalyst Forge LLC",
	logo: "/logo.png",
	ogImage: "/logo.png",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Docs", href: "/docs/" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "See the rest of the Catalyst Forge shelf.", href: "https://catalystforge.com/tools/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
		{ label: "craftassay.com", href: "https://craftassay.com" },
	],
	topics: [],
	paths: [{ url: "/docs", dir: "docs/dist" }],
});
