import { Link } from 'react-router-dom'

const events = [
  {
    id: 1,
    title: 'Fall 2025 Couples Retreat',
    subtitle: '@ The OAKS',
    date: 'September 5 - 7',
    description:
      'JH Outback is an environment of adventure where lives are transformed by developing a daily strategy for life purpose. Spend a fun-filled weekend together with your loved one in an unfamiliar environment while enjoying outdoor activities, fellowship, date nights and great meals.',
    image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&h=400&fit=crop',
    ctaText: 'Learn more',
    ctaLink: '#',
  },
  {
    id: 2,
    title: 'SFC JH Outback 1-DAY',
    subtitle: '@ The OAKS',
    date: 'Monday Sept. 8, 2025',
    description:
      'JH Outback is an environment of adventure where lives are transformed by developing a daily strategy for life purpose. Spend a powerful, fun-filled day with your loved ones in an unfamiliar environment: enjoy outdoor activities, engaging skills, and great music. All planned to make unforgettable daily memories!',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop',
    ctaText: 'Details coming soon...',
    ctaLink: '#',
    comingSoon: true,
  },
]

export default function EventsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://jhoutback.com/wp-content/uploads/2022/08/JHO-home-support-link.jpg"
            alt=""
            className="size-full object-cover object-bottom"
          />
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#213a86]/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-sans text-4xl font-bold text-gray-50 sm:text-5xl">
              // EVENTS
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-gray-100">
              JH Outback exists to strengthen families, build stronger relationships, and inspire deeper connections with God and each other. Through our impactful
              weekend retreats, we create life-changing experiences where individuals and families can learn to live with purpose, foster open communication, and grow
              together in faith.
            </p>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {events.map((event) => (
              <div
                key={event.id}
                className="grid items-center gap-8 lg:grid-cols-2"
              >
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-80 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="font-heading text-3xl font-bold text-white">
                      {event.title.split(' ').slice(0, -1).join(' ')}
                    </div>
                    <div className="font-heading text-2xl font-bold text-teal-light">
                      {event.title.split(' ').slice(-1)}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 text-sm font-medium text-accent">
                    {event.subtitle}
                  </div>
                  <h2 className="text-2xl font-bold text-primary">
                    {event.title}
                  </h2>
                  <p className="mt-1 text-lg font-medium text-primary">
                    {event.date}
                  </p>
                  <p className="mt-4 text-gray-600">{event.description}</p>

                  {event.comingSoon ? (
                    <button
                      disabled
                      className="mt-6 inline-block rounded-md bg-gray-300 px-6 py-2 text-sm font-medium text-gray-600 cursor-not-allowed"
                    >
                      {event.ctaText}
                    </button>
                  ) : (
                    <Link
                      to={event.ctaLink}
                      className="mt-6 inline-block rounded-md bg-accent px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                    >
                      {event.ctaText}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
