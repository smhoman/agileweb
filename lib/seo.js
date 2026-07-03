export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://agileconsulting.work";

export const SITE = {
  name: "Agile Consulting",
  title: "Agile Consulting | Strategy, Operations & AI-Assisted Websites",
  description:
    "Agile Consulting helps startups, nonprofits, and growing organizations build strategy, operations, infrastructure, and AI-assisted websites that scale cleanly.",
  email: "agileconsultingil@gmail.com",
  founder: "Sarah Homan",
};

export const SEARCH_PHRASES = [
  "nonprofit strategic planning consultant",
  "Chicago strategic planning facilitator",
  "fractional chief of staff consultant",
  "operations consultant for small business",
  "nonprofit operations consultant",
  "website designer for nonprofits",
  "website development for small businesses",
  "AI consultant for nonprofits",
  "business process improvement consultant",
  "organizational development consultant",
];

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function pageMetadata({ title, description, path = "/", keywords = [] }) {
  return {
    title,
    description,
    keywords: [...SEARCH_PHRASES, ...keywords],
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
  keywords: SEARCH_PHRASES.join(", "),
  knowsAbout: SEARCH_PHRASES,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI-assisted brand and website development",
          alternateName: [
            "website designer for nonprofits",
            "website development for small businesses",
            "AI consultant for nonprofits",
          ],
          serviceType: ["Brand and website development", "Website design", "AI consulting"],
          keywords: "website designer for nonprofits, website development for small businesses, AI consultant for nonprofits",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Organizational strategy and growth consulting",
          alternateName: [
            "nonprofit strategic planning consultant",
            "Chicago strategic planning facilitator",
            "organizational development consultant",
          ],
          serviceType: ["Strategy consulting", "Strategic planning facilitation", "Organizational development"],
          keywords: "nonprofit strategic planning consultant, Chicago strategic planning facilitator, organizational development consultant",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Operations and infrastructure consulting",
          alternateName: [
            "fractional chief of staff consultant",
            "operations consultant for small business",
            "nonprofit operations consultant",
            "business process improvement consultant",
          ],
          serviceType: ["Operations consulting", "Fractional chief of staff", "Business process improvement"],
          keywords: "fractional chief of staff consultant, operations consultant for small business, nonprofit operations consultant, business process improvement consultant",
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
  keywords: SEARCH_PHRASES.join(", "),
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
        alternateName: ["website designer for nonprofits", "website development for small businesses", "AI consultant for nonprofits"],
        serviceType: ["Website design", "Website development", "AI consulting"],
        description: "Custom responsive websites, brand experiences, positioning, architecture, and content built with modern AI-assisted workflows.",
        keywords: "website designer for nonprofits, website development for small businesses, AI consultant for nonprofits",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Organizational strategy and growth",
        alternateName: ["nonprofit strategic planning consultant", "Chicago strategic planning facilitator", "organizational development consultant"],
        serviceType: ["Strategic planning", "Strategic planning facilitation", "Organizational development"],
        description: "Strategic planning, scaling roadmaps, mission and values work, board planning, and executive support.",
        keywords: "nonprofit strategic planning consultant, Chicago strategic planning facilitator, organizational development consultant",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Operations and infrastructure",
        alternateName: ["fractional chief of staff consultant", "operations consultant for small business", "nonprofit operations consultant", "business process improvement consultant"],
        serviceType: ["Operations consulting", "Fractional chief of staff", "Business process improvement"],
        description: "Business process design, operating models, HR foundations, workflows, and AI-enabled operational systems.",
        keywords: "fractional chief of staff consultant, operations consultant for small business, nonprofit operations consultant, business process improvement consultant",
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    },
  ],
};