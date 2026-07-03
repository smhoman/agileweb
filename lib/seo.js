export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://agileconsultingil.com";

export const SITE = {
  name: "Agile Consulting",
  title: "Agile Consulting | Strategy, Operations & AI-Assisted Websites",
  description:
    "Agile Consulting helps startups, nonprofits, and growing organizations build strategy, operations, infrastructure, and AI-assisted websites that scale cleanly.",
  email: "agileconsultingil@gmail.com",
  founder: "Sarah Homan",
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({ title, description, path = "/" }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      type: "website",
      images: [
        {
          url: "/assets/headshot.jpg",
          width: 1080,
          height: 1601,
          alt: "Sarah Homan, founder of Agile Consulting",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/headshot.jpg"],
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  url: SITE_URL,
  email: SITE.email,
  founder: {
    "@type": "Person",
    name: SITE.founder,
  },
  image: absoluteUrl("/assets/headshot.jpg"),
  logo: absoluteUrl("/assets/favicon.svg"),
  description: SITE.description,
  areaServed: "United States",
  slogan: "Build like a startup. Operate like an institution.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-assisted brand and website development",
          serviceType: "Brand and website development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Organizational strategy and growth consulting",
          serviceType: "Strategy consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations and infrastructure consulting",
          serviceType: "Operations consulting",
        },
      },
    ],
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE.name,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  description: SITE.description,
};

export const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Agile Consulting services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "AI-assisted brand and website development",
        description: "Custom responsive websites, brand experiences, positioning, architecture, and content built with modern AI-assisted workflows.",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Organizational strategy and growth",
        description: "Strategic planning, scaling roadmaps, mission and values work, board planning, and executive support.",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Operations and infrastructure",
        description: "Business process design, operating models, HR foundations, workflows, and AI-enabled operational systems.",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
};