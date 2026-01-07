import { Link } from 'react-router-dom'

const blogPosts = [
  {
    id: 'written-testimony',
    title: 'Written Testimony',
    excerpt:
      'Learn how to share your Christian testimony in 15 minutes or less. This is designed for new or experienced believers to share the life-changing power of your faith.',
    image: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=400&h=300&fit=crop',
    category: 'Testimony',
  },
  {
    id: 'wake-up-call-haggai',
    title: '"Now\'s Not the Time!" A Wake-Up Call from Haggai',
    excerpt:
      'Haggai asks God\'s people to reconsider their priorities: was it time to build their houses, Like the priorities of Haggai\'s day, our own empty distractions can hinder our walk with God.',
    image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=400&h=300&fit=crop',
    category: 'Bible Study',
  },
  {
    id: 'living-like-god-is-real',
    title: 'Living Like God Is Real',
    excerpt:
      'Join us for a two-week discussion on "Living Like God is Real" - a reflection on reading and experiencing God through reflective questions grounded in Scripture.',
    image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=400&h=300&fit=crop',
    category: 'Faith',
  },
  {
    id: 'book-of-james',
    title: 'The Book of James',
    excerpt:
      'Join us for a combined 10-day, 5-week journey through the book of James. Each week you\'ll spend just 15 minutes a day for five days diving into a book that speaks with purpose and direction.',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=300&fit=crop',
    category: 'Bible Study',
  },
  {
    id: 'east-county-mens-huddle',
    title: 'Stay Connected with the East County Men\'s Huddle Group!',
    excerpt:
      'Join the East County Men\'s Huddle Group for meaningful conversations, fellowship, and faith building. Sign up for our weekly newsletter to stay updated on the latest discussions!',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop',
    category: 'Groups',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#213a86] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-sans text-4xl font-bold text-gray-50 sm:text-5xl">
              // Blog
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-gray-100">
              Hey there, and welcome! This is your go-to spot for all things JH Outback San Diego—where faith, community, and adventures come together. Here you'll find
              updates on upcoming events, details on huddles and Bible studies, and plenty more to keep you connected. Whether you're looking for inspiration, fellowship,
              or just a good reason to get outdoors, we've got you covered. So grab a cup of coffee, settle in, and let's grow together!
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
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
                  <h3 className="text-lg font-bold text-primary group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
