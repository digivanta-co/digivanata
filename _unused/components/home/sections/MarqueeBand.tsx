import { MARQUEE_ITEMS } from "@/lib/home-data";

export default function MarqueeBand() {
  return (
    <div className="marquee-band" aria-hidden="true">
      <div className="marquee">
        <div className="marquee__group">
          {MARQUEE_ITEMS.map((m) => <span key={`a-${m}`}>{m}</span>)}
        </div>
        <div className="marquee__group">
          {MARQUEE_ITEMS.map((m) => <span key={`b-${m}`}>{m}</span>)}
        </div>
      </div>
    </div>
  );
}
