'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

interface NavSection {
  title: string;
  links: NavLink[];
}

interface NavDropdown {
  name: string;
  sections: NavSection[];
}

const headerIA: NavDropdown[] = [
  {
    name: 'Who We Are',
    sections: [
      {
        title: 'Official Organization',
        links: [
          { name: 'Overview', href: '/about-us' },
          { name: 'Member Benefits', href: '/membership' },
          { name: 'Our Mission & Story', href: '/about-us#mission' },
          { name: 'Our History', href: '/about-us#history' },
          { name: 'Our Founder', href: '/about-us#founder' }
        ]
      },
      {
        title: 'Lansing Council 11099',
        links: [
          { name: 'Council Officers', href: '/officers' },
          { name: 'Officer Duties', href: '/officer-duties' },
          { name: 'Frequently Asked Questions', href: '/faq' },
          { name: 'Resources & External Links', href: '/links' }
        ]
      }
    ]
  },
  {
    name: 'What We Do',
    sections: [
      {
        title: 'Faith & Charity Pillars',
        links: [
          { name: 'Faith Formation', href: '/about-us#faith' },
          { name: 'Charity & Programs', href: '/upcoming-events#charity' },
          { name: 'Insurance & Protection', href: '/why-be-a-knight' },
          { name: 'Financial Planning Seminar', href: '/free-financial-planning-seminar' }
        ]
      },
      {
        title: 'Active Council Contests & Events',
        links: [
          { name: 'Annual Golf Outing', href: '/annual-golf-outing' },
          { name: 'Youth Soccer Challenge', href: '/soccer-challenge' },
          { name: 'Free Throw Challenge', href: '/free-throw-challenge' },
          { name: 'Spelling Bee', href: '/spelling-bee' },
          { name: 'Catholic Essay Contest', href: '/catholic-essay-contest' },
          { name: 'Keep Christ in Christmas Poster', href: '/keep-christ-in-christmas-poster-contest' }
        ]
      }
    ]
  },
  {
    name: 'Get Involved',
    sections: [
      {
        title: 'Join & Support',
        links: [
          { name: 'Become a Knight', href: '/membership' },
          { name: 'Contact Council', href: '/contact-us' },
          { name: 'Find a Council (Supreme)', href: 'https://www.kofc.org/get-involved/find-a-council/', isExternal: true },
          { name: 'Find an Agent (Supreme)', href: 'https://www.kofc.org/get-involved/find-an-agent/', isExternal: true }
        ]
      },
      {
        title: 'Council Activities',
        links: [
          { name: 'Volunteer Opportunities', href: '/volunteer-opportunities' },
          { name: 'Monthly Newsletters', href: '/newsletter' },
          { name: 'Event Calendar', href: '/calendar' },
          { name: 'Photo Galleries', href: '/photos' }
        ]
      }
    ]
  }
];

interface SearchableItem {
  title: string;
  category: string;
  href: string;
}

