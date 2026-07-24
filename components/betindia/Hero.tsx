"use client";

import { motion } from "framer-motion";
import { Play, ChevronRight, Spade } from "lucide-react";
import { BI_HERO_STATS } from "@/lib/betindia-data";
import { Counter, GhostButton, LiveDot, PlayButton, biRise } from "./primitives";
import { CardBack, Chip, ChipStack, PlayingCard } from "./deck";

/* Deterministic particle field — fixed values so SSR and client agree. */
const PARTICLES = [
  { l: 6, t: 18, s: 3, d: 0 }, { l: 14, t: 68, s: 2, d: 1.2 },
  { l: 22, t: 34, s: 4, d: 2.4 }, { l: 30, t: 82, s: 2, d: 0.6 },
  { l: 38, t: 12, s: 3, d: 3.1 }, { l: 47, t: 55, s: 2, d: 1.8 },
  { l: 55, t: 26, s: 4, d: 0.9 }, { l: 63, t: 74, s: 2, d: 2.7 },
  { l: 71, t: 42, s: 3, d: 1.5 }, { l: 79, t: 16, s: 2, d: 3.6 },
  { l: 86, t: 62, s: 4, d: 0.3 }, { l: 93, t: 30, s: 2, d: 2.1 },
  { l: 10, t: 90, s: 2, d: 4.2 }, { l: 58, t: 88, s: 3, d: 1.1 },
  { l: 90, t: 84, s: 2, d: 3.3 }, { l: 42, t: 38, s: 2, d: 4.8 },
];

function Atmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Volumetric light rays */}
      <div className="bi-ray left-[8%]" style={{ animationDelay: "0s" }} />
      <div className="bi-ray right-[12%]" style={{ animationDelay: "-7s" }} />
      {/* Soft smoke */}
      <div className="bi-smoke left-[-10%] top-[30%] h-[28rem] w-[42rem]" />
      <div
        className="bi-smoke right-[-12%] top-[10%] h-[24rem] w-[38rem]"
        style={{ animationDelay: "-11s" }}
      />
      {/* Gold particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#f0d47a]"
          style={{
            left: `${p.l}%`,
            top: `${p.t}%`,
            width: p.s,
            height: p.s,
            opacity: 0.35,
            boxShadow: "0 0 8px 1px rgba(240,212,122,0.6)",
            animation: `bi-float ${6 + (i % 4)}s ease-in-out ${-p.d}s infinite`,
          }}
        />
      ))}
      {/* Ambient glows */}
      <div className="absolute left-1/2 top-[-20%] h-[36rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,214,130,0.10),transparent_65%)]" />
      <div className="absolute bottom-[-30%] left-[-10%] h-[30rem] w-[40rem] rounded-full bg-[radial-gradient(ellipse,rgba(30,73,118,0.35),transparent_65%)]" />
    </div>
  );
}

