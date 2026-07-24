import Reveal from "@/components/ui/Reveal";
import ToolsCarousel from "@/components/home/ToolsCarousel";

export default function ToolsSection() {
  return (
    <section className="section section--surface section--tight">
      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow"><i className="dot" /> Our stack</span>
          <h2>Tools We Use</h2>
          <p>Industry-leading platforms and 100+ AI tools powering every campaign.</p>
        </Reveal>
      </div>
      <ToolsCarousel />
    </section>
  );
}
