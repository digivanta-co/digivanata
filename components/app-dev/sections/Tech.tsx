"use client";

import { Section, Eyebrow, Heading, Lead, Card, Stagger, IconTile } from "@/components/app-dev/primitives";
import { AppIcon } from "@/components/app-dev/AppIcon";
import { APP_TECH, APP_PLATFORMS } from "@/lib/app-data";

/* ---- Technologies we use ---- */
export function TechnologySection() {
  return (
    <Section id="technology">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Our Stack</Eyebrow>
          <Heading lines={["Technologies we use"]} gradient={[0]} className="mx-auto text-[clamp(1.9rem,4vw,2.9rem)]" />
          <Lead className="mx-auto mt-5 text-center">
            Modern, scalable technologies chosen around your app goals, performance needs and future growth.
          </Lead>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" scale={0.8}>
          {APP_TECH.map((g) => (
            <Card key={g.group}>
              <IconTile>
                <AppIcon name={g.icon} />
              </IconTile>
              <h3 className="text-lg font-semibold text-[#0F172A]">{g.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] px-2.5 py-1 text-[0.78rem] font-medium text-[#0F172A]">
                    {it}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

/* ---- Platforms we build for ---- */
export function PlatformSection() {
  return (
    <Section id="platforms" light>
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Platforms</Eyebrow>
          <Heading lines={["Android, iOS &", "cross-platform"]} gradient={[1]} className="mx-auto text-[clamp(1.9rem,4vw,2.9rem)]" />
          <Lead className="mx-auto mt-5 text-center">
            Reach every customer with native quality on Android and iOS, or a single cross-platform codebase.
          </Lead>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" scale={0.8}>
          {APP_PLATFORMS.map((p) => (
            <Card key={p.name} className="text-center">
              <span className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#286FAB,#286FAB)] text-white transition-transform duration-300 group-hover:scale-110">
                <AppIcon name={p.icon} size={26} />
              </span>
              <h3 className="text-lg font-semibold text-[#0F172A]">{p.name}</h3>
              <p className="mt-1.5 text-[0.9rem] leading-relaxed text-[#64748B]">{p.desc}</p>
            </Card>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
