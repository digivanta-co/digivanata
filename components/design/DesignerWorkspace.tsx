"use client";

import { useEffect, useLayoutEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { gsap, reduced } from "@/animations/gsap";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* palette */
const NAVY = "#0F2747";
const GOLD = "#D4AF37";
const INK = "#1B2A44";
const LINE = "#E4E8F0";

/* layered, navy-tinted shadows — the single biggest "premium vs flat" lever */
const SH = {
  card: "0 1px 2px rgba(15,39,71,0.06), 0 8px 18px -8px rgba(15,39,71,0.18), 0 28px 48px -26px rgba(15,39,71,0.34)",
  device: "0 2px 6px rgba(15,39,71,0.08), 0 18px 34px -14px rgba(15,39,71,0.34), 0 46px 74px -40px rgba(15,39,71,0.42)",
};
/* light-from-top-left edge treatment for light surfaces */
const EDGE = "inset 0 1px 0 rgba(255,255,255,0.9), inset 0 -1px 2px rgba(15,39,71,0.05)";

/* soft contact shadow that grounds an object */
function Contact({ w = "84%", className = "" }: { w?: string; className?: string }) {
  return (
    <div
      aria-hidden
      className={"pointer-events-none absolute left-1/2 -translate-x-1/2 rounded-[50%] " + className}
      style={{ width: w, height: 18, bottom: -10, background: "radial-gradient(closest-side, rgba(15,39,71,0.30), transparent)", filter: "blur(7px)" }}
    />
  );
}

/* ------------------------------------------------------------------ *
 * Object shell — outer (mouse parallax via data-depth) wraps an inner
 * (idle float via data-float) so the two GSAP transforms never fight.
 * ------------------------------------------------------------------ */
function Obj({
  depth = 1,
  z = 1,
  className = "",
  style,
  children,
}: {
  depth?: number;
  z?: number;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <div data-obj data-depth={depth} className={"absolute " + className} style={{ zIndex: z, ...style }}>
      <div data-float className="[transform-style:preserve-3d] [will-change:transform]">
        {children}
      </div>
    </div>
  );
}

/* ============================ Objects ============================ */

function Macbook() {
  return (
    <div className="relative">
      <Contact w="78%" className="!bottom-[-14px]" />
      {/* lid / screen — brushed-aluminum frame */}
      <div
        className="relative rounded-[15px] p-[7px]"
        style={{
          background: "linear-gradient(150deg,#f4f6fa 0%,#d7dde8 42%,#b9c2d2 100%)",
          boxShadow: SH.device + ", " + EDGE,
        }}
      >
        <div className="relative overflow-hidden rounded-[10px]" style={{ background: "#05101f", padding: 4 }}>
          <div className="relative overflow-hidden rounded-[7px]" style={{ background: "linear-gradient(160deg,#123054,#0a1d38)", aspectRatio: "16/10" }}>
            {/* figma top bar */}
            <div className="flex items-center gap-1.5 px-2.5 py-2" style={{ background: "linear-gradient(#0c2039,#0a1a30)" }}>
              <span className="size-1.5 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="size-1.5 rounded-full" style={{ background: "#febc2e" }} />
              <span className="size-1.5 rounded-full" style={{ background: "#28c840" }} />
              <span className="ml-2 text-[7px] font-semibold tracking-wide text-white/55">Brand-System.fig</span>
            </div>
            <div className="grid" style={{ gridTemplateColumns: "24% 1fr 22%", height: "calc(100% - 26px)" }}>
              <div className="space-y-1.5 border-r border-white/5 p-2">
                {[70, 50, 62, 40, 55].map((w, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="size-1 rounded-sm" style={{ background: i === 1 ? GOLD : "rgba(255,255,255,0.28)" }} />
                    <span className="h-1 rounded-full" style={{ width: `${w}%`, background: "rgba(255,255,255,0.16)" }} />
                  </div>
                ))}
              </div>
              <div className="relative grid place-items-center">
                <span data-glow className="absolute size-24 rounded-full" style={{ background: `radial-gradient(circle, ${GOLD}4d, transparent 68%)`, opacity: 0.6 }} />
                <div className="relative grid place-items-center">
                  <svg viewBox="0 0 80 80" className="w-16 drop-shadow-[0_2px_6px_rgba(212,175,55,0.35)]">
                    <circle cx="40" cy="40" r="30" fill="none" stroke={GOLD} strokeWidth="4" />
                    <path d="M31 26 h12 a14 14 0 0 1 0 28 h-12 z" fill="none" stroke="#fff" strokeWidth="4" strokeLinejoin="round" />
                  </svg>
                  <div className="mt-2 h-1.5 w-16 rounded-full bg-white/75" />
                  <div className="mt-1 h-1 w-10 rounded-full bg-white/30" />
                </div>
                <span className="absolute size-[70%] rounded-md border border-dashed" style={{ borderColor: `${GOLD}99` }} />
              </div>
              <div className="space-y-1.5 border-l border-white/5 p-2">
                <div className="flex gap-1">
                  <span className="size-2.5 rounded-sm" style={{ background: NAVY }} />
                  <span className="size-2.5 rounded-sm" style={{ background: GOLD }} />
                  <span className="size-2.5 rounded-sm bg-white/85" />
                </div>
                {[60, 44, 52].map((w, i) => (
                  <div key={i} className="h-1 rounded-full" style={{ width: `${w}%`, background: "rgba(255,255,255,0.14)" }} />
                ))}
              </div>
            </div>
            {/* glass glare + vignette */}
            <span className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(118deg,rgba(255,255,255,0.16) 0%,rgba(255,255,255,0) 34%)" }} />
            <span className="pointer-events-none absolute inset-0" style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.28)" }} />
          </div>
        </div>
      </div>
      {/* deck wedge (open-laptop base) */}
      <div className="relative mx-auto -mt-px h-3 w-[108%] -translate-x-[4%] rounded-b-[12px]" style={{ background: "linear-gradient(#dbe1ea,#aeb9ca)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.7)" }}>
        <span className="absolute left-1/2 top-0 h-1 w-14 -translate-x-1/2 rounded-b-md" style={{ background: "linear-gradient(#9aa6bb,#c3ccda)" }} />
      </div>
      <div className="mx-auto h-1 w-[116%] -translate-x-[8%] rounded-b-full" style={{ background: "#93a0b7" }} />
    </div>
  );
}

