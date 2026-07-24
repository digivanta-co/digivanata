import { FaqItem } from "@/components/ui/faq-accordion";

/* ================================================================
   Mobile App Development page — content data
   (organised from the provided copy; lightly edited for readability)
   ================================================================ */

export const APP_HERO = {
  badge: "Mobile App Development Company in Delhi",
  titleLines: ["Don't just have", "an idea —", "launch it."],
  gradientLine: 2,
  sub: "Turn your app concept into a high-performing Android, iOS or cross-platform application with Digivanta's expert development team — built for usability, retention and real business growth.",
  primaryCta: "Start My App Journey",
  ghostCta: "Request a Cost Estimate",
  stat: 90,
  statText: "of mobile internet time is spent inside apps, not browsers.",
  areas: ["Janakpuri", "Dwarka", "Rohini", "Tilak Nagar", "Rajouri Garden", "Noida", "Gurugram"],
};

export const APP_PROBLEM = {
  titleLines: ["Why businesses need", "mobile apps today"],
  intro:
    "Many businesses struggle with weak customer engagement, slow processes, low retention, or heavy dependence on third-party platforms. A well-designed mobile app solves these challenges.",
  cta: "Request App Cost Estimate",
  solutions: [
    "Simplify customer interactions",
    "Improve visibility & accessibility",
    "Automate business operations",
    "Increase repeat customers & sales",
    "Deliver personalized experiences",
    "Build stronger brand trust",
  ],
};

export const APP_CUSTOM = {
  titleLines: ["Custom apps, built around", "your business"],
  intro:
    "Every business has unique goals and workflows. We build custom mobile apps Delhi businesses rely on for flexibility and growth — tailored to your model, never one-size-fits-all.",
  focus: [
    "Understanding business challenges",
    "Designing intuitive experiences",
    "Building scalable architecture",
    "Smooth performance across devices",
    "Ongoing support & upgrades",
  ],
};

export const APP_WHY_CHOOSE = [
  { title: "Experienced Developers", desc: "Skilled Android & iOS engineers behind every build.", icon: "code" },
  { title: "Future-Ready Solutions", desc: "Scalable architecture designed to grow with you.", icon: "layers" },
  { title: "Startup-Friendly", desc: "Lean, MVP-first approach that launches fast.", icon: "rocket" },
  { title: "Transparent Support", desc: "Clear communication at every stage.", icon: "messages" },
  { title: "UI/UX & Performance", desc: "Clean design and genuinely fast experiences.", icon: "gauge" },
  { title: "Agile Process", desc: "Iterative delivery for quicker, safer launches.", icon: "refresh" },
];

export const APP_TECH = [
  { group: "Frontend", icon: "smartphone", items: ["Flutter", "React Native", "Swift (iOS)", "Kotlin (Android)", "Java"] },
  { group: "Backend", icon: "server", items: ["Node.js", "Laravel", "Python", "PHP", "Firebase"] },
  { group: "Database & Cloud", icon: "database", items: ["MongoDB", "MySQL", "PostgreSQL", "AWS", "Google Cloud"] },
  { group: "Advanced", icon: "sparkles", items: ["AI & Machine Learning", "API Integrations", "Real-Time Chat", "Payment Gateways", "Cloud Infrastructure"] },
];

export const APP_PLATFORMS = [
  { name: "Android", icon: "smartphone", desc: "Secure, feature-rich Android apps optimized for performance and the widest market reach." },
  { name: "iOS", icon: "apple", desc: "Sleek, responsive iPhone & iPad apps crafted for premium customer segments." },
  { name: "Flutter", icon: "layers", desc: "One codebase, both platforms — fast, beautiful cross-platform apps." },
  { name: "React Native", icon: "atom", desc: "Flexible cross-platform development with native-like performance." },
];

export const APP_INDUSTRIES = [
  { name: "Ecommerce", icon: "cart", kind: "shop", grad: "from-[#0c243d] to-[#286fab]", desc: "Custom shopping apps with secure payments, product catalogs, order tracking and customer engagement features designed to improve online sales." },
  { name: "Food Delivery", icon: "utensils", kind: "food", grad: "from-[#231f20] to-[#0c243d]", desc: "Smart food ordering and delivery apps with live tracking, restaurant management, payment integration and user-friendly interfaces." },
  { name: "Taxi Booking", icon: "car", kind: "ride", grad: "from-[#286fab] to-[#0c243d]", desc: "On-demand taxi solutions with GPS tracking, driver management, ride scheduling and real-time notifications." },
  { name: "Healthcare", icon: "heart", kind: "health", grad: "from-[#0c243d] to-[#231f20]", desc: "HIPAA-aware healthcare apps for clinics, hospitals and medical startups with appointments, telemedicine and patient management." },
  { name: "Real Estate", icon: "building", kind: "estate", grad: "from-[#231f20] to-[#286fab]", desc: "Property listing platforms with virtual tours, search filters, lead management and location-based features." },
  { name: "Education", icon: "book", kind: "learn", grad: "from-[#286fab] to-[#231f20]", desc: "Interactive learning platforms with video lessons, assessments, live classes and student management systems." },
] as const;

export const APP_PLATFORM_FOCUS = [
  "Fast loading speed",
  "Secure architecture",
  "Clean UI/UX",
  "Smooth navigation",
  "Scalable backend systems",
];

export const APP_AUTHOR = {
  updated: "June 2026",
  text: "This content has been created and reviewed by the mobile app development and digital product experts at Digivanta. We continuously monitor mobile technology trends, app store guidelines and emerging frameworks to keep our recommendations practical, scalable and business-focused.",
  expertise: [
    "Android App Development",
    "iOS App Development",
    "Flutter Development",
    "React Native Development",
    "Mobile UI/UX Design",
    "AI-Powered Applications",
    "Cross-Platform App Development",
    "Enterprise Mobile Solutions",
  ],
};

