import { FaqItem } from "@/components/ui/faq-accordion";

export const WEB_HERO = {
  eyebrow: "Best Web Development Company in Delhi",
  h1: [
    { t: "Custom", grad: true },
    { t: "Web", grad: true },
    { t: "Development" },
    { t: "That", grad: true },
    { t: "Scales.", grad: true },
  ] as { t: string; grad?: boolean }[],
  sub: "Most businesses don't lose customers because their product is bad. They lose them because their website creates confusion, loads slowly, looks outdated, or fails to build customer confidence. We build fast, responsive, and conversion focused web solutions.",
  primaryCta: "Start Your Project",
  ghostCta: "View Features",
  meta: [
    { n: "100%", l: "Project Delivered" },
    { n: "98%", l: "Client Satisfaction" },
    { n: "<1.2s", l: "Average Load Time" },
    { n: "1+", l: "Years Experience" },
  ],
};

export const WEB_STATS = [
  { value: 100, suffix: "%", label: "Project Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Mobile Responsive" },
];

export const WEB_SERVICES = [
  {
    icon: "web",
    title: "Custom Website Development",
    tag: "Enterprise Architecture",
    badge: "Next.js / React",
    desc: "Scalable, brand aligned websites built for peak performance, security, and long term business growth.",
    highlights: ["Modular Codebase", "Headless Capability", "Scalable Performance"],
    color: "from-[#0C243D] to-[#286FAB]",
  },
  {
    icon: "app",
    title: "Ecommerce Development",
    tag: "High Conversion",
    badge: "Shopify / Custom",
    desc: "Conversion focused online storefronts with fast checkout, mobile UX, and secure payment integrations.",
    highlights: ["Fast Checkout Flow", "Payment Integrations", "Inventory System"],
    color: "from-[#286FAB] to-[#b08d3f]",
  },
  {
    icon: "search",
    title: "SEO Friendly Websites",
    tag: "Rank #1 Foundation",
    badge: "Technical SEO",
    desc: "Clean architecture, technical SEO foundation, and optimized Core Web Vitals built right from day one.",
    highlights: ["Schema Markup", "Clean URL Structure", "Fast Speed Index"],
    color: "from-[#0C243D] to-[#286FAB]",
  },
  {
    icon: "content",
    title: "Responsive Web Design",
    tag: "Mobile First UX",
    badge: "Universal Fit",
    desc: "Mobile first layouts engineered to render perfectly and perform smoothly across every screen size.",
    highlights: ["Touch Optimized UX", "Fluid Breakpoints", "Retina Assets"],
    color: "from-[#286FAB] to-[#0C243D]",
  },
  {
    icon: "orm",
    title: "CMS & Web Applications",
    tag: "Full Content Control",
    badge: "Headless / WP",
    desc: "Flexible, secure content management systems and custom web applications tailored to your workflow.",
    highlights: ["Intuitive Admin Panel", "Custom Roles & APIs", "Easy Content Updates"],
    color: "from-[#0C243D] to-[#b08d3f]",
  },
  {
    icon: "leads",
    title: "Performance & Optimization",
    tag: "Core Web Vitals",
    badge: "<1.2s Load Speed",
    desc: "Lightweight code, asset compression, and lightning fast speed improvements that boost conversions.",
    highlights: ["Global CDN Setup", "Zero Layout Shift", "99/100 Speed Score"],
    color: "from-[#286FAB] to-[#0C243D]",
  },
];

export const WEB_PROCESS_STEPS = [
  {
    title: "Discover & Architecture",
    desc: "We map out your business goals, target audience behavior, user personas, and technical requirements to create a solid structural blueprint.",
  },
  {
    title: "UX/UI Design & Prototyping",
    desc: "Our designers craft modern, accessible, and high converting interface wireframes and interactive visual prototypes.",
  },
  {
    title: "High Performance Build",
    desc: "We write clean, modular, and scalable code using Next.js, React, and modern web frameworks with SEO best practices integrated.",
  },
  {
    title: "Rigorous QA & Speed Audit",
    desc: "Comprehensive cross browser testing, mobile responsiveness checks, accessibility audits, and Core Web Vitals optimization.",
  },
  {
    title: "Deployment & Ongoing Growth",
    desc: "Smooth domain setup, SSL security, continuous monitoring, and ongoing technical support for long term scalability.",
  },
];

export const WEB_COMPARE = {
  others: [
    "Generic pre made templates",
    "Slow loading speeds & bloated code",
    "Weak mobile UX & broken layouts",
    "SEO added as an afterthought",
    "No scalability or future planning",
    "Minimal post launch technical support",
  ],
  ours: [
    "Custom strategy & tailor made architecture",
    "Performance first engineering (<1.5s load)",
    "Mobile first, conversion driven UX",
    "Technical SEO built from day one",
    "Modern, scalable framework stack",
    "Long term technical partnership & maintenance",
  ],
};