const searchableItems: SearchableItem[] = [
  { title: 'Home', category: 'Pages', href: '/' },
  { title: 'About Our Council', category: 'Pages', href: '/about-us' },
  { title: 'Council Officers & Leadership', category: 'Pages', href: '/officers' },
  { title: 'Officer Duties & Descriptions', category: 'Pages', href: '/officer-duties' },
  { title: 'Volunteer Sign-up Opportunities', category: 'Pages', href: '/volunteer-opportunities' },
  { title: 'Upcoming Events List', category: 'Pages', href: '/upcoming-events' },
  { title: 'Annual Golf Outing', category: 'Pages', href: '/annual-golf-outing' },
  { title: 'Monthly Newsletters', category: 'Pages', href: '/newsletter' },
  { title: 'Event Calendar', category: 'Pages', href: '/calendar' },
  { title: 'Photo Gallery', category: 'Pages', href: '/photos' },
  { title: 'Frequently Asked Questions (FAQ)', category: 'Pages', href: '/faq' },
  { title: 'Helpful Links & Resources', category: 'Pages', href: '/links' },
  { title: 'Become a Knight / Membership Info', category: 'Pages', href: '/membership' },
  { title: 'Contact Council', category: 'Pages', href: '/contact-us' },
  { title: 'Why Be a Knight?', category: 'Articles', href: '/why-be-a-knight' },
  { title: 'Updates from the Grand Knight', category: 'Articles', href: '/updates-from-the-grand-knight' },
  { title: 'Free Financial Planning Seminar', category: 'Articles', href: '/free-financial-planning-seminar' },
  { title: 'Hello Brother Knights! (Play Ball)', category: 'Articles', href: '/play-ball' },
  { title: 'Youth Soccer Challenge', category: 'Contests', href: '/soccer-challenge' },
  { title: 'Free Throw Challenge', category: 'Contests', href: '/free-throw-challenge' },
  { title: 'Spelling Bee', category: 'Contests', href: '/spelling-bee' },
  { title: 'Catholic Essay Contest', category: 'Contests', href: '/catholic-essay-contest' },
  { title: 'Keep Christ in Christmas Poster Contest', category: 'Contests', href: '/keep-christ-in-christmas-poster-contest' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  // Search State
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close search dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    setSearchOpen(value.trim().length > 0);
  };

  const filteredItems = searchQuery.trim()
    ? searchableItems.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-50 bg-[#0d1f50] border-b-4 border-[#f7b718] text-white">
      {/* Top Header Bar */}
      <div className="bg-[#0b183d] text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white/60">
            Msgr. John A. Gabriels Council #11099
          </div>
          <div className="flex space-x-6 items-center">
            <Link href="/membership" className="text-white/80 hover:text-[#f7b718] font-semibold transition">
              Join
            </Link>
            <Link href="/contact-us" className="text-white/80 hover:text-[#f7b718] font-semibold transition">
              Donate
            </Link>
            {/* <a 
              href="https://www.kofc.org/en/safe-environment-program/index.html" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/80 hover:text-[#f7b718] font-semibold transition"
            >
              Safe Environment Program
            </a>
            <a 
              href="https://careers.kofc.org/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/80 hover:text-[#f7b718] font-semibold transition"
            >
              Careers
            </a>
            <a 
              href="https://www2.kofc.org/au/applicationportal/AuthorizeUser.action" 
              target="_blank" 
              rel="noreferrer" 
              className="text-white/80 hover:text-[#f7b718] font-semibold transition"
            >
              Sign In
            </a> */}
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo & Emblem Branding */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="https://files.kofc.org/images/assets/kofc_emblem.svg/Zz0yY2JlNjVjNDc3N2QxMWVmOTg2OWEyYmEzM2I0OGRiYg=="
                alt="Knights of Columbus Emblem"
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold tracking-wider text-[#f7b718] uppercase font-serif leading-tight">
                  Knights of Columbus
                </span>
                <span className="text-[10px] font-extrabold tracking-widest text-white/80 uppercase">
                  Council #11099 • Lansing, MI
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-2">
            {headerIA.map((dropdown) => (
              <div
                key={dropdown.name}
                className="relative group py-2"
                onMouseEnter={() => setActiveDropdown(dropdown.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  className={`flex items-center px-4 py-2 text-sm font-semibold rounded-md transition duration-150 ease-in-out cursor-pointer hover:bg-white/5 ${
                    activeDropdown === dropdown.name ? 'text-[#f7b718]' : 'text-white/90'
                  }`}
                >
                  {dropdown.name}
                  <svg
                    className={`ml-1.5 h-4 w-4 fill-current transition-transform duration-200 ${
                      activeDropdown === dropdown.name ? 'rotate-180 text-[#f7b718]' : 'text-white/60'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.52 7.2a.75.75 0 011.06.04L10 10.88l3.42-3.64a.75.75 0 111.08 1.04l-4 4.25a.75.75 0 01-1.08 0l-4-4.25a.75.75 0 01.04-1.06z" />
                  </svg>
                </button>

                {/* Dropdown Menu Container */}
                {activeDropdown === dropdown.name && (
                  <div className="absolute left-0 mt-1 w-[460px] rounded-lg bg-white text-[#0d1f50] shadow-2xl ring-1 ring-black/10 transition-all duration-200 p-6 grid grid-cols-2 gap-6 border-t-4 border-[#f7b718]">
                    {dropdown.sections.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b pb-1">
                          {section.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {section.links.map((link, lIdx) => (
                            <li key={lIdx}>
                              {link.isExternal ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="block text-sm font-semibold text-[#112866] hover:text-[#0277d9] transition py-1"
                                >
                                  {link.name} &nearr;
                                </a>
                              ) : (
                                <Link
                                  href={link.href}
                                  className="block text-sm font-semibold text-[#112866] hover:text-[#0277d9] transition py-1"
                                >
                                  {link.name}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Desktop Search Bar (Replaces Join Us Button) */}
            <div className="pl-4 relative" ref={searchRef}>
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.trim().length > 0 && setSearchOpen(true)}
                  placeholder="Search site..."
                  className="rounded-md bg-white/10 hover:bg-white/15 focus:bg-white focus:text-[#0d1f50] pl-9 pr-4 py-2 text-sm text-white placeholder-white/50 border border-white/20 focus:border-[#f7b718] outline-none transition w-48 focus:w-64"
                />
                <div className="absolute left-3 top-2.5 text-white/50 pointer-events-none focus-within:text-[#0d1f50]">
                  <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>

              {/* Desktop Search Results Dropdown */}
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-lg bg-white text-[#0d1f50] shadow-2xl ring-1 ring-black/10 p-4 max-h-96 overflow-y-auto border-t-4 border-[#f7b718] z-50">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100 mb-2">
                    <span className="text-xxs font-extrabold uppercase text-slate-400 tracking-wider">Search Results</span>
                    <span className="text-xxs font-bold text-[#f7b718] bg-[#f7b718]/10 px-2 py-0.5 rounded">{filteredItems.length} found</span>
                  </div>
                  {filteredItems.length > 0 ? (
                    <ul className="space-y-1">
                      {filteredItems.map((item, idx) => (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            onClick={() => setSearchOpen(false)}
                            className="block px-3 py-2 rounded hover:bg-slate-50 hover:text-[#0277d9] transition"
                          >
                            <div className="text-xs font-bold">{item.title}</div>
                            <div className="text-[9px] text-[#f7b718] font-bold uppercase tracking-wider mt-0.5">{item.category}</div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-center py-6 text-xs text-slate-400 font-semibold">
                      No results for &quot;{searchQuery}&quot;
                    </div>
                  )}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f7b718]"
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

      {/* Mobile Menu Dropdowns */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0b183d] px-4 py-4 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Mobile top-level links */}
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-b border-white/10 pb-3 text-xs text-white/60 font-semibold">
            <Link href="/membership" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Join</Link>
            <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Donate</Link>
          </div>

          {/* Mobile Search Bar (Replaces Join Us Button) */}
          <div className="relative pt-1" ref={mobileSearchRef}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search site..."
                className="w-full rounded-md bg-white/5 px-10 py-2.5 text-sm text-white placeholder-white/30 border border-white/10 focus:border-[#f7b718] outline-none transition"
              />
              <div className="absolute left-3.5 top-4.5 text-white/30 pointer-events-none">
                <svg className="h-4 w-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
            </div>

            {/* Mobile Search Results list */}
            {searchQuery.trim().length > 0 && (
              <div className="mt-2 bg-[#0d1f50] rounded-md border border-white/10 p-3 max-h-60 overflow-y-auto">
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest pb-1 border-b border-white/5 mb-1.5 flex justify-between">
                  <span>Results</span>
                  <span>{filteredItems.length} items</span>
                </div>
                {filteredItems.length > 0 ? (
                  <ul className="divide-y divide-white/5">
                    {filteredItems.map((item, idx) => (
                      <li key={idx} className="py-1.5">
                        <Link
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setSearchQuery('');
                          }}
                          className="block text-sm hover:text-[#f7b718] transition"
                        >
                          <div className="font-bold text-white/90">{item.title}</div>
                          <div className="text-[9px] text-[#f7b718] font-bold uppercase tracking-widest mt-0.5">{item.category}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-4 text-xs text-white/40 font-semibold">
                    No results for &quot;{searchQuery}&quot;
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="space-y-4 pt-1">
            {headerIA.map((dropdown) => (
              <div key={dropdown.name} className="space-y-2">
                <button
                  onClick={() => toggleDropdown(dropdown.name)}
                  className="flex w-full items-center justify-between text-base font-bold text-white border-b border-white/5 pb-1"
                >
                  {dropdown.name}
                  <svg
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      activeDropdown === dropdown.name ? 'rotate-180 text-[#f7b718]' : 'text-white/50'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {activeDropdown === dropdown.name && (
                  <div className="pl-3 space-y-3 pt-1">
                    {dropdown.sections.map((section, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="text-[10px] font-extrabold uppercase tracking-wider text-white/40">
                          {section.title}
                        </div>
                        {section.links.map((link, lIdx) => (
                          <div key={lIdx}>
                            {link.isExternal ? (
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-sm font-semibold text-white/80 hover:text-[#f7b718]"
                              >
                                {link.name} &nearr;
                              </a>
                            ) : (
                              <Link
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-sm font-semibold text-white/80 hover:text-[#f7b718]"
                              >
                                {link.name}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
