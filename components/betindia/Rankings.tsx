"use client";

import { motion } from "framer-motion";
import { BI_RANKINGS } from "@/lib/betindia-data";
import { Section, SectionHeading, BI_EASE } from "./primitives";
import { PlayingCard } from "./deck";

export default function BiRankings() {
  return (
    <Section id="rankings" className="bg-[#050d1a]">
      {/* Section seams */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-[30rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(212,175,55,0.07),transparent_65%)]" />

      <SectionHeading
        eyebrow="Know Your Weapons"
        title="The Six Hands Of"
        accent="Teen Patti"
        sub="From the untouchable Trail to the fearless High Card — ranked from strongest to weakest, with the odds of being dealt each one."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BI_RANKINGS.map((r, i) => (
          <motion.article
            key={r.name}
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: (i % 3) * 0.12, ease: BI_EASE }}
            className="bi-border-gold bi-sweep group rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(212,175,55,0.14)]"
          >
            {/* Card fan — spreads on hover */}
            <div className="relative mx-auto flex h-28 w-40 items-end justify-center">
              {r.cards.map((c, j) => (
                <PlayingCard
                  key={`${c.rank}${c.suit}${j}`}
                  card={c}
                  className="bi-fan-card absolute bottom-0 w-16 text-sm"
                  style={{
                    ["--r" as string]: `${(j - 1) * 7}deg`,
                    ["--x" as string]: `${(j - 1) * 14}px`,
                    zIndex: j,
                  }}
                />
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-3">
              <span className="bi-serif text-lg font-semibold text-[#d4af37]/60">
                {String(r.tier).padStart(2, "0")}
              </span>
              <h3 className="bi-serif text-2xl font-semibold text-white">{r.name}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#b7c2d0]">{r.desc}</p>
            <p className="mt-5 inline-block rounded-full border border-[#d4af37]/25 bg-[#d4af37]/8 px-4 py-1.5 text-[0.68rem] font-bold tracking-[0.18em] text-[#f0d47a] uppercase">
              Dealt {r.odds} of hands
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
