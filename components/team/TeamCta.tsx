import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Users, ArrowRight } from "lucide-react";

export default function TeamCta() {
  return (
    <section className="relative bg-white pb-24 pt-4">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] bg-[var(--gd-navy,#0C243D)] px-6 py-12 text-white shadow-[0_24px_60px_rgba(12,36,61,0.22)] sm:px-10 lg:px-14">
            <span aria-hidden className="absolute inset-x-0 top-0 h-[4px] bg-[linear-gradient(90deg,var(--gd-blue,#286FAB),var(--gd-gold,#b08d3f))]" />
            {/* Subtle glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_50%_-20%,rgba(40,111,171,0.35),transparent_55%)]"
            />

            <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
              {/* Orbital Graphic */}
              <div className="relative mx-auto size-36 shrink-0">
                <svg viewBox="0 0 200 200" className="absolute inset-0 size-full" aria-hidden>
                  <ellipse cx="100" cy="100" rx="92" ry="58" fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" transform="rotate(-22 100 100)" />
                  <ellipse cx="100" cy="100" rx="66" ry="94" fill="none" stroke="rgba(176,141,63,0.4)" strokeWidth="1.5" transform="rotate(28 100 100)" />
                  <circle cx="186" cy="78" r="5" fill="#b08d3f" />
                  <circle cx="22" cy="120" r="4" fill="#286FAB" />
                </svg>
                <span className="absolute left-1/2 top-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-2xl bg-white/10 text-white backdrop-blur-md">
                  <Users size={34} strokeWidth={2} />
                </span>
              </div>

              {/* Quote */}
              <div className="text-center lg:text-left">
                <p className="text-[1.25rem] font-semibold leading-snug text-white sm:text-[1.4rem]">
                  Great things in business are never done by one person.
                </p>
                <p className="mt-1 font-[family-name:var(--font-script),cursive] text-[2.2rem] leading-none text-[var(--gd-gold,#b08d3f)]">
                  They&apos;re done by a team.
                </p>
              </div>

              {/* CTA */}
              <div className="text-center lg:text-right">
                <p className="mb-4 text-[1.05rem] font-semibold text-white/80">
                  Let&apos;s build something amazing together!
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,var(--gd-navy),var(--gd-blue))] px-7 py-3.5 text-[0.95rem] font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-[2px] hover:shadow-xl"
                >
                  Work With Us
                  <ArrowRight size={17} strokeWidth={2.2} />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