export const  WEB_TECH = [
  { name: "Next.js", category: "Full stack framework", image: "/nextdotjs.svg", featured: true },
  { name: "React", category: "Interface engineering", image: "/react-svgrepo-com.svg", featured: true },
  { name: "WordPress", category: "Flexible content systems", image: "/wordpress-color-svgrepo-com.svg" },
  { name: "Shopify", category: "Conversion led commerce", image: "/shopify-color-svgrepo-com.svg" },
  { name: "JavaScript", category: "Modern web experiences", image: "/js-svgrepo-com.svg" },
  { name: "Angular", category: "Enterprise applications", image: "/angularjs.svg" },
  { name: "Python", category: "Back end & automation", image: "/python-svgrepo-com.svg" },
  { name: "Figma", category: "Design to code workflow", image: "/figma.svg" },
];

export const WEB_TECH_SECTION = {
  eyebrow: "Modern framework stack",
  title: ["Our technology", "stack"],
  description:
    "We pair ambitious ideas with proven technologies to create fast, secure and scalable digital experiences.",
  revealLabel: "Built for what comes next",
  revealTitle: "Our technology stack",
};

export const WEB_PROBLEMS = [
  "Poor website structure & navigation",
  "Slow loading speeds & high bounce rates",
  "Non responsive layouts on mobile devices",
  "Outdated UI/UX that hurts credibility",
  "Technical SEO errors blocking Google rankings",
  "Poor Core Web Vitals scores",
  "Hard to update legacy backend systems",
  "Low visitor to lead conversion rates",
];

export const WEB_INDUSTRIES = [
  "Ecommerce & Retail",
  "Healthcare & Medical",
  "Real Estate & Property",
  "SaaS & Tech Startups",
  "Corporate & Finance",
  "Education & EdTech",
  "Hospitality & Food",
  "Logistics & Transport",
];

export const WEB_REGIONS = [
  "Delhi NCR",
  "Noida",
  "Gurgaon",
  "Dwarka",
  "Janakpuri",
  "Karol Bagh",
  "South Delhi",
  "Connaught Place",
];

export const WEB_WHY = [
  "Transparent communication & progress reporting",
  "SEO first development methodology",
  "Mobile first design priority",
  "Core Web Vitals & speed optimization",
  "Scalable, enterprise grade codebase",
  "Dedicated ongoing support & maintenance",
];

export const WEB_AUTHOR = {
  lastUpdated: "July 2026",
  text: "This content has been created and verified by senior web architects and UX strategists at Digivanta. Our team specializes in custom web development, responsive front-end engineering, ecommerce platforms, technical SEO architecture, and Core Web Vitals optimization for growing businesses across Delhi NCR.",
  expertise: [
    "Custom Web Development",
    "Responsive Front-End Engineering",
    "Ecommerce Platforms",
    "UI/UX Design",
    "Technical SEO Architecture",
    "CMS Development",
    "Web Application Development",
    "Core Web Vitals Optimization",
  ],
};

export const WEB_FAQS: FaqItem[] = [
  {
    question: "Why is custom web development important for businesses?",
    answer:
      "Custom web development delivers a tailored digital presence, optimized performance, brand distinction, and a seamless user experience that converts visitors into customers better than rigid templates.",
  },
  {
    question: "What makes a website SEO friendly from day one?",
    answer:
      "An SEO friendly website features fast loading speed, clean HTML5 semantic structure, mobile responsiveness, structured data markup, clean URL architecture, and optimized Core Web Vitals.",
  },
  {
    question: "Why is responsive web design critical for mobile users?",
    answer:
      "Over 65% of web traffic comes from mobile devices. Responsive web design ensures your website renders flawlessly and operates seamlessly on all screen sizes, boosting user retention and search engine rankings.",
  },
  {
    question: "How long does a website development project take?",
    answer:
      "Project timelines depend on complexity. Standard corporate websites take 2 4 weeks, while complex custom ecommerce portals or web applications may take 4 8 weeks.",
  },
  {
    question: "Will I be able to update content on my website easily?",
    answer:
      "Yes! We build flexible CMS integrations (such as Next.js headless CMS or WordPress) with intuitive admin panels so your team can easily update text, images, and blog posts without touching code.",
  },
  {
    question: "How does website speed affect Google search rankings?",
    answer:
      "Google uses Core Web Vitals as an official ranking factor. Fast loading websites deliver superior user experiences, reduce bounce rates, and rank higher in search results.",
  },
];
