"use client";

import { MagneticButton } from "@/components/agency/primitives";
import { ArrowRight, Spark } from "@/components/ui/Icons";

export default function WebShowcaseSection() {
  return (
    <section id="web-showcase" className="relative bg-white py-20 lg:py-28 border-t border-[var(--gd-line)]">
      <div className="container relative z-10">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--gd-blue)]">
            <Spark /> High-Performance Preview
          </span>
          <h2 className="gd-display m-0 text-[clamp(2rem,4.5vw,3.2rem)] text-[var(--gd-navy)]">
            Websites Built for Conversion
          </h2>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-[var(--gd-muted)]">
            Every pixel, micro-interaction, and layout flow is engineered to build authority and turn visitors into loyal clients.
          </p>
        </div>

        {/* Browser Mockup */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-[var(--gd-line)] bg-white shadow-[0_20px_60px_rgba(13,18,41,0.08)]">
          {/* Window Header */}
          <div className="flex items-center justify-between border-b border-[var(--gd-line)] bg-[var(--gd-soft)] px-6 py-3.5">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#ff5f57]" />
              <span className="size-3 rounded-full bg-[#febc2e]" />
              <span className="size-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="rounded-md border border-[var(--gd-line)] bg-white px-4 py-1 text-xs font-mono text-[var(--gd-muted)]">
              https://digivanta.com/custom-web-experience
            </div>
            <div className="size-4" />
          </div>

          {/* Window Content */}
          <div className="p-8 lg:p-12 bg-gradient-to-b from-white to-[var(--gd-soft)]">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="gd-eyebrow mb-3">Live Architecture</span>
                <h3 className="gd-display m-0 text-2xl lg:text-3xl text-[var(--gd-ink)]">
                  Fast, Fluid & Mobile-First
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--gd-muted)]">
                  Built with Next.js App Router, Tailwind CSS, and optimized GSAP micro-animations. Enjoy lightning-fast page transitions and optimal Core Web Vitals scores.
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <MagneticButton href="#web-contact">
                    Build Yours <ArrowRight />
                  </MagneticButton>
                </div>
              </div>

              {/* Performance metrics grid inside browser */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-[var(--gd-line)] bg-white p-5 shadow-sm text-center">
                  <div className="gd-display text-3xl text-[var(--gd-navy)]">99</div>
                  <div className="mt-1 text-xs font-medium text-[var(--gd-muted)]">Performance Score</div>
                </div>
                <div className="rounded-xl border border-[var(--gd-line)] bg-white p-5 shadow-sm text-center">
                  <div className="gd-display text-3xl text-[var(--gd-gold)]">0.8s</div>
                  <div className="mt-1 text-xs font-medium text-[var(--gd-muted)]">LCP Speed</div>
                </div>
                <div className="rounded-xl border border-[var(--gd-line)] bg-white p-5 shadow-sm text-center">
                  <div className="gd-display text-3xl text-[var(--gd-blue)]">100%</div>
                  <div className="mt-1 text-xs font-medium text-[var(--gd-muted)]">Mobile Score</div>
                </div>
                <div className="rounded-xl border border-[var(--gd-line)] bg-white p-5 shadow-sm text-center">
                  <div className="gd-display text-3xl text-[var(--gd-navy)]">0.00</div>
                  <div className="mt-1 text-xs font-medium text-[var(--gd-muted)]">CLS Layout Shift</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
