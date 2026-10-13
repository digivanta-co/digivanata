import type { ReactNode } from "react";
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
  streetAddress: "4th floor, Plot no. 120, Block A, Sewak Park, Uttam Nagar",
  addressLocality: "New Delhi",
  addressRegion: "Delhi",
  postalCode: "110059",
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
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage" | "ProfilePage" | "CollectionPage";
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

export function ArticleJsonLd({
  title,
  description,
  path,
  image,
  publishedAt,
  modifiedAt,
  authorName,
}: {
  title: string;
  description?: string;
  path: string;
  image?: string;
  publishedAt?: string;
  modifiedAt?: string;
  authorName?: string;
}) {
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${SITE_URL}${path}#article`,
        headline: title,
        ...(description ? { description } : {}),
        url: `${SITE_URL}${path}`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${path}#webpage` },
        ...(image ? { image } : {}),
        ...(publishedAt ? { datePublished: publishedAt } : {}),
        dateModified: modifiedAt || publishedAt,
        author: authorName
          ? { "@type": "Person", name: authorName }
          : { "@type": "Organization", name: "Digivanta" },
        publisher: {
          "@type": "Organization",
          name: "Digivanta",
          logo: { "@type": "ImageObject", url: `${SITE_URL}/D%20full.png` },
        },
        isPartOf: { "@id": SITE_ID },
        inLanguage: "en-IN",
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

export function FaqJsonLd({
  items,
  path = "/faq",
}: {
  items: { question: string; answer: ReactNode }[];
  path?: string;
}) {
  // JSON-LD answers must be plain text; keep only string answers.
  const entries = items
    .map((item) => ({ question: item.question, answer: typeof item.answer === "string" ? item.answer : "" }))
    .filter((item) => item.question && item.answer);
  if (!entries.length) return null;
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${SITE_URL}${path}#faq`,
        url: `${SITE_URL}${path}`,
        mainEntity: entries.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }}
    />
  );
}

export function PersonListJsonLd({
  people,
  path,
}: {
  people: { name: string; role?: string; image?: string }[];
  path: string;
}) {
  const valid = people.filter((p) => p.name);
  if (!valid.length) return null;
  return (
    <Ld
      data={{
        "@context": "https://schema.org",
        "@graph": valid.map((p, i) => ({
          "@type": "Person",
          "@id": `${SITE_URL}${path}#person-${i + 1}`,
          name: p.name,
          ...(p.role ? { jobTitle: p.role } : {}),
          ...(p.image ? { image: p.image.startsWith("http") ? p.image : `${SITE_URL}${p.image}` } : {}),
          worksFor: { "@type": "Organization", name: "Digivanta", url: SITE_URL },
        })),
      }}
    />
  );
}
