import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Catholic Essay Contest &#8211; &#8211; Knights of Columbus &#8211; | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Catholic Essay Contest &#8211; &#8211; Knights of Columbus &#8211;"
        subtitle="Council fraternal activities, charity challenges, and parish events."
        breadcrumbs={[
          { name: 'Events', href: '/upcoming-events' },
          { name: 'Catholic Essay Contest &#8211; &#8211; Knights of Columbus &#8211;', href: '/catholic-essay-contest' }
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
              2019-2020 Catholic Citizenship Essay Contest Theme:
            </p>
  

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-4 font-medium last:mb-0">
              Discuss the meaning of Virtue and how you live and embody the virtue of Charity.
            </p>
  

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-4 font-medium last:mb-0">
              “Charity is the theological virtue which we love God above all things for his own sake, and our neighbor as ourselves for the love of God” – Catechism of the Catholic Church, 1822
            </p>
  

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-4 font-medium last:mb-0">
              Biblically, virtue is understood as the conformity of life and conduct with the principles of morality, while Charity signifies the reciprocal love between God and man, one that is manifest in unselfish love and eloquently shown in the life, teachings, and death of Jesus Christ. “You shall love the Lord your God with all your heart, and with all your soul, and with all your mind. This is the great and first commandment. And a second is like it, you shall love your neighbor as yourself” (Matthew 22:37-39).
            </p>
  

            <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-4 font-medium last:mb-0">
              In an essay of 500-750 words, consider the meaning of virtue and think about ways in which you exemplify the virtue of Charity to glorify and reflect the nature of God. This could be at home with your families or in your communities, as you enrich the welfare of others.
            </p>
  
                </div>
              ) : (
                <p className="text-sm text-slate-500">
                  Join us for our annual Catholic Essay Contest &#8211; &#8211; Knights of Columbus &#8211; event! Download the files on the right for registration and schedules.
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
            key="/wp-content/uploads/2019/09/4209-essay-contest-vertical-poster.pdf"
            title="4209-essay-contest-vertical-poster"
            pdfUrl="/wp-content/uploads/2019/09/4209-essay-contest-vertical-poster.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2019/09/4202-ea-essay-contest-guidebook.pdf"
            title="4202-ea-essay-contest-guidebook"
            pdfUrl="/wp-content/uploads/2019/09/4202-ea-essay-contest-guidebook.pdf"
          />
  

          <PdfDownloadCard
            key="/wp-content/uploads/2019/09/4208-essay-contest-entry-form.pdf"
            title="4208-essay-contest-entry-form"
            pdfUrl="/wp-content/uploads/2019/09/4208-essay-contest-entry-form.pdf"
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
