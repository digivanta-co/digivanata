import { FaqItem } from "@/components/ui/faq-accordion";

/* ================================================================
   SEO Services Page — Content Data
   ================================================================ */

export const SEO_HERO = {
  eyebrow: "Best SEO Company in Delhi",
  h1: [
    { t: "SEO", grad: true },
    { t: "Services", grad: true },
    { t: "That" },
    { t: "Build" },
    { t: "Long Term" },
    { t: "Online" },
    { t: "Visibility", grad: true },
  ] as { t: string; grad?: boolean }[],
  sub: "As a trusted SEO Company in Delhi, Digivanta focuses on creating SEO strategies that improve visibility, strengthen brand authority, and help businesses appear where users are actively searching on search engines, AI platforms, and voice search systems.",
  ctaPrimary: "Request an SEO Consultation",
  ctaGhost: "WhatsApp Now",
};

export const SEO_DID_YOU_KNOW = {
  stat: "60%",
  text: "Google rewrites nearly 60% of meta titles shown in search results.",
  label: "Did You Know?",
};

export const SEO_WHY_NEED = {
  heading: "Why Businesses Need SEO Today",
  desc: "Modern customers search differently than before. They no longer rely only on traditional search engines. People now ask questions directly on platforms like:",
  platforms: [
    { name: "Google", image: "/google-color-svgrepo-com.svg" },
    { name: "OpenAI ChatGPT", image: "/openai-chatgpt.svg" },
    { name: "Google Gemini", image: "/gemini.svg" },
    { name: "AI Tools", image: "/ai.svg" },
  ],
  note: "If your website content is not optimized properly, search engines and AI systems may fail to understand your business, reducing your online visibility.",
};

export const SEO_PROBLEMS: { text: string; icon: string }[] = [
  { text: "Low organic traffic", icon: "trendDown" },
  { text: "Poor keyword targeting", icon: "target" },
  { text: "Slow website speed", icon: "gauge" },
  { text: "Weak content structure", icon: "layout" },
  { text: "Technical SEO issues", icon: "wrench" },
  { text: "Low quality backlinks", icon: "link" },
  { text: "Poor mobile experience", icon: "smartphone" },
  { text: "No visibility in local searches", icon: "mapPin" },
  { text: "Difficulty appearing in AI generated search results", icon: "bot" },
];

export const SEO_DIFFERENCE = {
  heading: "What Makes Our SEO Services Different?",
  desc: "Many SEO providers focus only on rankings. However, modern SEO requires a complete understanding of user intent, search behavior, technical website health, AI generated search experiences, helpful content systems, mobile usability, website authority, and local SEO visibility.",
  focuses: [
    "Real user experience",
    "Helpful content creation",
    "Search engine compliance",
    "AI friendly content structure",
    "Long term ranking stability",
    "Organic lead generation",
  ],
};

export const SEO_SERVICES = [
  {
    num: "01",
    title: "Website SEO Audit",
    desc: "A detailed SEO audit identifies technical and content related issues affecting your website performance. This creates a strong SEO foundation for better rankings.",
    items: [
      "Website crawl analysis",
      "Broken links check",
      "Indexing issues",
      "Mobile responsiveness",
      "Page speed optimization",
      "Duplicate content analysis",
      "Keyword gap analysis",
      "Technical SEO improvements",
    ],
  },
  {
    num: "02",
    title: "Keyword Research & Search Intent Analysis",
    desc: "Keyword research is one of the most important parts of SEO. Long tail keywords help websites attract more targeted users with higher conversion potential.",
    items: [
      "Primary keywords",
      "Secondary keywords",
      "Long tail keywords",
      "Search intent mapping",
      "Competitor keyword analysis",
      "Keyword difficulty assessment",
      "Volume & trend analysis",
      "Content gap identification",
    ],
  },
  {
    num: "03",
    title: "On Page SEO Optimization",
    desc: "On page SEO helps search engines understand your content clearly. Well optimized pages improve both user experience and rankings.",
    items: [
      "SEO friendly headings",
      "Keyword optimization",
      "Internal linking",
      "Meta title optimization",
      "Meta description writing",
      "Image optimization",
      "Schema markup",
      "Content readability improvements",
    ],
  },
  {
    num: "04",
    title: "Technical SEO Services",
    desc: "Technical SEO ensures search engines can properly crawl and index your website. Technical SEO is essential for modern search engine visibility.",
    items: [
      "Core Web Vitals optimization",
      "XML sitemap optimization",
      "Robots.txt management",
      "HTTPS security setup",
      "Structured data implementation",
      "Mobile first optimization",
      "Canonical tag optimization",
      "Website architecture improvement",
    ],
  },
  {
    num: "05",
    title: "Content Optimization for AI Search",
    desc: "Search behavior is evolving rapidly. We create AI friendly SEO content that increases visibility across both traditional and AI powered search systems.",
    items: [
      "Natural language optimization",
      "Clear content structuring",
      "FAQ sections",
      "Conversational search optimization",
      "Topical authority building",
      "User focused content",
      "Entity optimization",
      "AI citation optimization",
    ],
  },
  {
    num: "06",
    title: "Local SEO Services in Delhi",
    desc: "Local businesses need visibility in nearby searches. Our local SEO services help businesses rank for high intent local search queries.",
    items: [
      "Google Business Profile optimization",
      "Local citation building",
      "Location based keyword optimization",
      "Local schema markup",
      "Review management",
      "Map ranking optimization",
      "NAP consistency",
      "Local link building",
    ],
  },
];

