import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateShowcaseTimeline(scope: HTMLElement) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scope,
      start: "top 65%",
      once: true,
    },
    defaults: { ease: "power3.out", duration: 0.9 },
  });

  tl.from(scope.querySelector("[data-show='browser']"), { y: 50, opacity: 0, duration: 1.1 })
    .from(scope.querySelector("[data-show='nav']"), { y: -20, opacity: 0 }, "-=0.5")
    .from(scope.querySelectorAll("[data-show='card']"), { y: 30, opacity: 0, stagger: 0.1 }, "-=0.4")
    .from(scope.querySelector("[data-show='btn']"), { scale: 0.9, opacity: 0 }, "-=0.3")
    .from(scope.querySelector("[data-show='img']"), { clipPath: "inset(100% 0 0 0)" }, "-=0.4");

  return tl;
}
