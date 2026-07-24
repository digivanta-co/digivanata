import Link from "next/link";
import { SERVICES } from "@/lib/site-data";
import Reveal from "@/components/ui/Reveal";
import { ServiceIcon, ArrowRight } from "@/components/ui/Icons";

export default function ServicesSection() {
  return (
    <section className="section section--surface" id="services">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> What we do</span>
          <h2>Complete Digital Marketing Services in Delhi</h2>
          <p>
            End-to-end digital growth solutions under one roof — from SEO and paid ads
            to social media, web and app development.
          </p>
        </Reveal>

        <div className="grid grid--4">
          {SERVICES.map((s, i) => (
            <Reveal as="article" className="svc-card" key={s.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <span className="svc-card__icon"><ServiceIcon name={s.icon} /></span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link href="#contact" className="svc-card__link">
                Learn more <ArrowRight />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
