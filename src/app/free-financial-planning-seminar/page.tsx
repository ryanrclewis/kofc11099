import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Free Financial Planning Seminar &#8211; &#8211; Knights of Columbus &#8211; | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Free Financial Planning Seminar &#8211; &#8211; Knights of Columbus &#8211;"
        subtitle="Fraternal updates and announcements from Council #11099 leadership."
        breadcrumbs={[
          { name: 'News', href: '/' },
          { name: 'Free Financial Planning Seminar &#8211; &#8211; Knights of Columbus &#8211;', href: '/free-financial-planning-seminar' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="card-premium p-8 sm:p-12 rounded-2xl bg-white border border-slate-100">
          <div className="prose prose-slate max-w-none">
            
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            The Knights of Columbus is offering, at no cost, a virtual financial planning webinar on August 18th, 2021 from 7:00 pm to 8:00 pm. This is available to anyone, not just fellow Knights of Columbus. To take advantage of this opportunity you must register ahead of time.
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Click here to register https://us02web.zoom.us/webinar/register/WN_LluPWNCJRXSrN_X2dngOTw
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
  
            
            
          <div className="my-8 rounded-2xl overflow-hidden shadow border border-slate-100 max-w-2xl mx-auto">
            <img src="/wp-content/uploads/2021/07/image-1010x1024.png" alt="Blog illustration" className="w-full h-auto object-cover" />
          </div>
  
            
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
