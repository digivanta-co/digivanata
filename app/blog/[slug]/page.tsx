import { PortableText, defineQuery } from "next-sanity";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/sanity/client";
import { urlForImage } from "@/sanity/image";
import { Clock, Facebook, LinkedIn, Mail, Twitter } from "@/components/ui/Icons";
import { CtaRibbon } from "@/components/design/primitives";
import { portableComponents } from "@/components/blog/portable";
import TocHighlight from "@/components/blog/TocHighlight";
import AiSummary from "@/components/blog/AiSummary";
import { blogPostHref, formatDate, readingTime, titleInitial, BLOG_ARTICLE } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site-data";

const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    publishedAt,
    excerpt,
    mainImage,
    body,
    "author": author->{name, image, bio},
    "categories": categories[]->title
  }`
);

const options = { next: { revalidate: 30 } };

type PortableHeading = {
  _type?: string;
  style?: string;
  children?: { text?: string }[];
};

function headingId(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

function articleHeadings(body: unknown) {
  if (!Array.isArray(body)) return [];
  return (body as PortableHeading[])
    .filter((block) => block?._type === "block" && block.style === "h2")
    .map((block) => (block.children ?? []).map((child) => child.text ?? "").join(" ").trim())
    .filter(Boolean)
    .map((text) => ({ text, id: headingId(text) }));
}

async function fetchPost(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  const post = await client.fetch(POST_QUERY, { slug: cleanSlug }, options);

  // Support older CMS entries whose slug was saved with surrounding slashes.
  return post ?? client.fetch(POST_QUERY, { slug: `/${cleanSlug}/` }, options);
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return {};
  const ogImage = post.mainImage?.asset
    ? urlForImage(post.mainImage).width(1200).height(630).fit("crop").url()
    : undefined;
  return {
    title: post.title || undefined,
    description: post.excerpt || undefined,
    openGraph: ogImage
      ? { title: post.title || undefined, description: post.excerpt || undefined, images: [ogImage] }
      : undefined,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) return notFound();

  const cats = (post.categories ?? []).filter(Boolean) as string[];
  const mins = readingTime(post.body);
  const headings = articleHeadings(post.body);
  const cover = post.mainImage?.asset
    ? urlForImage(post.mainImage.asset).width(1600).auto("format").url()
    : null;
  const authorImg = post.author?.image?.asset
    ? urlForImage(post.author.image).width(160).height(160).fit("crop").url()
    : null;
  const articleUrl = `${SITE_URL}${blogPostHref(slug)}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(post.title || "");

  return (
    <main className="gd blog">
      <article className="blog-article">
        <div className="container blog-article__layout">
          {headings.length ? (
            <aside className="blog-article__rail">
              <TocHighlight />
              <div className="blog-article__toc">
                <span className="blog-article__toc-label">{BLOG_ARTICLE.contentsLabel}</span>
                {headings.slice(0, 8).map((heading, index) => (
                  <a href={`#${heading.id}`} key={heading.id}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {heading.text}
                  </a>
                ))}
              </div>
            </aside>
          ) : null}

          <div className="blog-article__content">
            {/* ── Article header ── */}
            <header className="blog-article__head">
              <nav className="blog-article__breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">{BLOG_ARTICLE.homeLabel}</Link><span>/</span>
                <Link href="/blog">{BLOG_ARTICLE.blogLabel}</Link><span>/</span>
                {cats[0] ? <><span>{cats[0]}</span><span>/</span></> : null}
                <span aria-current="page">{post.title}</span>
              </nav>

              <div className="blog-article__eyebrow">
                <span>{cats[0] || BLOG_ARTICLE.blogLabel}</span>
                <span aria-hidden="true">•</span>
                <span>{mins} min read</span>
              </div>

              <h1 className="blog-article__title">
                <Link href={blogPostHref(slug)}>{post.title}</Link>
              </h1>

              <div className="blog-article__meta">
                <div className="blog-article__author-block">
                  <span className="blog-byline">
                    {authorImg ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="blog-byline__avatar" src={authorImg} alt={post.author?.name || ""} />
                    ) : (
                      <span className="blog-byline__avatar blog-byline__avatar--ph" aria-hidden="true">
                        {titleInitial(post.author?.name)}
                      </span>
                    )}
                    <span>{post.author?.name || "Digivanta Team"}</span>
                  </span>
                  <span className="blog-article__date"><Clock />{formatDate(post.publishedAt)}</span>
                </div>
                <div className="blog-share" aria-label={BLOG_ARTICLE.shareLabel}>
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label={`${BLOG_ARTICLE.shareLabel} Facebook`}><Facebook /></a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`} target="_blank" rel="noreferrer" aria-label={`${BLOG_ARTICLE.shareLabel} X`}><Twitter /></a>
                  <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noreferrer" aria-label={`${BLOG_ARTICLE.shareLabel} LinkedIn`}><LinkedIn /></a>
                  <a href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`} aria-label={`${BLOG_ARTICLE.shareLabel} email`}><Mail /></a>
                </div>
              </div>
            </header>

            <AiSummary title={post.title || ""} url={articleUrl} summary={post.excerpt} />

            {/* ── Cover ── */}
            {cover ? (
              <figure className="blog-article__cover">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={cover} alt={post.mainImage?.alt || post.title || ""} />
              </figure>
            ) : (
              <span className="blog-divider" />
            )}

            {/* ── Body ── */}
            <div className="blog-prose">
              {Array.isArray(post.body) ? (
                <PortableText value={post.body} components={portableComponents} />
              ) : null}
              <aside className="blog-author-card" aria-label={BLOG_ARTICLE.authorCardLabel}>
                {authorImg ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img className="blog-author-card__avatar" src={authorImg} alt={post.author?.name || ""} />
                ) : (
                  <span className="blog-author-card__avatar blog-author-card__avatar--ph" aria-hidden="true">
                    {titleInitial(post.author?.name)}
                  </span>
                )}
                <div>
                  <span className="blog-author-card__label">{BLOG_ARTICLE.writtenBy}</span>
                  <h2>{post.author?.name || BLOG_ARTICLE.defaultAuthor}</h2>
                  {post.author?.bio ? <p>{post.author.bio}</p> : null}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </article>

      <div className="blog-cta-wrap">
        <CtaRibbon text={BLOG_ARTICLE.ctaText} cta={BLOG_ARTICLE.ctaButton} href={BLOG_ARTICLE.ctaHref} />
      </div>
    </main>
  );
}
