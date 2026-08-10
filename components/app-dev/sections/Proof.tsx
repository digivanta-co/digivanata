"use client";

import { useEffect, useRef, useState } from "react";
import { Plus } from "lucide-react";
import { gsap, reduced } from "@/animations/gsap";
import { Section, Eyebrow, Heading, Reveal } from "@/components/app-dev/primitives";
import { useCounter, useStagger } from "@/hooks/animations";
import { APP_STATS, APP_GLANCE, APP_FAQS } from "@/lib/app-data";

/* ---- Stat counter for the dark band ---- */
function DarkStat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const ref = useCounter<HTMLSpanElement>(value, { suffix });
  return (
    <div className="text-center">
      <div className="bg-[linear-gradient(120deg,#286FAB,#5a97cc)] bg-clip-text text-[clamp(2.6rem,6vw,4rem)] font-bold tracking-tight text-transparent">
        <span ref={ref}>0{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-slate-300">{label}</p>
    </div>
  );
}

export function StatisticsSection() {
  const glanceRef = useStagger<HTMLDivElement>({ selector: ".glance-item", scale: 0.96 });
  return (
    <section id="statistics" className="relative overflow-hidden bg-[#0F172A] py-10 lg:py-8 sm:py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(40,111,171,0.55),transparent_60%)]" />
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
      </div>

      <div className="container relative z-[1]">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#286FAB]">Digivanta at a Glance</p>
          <h2 className="text-[clamp(1.8rem,4vw,2.6rem)] font-bold tracking-tight text-white">Trusted experience, real results</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {APP_STATS.map((s) => (
            <DarkStat key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>

        <div ref={glanceRef} className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {APP_GLANCE.map((g) => (
            <span key={g} className="glance-item rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-[0.84rem] font-medium text-slate-200">
              {g}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---- FAQ accordion with smooth GSAP open animation ---- */
function FaqRow({ q, a, defaultOpen }: { q: string; a: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = panel.current;
    if (!el) return;
    if (reduced()) {
      el.style.height = open ? "auto" : "0px";
      el.style.opacity = open ? "1" : "0";
      return;
    }
    gsap.to(el, {
      height: open ? "auto" : 0,
      opacity: open ? 1 : 0,
      duration: 0.45,
      ease: "power2.out",
    });
  }, [open]);

  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[1.02rem] font-semibold text-[#0F172A]">{q}</span>
        <span
          className={`grid size-8 shrink-0 place-items-center rounded-full border border-[#E5E7EB] text-[#286FAB] transition-all duration-300 ${open ? "rotate-45 bg-[#286FAB] text-white" : ""}`}
        >
          <Plus size={16} strokeWidth={2.5} />
        </span>
      </button>
      <div ref={panel} className="h-0 overflow-hidden opacity-0">
        <p className="pb-6 pr-12 text-[0.96rem] leading-[1.75] text-[#64748B]">{a}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <Section id="faq" light>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>FAQ</Eyebrow>
          <Heading lines={["Frequently asked", "questions"]} gradient={[1]} className="mx-auto text-[clamp(1.9rem,4vw,2.8rem)]" />
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#E5E7EB] bg-white px-6 shadow-[0_24px_50px_rgba(15,23,42,0.05)] sm:px-9">
          {APP_FAQS.map((f, i) => (
            <FaqRow key={f.question} q={f.question} a={f.answer} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </Section>
  );
}
