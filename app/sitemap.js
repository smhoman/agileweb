import { SITE_URL } from "@/lib/seo";

const routes = ["/", "/about", "/services", "/contact"];

export default function sitemap() {
  return routes.map((route) => ({
    url: new URL(route, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}