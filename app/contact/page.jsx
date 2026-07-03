import { Contact } from "@/components/contact";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
	title: "Contact Agile Consulting | Start an Engagement",
	description: "Contact Agile Consulting to discuss strategy, operations, infrastructure, or AI-assisted website work for your startup, nonprofit, or growing organization.",
	path: "/contact",
});
export default function Page(){ return <Contact />; }
