import { gsap, reduced } from "@/animations/gsap";

type Cleanup = () => void;

/** Base resting pose that gives the phone a subtle 3D presence. */
const BASE_RY = -7;
const BASE_RX = 4;

/**
 * 3D "build-up" hero for the app development page.
 * The phone assembles on load (rotate + scale in), screen powers on,
 * app UI + badges stagger in, then it floats and responds to the pointer.
 * Transforms/opacity only for 60fps; full cleanup on unmount.
 */
export function initAppHero(section: HTMLElement): Cleanup {
  const phone = section.querySelector<HTMLElement>("[data-phone]");
  const power = section.querySelector<HTMLElement>("[data-phone-power]");
  const screenEls = section.querySelectorAll<HTMLElement>("[data-screen-el]");
  const badges = section.querySelectorAll<HTMLElement>("[data-phone-badge]");

  if (reduced()) {
    if (power) power.style.opacity = "0";
    return () => {};
  }

  let onMove: ((e: PointerEvent) => void) | null = null;
  let onLeave: (() => void) | null = null;

  const ctx = gsap.context(() => {
    if (!phone) return;

    gsap.set(phone, {
      transformPerspective: 1400,
      transformOrigin: "50% 55%",
      willChange: "transform",
    });

    // ---- build-up ----
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(phone, {
      opacity: 0,
      scale: 0.78,
      rotateY: -40,
      rotateX: 18,
      y: 80,
      duration: 1.3,
    })
      .to(phone, { rotateY: BASE_RY, rotateX: BASE_RX, duration: 1.1, ease: "power2.out" }, "-=0.55")
      .to(power, { opacity: 0, duration: 0.6, ease: "power2.inOut" }, "-=0.75");

    if (screenEls.length)
      tl.from(
        screenEls,
        { opacity: 0, y: 18, stagger: 0.08, duration: 0.5, ease: "power2.out" },
        "-=0.35"
      );
    if (badges.length)
      tl.from(
        badges,
        { opacity: 0, scale: 0.5, y: 24, stagger: 0.14, duration: 0.7, ease: "back.out(1.7)" },
        "-=0.3"
      );

    // ---- resting float (translateY only, no rotation conflict) ----
    gsap.to(phone, {
      y: -14,
      duration: 3.2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: 1.6,
    });
    gsap.to("[data-phone-badge='a']", {
      y: -12, duration: 2.4, ease: "sine.inOut", repeat: -1, yoyo: true,
    });
    gsap.to("[data-phone-badge='b']", {
      y: 12, duration: 2.8, ease: "sine.inOut", repeat: -1, yoyo: true,
    });

    // ---- pointer parallax tilt around the resting pose ----
    const ry = gsap.quickTo(phone, "rotateY", { duration: 0.9, ease: "power3.out" });
    const rx = gsap.quickTo(phone, "rotateX", { duration: 0.9, ease: "power3.out" });

    onMove = (e: PointerEvent) => {
      const r = section.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry(BASE_RY + px * 16);
      rx(BASE_RX - py * 12);
    };
    onLeave = () => {
      ry(BASE_RY);
      rx(BASE_RX);
    };
    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
  }, section);

  return () => {
    if (onMove) section.removeEventListener("pointermove", onMove);
    if (onLeave) section.removeEventListener("pointerleave", onLeave);
    ctx.revert();
  };
}
