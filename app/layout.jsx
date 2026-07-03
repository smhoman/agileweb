import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";
import { StructuredData } from "@/components/structured-data";
import { organizationSchema, pageMetadata, SEARCH_PHRASES, SITE, SITE_URL, websiteSchema } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata({
    title: SITE.title,
    description: SITE.description,
    path: "/",
  }),
  applicationName: SITE.name,
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  keywords: [
    ...SEARCH_PHRASES,
    "operations consulting",
    "organizational strategy",
    "AI-assisted website development",
    "nonprofit consulting",
    "startup operations",
    "strategic planning",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/assets/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={[organizationSchema, websiteSchema]} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
