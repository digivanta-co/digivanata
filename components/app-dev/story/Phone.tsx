import { cn } from "@/lib/utils";

/* ================================================================
   Reusable phone frame + a set of animated "app screen" mockups.
   Screens are pure Tailwind so they render crisply at any size and
   can be cross-faded by GSAP between scenes.
   ================================================================ */

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[9/18.5] w-[230px] rounded-[2.4rem] border border-white/15 bg-[#0c243d] p-2.5 shadow-[0_50px_120px_rgba(40,111,171,0.45)] sm:w-[260px]",
        className
      )}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-white">
        <span className="absolute left-1/2 top-2 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-[#0c243d]" />
        {children}
      </div>
    </div>
  );
}

/* Stacked screens: all absolutely positioned; GSAP toggles opacity. */
export function ScreenLayer({
  active,
  className,
  children,
}: {
  active?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-screen
      className={cn(
        "phone-screen absolute inset-0",
        active ? "opacity-100" : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
}

/* ---- Screen 1: wireframe (the idea) ---- */
export function WireframeScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-[#F8FAFC] p-4 pt-9">
      <div className="h-6 w-24 rounded bg-[#0F172A]/10" />
      <div className="h-28 w-full rounded-xl border-2 border-dashed border-[#0F172A]/15" />
      <div className="grid gap-5 grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-14 rounded-lg border-2 border-dashed border-[#0F172A]/15" />
        ))}
      </div>
      <div className="h-3 w-3/4 rounded bg-[#0F172A]/10" />
      <div className="h-3 w-1/2 rounded bg-[#0F172A]/10" />
      <div className="mt-auto h-10 w-full rounded-lg border-2 border-dashed border-[#0F172A]/20" />
    </div>
  );
}

/* ---- Screen 2: design (colour + structure) ---- */
export function DesignScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-white p-4 pt-9">
      <div className="h-6 w-28 rounded-full bg-[#286fab]/20" />
      <div className="h-28 w-full rounded-xl bg-[linear-gradient(135deg,#dbeafe,#eff6ff)]" />
      <div className="grid gap-5 grid-cols-3">
        {["bg-[#0c243d]/15", "bg-[#286fab]/15", "bg-[#231f20]/10"].map((c, i) => (
          <div key={i} className={`h-14 rounded-lg ${c}`} />
        ))}
      </div>
      <div className="h-3 w-3/4 rounded-full bg-[#231f20]/10" />
      <div className="h-3 w-1/2 rounded-full bg-[#231f20]/10" />
      <div className="mt-auto h-10 w-full rounded-full bg-[#286fab]/25" />
    </div>
  );
}

/* ---- Screen 3: live app (shipped) ---- */
export function AppScreen() {
  return (
    <div className="flex h-full flex-col bg-white pt-7">
      <div className="bg-[linear-gradient(135deg,#0c243d,#286fab)] px-4 pb-5 pt-3 text-white">
        <p className="text-[0.6rem] uppercase tracking-widest text-white/70">Digivanta</p>
        <p className="text-base font-bold">Welcome back 👋</p>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3">
        <div className="grid gap-5 grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="grid place-items-center rounded-xl border border-[#E5E7EB] bg-[#F8FAFC] py-3">
              <div className="size-4 rounded bg-[#286fab]/25" />
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-[#E5E7EB] p-2.5">
          <div className="mb-2 h-1.5 w-16 rounded-full bg-[#231f20]/10" />
          <div className="flex h-16 items-end gap-1">
            {["h-6", "h-10", "h-8", "h-14", "h-9", "h-16", "h-11"].map((h, i) => (
              <div key={i} className={`w-full rounded-t bg-[linear-gradient(180deg,#286fab,#0c243d)] ${h}`} />
            ))}
          </div>
        </div>
        <div className="mt-auto rounded-full bg-[#286fab] py-2 text-center text-[0.7rem] font-semibold text-white">
          Get Started
        </div>
      </div>
    </div>
  );
}

/* ---- Industry screens for the horizontal showcase ---- */
export function ShowcaseScreen({ kind }: { kind: "shop" | "food" | "health" | "ride" | "estate" | "learn" }) {
  const head: Record<string, { title: string; grad: string }> = {
    shop: { title: "Shop", grad: "from-[#0c243d] to-[#286fab]" },
    food: { title: "Order Food", grad: "from-[#231f20] to-[#0c243d]" },
    health: { title: "Health", grad: "from-[#286fab] to-[#0c243d]" },
    ride: { title: "Book a Ride", grad: "from-[#0c243d] to-[#231f20]" },
    estate: { title: "Properties", grad: "from-[#0c243d] to-[#286fab]" },
    learn: { title: "Learn", grad: "from-[#286fab] to-[#231f20]" },
  };
  const h = head[kind];
  return (
    <div className="flex h-full flex-col bg-white pt-7">
      <div className={`bg-gradient-to-br ${h.grad} px-4 pb-5 pt-3 text-white`}>
        <p className="text-[0.6rem] uppercase tracking-widest text-white/70">Digivanta</p>
        <p className="text-base font-bold">{h.title}</p>
      </div>
      {kind === "ride" ? (
        <div className="relative flex-1">
          <div className="absolute inset-0 bg-[#eef2f7] [background-image:linear-gradient(rgba(40,111,171,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(40,111,171,0.08)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0c243d] ring-4 ring-[#286fab]/30" />
          <div className="absolute inset-x-3 bottom-3 rounded-xl bg-white p-2.5 shadow">
            <div className="h-1.5 w-20 rounded-full bg-[#231f20]/10" />
            <div className="mt-2 h-7 rounded-full bg-[#286fab]" />
          </div>
        </div>
      ) : (
        <div className="grid gap-5 flex-1 grid-cols-2 p-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-[#E5E7EB]">
              <div className="h-12 bg-[linear-gradient(135deg,#dbeafe,#eff6ff)]" />
              <div className="space-y-1 p-1.5">
                <div className="h-1.5 w-3/4 rounded-full bg-[#231f20]/10" />
                <div className="h-1.5 w-1/2 rounded-full bg-[#286fab]/30" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
