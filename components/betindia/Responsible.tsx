"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Timer, HandCoins, PhoneCall } from "lucide-react";
import { Reveal, Section, BI_EASE } from "./primitives";

const TOOLS = [
  { icon: HandCoins, label: "Deposit Limits", desc: "Cap what you can add, daily or monthly." },
  { icon: Timer, label: "Session Reminders", desc: "Gentle nudges when time runs long." },
  { icon: ShieldAlert, label: "Self-Exclusion", desc: "Step away for a week, a month, or for good." },
  { icon: PhoneCall, label: "Support Line", desc: "Confidential help, any hour, in your language." },
];

export default function BiResponsible() {
  return (
    <Section id="responsible" className="bg-[#050d1a] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="bi-eyebrow">Play With Grace</span>
          <h2 className="bi-serif mt-6 text-4xl leading-tight font-semibold md:text-5xl">
            The Best Players Know{" "}
            <em className="bi-gold-text italic">When To Rise</em> From The Table
          </h2>
          <p className="mt-6 text-base leading-relaxed text-[#b7c2d0]">
            BetIndia is entertainment for adults — never a source of income.
            We build the tools that keep the game a pleasure, and we ask every
            player to use them.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {TOOLS.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: BI_EASE }}
            className="rounded-2xl border border-white/8 bg-white/[0.025] p-6 text-center"
          >
            <t.icon className="mx-auto h-5 w-5 text-[#b7c2d0]" />
            <p className="mt-3 text-sm font-semibold text-white">{t.label}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-[#b7c2d0]/70">{t.desc}</p>
          </motion.div>
        ))}
      </div>

      <Reveal className="mt-12 text-center" delay={0.2}>
        <p className="text-xs font-medium tracking-[0.2em] text-[#b7c2d0]/50 uppercase">
          18+ only · Play responsibly · If it stops being fun, stop
        </p>
      </Reveal>
    </Section>
  );
}
