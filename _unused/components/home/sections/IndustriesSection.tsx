import { INDUSTRIES } from "@/lib/home-data";
import Reveal from "@/components/ui/Reveal";
import { IndustryIcon } from "@/components/ui/Icons";

export default function IndustriesSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> Who we help</span>
          <h2>Industries We Serve</h2>
          <p>
            Strategies customized to industry-specific challenges and audience behaviour
            across Delhi and India.
          </p>
        </Reveal>
        <Reveal className="industries">
          {INDUSTRIES.map((ind) => (
            <span className="industry-pill" key={ind}>
              <IndustryIcon name={ind} /> {ind}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
