"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { PlayButton, Reveal } from "./primitives";
import { CardBack, Chip, PlayingCard } from "./deck";

export default function BiFinalCta() {
  return (
    <section id="cta" className="bi-vignette relative overflow-hidden py-36 md:py-52">
      {/* Golden spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-[-35%] h-[42rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,200,100,0.14),transparent_60%)]" />
      <div className="bi-ray left-1/2 -translate-x-1/2" />

      {/* Floating props */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Chip value="₹5K" variant="gold" className="absolute left-[8%] top-[18%] w-16 bi-anim-float opacity-80" />
        <Chip value="₹1K" className="absolute right-[10%] top-[24%] w-12 bi-anim-float opacity-80" style={{ animationDelay: "-3s" }} />
        <Chip value="₹500" variant="green" className="absolute left-[18%] bottom-[16%] w-10 bi-anim-float opacity-70" style={{ animationDelay: "-5s" }} />
        <CardBack className="absolute right-[16%] bottom-[14%] w-14 text-sm bi-anim-float opacity-90" style={{ ["--bi-rot" as string]: "12deg", animationDelay: "-2s" }} />
        <div className="absolute left-[4%] bottom-[38%] hidden bi-anim-float md:block" style={{ animationDelay: "-4s" }}>
          <PlayingCard card={{ rank: "A", suit: "♠" }} className="w-16 -rotate-12 text-sm opacity-90" />
        </div>
        <div className="absolute right-[4%] top-[52%] hidden bi-anim-float md:block" style={{ animationDelay: "-6s" }}>
          <PlayingCard card={{ rank: "K", suit: "♥" }} className="w-14 rotate-12 text-sm opacity-90" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <span className="bi-eyebrow">The Seat Is Yours</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="bi-serif mt-8 text-5xl leading-[1.05] font-semibold sm:text-6xl md:text-7xl">
            Ready To Join{" "}
            <em className="bi-gold-text italic">The Table?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-[#b7c2d0]">
            Your welcome bonus is on the felt. Take a seat, play your first
            blind, and see why India&apos;s sharpest players call this home.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <motion.div
            className="mt-12 inline-block"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <PlayButton href="#top" className="px-12 py-5 text-lg">
              <Play className="h-5 w-5" fill="currentColor" />
              Play Now — Claim ₹500 Bonus
            </PlayButton>
          </motion.div>
          <p className="mt-6 text-xs font-medium tracking-[0.2em] text-[#b7c2d0]/50 uppercase">
            18+ · T&amp;Cs apply · Play responsibly
          </p>
        </Reveal>
      </div>
    </section>
  );
}