function IPad() {
  return (
    <div className="relative">
      <Contact w="70%" />
      <div className="relative rounded-[17px] p-[5px]" style={{ background: "linear-gradient(150deg,#eef1f6,#c7cfdc)", boxShadow: SH.device }}>
        <div className="relative overflow-hidden rounded-[12px]" style={{ background: "#0b1220", padding: 3 }}>
          <div className="relative overflow-hidden rounded-[9px] bg-white" style={{ aspectRatio: "3/4", width: 118 }}>
            <div className="flex items-center justify-between px-2 py-1.5">
              <span className="text-[7px] font-bold" style={{ color: NAVY }}>Logo Sketch</span>
              <span className="size-2 rounded-full" style={{ border: `1.5px solid ${GOLD}` }} />
            </div>
            <div className="grid place-items-center px-3 pb-3 pt-1">
              <svg viewBox="0 0 120 120" className="w-full">
                <path d="M20 80 C 20 30, 100 30, 100 80" fill="none" stroke={NAVY} strokeWidth="2.5" />
                <path d="M20 80 C 40 105, 80 105, 100 80" fill="none" stroke={NAVY} strokeWidth="2.5" strokeDasharray="3 4" />
                {[[20, 80], [100, 80], [60, 34]].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke={GOLD} strokeWidth="2" />
                ))}
                <line x1="60" y1="34" x2="60" y2="10" stroke={GOLD} strokeWidth="1" />
                <rect x="55" y="4" width="10" height="8" rx="1.5" fill={GOLD} />
              </svg>
            </div>
            {/* glass sheen */}
            <span className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(120deg,rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 30%)" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PenTablet() {
  return (
    <div className="relative" style={{ width: 150 }}>
      <Contact w="80%" />
      <div className="relative rounded-[15px] p-2" style={{ background: "linear-gradient(155deg,#39465c,#151e2d)", boxShadow: SH.device + ", " + EDGE }}>
        <div className="absolute left-1.5 top-1/2 flex -translate-y-1/2 flex-col gap-1.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2.5 w-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.10)", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.12)" }} />
          ))}
        </div>
        <div className="ml-4 rounded-[10px]" style={{ background: "radial-gradient(120% 120% at 30% 20%, #16233a, #0b1422)", aspectRatio: "16/11", boxShadow: "inset 0 0 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
          <div className="grid h-full place-items-center">
            <span className="size-6 rounded-full border border-dashed" style={{ borderColor: `${GOLD}66` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Pencil() {
  return (
    <div data-roll className="[will-change:transform]">
      <div className="relative h-2.5 w-[132px] rounded-full" style={{ background: "linear-gradient(180deg,#ffffff 0%,#eef1f6 40%,#d3dae4 100%)", boxShadow: "0 8px 16px -8px rgba(15,39,71,0.55), inset 0 1px 0 rgba(255,255,255,0.9)" }}>
        <span className="absolute -right-1 top-0 h-2.5 w-3 rounded-r-full" style={{ background: "linear-gradient(#e6ebf2,#b4bece)" }} />
        <span className="absolute right-2 top-0 h-2.5 w-1.5" style={{ background: `linear-gradient(${GOLD},#b9932c)` }} />
        <span className="absolute left-3 top-1/2 h-px w-16 -translate-y-1/2 bg-black/5" />
      </div>
    </div>
  );
}

function Mug() {
  return (
    <div data-spin className="relative [will-change:transform]" style={{ transformOrigin: "50% 100%" }}>
      <Contact w="70%" className="!bottom-[-8px]" />
      <svg viewBox="0 0 40 40" className="absolute -top-7 left-1/2 w-8 -translate-x-1/2 opacity-35">
        <path d="M14 38 C 8 28, 20 24, 14 12" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
        <path d="M26 38 C 20 28, 32 24, 26 12" fill="none" stroke={NAVY} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="relative">
        {/* handle behind */}
        <span className="absolute -right-2.5 top-3 size-6 rounded-full border-[3px]" style={{ borderColor: "#eef1f6", boxShadow: "2px 3px 8px -4px rgba(15,39,71,0.45)" }} />
        {/* ceramic body with roundness gradient */}
        <div className="relative size-14 overflow-hidden rounded-[11px_11px_16px_16px]" style={{ background: "linear-gradient(100deg,#ffffff 0%,#f0f3f8 45%,#d9dfe9 100%)", boxShadow: SH.card + ", " + EDGE }}>
          {/* coffee surface */}
          <span className="absolute left-1/2 top-1.5 h-3 w-9 -translate-x-1/2 rounded-full" style={{ background: "radial-gradient(closest-side,#5a3a22,#2f1d10)" }} />
          {/* rim highlight */}
          <span className="absolute left-1/2 top-[3px] h-2.5 w-10 -translate-x-1/2 rounded-full border-t-2 border-white/70" />
          {/* gold band */}
          <span className="absolute bottom-2 left-0 right-0 mx-auto h-1.5 w-full" style={{ background: `linear-gradient(${GOLD},#b9932c)`, opacity: 0.9 }} />
          {/* soft body highlight */}
          <span className="absolute left-1.5 top-3 h-8 w-2 rounded-full bg-white/50 blur-[1px]" />
        </div>
      </div>
    </div>
  );
}

function ColorCards() {
  const cards = [
    { c: NAVY, h: "0F2747" },
    { c: "#286FAB", h: "286FAB" },
    { c: GOLD, h: "D4AF37" },
    { c: "#EDEFF4", h: "EDEFF4", dark: true },
  ];
  return (
    <div data-tiltcard className="relative [will-change:transform]" style={{ width: 92, height: 74, transformOrigin: "0% 100%" }}>
      {cards.map((k, i) => (
        <div
          key={i}
          className="absolute overflow-hidden rounded-md bg-white p-1"
          style={{ width: 46, left: i * 15, top: i * -8, zIndex: i, boxShadow: SH.card, transform: `rotate(${-8 + i * 4}deg)` }}
        >
          <span className="relative block h-10 w-full overflow-hidden rounded-sm" style={{ background: k.c, border: k.dark ? `1px solid ${LINE}` : "none" }}>
            {/* gloss */}
            <span className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(255,255,255,0.35),rgba(255,255,255,0) 45%)" }} />
          </span>
          <span className="mt-1 block text-center text-[5.5px] font-bold tracking-wide" style={{ color: INK }}>
            #{k.h}
          </span>
        </div>
      ))}
    </div>
  );
}

function StickyNote({ text, rot }: { text: string; rot: number }) {
  return (
    <div data-flutter className="[will-change:transform]" style={{ transformOrigin: "50% 0%" }}>
      <div
        className="relative grid size-16 place-content-center rounded-[3px] p-2"
        style={{ background: "linear-gradient(150deg,#FDECAE 0%,#F8D96E 60%,#F2CE55 100%)", boxShadow: "0 12px 24px -14px rgba(15,39,71,0.5)", transform: `rotate(${rot}deg)` }}
      >
        <span className="text-[8px] font-semibold leading-tight" style={{ color: "#6b551d" }}>{text}</span>
        {/* peeled-corner lift shadow */}
        <span className="absolute bottom-0 left-0 h-4 w-full rounded-b-[3px]" style={{ background: "linear-gradient(rgba(0,0,0,0),rgba(120,90,20,0.10))" }} />
      </div>
    </div>
  );
}

function BizCard() {
  return (
    <div className="relative" style={{ width: 92 }}>
      <Contact w="76%" />
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-[7px]" style={{ background: "linear-gradient(150deg,#1a3a63,#0c2140)", boxShadow: SH.card }} />
      <div className="relative rounded-[7px] p-2.5" style={{ background: "linear-gradient(160deg,#ffffff,#f4f6fa)", boxShadow: SH.card + ", " + EDGE }}>
        <svg viewBox="0 0 24 24" className="w-4">
          <circle cx="12" cy="12" r="9" fill="none" stroke={GOLD} strokeWidth="2.4" />
          <path d="M9 8 h4 a4 4 0 0 1 0 8 h-4 z" fill="none" stroke={NAVY} strokeWidth="2.4" strokeLinejoin="round" />
        </svg>
        <div className="mt-2 h-1 w-12 rounded-full" style={{ background: INK }} />
        <div className="mt-1 h-0.5 w-8 rounded-full bg-black/20" />
      </div>
    </div>
  );
}

function TypeSpecimen() {
  return (
    <div className="relative rounded-[8px] p-2.5" style={{ width: 84, background: "linear-gradient(160deg,#ffffff,#f3f5f9)", boxShadow: SH.card + ", " + EDGE }}>
      <Contact w="72%" />
      <div className="flex items-end justify-between">
        <span className="font-[family-name:var(--font-display),var(--font)] text-2xl leading-none" style={{ color: NAVY }}>Aa</span>
        <span className="text-[6px] font-bold" style={{ color: GOLD }}>Serif</span>
      </div>
      <div className="mt-2 space-y-1">
        <div className="h-0.5 w-full rounded-full bg-black/15" />
        <div className="h-0.5 w-3/4 rounded-full bg-black/10" />
        <div className="h-0.5 w-5/6 rounded-full bg-black/10" />
      </div>
    </div>
  );
}

/* faint blueprint backdrop (<5% opacity) */
function Blueprint() {
  return (
    <svg aria-hidden viewBox="0 0 400 360" className="pointer-events-none absolute inset-0 size-full" style={{ opacity: 0.045, color: NAVY }}>
      <defs>
        <pattern id="dwGrid" width="26" height="26" patternUnits="userSpaceOnUse">
          <path d="M26 0 H0 V26" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#dwGrid)" />
      <line x1="0" y1="120" x2="400" y2="120" stroke={GOLD} strokeWidth="0.8" strokeDasharray="5 5" />
      <line x1="150" y1="0" x2="150" y2="360" stroke={GOLD} strokeWidth="0.8" strokeDasharray="5 5" />
      <path d="M40 40 H120 M40 36 V44 M120 36 V44" stroke="currentColor" strokeWidth="0.8" />
      <text x="70" y="34" fontSize="8" fill="currentColor">80</text>
      <path d="M60 300 C 130 210, 260 340, 340 240" fill="none" stroke="currentColor" strokeWidth="1" />
      {[[60, 300], [340, 240], [200, 275]].map(([x, y], i) => (
        <rect key={i} x={x - 3} y={y - 3} width="6" height="6" fill="none" stroke="currentColor" strokeWidth="1" />
      ))}
      <circle cx="300" cy="90" r="26" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/* ============================ Scene ============================ */

export default function DesignerWorkspace() {
  const root = useRef<HTMLDivElement | null>(null);
  const tilt = useRef<HTMLDivElement | null>(null);

  useIso(() => {
    if (reduced()) return;
    const ctx = gsap.context(() => {
      const objs = gsap.utils.toArray<HTMLElement>("[data-obj]");
      gsap.from(objs, { autoAlpha: 0, y: 34, scale: 0.92, duration: 0.85, stagger: 0.08, ease: "power3.out", delay: 0.15 });

      gsap.utils.toArray<HTMLElement>("[data-float]").forEach((el, i) => {
        gsap.to(el, { y: `+=${9 + (i % 3) * 5}`, duration: 3 + (i % 4) * 0.7, ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.25 });
      });
      gsap.utils.toArray<HTMLElement>("[data-spin]").forEach((el) => gsap.to(el, { rotation: 2, duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1 }));
      gsap.utils.toArray<HTMLElement>("[data-roll]").forEach((el) => gsap.to(el, { rotation: 3, duration: 4.2, ease: "sine.inOut", yoyo: true, repeat: -1 }));
      gsap.utils.toArray<HTMLElement>("[data-tiltcard]").forEach((el) => gsap.to(el, { rotation: 3, duration: 5, ease: "sine.inOut", yoyo: true, repeat: -1 }));
      gsap.utils.toArray<HTMLElement>("[data-flutter]").forEach((el, i) => gsap.to(el, { rotation: i % 2 ? 2.5 : -2.5, duration: 2.6 + i * 0.5, ease: "sine.inOut", yoyo: true, repeat: -1 }));
      gsap.utils.toArray<HTMLElement>("[data-glow]").forEach((el) => gsap.to(el, { opacity: 0.85, scale: 1.12, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 }));
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (reduced()) return;
    const el = root.current;
    const tiltEl = tilt.current;
    if (!el) return;
    const depthEls = Array.from(el.querySelectorAll<HTMLElement>("[data-depth]"));
    let ticking = false;
    const onMove = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        const cx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const cy = (e.clientY - (r.top + r.height / 2)) / r.height;
        if (tiltEl) gsap.to(tiltEl, { rotateY: cx * 7, rotateX: -cy * 6, duration: 1, ease: "power2.out", transformPerspective: 1400, force3D: true });
        depthEls.forEach((n) => {
          const d = Number(n.dataset.depth) || 1;
          gsap.to(n, { x: cx * d * 14, y: cy * d * 10, duration: 1, ease: "power2.out", force3D: true });
        });
        ticking = false;
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div ref={root} className="relative mx-auto w-full max-w-[560px] [perspective:1600px]">
      <Blueprint />
      <div aria-hidden className="pointer-events-none absolute left-[18%] top-[6%] size-[52%] rounded-full" style={{ background: "radial-gradient(circle, rgba(40,111,171,0.16), transparent 70%)", filter: "blur(38px)" }} />
      <div aria-hidden className="pointer-events-none absolute bottom-[6%] right-[10%] size-[42%] rounded-full" style={{ background: `radial-gradient(circle, ${GOLD}26, transparent 70%)`, filter: "blur(40px)" }} />

      <div ref={tilt} className="[transform-style:preserve-3d]">
        <div className="relative aspect-[11/10] w-full [transform-style:preserve-3d]" style={{ transform: "rotateX(10deg) rotateZ(-4deg)" }}>
          {/* desk plane */}
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[82%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[36px]"
            style={{ background: "linear-gradient(150deg,#ffffff,#eef1f6)", border: `1px solid ${LINE}`, boxShadow: "0 50px 90px -50px rgba(15,39,71,0.45), inset 0 1px 0 rgba(255,255,255,0.9)", transform: "translateZ(-30px)" }}
          />

          <Obj depth={0.6} z={2} className="left-[2%] top-[14%]"><TypeSpecimen /></Obj>
          <Obj depth={0.7} z={3} className="right-[6%] top-[8%]"><Mug /></Obj>
          <Obj depth={1.4} z={6} className="left-[30%] top-[-2%]"><StickyNote text="Kerning!" rot={-6} /></Obj>
          <Obj depth={1.2} z={6} className="right-[24%] top-[2%]"><StickyNote text="#D4AF37" rot={7} /></Obj>
          <Obj depth={0.9} z={5} className="left-1/2 top-[26%] w-[62%] -translate-x-1/2" style={{ transform: "translateZ(10px)" }}><Macbook /></Obj>
          <Obj depth={1.5} z={7} className="left-[1%] top-[45%]"><ColorCards /></Obj>
          <Obj depth={1.7} z={9} className="left-[16%] bottom-[2%] w-[26%]" style={{ transform: "translateZ(40px) rotate(-6deg)" }}><IPad /></Obj>
          <Obj depth={1.9} z={10} className="left-[43%] bottom-[6%]" style={{ transform: "translateZ(46px)" }}><BizCard /></Obj>
          <Obj depth={1.6} z={8} className="right-[5%] bottom-[9%]" style={{ transform: "translateZ(36px) rotate(4deg)" }}>
            <PenTablet />
            <div className="absolute -bottom-3 right-1 rotate-[18deg]"><Pencil /></div>
          </Obj>
        </div>
      </div>
    </div>
  );
}
