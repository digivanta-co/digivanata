"use client";

import { Check } from "lucide-react";
import { Section, Eyebrow, Heading, Lead, Button, Card, Stagger, Reveal, IconTile } from "@/components/app-dev/primitives";
import { AppIcon } from "@/components/app-dev/AppIcon";
import { APP_AI, APP_ENTERPRISE, APP_PRICING, APP_DEDICATED } from "@/lib/app-data";

/* ---- AI-powered applications ---- */
export function AISection() {
  return (
    <Section id="ai" light>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Smarter Apps</Eyebrow>
          <Heading lines={APP_AI.titleLines} gradient={[0]} className="mx-auto text-[clamp(1.9rem,4vw,2.9rem)]" />
          <Lead className="mx-auto mt-5 text-center">{APP_AI.intro}</Lead>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {APP_AI.features.map((f) => (
            <Card key={f.title}>
              <div className="flex items-center gap-4">
                <IconTile>
                  <AppIcon name={f.icon} />
                </IconTile>
                <h3 className="text-lg font-semibold text-[#0F172A]">{f.title}</h3>
              </div>
            </Card>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

/* ---- Enterprise (split layout + illustration) ---- */
export function EnterpriseSection() {
  return (
    <Section id="enterprise">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Enterprise</Eyebrow>
            <Heading lines={APP_ENTERPRISE.titleLines} gradient={[1]} className="text-[clamp(1.9rem,4vw,2.8rem)]" />
            <Lead className="mt-5">{APP_ENTERPRISE.intro}</Lead>
            <Stagger className="mt-7 grid gap-3 sm:grid-cols-2" selector=".ent-point">
              {APP_ENTERPRISE.points.map((p) => (
                <div key={p} className="ent-point flex items-center gap-2.5 text-[0.94rem] font-medium text-[#0F172A]">
                  <span className="grid size-6 shrink-0 place-items-center rounded-md bg-[#286FAB] text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  {p}
                </div>
              ))}
            </Stagger>
          </div>

          {/* dashboard illustration */}
          <Reveal variant="scale" delay={0.1}>
            <div className="rounded-3xl border border-[#E5E7EB] bg-white p-4 shadow-[0_30px_60px_rgba(40,111,171,0.12)]">
              <div className="mb-3 flex items-center gap-1.5 px-1">
                <span className="size-2.5 rounded-full bg-[#E5E7EB]" />
                <span className="size-2.5 rounded-full bg-[#E5E7EB]" />
                <span className="size-2.5 rounded-full bg-[#E5E7EB]" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="rounded-xl bg-[#F8FAFC] p-3">
                    <div className="h-2 w-8 rounded-full bg-[#0F172A]/10" />
                    <div className="mt-2 h-4 w-12 rounded bg-[linear-gradient(90deg,#286FAB,#286FAB)]" />
                  </div>
                ))}
              </div>
              <div className="mt-3 rounded-xl border border-[#E5E7EB] p-4">
                <div className="mb-3 h-2 w-24 rounded-full bg-[#0F172A]/10" />
                <div className="flex h-28 items-end gap-2">
                  {["h-12", "h-20", "h-16", "h-24", "h-14", "h-28", "h-[72px]", "h-16"].map((h, i) => (
                    <div key={i} className={`w-full rounded-t bg-[linear-gradient(180deg,#286FAB,#286FAB)] ${h}`} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* ---- Pricing / affordable development ---- */
export function PricingSection() {
  return (
    <Section id="pricing" light>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Pricing Approach</Eyebrow>
          <Heading lines={APP_PRICING.titleLines} gradient={[1]} className="mx-auto text-[clamp(1.9rem,4vw,2.8rem)]" />
          <Lead className="mx-auto mt-5 text-center">{APP_PRICING.intro}</Lead>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {APP_PRICING.plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.featured
                  ? "relative rounded-3xl border-2 border-[#286FAB] bg-white p-7 shadow-[0_30px_60px_rgba(40,111,171,0.18)] lg:-translate-y-3"
                  : "relative rounded-3xl border border-[#E5E7EB] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_rgba(40,111,171,0.12)]"
              }
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(120deg,#286FAB,#286FAB)] px-4 py-1 text-[0.66rem] font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-[#0F172A]">{plan.name}</h3>
              <p className="mt-2 text-[0.92rem] leading-relaxed text-[#64748B]">{plan.desc}</p>
              <ul className="mt-6 grid gap-3">
                {plan.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2.5 text-[0.9rem] text-[#0F172A]">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-[#286FAB]/10 text-[#286FAB]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant={plan.featured ? "primary" : "ghost"} className="w-full justify-center">
                  Get Estimate
                </Button>
              </div>
            </div>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

/* ---- Hire dedicated developers ---- */
export function DedicatedDeveloperSection() {
  return (
    <Section id="dedicated">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Long-Term Partner</Eyebrow>
          <Heading lines={APP_DEDICATED.titleLines} gradient={[1]} className="mx-auto text-[clamp(1.9rem,4vw,2.8rem)]" />
          <Lead className="mx-auto mt-5 text-center">{APP_DEDICATED.intro}</Lead>
        </div>

        <Stagger className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {APP_DEDICATED.supports.map((s) => (
            <div
              key={s}
              className="group flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#286FAB]/50 hover:shadow-[0_18px_40px_rgba(40,111,171,0.12)]"
            >
              <span className="size-2 shrink-0 rounded-full bg-[linear-gradient(120deg,#286FAB,#286FAB)]" />
              <span className="text-[0.92rem] font-medium text-[#0F172A]">{s}</span>
            </div>
          ))}
        </Stagger>

        <div className="mt-10 flex justify-center">
          <Button href="/contact" variant="primary">Hire Dedicated Developers</Button>
        </div>
      </div>
    </Section>
  );
}
