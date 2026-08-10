"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { GD_DECK, GD_HERO } from "@/lib/design-data";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const NAVY = "#0C243D";
const BLUE = "#286FAB";
const GOLD = "#e4c766";
const PAPER = "#F6F7FB";
const INK_BLUE = "#7fb4dc";

/* Where each card sits in the stack. Everything is percentage-based so
   the deck scales cleanly from 460px down to a phone. */
const SLOTS = [
  { xPercent: 0, yPercent: 0, rotation: -4, scale: 1, opacity: 1, zIndex: 40 },
  { xPercent: 11, yPercent: -6, rotation: 3, scale: 0.95, opacity: 1, zIndex: 30 },
  { xPercent: 21, yPercent: -12, rotation: 8, scale: 0.9, opacity: 0.72, zIndex: 20 },
  { xPercent: 30, yPercent: -17, rotation: 12, scale: 0.86, opacity: 0.42, zIndex: 10 },
];

/* Posters are drawn as SVG so the typography stays crisp and correctly
   proportioned at any card size — no clamp() guesswork. */
export function Poster({ id, lines, label, n }: { id: string; lines: string[]; label: string; n: string }) {
  const art = () => {
    switch (id) {
      case "type":
        return (
          <>
            <rect width={300} height={400} fill={GOLD} />
            <text x={26} y={168} fontSize={82} fontWeight={800} letterSpacing="-4" fill={NAVY}>
              {lines[0].toUpperCase()}
            </text>
            <text x={26} y={246} fontSize={82} fontWeight={800} letterSpacing="-4" fill="none" stroke={NAVY} strokeWidth={2}>
              {lines[1].toUpperCase()}
            </text>
            <rect x={26} y={272} width={110} height={10} fill={NAVY} />
            <Foot ink={NAVY} label={label} n={n} />
          </>
        );
      case "mark":
        return (
          <>
            <rect width={300} height={400} fill={NAVY} />
            <circle cx={150} cy={168} r={82} fill={GOLD} />
            <path d="M150 112 200 210H100z" fill={NAVY} />
            <text x={26} y={296} fontSize={30} fontWeight={800} letterSpacing="-1" fill="#ffffff">
              {lines[0]}
            </text>
            <text x={26} y={326} fontSize={30} fontWeight={800} letterSpacing="-1" fill={GOLD}>
              {lines[1]}
            </text>
            <Foot ink="rgba(255,255,255,0.55)" label={label} n={n} />
          </>
        );
      case "blocks":
        return (
          <>
            <rect width={300} height={400} fill={PAPER} />
            <rect x={26} y={54} width={112} height={112} fill={NAVY} />
            <circle cx={216} cy={110} r={56} fill={BLUE} />
            <path d="M82 300 138 194H26z" fill={GOLD} />
            <rect x={160} y={194} width={112} height={44} fill={NAVY} />
            <rect x={160} y={252} width={72} height={44} fill={BLUE} />
            <text x={26} y={334} fontSize={26} fontWeight={800} letterSpacing="-1" fill={NAVY}>
              {`${lines[0]} ${lines[1]}`}
            </text>
            <Foot ink="rgba(12,36,61,0.55)" label={label} n={n} />
          </>
        );
      default:
        return (
          <>
            <rect width={300} height={400} fill={BLUE} />
            <text x={26} y={186} fontSize={130} fontWeight={800} letterSpacing="-8" fill="#ffffff" opacity={0.22}>
              {n}
            </text>
            <rect x={26} y={210} width={248} height={3} fill="#ffffff" opacity={0.5} />
            <text x={26} y={264} fontSize={38} fontWeight={800} letterSpacing="-1.5" fill="#ffffff">
              {lines[0].toUpperCase()}
            </text>
            <text x={26} y={306} fontSize={38} fontWeight={800} letterSpacing="-1.5" fill={GOLD}>
              {lines[1].toUpperCase()}
            </text>
            <Foot ink="rgba(255,255,255,0.6)" label={label} n={n} />
          </>
        );
    }
  };

  return (
    <svg viewBox="0 0 300 400" className="block size-full" role="img" aria-label={`${label} poster`}>
      {art()}
    </svg>
  );
}

