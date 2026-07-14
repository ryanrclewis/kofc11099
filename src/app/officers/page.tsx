import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Council Leadership | Knights of Columbus Council #11099',
  description: 'View the 2025-2026 fraternal year leadership officers and director positions for Council #11099.',
};

interface LeaderCard {
  role: string;
  name: string;
  email?: string;
  phone?: string;
  initials: string;
}

const keyOfficers: LeaderCard[] = [
  {
    role: 'Grand Knight',
    name: 'S.K. Christopher Hanson',
    email: 'gk11099@mikofc.org',
    initials: 'CH',
  },
  {
    role: 'Deputy Grand Knight',
    name: 'S.K. Tony Cherniawski',
    email: 'pd11099@mikofc.org',
    initials: 'TC',
  },
  {
    role: 'Chancellor',
    name: 'S.K. Russell Pate Jr.',
    email: 'md11099@mikofc.org',
    initials: 'RP',
  },
  {
    role: 'Insurance Representative',
    name: 'Brennan Hayden',
    email: 'brennan.hayden@kofc.org',
    phone: '517.505.7300',
    initials: 'BH',
  },
];

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="2025-2026 Council Leadership"
        subtitle="Meet the officers and directors guiding our fraternal year."
        breadcrumbs={[
          { name: 'About Us', href: '/about-us' },
          { name: 'Leadership', href: '/officers' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core leadership directory */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold font-serif text-secondary mb-8 border-b pb-2">Key Executive Officers</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyOfficers.map((officer) => (
              <div
                key={officer.role}
                className="card-premium p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-primary-light text-secondary flex items-center justify-center font-bold text-lg mb-4">
                    {officer.initials}
                  </div>
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{officer.role}</h3>
                  <p className="text-lg font-bold text-secondary font-serif mt-1 leading-snug">{officer.name}</p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-slate-50 space-y-2 text-xs">
                  {officer.phone && (
                    <p className="text-gray-500 font-medium">
                      Phone: <span className="text-secondary font-bold">{officer.phone}</span>
                    </p>
                  )}
                  {officer.email && (
                    <a
                      href={`mailto:${officer.email}`}
                      className="text-secondary hover:underline font-bold block"
                    >
                      {officer.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action sheets for full directory downloads */}
        <div>
          <h2 className="text-2xl font-bold font-serif text-secondary mb-6 border-b pb-2">Full Position Directories</h2>
          <p className="text-slate-500 text-sm mb-6 max-w-2xl">
            Download the complete PDF sheets listing all officers, directors, and coordinators for the 2025-2026 fraternal year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PdfDownloadCard
              title="2025-2026 Officer Positions"
              pdfUrl="/wp-content/uploads/2025/12/2025-2026-Officer-Positions.pdf"
            />
            <PdfDownloadCard
              title="2025-2026 Director Positions"
              pdfUrl="/wp-content/uploads/2025/12/2025-2026-Director-Positions.pdf"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
