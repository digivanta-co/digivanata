import { LinkedIn, Instagram, Mail, GitHub } from "@/components/ui/Icons";
import type { Social } from "@/lib/team-data";
import type { SVGProps } from "react";

const ICONS: Record<Social["type"], (p: SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  linkedin: LinkedIn,
  instagram: Instagram,
  mail: Mail,
  github: GitHub,
};

const LABELS: Record<Social["type"], string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  mail: "Email",
  github: "GitHub",
};

export default function SocialButtons({
  socials,
  variant = "filled",
}: {
  socials: Social[];
  variant?: "filled" | "outline";
}) {
  return (
    <div className="flex items-center gap-2">
      {socials.map((s, i) => {
        const Icon = ICONS[s.type];
        if (variant === "filled") {
          return (
            <a
              key={i}
              href={s.href}
              aria-label={LABELS[s.type]}
              className="grid size-10 place-items-center rounded-xl bg-zinc-800 text-white shadow-sm transition-transform hover:-translate-y-[2px] hover:bg-zinc-700"
            >
              <Icon width={17} height={17} />
            </a>
          );
        }
        return (
          <a
            key={i}
            href={s.href}
            aria-label={LABELS[s.type]}
            className="grid size-8 place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--navy)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Icon width={14} height={14} />
          </a>
        );
      })}
    </div>
  );
}
