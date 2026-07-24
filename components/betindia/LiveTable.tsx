"use client";

import { motion } from "framer-motion";
import { Signal, Volume2, Maximize2, Eye } from "lucide-react";
import { Section, SectionHeading, LiveDot, BI_EASE } from "./primitives";
import { CardBack, Chip, PlayingCard } from "./deck";
import type { BiCard } from "@/lib/betindia-data";

const SEATED = [
  { name: "Rohan M.", stake: "₹12,400", status: "Seen", tone: "text-[#f0d47a]" },
  { name: "Priya K.", stake: "₹8,200", status: "Blind", tone: "text-[#00c16a]" },
  { name: "You", stake: "₹25,000", status: "Seen", tone: "text-[#f0d47a]" },
  { name: "Aman S.", stake: "₹5,750", status: "Packed", tone: "text-[#b7c2d0]/60" },
];

const WINNERS = [
  { name: "Kabir T.", amount: "₹1,84,000", hand: "Pure Sequence" },
  { name: "Neha R.", amount: "₹92,500", hand: "Trail" },
  { name: "Vikram D.", amount: "₹47,200", hand: "Pair" },
];

const YOUR_HAND: BiCard[] = [
  { rank: "K", suit: "♠" },
  { rank: "K", suit: "♥" },
  { rank: "9", suit: "♦" },
];

/* A dealt card that flips face-up as it scrolls into view. */
function DealtCard({ card, i }: { card: BiCard; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -60, rotateY: 180 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.5 + i * 0.22, ease: BI_EASE }}
      style={{ transformStyle: "preserve-3d", perspective: 800 }}
    >
      <PlayingCard card={card} className="w-14 text-xs sm:w-16 sm:text-sm" />
    </motion.div>
  );
}

