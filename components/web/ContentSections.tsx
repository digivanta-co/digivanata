"use client";

import { Check, Spark } from "@/components/ui/Icons";
import { MagneticButton } from "@/components/agency/primitives";
import { WEB_AUTHOR, WEB_PROBLEMS, WEB_REGIONS, WEB_WHY } from "@/lib/web-data";

export function IntroSection() {
  return (
    <section className="relative bg-white py-8 sm:py-12 lg:py-16 border-t border-[var(--gd-line)]">
      <div className="container relative z-10">
        <div className="grid gap-5 lg:grid-cols-[1fr_1.1fr] items-center">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gd-blue)]">
              <Spark /> Business Communication Strategy
            </span>
            <h2 className="gd-display m-0 text-[clamp(1.8rem,3.8vw,2.8rem)] text-[var(--gd-navy)]">
              A Website Isn&apos;t Just Design — It&apos;s Business Communication
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
              Many businesses invest in websites that look visually attractive initially but fail to generate leads, inquiries, or revenue. A modern web application must guide visitors, address key concerns, build authority, and drive user action naturally.
            </p>
          </div>

          <div>
            <h3 className="gd-display mb-4 text-sm text-[var(--gd-navy)] uppercase tracking-wider">
              Common Website Pitfalls We Solve
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {WEB_PROBLEMS.map((prob) => (
                <div
                  key={prob}
                  className="flex items-start gap-2.5 rounded-xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4 text-xs font-medium text-[var(--gd-ink)]"
                >
                  <span className="mt-0.5 grid size-4 shrink-0 place-items-center rounded-full bg-[var(--gd-gold-soft)] text-[var(--gd-gold)] [&_svg]:size-2.5">
                    <Check />
                  </span>
                  <span>{prob}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebCtaBand({
  heading,
  desc,
  ctaText,
  id,
}: {
  heading: string;
  desc: string;
  ctaText: string;
  id: string;
}) {
  return (
    <section id={id} className="relative bg-[var(--gd-navy)] py-8 sm:py-10 text-white overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-[var(--gd-blue)]/15 blur-3xl"
      />
      <div className="container relative z-10 flex flex-col items-center text-center">
        <h2 className="gd-display m-0 max-w-2xl text-[clamp(1.8rem,4vw,2.8rem)] text-white">
          {heading}
        </h2>
        <p className="mt-4 max-w-xl text-[1.02rem] leading-relaxed text-white/80">
          {desc}
        </p>
        <div className="mt-8">
          <MagneticButton href="/contact" className="ag-btn--gold">
            {ctaText}
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}

export function RegionsSection() {
  return (
    <section className="relative bg-[var(--gd-soft)] py-8 sm:py-10 border-t border-[var(--gd-line)]">
      <div className="container text-center">
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[var(--gd-blue)]">
          Serving Delhi NCR & Global Clients
        </span>
        <div className="mt-4 flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {WEB_REGIONS.map((region) => (
            <span
              key={region}
              className="rounded-full border border-[var(--gd-line)] bg-white px-5 py-2 text-xs font-medium text-[var(--gd-ink)] shadow-sm"
            >
              {region}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WebWhyGridSection() {
  return (
    <section className="relative bg-white py-8 sm:py-12 border-t border-[var(--gd-line)]">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gd-gold)]">
            <span className="size-1.5 rounded-full bg-[var(--gd-gold)]" />
            Core Development Principles
          </span>
          <h2 className="gd-display m-0 text-2xl lg:text-3xl text-[var(--gd-navy)]">
            Slow Websites Quietly Kill Conversions
          </h2>
          <p className="mt-3 text-sm italic text-[var(--gd-muted)]">
            &ldquo;53% of mobile users leave a website if it takes longer than 3 seconds to load.&rdquo;
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {WEB_WHY.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-4 text-xs font-semibold text-[var(--gd-navy)]"
            >
              <span className="size-2 rounded-full bg-[var(--gd-gold)] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AuthorSection() {
  return (
    <section id="web-author" className="relative bg-[var(--gd-soft)] py-8 sm:py-12 border-t border-[var(--gd-line)]">
      <div className="container max-w-3xl">
        <div className="rounded-2xl border border-[var(--gd-line)] bg-white p-8 lg:p-10 shadow-sm">
          <span className="text-xs font-bold uppercase tracking-[0.15em] text-[var(--gd-blue)]">
            Author & Expert Reviewer · Updated: {WEB_AUTHOR.lastUpdated}
          </span>
          <p className="mt-4 text-sm leading-relaxed text-[var(--gd-muted)]">
            {WEB_AUTHOR.text}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-[var(--gd-line)]">
            {WEB_AUTHOR.expertise.map((exp) => (
              <span
                key={exp}
                className="rounded-full border border-[var(--gd-line)] bg-[var(--gd-soft)] px-3 py-1 text-[0.75rem] font-medium text-[var(--gd-ink)]"
              >
                {exp}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
