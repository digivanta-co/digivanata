import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateProcessTimeline(
  track: HTMLElement,
  line: HTMLElement,
  steps: HTMLElement[]
) {
  gsap.from(steps, {
    y: 40,
    opacity: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power3.out",
    scrollTrigger: { trigger: track, start: "top 75%", once: true },
  });

  gsap.fromTo(
    line,
    { scaleX: 0 },
    {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: { trigger: track, start: "top 70%", once: true },
    }
  );
}