export default function BiLiveTable() {
  return (
    <Section id="live-table" className="pt-10 md:pt-16">
      <SectionHeading
        eyebrow="Live From The Studio Floor"
        title="Take Your Seat At The"
        accent="Royale Table"
        sub="A real dealer, a real deck and seats that never go cold. This is what your table looks like — every night, in cinematic HD."
      />

      <motion.div
        initial={{ opacity: 0, y: 64 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.1, ease: BI_EASE }}
        className="bi-border-gold overflow-hidden rounded-[2rem] shadow-[0_50px_120px_rgba(3,8,16,0.7)]"
      >
        {/* Console top bar */}
        <div className="flex items-center justify-between border-b border-white/8 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 rounded-full bg-[#c23b3b]/15 px-3 py-1 text-[0.68rem] font-bold tracking-[0.14em] text-[#ff6b6b] uppercase">
              <LiveDot /> Live
            </span>
            <span className="bi-serif hidden text-sm font-medium text-white sm:block">
              Royale · Table 07
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#b7c2d0]">
            <span className="hidden items-center gap-1.5 text-xs sm:flex">
              <Eye className="h-3.5 w-3.5" /> 12,418 watching
            </span>
            <span className="rounded-md border border-[#d4af37]/40 px-2 py-0.5 text-[0.65rem] font-bold tracking-wider text-[#f0d47a]">
              HD 1080p
            </span>
            <Signal className="h-4 w-4 text-[#00c16a]" />
            <Volume2 className="hidden h-4 w-4 sm:block" />
            <Maximize2 className="hidden h-4 w-4 sm:block" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_310px]">
          {/* Felt viewport */}
          <div className="relative p-4 sm:p-8">
            <div className="bi-felt bi-vignette relative h-[430px] overflow-hidden rounded-[1.5rem] sm:h-[470px]">
              {/* Overhead spotlight */}
              <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[70%] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(255,214,130,0.16),transparent_65%)] blur-lg" />

              {/* Dealer strip */}
              <div className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-[#081426]/70 px-5 py-2 backdrop-blur-md">
                <span className="grid h-8 w-8 place-items-center rounded-full border border-[#d4af37]/60 bg-gradient-to-b from-[#1d3d63] to-[#0b1c34] text-xs font-bold text-[#f0d47a]">
                  A
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-semibold text-white">Aisha</p>
                  <p className="text-[0.65rem] text-[#b7c2d0]/70">Dealing since 19:00 IST</p>
                </div>
              </div>

              {/* Opponents' face-down hands */}
              <div className="absolute left-[10%] top-[26%] flex gap-1 sm:left-[14%]">
                {[0, 1, 2].map((i) => (
                  <CardBack key={i} className="w-9 text-[0.55rem] sm:w-11" style={{ transform: `rotate(${(i - 1) * 8}deg)` }} />
                ))}
              </div>
              <div className="absolute right-[10%] top-[26%] flex gap-1 sm:right-[14%]">
                {[0, 1, 2].map((i) => (
                  <CardBack key={i} className="w-9 text-[0.55rem] sm:w-11" style={{ transform: `rotate(${(i - 1) * 8}deg)` }} />
                ))}
              </div>

              {/* Pot */}
              <div className="absolute left-1/2 top-[40%] -translate-x-1/2 text-center">
                <div className="mb-2 flex justify-center -space-x-3">
                  <Chip value="5K" variant="gold" className="w-10" />
                  <Chip value="1K" variant="navy" className="w-10" />
                  <Chip value="500" variant="green" className="w-10" />
                </div>
                <p className="text-[0.65rem] font-semibold tracking-[0.3em] text-[#d4af37]/70 uppercase">Pot</p>
                <p className="bi-serif text-2xl font-semibold text-white sm:text-3xl">₹42,600</p>
              </div>

              {/* Your dealt hand */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="flex justify-center gap-2 [perspective:800px]">
                  {YOUR_HAND.map((c, i) => (
                    <DealtCard key={`${c.rank}${c.suit}`} card={c} i={i} />
                  ))}
                </div>
                <p className="mt-3 text-center text-[0.65rem] font-semibold tracking-[0.3em] text-[#b7c2d0]/70 uppercase">
                  Your Hand · Pair of Kings
                </p>
              </div>
            </div>

            {/* Action HUD */}
            <div className="bi-glass mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl px-5 py-4 sm:px-7">
              <div>
                <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-[#b7c2d0]/70 uppercase">Balance</p>
                <p className="bi-serif text-lg font-semibold text-white">₹25,000</p>
              </div>
              <div className="hidden items-center gap-2 md:flex">
                {["100", "500", "1K", "5K"].map((v, i) => (
                  <Chip
                    key={v}
                    value={`₹${v}`}
                    variant={(["navy", "green", "orange", "gold"] as const)[i]}
                    className="w-11 cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <button className="bi-btn rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-[#b7c2d0] hover:border-white/30 hover:text-white">
                  Pack
                </button>
                <button className="bi-btn rounded-full border border-[#00c16a]/40 bg-[#00c16a]/10 px-5 py-2.5 text-sm font-semibold text-[#00c16a] hover:bg-[#00c16a]/20">
                  Blind ₹400
                </button>
                <button className="bi-btn bi-btn-primary px-6 py-2.5 text-sm">
                  Chaal ₹800
                </button>
              </div>
            </div>
          </div>

          {/* Side panel */}
          <aside className="border-t border-white/8 bg-[#0b1a2e]/60 lg:border-t-0 lg:border-l">
            <div className="px-6 py-6">
              <h3 className="text-[0.68rem] font-bold tracking-[0.24em] text-[#b7c2d0]/70 uppercase">
                Seated Players
              </h3>
              <ul className="mt-4 space-y-3">
                {SEATED.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.03] px-4 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-b from-[#1d3d63] to-[#0b1c34] text-xs font-bold text-[#f0d47a]">
                        {p.name.charAt(0)}
                      </span>
                      <div className="leading-tight">
                        <p className="text-sm font-semibold text-white">{p.name}</p>
                        <p className="text-[0.68rem] text-[#b7c2d0]/60">{p.stake}</p>
                      </div>
                    </div>
                    <span className={`text-[0.65rem] font-bold tracking-[0.12em] uppercase ${p.tone}`}>
                      {p.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/8 px-6 py-6">
              <h3 className="text-[0.68rem] font-bold tracking-[0.24em] text-[#b7c2d0]/70 uppercase">
                Recent Winners
              </h3>
              <ul className="mt-4 space-y-4">
                {WINNERS.map((w) => (
                  <li key={w.name} className="flex items-center justify-between">
                    <div className="leading-tight">
                      <p className="text-sm font-semibold text-white">{w.name}</p>
                      <p className="text-[0.68rem] text-[#b7c2d0]/60">{w.hand}</p>
                    </div>
                    <span className="text-sm font-bold text-[#00c16a]">{w.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </motion.div>
    </Section>
  );
}
