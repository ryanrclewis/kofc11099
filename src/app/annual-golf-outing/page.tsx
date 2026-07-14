import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Annual Golf Outing | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Annual Golf Outing"
        subtitle="Council fraternal activities, charity challenges, and parish events."
        breadcrumbs={[
          { name: 'Events', href: '/upcoming-events' },
          { name: 'Annual Golf Outing', href: '/annual-golf-outing' }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Details Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="card-premium p-8 rounded-2xl bg-white border border-slate-100">
              <h2 className="text-2xl font-bold font-serif text-secondary mb-6 border-b pb-2">Program Overview</h2>
              {false ? (
                <div>
                  
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  Join us for our annual Annual Golf Outing event! Download the files on the right for registration and schedules.
                </p>
              )}
            </div>

            {/* Images Grid */}
            {true && (
              <div>
                <h3 className="text-xl font-bold font-serif text-secondary mb-6 border-b pb-2">Event Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  
            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/07/msgr.gabriels2.jpg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c62.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c63.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c65.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c67.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c61.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c60.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c66.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c5f.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c30.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c5b.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c71.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c76.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/P8030087.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c3b.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/P8030011.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/P8030021.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c6b.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c82.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c83.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c84.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c85.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c91.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c8b.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c94.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7ca3.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7ca0.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c9a.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c96.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c95.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/P8030015.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/P8030026.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c54.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c55.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c48.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c47.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c46.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c45.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c43.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c42.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c4f.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c4e.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c4d.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c3f.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c3e.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c3a.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c35.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  

            <div className="overflow-hidden rounded-xl border border-slate-100 shadow-sm hover:shadow transition">
              <img src="/wp-content/uploads/2019/09/fullsizeoutput_7c51.jpeg" alt="Event gallery" className="w-full h-48 object-cover hover:scale-103 transitionduration-300" />
            </div>
  
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
            key="/wp-content/uploads/2019/07/Outing-Summary.pdf"
            title="Outing-Summary"
            pdfUrl="/wp-content/uploads/2019/07/Outing-Summary.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2019/07/Golf-Outing-Sponsorship-2019.pdf"
            title="Golf-Outing-Sponsorship-2019"
            pdfUrl="/wp-content/uploads/2019/07/Golf-Outing-Sponsorship-2019.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2019/07/Golf-Outing-Team-Registration-2019.pdf"
            title="Golf-Outing-Team-Registration-2019"
            pdfUrl="/wp-content/uploads/2019/07/Golf-Outing-Team-Registration-2019.pdf"
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
