"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { gsap, reduced } from "@/animations/gsap";
import { Section, Eyebrow, Heading, Lead, Stagger } from "@/components/app-dev/primitives";
import { APP_PROCESS, APP_SUPPORT } from "@/lib/app-data";

/* ---- Development process timeline with a line that draws on scroll ---- */
export function DevelopmentProcessTimeline() {
  const wrap = useRef<HTMLDivElement>(null);
  const line = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrap.current || reduced()) return;
    const ctx = gsap.context(() => {
      gsap.to(line.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: wrap.current, start: "top 70%", end: "bottom 85%", scrub: true },
      });
      gsap.from(".step-row", {
        opacity: 0,
        x: -28,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: wrap.current, start: "top 75%", once: true },
      });
    }, wrap);
    return () => ctx.revert();
  }, []);

  return (
    <Section id="process">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>How We Work</Eyebrow>
          <Heading lines={["Our app development", "process"]} gradient={[1]} className="mx-auto text-[clamp(1.9rem,4vw,2.9rem)]" />
          <Lead className="mx-auto mt-5 text-center">
            A structured, transparent process for smooth execution, faster delivery and high-quality results.
          </Lead>
        </div>

        <div ref={wrap} className="relative mx-auto mt-14 max-w-3xl">
          {/* track + animated line */}
          <div className="absolute bottom-3 left-[27px] top-3 w-0.5 bg-[#E5E7EB]" />
          <div ref={line} className="absolute bottom-3 left-[27px] top-3 w-0.5 origin-top scale-y-0 bg-[linear-gradient(180deg,#286FAB,#286FAB)]" />

          <div className="space-y-7">
            {APP_PROCESS.map((s) => (
              <div key={s.step} className="step-row relative flex gap-6">
                <span className="relative z-[1] grid size-14 shrink-0 place-items-center rounded-2xl bg-[linear-gradient(135deg,#286FAB,#286FAB)] font-bold text-white shadow-[0_10px_24px_rgba(40,111,171,0.3)]">
                  {s.step}
                </span>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold text-[#0F172A]">{s.title}</h3>
                  <p className="mt-1.5 text-[0.94rem] leading-relaxed text-[#64748B]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---- End-to-end support (glassmorphism cards) ---- */
export function SupportSection() {
  return (
    <Section id="support" className="bg-[linear-gradient(180deg,#F8FAFC,#eaf1fb)]">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Beyond Launch</Eyebrow>
          <Heading lines={["End-to-end app support"]} gradient={[0]} className="mx-auto text-[clamp(1.9rem,4vw,2.7rem)]" />
          <Lead className="mx-auto mt-5 text-center">
            Our work doesn&apos;t end at launch. We keep your app secure, updated and ready to scale.
          </Lead>
        </div>

        <Stagger className="mt-12 grid grid-cols-1 gap-3.5 sm:grid-cols-2" scale={0.95}>
          {APP_SUPPORT.map((s) => (
            <div
              key={s}
              className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/65 px-5 py-4 shadow-[0_10px_30px_rgba(40,111,171,0.06)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90"
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[linear-gradient(135deg,#286FAB,#286FAB)] text-white">
                <Check size={15} strokeWidth={3} />
              </span>
              <span className="text-[0.94rem] font-medium text-[#0F172A]">{s}</span>
            </div>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