export const APP_PROCESS = [
  { step: "01", title: "Requirement Analysis", desc: "We map your goals, audience, idea and features into a clear roadmap." },
  { step: "02", title: "UI/UX Design", desc: "We craft intuitive, engaging designs focused on smooth usability." },
  { step: "03", title: "App Development", desc: "We build scalable, secure apps with modern frameworks." },
  { step: "04", title: "Testing & QA", desc: "Performance, security and device-compatibility testing before launch." },
  { step: "05", title: "Deployment", desc: "We publish to the Play Store & App Store with full optimization." },
  { step: "06", title: "Support & Maintenance", desc: "Updates, monitoring and optimization for long-term success." },
];

export const APP_SUPPORT = [
  "App maintenance & updates",
  "Performance optimization",
  "Bug fixing & technical support",
  "Security updates & monitoring",
  "Server & cloud management",
  "API integrations & upgrades",
  "Feature enhancements & scaling",
  "App Store & Play Store management",
  "UI/UX improvements from feedback",
  "Analytics & performance tracking",
];

export const APP_AI = {
  titleLines: ["AI-powered", "mobile applications"],
  intro:
    "Modern businesses build smarter apps with AI — improving user experiences and automating processes to save time and deliver more relevant interactions.",
  features: [
    { title: "AI Chatbots", icon: "bot" },
    { title: "Recommendation Engines", icon: "sparkles" },
    { title: "Predictive Analytics", icon: "trending" },
    { title: "Smart Search", icon: "search" },
    { title: "Automated Support", icon: "headset" },
    { title: "Personalized UX", icon: "wand" },
  ],
};

export const APP_ENTERPRISE = {
  titleLines: ["Enterprise mobile", "app development"],
  intro:
    "Large businesses need advanced integrations, workflow automation and secure internal systems. We build robust enterprise applications that improve productivity and operational efficiency.",
  points: [
    "Advanced system integrations",
    "Workflow automation",
    "Secure internal architecture",
    "Enterprise-grade UI/UX design",
  ],
};

export const APP_PRICING = {
  titleLines: ["Affordable development", "for startups & SMBs"],
  intro:
    "App cost depends on complexity, features, platforms and timelines. We focus on practical strategies that help you launch efficiently — balancing quality, scalability and budget.",
  plans: [
    { name: "MVP Development", desc: "Launch core features fast and validate your idea in the market.", points: ["Essential feature set", "Faster time to market", "Lower initial cost"] },
    { name: "Full-Featured App", desc: "A complete, production-ready application built to scale.", points: ["Custom feature set", "Scalable architecture", "Built for growth"], featured: true },
    { name: "Scalable Plans", desc: "Growth-stage plans for small businesses ready to expand.", points: ["Flexible scope", "Iterative upgrades", "Budget-friendly"] },
  ],
};

export const APP_DEDICATED = {
  titleLines: ["Hire dedicated", "app developers"],
  intro:
    "Need a long-term technical partner instead of a one-time vendor? Hire dedicated developers for ongoing development, upgrades, maintenance and feature expansion.",
  supports: [
    "Startup product development",
    "SaaS applications",
    "On-demand apps",
    "Enterprise systems",
    "Ecommerce platforms",
    "Cross-platform projects",
  ],
};

export const APP_STATS = [
  { value: 7, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "App Projects Delivered" },
  { value: 25, suffix: "+", label: "Industries Served" },
];

export const APP_GLANCE = [
  "Android, iOS & Cross-Platform expertise",
  "Scalable solutions for startups & enterprises",
  "Focused on performance, UI/UX & business growth",
];

export const APP_FAQS: FaqItem[] = [
  { question: "How much does it cost to build a mobile app?", answer: "The cost depends on features, complexity, platforms and integrations. A simple app costs less, while advanced apps with AI, real-time tracking or custom features require a higher budget." },
  { question: "How long does it take to develop an app?", answer: "A basic mobile app may take a few weeks, while complex applications can take several months. Timelines depend on design, features, testing and development scope." },
  { question: "Which is better: Flutter or React Native?", answer: "Flutter offers smooth performance and modern UI design, while React Native provides flexibility and faster development. The best choice depends on your app goals and scalability needs." },
  { question: "Should I build for Android or iOS first?", answer: "Android is ideal for reaching a larger audience, while iOS often attracts premium users. Many businesses now choose cross-platform development to launch on both simultaneously." },
  { question: "How do I validate my app idea before development?", answer: "Validate through market research, competitor analysis, user feedback and MVP testing. This helps confirm whether your app solves a real user problem." },
  { question: "What features should a successful mobile app have?", answer: "A clean UI, fast performance, secure login, easy navigation and smooth user experience — with features focused on solving user needs efficiently." },
  { question: "How do mobile apps make money?", answer: "Through subscriptions, in-app purchases, advertisements, premium upgrades or marketplace commissions. The model depends on the business type." },
  { question: "What is the difference between native and hybrid apps?", answer: "Native apps are built specifically for Android or iOS and offer better performance. Hybrid apps use one codebase for multiple platforms, making development faster and more affordable." },
  { question: "How can I reduce mobile app development costs?", answer: "Start with essential features and launch an MVP instead of building everything at once. Cross-platform technologies can also reduce development time and overall costs." },
  { question: "How do I launch and market my mobile app successfully?", answer: "Successful launches require ASO, social media marketing, beta testing and user feedback. Consistent updates and marketing improve downloads and retention." },
];
