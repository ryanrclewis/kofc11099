'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

interface Duty {
  role: string;
  description: string;
}

const duties: Duty[] = [
  {
    role: 'Grand Knight',
    description: 'The Grand Knight is the chief executive officer of the council. He presides at all meetings, guides the council\'s program activities, signs all checks and orders, acts as the primary contact to the parish priests, and ensures that the council complies with Supreme and State policies.',
  },
  {
    role: 'Deputy Grand Knight',
    description: 'The Deputy Grand Knight assists the Grand Knight in his duties and acts in his absence. He typically serves as the Program Director, overseeing the directors of Faith, Family, Community, and Life activities, ensuring all fraternal initiatives run smoothly.',
  },
  {
    role: 'Chancellor',
    description: 'The Chancellor assists the Grand Knight and Deputy Grand Knight, and typically serves as the Membership Director. He focuses on recruiting new members, welcoming new candidates, and developing retention programs to keep existing members active.',
  },
  {
    role: 'Financial Secretary',
    description: 'The Financial Secretary is appointed by the Supreme Knight and acts as the administrative engine of the council. He maintains all membership records, handles correspondence with Supreme, issues dues notices and membership cards, and compiles fraternal reports.',
  },
  {
    role: 'Treasurer',
    description: 'The Treasurer holds the council\'s financial assets. He receives all funds from the Financial Secretary, deposits them, keeps accurate records of balances, and issues checks signed by himself and the Grand Knight to pay council bills.',
  },
  {
    role: 'Recorder',
    description: 'The Recorder acts as the clerk of the council. He is responsible for keeping clean and detailed minutes of all business and officers meetings, recording approvals, and preserving council archives.',
  },
  {
    role: 'Advocate',
    description: 'The Advocate is the legal advisor to the council. He ensures that all proceedings are conducted in accordance with parliamentary procedure (Robert\'s Rules of Order) and the laws and bylaws of the Order.',
  },
  {
    role: 'Warden',
    description: 'The Warden oversees council properties and templates. He sets up the meeting room with appropriate ceremonial alters and materials, monitors the doors during meetings, and oversees the Inside and Outside Guards.',
  },
  {
    role: 'Guards (Inside & Outside)',
    description: 'Guards check membership cards at the doors before meetings begin, welcome visiting brothers, and ensure that only authorized members enter the council chambers during closed business sessions.',
  },
  {
    role: 'Trustees (3-Year, 2-Year, 1-Year)',
    description: 'Trustees supervise the financial operations of the council. They conduct semi-annual audits of the financial secretary\'s and treasurer\'s books, review expenditures, and advise the Grand Knight on fraternal budgets.',
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDuty = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Officer Duties"
        subtitle="Learn about the key responsibilities and roles that govern our council."
        breadcrumbs={[
          { name: 'About Us', href: '/about-us' },
          { name: 'Officer Duties', href: '/officer-duties' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        <h2 className="text-2xl font-bold font-serif text-secondary mb-3 text-center sm:text-left">
          Council Roles & Responsibilities
        </h2>
        <p className="text-slate-500 text-sm mb-8 text-center sm:text-left">
          Click on any position below to read a summary of its operational duties.
        </p>

        {/* Accordion Layout */}
        <div className="space-y-4">
          {duties.map((duty, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={duty.role}
                className="card-premium rounded-xl bg-white border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleDuty(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-secondary text-base hover:bg-slate-50/50 transition cursor-pointer"
                >
                  <span className="font-serif">{duty.role}</span>
                  <svg
                    className={`h-5 w-5 text-slate-400 transform transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-secondary' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50 bg-[#f5eedc]/50/20">
                    {duty.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
