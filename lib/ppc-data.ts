import { FaqItem } from "@/components/ui/faq-accordion";

/* ================================================================
   Google Ads / PPC page — content data
   (full copy as provided; organised into sections)
   ================================================================ */

export const PPC_HERO = {
  eyebrow: "Google Ads Company · Delhi",
  h1: [
    { t: "Google", grad: true },
    { t: "Ads", grad: true },
    { t: "Company in" },
    { t: "Delhi,", grad: true },
  ] as { t: string; grad?: boolean }[],
  sub: "Many businesses invest in Google Ads expecting quick leads and sales, but often struggle with high CPCs, wasted budget, low quality clicks, and inconsistent conversions.",
  ctaPrimary: "Get a free ads audit",
  ctaGhost: "Explore our services",
  meta: [
    { n: "−38%", l: "CPL for a Delhi real estate business" },
    { n: "4.2×", l: "ROAS for an ecommerce brand" },
    { n: "300+", l: "Qualified healthcare leads in 90 days" },
  ],
  marquee: ["Search Ads", "Shopping", "Remarketing", "Local Leads", "ROAS", "PPC"],
};

export const PPC_INTRO = {
  lead: "In a competitive market like Delhi, running profitable campaigns requires more than simply launching ads. It demands strategic targeting, continuous optimization, and a deep understanding of customer search behavior.",
  paragraphs: [
    "As a trusted Google Ads Company in Delhi, we help businesses create data driven campaigns focused on visibility, qualified leads, and measurable growth. Instead of running generic ads, we build customized strategies based on user intent, audience behavior, and conversion goals to maximize campaign performance.",
    "We help businesses across Delhi, Noida, Gurgaon, and other NCR regions improve Google Ads performance and lead quality. Our campaigns are continuously monitored and optimized based on real time performance data and changing search trends.",
    "Whether you are a local business, startup, ecommerce brand, clinic, real estate company, or service provider, a well planned Google Ads strategy can help you reach potential customers exactly when they are searching for your services.",
  ],
};

export const PPC_FAIL = {
  intro:
    "Many businesses spend money on ads but still struggle to generate consistent leads because of:",
  reasons: [
    { title: "Wrong keyword targeting", desc: "Bidding on terms your buyers never actually search." },
    { title: "Poor landing page experience", desc: "Clicks arrive, but the page fails to convince or convert." },
    { title: "Low ad quality scores", desc: "Weak relevance quietly inflates the cost of every click." },
    { title: "Broad audience targeting", desc: "Budget spread across people who will never buy." },
    { title: "No conversion tracking", desc: "Spending without knowing which clicks become customers." },
    { title: "Weak ad copy", desc: "Ads that blend in get skipped or attract the wrong clicks." },
    { title: "Lack of optimization", desc: "Set and forget campaigns decay as markets shift." },
  ],
  closing:
    "Without proper campaign management, even a high ad budget can produce disappointing results. Our approach focuses on solving these issues first before scaling campaigns.",
};

export const PPC_QUALIFIED = {
  intro:
    "A successful Google Ads campaign is not about getting more traffic. It is about attracting the right audience. As an experienced PPC Company in Delhi, we create campaigns designed to:",
  outcomes: [
    "Generate high intent leads",
    "Reduce wasted ad spend",
    "Improve conversion rates",
    "Increase local visibility",
    "Deliver measurable ROI",
  ],
  closing:
    "We continuously optimize campaigns based on search behavior, device performance, demographics, and conversion data to ensure your budget works efficiently.",
};

export const PPC_RESULTS = {
  intro: "Why businesses trust us real outcomes from managed campaigns:",
  stats: [
    { value: 38, suffix: "%", decimals: 0, label: "Reduced CPL for a Delhi real estate business" },
    { value: 4.2, suffix: "×", decimals: 1, label: "Increased ecommerce ROAS" },
    { value: 300, suffix: "+", decimals: 0, label: "Qualified leads for a healthcare clinic in 90 days" },
  ],
};

