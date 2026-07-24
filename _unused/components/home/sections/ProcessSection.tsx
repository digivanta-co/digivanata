import { PROCESS_STEPS } from "@/lib/home-data";
import Reveal from "@/components/ui/Reveal";

export default function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> How we work</span>
          <h2>Our Digital Marketing Process</h2>
          <p>A clear, proven workflow that turns strategy into measurable growth.</p>
        </Reveal>

        <div className="process">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal as="article" className="process__step" key={s.step} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5}>
              <span className="process__num">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
