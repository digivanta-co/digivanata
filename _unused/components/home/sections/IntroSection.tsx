import Link from "next/link";
import { FOCUS_AREAS } from "@/lib/home-data";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "@/components/ui/Icons";

export default function IntroSection() {
  return (
    <section className="section section--surface" id="about">
      <div className="container split">
        <Reveal className="split__content">
          <span className="eyebrow">Why Digivanta</span>
          <h2>Simply having a website is not enough</h2>
          <p>
            In today&apos;s competitive online world, businesses in Delhi are struggling
            with low visibility, poor lead generation, decreasing organic traffic, and
            rising advertising costs. Many brands invest in marketing but fail to achieve
            measurable growth because they lack a proper digital strategy.
          </p>
          <p className="intro-lead"><strong>That&apos;s where Digivanta comes in.</strong></p>
          <p>
            Digivanta is a professional digital marketing company in Delhi helping
            businesses build strong online visibility, attract quality leads, and generate
            consistent growth through result-driven strategies. Whether you&apos;re a
            startup, local business, eCommerce brand, service provider, or enterprise — our
            solutions solve real business problems, not just increase clicks.
          </p>
          <Link href="#contact" className="btn btn--primary">
            Get a Free Consultation <ArrowRight />
          </Link>
        </Reveal>

        <Reveal className="split__visual" delay={2}>
          <div className="focus-card">
            <h3>We focus on strategies that help businesses:</h3>
            <ul className="check-list check-list--light">
              {FOCUS_AREAS.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
