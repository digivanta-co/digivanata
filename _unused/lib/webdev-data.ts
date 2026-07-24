import { FaqItem } from "@/components/ui/faq-accordion";

/* ================================================================
   Web Development Page — Content Data
   ================================================================ */

export const WD_HERO = {
  eyebrow: "Best Web Development Company in Delhi",
  h1: [
    { t: "Your", grad: false },
    { t: "Website", grad: true },
    { t: "Shouldn't", grad: false },
    { t: "Be", grad: false },
    { t: "the", grad: false },
    { t: "Reason", grad: true },
    { t: "Customers", grad: false },
    { t: "Leave", grad: true },
  ] as { t: string; grad?: boolean }[],
  sub: "Most businesses don't lose customers because their product is bad. They lose them because their website creates confusion, loads slowly, looks outdated, or fails to create customer confidence. As a growing and trusted Web Development Company in Delhi, we focus on building fast, modern, responsive, and user-focused digital experiences that improve engagement, strengthen credibility, and support long-term business growth.",
  ctaPrimary: "Let's Create Something Amazing",
  ctaGhost: "WhatsApp Now",
};

export const WD_TRUSTED = {
  heading: "Trusted by Businesses Across Delhi NCR",
  desc: "Our team works with startups, ecommerce brands, local businesses, and growing companies across Delhi NCR. The focus is on creating scalable digital platforms designed to improve visibility, customer experience, and business growth.",
  regions: [
    { name: "Delhi", icon: "mapPin" },
    { name: "Noida", icon: "mapPin" },
    { name: "Gurgaon", icon: "mapPin" },
  ],
};

export const WD_PROBLEMS: { text: string; icon: string }[] = [
  { text: "Poor website structure", icon: "layout" },
  { text: "Slow loading speed", icon: "gauge" },
  { text: "Non-responsive layouts", icon: "smartphone" },
  { text: "Weak mobile experience", icon: "smartphone" },
  { text: "Complicated navigation", icon: "wrench" },
  { text: "Outdated UI/UX", icon: "layout" },
  { text: "Technical SEO issues", icon: "search" },
  { text: "Poor Core Web Vitals", icon: "gauge" },
  { text: "Difficult website management", icon: "wrench" },
];

export const WD_INTRO = {
  heading: "A Website Isn't Just Design — It's Business Communication",
  desc: "Many businesses invest in websites that look attractive initially but fail to generate leads, inquiries, or conversions over time.",
  note: "A modern website should not simply \"exist.\" It should guide users, answer questions, build trust, and encourage action naturally. That's why businesses today need more than basic templates. They need SEO-friendly website development supported by strong UI/UX design, responsive layouts, and conversion-focused web strategies.",
};

export const WD_SERVICES_OVERVIEW = {
  heading: "Build a Website That Supports Business Growth",
  desc: "Digivanta creates modern websites focused on usability, visibility, performance, and conversions.",
  items: [
    "A business website",
    "Ecommerce website development",
    "Landing page optimization",
    "Website redesign services",
    "Scalable custom web applications",
  ],
};

export const WD_CUSTOM = {
  heading: "Why Businesses in Delhi Are Moving Toward Custom Web Development",
  desc: "Generic websites create generic results. Businesses today need platforms that reflect their brand identity, support marketing goals, and adapt as the company grows. A custom-built website creates better user experiences while supporting long-term scalability.",
  focuses: [
    "Faster user experiences",
    "Mobile-friendly design",
    "SEO-ready development structure",
    "Better conversion flow",
    "Clean UI/UX experiences",
    "Technical SEO optimization",
    "Easy scalability",
    "Improved lead generation",
  ],
};

export const WD_SOLUTIONS = [
  "Website Care & Maintenance",
  "Website Redesign",
  "Custom Website Development",
  "SEO-Friendly Websites",
  "CMS Development",
  "Mobile-Friendly Websites",
  "High-Performance Websites",
  "Scalable Web Solutions",
];

