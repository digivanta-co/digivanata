"use client";

import { useEffect, useRef } from "react";

/* Autoplaying background video without the load cost.
   `autoPlay` makes the browser fetch the whole file the moment the page
   parses, wherever the element sits — these clips are multi-megabyte and
   mostly below the fold. Instead: preload="none", then start playback
   the first time the element scrolls into view. */
export default function LazyVideo({
  src,
  className,
  poster,
  rootMargin = "200px",
}: {
  src: string;
  className?: string;
  poster?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // reduced motion: leave it on the poster frame, never autoplay
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!("IntersectionObserver" in window)) {
      el.play().catch(() => {});
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.preload = "auto";
        el.play().catch(() => {});
        io.disconnect();
      },
      { rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      preload="none"
      loop
      muted
      playsInline
      aria-hidden
      className={className}
    />
  );
}
