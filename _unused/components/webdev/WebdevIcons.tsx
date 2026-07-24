import type { SVGProps } from "react";

/* ================================================================
   Web Development page icon set — crisp 24px stroke icons.
   Extends the SeoIcons pattern for webdev-specific icons.
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

/* ---- Layout / Structure ---- */
const Layout = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></svg>
);
const Code = (p: IconProps) => (
  <svg {...base(p)}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
);
const Monitor = (p: IconProps) => (
  <svg {...base(p)}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
);
const Smartphone = (p: IconProps) => (
  <svg {...base(p)}><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></svg>
);
const Globe = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" /></svg>
);

/* ---- Performance ---- */
const Gauge = (p: IconProps) => (
  <svg {...base(p)}><path d="M3.5 18a9 9 0 1 1 17 0" /><path d="m13.5 11-2.5 3.5" /><circle cx="12" cy="15" r="1.4" fill="currentColor" stroke="none" /></svg>
);
const Zap = (p: IconProps) => (
  <svg {...base(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" /></svg>
);
const TrendUp = (p: IconProps) => (
  <svg {...base(p)}><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></svg>
);

/* ---- Tools / Tech ---- */
const Wrench = (p: IconProps) => (
  <svg {...base(p)}><path d="M14.5 5.5a4 4 0 0 1-5.2 5.2L4 16v4h4l5.3-5.3a4 4 0 0 0 5.2-5.2l-2.6 2.6-2.5-.7-.7-2.5 2.6-2.6z" /></svg>
);
const Search = (p: IconProps) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.4-3.4" /></svg>
);
const Shield = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l7 3v5c0 4.5-3 8.3-7 10-4-1.7-7-5.5-7-10V6l7-3z" /><path d="m9 12 2 2 4-4" /></svg>
);
const MapPin = (p: IconProps) => (
  <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="2.6" /></svg>
);

/* ---- E-commerce / Cart ---- */
const ShoppingCart = (p: IconProps) => (
  <svg {...base(p)}><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);

/* ---- Users / Target ---- */
const Target = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>
);
const Users = (p: IconProps) => (
  <svg {...base(p)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1A4 4 0 0 1 16 11" /></svg>
);

/* ---- Star (for trust) ---- */
const Star = (p: IconProps) => (
  <svg {...base(p)} fill="currentColor" stroke="none"><path d="M12 2l2.9 6.2 6.8.7-5.1 4.6 1.4 6.7L12 17.8 6 20.9l1.4-6.7L2.3 9.6l6.8-.7L12 2z" /></svg>
);

/* ---- Layers / Scale ---- */
const Layers = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 2 2 7l10 5 10-5-10-5z" /><path d="m2 17 10 5 10-5" /><path d="m2 12 10 5 10-5" /></svg>
);

/* ---- Paintbrush / Design ---- */
const Paintbrush = (p: IconProps) => (
  <svg {...base(p)}><path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4.7.6.6-4.7 6.5-4.3z" /><path d="M8 16a3 3 0 1 1-3 3c0-1.5.5-2.5 1.5-3.5L8 14" /></svg>
);

/* ---- Refresh / Redesign ---- */
const RefreshCw = (p: IconProps) => (
  <svg {...base(p)}><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
);

const ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  layout: Layout,
  code: Code,
  monitor: Monitor,
  smartphone: Smartphone,
  globe: Globe,
  gauge: Gauge,
  zap: Zap,
  speed: Zap,
  trendUp: TrendUp,
  wrench: Wrench,
  search: Search,
  shield: Shield,
  mapPin: MapPin,
  cart: ShoppingCart,
  target: Target,
  users: Users,
  star: Star,
  layers: Layers,
  paintbrush: Paintbrush,
  refresh: RefreshCw,
};

export function WdIcon({ name, ...p }: { name: string } & IconProps) {
  const C = ICONS[name] ?? Globe;
  return <C {...p} />;
}
