/* Content for the cinematic dark homepage (components/agency/*). */

export const AG_MARQUEE = [
  "MARKETING AGENCY",
  "SEO",
  "GOOGLE ADS",
  "META ADS",
  "BRANDING",
  "PERFORMANCE MARKETING",
  "CONTENT",
  "LEAD GENERATION",
  "WEBSITE DEVELOPMENT",
] as const;

export const AG_JOURNEY = [
  { k: "Traffic", d: "We put you in front of high-intent audiences." },
  { k: "Leads", d: "We turn attention into qualified enquiries." },
  { k: "Sales", d: "We convert pipeline into paying customers." },
  { k: "Growth", d: "We compound results into predictable scale." },
] as const;

export const AG_SERVICES = [
  { t: "SEO", d: "Rank for the keywords that actually drive revenue." },
  { t: "Google Ads", d: "High-intent search & shopping campaigns that pay back." },
  { t: "Meta Ads", d: "Scroll-stopping creative + precision targeting on IG/FB." },
  { t: "Web Development", d: "Fast, conversion-obsessed sites that sell while you sleep." },
  { t: "Brand Strategy", d: "Positioning and identity that make you the obvious choice." },
  { t: "Content Marketing", d: "Stories and assets that build demand at every stage." },
] as const;

export const AG_STATS = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 50, suffix: "M+", label: "Ad Spend" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 120, suffix: "%", label: "Average Growth" },
] as const;

export const AG_PORTFOLIO = [
  { t: "Nova Skincare", cat: "eCommerce · Meta Ads", img: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&q=80&w=1000" },
  { t: "Loop Fintech", cat: "SEO · Performance", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" },
  { t: "Atlas Realty", cat: "Google Ads · Web", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" },
  { t: "Peak Fitness", cat: "Brand · Content", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000" },
  { t: "Verde Foods", cat: "Social · Performance", img: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&q=80&w=1000" },
] as const;

export const AG_TESTIMONIALS = [
  { q: "They didn't just run ads — they rebuilt our entire growth engine. 3.2× revenue in seven months.", n: "Ananya Rao", r: "Founder, Nova Skincare" },
  { q: "The most data-driven agency we've worked with. Every rupee is accountable.", n: "Rohit Mehta", r: "CMO, Loop Fintech" },
  { q: "Our cost per lead dropped 60% while volume tripled. Unreal.", n: "Sara Khan", r: "Head of Growth, Atlas Realty" },
] as const;

export const AG_NAV = [
  { t: "Work", href: "#work" },
  { t: "Services", href: "#services" },
  { t: "Results", href: "#stats" },
  { t: "Contact", href: "#contact" },
] as const;
