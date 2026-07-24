"use client";

/* ================================================================
   Graphic Designing page — shared bits, light luxury theme
   (gd-* classes in globals.css: white · navy ink · blue · gold).
   ================================================================ */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useCounter, useReveal } from "@/hooks/animations";
import { ArrowRight } from "@/components/ui/Icons";

/* ---- Uppercase kicker label — the gold touch ---- */
export function Label({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <span
      className={cn(
        "mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--gd-gold)]",
        center && "justify-center"
      )}
    >
      <span className="h-px w-8 bg-[var(--gd-gold)]/70" />
      {children}
    </span>
  );
}

/* ---- Big animated counter ---- */
export function StatBig({
  value,
  suffix = "",
  label,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}) {
  const ref = useCounter<HTMLSpanElement>(value, { suffix, decimals });
  return (
    <div>
      <div className="gd-display gd-grad text-[clamp(2.2rem,4.5vw,3.4rem)]">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-[var(--gd-muted)]">{label}</p>
    </div>
  );
}

/* ---- Slim inline CTA ribbon between sections ---- */
export function CtaRibbon({ text, cta, href = "#contact" }: { text: string; cta: string; href?: string }) {
  const ref = useReveal<HTMLDivElement>({ variant: "up", duration: 0.8 });
  return (
    <div className="border-y border-[var(--gd-line)] bg-[var(--gd-soft)]">
      <div className="container">
        <div ref={ref} className="flex flex-wrap items-center justify-between gap-4 py-7">
          <p className="m-0 text-base text-[var(--gd-muted)]">{text}</p>
          <a
            href={href}
            className="ag-link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--gd-navy)] [&_svg]:size-4 [&_svg]:text-[var(--gd-gold)]"
          >
            {cta} <ArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