export const WD_PROCESS_STEPS = [
  {
    step: "01",
    title: "Research & Requirement Analysis",
    desc: "The process begins with understanding business goals, user behavior, industry competition, website functionality, and target audience. This creates a development strategy aligned with real business objectives.",
    items: [
      "Business goals",
      "User behavior",
      "Industry competition",
      "Website functionality",
      "Target audience",
    ],
  },
  {
    step: "02",
    title: "Planning & Website Structure",
    desc: "Before development begins, a proper website architecture is created to improve user navigation, content organization, SEO performance, mobile usability, and conversion optimization.",
    items: [
      "User navigation",
      "Content organization",
      "SEO performance",
      "Mobile usability",
      "Conversion optimization",
    ],
  },
  {
    step: "03",
    title: "UI/UX Design",
    desc: "Our team focuses on creating responsive website design, user-friendly interfaces, mobile-first experiences, modern UI/UX layouts, and brand-consistent visuals.",
    items: [
      "Responsive website design",
      "User-friendly interfaces",
      "Mobile-first experiences",
      "Modern UI/UX layouts",
      "Brand-consistent visuals",
    ],
  },
  {
    step: "04",
    title: "Development & Performance Optimization",
    desc: "Websites are developed using modern technologies and scalable frameworks. Development focuses on fast-loading performance, SEO-friendly coding structure, mobile responsiveness, website security, Core Web Vitals optimization, and technical SEO setup.",
    items: [
      "React.js",
      "Next.js",
      "Node.js",
      "Laravel",
      "WordPress",
      "Tailwind CSS",
    ],
  },
  {
    step: "05",
    title: "SEO & Technical Optimization",
    desc: "SEO begins during development, not after launch. Technical optimization improves visibility, crawlability, and long-term ranking potential.",
    items: [
      "SEO-friendly structure",
      "Schema-ready architecture",
      "Structured URLs",
      "Mobile responsiveness",
      "Heading hierarchy optimization",
      "Google PageSpeed optimization",
      "Core Web Vitals improvements",
    ],
  },
  {
    step: "06",
    title: "Testing & Quality Assurance",
    desc: "Before launch, every website is tested to ensure a smooth user experience across devices.",
    items: [
      "Speed performance",
      "Mobile usability",
      "Browser compatibility",
      "Form functionality",
      "Navigation experience",
      "Technical performance",
    ],
  },
  {
    step: "07",
    title: "Launch & Ongoing Support",
    desc: "After launch, we help businesses with ongoing maintenance and support. The goal is to build digital platforms that continue supporting business growth long-term.",
    items: [
      "Website maintenance services",
      "Performance monitoring",
      "Security updates",
      "SEO improvements",
      "Feature enhancements",
      "Scalability support",
    ],
  },
];

export const WD_SPEED = {
  heading: "Slow Websites Quietly Kill Conversions",
  desc: "People rarely complain about slow websites. They simply leave.",
  impacts: [
    "Increase bounce rates",
    "Reduce engagement",
    "Hurt conversions",
    "Affect search rankings",
  ],
  focuses: [
    "Lightweight coding structures",
    "Optimized images",
    "Better Core Web Vitals",
    "Faster mobile performance",
    "Improved user interaction",
  ],
  stat: "53%",
  statText: "of users leave a website if it takes longer than 3 seconds to load.",
};

export const WD_MOBILE = {
  heading: "Mobile Users Are No Longer Secondary Users",
  desc: "Most traffic today comes directly from mobile devices.",
  benefits: [
    "Mobile usability",
    "Faster performance",
    "Better readability",
    "User engagement",
    "Search engine rankings",
  ],
  note: "As a trusted Responsive Web Design Company Delhi, our experts create mobile-friendly websites designed for smooth experiences across all screen sizes.",
};

export const WD_SEO_DEV = {
  heading: "SEO Starts During Development, Not After Launch",
  desc: "Poor website development creates SEO problems from the beginning. Search engines prefer websites that are fast-loading, mobile-friendly, secure, easy to crawl, and technically optimized.",
  benefits: [
    "Technical SEO setup",
    "Structured website architecture",
    "Optimized performance",
    "Schema implementation",
    "Clean code structure",
  ],
  note: "When development and SEO work together from day one, websites perform significantly better long-term.",
};

