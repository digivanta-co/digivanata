"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

const useIsoEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const SKILLS = [
  { label: "SEO & Organic Growth", value: 95 },
  { label: "Paid Ads & Performance", value: 90 },
  { label: "Creativity & Content", value: 88 },
];

const ABOUT_STATS = [
  { value: "1.5K+", label: "Projects" },
  { value: "800+", label: "Clients" },
  { value: "350+", label: "Campaigns" },
  { value: "16+", label: "Years" },
];

/* two-half-circle brand mark used as eyebrow icon & stat divider */
function Mark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <i className="size-2.5 rounded-full bg-[var(--gold)]" />
      <i className="ml-[3px] block h-2.5 w-[5px] rounded-r-full bg-zinc-300" />
    </span>
  );
}

export default function AboutSection() {
  const root = useRef<HTMLElement | null>(null);

  useIsoEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const bars = gsap.utils.toArray<HTMLElement>(".js-bar");
      gsap.set(bars, { width: 0 });

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            gsap.to(bars, {
              width: (i, t: HTMLElement) => `${t.dataset.target}%`,
              duration: 1.2,
              ease: "power3.out",
              stagger: 0.12,
            });
            io.disconnect();
          });
        },
        { threshold: 0.3 }
      );
      io.observe(el);
      return () => io.disconnect();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="about"
      className="relative overflow-hidden py-24 lg:py-32 bg-[#f4f4f6]"
    >
      {/* ambient glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <span className="absolute -top-[80px] left-[8%] size-[360px] rounded-full opacity-50 blur-[90px] bg-[radial-gradient(circle,rgba(200,164,93,0.13),transparent_70%)]" />
        <span className="absolute bottom-0 right-[6%] size-[400px] rounded-full opacity-50 blur-[100px] bg-[radial-gradient(circle,rgba(150,150,160,0.1),transparent_70%)]" />
      </div>

      <div className="container relative z-1">
        {/* heading */}
        <div className="mx-auto mb-14 max-w-[760px] text-center">
          <span className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-2 text-[0.82rem] font-semibold text-zinc-700 backdrop-blur-sm">
            <Mark />
            About Us
          </span>
          <h2 className="m-0 font-[family-name:var(--font-display),var(--font)] text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-zinc-900">
            Empowering Your Success with{" "}
            <span className="text-[#a27702]">
              Digital Expertise
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* ---- Photo collage ---- */}
          <div className="relative mx-auto w-full max-w-[520px]">
            {/* decorative arches */}
            <div aria-hidden className="absolute -top-8 right-4 hidden sm:block">
              <div className="h-14 w-28 rounded-t-full border border-b-0 border-zinc-300" />
              <div className="mt-1.5 h-14 w-28 rounded-t-full border border-b-0 border-[var(--gold)]/45" />
            </div>

            <div className="space-y-5">
              <div className="relative h-[220px] overflow-hidden rounded-[28px] rounded-tl-[64px] border border-zinc-200 sm:h-[248px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                  alt="Digivanta team collaborating on a campaign"
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover grayscale contrast-[1.05]"
                />
              </div>
              <div className="relative h-[220px] overflow-hidden rounded-[28px] rounded-br-[64px] border border-zinc-200 sm:h-[248px]">
                <Image
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=1000"
                  alt="Strategy session with the marketing team"
                  fill
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover grayscale contrast-[1.05]"
                />
              </div>
            </div>

            {/* rotating HIRE US badge */}
            <div className="absolute right-2 top-1/2 z-2 size-[96px] -translate-y-1/2 rounded-full border border-zinc-200 bg-white/90 p-1.5 shadow-md backdrop-blur-md">
              <svg viewBox="0 0 100 100" className="size-full animate-[spin_18s_linear_infinite]" aria-hidden="true">
                <defs>
                  <path id="aboutBadgePath" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text className="fill-zinc-600" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "2px" }}>
                  <textPath href="#aboutBadgePath" startOffset="0">
                    HIRE US • DIGIVANTA • HIRE US • DIGIVANTA •
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 m-auto grid size-10 place-items-center rounded-full bg-zinc-800 text-white [&_svg]:size-[18px] [&_svg]:-rotate-45">
                <ArrowRight />
              </span>
            </div>
          </div>

          {/* ---- Copy + skill bars ---- */}
          <div>
            <p className="mb-9 text-[1.05rem] leading-[1.8] text-zinc-600">
              Digivanta is a professional digital marketing company in Delhi helping
              businesses build strong online visibility, attract quality leads and generate
              consistent growth through result-driven strategies. From startups to
              enterprises, our solutions solve real business problems — not just increase
              clicks.
            </p>

            <div className="mb-10 space-y-6">
              {SKILLS.map((s) => (
                <div key={s.label}>
                  <div className="mb-2.5 flex items-center justify-between">
                    <span className="text-[0.95rem] font-semibold text-zinc-800">{s.label}</span>
                    <span className="text-[0.95rem] font-bold text-[var(--gold)]">{s.value}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
                    <div
                      className="js-bar h-full rounded-full bg-zinc-800"
                      data-target={s.value}
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-7 py-3.5 text-[0.98rem] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-700"
            >
              About Digivanta <ArrowRight />
            </Link>
          </div>
        </div>

        {/* ---- Stats band ---- */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-8 border-t border-zinc-200 pt-12 lg:mt-20">
          {ABOUT_STATS.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="px-6 text-center sm:px-10">
                <strong className="block font-[family-name:var(--font-display),var(--font)] text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold leading-none tracking-[-0.02em] text-zinc-900">
                  {s.value}
                </strong>
                <span className="mt-1.5 block text-[0.82rem] font-medium uppercase tracking-wide text-zinc-500">
                  {s.label}
                </span>
              </div>
              {i < ABOUT_STATS.length - 1 && <Mark className="hidden sm:inline-flex" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