export const PPC_SERVICES = {
  intro:
    "As a performance focused Google Ads Agency in Delhi, we prioritize business outcomes rather than vanity metrics.",
  items: [
    {
      title: "Search Ads",
      desc: "Appear on top of Google when customers actively search for your products or services.",
    },
    {
      title: "Performance Campaign Optimization",
      desc: "We improve campaign structure, bidding strategy, audience targeting, and ad relevance to maximize conversions.",
    },
    {
      title: "Remarketing Campaigns",
      desc: "Reconnect with visitors who interacted with your website but did not convert.",
    },
    {
      title: "Local Lead Generation",
      desc: "Ideal for businesses targeting customers in Delhi NCR and nearby regions.",
    },
    {
      title: "Ecommerce Advertising",
      desc: "Drive sales with optimized shopping and search campaigns for online stores.",
    },
  ],
};

export const PPC_PROCESS = {
  intro:
    "Managing Google Ads requires ongoing testing and optimization. Every stage of our management process feeds the next.",
  steps: [
    { title: "Business & competitor analysis", desc: "We study your market, competitors and current account performance." },
    { title: "Keyword research", desc: "High intent, buyer focused keywords plus the negatives that stop waste." },
    { title: "Campaign setup", desc: "Tight structure, right match types and smart bidding aligned to your goals." },
    { title: "Landing page optimization", desc: "Pages built to convert the clicks you pay for." },
    { title: "Conversion tracking", desc: "Forms, calls and sales tracked accurately before scaling spend." },
    { title: "Optimization & reporting", desc: "Continuous testing and transparent reporting, month after month." },
  ],
};

export const PPC_MGMT = {
  intro:
    "Managing Google Ads requires ongoing testing and optimization. Markets change, competitors adjust bids, and user behavior evolves constantly. Professional PPC Services in Delhi help businesses:",
  benefits: [
    "Save advertising budget",
    "Improve ad performance",
    "Track actual conversions",
    "Scale profitable campaigns",
    "Reach targeted customers faster",
  ],
  closing:
    "Our team focuses on campaign performance, audience insights, keyword refinement, and conversion optimization to help businesses grow sustainably.",
};

export const PPC_SEO_PPC = {
  intro:
    "Many businesses rely only on SEO or only on paid ads. The best results usually come from combining both. While SEO builds long term visibility, Google Ads helps generate immediate traffic and leads. Together, they create a stronger digital presence and faster business growth.",
  lead: "Our integrated Search Engine Marketing Services in Delhi help businesses:",
  points: [
    "Increase brand visibility",
    "Capture high intent searches",
    "Improve conversion opportunities",
    "Build long term authority",
  ],
};

export const PPC_INDUSTRIES = [
  "Real Estate",
  "Healthcare",
  "Education",
  "Ecommerce",
  "Legal Services",
  "Home Services",
  "Finance",
  "Hospitality",
  "Local Businesses",
];

export const PPC_INDUSTRIES_NOTE =
  "Every business has different customer behavior, search trends, and competition levels. That's why we create customized advertising strategies instead of using one size fits all campaigns.";

export const PPC_DATA = {
  intro:
    "Running campaigns without accurate data often leads to wasted budget and inconsistent results. Our Google Advertising Services in Delhi include:",
  items: [
    "Competitor analysis",
    "Keyword research",
    "Conversion tracking setup",
    "Landing page recommendations",
    "Audience targeting optimization",
    "Ad copy testing",
    "Monthly reporting",
  ],
  closing:
    "This helps businesses understand where leads come from and how campaigns can be improved continuously.",
};

export const PPC_LEADGEN = {
  intro:
    "Lead generation is not just about increasing website traffic. It is about attracting potential customers who are ready to take action. As a result oriented Lead Generation Company in Delhi, we focus on:",
  points: [
    { title: "High converting search intent", desc: "Reaching people who are ready to enquire, not just browse." },
    { title: "Better quality leads", desc: "Filters and targeting tuned for buyers, not bots or bargain hunters." },
    { title: "Lower acquisition cost", desc: "Efficiency improvements that bring your cost per lead down." },
    { title: "Continuous optimization", desc: "Campaigns refined weekly against live conversion data." },
    { title: "Transparent reporting", desc: "You always know what was spent, and what it returned." },
  ],
  closing:
    "Our goal is simple help businesses generate consistent and scalable growth through intelligent advertising.",
};

