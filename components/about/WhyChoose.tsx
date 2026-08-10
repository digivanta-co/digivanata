"use client";

import { motion } from "framer-motion";
import {
  Star, Rocket, ThumbsUp, TrendingUp,
  Sparkles, Search, Code2, Users, MessageSquare, Layers, Handshake,
  type LucideIcon,
} from "lucide-react";
import CountUp from "@/components/about/CountUp";
import { ABOUT_STATS, ABOUT_WHY } from "@/lib/about-data";

const STAT_ICONS: Record<string, LucideIcon> = { Star, Rocket, ThumbsUp, TrendingUp };
const WHY_ICONS: Record<string, LucideIcon> = {
  Sparkles, Search, Code2, TrendingUp, Users, MessageSquare, Layers, Handshake,
};

const gradText: React.CSSProperties = {
  backgroundImage: "linear-gradient(100deg,#235EA7,#4f93d4)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

export default function WhyChoose() {
  return (
    <section
      className="relative overflow-hidden py-5"
      style={{ backgroundImage: "linear-gradient(180deg,#ffffff 0%,#eef4fb 55%,#e7f0fa 100%)" }}
    >
      <div aria-hidden className="pointer-events-none absolute right-[-10%] top-[-6%] size-[480px] rounded-full bg-[#235EA7]/10 blur-[64px]" />
      <div aria-hidden className="pointer-events-none absolute left-[-8%] bottom-[-10%] size-[420px] rounded-full bg-[#235EA7]/10 blur-[64px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-[700px] text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#235EA7]/20 bg-white/95 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#235EA7]">
            <span className="size-1.5 rounded-full bg-[#235EA7]" /> Why Digivanta
          </span>
          <h2 className="mt-5 font-[family-name:var(--font-display),var(--font)] text-[clamp(2.2rem,5vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[#0C243D]">
            Why brands <span style={gradText}>choose us</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[640px] text-[1.05rem] leading-relaxed text-slate-500">
            We don&apos;t just deliver services — we build measurable, long-term growth partnerships.
          </p>
        </motion.div>

        {/* Trust stats */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {ABOUT_STATS.map((s, i) => {
            const Icon = STAT_ICONS[s.icon] ?? Star;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={
                  "group relative overflow-hidden rounded-[24px] border p-7 shadow-[0_2px_10px_rgba(15,23,42,0.04),0_20px_44px_-28px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-2 " +
                  (s.wide ? "lg:col-span-2 " : "") +
                  "border-[#235EA7]/15 bg-white/95 hover:shadow-[0_30px_60px_-28px_rgba(35,94,167,0.5)]"
                }
              >
                <span
                  className="mb-4 inline-grid size-12 place-items-center rounded-xl text-white shadow-lg shadow-[#235EA7]/30 bg-[linear-gradient(135deg,#235EA7,#4f93d4)] transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon size={26} strokeWidth={2} />
                </span>
                {s.stars ? (
                  <div className="flex gap-1 text-[#235EA7]">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} size={22} className="fill-current" />
                    ))}
                  </div>
                ) : (
                  <div className="font-[family-name:var(--font-display),var(--font)] text-[2.6rem] font-extrabold leading-none text-[#0C243D]">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                )}
                <div className="mt-2 text-[0.98rem] font-bold text-[#0C243D]">{s.label}</div>
                <div className="mt-1 text-[0.84rem] text-slate-500">{s.desc}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Reasons */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ABOUT_WHY.map((w, i) => {
            const Icon = WHY_ICONS[w.icon] ?? Sparkles;
            return (
              <motion.article
                key={w.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[24px] border border-slate-200/70 bg-white/95 p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_16px_40px_-26px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-2 hover:border-[#235EA7]/25 hover:shadow-[0_28px_60px_-26px_rgba(35,94,167,0.45)]"
              >
                <span className="mb-4 inline-grid size-12 place-items-center rounded-xl bg-[linear-gradient(135deg,#235EA7,#4f93d4)] text-white shadow-lg shadow-[#235EA7]/25 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Icon size={26} strokeWidth={2} />
                </span>
                <h3 className="text-[1.02rem] font-bold leading-snug text-[#0C243D]">{w.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-slate-500">{w.desc}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement (original copy preserved) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-14 max-w-[700px] text-center text-[1.05rem] leading-relaxed text-slate-600"
        >
          At Digivanta, we don&apos;t just provide services, we help businesses build a stronger
          digital future through{" "}
          <strong className="font-semibold text-[#235EA7]">strategy, creativity, and technology</strong>.
          And this journey is only getting started.
        </motion.p>
      </div>
    </section>
  );
}
