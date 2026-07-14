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
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Overhauled to match kofc.org dark blue band style */}
      <section className="relative bg-[#0d1f50] text-white pt-24 pb-28 flex items-center border-b-4 border-[#f7b718]">
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#f7b718] uppercase tracking-widest font-sans mb-3 block">
                  Msgr. John A. Gabriels Council #11099 • Lansing, Michigan
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-serif leading-tight">
                  Where Faith, Fraternity <br />
                  and <span className="text-[#f7b718]">Finances Meet</span>
                </h1>
              </div>
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
                A brotherhood of practical Catholic men. Supporting our parish, volunteering in our community, and growing together in faith, charity, and unity, backed by world-class financial security.
              </p>
              <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/membership"
                  className="rounded-md bg-[#f7b718] hover:bg-[#fcd56e] px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#0d1f50] border border-[#e2a501] shadow-lg transition"
                >
                  Join the Knights
                </Link>
                <Link
                  href="/upcoming-events"
                  className="rounded-md bg-transparent hover:bg-white/10 border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white transition"
                >
                  Browse Council Events
                </Link>
              </div>
            </div>

            {/* Hero Right Image Card */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="relative p-2 rounded-lg bg-white/5 border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden">
                <img
                  src="/wp-content/uploads/2017/06/Lansing.ResurrectionCath..jpg"
                  alt="Church of the Resurrection"
                  className="w-full h-80 object-cover rounded-md shadow-inner border border-white/10"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0d1f50]/90 backdrop-blur-md border border-[#f7b718]/40 p-4 rounded text-center">
                  <p className="text-xxs font-bold text-[#f7b718] uppercase tracking-wider">Lansing Council #11099</p>
                  <p className="text-xs font-semibold text-white mt-0.5">Church of the Resurrection</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Intro Welcome Block */}
      <section className="py-16 bg-[#f8f5ee] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-3 rounded-full bg-[#ebf1f8] text-[#112866] mb-5 border border-[#bfcfde]">
            <img
              src="https://files.kofc.org/images/assets/kofc_emblem.svg/Zz0yY2JlNjVjNDc3N2QxMWVmOTg2OWEyYmEzM2I0OGRiYg=="
              alt="KofC Emblem"
              className="h-10 w-auto"
            />
          </div>
          <h2 className="text-3xl font-extrabold font-serif text-[#0d1f50] tracking-tight mb-6">
            Welcome to Council #11099
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-[#626161] font-sans max-w-3xl mx-auto">
            We are a Catholic men’s organization involved in parish activities and works of goodwill here and in the immediate Lansing area. Our presence is noted in various meal functions, the annual Parish festival, Altar duties, ushering, funeral assistance, and offering encouragement to those in need.
            <br /><br />
            A brotherhood of like believers that worship together. While we stand ready to assist any we can, we know that our fellow brothers in Christ can be counted on for any help we may need. This source of confidence strengthens our individual efforts and lends itself to the greater Good.
          </p>
        </div>
      </section>

      {/* Member Benefits Grid - Copied design and contents of kofc.org */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-[#0d1f50] tracking-tight">Member Benefits</h2>
            <div className="h-1 w-20 bg-[#f7b718] mx-auto mt-4"></div>
            <p className="mt-4 text-[#626161] text-sm">
              Discover how joining the Knights of Columbus helps protect and support your family and parish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Benefit 1 */}
            <div className="card-premium p-8 rounded-lg flex flex-col h-full bg-white">
              <div className="h-12 w-12 rounded-lg bg-[#ebf1f8] text-[#112866] flex items-center justify-center mb-6 border border-[#bfcfde]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f50] mb-3 font-serif">Deepen Your Faith</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                Explore resources to help you grow in your spiritual life, lead your family in faith, and stand strong as a Catholic man.
              </p>
              <Link href="/about-us#faith" className="text-xs font-bold text-[#112866] hover:text-[#0277d9] inline-flex items-center gap-1 mt-auto">
                Spiritual Growth <span className="text-[#f7b718] font-bold">&rarr;</span>
              </Link>
            </div>

            {/* Benefit 2 */}
            <div className="card-premium p-8 rounded-lg flex flex-col h-full bg-white">
              <div className="h-12 w-12 rounded-lg bg-[#ebf1f8] text-[#112866] flex items-center justify-center mb-6 border border-[#bfcfde]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f50] mb-3 font-serif">Find Your Brothers</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                Join a fraternity of like-minded men who share your values, offer support, and stand ready to serve together in active unity.
              </p>
              <Link href="/about-us" className="text-xs font-bold text-[#112866] hover:text-[#0277d9] inline-flex items-center gap-1 mt-auto">
                Explore Fraternity <span className="text-[#f7b718] font-bold">&rarr;</span>
              </Link>
            </div>

            {/* Benefit 3 */}
            <div className="card-premium p-8 rounded-lg flex flex-col h-full bg-white">
              <div className="h-12 w-12 rounded-lg bg-[#ebf1f8] text-[#112866] flex items-center justify-center mb-6 border border-[#bfcfde]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f50] mb-3 font-serif">Serve Your Community</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                Put your faith in action through charitable works, helping those in need, and supporting Lansing community initiatives.
              </p>
              <Link href="/volunteer-opportunities" className="text-xs font-bold text-[#112866] hover:text-[#0277d9] inline-flex items-center gap-1 mt-auto">
                Volunteer Opportunities <span className="text-[#f7b718] font-bold">&rarr;</span>
              </Link>
            </div>

            {/* Benefit 4 */}
            <div className="card-premium p-8 rounded-lg flex flex-col h-full bg-white">
              <div className="h-12 w-12 rounded-lg bg-[#ebf1f8] text-[#112866] flex items-center justify-center mb-6 border border-[#bfcfde]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#0d1f50] mb-3 font-serif">Protect Your Family</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                Access top-rated financial protection, retirement annuities, and insurance solutions designed to secure your family&apos;s future.
              </p>
              <Link href="/why-be-a-knight" className="text-xs font-bold text-[#112866] hover:text-[#0277d9] inline-flex items-center gap-1 mt-auto">
                Insurance Benefits <span className="text-[#f7b718] font-bold">&rarr;</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Faith-Aligned Financial Services (Corporate Style section) */}
      <section className="py-20 bg-[#ebf1f8] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-[#0d1f50] tracking-tight">Faith-Aligned Financial Services</h2>
            <div className="h-1 w-20 bg-[#f7b718] mx-auto mt-4"></div>
            <p className="mt-4 text-[#626161] text-sm">
              We offer premier financial services aligned strictly with Catholic moral values to keep your family protected.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Life Insurance Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#bfcfde] hover:border-[#f7b718] transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0d1f50] mb-4 font-serif">Life Insurance</h3>
                <p className="text-[#626161] text-xs leading-relaxed mb-6">
                  Protect your family&apos;s financial future with permanent, term, and long-term care insurance solutions developed in full compliance with Catholic teachings.
                </p>
              </div>
              <Link
                href="/why-be-a-knight"
                className="w-full text-center block rounded bg-[#112866] hover:bg-[#0d1f50] py-2.5 text-xs font-bold text-white uppercase tracking-wider transition"
              >
                Protect Your Family
              </Link>
            </div>

            {/* Investments Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#bfcfde] hover:border-[#f7b718] transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0d1f50] mb-4 font-serif">Investments</h3>
                <p className="text-[#626161] text-xs leading-relaxed mb-6">
                  Grow your wealth securely. Knights of Columbus Asset Advisors provides screen investment portfolios honoring Catholic ethics and values.
                </p>
              </div>
              <a
                href="https://www.kofcassetadvisors.org"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center block rounded bg-[#112866] hover:bg-[#0d1f50] py-2.5 text-xs font-bold text-white uppercase tracking-wider transition"
              >
                Explore Investments
              </a>
            </div>

            {/* Charitable Giving Card */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-[#bfcfde] hover:border-[#f7b718] transition flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#0d1f50] mb-4 font-serif">Charitable Giving</h3>
                <p className="text-[#626161] text-xs leading-relaxed mb-6">
                  Maximize your philanthropic impact. Use our Donor-Advised Funds and planned giving vehicles to support your parish, school, or favorite Catholic charity.
                </p>
              </div>
              <Link
                href="/contact-us"
                className="w-full text-center block rounded bg-[#112866] hover:bg-[#0d1f50] py-2.5 text-xs font-bold text-white uppercase tracking-wider transition"
              >
                Support Charity
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Impact Stats Block - "Where There's a Need, There's a Knight" */}
      <section className="py-16 bg-[#0d1f50] text-white border-y border-[#f7b718]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-serif text-white">Where There’s a Need, There’s a Knight</h2>
            <p className="mt-3 text-slate-400 text-xs sm:text-sm">
              The impact of our council fraternity and worldwide organization in service of God and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700">
            {/* Stat 1 */}
            <div className="pt-6 md:pt-0">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#f7b718] font-serif">2.2M</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-300 mt-2">Members Worldwide</p>
            </div>
            {/* Stat 2 */}
            <div className="pt-6 md:pt-0">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#f7b718] font-serif">$197M</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-300 mt-2">Donated Last Year</p>
            </div>
            {/* Stat 3 */}
            <div className="pt-6 md:pt-0">
              <p className="text-4xl sm:text-5xl font-extrabold text-[#f7b718] font-serif">48M</p>
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-300 mt-2">Volunteer Hours Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories. Real Impact Testimonials
      <section className="py-20 bg-[#f8f5ee]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold font-serif text-[#0d1f50] tracking-tight">Real Stories. Real Impact.</h2>
            <div className="h-1 w-20 bg-[#f7b718] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            Story 1
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-xs italic text-[#626161] leading-relaxed mb-6">
                &ldquo;Being a member of the Knights of Columbus has completely anchored my spiritual life. The fraternity and charity of these men keeps me focused on being a better father, husband, and a practical Catholic man.&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-[#0d1f50]">Trever Miller</p>
                <p className="text-xxs uppercase font-semibold text-[#f7b718] tracking-widest mt-0.5">Council #11099 Member</p>
              </div>
            </div>

            Story 2
            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-xs italic text-[#626161] leading-relaxed mb-6">
                &ldquo;We pride ourselves on charity. Knowing you have a dedicated community of brother Knights to support your parish, stand at Altars, and serve Lansing families in times of emergency builds absolute confidence.&rdquo;
              </p>
              <div>
                <p className="text-sm font-bold text-[#0d1f50]">Dena Wolf</p>
                <p className="text-xxs uppercase font-semibold text-[#f7b718] tracking-widest mt-0.5">Parish Supporter</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* Latest Council News & Postings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl font-bold font-serif text-[#0d1f50] tracking-tight">
                Latest News & Postings
              </h2>
              <div className="h-1 w-20 bg-[#f7b718] mt-4"></div>
              <p className="mt-4 text-[#626161] text-xs">
                Recent updates, planning seminars, and community messages from Council leadership.
              </p>
            </div>
            <Link
              href="/newsletter"
              className="mt-4 md:mt-0 text-xs font-bold text-[#112866] hover:text-[#0277d9] inline-flex items-center gap-1 transition"
            >
              Archived Newsletters <span className="text-[#f7b718] font-bold">&rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="card-premium flex flex-col overflow-hidden rounded-lg bg-white border border-slate-100">
                <div className="flex-shrink-0 h-48 w-full overflow-hidden bg-slate-50 border-b border-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-[#112866]">
                      <span>{post.category}</span>
                      <span className="text-slate-400 font-semibold">{post.date}</span>
                    </div>
                    <Link href={post.slug} className="block mt-2">
                      <h3 className="text-base font-bold text-[#0d1f50] font-serif leading-snug hover:text-[#0277d9] transition">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="mt-3 text-xs text-[#626161] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={post.slug}
                      className="text-xs font-bold text-[#112866] hover:text-[#0d1f50] transition inline-flex items-center gap-0.5"
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

      {/* Blessed Michael McGivney Section - Overhauled to match kofc.org */}
      <section className="relative py-24 bg-[#0d1f50] border-t border-white/10 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Image on left - Circular frame with blue halo glow */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-white/20 shadow-[0_0_50px_rgba(2,119,217,0.55)] overflow-hidden">
                <img
                  src="/mcgivney_portrait.png"
                  alt="Blessed Michael McGivney portrait"
                  className="w-full h-full object-cover scale-105"
                />
              </div>
            </div>

            {/* Info on right */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#f7b718] uppercase tracking-wider font-serif">
                  Blessed Michael McGivney
                </h3>
                <h2 className="text-xl sm:text-2xl md:text-3.5xl font-normal font-serif text-white leading-snug mt-3 max-w-2xl mx-auto lg:mx-0">
                  Our Founder understood that men need brotherhood to stay faithful to God&apos;s mission. Now he is on the path to sainthood.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-3">
                  Learn more about Blessed Michael McGivney, Founder of the Knights of Columbus.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href="https://www.fathermcgivney.org"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-md bg-[#f7b718] hover:bg-[#fcd56e] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#0d1f50] border border-[#e2a501] transition shadow-md"
                >
                  Father McGivney&apos;s Legacy
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div >
  );
}
