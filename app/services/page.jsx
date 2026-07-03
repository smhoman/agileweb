import { Services } from "@/components/services";
import { StructuredData } from "@/components/structured-data";
import { pageMetadata, servicesSchema } from "@/lib/seo";

export const metadata = pageMetadata({
	title: "Consulting Services | Strategy, Operations & Websites",
	description: "Explore Agile Consulting services for AI-assisted brand and website development, organizational strategy, growth roadmaps, and operations infrastructure.",
	path: "/services",
	keywords: [
		"strategic planning facilitation",
		"fractional operations support",
		"nonprofit website design",
		"small business website development",
	],
});

export default function Page(){ return <><StructuredData data={servicesSchema} /><Services /></>; }
