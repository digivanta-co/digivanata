import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";
import { ABOUT_TEAM_IMAGE } from "@/lib/team-data";

export default function AboutTeamPhoto() {
  return (
    <section className="section section--soft section--tight ab-team py-5">
      <div className="container">
        <Reveal className="section-head section-head--center ab-team__head">
          <span className="ab-label">Our people</span>
          <h2>The Team Behind Digivanta</h2>
          <p>
            Designers, marketers, and developers working together to turn ideas into
            measurable digital growth for every client we partner with.
          </p>
        </Reveal>

        <Reveal delay={2}>
          <div className="ab-team__frame">
            <div className="ab-team__img-wrap">
              <Image
                src={ABOUT_TEAM_IMAGE.src}
                alt={ABOUT_TEAM_IMAGE.alt}
                width={1400}
                height={480}
                className="ab-team__img"
                priority={false}
              />
            </div>
            <div className="ab-team__badge">
              <span className="ab-team__badge-ic" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              
            </div>
          </div>
        </Reveal>

        <Reveal className="ab-team__cta" delay={3}>
          <Link href="/digivanta-team" className="btn btn--ghost btn--sm">
            Meet the full team <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