export const PPC_WHY = {
  intro:
    "Businesses choose us because we focus on real business outcomes. We believe advertising should solve business problems, not just increase clicks.",
  points: [
    { title: "Transparent Communication", desc: "Clear updates, honest numbers, no jargon walls." },
    { title: "ROI Focused Strategies", desc: "Every rupee of budget is accountable to a result." },
    { title: "Continuous Optimization", desc: "Bids, audiences and creatives tuned continuously." },
    { title: "Industry Specific Campaigns", desc: "Strategies shaped by your market's real search behavior." },
    { title: "Conversion Driven Approach", desc: "Built for enquiries and sales, not vanity clicks." },
    { title: "Long Term Growth", desc: "Scaling profitable campaigns into a durable channel." },
  ],
};

export const PPC_GROW = {
  paragraphs: [
    "Google Ads can become one of the most effective lead generation channels when campaigns are managed strategically. From keyword targeting and ad optimization to conversion tracking and performance analysis, every element plays a role in improving results.",
    "Whether you want more local leads, ecommerce sales, or qualified enquiries, a well optimized PPC strategy can help your business grow faster and more efficiently.",
    "Our focus is not just increasing clicks, but generating measurable business growth through strategic advertising.",
  ],
};

export const PPC_FAQS: FaqItem[] = [
  {
    question: "How can I reduce wasted ad spend in Google Ads?",
    answer:
      "Wasted ad spend can be reduced by improving keyword targeting, using negative keywords, optimizing audience settings, and tracking conversions properly. Regular campaign optimization also helps improve ROI over time.",
  },
  {
    question: "Why is my CPC so high?",
    answer:
      "High CPC usually happens due to strong competition, poor quality scores, broad targeting, or irrelevant keywords. Improving ad relevance and landing page quality can help lower costs.",
  },
  {
    question: "How do I improve Google Ads conversion rates?",
    answer:
      "Better conversion rates come from targeted keywords, optimized landing pages, compelling ad copy, and accurate audience targeting. Continuous testing and optimization also play a major role.",
  },
  {
    question: "How much budget should I start with?",
    answer:
      "The ideal Google Ads budget depends on your industry, competition, and business goals. Many businesses start with a controlled budget and gradually scale after identifying profitable campaigns.",
  },
  {
    question: "Which industries benefit most from Google Ads?",
    answer:
      "Google Ads works effectively for industries like real estate, healthcare, education, ecommerce, legal services, and local businesses that rely on lead generation and online visibility.",
  },
  {
    question: "Should I hire a Google Ads agency?",
    answer:
      "A professional agency can help manage campaigns strategically, reduce wasted spend, improve lead quality, and optimize performance based on real campaign data.",
  },
  {
    question: "What does a PPC agency do?",
    answer:
      "A PPC agency manages paid advertising campaigns including keyword research, ad creation, audience targeting, bidding strategy, and ongoing optimization to improve results.",
  },
  {
    question: "How do I choose the best Google Ads company in Delhi?",
    answer:
      "Look for an agency with transparent reporting, proven experience, conversion focused strategies, and a strong understanding of your industry and business goals.",
  },
  {
    question: "Can Google Ads increase website traffic and sales?",
    answer:
      "Yes, Google Ads can help businesses attract targeted traffic, generate qualified leads, and increase sales by reaching users actively searching for related services.",
  },
  {
    question: "How do I track leads from Google Ads?",
    answer:
      "Leads can be tracked using conversion tracking tools like Google Analytics, Google Tag Manager, call tracking, and form submission tracking to measure campaign performance accurately.",
  },
];

export const PPC_CTA = {
  kicker: "Ready to improve your Google Ads performance?",
  lines: ["Make ads", "make money."] as [string, string],
  desc: "If your campaigns are generating clicks but not enough quality leads, it may be time for a more strategic approach. Our team helps businesses across Delhi NCR create performance focused Google Ads campaigns designed for sustainable growth and better ROI.",
  primary: "Book a free ads consult",
};
