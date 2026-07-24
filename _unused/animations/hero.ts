import gsap from "gsap";
import SplitType from "split-type";

export function animateHeroHeading(el: HTMLElement) {
  const split = new SplitType(el, { types: "lines", tagName: "span" });
  const lines = el.querySelectorAll(".line");

  gsap.set(lines, { display: "block", overflow: "hidden" });
  const inner = Array.from(lines).map((line) => {
    const wrap = document.createElement("span");
    wrap.className = "hero-line-inner";
    wrap.style.display = "inline-block";
    wrap.innerHTML = line.innerHTML;
    line.innerHTML = "";
    line.appendChild(wrap);
    return wrap;
  });

  gsap.from(inner, {
    yPercent: 110,
    opacity: 0,
    filter: "blur(10px)",
    duration: 1.1,
    stagger: 0.1,
    ease: "power3.out",
  });

  return () => split.revert();
}

export function animateHeroVisual(scope: HTMLElement) {
  const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });

  tl.to(scope.querySelectorAll("[data-float='a']"), { y: -14, duration: 4 }, 0);
  tl.to(scope.querySelectorAll("[data-float='b']"), { y: 12, x: 6, duration: 5 }, 0);
  tl.to(scope.querySelectorAll("[data-float='c']"), { y: -8, x: -8, duration: 3.5 }, 0);

  return tl;
}
