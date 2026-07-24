import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SocialButtons from "@/components/team/SocialButtons";
import { TEAM_LEADERS } from "@/lib/team-data";

export default function TeamLeadership() {
  return (
    <section className="relative bg-white pb-16 pt-8 lg:pb-24">
      <div className="container">
        <Reveal className="mb-14 text-center">
          <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--gd-gold)]/40 bg-[var(--gd-gold-soft,rgba(176,141,63,0.12))] px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[var(--gd-gold,#b08d3f)]">
            Executive Leadership
          </span>
          <h2 className="font-[family-name:var(--font-display),var(--font)] text-[clamp(2rem,4.5vw,3.2rem)] font-[800] uppercase tracking-[-0.03em] text-[var(--gd-ink,#0d1229)]">
            Guiding <span className="gd-grad">Digital Growth</span>
          </h2>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {TEAM_LEADERS.map((leader, i) => (
            <Reveal as="article" key={leader.name} delay={(i + 1) as 1 | 2}>
              <div className="group relative h-full overflow-hidden rounded-[32px] border border-[var(--gd-line,rgba(13,18,41,0.1))] bg-white p-2 shadow-[0_10px_30px_rgba(13,18,41,0.04)] transition-all duration-400 hover:-translate-y-1.5 hover:border-[var(--gd-gold)]/40 hover:shadow-[0_20px_50px_rgba(13,18,41,0.1)]">
                <div className="grid h-full grid-cols-1 overflow-hidden rounded-[26px] bg-gradient-to-br from-white via-[var(--gd-soft,#f6f7fb)] to-white sm:grid-cols-[1fr_0.88fr]">
                  {/* Copy */}
                  <div className="flex flex-col p-7 lg:p-9">
                    <span className="mb-3 inline-flex w-fit rounded-full bg-[var(--gd-gold-soft,rgba(176,141,63,0.12))] px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[var(--gd-gold,#b08d3f)]">
                      {leader.role}
                    </span>
                    <h3 className="font-[family-name:var(--font-display),var(--font)] text-[1.8rem] font-[800] uppercase tracking-[-0.02em] text-[var(--gd-ink,#0d1229)]">
                      {leader.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold text-[var(--gd-blue,#286FAB)]">
                      {leader.specialty}
                    </p>
                    <p className="mt-4 text-[0.92rem] leading-[1.7] text-[var(--gd-muted,#5b6478)]">
                      {leader.desc}
                    </p>

                    <div className="mt-auto pt-6">
                      <SocialButtons socials={leader.socials} variant="filled" />
                    </div>
                  </div>

                  {/* Photo Frame */}
                  <div className="relative min-h-[360px] overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(40,111,171,0.2),rgba(200,164,93,0.1))]">
                    <Image
                      src={leader.photo}
                      alt={`${leader.name} — ${leader.role}`}
                      fill
                      sizes="(max-width: 1024px) 50vw, 320px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--gd-navy)]/30 via-transparent to-transparent" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
