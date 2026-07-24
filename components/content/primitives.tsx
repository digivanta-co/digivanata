"use client";

/* ================================================================
   Content Marketing page — shared bits, cinematic dark .cm theme.
   (cm-* classes live in globals.css: black · electric-blue · violet.)
   ================================================================ */
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/animations";
import { ArrowRight } from "@/components/ui/Icons";
import { MagneticButton } from "@/components/agency/primitives";

/* ---- Uppercase kicker label — electric-blue lead rule ---- */
export function Kicker({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <span className={cn("cm-kicker mb-5", center && "justify-center")}>{children}</span>
  );
}

/* ---- Soft floating background glows (blue + violet) ---- */
export function Aura({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="ag-blob ag-blob--blue ag-blob--float absolute -left-20 top-10 size-[38vw] max-w-[520px]" />
      <div
        className="ag-blob ag-blob--purple ag-blob--float absolute -right-24 bottom-0 size-[34vw] max-w-[460px]"
        style={{ animationDelay: "-6s" }}
      />
    </div>
  );
}

/* ---- Slim inline CTA ribbon between sections ---- */
export function CtaRibbon({
  text,
  cta,
  href = "#contact",
}: {
  text: string;
  cta: string;
  href?: string;
}) {
  const ref = useReveal<HTMLDivElement>({ variant: "up", duration: 0.8 });
  return (
    <div className="border-y border-[var(--cm-line)] bg-[var(--cm-panel)]">
      <div className="container">
        <div ref={ref} className="flex flex-wrap items-center justify-between gap-5 py-8">
          <p className="m-0 max-w-2xl text-[0.98rem] leading-relaxed text-[var(--cm-muted)]">{text}</p>
          <MagneticButton href={href} className="shrink-0 text-[0.95rem]">
            {cta} <ArrowRight />
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
