"use client";

import { Check } from "@/components/ui/Icons";
import { WEB_COMPARE } from "@/lib/web-data";

export default function WebWhyChooseSection() {
  return (
    <section id="web-why" className="relative bg-[var(--gd-soft)] py-8 sm:py-12 lg:py-16 border-t border-[var(--gd-line)]">
      <div className="container relative z-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gd-gold)]">
            <span className="size-1.5 rounded-full bg-[var(--gd-gold)]" />
            The Digivanta Standard
          </span>
          <h2 className="gd-display m-0 text-[clamp(2rem,4.5vw,3.2rem)] text-[var(--gd-navy)]">
            Why Businesses Choose Digivanta
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
            A clear comparison of traditional agency web templates versus custom, performance-first web development.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Traditional Agencies */}
          <div className="rounded-3xl border border-[var(--gd-line)] bg-white p-8 lg:p-10 shadow-sm">
            <div className="mb-6 flex items-center justify-between border-b border-[var(--gd-line)] pb-4">
              <h3 className="gd-display text-lg text-[var(--gd-muted)]">Typical Agency Approach</h3>
              <span className="text-xs uppercase tracking-wider text-red-500 font-semibold">Standard</span>
            </div>
            <ul className="space-y-4 m-0 p-0 list-none">
              {WEB_COMPARE.others.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--gd-muted)]">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-red-50 text-red-500 text-xs">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Digivanta Light Luxury */}
          <div className="relative overflow-hidden rounded-3xl border border-[var(--gd-blue)] bg-[var(--gd-navy)] p-8 text-white shadow-xl lg:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[var(--gd-blue)]/20 blur-3xl"
            />
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="gd-display text-lg text-[var(--gd-gold)]">Digivanta Custom Build</h3>
              <span className="rounded-full bg-[var(--gd-gold-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--gd-gold)]">
                Light Luxury Standard
              </span>
            </div>
            <ul className="space-y-4 m-0 p-0 list-none relative z-10">
              {WEB_COMPARE.ours.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-[var(--gd-gold-soft)] text-[var(--gd-gold)] [&_svg]:size-2.5">
                    <Check />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
