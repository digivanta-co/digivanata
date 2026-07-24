/* ============================================================================
   Verbatim website copy for the premium light redesign (components/redesign/*).
   Every string here is either (a) the user's EXACT website content — do not
   reword, shorten, or remove — or (b) additive decorative copy the redesign
   brief explicitly requested (hero split words, marquee terms, storytelling
   hooks, big-type breaks, journey labels, final-CTA headline).
   Section lists that already exist verbatim in lib/home-data.ts and
   lib/site-data.ts are imported by the components directly, not duplicated here.
============================================================================ */

/* ---- Page title (SEO H1) — exact ---- */
export const RD_PAGE_TITLE =
  "Digital Marketing Company in Delhi for SEO, Ads & Online Growth";

/* ---- Hero split words — additive/decorative ---- */
export const RD_HERO_WORDS = ["Digital", "Marketing", "Agency", "in Delhi"];

/* ---- Giant marquee terms — from brief (additive) ---- */
export const RD_MARQUEE = [
  "DIGITAL MARKETING",
  "SEO",
  "GOOGLE ADS",
  "META ADS",
  "SOCIAL MEDIA",
  "WEBSITE DEVELOPMENT",
  "LEAD GENERATION",
  "ONLINE GROWTH",
];

/* ---- Storytelling hooks — from brief (additive) ---- */
export const RD_STORY = [
  "Every Business Wants More Customers.",
  "But Most Businesses Buy Marketing.",
  "Clicks Don't Pay Bills.",
  "Conversions Do.",
];

/* ---- Intro — EXACT ---- */
export const RD_INTRO = {
  statQuote:
    "“The first-ever online ad, launched in 1994 by AT&T, achieved an incredible 44% click-through rate.”",
  statNote: "Today, even a 1% CTR is considered good in Digital Marketing.",
  paras: [
    "In today’s competitive online world, simply having a website is not enough. Businesses in Delhi are struggling with low visibility, poor lead generation, decreasing organic traffic, and rising advertising costs.",
    "Many brands invest in marketing but fail to achieve measurable growth because they lack a proper digital strategy.",
    "That’s where Digivanta comes in.",
    "Digivanta is a professional Digital Marketing Company in Delhi helping businesses build strong online visibility, attract quality leads, and generate consistent growth through result-driven digital marketing strategies.",
    "Whether you are a startup, local business, E-Commerce brand, service provider, or enterprise company, our digital marketing solutions are designed to solve real business problems, not just increase clicks.",
  ],
  focusLead: "We focus on strategies that help businesses:",
  // focus list reused from home-data FOCUS_AREAS
  closing:
    "From SEO and social media marketing to performance marketing and web development, Digivanta provides complete digital growth solutions under one roof.",
};

/* ---- CTA bands — EXACT ---- */
export const RD_CTA_1 = {
  title: "Ready to Grow Your Business Online?",
  sub: "Get a free digital marketing consultation from Digivanta today and discover how your business can generate more traffic, leads, and sales.",
};

export const RD_COMPETITORS = {
  title: "Your Competitors Are Growing Online. Are You?",
  sub: "If your website isn't generating traffic, leads, or sales, it's time for a smarter strategy. Digivanta delivers SEO, social media marketing, paid advertising, and web solutions designed to accelerate business growth.",
};

/* ---- Why businesses need an agency — EXACT ---- */
export const RD_WHY_NEED = {
  heading: "Why Businesses Need a Digital Marketing Agency in Delhi",
  paras: [
    "Delhi is one of the most competitive business markets in India. Thousands of businesses compete online for customer attention every single day.Without proper digital marketing, even good businesses fail to reach their target audience.",
    "Many companies face common challenges such as:",
  ],
  // challenge list reused from home-data BUSINESS_CHALLENGES
  after: [
    "A professional Digital Marketing Agency in Delhi helps solve these challenges using proven online marketing strategies.",
    "At Digivanta, we understand that every business is different. We create customized digital marketing plans based on your business goals, industry competition, audience behavior, and market trends.",
  ],
  goalLabel: "Our goal is simple:",
  goal: "Help your business become visible where your customers are searching.",
};

/* ---- Services section lead — EXACT ---- */
export const RD_SERVICES_LEAD = {
  heading: "Complete Digital Marketing Services in Delhi",
  intro:
    "Digivanta offers end-to-end Digital Marketing Services in Delhi for businesses looking to scale online.",
};

