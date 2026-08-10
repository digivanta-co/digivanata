"use client";

/* ================================================================
   Reusable presentational primitives for the App Development page.
   Pure Tailwind styling (no CSS files, no inline styles) + GSAP hooks.
   ================================================================ */
import Link from "next/link";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  useReveal,
  useStagger,
  useTextReveal,
  useCounter,
  useParallax,
} from "@/hooks/animations";
import type { RevealVariant } from "@/animations/gsap";

/* ---- Arrow used in buttons ---- */
function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

/* ---- Section shell with consistent rhythm ---- */
export function Section({
  id,
  light,
  className,
  children,
}: {
  id?: string;
  light?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("relative overflow-hidden py-12 sm:py-20 lg:py-28", light && "bg-[#F8FAFC]", className)}
    >
      {children}
    </section>
  );
}

/* ---- Floating background: grid + parallax blobs ---- */
export function Background({ variant = "default" }: { variant?: "default" | "hero" }) {
  const a = useParallax<HTMLDivElement>({ y: -70 });
  const b = useParallax<HTMLDivElement>({ y: 70 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.035)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_15%,transparent_72%)]" />
      <div
        ref={a}
        className={cn(
          "absolute -top-24 right-[8%] rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.12),transparent_70%)] blur-3xl",
          variant === "hero" ? "h-[42vh] w-[42vh]" : "h-72 w-72"
        )}
      />
      <div
        ref={b}
        className={cn(
          "absolute -bottom-24 left-[6%] rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.12),transparent_70%)] blur-3xl",
          variant === "hero" ? "h-[38vh] w-[38vh]" : "h-72 w-72"
        )}
      />
    </div>
  );
}

/* ---- Eyebrow label ---- */
export function Eyebrow({ children, center }: { children: ReactNode; center?: boolean }) {
  const ref = useReveal<HTMLParagraphElement>({ variant: "up", duration: 0.7 });
  return (
    <p
      ref={ref}
      className={cn(
        "mb-4 inline-flex items-center gap-2.5 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#286FAB]",
        center && "justify-center"
      )}
    >
      <span className="h-px w-7 bg-[linear-gradient(90deg,#286FAB,#C9A227)]" />
      {children}
    </p>
  );
}

/* ---- Heading with line-by-line mask reveal ---- */
export function Heading({
  lines,
  gradient = [],
  as: Tag = "h2",
  className,
}: {
  lines: string[];
  gradient?: number[];
  as?: ElementType;
  className?: string;
}) {
  const ref = useTextReveal<HTMLHeadingElement>();
  return (
    <Tag
      ref={ref}
      className={cn(
        "font-bold tracking-tight text-[#0F172A] [text-wrap:balance]",
        className
      )}
    >
      {lines.map((ln, i) => (
        <span key={i} className="block overflow-hidden pb-[0.06em]">
          <span
            className={cn(
              "tr-line inline-block will-change-transform",
              // solid #286FAB (the old "gradient" was #286FAB→#286FAB, i.e. the
              // same colour) — avoids background-clip:text, which the reveal
              // transform + will-change break, leaving the text invisible.
              gradient.includes(i) && "text-[#286FAB]"
            )}
          >
            {ln}
          </span>
        </span>
      ))}
    </Tag>
  );
}

/* ---- Paragraph that fades up ---- */
export function Lead({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useReveal<HTMLParagraphElement>({ variant: "up", delay: 0.05 });
  return (
    <p ref={ref} className={cn("max-w-2xl text-[1.05rem] leading-[1.75] text-[#64748B]", className)}>
      {children}
    </p>
  );
}

/* ---- Reveal wrapper (single element) ---- */
export function Reveal({
  children,
  variant = "up",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}) {
  const ref = useReveal<HTMLDivElement>({ variant, delay });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ---- Stagger wrapper (children animate in sequence) ---- */
export function Stagger({
  children,
  className,
  selector,
  scale,
  start,
}: {
  children: ReactNode;
  className?: string;
  selector?: string;
  scale?: number;
  start?: string;
}) {
  const ref = useStagger<HTMLDivElement>({ selector, scale, start });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/* ---- Button (rounded, gradient hover, arrow slide) ---- */
export function Button({
  href = "/contact",
  children,
  variant = "primary",
  className,
}: {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "site-cta group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-[#286FAB] text-white hover:-translate-y-0.5 hover:bg-[linear-gradient(120deg,#286FAB,#286FAB)] hover:shadow-[0_16px_36px_rgba(40,111,171,0.35)]",
        variant === "ghost" &&
          "border border-[#E5E7EB] bg-white text-[#0F172A] hover:-translate-y-0.5 hover:border-[#286FAB] hover:text-[#286FAB]",
        variant === "light" &&
          "bg-white text-[#286FAB] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.18)]",
        className
      )}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        <Arrow />
      </span>
    </Link>
  );
}

/* ---- Card (lift + glow + scale + border on hover) ---- */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all duration-300",
        "hover:-translate-y-2.5 hover:scale-[1.03] hover:border-[#286FAB]/60 hover:shadow-[0_26px_54px_rgba(40,111,171,0.16)]",
        className
      )}
    >
      {/* animated top border accent */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-[linear-gradient(90deg,#286FAB,#286FAB)] transition-transform duration-300 group-hover:scale-x-100"
      />
      {/* soft glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(40,111,171,0.08),transparent_60%)]"
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

/* ---- Icon tile ---- */
export function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="mb-5 grid size-12 place-items-center rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] text-[#286FAB] transition-colors duration-300 group-hover:border-[#286FAB]/40 group-hover:bg-[#286FAB] group-hover:text-white">
      {children}
    </span>
  );
}

/* ---- Animated counter stat ---- */
export function Stat({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useCounter<HTMLSpanElement>(value, { suffix });
  return (
    <div className="text-center">
      <div className="bg-[linear-gradient(120deg,#286FAB,#286FAB)] bg-clip-text text-[clamp(2.6rem,5vw,3.8rem)] font-bold tracking-tight text-transparent">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-[#64748B]">{label}</p>
    </div>
  );
}

/* ---- Reusable mid-page CTA band (background scales in) ---- */
export function CtaBand({
  title,
  desc,
  button,
  href = "/contact",
}: {
  title: string;
  desc?: string;
  button: string;
  href?: string;
}) {
  const ref = useReveal<HTMLDivElement>({ variant: "scale", duration: 1 });
  return (
    <section className="relative py-12">
      <div className="container">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-[28px] bg-[#0F172A] px-6 py-14 text-center sm:px-12"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_140%_at_50%_-10%,rgba(40,111,171,0.6),transparent_60%)]"
          />
          <div className="relative z-[1] mx-auto max-w-2xl">
            <h2 className="text-[clamp(1.7rem,4vw,2.6rem)] font-bold tracking-tight text-white [text-wrap:balance]">
              {title}
            </h2>
            <span aria-hidden className="mx-auto mt-5 block h-px w-16 bg-[#C9A227]" />
            {desc && <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-slate-300">{desc}</p>}
            <div className="mt-8 flex justify-center">
              <Button href={href} variant="light">
                {button}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
