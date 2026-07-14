import SectionHeader from '@/components/SectionHeader';
import PdfDownloadCard from '@/components/PdfDownloadCard';

export const metadata = {
  title: 'Updates from the Grand Knight | Knights of Columbus Council #11099',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Updates from the Grand Knight"
        subtitle="Fraternal updates and announcements from Council #11099 leadership."
        breadcrumbs={[
          { name: 'News', href: '/' },
          { name: 'Updates from the Grand Knight', href: '/updates-from-the-grand-knight' }
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <div className="card-premium p-8 sm:p-12 rounded-2xl bg-white border border-slate-100">
          <div className="prose prose-slate max-w-none">
            
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            The Knights have always been a big supporter of the Special Olympics and this month you can support the Special Olympics and get a great meal. This year Jersey Mike’s will be the presenting sponsor of the 2022 Special Olympic USA Games. Because of this Jersey Mike’s will donate all sales not just the profits on Wednesday March 30th, 2022 to Special Olympics. Jersey Mike’s Month of Giving has raised more than $47 million for local charities since it began in 2011. 
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            There are three Jersey Mike’s sub shops in the Lansing area; they are at: 
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            5851 W. Saginaw Hwy, Lansing
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            551 E. Grand River Ave. East Lansing 
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            3490 Okemos Rd. Okemos 
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            So go and have a great meal and donate to this great cause.
          </p>
  

          <p className="text-sm sm:text-base leading-relaxed text-slate-600 mb-6 font-medium">
            John Gordon / GK 11099
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
            <img src="/wp-content/uploads/2022/03/6c4d49a8bafc75a99ec855c320ee669d-1024x576.jpg" alt="Blog illustration" className="w-full h-auto object-cover" />
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
