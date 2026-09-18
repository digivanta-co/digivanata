import { defineQuery } from "next-sanity";
import Link from "next/link";
import { Search } from "lucide-react";
import { client } from "@/sanity/client";
import Reveal from "@/components/ui/Reveal";
import BlogCard from "@/components/blog/BlogCard";
import FeaturedPost from "@/components/blog/FeaturedPost";
import { BLOG_INDEX } from "@/lib/blog-data";

const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "authorName": author->name,
    "categories": categories[]->title
  }`
);

const options = { next: { revalidate: 30 } };

export const metadata = {
  title: "Blog",
  description: BLOG_INDEX.intro,
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const filters = await searchParams;
  const query = (filters.q ?? "").trim();
  const activeCategory = (filters.category ?? "").trim();
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  const categories = Array.from(
    new Set(posts.flatMap((post) => (post.categories ?? []).filter(Boolean) as string[])),
  ).sort((a, b) => a.localeCompare(b));
  const normalizedQuery = query.toLowerCase();
  const visiblePosts = posts.filter((post) => {
    const postCategories = (post.categories ?? []).filter(Boolean) as string[];
    const matchesCategory = !activeCategory || postCategories.includes(activeCategory);
    const matchesQuery =
      !normalizedQuery ||
      post.title?.toLowerCase().includes(normalizedQuery) ||
      post.excerpt?.toLowerCase().includes(normalizedQuery) ||
      postCategories.some((category) => category.toLowerCase().includes(normalizedQuery));
    return matchesCategory && matchesQuery;
  });
  const featured = visiblePosts[0];
  const latest = visiblePosts.slice(1);

  return (
    <main className="gd blog blog-index">
      {/* ── Journal header ── */}
      <section className="blog-head">
        <div className="blog-head__rings" aria-hidden="true" />
        <div className="container blog-head__inner">
          <Reveal>
            <span className="blog-head__kicker">{BLOG_INDEX.kicker}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="blog-head__title">{BLOG_INDEX.title}</h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="blog-head__intro">{BLOG_INDEX.intro}</p>
          </Reveal>
          <Reveal delay={3}>
            <form className="blog-search" action="/blog">
              <label className="sr-only" htmlFor="blog-search">{BLOG_INDEX.searchLabel}</label>
              <input id="blog-search" name="q" defaultValue={query} placeholder={BLOG_INDEX.searchPlaceholder} />
              {activeCategory ? <input type="hidden" name="category" value={activeCategory} /> : null}
              <button type="submit" aria-label={BLOG_INDEX.searchLabel}><Search aria-hidden="true" /></button>
            </form>
          </Reveal>
        </div>
      </section>

      {posts.length > 0 ? (
        <nav className="blog-filters" aria-label="Article categories">
          <div className="container blog-filters__track">
            <Link className={!activeCategory ? "is-active" : ""} href={query ? { pathname: "/blog", query: { q: query } } : "/blog"}>
              {BLOG_INDEX.allCategories}<span>{posts.length}</span>
            </Link>
            {categories.map((category) => {
              const count = posts.filter((post) => post.categories?.includes(category)).length;
              return (
                <Link
                  key={category}
                  className={activeCategory === category ? "is-active" : ""}
                  href={{ pathname: "/blog", query: { ...(query ? { q: query } : {}), category } }}
                >
                  <i aria-hidden="true" />{category}<span>{count}</span>
                </Link>
              );
            })}
          </div>
        </nav>
      ) : null}

      {posts.length === 0 ? (
        <section className="container blog-empty">
          <h2 className="gd-display">{BLOG_INDEX.emptyTitle}</h2>
          <p>{BLOG_INDEX.emptyBody}</p>
        </section>
      ) : visiblePosts.length === 0 ? (
        <section className="container blog-empty">
          <h2>{BLOG_INDEX.noResultsTitle}</h2>
          <p>{BLOG_INDEX.noResultsBody}</p>
          <Link className="ag-btn" href="/blog">{BLOG_INDEX.clearFilters}</Link>
        </section>
      ) : (
        <>
          <section className="container blog-featured-wrap">
            <div className="blog-section-head blog-section-head--featured">
              <span className="blog-section-head__kicker">{BLOG_INDEX.featuredLabel}</span>
              <span className="blog-rule" />
            </div>
            <FeaturedPost post={featured} />
          </section>
          {latest.length ? <section className="container blog-latest">
          <Reveal className="blog-section-head">
            <span className="blog-section-head__kicker">{BLOG_INDEX.latestLabel}</span>
            <span className="blog-rule" />
            <span className="blog-section-head__count">
              {latest.length} {latest.length === 1 ? BLOG_INDEX.articleLabel : BLOG_INDEX.articlesLabel}
            </span>
          </Reveal>
          <div className={`blog-grid${latest.length === 1 ? " blog-grid--solo" : ""}`}>
            {latest.map((post, i) => (
              <Reveal
                key={post._id}
                delay={(i % 3) + 1}
                className="blog-grid__item"
              >
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </section> : null}
        </>
      )}
    </main>
  );
}
