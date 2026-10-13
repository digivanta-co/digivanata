import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/lib/site-data";
import { blogPostHref } from "@/lib/blog-data";
import { client } from "@/sanity/client";

type PostRow = { slug: string; publishedAt?: string; _updatedAt?: string };

const POSTS_SITEMAP_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current,
  publishedAt,
  _updatedAt
}`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // Pull every published post from the CMS so new articles self-register.
  // Fall back to just the static routes if the CMS is unreachable at build.
  const posts = await client
    .fetch<PostRow[]>(POSTS_SITEMAP_QUERY, {}, { next: { revalidate: 3600 } })
    .catch(() => [] as PostRow[]);

  const postRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}${blogPostHref(p.slug)}`,
    lastModified: new Date(p._updatedAt || p.publishedAt || Date.now()),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...postRoutes];
}
