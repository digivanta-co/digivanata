/* ================================================================
   About Page — Redesigned Sections Data
   (What We Do · Working Process · Why Choose)
   Icons are Lucide names, mapped to components inside each section.
   ================================================================ */

export type AboutService = { icon: string; title: string; desc: string; href: string };

export const ABOUT_SERVICES: AboutService[] = [
  { icon: "Code2", title: "Web Development Services", desc: "Fast, scalable websites and web apps engineered for performance and growth.", href: "/web-development-company-in-delhi" },
  { icon: "MonitorSmartphone", title: "Responsive Website Design", desc: "Pixel perfect layouts that adapt beautifully across every screen and device.", href: "/web-development-company-in-delhi" },
  { icon: "Search", title: "SEO & Search Engine Optimization", desc: "Technical and on page SEO that lifts rankings and drives qualified organic traffic to your business.", href: "/seo-services-in-delhi" },
  { icon: "Megaphone", title: "Digital Marketing Services", desc: "Full funnel campaigns that turn attention into measurable business results.", href: "/ppc-company-in-delhi" },
  { icon: "Share2", title: "Social Media Marketing", desc: "Content and campaigns that build community and grow your brand presence.", href: "/social-media-marketing-in-delhi" },
  { icon: "Palette", title: "Branding & Creative Strategy", desc: "Distinct brand identities and creative strategy that make you impossible to ignore.", href: "/graphic-designing-company-in-delhi" },
  { icon: "PenTool", title: "UI/UX Design", desc: "Intuitive, user first interfaces designed to convert and delight.", href: "/graphic-designing-company-in-delhi" },
  { icon: "ShoppingCart", title: "eCommerce Development", desc: "Conversion focused online stores built to scale with your sales.", href: "/web-development-company-in-delhi" },
  { icon: "Target", title: "Performance Marketing", desc: "Data driven paid campaigns optimized for ROI and predictable, repeatable growth.", href: "/ppc-company-in-delhi" },
  { icon: "Rocket", title: "Business Growth Solutions", desc: "Strategic roadmaps that align every digital effort with real revenue goals.", href: "/contact" },
  { icon: "FileText", title: "Content Marketing", desc: "SEO led content that builds authority and nurtures customers toward action.", href: "/content-marketing-in-delhi" },
  { icon: "Boxes", title: "Custom Digital Solutions", desc: "Tailored digital products and integrations built around your unique business needs.", href: "/contact" },
];

export type AboutStep = { step: string; icon: string; title: string; desc: string };

export const ABOUT_PROCESS: AboutStep[] = [
  { step: "01", icon: "Search", title: "Research & Discovery", desc: "We analyze your business, industry, competitors, and audience to understand your goals and identify growth opportunities." },
  { step: "02", icon: "ClipboardList", title: "Strategy & Planning", desc: "Our team creates a customized roadmap focused on branding, web development, SEO, and digital marketing strategies." },
  { step: "03", icon: "Code2", title: "Design & Development", desc: "We build modern, responsive, and SEO optimized websites and digital experiences that align with your brand identity." },
  { step: "04", icon: "Rocket", title: "Marketing & Optimization", desc: "From search engine optimization and social media marketing to performance campaigns, we optimize strategies to increase traffic, engagement, and conversions." },
  { step: "05", icon: "LineChart", title: "Growth & Support", desc: "We continuously monitor performance, improve strategies, and provide ongoing support to help your business achieve long term success." },
];

export type AboutStat = { icon: string; value: number; suffix?: string; stars?: boolean; label: string; desc: string; accent: "blue" | "gold"; wide?: boolean };

export const ABOUT_STATS: AboutStat[] = [
  { icon: "Star", value: 5, stars: true, label: "Trusted Agency", desc: "Rated by clients across industries", accent: "gold", wide: true },
  { icon: "Rocket", value: 100, suffix: "%", label: "Project Delivered", desc: "Across web, brand & marketing", accent: "blue" },
  { icon: "ThumbsUp", value: 98, suffix: "%", label: "Client Satisfaction", desc: "Long term, happy partnerships", accent: "blue" },
  { icon: "TrendingUp", value: 250, suffix: "%", label: "Business Growth", desc: "Average uplift we help drive", accent: "gold" },
];

export type AboutReason = { icon: string; title: string; desc: string };

export const ABOUT_WHY: AboutReason[] = [
  { icon: "Sparkles", title: "Creative & Innovative Solutions", desc: "Fresh ideas and modern execution that set your brand apart." },
  { icon: "Search", title: "SEO Optimized Strategies", desc: "Every build ships search-ready to maximize long term visibility." },
  { icon: "Code2", title: "Modern Web Development", desc: "Cutting edge stacks for fast, secure, future ready websites." },
  { icon: "TrendingUp", title: "Result Driven Digital Marketing", desc: "Campaigns measured by real growth, not vanity metrics." },
  { icon: "Users", title: "Client Focused Approach", desc: "Your goals lead every decision we make, end to end." },
  { icon: "MessageSquare", title: "Transparent Communication", desc: "Clear reporting and honest updates at every stage." },
  { icon: "Layers", title: "Scalable Business Solutions", desc: "Systems designed to grow seamlessly as you do." },
  { icon: "Handshake", title: "Long Term Growth Partnership", desc: "We invest in relationships, not one off projects." },
];