/* The centrepiece: an abstract-luxury live table, built entirely in CSS. */
function TableScene() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[560px] select-none sm:h-[520px]">
      {/* Dealer */}
      <motion.div
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-0 z-20 flex -translate-x-1/2 flex-col items-center"
      >
        <div className="relative grid h-24 w-24 place-items-center rounded-full">
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.35),transparent_70%)] blur-md" />
          <span
            className="absolute inset-0 rounded-full border border-[#d4af37]/70"
            style={{ animation: "bi-spin-slow 24s linear infinite" }}
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#f0d47a] shadow-[0_0_10px_2px_rgba(240,212,122,0.8)]" />
          </span>
          <span className="relative grid h-20 w-20 place-items-center rounded-full bg-gradient-to-b from-[#1d3d63] to-[#0b1c34] shadow-[inset_0_2px_6px_rgba(255,255,255,0.15),0_16px_40px_rgba(3,8,16,0.7)]">
            <Spade className="h-7 w-7 text-[#f0d47a]" fill="currentColor" />
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-[#081426]/80 px-4 py-1.5 backdrop-blur-md">
          <LiveDot />
          <span className="text-xs font-semibold tracking-wide text-white">
            Aisha · Live Dealer
          </span>
        </div>
      </motion.div>

      {/* Table glow */}
      <div className="absolute bottom-0 left-1/2 h-40 w-[110%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(255,170,60,0.16),transparent_65%)] blur-xl" />

      {/* Rail + felt */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-4 left-1/2 w-[96%] -translate-x-1/2"
      >
        <div className="rounded-[50%] bg-gradient-to-b from-[#2a2118] via-[#1a140d] to-[#0d0a06] p-3 shadow-[0_50px_100px_rgba(3,8,16,0.8)] sm:p-4">
          <div className="bi-felt relative h-56 w-full rounded-[50%] sm:h-64">
            {/* Felt monogram */}
            <span className="bi-serif absolute left-1/2 top-[58%] -translate-x-1/2 whitespace-nowrap text-[0.65rem] font-medium tracking-[0.5em] text-[#d4af37]/45">
              BETINDIA · TEEN PATTI
            </span>
            {/* Bet spots */}
            <div className="bi-bet-spot absolute left-[16%] top-[52%] h-14 w-14 rounded-full sm:h-16 sm:w-16" />
            <div className="bi-bet-spot absolute right-[16%] top-[52%] h-14 w-14 rounded-full sm:h-16 sm:w-16" />
            <div className="bi-bet-spot absolute left-1/2 top-[24%] h-12 w-12 -translate-x-1/2 rounded-full sm:h-14 sm:w-14" />
            {/* Chips resting on felt */}
            <ChipStack value="5K" variant="gold" count={4} className="absolute left-[19%] top-[56%] sm:left-[20%]" chipClassName="w-10 sm:w-11" />
            <ChipStack value="1K" variant="navy" count={3} className="absolute right-[20%] top-[58%]" chipClassName="w-9 sm:w-10" />
            <Chip value="500" variant="green" className="absolute left-[47%] top-[68%] w-9" />
          </div>
        </div>
      </motion.div>

      {/* Fanned hand floating above the felt */}
      <div className="absolute left-1/2 top-[38%] z-10 -translate-x-1/2 bi-anim-float">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex"
        >
          <PlayingCard card={{ rank: "A", suit: "♠" }} className="w-20 -rotate-12 text-base sm:w-24" style={{ transformOrigin: "bottom center" }} />
          <PlayingCard card={{ rank: "A", suit: "♥" }} className="z-10 -mx-6 w-20 -translate-y-2 text-base sm:w-24" />
          <PlayingCard card={{ rank: "A", suit: "♦" }} className="w-20 rotate-12 text-base sm:w-24" style={{ transformOrigin: "bottom center" }} />
        </motion.div>
      </div>

      {/* Floating props */}
      <Chip value="₹5K" className="absolute left-[2%] top-[30%] w-14 bi-anim-float" style={{ animationDelay: "-2s" }} />
      <Chip value="₹1K" variant="gold" className="absolute right-[4%] top-[18%] w-12 bi-anim-float" style={{ animationDelay: "-4.5s" }} />
      <Chip value="₹100" variant="navy" className="absolute right-[10%] top-[64%] w-10 bi-anim-float" style={{ animationDelay: "-1s" }} />
      <CardBack
        className="absolute left-[6%] top-[6%] w-14 text-sm bi-anim-float"
        style={{ ["--bi-rot" as string]: "-14deg", animationDelay: "-3s" }}
      />
      <CardBack
        className="absolute right-[1%] top-[40%] w-12 text-xs bi-anim-float"
        style={{ ["--bi-rot" as string]: "10deg", animationDelay: "-6s" }}
      />
    </div>
  );
}

export default function BiHero() {
  return (
    <section id="top" className="bi-vignette relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32">
      <Atmosphere />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
          {/* Copy */}
          <motion.div initial="hidden" animate="show" className="max-w-xl">
            <motion.span variants={biRise} custom={0} className="bi-eyebrow">
              <LiveDot className="mr-1" />
              India&apos;s Premium Live Casino · 18+
            </motion.span>

            <motion.h1
              variants={biRise}
              custom={1}
              className="bi-serif mt-8 text-5xl leading-[1.05] font-semibold sm:text-6xl xl:text-7xl"
            >
              Play India&apos;s Favourite{" "}
              <em className="bi-gold-text italic">Teen&nbsp;Patti</em> Live
            </motion.h1>

            <motion.p
              variants={biRise}
              custom={2}
              className="mt-7 max-w-md text-lg leading-relaxed text-[#b7c2d0]"
            >
              Velvet tables. Professional dealers. Real stakes. Step into a
              private casino floor crafted for those who play with intent.
            </motion.p>

            <motion.div variants={biRise} custom={3} className="mt-10 flex flex-wrap items-center gap-4">
              <PlayButton href="#cta">
                <Play className="h-4 w-4" fill="currentColor" />
                Play Now
              </PlayButton>
              <GhostButton href="#journey">
                How To Play
                <ChevronRight className="h-4 w-4" />
              </GhostButton>
            </motion.div>

            <motion.p
              variants={biRise}
              custom={4}
              className="mt-8 text-xs font-medium tracking-[0.18em] text-[#b7c2d0]/60 uppercase"
            >
              Certified RNG &nbsp;·&nbsp; UPI Instant &nbsp;·&nbsp; 24×7 Concierge
            </motion.p>
          </motion.div>

          {/* Scene */}
          <TableScene />
        </div>

        {/* Stat cards */}
        <div className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {BI_HERO_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.9 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bi-glass bi-sweep rounded-2xl px-6 py-5"
            >
              <div className="flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-[#b7c2d0]/80 uppercase">
                {s.live ? <LiveDot /> : null}
                {s.label}
              </div>
              <div className="bi-serif mt-2 text-2xl font-semibold text-white sm:text-3xl">
                {s.display ? (
                  <span className="bi-gold-text">{s.display}</span>
                ) : (
                  <Counter
                    value={s.value}
                    prefix={s.prefix ?? ""}
                    suffix={s.suffix ?? ""}
                    decimals={s.decimals ?? 0}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
