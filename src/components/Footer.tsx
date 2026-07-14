'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b183d] text-white/70 border-t-4 border-[#f7b718] mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        
        {/* Top Section: Logo & Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-10 border-b border-white/10 gap-6">
          <div className="flex items-center gap-3">
            <img
              src="https://files.kofc.org/images/assets/kofc_emblem.svg/Zz0yY2JlNjVjNDc3N2QxMWVmOTg2OWEyYmEzM2I0OGRiYg=="
              alt="Knights of Columbus Emblem"
              className="h-12 w-auto"
            />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-wider text-white uppercase font-serif">
                Knights of Columbus
              </span>
              <span className="text-xxs font-extrabold tracking-widest text-[#f7b718] uppercase">
                Council #11099 • Msgr. John A. Gabriels
              </span>
            </div>
          </div>
          
          {/* Social Links & Info */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold text-white/50 uppercase tracking-widest hidden sm:inline">Connect with us:</span>
            <a
              href="https://www.facebook.com/KnightsofColumbus11099/"
              target="_blank"
              rel="noreferrer"
              className="p-2 bg-white/5 hover:bg-[#f7b718]/20 rounded-full text-white/60 hover:text-[#f7b718] transition duration-150"
              aria-label="Facebook Page"
            >
              <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Middle Section: Organized links matching main site IA */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10">

          {/* Col 1: Who We Are */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-white/5 pb-2">
              Who We Are
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us" className="hover:text-[#f7b718] transition">
                  Overview & History
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-[#f7b718] transition">
                  Member Benefits
                </Link>
              </li>
              <li>
                <Link href="/about-us#mission" className="hover:text-[#f7b718] transition">
                  Our Mission & Story
                </Link>
              </li>
              <li>
                <Link href="/about-us#founder" className="hover:text-[#f7b718] transition">
                  Blessed Michael McGivney
                </Link>
              </li>
              <li>
                <Link href="/officers" className="hover:text-[#f7b718] transition">
                  Council Officers
                </Link>
              </li>
              <li>
                <Link href="/officer-duties" className="hover:text-[#f7b718] transition">
                  Officer Duties
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: What We Do */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-white/5 pb-2">
              What We Do
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about-us#faith" className="hover:text-[#f7b718] transition">
                  Faith Formation
                </Link>
              </li>
              <li>
                <Link href="/upcoming-events#charity" className="hover:text-[#f7b718] transition">
                  Charity & Programs
                </Link>
              </li>
              <li>
                <Link href="/why-be-a-knight" className="hover:text-[#f7b718] transition">
                  Insurance & Protection
                </Link>
              </li>
              <li>
                <Link href="/annual-golf-outing" className="hover:text-[#f7b718] transition">
                  Annual Golf Outing
                </Link>
              </li>
              <li>
                <Link href="/soccer-challenge" className="hover:text-[#f7b718] transition">
                  Youth Challenges
                </Link>
              </li>
              <li>
                <Link href="/catholic-essay-contest" className="hover:text-[#f7b718] transition">
                  Essay & Poster Contests
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Get Involved */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-white/5 pb-2">
              Get Involved
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/membership" className="hover:text-[#f7b718] transition">
                  Become a Knight
                </Link>
              </li>
              <li>
                <Link href="/volunteer-opportunities" className="hover:text-[#f7b718] transition">
                  Volunteer Sign-up
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-[#f7b718] transition">
                  Monthly Newsletter
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-[#f7b718] transition">
                  Event Calendar
                </Link>
              </li>
              <li>
                <Link href="/photos" className="hover:text-[#f7b718] transition">
                  Photo Galleries
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-[#f7b718] transition">
                  Contact Council
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter minimal sign-up */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-white/5 pb-2">
              Stay Informed
            </h4>
            <p className="text-xxs leading-relaxed text-white/50">
              Subscribe to stay updated with MSGR. John A. Gabriels Council newsletter and volunteer schedules.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}
              className="flex flex-col gap-2"
            >
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded bg-white/5 px-3 py-2 text-white border border-white/10 placeholder:text-white/30 focus:border-[#f7b718] text-xs outline-none transition"
              />
              <button
                type="submit"
                className="w-full rounded bg-[#f7b718] hover:bg-[#fcd56e] py-2 text-xs font-bold text-[#0d1f50] transition uppercase tracking-wider cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section: Copyrights & Attribution */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/40 gap-4">
          <div className="text-center sm:text-left space-y-1">
            <p>&copy; {currentYear} Knights of Columbus Council #11099. All rights reserved.</p>
            <p>The name and emblem of the Knights of Columbus are protected trademarks.</p>
          </div>
          <p className="text-center sm:text-right">
            Designed and engineered by{' '}
            <a href="http://www.archangel-laboratories.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#f7b718] transition">
              Archangel Laboratories
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
