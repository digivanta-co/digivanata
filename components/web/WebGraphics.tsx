import type { ReactNode } from "react";

/** Decorative + illustrative SVG graphics for the web dev landing page */

export function SectionDecor({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full border border-[#286FAB]/8" />
      <div className="absolute -left-16 bottom-16 h-48 w-48 rounded-full bg-[#286FAB]/[0.03]" />
      <div className="absolute right-[15%] top-[40%] h-px w-32 bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] min-h-[440px] w-full">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#286FAB]/[0.06] blur-3xl" />

      {/* main browser */}
      <div
        data-float="a"
        className="absolute left-[4%] top-[4%] w-[78%] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_32px_80px_rgba(0,0,0,0.1)]"
      >
        <div className="flex items-center gap-2 border-b border-black/6 bg-[#fafafa] px-4 py-3">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-[0.6rem] text-[#999]">
            digivanta.com
          </span>
        </div>
        <div className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="h-2 w-16 rounded bg-[#0a0a0a]" />
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-1.5 w-8 rounded bg-black/10" />
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-[#286FAB]/[0.07] p-4">
            <div className="h-2.5 w-2/3 rounded bg-[#286FAB]/30" />
            <div className="mt-2 h-2 w-1/2 rounded bg-black/10" />
            <div className="mt-4 inline-block rounded-full bg-[#286FAB] px-4 py-1.5 text-[0.55rem] font-semibold text-white">
              Get Started
            </div>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[40, 65, 55].map((h, i) => (
              <div key={i} className="rounded-lg bg-black/[0.04] p-2">
                <div className="w-full rounded bg-[#286FAB]/20" style={{ height: h * 0.4 }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* analytics card */}
      <div
        data-float="b"
        className="absolute bottom-[10%] right-0 w-[52%] rounded-2xl border border-[#286FAB]/15 bg-white p-3 shadow-[0_20px_50px_rgba(40,111,171,0.15)]"
      >
        <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-[#286FAB]">Performance</p>
        <svg viewBox="0 0 120 48" className="mt-2 w-full">
          <polyline
            fill="none"
            stroke="#286FAB"
            strokeWidth="2"
            strokeLinecap="round"
            points="0,40 20,32 40,36 60,18 80,22 100,8 120,12"
          />
          <circle cx="100" cy="8" r="3" fill="#C9A227" />
        </svg>
        <div className="mt-1 flex justify-between text-[0.55rem] text-[#888]">
          <span>+142% traffic</span>
          <span className="font-bold text-[#0a0a0a]">98%</span>
        </div>
      </div>

      {/* mobile device */}
      <div
        data-float="c"
        className="absolute left-0 top-[48%] w-[28%] rounded-[18px] border-[3px] border-[#0a0a0a] bg-white p-1.5 shadow-xl"
      >
        <div className="rounded-[12px] bg-[#fafafa] p-2">
          <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-black/15" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded bg-[#286FAB]/25" />
            <div className="h-8 rounded-md bg-black/5" />
            <div className="h-1.5 w-2/3 rounded bg-black/8" />
          </div>
        </div>
      </div>

      {/* code snippet */}
      <div className="absolute right-[8%] top-[38%] rounded-xl border border-black/8 bg-[#0a0a0a] px-3 py-2.5 shadow-lg">
        <p className="font-mono text-[0.55rem] leading-relaxed text-[#a9cbe8]">
          <span className="text-[#C9A227]">const</span> site = build({"{"}
          <br />
          &nbsp;&nbsp;fast: <span className="text-[#6ee7a0]">true</span>,
          <br />
          &nbsp;&nbsp;seo: <span className="text-[#6ee7a0]">true</span>
          <br />
          {"}"});
        </p>
      </div>

      {/* floating badge */}
      <div className="absolute left-[20%] top-[18%] flex items-center gap-2 rounded-full border border-[#C9A227]/30 bg-white px-3 py-1.5 shadow-md">
        <span className="size-2 rounded-full bg-[#28c840]" />
        <span className="text-[0.6rem] font-semibold text-[#0a0a0a]">Live · 99.9%</span>
      </div>

      <svg aria-hidden className="absolute inset-0 h-full w-full" viewBox="0 0 400 500">
        <circle cx="200" cy="250" r="140" fill="none" stroke="#286FAB" strokeWidth="0.5" strokeOpacity="0.12" strokeDasharray="4 8" />
        <path d="M40 120 C 120 80, 280 60, 360 140" fill="none" stroke="#286FAB" strokeWidth="1" strokeOpacity="0.2" />
        <path d="M60 380 C 160 420, 260 360, 340 400" fill="none" stroke="#C9A227" strokeWidth="1" strokeOpacity="0.4" />
      </svg>
    </div>
  );
}

const STAT_SVGS = [
  <svg key="p" viewBox="0 0 48 48" className="mx-auto mb-4 h-12 w-12 text-[#286FAB]">
    <rect x="6" y="20" width="8" height="22" rx="2" fill="currentColor" opacity="0.2" />
    <rect x="18" y="12" width="8" height="30" rx="2" fill="currentColor" opacity="0.45" />
    <rect x="30" y="6" width="8" height="36" rx="2" fill="currentColor" />
  </svg>,
  <svg key="s" viewBox="0 0 48 48" className="mx-auto mb-4 h-12 w-12 text-[#286FAB]">
    <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
    <path d="M24 6 A18 18 0 0 1 42 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <text x="24" y="28" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor">98</text>
  </svg>,
  <svg key="e" viewBox="0 0 48 48" className="mx-auto mb-4 h-12 w-12 text-[#C9A227]">
    <path d="M8 36 L24 8 L40 36 Z" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="24" cy="28" r="4" fill="currentColor" opacity="0.3" />
  </svg>,
];

export function StatIcon({ index }: { index: number }) {
  return STAT_SVGS[index % STAT_SVGS.length];
}

export function ServiceArt({ type }: { type: string }) {
  const arts: Record<string, ReactNode> = {
    layout: (
      <svg viewBox="0 0 120 80" className="h-20 w-full opacity-90">
        <rect x="8" y="8" width="104" height="64" rx="6" fill="#286FAB" fillOpacity="0.06" stroke="#286FAB" strokeOpacity="0.15" />
        <rect x="16" y="16" width="40" height="6" rx="2" fill="#286FAB" fillOpacity="0.35" />
        <rect x="16" y="28" width="88" height="36" rx="4" fill="#286FAB" fillOpacity="0.1" />
      </svg>
    ),
    cart: (
      <svg viewBox="0 0 120 80" className="h-20 w-full opacity-90">
        <rect x="20" y="24" width="50" height="40" rx="4" fill="#286FAB" fillOpacity="0.12" />
        <circle cx="36" cy="68" r="4" fill="#C9A227" />
        <circle cx="54" cy="68" r="4" fill="#C9A227" />
        <path d="M28 24 L34 12 H58 L64 24" fill="none" stroke="#286FAB" strokeWidth="2" />
      </svg>
    ),
    search: (
      <svg viewBox="0 0 120 80" className="h-20 w-full opacity-90">
        <circle cx="48" cy="36" r="18" fill="none" stroke="#286FAB" strokeWidth="3" />
        <line x1="60" y1="48" x2="78" y2="62" stroke="#286FAB" strokeWidth="3" strokeLinecap="round" />
        <rect x="72" y="12" width="32" height="8" rx="4" fill="#C9A227" fillOpacity="0.5" />
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 120 80" className="h-20 w-full opacity-90">
        <rect x="42" y="8" width="36" height="64" rx="6" fill="#286FAB" fillOpacity="0.1" stroke="#286FAB" strokeWidth="2" />
        <rect x="48" y="20" width="24" height="36" rx="2" fill="#286FAB" fillOpacity="0.2" />
        <circle cx="60" cy="62" r="3" fill="#C9A227" />
      </svg>
    ),
    cms: (
      <svg viewBox="0 0 120 80" className="h-20 w-full opacity-90">
        <rect x="12" y="16" width="96" height="12" rx="3" fill="#286FAB" fillOpacity="0.2" />
        <rect x="12" y="34" width="96" height="12" rx="3" fill="#286FAB" fillOpacity="0.12" />
        <rect x="12" y="52" width="60" height="12" rx="3" fill="#286FAB" fillOpacity="0.08" />
      </svg>
    ),
    speed: (
      <svg viewBox="0 0 120 80" className="h-20 w-full opacity-90">
        <path d="M12 60 L30 40 L50 48 L70 20 L108 28" fill="none" stroke="#286FAB" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="70" cy="20" r="5" fill="#C9A227" />
      </svg>
    ),
  };
  return <div className="mb-4 overflow-hidden rounded-xl bg-[#fafafa]">{arts[type] ?? arts.layout}</div>;
}

export function IntroIllustration() {
  return (
    <div className="relative flex h-full min-h-[320px] items-center justify-center rounded-3xl border border-black/8 bg-[#fafafa] p-8">
      <svg viewBox="0 0 280 240" className="w-full max-w-[300px]">
        <rect x="20" y="30" width="240" height="160" rx="12" fill="white" stroke="#286FAB" strokeOpacity="0.2" strokeWidth="2" />
        <rect x="36" y="50" width="80" height="8" rx="2" fill="#0a0a0a" fillOpacity="0.8" />
        <rect x="36" y="66" width="120" height="5" rx="1" fill="#666" fillOpacity="0.4" />
        <rect x="36" y="90" width="208" height="70" rx="6" fill="#286FAB" fillOpacity="0.08" />
        <rect x="36" y="175" width="60" height="8" rx="4" fill="#286FAB" />
        <circle cx="220" cy="60" r="28" fill="#C9A227" fillOpacity="0.15" stroke="#C9A227" strokeOpacity="0.4" />
        <path d="M208 60 L218 70 L236 48" fill="none" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" />
        <rect x="180" y="170" width="64" height="40" rx="8" fill="white" stroke="#286FAB" strokeOpacity="0.15" />
        <text x="212" y="195" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#286FAB">+Leads</text>
      </svg>
      <div className="absolute -bottom-3 -right-3 rounded-2xl border border-black/8 bg-white px-4 py-2 shadow-lg">
        <span className="text-[0.7rem] font-semibold text-[#286FAB]">Conversion-focused</span>
      </div>
    </div>
  );
}

export function ProcessIcon({ step }: { step: string }) {
  const icons: Record<string, ReactNode> = {
    "01": <path d="M12 20h24M12 28h16M12 36h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />,
    "02": <><rect x="10" y="14" width="28" height="20" rx="3" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M16 22h16M16 28h10" stroke="currentColor" strokeWidth="1.5" /></>,
    "03": <><circle cx="24" cy="18" r="6" stroke="currentColor" strokeWidth="2" fill="none" /><path d="M12 38c0-6 5-10 12-10s12 4 12 10" stroke="currentColor" strokeWidth="2" fill="none" /></>,
    "04": <path d="M14 18l6 6-6 6M22 34h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    "05": <><path d="M24 12v20M16 28l8 8 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="24" cy="12" r="4" fill="currentColor" /></>,
  };
  return (
    <svg viewBox="0 0 48 48" className="size-6 text-[#286FAB]">
      {icons[step] ?? icons["01"]}
    </svg>
  );
}

export function TechOrbit() {
  return (
    <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <svg width="520" height="520" viewBox="0 0 520 520" className="opacity-[0.12]">
        <circle cx="260" cy="260" r="200" fill="none" stroke="#286FAB" strokeWidth="1" strokeDasharray="6 10" />
        <circle cx="260" cy="260" r="140" fill="none" stroke="#C9A227" strokeWidth="0.5" />
        <circle cx="260" cy="60" r="6" fill="#286FAB" />
        <circle cx="460" cy="260" r="4" fill="#C9A227" />
        <circle cx="60" cy="260" r="4" fill="#286FAB" />
        <circle cx="260" cy="460" r="5" fill="#C9A227" />
      </svg>
    </div>
  );
}

export function ShowcaseWireframe() {
  return (
    <div data-show="img" className="relative min-h-[260px] overflow-hidden rounded-2xl border border-[#286FAB]/10 bg-gradient-to-br from-[#286FAB]/5 to-white">
      <div className="absolute inset-0 p-5">
        <div className="grid h-full grid-cols-2 gap-3">
          <div className="space-y-2">
            <div className="h-3 w-3/4 rounded bg-[#286FAB]/25" />
            <div className="h-2 w-1/2 rounded bg-black/10" />
            <div className="mt-4 h-20 rounded-lg bg-[#286FAB]/10" />
            <div className="grid grid-cols-2 gap-2">
              <div className="h-12 rounded-md bg-white shadow-sm" />
              <div className="h-12 rounded-md bg-white shadow-sm" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex-1 rounded-lg bg-white p-3 shadow-sm">
              <svg viewBox="0 0 100 60" className="h-full w-full">
                <polyline fill="none" stroke="#286FAB" strokeWidth="2" points="0,50 20,35 40,40 60,15 80,25 100,10" />
              </svg>
            </div>
            <div className="flex gap-2">
              <div className="size-10 rounded-full bg-[#286FAB]/15" />
              <div className="flex-1 space-y-1.5 pt-1">
                <div className="h-2 w-full rounded bg-black/10" />
                <div className="h-2 w-2/3 rounded bg-black/6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-3 right-3 rounded-lg bg-[#0a0a0a] px-3 py-1.5">
        <span className="text-[0.65rem] font-medium text-[#a9cbe8]">Core Web Vitals ✓</span>
      </div>
    </div>
  );
}

export function AgencyGlow() {
  return (
    <svg aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 opacity-30" viewBox="0 0 160 160">
      <circle cx="80" cy="80" r="60" fill="none" stroke="#286FAB" strokeWidth="1" />
      <circle cx="80" cy="80" r="40" fill="#286FAB" fillOpacity="0.08" />
      <path d="M80 20 L90 70 L140 80 L90 90 L80 140 L70 90 L20 80 L70 70 Z" fill="#C9A227" fillOpacity="0.15" />
    </svg>
  );
}
