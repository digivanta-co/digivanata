import Link from 'next/link'
import {defineQuery} from 'next-sanity'
import {client} from '@/sanity/client'
import {urlForImage} from '@/sanity/image'

const POSTS_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage,
    "authorName": author->name
  }`
)

const options = {next: {revalidate: 30}}

export const metadata = {
  title: 'Blog | Digivanta',
}

export default async function BlogIndexPage() {
  const posts = await client.fetch(POSTS_QUERY, {}, options)

  return (
    <main style={{maxWidth: 720, margin: '0 auto', padding: '3rem 1.25rem'}}>
      <h1 style={{fontSize: '2rem', marginBottom: '2rem'}}>Blog</h1>

      {posts.length === 0 ? (
        <p>No posts yet. Add one in the Studio, then refresh.</p>
      ) : (
        <ul style={{listStyle: 'none', padding: 0, display: 'grid', gap: '2rem'}}>
          {posts.map((post) => (
            <li key={post._id}>
              <Link href={`/blog/${post.slug?.current}`} style={{textDecoration: 'none', color: 'inherit'}}>
                {post.mainImage?.asset ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={urlForImage(post.mainImage).width(720).height(360).fit('crop').url()}
                    alt={post.mainImage.alt || post.title || ''}
                    style={{width: '100%', borderRadius: 8, marginBottom: '0.75rem'}}
                  />
                ) : null}
                <h2 style={{fontSize: '1.35rem', margin: '0 0 0.35rem'}}>{post.title}</h2>
                {post.publishedAt ? (
                  <p style={{margin: '0 0 0.5rem', opacity: 0.6, fontSize: '0.85rem'}}>
                    {new Date(post.publishedAt).toLocaleDateString()}
                    {post.authorName ? ` · ${post.authorName}` : ''}
                  </p>
                ) : null}
                {post.excerpt ? <p style={{margin: 0, opacity: 0.8}}>{post.excerpt}</p> : null}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
