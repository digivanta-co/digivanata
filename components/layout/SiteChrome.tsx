"use client";

import { usePathname } from "next/navigation";

/* Routes that render their own brand chrome (nav/footer) and must not
   show the Digivanta agency shell. */
const STANDALONE_ROUTES = ["/betindia"];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname && STANDALONE_ROUTES.some((r) => pathname.startsWith(r))) return null;
  return <>{children}</>;
}
