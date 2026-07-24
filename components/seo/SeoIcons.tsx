import type { SVGProps } from "react";

/* ================================================================
   SEO page icon set — crisp 24px stroke icons (currentColor).
   Replaces emoji across the SEO page for a professional look.
   ================================================================ */

type IconProps = SVGProps<SVGSVGElement>;

const base = (p: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...p,
});

/* ---- Search / platforms ---- */
const Search = (p: IconProps) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.4-3.4" /></svg>
);
const Brain = (p: IconProps) => (
  <svg {...base(p)}><path d="M9.5 3A3 3 0 0 0 7 8a3 3 0 0 0-1 5.8V18a2.5 2.5 0 0 0 5 0V4.5A1.5 1.5 0 0 0 9.5 3z" /><path d="M14.5 3A3 3 0 0 1 17 8a3 3 0 0 1 1 5.8V18a2.5 2.5 0 0 1-5 0V4.5A1.5 1.5 0 0 1 14.5 3z" /></svg>
);
const Sparkles = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l1.6 4.3L18 9l-4.4 1.7L12 15l-1.6-4.3L6 9l4.4-1.7L12 3z" /><path d="M18 14.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8z" /></svg>
);
const Mic = (p: IconProps) => (
  <svg {...base(p)}><rect x="9" y="2" width="6" height="12" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3M8 21h8" /></svg>
);
const Bot = (p: IconProps) => (
  <svg {...base(p)}><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 8V5M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /><path d="M9 13h.01M15 13h.01" /><path d="M2 13v3M22 13v3" /></svg>
);

/* ---- Metrics / outcomes ---- */
const TrendUp = (p: IconProps) => (
  <svg {...base(p)}><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></svg>
);
const TrendDown = (p: IconProps) => (
  <svg {...base(p)}><polyline points="3 7 9 13 13 9 21 17" /><polyline points="15 17 21 17 21 11" /></svg>
);
const Target = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>
);
const Trophy = (p: IconProps) => (
  <svg {...base(p)}><path d="M7 4h10v5a5 5 0 0 1-10 0V4z" /><path d="M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3" /><path d="M10 16h4M9 20h6M12 16v4" /></svg>
);

/* ---- Quality / structure ---- */
const Gauge = (p: IconProps) => (
  <svg {...base(p)}><path d="M3.5 18a9 9 0 1 1 17 0" /><path d="m13.5 11-2.5 3.5" /><circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" /></svg>
);
const Layout = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></svg>
);
const Wrench = (p: IconProps) => (
  <svg {...base(p)}><path d="M14.5 5.5a4 4 0 0 1-5.2 5.2L4 16v4h4l5.3-5.3a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.5-.7-.7-2.5 2.6-2.6z" /></svg>
);
const Link = (p: IconProps) => (
  <svg {...base(p)}><path d="M9 13a4 4 0 0 0 6 .4l3-3a4 4 0 0 0-5.7-5.7l-1.5 1.5" /><path d="M15 11a4 4 0 0 0-6-.4l-3 3a4 4 0 0 0 5.7 5.7l1.5-1.5" /></svg>
);
const Smartphone = (p: IconProps) => (
  <svg {...base(p)}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
);
const MapPin = (p: IconProps) => (
  <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="2.6" /></svg>
);
const FileText = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><path d="M9 12h6M9 16h6" /></svg>
);

/* ---- Benefits ---- */
const Shield = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" /><path d="m9 12 2 2 4-4" /></svg>
);
const Sprout = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 21v-9" /><path d="M12 12C12 8 9 6 4 6c0 4 2.5 6 8 6z" /><path d="M12 12c0-3.5 2.5-5.5 7-5.5 0 3.5-2 5.5-7 5.5z" /></svg>
);
const Zap = (p: IconProps) => (
  <svg {...base(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>
);

/* ---- Hero stats ---- */
const Star = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.2 6.8.7-5.1 4.6 1.4 6.7L12 17.8 6 20.9l1.4-6.7L2.3 9.6l6.8-.7L12 2z" /></svg>
);
const Calendar = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 9h18M8 3v4M16 3v4" /></svg>
);
const Users = (p: IconProps) => (
  <svg {...base(p)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1A4 4 0 0 1 16 11" /></svg>
);
const BadgeCheck = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 2.5l2.3 1.7 2.9-.2.9 2.7 2.3 1.7-.9 2.7.9 2.7-2.3 1.7-.9 2.7-2.9-.2L12 21.5l-2.3-1.7-2.9.2-.9-2.7L3.6 15.6l.9-2.7-.9-2.7 2.3-1.7.9-2.7 2.9.2L12 2.5z" /><path d="m9 12 2 2 4-4" /></svg>
);

const ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  search: Search,
  brain: Brain,
  spark: Sparkles,
  sparkles: Sparkles,
  mic: Mic,
  bot: Bot,
  trendUp: TrendUp,
  trendDown: TrendDown,
  target: Target,
  trophy: Trophy,
  gauge: Gauge,
  layout: Layout,
  wrench: Wrench,
  link: Link,
  smartphone: Smartphone,
  mapPin: MapPin,
  fileText: FileText,
  shield: Shield,
  growth: Sprout,
  speed: Zap,
  zap: Zap,
  ai: Brain,
  star: Star,
  calendar: Calendar,
  users: Users,
  badgeCheck: BadgeCheck,
};

export function SeoIcon({ name, ...p }: { name: string } & IconProps) {
  const C = ICONS[name] ?? Search;
  return <C {...p} />;
}
