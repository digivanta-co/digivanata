import type { SVGProps } from "react";

const base = (props: SVGProps<SVGSVGElement>) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/* ---- Contact ---- */
export const Phone = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" /></svg>
);
export const Mail = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
);
export const MapPin = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

/* ---- UI ---- */
export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><polyline points="20 6 9 17 4 12" /></svg>
);
export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
);
export const Spark = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" /></svg>
);
export const Star = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.2 6.8.7-5.1 4.6 1.4 6.7L12 17.8 6 20.9l1.4-6.7L2.3 9.6l6.8-.7L12 2z" /></svg>
);
export const TrendUp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></svg>
);
export const AlertTriangle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
);

/* ---- Service icons (slug keyed) ---- */
const Search = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.2-3.2" /></svg>
);
const Social = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4M15.4 6.5 8.6 10.5" /></svg>
);
const Ppc = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 11l18-7-7 18-2.5-7.5L3 11z" /></svg>
);
const Web = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" /><path d="M7 6.5h.01M10 6.5h.01" /></svg>
);
const Content = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 3h11l3 3v15H5z" /><path d="M9 9h6M9 13h6M9 17h4" /></svg>
);
const Orm = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3a9 9 0 1 0 9 9c0-1-.2-2-.5-2.9" /><path d="M9 12l2 2 5-5" /></svg>
);
const Leads = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M19 8v6M22 11h-6" /></svg>
);
const App = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
);

const SERVICE_ICONS: Record<string, (p: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  search: Search, social: Social, ppc: Ppc, web: Web,
  content: Content, orm: Orm, leads: Leads, app: App,
};

export function ServiceIcon({ name, ...p }: { name: string } & SVGProps<SVGSVGElement>) {
  const C = SERVICE_ICONS[name] ?? Search;
  return <C {...p} />;
}

/* ---- Industry icons (slug keyed) ---- */
const Building = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M8 7h.01M12 7h.01M16 7h.01M8 11h.01M12 11h.01M16 11h.01M10 21v-4h4v4" /></svg>
);
const Heart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 6a4.5 4.5 0 0 0-10 2.5C2 10.7 3.5 12.5 5 14l7 7 7-7z" /></svg>
);
const Book = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
);
const Utensils = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 2v7a3 3 0 0 0 3 3v10M9 2v7a3 3 0 0 1-3 3M9 2v6M18 2c-1.5 0-3 1.8-3 5s1.5 4 3 4v11" /></svg>
);
const Cart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M2 3h3l2.4 12.4a1 1 0 0 0 1 .8h8.7a1 1 0 0 0 1-.8L21 7H6" /></svg>
);
const Shirt = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M20 5 16 3a4 4 0 0 1-8 0L4 5 2 9l3 1.5V21h14V10.5L22 9z" /></svg>
);
const Dollar = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);
const Plane = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a1 1 0 0 0-.9 1.7L8 10l-2 2-2-.5-1 1 3 1.8L9 19l1-1-.5-2 2-2 2.3 4.1a1 1 0 0 0 1.7-.9z" /></svg>
);
const Store = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M3 9 4 3h16l1 6M4 9v11h16V9M4 9h16" /><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" /></svg>
);
const Rocket = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 16c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.8-.9.7-2.2-.1-3a2.1 2.1 0 0 0-2.9 0z" /><path d="M12 15 9 12c1-4 3-7 8-9 .5 4.5-1 7.5-5 8z" /><circle cx="14" cy="10" r="1.2" /></svg>
);

const Scale = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0L5 7zM19 7l-2.5 6a3 3 0 0 0 5 0L19 7zM12 4l-7 3M12 4l7 3" /></svg>
);

const INDUSTRY_ICONS: Record<string, (p: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  "Real Estate": Building, Healthcare: Heart, Education: Book, Restaurants: Utensils,
  eCommerce: Cart, "Fashion & Lifestyle": Shirt, Finance: Dollar, Travel: Plane,
  "Travel Companies": Plane, "Law Firms": Scale,
  "Local Businesses": Store, Startups: Rocket,
};
export function IndustryIcon({ name, ...p }: { name: string } & SVGProps<SVGSVGElement>) {
  const C = INDUSTRY_ICONS[name] ?? Store;
  return <C {...p} />;
}

/* ---- Why-choose icons ---- */
const Strategy = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>
);
const Report = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M5 3h11l3 3v15H5z" /><path d="M9 17v-3M12 17v-6M15 17v-4" /></svg>
);
const Users = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1A4 4 0 0 1 16 11" /></svg>
);
const Brain = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="M9.5 3A3 3 0 0 0 7 8a3 3 0 0 0-1 5.8V18a2.5 2.5 0 0 0 5 0V4.5A1.5 1.5 0 0 0 9.5 3z" /><path d="M14.5 3A3 3 0 0 1 17 8a3 3 0 0 1 1 5.8V18a2.5 2.5 0 0 1-5 0V4.5A1.5 1.5 0 0 1 14.5 3z" /></svg>
);
const Layers = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><path d="m12 2 9 5-9 5-9-5 9-5z" /><path d="m3 12 9 5 9-5M3 17l9 5 9-5" /></svg>
);
const WHY_ICONS = [Strategy, Report, TrendUp, Users, Brain, MapPin, Layers];
export function WhyIcon({ index, ...p }: { index: number } & SVGProps<SVGSVGElement>) {
  const C = WHY_ICONS[index % WHY_ICONS.length];
  return <C {...p} />;
}

/* ---- Social icons ---- */
export const Facebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M14 9h3l.5-3.5H14V3.8c0-1 .3-1.7 1.8-1.7H17V-.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V5.5H7V9h3v11h4V9z" transform="translate(0 2)" /></svg>
);
export const Instagram = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
);
export const LinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10v6M8 7v.01M12 16v-3.5a1.5 1.5 0 0 1 3 0V16M12 16v-6" /></svg>
);
export const YouTube = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" fill="currentColor" stroke="none" /></svg>
);
export const Twitter = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M17.5 3h3l-6.6 7.5L21.7 21h-5.9l-4.6-6-5.3 6H2.9l7-8L2.3 3h6l4.1 5.5L17.5 3zm-1 16h1.6L7.6 4.7H5.9L16.5 19z" /></svg>
);
export const Pinterest = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M9.5 21c-.3-1.2-.3-2.5.1-3.6L11 13" /><path d="M8.5 10.5c0-2 1.6-3.8 4-3.8s3.8 1.6 3.8 3.6c0 2.5-1.4 4.3-3.3 4.3-1 0-1.8-.8-1.5-1.9" /></svg>
);

const SOCIAL_ICONS: Record<string, (p: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  Facebook, Instagram, LinkedIn, YouTube, Twitter, Pinterest,
};
export function SocialIcon({ name, ...p }: { name: string } & SVGProps<SVGSVGElement>) {
  const C = SOCIAL_ICONS[name] ?? Facebook;
  return <C {...p} />;
}

export const GitHub = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.91v2.83c0 .27.18.6.69.49A10.04 10.04 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" /></svg>
);

export const WhatsApp = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.5A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-1.9-1.2 7.3 7.3 0 0 1-1.4-1.7c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7s1.9 2.9 4.6 4c1.6.7 2.2.7 3 .6.5 0 1.4-.6 1.6-1.1s.2-1 .1-1.1z" /></svg>
);
