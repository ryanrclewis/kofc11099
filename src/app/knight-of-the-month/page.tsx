import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Knight of the Month | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Knight of the Month"
        subtitle="Celebrating our council's outstanding individuals and families."
        breadcrumbs={[
          { name: 'Recognition', href: '/recognition' },
          { name: 'Knight of the Month', href: '/knight-of-the-month' }
        ]}
      />
      <div className="max-w-3xl mx-auto px-4 py-16 w-full">
        <div className="card-premium p-8 rounded-2xl bg-white border border-slate-100">
          <h2 className="text-2xl font-bold font-serif text-secondary mb-8 border-b pb-2">Historical Honorees</h2>
          <div className="space-y-6">
            
          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">July 2019</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5">Steve Simonson</p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">August 2019</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5">William Bloomfield</p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">September 2019</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5">Richard Budd</p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">October 2019</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5">Christopher Lum</p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">November 2019</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5">Eric Cullimore</p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">December 2019</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5">Mike Rademacher</p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">January 2020</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5"></p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">February 2020</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5"></p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">March 2020</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5"></p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">April 2020</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5"></p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">May 2020</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5"></p>
          </div>
  

          <div className="relative pl-8 border-l border-slate-200 py-2">
            <div className="absolute -left-1.5 top-5 h-3 w-3 rounded-full bg-accent border-2 border-white shadow-xs" />
            <p className="text-xs font-bold uppercase tracking-wider text-primary">June 2020</p>
            <p className="text-lg font-bold text-secondary font-serif mt-0.5"></p>
          </div>
  
          </div>
        </div>
      </div>
    </div>
  );
}
