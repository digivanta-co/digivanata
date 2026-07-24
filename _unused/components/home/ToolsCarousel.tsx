"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { TOOLS } from "@/lib/home-data";

export default function ToolsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let offset = 0;
    let raf: number;
    const tick = () => {
      offset += 0.5;
      if (offset >= track.scrollWidth / 2) offset = 0;
      track.style.transform = `translateX(-${offset}px)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const items = [...TOOLS, ...TOOLS];

  return (
    <div className="tools-track-wrap">
      <div className="tools-track" ref={trackRef}>
        {items.map((tool, i) => (
          <span key={`${tool.name}-${i}`} className="tools-track__item flex items-center gap-2">
            {tool.icon ? (
              <Image
                src={tool.icon}
                alt={tool.name}
                width={20}
                height={20}
                className="h-5 w-auto"
              />
            ) : null}
            <span>{tool.name}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
