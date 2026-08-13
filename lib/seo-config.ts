import type { Metadata } from "next";

export const OG_IMAGE = {
  url: "/og-digivanta.png",
  width: 1764,
  height: 909,
  alt: "Digivanta — digital growth through SEO, ads, social media, websites and apps",
} as const;

export const SEO_PAGES = {
  home: {
    title: "Digital Marketing Company in Delhi",
    description:
      "Grow traffic, leads and sales with Digivanta, a digital marketing company in Delhi offering SEO, Google Ads, social media, web and app development.",
    path: "/",
    keywords: ["digital marketing company in Delhi", "digital marketing agency Delhi", "digital marketing services Delhi"],
  },
  about: {
    title: "About Our Digital Marketing Agency",
    description:
      "Meet Digivanta, a Delhi digital agency founded in 2023 to help startups and businesses grow through SEO, paid media, branding and development.",
    path: "/about",
  },
  contact: {
    title: "Contact Our Digital Marketing Team",
    description:
      "Contact Digivanta in Delhi for a consultation about SEO, Google Ads, social media marketing, website development or mobile app development.",
    path: "/contact",
  },
  team: {
    title: "Meet Our Digital Marketing Team",
    description:
      "Meet Digivanta's Delhi-based leadership, designers, digital marketers and developers working together to deliver measurable digital growth.",
    path: "/digivanta-team",
  },
  faq: {
    title: "Digital Marketing FAQs",
    description:
      "Get clear answers about SEO timelines, Google Ads, social media marketing, lead generation and working with Digivanta in Delhi.",
    path: "/faq",
  },
  seo: {
    title: "SEO Company in Delhi | Expert SEO Services",
    description:
      "Improve rankings and organic leads with Digivanta's SEO services in Delhi, including technical SEO, local SEO, content strategy and AI search optimization.",
    path: "/seo-services-in-delhi",
    keywords: ["SEO company in Delhi", "SEO services in Delhi", "local SEO Delhi", "technical SEO services", "SEO agency Delhi NCR"],
  },
  ppc: {
    title: "Google Ads & PPC Company in Delhi",
    description:
      "Generate qualified leads with Digivanta's Google Ads and PPC management in Delhi, including search ads, remarketing and ecommerce campaigns.",
    path: "/ppc-company-in-delhi",
    keywords: ["Google Ads company in Delhi", "PPC company in Delhi", "Google Ads agency Delhi", "PPC management Delhi", "lead generation Delhi"],
  },
  social: {
    title: "Social Media Marketing Company in Delhi",
    description:
      "Build reach, engagement and leads with Digivanta's social media marketing in Delhi for Instagram, Facebook and LinkedIn.",
    path: "/social-media-marketing-in-delhi",
    keywords: ["social media marketing company in Delhi", "social media agency Delhi", "Instagram marketing Delhi", "Facebook marketing Delhi", "LinkedIn marketing Delhi"],
  },
  content: {
    title: "Content Marketing Services in Delhi",
    description:
      "Build visibility and trust with Digivanta's content marketing services in Delhi, including SEO website copy, blogs and articles that attract qualified leads.",
    path: "/content-marketing-in-delhi",
    keywords: ["content marketing services in Delhi", "content writing Delhi", "SEO content writing Delhi", "blog writing services Delhi"],
  },
  design: {
    title: "Graphic Design Company in Delhi",
    description:
      "Create a distinctive brand with Digivanta's graphic design services in Delhi, including logos, brand identity, social creatives, brochures and web graphics.",
    path: "/graphic-designing-company-in-delhi",
    keywords: ["graphic design company in Delhi", "graphic design agency Delhi", "logo design Delhi", "brand identity design Delhi"],
  },
  orm: {
    title: "ORM Company in Delhi | Reputation Management",
    description:
      "Protect your brand with Digivanta's online reputation management in Delhi, including review management, monitoring and search reputation support.",
    path: "/online-reputation-management-company-in-delhi",
    keywords: ["ORM company in Delhi", "online reputation management Delhi", "reputation management services Delhi", "review management Delhi"],
  },
  web: {
    title: "Web Development Company in Delhi",
    description:
      "Launch a fast, responsive and SEO-friendly website with Digivanta's web development services in Delhi for businesses, ecommerce and custom platforms.",
    path: "/web-development-company-in-delhi",
    keywords: ["web development company in Delhi", "website development Delhi", "web design company Delhi", "ecommerce development Delhi"],
  },
  app: {
    title: "Mobile App Development Company in Delhi",
    description:
      "Build scalable Android, iOS, Flutter and React Native apps with Digivanta, a mobile app development company serving startups and enterprises in Delhi.",
    path: "/mobile-app-development-in-delhi",
    keywords: ["mobile app development company in Delhi", "app developers Delhi", "Android app development Delhi", "iOS app development Delhi", "Flutter development Delhi"],
  },
} as const;

export type SeoPageKey = keyof typeof SEO_PAGES;

export function getPageMetadata(key: SeoPageKey): Metadata {
  const page = SEO_PAGES[key];
  const socialTitle = `${page.title} | Digivanta`;
  const keywords = "keywords" in page ? [...page.keywords] : undefined;

  return {
    title: page.title,
    description: page.description,
    keywords,
    alternates: { canonical: page.path },
    openGraph: {
      title: socialTitle,
      description: page.description,
      url: page.path,
      type: "website",
      locale: "en_IN",
      siteName: "Digivanta",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
      images: [OG_IMAGE.url],
    },
  };
}
