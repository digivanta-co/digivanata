"use client";

/* Playing cards and poker chips — the physical language of the brand,
   built in pure CSS/JSX so they stay crisp at any size. */

import { cn } from "@/lib/utils";
import type { BiCard } from "@/lib/betindia-data";

const RED_SUITS = ["♥", "♦"];

/** A face-up luxury playing card. Size is controlled by width via className. */
export function PlayingCard({
  card,
  className,
  style,
}: {
  card: BiCard;
  className?: string;
  style?: React.CSSProperties;
}) {
  const red = RED_SUITS.includes(card.suit);
  return (
    <div
      className={cn("bi-pcard", red && "bi-pcard--red", className)}
      style={style}
      aria-label={`${card.rank} of ${card.suit}`}
    >
      <span className="absolute left-[9%] top-[5%] flex flex-col items-center leading-none">
        <span className="text-[0.9em] font-bold">{card.rank}</span>
        <span className="text-[0.75em]">{card.suit}</span>
      </span>
      <span className="absolute inset-0 grid place-items-center text-[2.2em]">
        {card.suit}
      </span>
      <span className="absolute bottom-[5%] right-[9%] flex rotate-180 flex-col items-center leading-none">
        <span className="text-[0.9em] font-bold">{card.rank}</span>
        <span className="text-[0.75em]">{card.suit}</span>
      </span>
    </div>
  );
}

/** A face-down card with the gold lattice BETINDIA back. */
export function CardBack({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={cn("bi-pcard-back relative", className)} style={style}>
      <span className="bi-serif absolute inset-0 grid place-items-center text-[1.1em] font-semibold tracking-[0.2em] text-[#d4af37]/70">
        B
      </span>
    </div>
  );
}

/** A CSS poker chip. Pass value text and a color variant. */
export function Chip({
  value,
  variant = "orange",
  className,
  style,
}: {
  value: string;
  variant?: "orange" | "gold" | "navy" | "green" | "red";
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      data-value={value}
      className={cn(
        "bi-chip",
        variant !== "orange" && `bi-chip--${variant}`,
        className
      )}
      style={style}
      aria-label={`${value} chip`}
    />
  );
}

/** A short leaning stack of chips. */
export function ChipStack({
  count = 4,
  variant = "gold",
  value,
  className,
  chipClassName = "w-12",
}: {
  count?: number;
  variant?: "orange" | "gold" | "navy" | "green" | "red";
  value: string;
  className?: string;
  chipClassName?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <Chip
          key={i}
          value={value}
          variant={variant}
          className={cn(chipClassName, i > 0 && "absolute left-0")}
          style={
            i > 0
              ? { top: `${-i * 9}px`, transform: `rotate(${(i % 2 ? 1 : -1) * i * 4}deg)` }
              : undefined
          }
        />
      ))}
    </div>
  );
}
