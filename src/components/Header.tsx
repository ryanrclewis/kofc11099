'use client';

import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  name: string;
  href: string;
  children?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'About',
    href: '/about-us',
    children: [
      { name: 'About Council', href: '/about-us' },
      { name: 'Leadership & Officers', href: '/officers' },
      { name: 'Officer Duties', href: '/officer-duties' },
      { name: 'Frequently Asked Questions', href: '/faq' },
      { name: 'Helpful Links & Resources', href: '/links' },
    ],
  },
  {
    name: 'Programs & Events',
    href: '/upcoming-events',
    children: [
      { name: 'Upcoming Events List', href: '/upcoming-events' },
      { name: 'Volunteer Sign-up Opportunities', href: '/volunteer-opportunities' },
      { name: 'Annual Golf Outing', href: '/annual-golf-outing' },
      { name: 'Soccer Challenge', href: '/soccer-challenge' },
      { name: 'Free Throw Challenge', href: '/free-throw-challenge' },
      { name: 'Spelling Bee', href: '/spelling-bee' },
      { name: 'Catholic Essay Contest', href: '/catholic-essay-contest' },
      { name: 'Keep Christ in Christmas Contest', href: '/keep-christ-in-christmas-poster-contest' },
    ],
  },
  {
    name: 'Recognition',
    href: '/recognition',
    children: [
      { name: 'Awards Overview', href: '/recognition' },
      { name: 'Knight of the Month', href: '/knight-of-the-month' },
      { name: 'Family of the Month', href: '/family-of-the-month' },
      { name: 'Knight of the Year', href: '/knight-of-the-year' },
      { name: 'Family of the Year', href: '/family-of-the-year' },
    ],
  },
  {
    name: 'News & Media',
    href: '/newsletter',
    children: [
      { name: 'Monthly Newsletters', href: '/newsletter' },
      { name: 'Photo Gallery', href: '/photos' },
      { name: 'Event Calendar', href: '/calendar' },
      { name: 'Archive 2019', href: '/november-2018' },
      { name: 'Archive 2018', href: '/june-2018' },
      { name: 'Archive 2017', href: '/november-2017' },
    ],
  },
  {
    name: 'Join Us',
    href: '/membership',
    children: [
      { name: 'Become a Knight', href: '/membership' },
      { name: 'Contact Council', href: '/contact-us' },
    ],
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 glass-header text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo & Branding */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <span className="text-lg font-bold tracking-wider text-accent sm:text-xl uppercase font-serif">
                Knights of Columbus
              </span>
              <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
                Council #11099 • Lansing, MI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group py-2"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="flex items-center px-3 py-2 text-sm font-medium text-white/90 hover:text-accent transition duration-150 ease-in-out rounded-md hover:bg-white/5 cursor-pointer">
                    {item.name}
                    <svg
                      className="ml-1 h-4 w-4 fill-current text-white/70 group-hover:text-accent"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.52 7.2a.75.75 0 011.06.04L10 10.88l3.42-3.64a.75.75 0 111.08 1.04l-4 4.25a.75.75 0 01-1.08 0l-4-4.25a.75.75 0 01.04-1.06z" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-white/90 hover:text-accent transition duration-150 ease-in-out rounded-md hover:bg-white/5"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-1 w-56 rounded-md bg-white text-dark shadow-xl ring-1 ring-black/5 focus:outline-none transition-all duration-200">
                    <div className="py-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-dark hover:bg-primary-light hover:text-primary transition duration-150 ease-in-out"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-secondary-dark px-2 pt-2 pb-4">
          <div className="space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="block">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-white/95 hover:bg-white/5 hover:text-accent"
                    >
                      {item.name}
                      <svg
                        className={`h-5 w-5 transform transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="mt-1 space-y-1 pl-4 bg-black/10 rounded-md py-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block rounded-md px-3 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-accent"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white/95 hover:bg-white/5 hover:text-accent"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
