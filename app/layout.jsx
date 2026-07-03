import "./globals.css";
import { SiteChrome } from "@/components/site-chrome";

export const metadata = {
  title: "Agile Consulting",
  description: "Build like a startup. Operate like an institution. Systems, strategy, and operations for organizations that want to mature fast.",
  icons: { icon: "/assets/favicon.svg" },
};

export default function RootLayout({ children }) {
  return (<html lang="en"><body><SiteChrome>{children}</SiteChrome></body></html>);
}