export const SEO_PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We analyze your website, competitors, and industry to identify opportunities and technical issues.",
  },
  {
    step: "02",
    title: "Keyword Strategy",
    desc: "Research and map keywords based on search intent, competition, and conversion potential.",
  },
  {
    step: "03",
    title: "On Page Optimization",
    desc: "Optimize content, meta tags, headings, internal links, and schema markup for better rankings.",
  },
  {
    step: "04",
    title: "Technical SEO",
    desc: "Fix crawl issues, improve site speed, mobile responsiveness, and Core Web Vitals scores.",
  },
  {
    step: "05",
    title: "Content & Authority",
    desc: "Create helpful, AI friendly content and build high quality backlinks for domain authority.",
  },
  {
    step: "06",
    title: "Monitor & Grow",
    desc: "Track rankings, traffic, and conversions. Continuously refine strategy for long term growth.",
  },
];

export const SEO_AREAS = [
  "Delhi",
  "Noida",
  "Gurugram",
  "Ghaziabad",
  "Faridabad",
  "All over India",
];

export const SEO_TOOLS = [
  "Google Search Console",
  "Google Analytics",
  "Ahrefs",
  "SEMrush",
  "Screaming Frog SEO Spider",
  "PageSpeed Insights",
  "Schema Markup Validators",
  "Keyword Research Tools",
  "AI SEO Analysis Tools",
  "Technical SEO Audit Platforms",
];

export const SEO_AI_PLATFORMS = {
  heading: "SEO for Search Engines & AI Platforms",
  desc: "SEO is no longer limited to traditional search engines. Modern websites must now optimize for AI powered search experiences and conversational search systems.",
  optimizeFor: [
    "Traditional search engines",
    "AI generated search results",
    "Voice assistants",
    "Conversational search queries",
    "Semantic search systems",
    "Mobile first indexing",
  ],
  visibilityAcross: [
    "Google",
    "OpenAI ChatGPT",
    "Google Gemini",
    "AI search assistants",
    "Voice search devices",
  ],
};

export const SEO_TRENDS = [
  {
    title: "AI Search Evolution",
    desc: "AI generated search experiences are changing how users discover information online.",
    icon: "bot",
    items: [
      "Natural language optimization",
      "AI friendly content structure",
      "Topic authority",
      "Conversational search intent",
    ],
  },
  {
    title: "E-E-A-T Signals",
    desc: "Search engines increasingly prioritize trustworthy and expert driven content.",
    icon: "trophy",
    items: [
      "Authoritative content creation",
      "Trust focused website optimization",
      "Quality backlinks",
      "Accurate business information",
    ],
  },
  {
    title: "Helpful Content",
    desc: "Search engines reward content that genuinely helps users solve problems.",
    icon: "fileText",
    items: [
      "User first content",
      "Informative SEO pages",
      "Clear content structure",
      "Search intent matching",
    ],
  },
  {
    title: "Zero Click Search",
    desc: "Many users now get answers directly from search results without clicking websites.",
    icon: "search",
    items: [
      "Featured snippets",
      "FAQ sections",
      "Knowledge panels",
      "AI generated summaries",
    ],
  },
];

