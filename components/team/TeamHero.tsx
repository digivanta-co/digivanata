"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { TEAM_LEADERS, TEAM_GROUPS } from "@/lib/team-data";

const ALL_MEMBERS = [
  ...TEAM_GROUPS.flatMap((g) => g.members),
  ...TEAM_LEADERS.map((l) => ({
    name: l.name,
    role: l.role,
    badge: l.specialty,
    photo: l.photo,
  })),
];

export default function TeamHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (ALL_MEMBERS.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ALL_MEMBERS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const member = ALL_MEMBERS[index] || ALL_MEMBERS[0];
  const photo = member?.photo || "/team/team-member-1.png";
  const name = member?.name || "Our Team";
  const role = member?.role || member?.role || "Digital Specialist";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[var(--gd-soft,#f6f7fb)] to-white pt-[7.5rem] pb-[4rem] lg:pt-[9rem] lg:pb-[5.5rem]">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] right-[6%] size-[40vh] rounded-full bg-[radial-gradient(circle,rgba(200,164,93,0.15),transparent_65%)] blur-2xl" />
        <div className="absolute top-[20%] left-[4%] size-[34vh] rounded-full bg-[radial-gradient(circle,rgba(40,111,171,0.12),transparent_65%)] blur-2xl" />
      </div>

      <div className="container relative z-[2]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--gd-gold)]/40 bg-[var(--gd-gold-soft,rgba(176,141,63,0.12))] px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[var(--gd-gold,#b08d3f)]">
            Our Strength
          </span>
          <h1 className="relative inline-block font-[family-name:var(--font-display),var(--font)] text-[clamp(2.6rem,7vw,5rem)] font-[800] uppercase leading-[1.05] tracking-[-0.04em] text-[var(--gd-ink,#0d1229)]">
            Meet The{" "}
            <span className="relative whitespace-nowrap">
              <span className="gd-grad">
                Team
              </span>
              <svg
                aria-hidden
                viewBox="0 0 220 18"
                className="absolute -bottom-2 left-0 w-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M4 12 C 60 4, 160 4, 216 11"
                  fill="none"
                  stroke="var(--gd-gold,#b08d3f)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-[clamp(1.05rem,2vw,1.35rem)] leading-[1.6] text-[var(--gd-muted,#5b6478)]">
            Passionate minds. Creative thinkers. Digital experts driving{" "}
            <span className="font-semibold text-[var(--gd-navy,#0C243D)]">real growth.</span>
          </p>
        </Reveal>

        {/* Floating Avatars (left) — Continuously rotates through team members */}
        <div aria-hidden className="absolute left-[3%] top-[34%] hidden xl:block z-10">
          {/* solid white instead of 95% + blur — the blur was invisible
              behind an almost-opaque fill but still cost a repaint */}
          <div className="relative overflow-hidden rounded-full border border-[var(--gd-line)] bg-white shadow-[0_20px_40px_rgba(12,36,61,0.12)] min-w-[260px] h-20 flex items-center p-1.5">
            <AnimatePresence mode="wait">
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="flex items-center gap-3.5 h-full w-full"
              >
                <div className="relative h-full aspect-square shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
                  <Image
                    src={photo}
                    alt={name}
                    width={160}
                    height={160}
                    className="size-full object-cover object-top"
                  />
                </div>
                <div className="pr-4 py-1">
                  <p className="text-sm font-bold text-[var(--gd-ink,#0d1229)] leading-tight">{name}</p>
                  <p className="text-xs font-semibold text-[var(--gd-gold,#b08d3f)] leading-tight mt-1">{role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Script Accent (right) */}
        <div aria-hidden className="absolute right-[5%] top-[40%] hidden text-center xl:block">
          <p className="font-[family-name:var(--font-script),cursive] text-[2.4rem] leading-[0.95] text-[var(--gd-navy,#0C243D)]">
            Together
            <br />
            We Grow
          </p>
          <svg viewBox="0 0 140 12" className="mx-auto mt-1 w-32" preserveAspectRatio="none">
            <path d="M2 8 C 40 2, 100 2, 138 7" fill="none" stroke="var(--gd-gold,#b08d3f)" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
