import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Hello Brother Knights! | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Hello Brother Knights!"
        subtitle="Fraternal updates and announcements from Council #11099 leadership."
        breadcrumbs={[
          { name: 'News', href: '/' },
          { name: 'Hello Brother Knights!', href: '/play-ball' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="card-premium p-8 sm:p-12 rounded-2xl bg-white border border-slate-100">
          <div className="prose prose-slate max-w-none">
            
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Once again it is time for the Lugnuts Night of Vocations! This year it will be the evening of Friday, August 13th.
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Only $13 per ticket – bring your friends and family and have a great time!
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Contact Bill Currie to reserve your tickets today!
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            517-485-5886
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            curriewmm@aol.com
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Your email address will not be published. Required fields are marked *
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Comment *
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Name *
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            E-mail *
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Website
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Save my name, email, and website in this browser for the next time I comment.
          </p>
  
            
            
            
            {false && (
              <div className="mt-10 pt-6 border-t border-slate-100 space-y-4">
                <h4 className="font-bold text-secondary font-serif text-lg mb-4">Attachments</h4>
                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
