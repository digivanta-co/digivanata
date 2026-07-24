import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

type Cleanup = () => void;

/**
 * MacBook hero — lid stays open.
 * On scroll, the hero pins and the website *inside* the screen scrolls;
 * once it reaches the bottom, the pin releases and the page continues.
 * GPU-friendly transforms/opacity only, with full GSAP cleanup.
 */
export function initMacbookHero(section: HTMLElement): Cleanup {
  gsap.registerPlugin(ScrollTrigger);

  const q = <T extends HTMLElement = HTMLElement>(s: string) =>
    section.querySelector<T>(s);
  const qa = <T extends HTMLElement = HTMLElement>(s: string) =>
    Array.from(section.querySelectorAll<T>(s));

  const pin = q("[data-hero-pin]");
  const heading = q<HTMLElement>("[data-hero-heading]");
  const eyebrow = q("[data-hero-eyebrow]");
  const macbook = q("[data-macbook]");
  const lid = q("[data-lid]");
  const power = q("[data-mb-power]");
  const display = q("[data-mb-display]");
  const siteScroll = q("[data-mb-scroll]");
  const siteEls = qa("[data-site-el]");
  const blueLines = qa(".mb-blue-line");
  const golds = qa(".mb-gold");

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // how far the inner website can scroll
  const scrollDist = () => {
    if (!siteScroll || !display) return 0;
    return Math.max(0, siteScroll.scrollHeight - display.clientHeight);
  };

  let split: SplitType | null = null;
  const tweens: gsap.core.Tween[] = [];
  const timelines: gsap.core.Timeline[] = [];

  const ctx = gsap.context(() => {
    if (heading) split = new SplitType(heading, { types: "lines" });
    const lines = heading ? heading.querySelectorAll(".line") : [];

    // lid open + screen ready
    gsap.set(lid, { rotateX: 0, transformPerspective: 1700 });

    if (reduced) {
      gsap.set(power, { opacity: 0 });
      return;
    }

    gsap.set(power, { opacity: 1 });
    gsap.set(golds, { opacity: 0 });

    // ---------- INTRO ----------
    // fromTo (not from) so end states are explicit & always visible — guards
    // against React Strict Mode double-mount leaving the hero stuck at opacity 0.
    const intro = gsap.timeline({ defaults: { ease: "power3.out", force3D: true } });
    timelines.push(intro);
    if (eyebrow) intro.fromTo(eyebrow, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, 0);
    if (lines.length)
      intro.fromTo(
        lines,
        { yPercent: 118, opacity: 0, filter: "blur(12px)" },
        { yPercent: 0, opacity: 1, filter: "blur(0px)", stagger: 0.12, duration: 1 },
        0.1
      );
    if (macbook)
      intro.fromTo(
        macbook,
        { opacity: 0, scale: 0.92, yPercent: 8 },
        { opacity: 1, scale: 1, yPercent: 0, duration: 1.1, ease: "power2.out" },
        "-=0.5"
      );
    // screen powers on
    if (power) intro.to(power, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, "-=0.3");
    if (siteEls.length)
      intro.fromTo(
        siteEls,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.45, ease: "power2.out" },
        "-=0.2"
      );

    // ---------- AMBIENT: gold shimmer ----------
    golds.forEach((g, i) => {
      const t = gsap.to(g, {
        opacity: 0.95,
        scale: 1.4,
        rotate: 90,
        duration: 1.1,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 0.8 + i * 1.3 + Math.random() * 1.5,
        repeatDelay: 2.4 + Math.random() * 3.2,
      });
      tweens.push(t);
    });

    // ---------- AMBIENT: blue line drift ----------
    blueLines.forEach((ln, i) => {
      gsap.set(ln, { scaleX: 0.6, opacity: 0.25 });
      const t = gsap.to(ln, {
        opacity: 0.5,
        duration: 2.6 + i * 0.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.4,
      });
      tweens.push(t);
    });

    // ---------- SCROLL: browse the site inside the screen (desktop) ----------
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        defaults: { ease: "none", force3D: true },
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // pin length tracks the inner content height so scroll speed feels natural
          end: () => "+=" + (scrollDist() + window.innerHeight * 0.15),
          scrub: 1,
          pin: pin ?? section,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
      timelines.push(tl);

      if (siteScroll) tl.to(siteScroll, { y: () => -scrollDist() }, 0);

      blueLines.forEach((ln, i) =>
        tl.to(ln, { scaleX: 1.5, opacity: 0.5 }, i * 0.05)
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    ScrollTrigger.refresh();
  }, section);

  return () => {
    tweens.forEach((t) => t.kill());
    timelines.forEach((t) => {
      t.scrollTrigger?.kill();
      t.kill();
    });
    ctx.revert();
    split?.revert();
  };
}
