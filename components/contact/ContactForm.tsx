"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, reduced } from "@/animations/gsap";
import { ArrowRight, Check } from "@/components/ui/Icons";

const FIELD =
  "w-full rounded-lg border border-transparent bg-[var(--gd-soft)] px-5 py-4 text-[0.92rem] text-[var(--gd-ink)] outline-none transition-all duration-300 placeholder:text-[rgba(91,100,120,0.6)] focus:border-[var(--gd-blue)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(40,111,171,0.12)]";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const okRef = useRef<HTMLDivElement | null>(null);

  /* pop-in for the success panel */
  useEffect(() => {
    if (!sent || reduced() || !okRef.current) return;
    gsap.fromTo(
      okRef.current,
      { y: 16, scale: 0.96, autoAlpha: 0 },
      { y: 0, scale: 1, autoAlpha: 1, duration: 0.55, ease: "back.out(1.6)" }
    );
  }, [sent]);

  if (sent) {
    return (
      <div
        ref={okRef}
        className="rounded-2xl border border-[rgba(31,179,85,0.3)] bg-[rgba(31,179,85,0.07)] p-10 text-center"
      >
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-[#1fb355] text-white [&_svg]:size-6">
          <Check />
        </span>
        <h3 className="gd-display m-0 mt-5 text-[1.3rem] text-[var(--gd-ink)]">Message sent.</h3>
        <p className="m-0 mt-2 text-[0.92rem] leading-relaxed text-[var(--gd-muted)]">
          Thank you! We&apos;ve received your message and typically respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="firstName" type="text" placeholder="First Name *" required aria-label="First Name" className={FIELD} />
        <input name="lastName" type="text" placeholder="Last Name *" required aria-label="Last Name" className={FIELD} />
        <input name="email" type="email" placeholder="Email *" required aria-label="Email" className={FIELD} />
        <input name="phone" type="tel" placeholder="Phone Number *" required aria-label="Phone Number" className={FIELD} />
        <input name="subject" type="text" placeholder="Subject *" required aria-label="Subject" className={FIELD + " sm:col-span-2"} />
        <textarea
          name="message"
          placeholder="Message *"
          required
          aria-label="Message"
          className={FIELD + " min-h-44 resize-y sm:col-span-2"}
        />
      </div>

      {/* pill button + circular arrow, like the reference */}
      <div className="mt-6 flex items-center gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(120deg,#0C243D,#286FAB)] px-7 py-3.5 text-[0.88rem] font-semibold text-white shadow-[0_16px_38px_rgba(12,36,61,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_46px_rgba(12,36,61,0.35)]"
        >
          Send Message
        </button>
        <button
          type="submit"
          aria-label="Send message"
          className="grid size-12 place-items-center rounded-full bg-[var(--gd-navy)] text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--gd-blue)] [&_svg]:size-4 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:translate-x-0.5"
        >
          <ArrowRight />
        </button>
      </div>
    </form>
  );
}
