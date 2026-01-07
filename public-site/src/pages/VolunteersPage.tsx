export default function VolunteersPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://jhoutback.com/wp-content/uploads/2022/11/outback-university-slider-09.jpg"
            alt=""
            className="size-full object-cover object-[center_30%]"
          />
          {/* Blue overlay */}
          <div className="absolute inset-0 bg-[#213a86]/85" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-sans text-4xl font-bold text-gray-50 sm:text-5xl">
              // VOLUNTEER
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-gray-100">
              Join our team and make a difference in the lives of youth and families across San
              Diego County. Whether you have a few hours or a few days, there's a place for you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Intro */}
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-primary">
              Make an Impact in Your Community
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our events run 1 to 3 days and offer a variety of volunteer opportunities. No matter
              your skill level or availability, we have meaningful ways for you to get involved.
            </p>
          </div>

          {/* Volunteer Opportunities */}
          <div className="space-y-8">
            {/* Event Helper */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="border-l-4 border-teal p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-teal/20">
                    <svg
                      className="size-6 text-teal"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Event Helper</h3>
                    <p className="mt-2 text-gray-600">
                      Perfect for first-time volunteers or those with limited availability. Help
                      with setup, registration, activities, meals, and cleanup during our events.
                      You'll work alongside experienced team members and make an immediate impact.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        No prior experience required
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Flexible time commitment (half-day to full event)
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Training provided on-site
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Leader */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="border-l-4 border-accent p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <svg
                      className="size-6 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Activity Leader</h3>
                    <p className="mt-2 text-gray-600">
                      Take on a more active role by leading specific activities or small groups
                      during events. You'll guide participants through games, discussions, team
                      challenges, and other engaging experiences.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Some experience with youth or group leadership helpful
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Commitment to full event duration (1-3 days)
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Pre-event training session included
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Planner */}
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md">
              <div className="border-l-4 border-primary p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
                    <svg
                      className="size-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">Event Planner</h3>
                    <p className="mt-2 text-gray-600">
                      Help shape our events from the ground up. Work with our core team on
                      logistics, coordination, scheduling, and program development. This role
                      involves planning meetings before the event and oversight during the event.
                    </p>
                    <ul className="mt-4 space-y-2 text-gray-600">
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Experience in event planning or project management preferred
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Commitment to planning meetings + event days
                      </li>
                      <li className="flex items-center gap-2">
                        <svg
                          className="size-5 text-accent"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        Opportunity to shape program direction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sign Up CTA */}
          <div className="mt-12 rounded-lg bg-primary p-8 text-center text-white">
            <h3 className="font-heading text-2xl font-bold">Ready to Get Involved?</h3>
            <p className="mx-auto mt-3 max-w-xl">
              Fill out our volunteer interest form and we'll reach out with upcoming opportunities
              that match your availability and interests.
            </p>
            <div className="mt-8">
              <a
                href="https://forms.google.com/your-volunteer-form"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
              >
                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Sign Up to Volunteer
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="mt-3 text-sm text-white/70">Opens Google Form in a new tab</p>
            </div>
          </div>

          {/* What to Expect */}
          <div className="mt-12 rounded-lg bg-gray-50 p-8 shadow-md">
            <h3 className="font-heading text-xl font-bold text-primary">What to Expect</h3>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Flexible Scheduling</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    Events typically run 1-3 days. Choose the time commitment that works for you.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Training Provided</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    All volunteers receive the training they need to succeed in their role.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Supportive Team</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    You'll never be alone. Work alongside experienced volunteers and staff.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-white">
                  <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Real Impact</h4>
                  <p className="mt-1 text-sm text-gray-600">
                    See the difference you make in the lives of youth and families firsthand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <h3 className="font-heading text-xl font-bold text-primary">Questions?</h3>
            <p className="mt-3 text-gray-600">
              Have questions about volunteering or want to learn more about our upcoming events?
              We'd love to hear from you.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-accent">
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <img
                src="/images/email-jhoutbacksd-gmail-300x48.png"
                alt="Contact email"
                className="h-10 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
