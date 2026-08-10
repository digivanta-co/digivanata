"use client";

/* Real brand logos (react-icons) in their official brand colours, keyed by the
   exact names used in lib/app-data.ts. Non-brand capabilities fall back to
   neutral lucide glyphs so everything still gets a "real" icon. */
import type { IconType } from "react-icons";
import {
  SiAndroid,
  SiApple,
  SiFirebase,
  SiFlutter,
  SiGooglecloud,
  SiKotlin,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSwift,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { Bot, Cloud, CreditCard, MessageSquare, Plug, type LucideIcon } from "lucide-react";

type Brand = { Icon: IconType; color: string };

const BRANDS: Record<string, Brand> = {
  Flutter: { Icon: SiFlutter, color: "#02569B" },
  "React Native": { Icon: SiReact, color: "#087EA4" },
  "Swift (iOS)": { Icon: SiSwift, color: "#F05138" },
  "Kotlin (Android)": { Icon: SiKotlin, color: "#7F52FF" },
  Java: { Icon: SiOpenjdk, color: "#437291" },
  "Node.js": { Icon: SiNodedotjs, color: "#5FA04E" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  Python: { Icon: SiPython, color: "#3776AB" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  Firebase: { Icon: SiFirebase, color: "#DD2C00" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  AWS: { Icon: FaAws, color: "#FF9900" },
  "Google Cloud": { Icon: SiGooglecloud, color: "#4285F4" },
  /* platforms */
  Android: { Icon: SiAndroid, color: "#3DDC84" },
  iOS: { Icon: SiApple, color: "#0F172A" },
};

const CAPABILITIES: Record<string, LucideIcon> = {
  "AI & Machine Learning": Bot,
  "API Integrations": Plug,
  "Real-Time Chat": MessageSquare,
  "Payment Gateways": CreditCard,
  "Cloud Infrastructure": Cloud,
};

export function hasBrand(name: string) {
  return Boolean(BRANDS[name]);
}

export function TechLogo({ name, size = 24, mono = false }: { name: string; size?: number; mono?: boolean }) {
  const brand = BRANDS[name];
  if (brand) {
    const { Icon, color } = brand;
    return <Icon aria-hidden size={size} style={{ color: mono ? "currentColor" : color }} />;
  }
  const Fallback = CAPABILITIES[name];
  if (Fallback) return <Fallback aria-hidden size={size} strokeWidth={1.8} />;
  return null;
}
