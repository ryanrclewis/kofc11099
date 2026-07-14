import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Spelling Bee | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Spelling Bee"
        subtitle="Council fraternal activities, charity challenges, and parish events."
        breadcrumbs={[
          { name: 'Events', href: '/upcoming-events' },
          { name: 'Spelling Bee', href: '/spelling-bee' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="card-premium p-8 rounded-2xl bg-white border border-slate-100">
              <h2 className="text-2xl font-bold font-serif text-secondary mb-6 border-b pb-2">Program Overview</h2>
              {true ? (
                <div>
                  
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-4 font-medium last:mb-0">
              Downloadable Files
            </p>
  
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  Join us for our annual Spelling Bee event! Download the files on the right for registration and schedules.
                </p>
              )}
            </div>

            {/* Images Grid */}
            {false && (
              <div>
                <h3 className="text-xl font-bold font-serif text-secondary mb-6 border-b pb-2">Event Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  
                </div>
              </div>
            )}
          </div>

          {/* Downloads Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="card-premium p-6 rounded-2xl bg-white border border-slate-100">
              <h3 className="text-lg font-bold font-serif text-secondary mb-4 border-b pb-1.5 uppercase tracking-wider text-xs font-semibold text-slate-400">
                Official Attachments
              </h3>
              {true ? (
                <div className="space-y-4">
                  
          <PdfDownloadCard
            key="/wp-content/uploads/2023/09/Spelling-Bee-Rules-and-Regulations-20.10.pdf"
            title="Spelling-Bee-Rules-and-Regulations-20.10"
            pdfUrl="/wp-content/uploads/2023/09/Spelling-Bee-Rules-and-Regulations-20.10.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2024/10/24-25-Spelling-Bee-Word-list-level-I-Grades-4-5-6.pdf"
            title="24-25-Spelling-Bee-Word-list-level-I-Grades-4-5-6"
            pdfUrl="/wp-content/uploads/2024/10/24-25-Spelling-Bee-Word-list-level-I-Grades-4-5-6.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2024/10/24-25-Spelling-Bee-Word-list-level-II-Grades-7-8-9.pdf"
            title="24-25-Spelling-Bee-Word-list-level-II-Grades-7-8-9"
            pdfUrl="/wp-content/uploads/2024/10/24-25-Spelling-Bee-Word-list-level-II-Grades-7-8-9.pdf"
          />
  
                </div>
              ) : (
                <p className="text-xs text-slate-500">No PDF sheets attached to this event.</p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
