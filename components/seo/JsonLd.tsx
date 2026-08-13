import { CONTACT, SITE_URL, SOCIAL } from "@/lib/site-data";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

function Ld({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: "Digivanta",
        alternateName: "Digivanta Digital Marketing",
        description:
          "Digital marketing company in Delhi offering SEO, PPC, social media marketing, content marketing, graphic design, web and mobile app development.",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/D%20full.png`,
          contentUrl: `${SITE_URL}/D%20full.png`,
          width: 2048,
          height: 2048,
        },
        image: `${SITE_URL}/og-digivanta.png`,
        email: CONTACT.email,
        telephone: CONTACT.phoneHref.replace("tel:", ""),
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Delhi",
          addressRegion: "Delhi",
          addressCountry: "IN",
        },
        areaServed: ["Delhi", "New Delhi", "Noida", "Gurugram", "Delhi NCR"].map((name) => ({
          "@type": "Place",
          name,
        })),
        contactPoint: {
          "@type": "ContactPoint",
          telephone: CONTACT.phoneHref.replace("tel:", ""),
          email: CONTACT.email,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["en", "hi"],
        },
        sameAs: SOCIAL.filter((social) => social.href && social.href !== "#").map((social) => social.href),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": SITE_ID,
        url: SITE_URL,
        name: "Digivanta",
        alternateName: "Digivanta Digital Marketing",
        publisher: { "@id": ORG_ID },
        inLanguage: "en-IN",
      }}
    />
  );
}

export function WebPageJsonLd({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "ProfilePage";
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": type,
        "@id": `${SITE_URL}${path}#webpage`,
        url: `${SITE_URL}${path}`,
        name,
        description,
        isPartOf: { "@id": SITE_ID },
        about: { "@id": ORG_ID },
        inLanguage: "en-IN",
      }}
    />
  );
}

export function ServiceJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${SITE_URL}${path}#service`,
        name,
        description,
        serviceType: name,
        url: `${SITE_URL}${path}`,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}${path}#webpage`,
          url: `${SITE_URL}${path}`,
          name,
          isPartOf: { "@id": SITE_ID },
        },
        provider: { "@id": ORG_ID },
        areaServed: ["Delhi", "New Delhi", "Noida", "Gurugram", "Delhi NCR"].map((area) => ({
          "@type": "Place",
          name: area,
        })),
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: `${SITE_URL}${path}`,
          servicePhone: CONTACT.phoneHref.replace("tel:", ""),
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      }}
    />
  );
}

export function FaqJsonLd({ items, path = "/faq" }: { items: { question: string; answer: string }[]; path?: string }) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${SITE_URL}${path}#faq`,
        url: `${SITE_URL}${path}`,
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}
