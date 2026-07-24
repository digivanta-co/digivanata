"use client";

import { Check } from "lucide-react";
import { Section, Eyebrow, Heading, Lead, Button, Card, Stagger, IconTile } from "@/components/app-dev/primitives";
import { AppIcon } from "@/components/app-dev/AppIcon";
import { useReveal } from "@/hooks/animations";
import { APP_PROBLEM, APP_CUSTOM, APP_WHY_CHOOSE } from "@/lib/app-data";

/* ---- Why businesses need apps (2-column with checklist) ---- */
export function ProblemSection() {
  const cardRef = useReveal<HTMLDivElement>({ variant: "right", delay: 0.1 });
  return (
    <Section id="problem">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>The Opportunity</Eyebrow>
            <Heading lines={APP_PROBLEM.titleLines} gradient={[1]} className="text-[clamp(1.9rem,4vw,2.8rem)]" />
            <Lead className="mt-5">{APP_PROBLEM.intro}</Lead>
            <div className="mt-8">
              <Button href="#pricing" variant="primary">{APP_PROBLEM.cta}</Button>
            </div>
          </div>

          <div ref={cardRef}>
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-7 shadow-[0_24px_50px_rgba(15,23,42,0.06)]">
              <p className="mb-5 text-sm font-semibold uppercase tracking-wide text-[#64748B]">A great app helps you</p>
              <Stagger className="grid gap-3.5" selector=".sol-item">
                {APP_PROBLEM.solutions.map((s) => (
                  <div key={s} className="sol-item flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] px-4 py-3">
                    <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-[#286FAB] text-white">
                      <Check size={15} strokeWidth={3} />
                    </span>
                    <span className="text-[0.94rem] font-medium text-[#0F172A]">{s}</span>
                  </div>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ---- Custom development + why choose Digivanta ---- */
export function WhyChooseAppSection() {
  return (
    <Section id="why-choose" light>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Why Digivanta</Eyebrow>
          <Heading lines={APP_CUSTOM.titleLines} gradient={[1]} className="mx-auto text-[clamp(1.9rem,4vw,2.9rem)]" />
          <Lead className="mx-auto mt-5 text-center">{APP_CUSTOM.intro}</Lead>
        </div>

        {/* custom focus chips */}
        <Stagger className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5" selector=".focus-chip">
          {APP_CUSTOM.focus.map((f) => (
            <span key={f} className="focus-chip inline-flex items-center gap-2 rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-[0.82rem] font-medium text-[#0F172A]">
              <span className="size-1.5 rounded-full bg-[#286FAB]" />
              {f}
            </span>
          ))}
        </Stagger>

        {/* reasons grid */}
        <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APP_WHY_CHOOSE.map((r) => (
            <Card key={r.title}>
              <IconTile>
                <AppIcon name={r.icon} />
              </IconTile>
              <h3 className="text-lg font-semibold text-[#0F172A]">{r.title}</h3>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[#64748B]">{r.desc}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