/* Full, EXACT service content (superset of home-data SERVICES_DETAIL — includes
   the connective sentences so nothing is dropped). */
export const RD_SERVICES = [
  {
    id: "seo",
    title: "SEO Services in Delhi",
    icon: "search",
    intro:
      "Search Engine Optimization is one of the most effective ways to generate long-term organic traffic and quality leads.",
    introExtra:
      "Many businesses struggle because their websites are not optimized properly for search engines.",
    helpsLabel: "Our SEO services help businesses:",
    helps: [
      "Improve Google rankings",
      "Increase organic traffic",
      "Generate local leads",
      "Improve website authority",
      "Target high-intent customers",
    ],
    includesLabel: "Our SEO Services Include:",
    includes: [
      "Keyword Research",
      "Technical SEO",
      "On-Page SEO",
      "Off-Page SEO",
      "Local SEO",
      "SEO Audits",
      "Content Optimization",
      "Link Building",
      "Competitor Analysis",
    ],
    note: "As a trusted SEO Company in Delhi, we focus on sustainable SEO strategies that deliver measurable growth.",
    problemsLabel: "Problems We Solve Through SEO",
    problems: [
      "Website not appearing on Google",
      "Low search visibility",
      "Poor local rankings",
      "Traffic decline after Google updates",
      "Low-quality leads",
      "Slow website performance",
    ],
    cta: "Want Your Website to Rank Higher on Google?",
    ctaSub: "Talk to Digivanta and get a customized SEO strategy for your business.",
  },
  {
    id: "smm",
    title: "Social Media Marketing Services",
    icon: "social",
    intro:
      "Social media is no longer optional for businesses. Customers today discover brands, compare services, and make buying decisions through social platforms.",
    strugglesLabel: "However, many businesses struggle with:",
    struggles: [
      "Low engagement",
      "Poor brand reach",
      "Inconsistent posting",
      "Weak content strategy",
      "No lead generation from social media",
    ],
    platformsLabel:
      "Our Social Media Marketing services help businesses create meaningful engagement and improve brand visibility across platforms like:",
    platforms: ["Instagram", "Facebook", "LinkedIn", "Twitter/X", "YouTube"],
    includesLabel: "Our SMM Services Include:",
    includes: [
      "Social Media Strategy",
      "Content Creation",
      "Reels & Creative Design",
      "Paid Social Advertising",
      "Audience Engagement",
      "Brand Campaigns",
      "Social Media Optimization",
    ],
    note: "We focus on creating content that connects with audiences while supporting your business goals.",
  },
  {
    id: "performance",
    title: "Performance Marketing Agency Delhi",
    icon: "ppc",
    intro:
      "Running ads without strategy often leads to wasted budgets and poor conversions. Many businesses spend heavily on ads but fail to generate quality leads.",
    introExtra:
      "Digivanta helps businesses improve ad performance through data-driven campaigns.",
    includesLabel: "Our Performance Marketing Services Include:",
    includes: [
      "Google Ads",
      "Meta Ads",
      "YouTube Ads",
      "Lead Generation Campaigns",
      "Remarketing Campaigns",
      "Conversion Optimization",
      "Landing Page Optimization",
    ],
    focusLabel: "As a Performance Marketing Agency Delhi businesses trust, we focus on:",
    focus: [
      "Lowering cost per lead",
      "Improving ad ROI",
      "Increasing conversion rates",
      "Targeting the right audience",
    ],
    problemsLabel: "Problems We Solve Through Performance Marketing",
    problems: [
      "High ad spend with low returns",
      "Poor lead quality",
      "Low conversion rates",
      "Ineffective targeting",
      "Weak landing page performance",
    ],
    cta: "Looking for Better ROI from Ads?",
    ctaSub:
      "Let Digivanta create high-converting performance marketing campaigns for your business.",
  },
  {
    id: "web",
    title: "Website Development Services",
    icon: "web",
    intro:
      "Your website is often the first impression customers have about your business. A slow, outdated, or poorly designed website can negatively impact trust and conversions.",
    introExtra:
      "We create modern, SEO-friendly, responsive websites that help businesses generate leads and improve user experience.",
    includesLabel: "Our Web Development Services Include:",
    includes: [
      "Business Websites",
      "eCommerce Websites",
      "Landing Pages",
      "WordPress Development",
      "Custom Website Development",
      "Website Redesign",
      "Speed Optimization",
    ],
    problemsLabel: "Problems We Solve Through Web Development",
    problems: [
      "Slow loading websites",
      "Poor mobile experience",
      "Low conversion rates",
      "Outdated website design",
      "SEO issues",
      "Technical website errors",
    ],
  },
  {
    id: "app",
    title: "App Development Services",
    icon: "app",
    intro:
      "Mobile apps help businesses improve customer engagement and accessibility. Digivanta develops user-friendly mobile applications tailored to business needs.",
    includesLabel: "Our App Development Solutions:",
    includes: [
      "Android App Development",
      "iOS App Development",
      "Hybrid App Development",
      "UI/UX Design",
      "App Maintenance & Support",
    ],
    note: "We focus on performance, scalability, and seamless user experience.",
  },
] as const;

