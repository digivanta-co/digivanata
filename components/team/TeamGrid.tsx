import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { PenTool, Megaphone, Code, Sparkles, type LucideIcon } from "lucide-react";
import { TEAM_GROUPS } from "@/lib/team-data";

const GROUP_ICONS: Record<string, LucideIcon> = {
  design: PenTool,
  marketing: Megaphone,
  code: Code,
};

export default function TeamGrid() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[var(--gd-soft,#f6f7fb)] to-white py-5">
      <div className="container">
        {/* Section Header */}
        <Reveal className="mx-auto mb-8 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gd-blue,#286FAB)]/30 bg-[rgba(40,111,171,0.08)] px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[var(--gd-blue,#286FAB)]">
            <Sparkles size={14} className="text-[var(--gd-blue,#286FAB)]" />
            The Growth Crew
          </span>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(2rem,4.5vw,3.2rem)] font-[800] uppercase tracking-[-0.03em] text-[var(--gd-ink,#0d1229)]">
            The Minds Behind <span className="gd-grad">Your Success</span>
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--gd-muted,#5b6478)]">
            Specialists in search, creative branding, performance marketing, and software engineering.
          </p>
        </Reveal>

        {/* Grouped Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {TEAM_GROUPS.map((group, gi) => {
            const Icon = GROUP_ICONS[group.icon] ?? PenTool;
            return (
              <Reveal as="div" key={group.title} delay={((gi % 3) + 1) as 1 | 2 | 3}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[var(--gd-line,rgba(13,18,41,0.1))] bg-white/90 p-5 shadow-[0_12px_35px_rgba(13,18,41,0.05)] backdrop-blur-md transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--gd-blue)]/35 hover:shadow-[0_20px_50px_rgba(13,18,41,0.1)]">
                  {/* Category Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-[var(--gd-line,rgba(13,18,41,0.1))] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-2xl bg-[rgba(40,111,171,0.08)] text-[var(--gd-blue,#286FAB)]">
                        <Icon size={19} strokeWidth={2.2} />
                      </span>
                      <div>
                        <h3 className="font-[family-name:var(--font-display),var(--font)] text-lg font-bold uppercase tracking-wide text-[var(--gd-ink,#0d1229)]">
                          {group.title}
                        </h3>
                        <span className="text-[0.72rem] font-semibold text-[var(--gd-muted,#5b6478)]">
                          {group.members.length} {group.members.length === 1 ? "Specialist" : "Specialists"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Members */}
                  <div className="grid gap-4">
                    {group.members.map((m) => (
                      <article
                        key={m.name}
                        className="group/card relative flex min-h-[170px] items-stretch overflow-hidden rounded-[18px] border border-[var(--gd-line,rgba(13,18,41,0.08))] bg-white transition-all duration-300 hover:border-[var(--gd-blue,#286FAB)]/40 hover:shadow-md"
                      >
                        {/* Member Photo Frame */}
                        <div className="relative w-[42%] min-w-[118px] shrink-0 self-stretch overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(40,111,171,0.15),rgba(246,247,251,0.9))]">
                          <div className="relative h-full min-h-[200px] w-full overflow-hidden">
                            <Image
                              src={m.photo}
                              alt={`${m.name} — ${m.role}`}
                              fill
                              sizes="(max-width: 1024px) 180px, 160px"
                              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                            />
                          </div>
                        </div>

                        {/* Member Details */}
                        <div className="min-w-0 flex flex-1 flex-col justify-center px-4 py-5">
                          <span className="inline-block rounded-md bg-[var(--gd-soft,#f6f7fb)] px-2 py-0.5 text-[0.66rem] font-bold uppercase tracking-wider text-[var(--gd-blue,#286FAB)]">
                            {m.badge}
                          </span>
                          <h4 className="mt-1 truncate text-[1rem] font-bold text-[var(--gd-ink,#0d1229)]">
                            {m.name}
                          </h4>
                          <p className="text-[0.78rem] font-medium text-[var(--gd-muted,#5b6478)]">
                            {m.role}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
