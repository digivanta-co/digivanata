import { defineQuery } from "next-sanity";
import { client } from "@/sanity/client";
import Reveal from "@/components/ui/Reveal";
import { Label } from "@/components/design/primitives";
import FeaturedPost from "@/components/blog/FeaturedPost";
import BlogCard from "@/components/blog/BlogCard";
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

export default async function BlogIndexPage() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);
  const [featured, ...rest] = posts;

  return (
    <main className="gd blog">
      {/* ── Journal header ── */}
      <section className="blog-head">
        <div className="container">
          <Reveal>
            <Label>{BLOG_INDEX.kicker}</Label>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="blog-head__title gd-display">
              <span className="gd-grad">{BLOG_INDEX.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="blog-head__intro">{BLOG_INDEX.intro}</p>
          </Reveal>
        </div>
      </section>

      {!featured ? (
        <section className="container blog-empty">
          <h2 className="gd-display">{BLOG_INDEX.emptyTitle}</h2>
          <p>{BLOG_INDEX.emptyBody}</p>
        </section>
      ) : (
        <>
          {/* ── Featured ── */}
          <section className="container">
            <Reveal className="blog-section-head">
              <span className="blog-section-head__kicker">{BLOG_INDEX.featuredLabel}</span>
              <span className="blog-rule" />
            </Reveal>
            <Reveal delay={1}>
              <FeaturedPost post={featured} />
            </Reveal>
          </section>

          {/* ── Grid of the rest ── */}
          {rest.length > 0 && (
            <section className="container blog-latest">
              <Reveal className="blog-section-head">
                <span className="blog-section-head__kicker">{BLOG_INDEX.latestLabel}</span>
                <span className="blog-rule" />
              </Reveal>
              <div className="blog-grid">
                {rest.map((post, i) => (
                  <Reveal key={post._id} delay={(i % 3) + 1}>
                    <BlogCard post={post} />
                  </Reveal>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
}
