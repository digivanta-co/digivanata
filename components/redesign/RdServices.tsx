"use client";

import { useState } from "react";
import Link from "next/link";
import { RD_SERVICES, RD_SERVICES_LEAD } from "@/lib/redesign-data";
import { RdMagnetic } from "./primitives";
import { ServiceIcon, ArrowRight, Check } from "@/components/ui/Icons";
import { useStagger } from "@/hooks/animations";
import { cn } from "@/lib/utils";

type Service = (typeof RD_SERVICES)[number];

const URLS: Record<string, string> = {
  seo: "/seo-services-in-delhi",
  smm: "/social-media-marketing-in-delhi",
  performance: "/ppc-company-in-delhi",
  web: "/web-development-company-in-delhi",
  app: "/mobile-app-development-in-delhi",
};

/* ---- chip list with a colored dot ---- */
function List({
  label,
  items,
  tone = "blue",
}: {
  label?: string;
  items?: readonly string[];
  tone?: "blue" | "gold";
}) {
  if (!items?.length) return null;
  return (
    <div>
      {label && <p className="mb-2 text-sm font-semibold text-[var(--rd-ink)]">{label}</p>}
      <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
        {items.map((it) => (
          <li
            key={it}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--rd-border)] bg-white px-3 py-1.5 text-[0.82rem] text-[var(--rd-ink)]"
          >
            <span className={"size-1.5 rounded-full " + (tone === "gold" ? "bg-[var(--rd-gold)]" : "bg-[var(--rd-blue)]")} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---- expanded body: all the service copy, organised in two columns ---- */
function Body({ s }: { s: Service }) {
  const r = s as unknown as Record<string, string | readonly string[] | undefined>;
  const arr = (v: unknown) => v as readonly string[] | undefined;
  const str = (v: unknown) => v as string | undefined;
  const url = URLS[s.id];

  return (
    <div className="grid gap-8 pb-9 pt-2 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
      {/* left — narrative */}
      <div className="space-y-4">
        <p className="m-0 text-[1.05rem] leading-relaxed text-[var(--rd-muted)]">{s.intro}</p>
        {str(r.introExtra) && (
          <p className="m-0 leading-relaxed text-[var(--rd-muted)]">{str(r.introExtra)}</p>
        )}
        {str(r.note) && (
          <p className="m-0 border-l-2 border-[var(--rd-gold)] pl-4 text-sm italic leading-relaxed text-[var(--rd-muted)]">
            {str(r.note)}
          </p>
        )}
        {str(r.problemsLabel) && (
          <div className="pt-1">
            <p className="mb-2 text-sm font-semibold text-[var(--rd-ink)]">{str(r.problemsLabel)}</p>
            <ul className="m-0 grid list-none gap-1.5 p-0 sm:grid-cols-2">
              {(arr(r.problems) ?? []).map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-[var(--rd-muted)]">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-[var(--rd-gold-soft)] text-[var(--rd-gold)] [&_svg]:size-2.5">
                    <Check />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="flex flex-wrap items-center gap-3 pt-3">
          <RdMagnetic href="/contact">
            {str(r.cta) ?? "Get Started"} <ArrowRight />
          </RdMagnetic>
          {url && (
            <Link
              href={url}
              className="inline-flex items-center gap-1.5 border-b border-[var(--rd-border)] pb-0.5 text-sm font-semibold text-[var(--rd-ink)]! transition-colors hover:border-[var(--rd-gold)] hover:text-[var(--rd-blue)]! [&_svg]:size-3.5"
            >
              Learn more <ArrowRight />
            </Link>
          )}
        </div>
        {str(r.ctaSub) && <p className="m-0 text-xs text-[var(--rd-muted)]">{str(r.ctaSub)}</p>}
      </div>

      {/* right — everything included */}
      <div className="grid content-start gap-5">
        <List label={str(r.helpsLabel)} items={arr(r.helps)} />
        <List label={str(r.strugglesLabel)} items={arr(r.struggles)} tone="gold" />
        <List label={str(r.platformsLabel)} items={arr(r.platforms)} />
        <List label={str(r.includesLabel)} items={arr(r.includes)} />
        <List label={str(r.focusLabel)} items={arr(r.focus)} tone="gold" />
      </div>
    </div>
  );
}

export default function RdServices() {
  const [open, setOpen] = useState(0);
  const rowsRef = useStagger<HTMLDivElement>({ y: 50, scale: 1, stagger: 0.08 });

  return (
    <section id="services" className="relative bg-white py-8 sm:py-12">
      <div className="container">
        {/* Section header */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="rd-eyebrow mb-4">What we do</span>
            <h2 className="rd-h2 text-[var(--rd-ink)]">{RD_SERVICES_LEAD.heading}</h2>
          </div>
          <p className="m-0 max-w-sm text-sm leading-relaxed text-[var(--rd-muted)]">
            {RD_SERVICES_LEAD.intro}
          </p>
        </div>

        {/* Service index */}
        <div ref={rowsRef} className="border-t border-[var(--rd-border)]">
          {RD_SERVICES.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.id}
                className={cn(
                  "border-b border-[var(--rd-border)] transition-colors duration-300",
                  isOpen ? "bg-[var(--rd-gray)]" : "hover:bg-[var(--rd-gray)]/60"
                )}
              >
                {/* row header */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="grid w-full cursor-pointer grid-cols-[2.4rem_auto_1fr_auto] items-center gap-3 border-none bg-transparent py-6 text-left sm:gap-5"
                >
                  <span
                    className={cn(
                      "rd-display text-sm transition-colors duration-300",
                      isOpen ? "text-[var(--rd-gold)]" : "text-[var(--rd-muted)]"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className={cn(
                      "grid size-11 place-items-center rounded-xl transition-all duration-300 [&_svg]:size-5",
                      isOpen
                        ? "bg-[var(--rd-blue)] text-white"
                        : "bg-[var(--rd-gray)] text-[var(--rd-blue)]"
                    )}
                  >
                    <ServiceIcon name={s.icon} />
                  </span>
                  <span
                    className={cn(
                      "rd-display text-[clamp(1.15rem,2.6vw,1.9rem)] leading-tight transition-all duration-300",
                      isOpen ? "translate-x-1 text-[var(--rd-ink)]" : "text-[var(--rd-ink)]"
                    )}
                    style={{ textTransform: "none" }}
                  >
                    {s.title}
                  </span>
                  <span
                    className={cn(
                      "grid size-10 shrink-0 place-items-center rounded-full border transition-all duration-300 [&_svg]:size-4",
                      isOpen
                        ? "rotate-90 border-[var(--rd-blue)] bg-[var(--rd-blue)] text-white"
                        : "border-[var(--rd-border)] bg-white text-[var(--rd-muted)]"
                    )}
                  >
                    <ArrowRight />
                  </span>
                </button>

                {/* expandable body — smooth grid-rows animation */}
                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-500 [transition-timing-function:cubic-bezier(.22,1,.36,1)]",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pl-0 sm:pl-[calc(2.4rem+1.25rem)]">
                      <Body s={s} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