export const WD_ECOMMERCE = {
  heading: "Ecommerce Websites Need More Than Product Listings",
  desc: "Successful ecommerce websites focus on customer experience.",
  expectations: [
    "Fast checkout systems",
    "Smooth browsing",
    "Secure payments",
    "Mobile optimization",
    "Easy navigation",
    "Trust-building design",
  ],
  platforms: [
    "Shopify",
    "WooCommerce",
    "Magento",
    "Custom ecommerce frameworks",
  ],
  note: "The goal is to create ecommerce experiences that improve usability, trust, and conversions.",
};

export const WD_FOCUS = {
  heading: "Real Business-Focused Website Development",
  desc: "At Digivanta, website development focuses on creating digital platforms that support measurable business growth. The objective is not just visual design.",
  points: [
    "User experience",
    "Conversion optimization",
    "SEO performance",
    "Website scalability",
    "Technical reliability",
    "Mobile-first performance",
  ],
};

export const WD_WHY_CHOOSE = [
  "Transparent communication",
  "SEO-focused development",
  "Mobile-first experiences",
  "Performance optimization",
  "Scalable development solutions",
  "Long-term technical support",
];

export const WD_AREAS = [
  "Dwarka",
  "Janakpuri",
  "Tilak Nagar",
  "Karol Bagh",
  "Noida",
  "Gurgaon",
];

export const WD_AUTHOR = {
  text: "This content has been created and reviewed by the website development and digital strategy experts at Digivanta. Our team specializes in responsive web design, custom website development, ecommerce solutions, UI/UX design, SEO-friendly website architecture, and performance optimization.",
  expertise: [
    "Website Development",
    "Responsive Web Design",
    "Ecommerce Development",
    "UI/UX Design",
    "Technical SEO",
    "WordPress Development",
    "Custom Web Applications",
    "Website Performance Optimization",
  ],
  lastUpdated: "June 2026",
};

export const WD_FAQS: FaqItem[] = [
  {
    question: "Why is web development important for businesses?",
    answer:
      "Web development helps businesses create a strong digital presence, improve customer experience, build trust, and generate leads through fast, responsive, and user-focused websites.",
  },
  {
    question: "What makes a website SEO-friendly?",
    answer:
      "An SEO-friendly website includes fast loading speed, mobile responsiveness, clean website structure, optimized code, technical SEO setup, user-friendly navigation, and proper heading hierarchy. These elements help improve search engine visibility and website performance.",
  },
  {
    question: "Why is responsive web design important?",
    answer:
      "Responsive web design ensures websites work smoothly across desktops, tablets, and mobile devices. It improves user experience, engagement, readability, and search engine rankings.",
  },
  {
    question: "How long does website development take?",
    answer:
      "Website development timelines depend on project size and functionality. A basic business website may take 1–3 weeks, while custom ecommerce websites or advanced web applications may require additional development time.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on the visual appearance and user experience of a website, while web development focuses on coding, functionality, performance, and technical structure.",
  },
  {
    question: "Why do businesses need custom website development?",
    answer:
      "Custom website development gives businesses better flexibility, scalability, branding, and performance compared to generic templates. It helps create user-focused digital experiences tailored to business goals.",
  },
  {
    question: "How does website speed affect SEO and conversions?",
    answer:
      "Slow websites increase bounce rates and reduce engagement. Fast-loading websites improve user experience, search engine rankings, and conversion potential.",
  },
  {
    question: "Which platform is best for ecommerce website development?",
    answer:
      "Popular ecommerce platforms include Shopify, WooCommerce, Magento, and custom ecommerce frameworks. The right platform depends on business requirements, scalability needs, and functionality goals.",
  },
  {
    question: "What technologies are used in modern web development?",
    answer:
      "Modern websites are commonly built using technologies like React.js, Next.js, Node.js, Laravel, WordPress, Tailwind CSS, TypeScript, and MongoDB & MySQL. These technologies help create fast, scalable, and modern digital experiences.",
  },
  {
    question: "Why is UI/UX important in website design?",
    answer:
      "Good UI/UX design improves navigation, readability, engagement, and customer trust. A user-focused website experience helps visitors interact more smoothly and improves overall conversion potential.",
  },
];
