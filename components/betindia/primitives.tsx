"use client";

/* Shared BETINDIA building blocks — reveal wrappers, section shells,
   buttons and animated counters. All motion via framer-motion. */

import { useEffect, useRef } from "react";
import { animate, motion, useInView, type Variants } from "framer-motion";
import {
  Video,
  MonitorPlay,
  IndianRupee,
  Zap,
  ShieldCheck,
  Headset,
  UserPlus,
  LayoutGrid,
  Coins,
  Layers,
  EyeOff,
  TrendingUp,
  Trophy,
  BadgeCheck,
  Wallet,
  Crown,
  Lock,
  Gauge,
  Gift,
  PiggyBank,
  Users,
  DoorOpen,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const BI_ICONS: Record<string, LucideIcon> = {
  Video,
  MonitorPlay,
  IndianRupee,
  Zap,
  ShieldCheck,
  Headset,
  UserPlus,
  LayoutGrid,
  Coins,
  Layers,
  EyeOff,
  TrendingUp,
  Trophy,
  BadgeCheck,
  Wallet,
  Crown,
  Lock,
  Gauge,
  Gift,
  PiggyBank,
  Users,
  DoorOpen,
};

export const BI_EASE = [0.22, 1, 0.36, 1] as const;

export const biRise: Variants = {
  hidden: { opacity: 0, y: 48 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: BI_EASE },
  }),
};

/** Fade + rise into view once. Wrap any block. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 48,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: BI_EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Full-bleed section shell with consistent luxury spacing. */
export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("relative py-28 md:py-40", className)}>
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">{children}</div>
    </section>
  );
}

/** Eyebrow + serif headline + supporting copy. */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  sub?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "mb-16 md:mb-24 max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span className="bi-eyebrow">
        <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
        {eyebrow}
        <span className="h-1 w-1 rounded-full bg-[#d4af37]" />
      </span>
      <h2 className="bi-serif mt-6 text-4xl leading-[1.08] font-semibold md:text-6xl">
        {title}{" "}
        {accent ? <em className="bi-gold-text italic">{accent}</em> : null}
      </h2>
      {sub ? (
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#b7c2d0] md:text-lg">
          {sub}
        </p>
      ) : null}
    </Reveal>
  );
}

/** Animated number that counts up when scrolled into view. */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const el = ref.current;
    if (!el || !inView) return;
    const format = (v: number) =>
      `${prefix}${v.toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = format(v);
      },
    });
    return () => controls.stop();
  }, [inView, value, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${(0).toLocaleString("en-IN", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`}
    </span>
  );
}

/** Primary orange CTA. */
export function PlayButton({
  children = "Play Now",
  className,
  href = "#",
  size = "lg",
}: {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  size?: "lg" | "md";
}) {
  return (
    <a
      href={href}
      className={cn(
        "bi-btn bi-btn-primary",
        size === "lg" ? "px-9 py-4 text-base" : "px-6 py-3 text-sm",
        className
      )}
    >
      {children}
    </a>
  );
}

/** Secondary glass CTA. */
export function GhostButton({
  children,
  className,
  href = "#",
  size = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  size?: "lg" | "md";
}) {
  return (
    <a
      href={href}
      className={cn(
        "bi-btn bi-btn-ghost",
        size === "lg" ? "px-9 py-4 text-base" : "px-6 py-3 text-sm",
        className
      )}
    >
      {children}
    </a>
  );
}

/** Pulsing "live" dot. */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-flex h-2 w-2", className)}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00c16a] opacity-60" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00c16a]" />
    </span>
  );
}
