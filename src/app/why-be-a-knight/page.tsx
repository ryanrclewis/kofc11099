import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Why Be a Knight? &#8211; &#8211; Knights of Columbus &#8211; | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Why Be a Knight? &#8211; &#8211; Knights of Columbus &#8211;"
        subtitle="Fraternal updates and announcements from Council #11099 leadership."
        breadcrumbs={[
          { name: 'News', href: '/' },
          { name: 'Why Be a Knight? &#8211; &#8211; Knights of Columbus &#8211;', href: '/why-be-a-knight' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="card-premium p-8 sm:p-12 rounded-2xl bg-white border border-slate-100">
          <div className="prose prose-slate max-w-none">
            
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            https://kofc11099.org/wp-content/uploads/2017/06/An-Invitation.mp4
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Awesome post! Keep up the great work! 🙂
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            Great content! Super high-quality! Keep it up! 🙂
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            We’re a group of volunteers and starting a brand new scheme in our community.
Your website provided us with useful information to work on. You have performed a formidable activity and our
entire group will probably be thankful to you.
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
