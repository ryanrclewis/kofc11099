'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white/80 border-t border-white/10 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Col 1: Council Branding */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold font-serif tracking-wide uppercase">
              Council #11099
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              A brotherhood of practical Catholic men who worship together, support our parish, and serve the Lansing community.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/KnightsofColumbus11099/"
                target="_blank"
                rel="noreferrer"
                className="text-white/60 hover:text-accent transition duration-150"
                aria-label="Facebook Page"
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-accent transition duration-150">
                  About Our Council
                </Link>
              </li>
              <li>
                <Link href="/upcoming-events" className="hover:text-accent transition duration-150">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/volunteer-opportunities" className="hover:text-accent transition duration-150">
                  Volunteer Sign-up
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-accent transition duration-150">
                  Calendar
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-accent transition duration-150">
                  Become a Knight
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Resources & Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/newsletter" className="hover:text-accent transition duration-150">
                  Monthly Newsletter
                </Link>
              </li>
              <li>
                <Link href="/photos" className="hover:text-accent transition duration-150">
                  Photo Galleries
                </Link>
              </li>
              <li>
                <Link href="/officers" className="hover:text-accent transition duration-150">
                  Council Officers
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-accent transition duration-150">
                  External Links
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-accent transition duration-150">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter minimal */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Monthly Newsletter
            </h4>
            <p className="text-xs text-white/60 mb-3 leading-relaxed">
              Subscribe to stay updated with our latest newsletters and upcoming volunteer activities.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-md border-0 bg-white/10 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/40 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-md bg-accent hover:bg-accent-dark px-3 py-2 text-sm font-semibold text-dark shadow-sm transition duration-150 uppercase tracking-wider cursor-pointer"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/40">
          <p>
            &copy; {currentYear} Knights of Columbus Council #11099. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Designed and engineered by{' '}
            <a href="http://www.archangel-laboratories.com" target="_blank" rel="noreferrer" className="hover:text-accent transition">
              Archangel Laboratories
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
