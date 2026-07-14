'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is the Knights of Columbus?',
    answer: 'The Knights of Columbus is an international Catholic lay society, best described as a Catholic family fraternal service organization. Begun over a century ago as a men’s fraternal benefit society, it has evolved into a service organization with a strong family orientation. The Knights of Columbus is present in the United States, Canada, the Philippines, Mexico, and several other countries. Its many programs and activities benefit members and their families, while aiding the Catholic Church and the community at large.',
  },
  {
    question: 'When and why did the Knights of Columbus begin?',
    answer: 'On October 2, 1881, Father Michael J. McGivney, assistant pastor at St. Mary’s Church in New Haven, Connecticut, brought together a group of laymen to discuss his dream for a Catholic fraternal benefit society. It was designed to assist the widows and orphans of deceased members through its life insurance program and boost members’ sense of pride in their Catholic religion, frequently challenged in the anti-Catholic climate of 19th-century America. The organization was formally launched in early February 1882.',
  },
  {
    question: 'Why the name?',
    answer: 'The founders chose Christopher Columbus as the patron of the new organization to emphasize Catholic contributions to the exploration and evangelization of the Americas. Calling the members "Knights" signified a commitment to high ideals of religious devotion and service to others.',
  },
  {
    question: 'How is the membership distributed and organized?',
    answer: 'Members have reached at least the "First Degree" and most are "Third Degree" members. For those who wish to participate, there is also a Fourth Degree, whose members make a special commitment to the virtue of patriotism. The Knights of Columbus is organized into local units called councils. These local units are grouped at the state level under a state council, with the international governing body (the Supreme Council) headquartered in New Haven, Connecticut.',
  },
  {
    question: 'What do the Knights of Columbus do?',
    answer: 'A typical council has a year-round program of religious, service, and social activities tailored to local circumstances. Some of our activities include distributing food to the needy, conducting sports programs for youth, running low-cost housing programs, hosting fundraisers for families with medical bills, painting classrooms, supporting vocations to the priesthood and religious life, and funding Special Olympics projects.',
  },
  {
    question: 'Does the Knights of Columbus have a position on abortion and the right to life?',
    answer: 'The Knights of Columbus regards abortion as a grave moral evil that does incalculable social harm. It holds that the unborn deserve the full protection of the law and consistently supports peaceful, nonviolent measures to correct judicial mistakes legalizing abortion. Since 1973, the K of C has printed and distributed free of charge millions of items of pro-life educational literature and supported pregancy centers.',
  },
  {
    question: 'How do men join the Knights of Columbus?',
    answer: 'A man applying for membership must be a practicing Catholic, at least 18 years of age, in union with the Holy See. Qualified members can purchase Knights of Columbus insurance if they wish to do so, though it is not a requirement to join.',
  },
  {
    question: 'Where can I get more information?',
    answer: 'The international headquarters of the Knights of Columbus are located at 1 Columbus Plaza, New Haven, CT 06510 (203/772-2130). You can also reach out to our local Grand Knight at gk11099@mikofc.org.',
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about the history, structure, and mission of the Knights of Columbus."
        breadcrumbs={[
          { name: 'About Us', href: '/about-us' },
          { name: 'FAQ', href: '/faq' },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-16 w-full">
        {/* Emblem Image placeholder box */}
        <div className="flex justify-center mb-10">
          <div className="p-3 bg-white border border-[#e2d7c5] rounded-2xl shadow-sm">
            <img
              src="/wp-content/uploads/2017/06/3rd-kclogo-clr.gif"
              alt="Knights of Columbus emblem"
              className="h-28 w-auto object-contain"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold font-serif text-secondary mb-6 text-center sm:text-left">
          General FAQ
        </h2>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="card-premium rounded-xl bg-white border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-secondary text-base hover:bg-slate-50/50 transition cursor-pointer"
                >
                  <span className="font-serif leading-snug">{faq.question}</span>
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
                    {faq.answer}
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
