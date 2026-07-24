"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SocialButtons from "@/components/team/SocialButtons";
import { PenTool, Megaphone, Code, Sparkles, type LucideIcon } from "lucide-react";
import { TEAM_GROUPS } from "@/lib/team-data";

const GROUP_ICONS: Record<string, LucideIcon> = {
  design: PenTool,
  marketing: Megaphone,
  code: Code,
};

const CATEGORIES = [
  { id: "all", label: "All Team Members" },
  { id: "marketing", label: "Digital Marketing" },
  { id: "design", label: "Creative & Design" },
  { id: "code", label: "Web Development" },
];

export default function TeamGrid() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredGroups = TEAM_GROUPS.filter(
    (g) => activeTab === "all" || g.category === activeTab
  );

  return (
    <section className="relative bg-gradient-to-b from-white via-[var(--gd-soft,#f6f7fb)] to-white py-20 lg:py-28">
      <div className="container">
        {/* Section Header */}
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gd-gold)]/30 bg-[var(--gd-gold-soft,rgba(176,141,63,0.12))] px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[var(--gd-gold,#b08d3f)]">
            <Sparkles size={14} className="text-[var(--gd-gold,#b08d3f)]" />
            The Growth Crew
          </span>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(2rem,4.5vw,3.2rem)] font-[800] uppercase tracking-[-0.03em] text-[var(--gd-ink,#0d1229)]">
            The Minds Behind <span className="gd-grad">Your Success</span>
          </h2>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-[var(--gd-muted,#5b6478)]">
            Specialists in search, creative branding, performance marketing, and software engineering.
          </p>
        </Reveal>

        {/* Filter Tabs */}
        <Reveal className="mb-14 flex flex-wrap items-center justify-center gap-2.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--gd-navy,#0C243D)] text-white shadow-md shadow-[var(--gd-navy)]/20 scale-105"
                    : "border border-[var(--gd-line,rgba(13,18,41,0.1))] bg-white text-[var(--gd-muted,#5b6478)] hover:border-[var(--gd-gold,#b08d3f)] hover:text-[var(--gd-ink,#0d1229)]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </Reveal>

        {/* Grouped Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {filteredGroups.map((group, gi) => {
            const Icon = GROUP_ICONS[group.icon] ?? PenTool;
            return (
              <Reveal as="div" key={group.title} delay={((gi % 3) + 1) as 1 | 2 | 3}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[var(--gd-line,rgba(13,18,41,0.1))] bg-white/90 p-6 shadow-[0_10px_30px_rgba(13,18,41,0.04)] backdrop-blur-md transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--gd-gold)]/40 hover:shadow-[0_20px_50px_rgba(13,18,41,0.1)]">
                  {/* Category Header */}
                  <div className="mb-6 flex items-center justify-between border-b border-[var(--gd-line,rgba(13,18,41,0.1))] pb-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-2xl bg-[var(--gd-gold-soft,rgba(176,141,63,0.12))] text-[var(--gd-gold,#b08d3f)]">
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
                      <div
                        key={m.name}
                        className="group/card relative flex items-center gap-4 rounded-2xl border border-[var(--gd-line,rgba(13,18,41,0.08))] bg-white p-3.5 transition-all duration-300 hover:border-[var(--gd-blue,#286FAB)]/40 hover:shadow-md"
                      >
                        {/* Member Photo Frame */}
                        <div className="relative size-20 shrink-0 overflow-hidden rounded-xl bg-[radial-gradient(ellipse_at_top,rgba(40,111,171,0.15),rgba(246,247,251,0.9))] p-1 border border-[var(--gd-line)]">
                          <div className="relative size-full overflow-hidden rounded-lg">
                            <Image
                              src={m.photo}
                              alt={`${m.name} — ${m.role}`}
                              fill
                              sizes="80px"
                              className="object-cover object-top transition-transform duration-500 group-hover/card:scale-110"
                            />
                          </div>
                        </div>

                        {/* Member Details */}
                        <div className="min-w-0 flex-1">
                          <span className="inline-block rounded-md bg-[var(--gd-soft,#f6f7fb)] px-2 py-0.5 text-[0.66rem] font-bold uppercase tracking-wider text-[var(--gd-gold,#b08d3f)]">
                            {m.badge}
                          </span>
                          <h4 className="mt-1 truncate text-[1rem] font-bold text-[var(--gd-ink,#0d1229)]">
                            {m.name}
                          </h4>
                          <p className="text-[0.78rem] font-medium text-[var(--gd-muted,#5b6478)]">
                            {m.role}
                          </p>

                          <div className="mt-2.5">
                            <SocialButtons socials={m.socials} variant="outline" />
                          </div>
                        </div>
                      </div>
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
