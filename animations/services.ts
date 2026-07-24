import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateServiceCards(cards: HTMLElement[], trigger: HTMLElement) {
  gsap.from(cards, {
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    ease: "power3.out",
    scrollTrigger: {
      trigger,
      start: "top 78%",
      once: true,
    },
  });
}
