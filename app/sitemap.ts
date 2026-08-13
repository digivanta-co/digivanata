import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
