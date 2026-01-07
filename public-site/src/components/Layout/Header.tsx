import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Groups', href: '/groups' },
  { name: 'Events', href: '/events' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Donate', href: '/donate' },
  // { name: 'Blog', href: '/blog' }
] as const

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-40 bg-[#0b1942] shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img
            src="/jhosd-white-no-tent.png"
            alt="JH Outback San Diego"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => {
            const isExternal = 'external' in item && item.external
            const isActive = !isExternal && location.pathname === item.href

            if (isExternal) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 text-base font-medium text-white transition-colors hover:text-[#8bb6c3]"
                >
                  {item.name}
                </a>
              )
            }

            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base transition-colors ${
                  isActive
                    ? 'rounded-[10px] bg-[#213a86] px-[30px] py-[10px] font-bold text-white'
                    : 'px-3 py-1 font-medium text-white hover:text-[#8bb6c3]'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="rounded-md p-2 text-white hover:bg-white/10 md:hidden"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-[#182B65] shadow-xl transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="rounded-md p-2 text-white hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col px-4 py-2">
            {navigation.map((item) => {
              const isExternal = 'external' in item && item.external
              const isActive = !isExternal && location.pathname === item.href

              if (isExternal) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-white/10 px-4 py-4 text-lg font-medium text-white transition-colors hover:text-[#8bb6c3]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`border-b border-white/10 py-4 text-lg transition-colors ${
                    isActive
                      ? 'rounded-[10px] bg-[#213a86] px-4 font-bold text-white'
                      : 'px-4 font-medium text-white hover:text-[#8bb6c3]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  )
}