/* ---- Journey node labels — from brief (additive) ---- */
export const RD_JOURNEY = [
  "Customer",
  "Search",
  "Website",
  "Lead",
  "Conversion",
  "Growth",
];

/* ---- Why choose Digivanta — EXACT headings ---- */
export const RD_WHY_CHOOSE = {
  heading: "Why Choose Digivanta as Your Digital Marketing Company in Delhi?",
  intro:
    "Businesses choose Digivanta because we focus on real business growth instead of vanity metrics.",
  diffLabel: "What Makes Us Different?",
  // list reused from home-data WHY_CHOOSE
};

/* ---- Working process intro — EXACT ---- */
export const RD_PROCESS = {
  heading: "Our Working Process",
  paras: [
    "As a Delhi-based Digital Marketing Agency, we understand local customer behavior and market trends deeply.",
    "We help businesses not only attract traffic but also convert visitors into paying customers.",
  ],
  detailHeading: "Our Digital Marketing Process",
  // steps reused from home-data PROCESS_STEPS
};

/* ---- Industries — EXACT ---- */
export const RD_INDUSTRIES = {
  heading: "Industries We Serve",
  intro:
    "Digivanta provides Digital Marketing Services in Delhi for multiple industries including:",
  closing:
    "Our marketing strategies are customized according to industry-specific challenges and audience behavior.",
  // list reused from home-data INDUSTRIES
};

/* ---- Tools — EXACT ---- */
export const RD_TOOLS_HEADING = "Tools We Use";

/* ---- Results — EXACT ---- */
export const RD_RESULTS = {
  heading: "Results-Focused Online Marketing Agency Delhi",
  paras: [
    "Digivanta is not just another Online Marketing Agency Delhi businesses hire for temporary campaigns. We focus on long-term growth strategies that build sustainable online visibility.",
    "Our approach combines:",
  ],
  // list reused from home-data INTEGRATED_APPROACH
  closing:
    "This integrated approach helps businesses build strong digital authority and consistent lead generation.",
};

/* ---- FAQ heading — EXACT (items reused from home-data FAQS) ---- */
export const RD_FAQ_HEADING = "Frequently Asked Questions";

/* ---- Big-type breaks — from brief (additive) ---- */
export const RD_BIGTYPE_1 = ["WE DON'T", "SELL", "MARKETING.", "WE BUILD", "DIGITAL", "GROWTH."];
export const RD_BIGTYPE_2 = ["YOUR", "SUCCESS", "IS", "OUR", "CAMPAIGN."];

/* ---- Final CTA headline — from brief (additive) ---- */
export const RD_FINAL_CTA = ["Your Next", "Customer", "Is Searching", "Right Now."];

/* ---- Footer prose — EXACT ---- */
export const RD_FOOTER = {
  brandLine: "Digivanta | Digital Marketing Company in Delhi",
  about:
    "Helping businesses grow online through SEO, Social Media Marketing, PPC Advertising, Website Development, and Performance Marketing solutions.",
  ctaTitle: "Ready to Grow Your Business?",
  ctaText:
    "Partner with Digivanta and grow your business with SEO, social media marketing, PPC advertising, and performance-driven digital strategies.",
  consult: "Contact Us Today for a Free Consultation",
  copyright: "© 2026 Digivanta. All Rights Reserved.",
};

/* Full footer services list — EXACT from content (includes Graphic Design / Content
   Marketing / ORM Management). */
export const RD_FOOTER_SERVICES = [
  "SEO Services",
  "Google Ads",
  "Social Media Marketing",
  "Performance Marketing",
  "Website Development",
  "App Development",
  "Graphic Design",
  "Content Marketing",
  "ORM Management",
];

export const RD_FOOTER_QUICK = ["Home", "About Us", "Services", "Contact Us"];
