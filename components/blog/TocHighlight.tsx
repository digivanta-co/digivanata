"use client";

import { useEffect } from "react";

/** Highlights the TOC link for the heading you're currently reading.
 *  Uses IntersectionObserver so it works under Lenis smooth scroll
 *  (which doesn't fire native window scroll events reliably). */
export default function TocHighlight() {
  useEffect(() => {
    const links = new Map<string, Element>();
    document.querySelectorAll<HTMLAnchorElement>('.blog-article__toc a[href^="#"]').forEach((a) => {
      const id = a.getAttribute("href")!.slice(1);
      if (id) links.set(id, a);
    });
    const heads = [...links.keys()]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!heads.length) return;

    const pick = () => {
      // active = last heading scrolled past the top offset (~120px for the header)
      let id = heads[0].id;
      for (const h of heads) {
        if (h.getBoundingClientRect().top > 120) break;
        id = h.id;
      }
      links.forEach((a, key) => a.classList.toggle("is-active", key === id));
    };

    const obs = new IntersectionObserver(pick, { rootMargin: "-120px 0px 0px 0px", threshold: [0, 1] });
    heads.forEach((h) => obs.observe(h));
    pick();
    return () => obs.disconnect();
  }, []);

  return null;
}
