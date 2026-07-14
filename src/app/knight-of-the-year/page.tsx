import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Knight of the Year | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Knight of the Year"
        subtitle="Our highest annual fraternal honor awarded for exceptional council leadership."
        breadcrumbs={[
          { name: 'Recognition', href: '/recognition' },
          { name: 'Knight of the Year', href: '/knight-of-the-year' }
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="card-premium p-8 rounded-2xl bg-white border border-slate-100 flex items-start gap-5">
            <div className="h-12 w-12 rounded-xl bg-amber-50 text-accent flex items-center justify-center flex-shrink-0 border border-amber-100 shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">2018 Fraternal Year</span>
              <h3 className="text-xl font-bold text-secondary font-serif mt-1">2019 William Bloomfield</h3>
            </div>
          </div>
  

          <div className="card-premium p-8 rounded-2xl bg-white border border-slate-100 flex items-start gap-5">
            <div className="h-12 w-12 rounded-xl bg-amber-50 text-accent flex items-center justify-center flex-shrink-0 border border-amber-100 shadow-sm">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 0h4m-4 0H8m12 3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">2019 Fraternal Year</span>
              <h3 className="text-xl font-bold text-secondary font-serif mt-1">2020</h3>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  );
}
