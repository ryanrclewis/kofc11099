interface PdfDownloadCardProps {
  title: string;
  pdfUrl: string;
  subtitle?: string;
}

export default function PdfDownloadCard({ title, pdfUrl, subtitle = 'Official Document (PDF)' }: PdfDownloadCardProps) {
  return (
    <div className="card-premium p-4 rounded-xl bg-white border border-slate-200 flex flex-col gap-3">
      {/* Top Section: Icon and Titles */}
      <div className="flex items-center gap-3 w-full">
        {/* Navy/Blue Document Icon */}
        <div className="h-10 w-10 rounded-lg bg-primary-light text-primary flex items-center justify-center flex-shrink-0 border border-slate-200">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="font-bold text-primary text-sm leading-snug break-words" title={title}>
            {title}
          </h4>
          <p className="text-[10px] text-slate-400 font-bold tracking-wider uppercase mt-0.5">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Bottom Section: Action Buttons Grid */}
      <div className="grid grid-cols-2 gap-2 w-full pt-1.5 border-t border-slate-100">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center rounded-lg border border-slate-200 hover:border-primary hover:bg-slate-50 text-primary py-2 text-xs font-bold transition cursor-pointer"
        >
          View PDF
        </a>
        <a
          href={pdfUrl}
          download
          className="text-center rounded-lg bg-primary hover:bg-primary-dark text-white py-2 text-xs font-bold transition cursor-pointer shadow-xs"
        >
          Download
        </a>
      </div>
    </div>
  );
}
