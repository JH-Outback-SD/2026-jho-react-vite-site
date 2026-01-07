export default function DonatePage() {
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
              // DONATE
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-gray-100">
              Your generous donation helps us transform lives, strengthen families, and build
              stronger communities throughout San Diego County.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Parent Organization Notice */}
          <div className="mb-12 rounded-lg border-l-4 border-accent bg-red-50 p-6">
            <div className="flex">
              <div className="shrink-0">
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
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-primary">
                  About Our Donation Process
                </h3>
                <p className="mt-2 text-gray-700">
                  JH Outback San Diego is part of the JH Outback family of organizations. All
                  donations are securely processed through our parent organization's donation
                  platform. This ensures your contribution is handled safely and that you receive
                  proper tax documentation for your records.
                </p>
              </div>
            </div>
          </div>

          {/* Donation Instructions */}
          <div className="rounded-lg bg-gray-50 p-8 shadow-md">
            <h2 className="font-heading text-2xl font-bold text-primary">
              How to Donate to Outback San Diego
            </h2>
            <p className="mt-4 text-gray-600">
              Follow these simple steps to make your donation:
            </p>

            <ol className="mt-6 space-y-6">
              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  1
                </span>
                <div>
                  <h3 className="font-semibold text-primary">
                    Click the donation button below
                  </h3>
                  <p className="mt-1 text-gray-600">
                    You'll be taken to our secure donation page hosted by RaiseDonors.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  2
                </span>
                <div>
                  <h3 className="font-semibold text-primary">
                    Select "Outback San Diego" from the designation dropdown
                  </h3>
                  <p className="mt-1 text-gray-600">
                    On the donation form, you'll see a dropdown menu labeled "Designation" or
                    "Project". Select <strong>"Outback San Diego"</strong> to ensure your gift
                    supports our local San Diego ministry.
                  </p>
                  <div className="mt-3 rounded-md bg-white p-4 border border-gray-200">
                    <p className="text-sm text-gray-500">Look for:</p>
                    <div className="mt-2 flex items-center gap-2">
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="font-medium text-primary">
                        Designation: Outback San Diego
                      </span>
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  3
                </span>
                <div>
                  <h3 className="font-semibold text-primary">Enter your donation amount</h3>
                  <p className="mt-1 text-gray-600">
                    Choose a preset amount or enter a custom amount. You can also set up
                    recurring monthly donations to provide ongoing support.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  4
                </span>
                <div>
                  <h3 className="font-semibold text-primary">
                    Complete your payment information
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Fill in your billing details and payment method. You can pay by credit card
                    or bank transfer. All transactions are securely processed.
                  </p>
                </div>
              </li>
            </ol>

            {/* Donate Button */}
            <div className="mt-10 text-center">
              <a
                href="https://raisedonors.com/outback/city-giving"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#BC2931] inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
              >
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                Donate Now
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
              <p className="mt-3 text-sm text-gray-500">
                Opens in a new tab on raisedonors.com
              </p>
            </div>
          </div>

          {/* Tax Info */}
          <div className="mt-12 rounded-lg bg-primary p-8 ">
            <h3 className="font-heading text-xl font-bold">Tax-Deductible Giving</h3>
            <p className="mt-3 ">
              JH Outback is a registered 501(c)(3) nonprofit organization. Your donation is
              tax-deductible to the fullest extent allowed by law. You will receive a receipt
              via email for your records after completing your donation.
            </p>
          </div>

          {/* Contact */}
          <div className="mt-12 text-center">
            <h3 className="font-heading text-xl font-bold text-primary">
              Questions About Donating?
            </h3>
            <p className="mt-3 text-gray-600">
              If you have any questions or need assistance with your donation, please don't
              hesitate to reach out to us.
            </p>
            <a
              href="mailto:jhoutbacksd@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-accent hover:text-accent/80 hover:underline"
            >
              <svg
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              jhoutbacksd@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
