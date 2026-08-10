import { FaqItem } from "@/components/ui/faq-accordion";

/* Canonical origin — single source of truth for metadataBase, the
   sitemap and robots.txt. Override with NEXT_PUBLIC_SITE_URL per
   environment (preview deploys, staging) so those don't advertise the
   production domain. No trailing slash. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://digivanta.com").replace(/\/$/, "");

/* Every indexable route, with a rough crawl priority. Add new pages
   here and both the sitemap and any future nav pick them up. */
export const ROUTES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  { path: "/digivanta-team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/seo-services-in-delhi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ppc-company-in-delhi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/social-media-marketing-in-delhi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/content-marketing-in-delhi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/graphic-designing-company-in-delhi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/online-reputation-management-company-in-delhi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/web-development-company-in-delhi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/mobile-app-development-in-delhi", priority: 0.9, changeFrequency: "monthly" },
];

export const CONTACT = {
  phone: "+91 9999911195",
  phoneHref: "tel:+919999911195",
  email: "info@digivanta.com",
  emailHref: "mailto:info@digivanta.com",
  whatsapp: "https://wa.me/919999911195",
  location: "Delhi, India",
};

export const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/official.digivanta/" },
  { label: "Facebook", href: "#" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/digivanta-ltd" },
  { label: "YouTube", href: "https://www.youtube.com/@Digivanta_co" },
];

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/seo-services-in-delhi" },
  { label: "Team", href: "/digivanta-team" },
  { label: "Contact", href: "/contact" },
];

export const HERO_TAGS = [
  "Social Media Marketing",
  "Analytics and Reporting",
  "Keyword Research",
  "Technical SEO Audit",
  "On Page Setup",
  "Competitor Analysis",
];

export const SERVICES = [
  {
    title: "Search Engine Optimization (SEO)",
    desc: "Improve rankings and drive organic traffic",
    icon: "search" as const,
    href: "seo-services-in-delhi"
  },
  {
    title: "Social Media Marketing (SMM)",
    desc: "Build brand presence and audience engagement",
    icon: "social" as const,
    href: "social-media-marketing-in-delhi"
  },
  {
    title: "Pay Per Click Advertising (PPC)",
    desc: "Generate instant traffic and qualified leads",
    icon: "ppc" as const,
    href: "ppc-company-in-delhi"
  },
  {
    title: "Website Design & Development",
    desc: "Create fast, responsive, and conversion focused websites",
    icon: "web" as const,
    href: "web-development-company-in-delhi"
  },
  {
    title: "Content Marketing",
    desc: "Deliver valuable content that informs and converts",
    icon: "content" as const,
    href: "content-marketing-in-delhi",
  },
  {
    title: "Online Reputation Management (ORM)",
    desc: "Build and maintain a positive brand image",
    icon: "orm" as const,
    href: "online-reputation-management-company-in-delhi",
  },
  {
    title: "Lead Generation Services",
    desc: "Attract and convert high quality prospects",
    icon: "leads" as const,
  },
  {
    title: "App Development",
    desc: "Build scalable and user friendly mobile applications",
    icon: "app" as const,
    href: "mobile-app-development-in-delhi"
  },
];

export const PARTNER_POINTS = [
  "Delivering consistent performance",
  "Maintaining complete transparency",
  "Building long term business relationships",
  "Helping you scale sustainably",
];

export const APPROACH_POINTS = [
  "Data driven SEO strategies to improve search rankings",
  "High performance paid advertising for instant visibility",
  "Creative content marketing to engage and convert audiences",
  "Strategic planning to ensure long term business growth",
];

export const RESULTS_EXPECT = [
  "Higher rankings for targeted keywords",
  "Consistent growth in organic traffic",
  "Increased ROI from paid campaigns",
  "Improved engagement across social platforms",
  "Better lead quality and conversion rates",
  "Reduced cost per acquisition (CPA)",
  "Stronger brand awareness and credibility",
];

export const CAMPAIGN_BASED = [
  "Detailed industry research",
  "Competitor analysis",
  "Audience behavior insights",
  "Continuous performance tracking",
];

export const DIGITAL_BENEFITS = [
  "Target the right audience with precision",
  "Build long term trust and brand authority",
  "Generate consistent and high quality leads",
  "Increase sales and overall revenue",
  "Track and measure performance in real time",
  "Stay ahead of competitors in your industry",
];

export const STATS = [
  { value: "100+", label: "Happy Clients" },
  { value: "100+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
];

// Headline outcome metrics for the dark "track record" band
export const METRICS = [
  { value: "+142%", label: "Avg. organic traffic growth" },
  { value: "3.2×", label: "Average return on ad spend" },
  { value: "−38%", label: "Lower cost per lead" },
  { value: "100+", label: "Campaigns delivered" },
];

export const REVIEWS = [
  {
    name: "Ragni Kumari",
    text: "Digivanta is truly the best digital marketing agency I've worked with. Their team is very professional and delivers top online marketing services. Highly satisfied!",
  },
  {
    name: "Kanchan Gupta",
    text: "I took SEO services from Digivanta, and the results have been amazing. My website ranking and organic traffic improved significantly within a few months. Highly recommend Digivanta.",
  },
  {
    name: "Raj Yadav",
    text: "Digivanta delivered exactly what they promised. Their SEO and website optimization helped us improve both traffic and lead quality. The team is professional, responsive, and focused on real business results.",
  },
  {
    name: "Kushagra Tomar",
    text: "Bahut professional aur supportive team hai. Website design se lekar complete digital promotion tak sab handle kiya. Truly the Best Digital Marketing Agency.",
  },
  {
    name: "marqora",
    text: "We partnered with them for SEO and social media marketing, and the results have been impressive. Our website traffic and leads both increased steadily.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What makes Digivanta a reliable digital marketing agency?",
    answer: "We focus on data driven strategies, transparent reporting, and customized campaigns tailored to your business goals delivering measurable growth, not vanity metrics.",
  },
  {
    question: "How soon can I expect results?",
    answer: "SEO takes a few months to show noticeable improvements, while paid ads and social media marketing can deliver quicker visibility and lead generation.",
  },
  {
    question: "Do you provide custom marketing plans?",
    answer: "Yes, every plan is tailored to your business goals, industry competition, audience behavior, and market trends.",
  },
  {
    question: "Can digital marketing help local businesses?",
    answer: "Absolutely local SEO and targeted paid ads deliver strong results for businesses looking to reach nearby customers in Delhi and across India.",
  },
  {
    question: "What types of industries do you support?",
    answer: "We work with education, real estate, healthcare, retail, IT, eCommerce, restaurants, finance, travel, startups, and more.",
  },
];

export const FOOTER_SERVICES = [
  "SEO Services",
  "Social Media Marketing",
  "Performance Marketing",
  "Website Development",
  "App Development",
  "Graphic Design",
  "Content Marketing",
  "ORM Management",
];

export const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Team", href: "/digivanta-team" },
  { label: "Contact Us", href: "/contact" },
];
