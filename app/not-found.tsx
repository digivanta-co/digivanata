import Link from "next/link";
import { ArrowRight, ServiceIcon } from "@/components/ui/Icons";

export const metadata = {
  title: "Page Not Found | Digivanta",
  description: "The page you are looking for does not exist or has been moved.",
  robots: { index: false, follow: true },
};

const POPULAR_SERVICES = [
  { title: "SEO Services", href: "/seo-services-in-delhi", icon: "search" as const },
  { title: "Google Ads & PPC", href: "/ppc-company-in-delhi", icon: "ppc" as const },
  { title: "Social Media Marketing", href: "/social-media-marketing-in-delhi", icon: "social" as const },
  { title: "Mobile App Development", href: "/mobile-app-development-in-delhi", icon: "app" as const },
  { title: "Web Development", href: "/web-development-company-in-delhi", icon: "web" as const },
  { title: "Graphic Designing", href: "/graphic-designing-company-in-delhi", icon: "content" as const },
];

export default function NotFound() {
  return (
    <main className="gd min-h-[80vh] flex items-center justify-center py-20 px-4">
      <div className="container max-w-3xl text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-[var(--gd-soft)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gd-gold)]">
          <span className="size-2 rounded-full bg-[var(--gd-gold)]" />
          404 Error · Page Not Found
        </span>

        {/* Headline */}
        <h1 className="gd-display mt-6 text-4xl sm:text-6xl font-extrabold text-[var(--gd-ink)] tracking-tight">
          Looking for Something <span className="gd-grad">Special?</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-[var(--gd-muted)] leading-relaxed">
          The link you followed may have been updated, renamed, or moved during our recent platform upgrade. Explore our key services below or return home.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--gd-navy)] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(12,36,61,0.2)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--gd-blue)]"
          >
            Back to Homepage <ArrowRight />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--gd-line)] bg-white px-7 py-3.5 text-sm font-bold text-[var(--gd-ink)] transition-colors hover:border-[var(--gd-gold)] hover:text-[var(--gd-blue)]"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Service Links */}
        <div className="mt-14 rounded-3xl border border-[var(--gd-line)] bg-white p-6 sm:p-8 shadow-[0_12px_32px_rgba(12,36,61,0.04)] text-left">
          <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gd-gold)] mb-5">
            Quick Navigation to Our Services
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center gap-3 rounded-xl border border-[var(--gd-line)] bg-[var(--gd-soft)] p-3 transition-all hover:border-[var(--gd-blue)] hover:bg-white hover:shadow-md"
              >
                <span className="grid size-8 place-items-center rounded-lg bg-white text-[var(--gd-blue)] shadow-xs [&_svg]:size-4">
                  <ServiceIcon name={s.icon} />
                </span>
                <span className="text-xs font-semibold text-[var(--gd-ink)] group-hover:text-[var(--gd-blue)] transition-colors">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