function Foot({ ink, label, n }: { ink: string; label: string; n: string }) {
  return (
    <>
      <text x={26} y={370} fontSize={11} fontWeight={700} letterSpacing="2.4" fill={ink}>
        {label.toUpperCase()}
      </text>
      <text x={274} y={370} fontSize={11} fontWeight={700} letterSpacing="1.4" fill={ink} textAnchor="end">
        {`${n}/0${GD_DECK.posters.length}`}
      </text>
    </>
  );
}

export function PosterDeck() {
  const root = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const { posters } = GD_DECK;

  useIso(() => {
    let timer: ReturnType<typeof setInterval> | undefined;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".deck-card");
      if (!cards.length) return;
      const n = cards.length;

      if (reduced()) {
        cards.forEach((c, i) => gsap.set(c, SLOTS[i]));
        return;
      }

      /* deal in */
      cards.forEach((c, i) => gsap.set(c, { ...SLOTS[i], autoAlpha: 0, yPercent: SLOTS[i].yPercent + 16 }));
      gsap.to(cards, {
        yPercent: (i: number) => SLOTS[i].yPercent,
        autoAlpha: (i: number) => SLOTS[i].opacity,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
      });

      /* the front card flicks away, everything behind steps forward */
      let cur = 0;
      const step = () => {
        const front = cards[cur];
        gsap.to(front, {
          xPercent: -58,
          yPercent: 8,
          rotation: -24,
          scale: 0.92,
          autoAlpha: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => {
            const back = SLOTS[n - 1];
            gsap.set(front, { ...back, autoAlpha: 0 });
            gsap.to(front, { autoAlpha: back.opacity, duration: 0.45 });
          },
        });
        for (let k = 1; k < n; k++) {
          gsap.to(cards[(cur + k) % n], { ...SLOTS[k - 1], duration: 0.7, ease: "power3.out" });
        }
        cur = (cur + 1) % n;
        setActive(cur);
      };
      timer = setInterval(step, 2800);

      /* pointer parallax — the deck leans toward the cursor */
      const stage = root.current?.querySelector<HTMLElement>(".deck-3d");
      const panel = root.current;
      if (!stage || !panel || window.matchMedia("(pointer: coarse)").matches) return;
      const rx = gsap.quickTo(stage, "rotationX", { duration: 0.6, ease: "power3.out" });
      const ry = gsap.quickTo(stage, "rotationY", { duration: 0.6, ease: "power3.out" });
      const onMove = (e: PointerEvent) => {
        const r = panel.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 18);
        rx(((e.clientY - r.top) / r.height - 0.5) * -14);
      };
      const onLeave = () => {
        rx(0);
        ry(0);
      };
      panel.addEventListener("pointermove", onMove);
      panel.addEventListener("pointerleave", onLeave);
      return () => {
        panel.removeEventListener("pointermove", onMove);
        panel.removeEventListener("pointerleave", onLeave);
      };
    }, root);

    return () => {
      if (timer) clearInterval(timer);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root} className="w-full max-w-[460px]">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.2em] text-white/55">
          <span aria-hidden className="size-1.5 rounded-full" style={{ background: GOLD }} />
          {GD_DECK.title}
        </span>
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/30">
          {GD_HERO.disciplines}
        </span>
      </div>

      <div className="relative w-full [perspective:1100px]">
        {/* aspect + inset are tuned so the fanned back card (rotated 12°,
            shifted up 17%) still clears the container on every side */}
        <div className="deck-3d relative aspect-[1/1.05] w-full [transform-style:preserve-3d]">
          {posters.map((p, i) => (
            <article
              key={p.id}
              className="deck-card absolute left-[5%] top-[20%] w-[60%] overflow-hidden rounded-[12px] shadow-[0_34px_70px_rgba(0,0,0,0.5)]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Poster id={p.id} lines={p.lines} label={p.label} n={`0${i + 1}`} />
            </article>
          ))}
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
        <div className="flex gap-1.5">
          {posters.map((p, i) => (
            <span
              key={p.id}
              aria-hidden
              className="h-1 w-7 rounded-full transition-colors duration-300"
              style={{ background: i === active ? GOLD : "rgba(255,255,255,0.16)" }}
            />
          ))}
        </div>
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.16em]" style={{ color: INK_BLUE }}>
          {posters[active].label}
        </span>
      </div>
    </div>
  );
}
