import { useParams, Link } from 'react-router-dom'
import { getBlogPost, blogPostsMeta } from '../../data/blog'

export default function BlogArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getBlogPost(slug) : null

  // Get related posts (same category, excluding current)
  const relatedPosts = article
    ? blogPostsMeta
        .filter((post) => post.category === article.category && post.slug !== article.slug)
        .slice(0, 3)
    : []

  if (!article) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary">Article Not Found</h1>
          <p className="mt-2 text-gray-600">
            The article you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/blog"
            className="mt-4 inline-flex items-center text-accent hover:underline"
          >
            <svg className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#213a86] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Category Badge */}
            <span className="inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-medium text-white">
              {article.category}
            </span>

            <h1 className="mt-4 font-sans text-4xl font-bold text-gray-50 sm:text-5xl">
              // {article.title}
            </h1>

            {/* Meta info */}
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-200">
              <time dateTime={article.publishDate}>
                {new Date(article.publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{article.author}</span>
            </div>

            {article.subtitle && (
              <div className="mx-auto mt-8 max-w-2xl">
                <div className="overflow-hidden rounded-lg bg-white/10 p-8 text-center">
                  <p className="text-lg text-gray-100">{article.subtitle}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {article.featuredImage && (
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="-mt-8 overflow-hidden rounded-lg shadow-xl">
            <img
              src={article.featuredImage}
              alt={article.title}
              className="h-64 w-full object-cover md:h-96"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Article content */}
        <article
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t bg-gray-50 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-primary">Related Articles</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={
                        post.featuredImage ||
                        'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop'
                      }
                      alt={post.title}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      {new Date(post.publishDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center text-accent hover:underline">
          <svg className="mr-2 size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>
      </section>
    </div>
  )
}
