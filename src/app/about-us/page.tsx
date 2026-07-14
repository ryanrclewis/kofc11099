import SectionHeader from '@/components/SectionHeader';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Knights of Columbus Council #11099',
  description: 'Learn about the four core principles of the Knights of Columbus: Charity, Unity, Fraternity, and Patriotism.',
};

interface Pillar {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  icon: React.ReactNode;
}

const pillars: Pillar[] = [
  {
    title: 'Charity',
    description: 'Our Catholic faith teaches us to "Love thy neighbor as thyself." Members show love for neighbors by conducting food drives, donating to soup kitchens, volunteering at the Special Olympics, and supporting mothers who choose life.',
    linkText: 'Learn About Neighbors Helping Neighbors',
    linkHref: 'http://kofc.org/un/en/charities/articles/neighbors-helping-neighbors.html',
    icon: (
      <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Unity',
    description: 'None of us is as good as all of us. Together, we can accomplish far more than any of us could individually. As a Knight, you can count on the support and encouragement of your brother Knights to make life better in your parish and community.',
    linkText: 'Explore KofC Programs',
    linkHref: 'http://kofc.org/un/en/programs/index.html',
    icon: (
      <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Fraternity',
    description: 'Venerable Michael J. McGivney founded the Knights of Columbus to assist the widows and children of deceased breadwinners. The Order\'s top-rated insurance program continues this today, alongside millions of fraternal service hours.',
    linkText: 'View Insurance Services',
    linkHref: 'http://kofc.org/un/en/insurance/index.html',
    icon: (
      <svg className="h-7 w-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Patriotism',
    description: 'Members of the Knights of Columbus are patriotic citizens proud of our devotion to God and country. Whether in public or private, the Knights remind the world that Catholics support their nations and are amongst their finest citizens.',
    linkText: 'Read Joining Benefits',
    linkHref: 'http://kofc.org/un/joinus/en/index.html',
    icon: (
      <svg className="h-7 w-7 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="About Us"
        subtitle="All the good works we do are informed by our four core principles."
        breadcrumbs={[{ name: 'About Us', href: '/about-us' }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Core Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card-premium p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-white shadow-xs border border-slate-200 flex-shrink-0">
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-serif">{pillar.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-6 font-medium text-slate-700">
                  {pillar.description}
                </p>
              </div>
              <a
                href={pillar.linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-secondary hover:underline inline-flex items-center gap-1 mt-2"
              >
                {pillar.linkText} &rarr;
              </a>
            </div>
          ))}
        </div>

        {/* Join Now Callout */}
        <div className="mt-16 text-center bg-white p-12 rounded-2xl shadow-sm border border-slate-200 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-secondary mb-3">
            Interested in Joining the Brotherhood?
          </h2>
          <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-2xl mx-auto">
            Become part of a global community of Catholic men making a difference in their parishes, supporting local charities, and developing lifelong friendships.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/membership"
              className="rounded-xl bg-secondary hover:bg-secondary-dark border border-accent text-white px-6 py-3 text-sm font-extrabold uppercase tracking-wider transition duration-200 cursor-pointer shadow-md"
            >
              Membership Info
            </Link>
            <a
              href="http://kofc.org/un/joinus/en/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 hover:bg-slate-50 text-secondary px-6 py-3 text-sm font-extrabold uppercase tracking-wider transition duration-200"
            >
              Join Now Online
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
