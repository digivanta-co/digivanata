"use client";

import { Section, Eyebrow, Heading, Lead, Reveal } from "@/components/app-dev/primitives";
import { AppIcon } from "@/components/app-dev/AppIcon";
import { APP_INDUSTRIES } from "@/lib/app-data";

export function IndustrySection() {
  return (
    <Section id="industries">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Industries</Eyebrow>
          <Heading lines={["Industry-specific", "app solutions"]} gradient={[1]} className="mx-auto text-[clamp(1.9rem,4vw,2.9rem)]" />
          <Lead className="mx-auto mt-5 text-center">
            Different industries need different functionality. Our solutions are built around real-world business use cases.
          </Lead>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APP_INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} variant={i % 2 === 0 ? "left" : "right"} delay={(i % 3) * 0.06}>
              <article className="group h-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white transition-all duration-300 hover:-translate-y-2 hover:border-[#286FAB]/50 hover:shadow-[0_26px_54px_rgba(40,111,171,0.16)]">
                {/* image placeholder with hover zoom */}
                <div className="relative h-44 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${ind.grad} transition-transform duration-500 group-hover:scale-110`} />
                  <div className="absolute inset-0 [background-image:radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:18px_18px] opacity-40" />
                  <div className="absolute inset-0 grid place-items-center text-white/90 transition-transform duration-500 group-hover:scale-110">
                    <AppIcon name={ind.icon} size={48} strokeWidth={1.4} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A]">{ind.name}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-[#64748B]">{ind.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