export const SEO_BENEFITS = [
  {
    title: "Higher Organic Traffic",
    desc: "SEO helps attract users actively searching for your services.",
    icon: "trendUp",
  },
  {
    title: "Better Brand Trust",
    desc: "Websites ranking higher in search results often appear more credible.",
    icon: "shield",
  },
  {
    title: "Long Term Growth",
    desc: "Unlike paid ads, SEO provides sustainable visibility over time.",
    icon: "growth",
  },
  {
    title: "Improved User Experience",
    desc: "SEO improves website speed, structure, and usability.",
    icon: "speed",
  },
  {
    title: "Better Lead Quality",
    desc: "SEO targets users with strong search intent, improving conversion potential.",
    icon: "target",
  },
  {
    title: "AI Search Visibility",
    desc: "Optimized content performs better in AI generated search experiences.",
    icon: "ai",
  },
];

export const SEO_INDUSTRIES = [
  "Healthcare",
  "Education",
  "Local Businesses",
  "Law Firms",
  "Travel Companies",
  "Startups",
];

export const SEO_WHY_CHOOSE = [
  "Ethical SEO practices",
  "Transparent reporting",
  "User focused optimization",
  "AI ready SEO strategies",
  "Long term organic growth",
  "Quality content optimization",
  "Technical SEO expertise",
];

export const SEO_TRUST_POINTS = [
  "Transparent SEO strategies",
  "Ethical optimization practices",
  "Focus on long term growth",
  "AI ready SEO solutions",
  "Technical SEO expertise",
  "User focused content optimization",
];

export const SEO_AUTHOR = {
  text: "This content has been created and reviewed by the SEO experts at Digivanta, a digital marketing and web development company based in Delhi. Our team specializes in Search Engine Optimization (SEO), Local SEO, Technical SEO, Content Marketing, and AI Search Optimization.",
  expertise: [
    "Search Engine Optimization (SEO)",
    "Technical SEO",
    "Local SEO",
    "AI Search Optimization (GEO)",
    "Content Marketing",
    "Website Optimization",
    "Google Business Profile Optimization",
    "Digital Marketing Strategy",
  ],
  lastUpdated: "June 2026",
};

export const SEO_FAQS: FaqItem[] = [
  {
    question: "How do I rank higher on Google?",
    answer:
      "Create high quality content, target relevant keywords, improve website speed, and build quality backlinks. Search engines also prioritize websites that offer a good user experience and helpful information.",
  },
  {
    question: "What are the best SEO strategies right now?",
    answer:
      "Modern SEO focuses on topical authority, helpful content, EEAT, internal linking, and AI search optimization. User focused and technically optimized websites perform better in search results.",
  },
  {
    question: "How do I find low competition keywords?",
    answer:
      "Use keyword research tools to find long tail keywords with lower competition and decent search volume. These keywords are easier to rank for and attract more targeted visitors.",
  },
  {
    question: "Can AI generated content rank on Google?",
    answer:
      "Yes, AI generated content can rank if it is original, accurate, and useful for users. Google prioritizes high quality content that provides real value and matches search intent.",
  },
  {
    question: "How do I optimize content for ChatGPT and Gemini AI search?",
    answer:
      "Use clear headings, conversational language, FAQ sections, schema markup, and trustworthy information. AI systems prefer structured and easy to understand content.",
  },
  {
    question: "What are the best free SEO tools?",
    answer:
      "Popular free SEO tools include Google Search Console, Google Analytics, Google Keyword Planner, and Ubersuggest. These tools help with keyword research, traffic analysis, and SEO monitoring.",
  },
  {
    question: "How do backlinks improve SEO rankings?",
    answer:
      "Backlinks act as trust signals that improve website authority and search visibility. High quality backlinks from trusted websites can help improve rankings on search engines.",
  },
  {
    question: "How long should an SEO article be?",
    answer:
      "Most SEO articles perform well between 1,000 and 2,500 words depending on the topic and competition. Longer content usually provides better topic coverage and keyword relevance.",
  },
  {
    question: "What is topical authority and how do I build it?",
    answer:
      "Topical authority means becoming a trusted source in a specific niche by publishing detailed and connected content regularly. Consistent high quality content improves search trust and visibility.",
  },
  {
    question: "Why did my website traffic suddenly drop?",
    answer:
      "Traffic drops can happen because of Google updates, technical SEO issues, lost rankings, or increased competition. Regular SEO audits help identify and fix these problems quickly.",
  },
];
