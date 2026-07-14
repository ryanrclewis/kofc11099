import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Soccer Challenge &#8211; &#8211; Knights of Columbus &#8211; | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Soccer Challenge &#8211; &#8211; Knights of Columbus &#8211;"
        subtitle="Council fraternal activities, charity challenges, and parish events."
        breadcrumbs={[
          { name: 'Events', href: '/upcoming-events' },
          { name: 'Soccer Challenge &#8211; &#8211; Knights of Columbus &#8211;', href: '/soccer-challenge' }
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
              Downloadable Entry Form
            </p>
  
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  Join us for our annual Soccer Challenge &#8211; &#8211; Knights of Columbus &#8211; event! Download the files on the right for registration and schedules.
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
            key="/wp-content/uploads/2019/09/4571-soccer-challenge-vertical-poster.pdf"
            title="4571-soccer-challenge-vertical-poster"
            pdfUrl="/wp-content/uploads/2019/09/4571-soccer-challenge-vertical-poster.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2019/09/4576-soccer-challenge-playbook.pdf"
            title="4576-soccer-challenge-playbook"
            pdfUrl="/wp-content/uploads/2019/09/4576-soccer-challenge-playbook.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2019/09/4578-soccer-challenge-entry-form-and-score-sheet.pdf"
            title="4578-soccer-challenge-entry-form-and-score-sheet"
            pdfUrl="/wp-content/uploads/2019/09/4578-soccer-challenge-entry-form-and-score-sheet.pdf"
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
