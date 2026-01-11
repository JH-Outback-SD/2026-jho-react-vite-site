import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { blogPostsMeta } from '../../data/blog'
import { BLOG_CATEGORIES, type BlogCategory, type SortOption } from '../../types/blog'

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>('All')
  const [sortOption, setSortOption] = useState<SortOption>('date-desc')

  // Filter and sort posts
  const filteredPosts = useMemo(() => {
    let posts = [...blogPostsMeta]

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      posts = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      posts = posts.filter((post) => post.category === selectedCategory)
    }

    // Sort posts
    posts.sort((a, b) => {
      switch (sortOption) {
        case 'date-desc':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
        case 'date-asc':
          return new Date(a.publishDate).getTime() - new Date(b.publishDate).getTime()
        case 'title-asc':
          return a.title.localeCompare(b.title)
        case 'title-desc':
          return b.title.localeCompare(a.title)
        default:
          return 0
      }
    })

    return posts
  }, [searchQuery, selectedCategory, sortOption])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#213a86] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-sans text-4xl font-bold text-gray-50 sm:text-5xl">// Blog</h1>
            <p className="mx-auto mt-6 max-w-3xl text-gray-100">
              Hey there, and welcome! This is your go-to spot for all things JH Outback San
              Diego—where faith, community, and adventures come together. Here you'll find updates
              on upcoming events, details on huddles and Bible studies, and plenty more to keep you
              connected. Whether you're looking for inspiration, fellowship, or just a good reason
              to get outdoors, we've got you covered. So grab a cup of coffee, settle in, and let's
              grow together!
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="border-b bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 md:max-w-md">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="size-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as BlogCategory)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {BLOG_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>

              {/* Sort Options */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="date-desc">Newest First</option>
                <option value="date-asc">Oldest First</option>
                <option value="title-asc">Title (A-Z)</option>
                <option value="title-desc">Title (Z-A)</option>
              </select>
            </div>
          </div>

          {/* Active Filters / Results Count */}
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
            <span>
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
            </span>
            {(searchQuery || selectedCategory !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="ml-2 text-accent hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="py-12 text-center">
              <svg
                className="mx-auto size-16 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No articles found</h3>
              <p className="mt-2 text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        post.featuredImage ||
                        'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop'
                      }
                      alt={post.title}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
                      <time dateTime={post.publishDate}>
                        {new Date(post.publishDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
