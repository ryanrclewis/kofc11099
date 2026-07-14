import Link from 'next/link';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

const recentPosts: BlogPost[] = [
  {
    title: 'Updates from the Grand Knight',
    slug: '/updates-from-the-grand-knight',
    date: 'Mar 21, 2022',
    category: 'Announcements',
    excerpt: 'The Knights have always been a big supporter of the Special Olympics and this month you can support the Special Olympics by...',
    image: '/wp-content/uploads/2022/03/6c4d49a8bafc75a99ec855c320ee669d-1024x576.jpg',
  },
  {
    title: 'Free Financial Planning Seminar',
    slug: '/free-financial-planning-seminar',
    date: 'Aug 18, 2021',
    category: 'Seminars',
    excerpt: 'The Knights of Columbus is offering, at no cost, a virtual financial planning webinar. Learn how to secure your family\'s financial future...',
    image: '/wp-content/uploads/2021/07/image-1010x1024.png',
  },
  {
    title: 'Why Be a Knight?',
    slug: '/why-be-a-knight',
    date: 'Jun 22, 2017',
    category: 'Membership',
    excerpt: 'Discover the fraternity, charity, and faith that defines the Knights of Columbus. Learn how you can make a difference in your parish and community.',
    image: '/wp-content/uploads/2017/06/3rddegree.jpg',
  },
  {
    title: 'Hello Brother Knights! (Play Ball)',
    slug: '/play-ball',
    date: 'Mar 12, 2017',
    category: 'Events',
    excerpt: 'Once again it is time for the Lugnuts Night of Vocations! Join us for a wonderful evening of baseball and community fellowship...',
    image: '/wp-content/uploads/2017/03/lansinglugnuts2.jpg',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      {/* Hero Section */}
      <section className="relative hero-gradient text-white overflow-hidden py-24 md:py-32 flex items-center shadow-lg border-b-4 border-accent">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div>
                <p className="text-sm sm:text-base font-bold text-accent uppercase tracking-widest font-sans mb-3 block">
                  Msgr. John A. Gabriels Council #11099
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-extrabold tracking-tight font-serif leading-none">
                  Knights of <span className="text-gradient-gold">Columbus</span>
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                A brotherhood of practical Catholic men. Supporting our parish, volunteering in our community, and growing together in faith, charity, and unity.
              </p>
              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/membership"
                  className="rounded-xl btn-accent hover:bg-accent-dark px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-dark cursor-pointer shadow-lg"
                >
                  Become a Knight
                </Link>
                <Link
                  href="/upcoming-events"
                  className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition duration-200"
                >
                  Browse Events
                </Link>
              </div>
            </div>

            {/* Hero Right Image Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative p-2 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden">
                <img
                  src="/wp-content/uploads/2017/06/Lansing.ResurrectionCath..jpg"
                  alt="Church of the Resurrection"
                  className="w-full h-80 object-cover rounded-xl shadow-inner border border-white/10"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/10 p-4 rounded-xl text-center">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wider">Lansing, Michigan</p>
                  <p className="text-sm font-bold text-white mt-0.5">Fraternity & Mercy in Action</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Callout Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-3.5 rounded-2xl bg-primary-light text-primary mb-5 border border-emerald-100 shadow-sm">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="text-2.5xl sm:text-3.5xl font-extrabold font-serif text-secondary tracking-tight mb-6">
            Welcome to Our Website
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-3xl mx-auto">
            We pride ourselves in being a Catholic men’s organization that is involved in parish activities and works of goodwill, here and in the immediate Lansing area. Our presence is noted in various meal functions, the annual Parish festival, Altar duties, Ushering, Funeral necessities, and Encouragement to those in need. 
            <br /><br />
            A brotherhood of like believers that worship together. While we stand ready to assist any we can, we know that our fellow brothers in Christ can be counted on for any help we may need. This source of confidence strengthens our individual efforts and lends itself to the greater Good.
          </p>
        </div>
      </section>

      {/* Action Grid (The 4 Core Blocks) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-secondary tracking-tight">How We Serve</h2>
            <p className="mt-3 text-slate-500 text-sm sm:text-base">
              Explore our core fraternal activities, meetings, events, and volunteer service sheets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Block 1: Meetings */}
            <div className="card-premium p-8 rounded-2xl flex flex-col h-full bg-white hover:border-emerald-500">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-primary flex items-center justify-center mb-6 border border-emerald-100 shadow-sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-serif">Meetings</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                Our business meetings are every 2nd Monday at 7:30 pm in our dedicated Council Room. Discussions are efficient and centered on fraternal goals.
              </p>
              <Link href="/about-us" className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 mt-auto">
                Council Info <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

            {/* Block 2: Volunteer Sign-up */}
            <div className="card-premium p-8 rounded-2xl flex flex-col h-full bg-white hover:border-blue-500">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 border border-blue-100 shadow-sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-serif">Volunteer Sign-up</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                Participate in active parish and community functions. Review current volunteer sheets and secure your shifts online instantly.
              </p>
              <Link href="/volunteer-opportunities" className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 mt-auto">
                Sign Up Now <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

            {/* Block 3: Knight Events */}
            <div className="card-premium p-8 rounded-2xl flex flex-col h-full bg-white hover:border-amber-500">
              <div className="h-12 w-12 rounded-xl bg-amber-50 text-accent flex items-center justify-center mb-6 border border-amber-100 shadow-sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-serif">Knight Events</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                Stay updated with council timelines, community challenges, sporting events, golf outings, and spiritual gatherings throughout the fraternal year.
              </p>
              <Link href="/upcoming-events" className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 mt-auto">
                Explore Events <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

            {/* Block 4: Like No Other Group */}
            <div className="card-premium p-8 rounded-2xl flex flex-col h-full bg-white hover:border-purple-500">
              <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 border border-purple-100 shadow-sm">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3 font-serif">Like No Other Group</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                A globally recognized fraternity of Catholic men. Gain access to premium insurance benefits and a powerful support structure of brotherly solidarity.
              </p>
              <Link href="/membership" className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 mt-auto">
                Join Fraternity <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold font-serif text-secondary tracking-tight">
                Latest News & Postings
              </h2>
              <p className="mt-2 text-slate-500 text-sm sm:text-base">
                Recent updates, planning seminars, and community messages from Council leadership.
              </p>
            </div>
            <Link
              href="/newsletter"
              className="mt-4 md:mt-0 text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1 transition group"
            >
              Archived Newsletters <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="card-premium flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100">
                <div className="flex-shrink-0 h-48 w-full overflow-hidden bg-slate-50 border-b border-slate-50">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center text-xxs font-bold uppercase tracking-wider text-primary">
                      <span>{post.category}</span>
                      <span className="text-slate-400 font-semibold">{post.date}</span>
                    </div>
                    <Link href={post.slug} className="block mt-2">
                      <h3 className="text-lg font-bold text-secondary font-serif leading-snug hover:text-primary transition duration-150">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-50">
                    <Link
                      href={post.slug}
                      className="text-sm font-bold text-primary hover:text-primary-dark transition inline-flex items-center gap-0.5"
                    >
                      Read Full Post &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
