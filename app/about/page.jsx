import { About } from "@/components/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
	title: "About Sarah Homan | Agile Consulting",
	description: "Learn about Sarah Homan's founder-led approach to operations, organizational strategy, AI-assisted execution, and sustainable growth systems.",
	path: "/about",
});
export default function Page(){ return <About />; }
