'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';

interface VolunteerSpot {
  id: string;
  role: 'Volunteer' | 'Back up - Alternate';
  time: string;
  spots: { number: number; name: string }[];
}

interface VolunteerDate {
  date: string;
  shifts: VolunteerSpot[];
}

interface VolunteerSheet {
  id: string;
  title: string;
  coordinators: { name: string; email: string };
  details: string;
  dates: VolunteerDate[];
}

const initialSheets: VolunteerSheet[] = [
  {
    id: '41',
    title: 'Coffee and Doughnuts - 2nd shift',
    coordinators: {
      name: 'Chris Hanson and John Gordon',
      email: 'gk11099@mikofc.org,gordonjc1955@gmail.com',
    },
    details: 'Coffee and doughnut crew for after 11 am mass. Looking for 2 volunteers and 2 alternates that can either show up to be trained for a later date or be available if one of the 2 main volunteers have an unexpected conflict.',
    dates: [
      {
        date: 'July 19, 2026',
        shifts: [
          {
            id: '1a',
            role: 'Volunteer',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: 'John G.' },
              { number: 2, name: '' },
            ],
          },
          {
            id: '1b',
            role: 'Back up - Alternate',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
        ],
      },
      {
        date: 'July 26, 2026',
        shifts: [
          {
            id: '2a',
            role: 'Volunteer',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
          {
            id: '2b',
            role: 'Back up - Alternate',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
        ],
      },
      {
        date: 'August 2, 2026',
        shifts: [
          {
            id: '3a',
            role: 'Volunteer',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
          {
            id: '3b',
            role: 'Back up - Alternate',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
        ],
      },
      {
        date: 'August 9, 2026',
        shifts: [
          {
            id: '4a',
            role: 'Volunteer',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
          {
            id: '4b',
            role: 'Back up - Alternate',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
        ],
      },
      {
        date: 'August 16, 2026',
        shifts: [
          {
            id: '5a',
            role: 'Volunteer',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
          {
            id: '5b',
            role: 'Back up - Alternate',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
        ],
      },
      {
        date: 'August 23, 2026',
        shifts: [
          {
            id: '6a',
            role: 'Volunteer',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
          {
            id: '6b',
            role: 'Back up - Alternate',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
        ],
      },
      {
        date: 'August 30, 2026',
        shifts: [
          {
            id: '7a',
            role: 'Volunteer',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
          {
            id: '7b',
            role: 'Back up - Alternate',
            time: '11:30 am - 2:00 pm',
            spots: [
              { number: 1, name: '' },
              { number: 2, name: '' },
            ],
          },
        ],
      },
    ],
  },
];

export default function Page() {
  const [selectedSheet, setSelectedSheet] = useState<VolunteerSheet | null>(null);
  const [signupModal, setSignupModal] = useState<{
    date: string;
    role: string;
    time: string;
    spotNum: number;
  } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [successInfo, setSuccessInfo] = useState<{
    emailLink: string;
    coordinatorName: string;
  } | null>(null);

  const handleOpenSignup = (date: string, role: string, time: string, spotNum: number) => {
    setSignupModal({ date, role, time, spotNum });
    setSuccessInfo(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupModal || !selectedSheet) return;

    // Create the pre-filled mailto link to send details to coordinators
    const subject = encodeURIComponent(`Volunteer Signup: ${selectedSheet.title}`);
    const body = encodeURIComponent(
      `Hello Chris and John,\n\nI would like to sign up for the following volunteer position:\n\n` +
      `Sheet: ${selectedSheet.title}\n` +
      `Date: ${signupModal.date}\n` +
      `Role: ${signupModal.role}\n` +
      `Time: ${signupModal.time}\n` +
      `Spot: #${signupModal.spotNum}\n\n` +
      `My Details:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Thank you!`
    );

    const mailtoLink = `mailto:${selectedSheet.coordinators.email}?subject=${subject}&body=${body}`;

    setSuccessInfo({
      emailLink: mailtoLink,
      coordinatorName: selectedSheet.coordinators.name,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Volunteer Opportunities"
        subtitle="Give back to your parish community. View schedules and sign up for open shifts."
        breadcrumbs={[
          { name: 'Events', href: '/upcoming-events' },
          { name: 'Volunteer Opportunities', href: '/volunteer-opportunities' },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-slate-500 text-sm max-w-2xl mb-10 text-center sm:text-left leading-relaxed">
          Volunteers will receive a confirmation email for each volunteer opportunity in which they sign up for. Please provide accurate contact information so that the Event Coordinator can reach you if necessary. Thank you.
        </p>

        {!selectedSheet ? (
          <div>
            <h2 className="text-2xl font-bold font-serif text-secondary mb-8 border-b pb-2">
              Active Sign-up Sheets
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {initialSheets.map((sheet) => {
                // Calculate open spots
                let openCount = 0;
                sheet.dates.forEach((d) => {
                  d.shifts.forEach((s) => {
                    s.spots.forEach((sp) => {
                      if (!sp.name) openCount++;
                    });
                  });
                });

                return (
                  <div
                    key={sheet.id}
                    className="card-premium p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-4">
                        <h3 className="text-xl font-bold text-secondary font-serif leading-snug">
                          {sheet.title}
                        </h3>
                        <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-secondary/25 text-emerald-700 text-xs font-bold">
                          <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
                          {openCount} Spots Open
                        </span>
                      </div>
                      
                      <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-6">
                        {sheet.details}
                      </p>

                      <div className="space-y-2 text-xs font-semibold text-slate-400 mb-6">
                        <p>START DATE: <span className="text-secondary">Nov 16, 2025</span></p>
                        <p>END DATE: <span className="text-secondary">Aug 30, 2026</span></p>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedSheet(sheet)}
                      className="w-full text-center rounded-xl bg-secondary hover:bg-secondary-dark border border-accent text-white py-3 text-sm font-extrabold uppercase tracking-wider transition cursor-pointer shadow-sm shadow-primary/20"
                    >
                      View Shift Calendar &raquo;
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Instruction Download */}
            <div className="mt-16 card-premium p-8 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-secondary text-base leading-snug">Instructions for signing up</h3>
                  <p className="text-xs text-slate-400 font-medium mt-1">Read how the signup workflow operates.</p>
                </div>
              </div>
              <a
                href="/wp-content/uploads/2023/09/Volunteer-Sign-Up-instructions-2.pdf"
                download
                className="w-full md:w-auto text-center rounded-xl bg-secondary hover:bg-secondary-dark text-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-md"
              >
                Download Guide (PDF)
              </a>
            </div>
          </div>
        ) : (
          <div>
            {/* Back button */}
            <button
              onClick={() => setSelectedSheet(null)}
              className="mb-8 text-sm font-extrabold text-secondary hover:text-secondary-dark inline-flex items-center gap-1 cursor-pointer transition"
            >
              &larr; Back to Sheets
            </button>

            {/* Banner Details */}
            <div className="card-premium p-8 rounded-2xl bg-white border border-slate-200 mb-10">
              <h2 className="text-2.5xl font-bold font-serif text-secondary mb-2">{selectedSheet.title}</h2>
              <div className="text-sm text-slate-500 mb-4 font-semibold">
                Event Chairs:{' '}
                <a
                  href={`mailto:${selectedSheet.coordinators.email}`}
                  className="text-secondary hover:underline"
                >
                  {selectedSheet.coordinators.name}
                </a>
              </div>
              <p className="text-sm text-slate-600 bg-light/75 border border-[#e2d7c5] p-5 rounded-xl leading-relaxed">
                {selectedSheet.details}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-secondary font-serif mb-6">Shift Directory</h3>

            {/* Date list */}
            <div className="space-y-6">
              {selectedSheet.dates.map((d) => (
                <div key={d.date} className="card-premium rounded-2xl bg-white border border-slate-200 overflow-hidden">
                  <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                    <span className="font-bold text-secondary font-serif text-lg">{d.date}</span>
                  </div>

                  <div className="p-6 divide-y divide-slate-100 space-y-6">
                    {d.shifts.map((shift, idx) => (
                      <div key={shift.id} className={`${idx === 0 ? '' : 'pt-6'}`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-800 text-sm">{shift.role}</span>
                            <span className={`inline-flex px-2 py-0.5 rounded text-xxs font-bold uppercase tracking-wider border ${
                              shift.role === 'Volunteer'
                                ? 'bg-secondary/15 text-secondary border-secondary/25'
                                : 'bg-amber-50 text-amber-700 border-amber-100'
                            }`}>
                              {shift.role === 'Volunteer' ? 'Core Staff' : 'Alternate'}
                            </span>
                          </div>
                          <span className="text-xs font-bold text-slate-400 bg-[#f5eedc] px-2.5 py-1 rounded-md">
                            TIME: {shift.time}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {shift.spots.map((spot) => (
                            <div
                              key={spot.number}
                              className={`flex items-center justify-between p-4 rounded-xl border text-sm transition duration-200 ${
                                spot.name
                                  ? 'bg-[#f5eedc]/50/50 border-[#e2d7c5] text-slate-500'
                                  : 'bg-white border-dashed border-slate-300 hover:border-primary/50 text-slate-800'
                              }`}
                            >
                              <span className="font-semibold text-slate-400">Position #{spot.number}:</span>
                              {spot.name ? (
                                <span className="font-bold text-slate-600 bg-white border border-[#e2d7c5] px-3 py-1 rounded-lg inline-flex items-center gap-1 shadow-xxs">
                                  <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                  </svg>
                                  {spot.name}
                                </span>
                              ) : (
                                <button
                                  onClick={() =>
                                    handleOpenSignup(d.date, shift.role, shift.time, spot.number)
                                  }
                                  className="rounded-lg bg-accent hover:bg-accent-dark hover:scale-102 text-white px-4 py-2 text-xs font-extrabold uppercase tracking-wider transition cursor-pointer shadow-xs shadow-accent/20"
                                >
                                  Sign up
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Signup Form Modal */}
      {signupModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden border border-[#e2d7c5] animate-in fade-in zoom-in-95 duration-200">
            <div className="bg-secondary-dark text-white p-6 relative border-b-4 border-accent">
              <button
                onClick={() => setSignupModal(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold cursor-pointer transition"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold font-serif">Shift Sign-up</h3>
              
              <div className="text-xs font-semibold text-slate-300 mt-4 space-y-1.5 bg-white/5 p-3 rounded-lg border border-white/5">
                <p><span className="text-accent uppercase tracking-wider font-bold">DATE:</span> {signupModal.date}</p>
                <p><span className="text-accent uppercase tracking-wider font-bold">SHIFT:</span> {signupModal.role}</p>
                <p><span className="text-accent uppercase tracking-wider font-bold">TIME:</span> {signupModal.time}</p>
                <p><span className="text-accent uppercase tracking-wider font-bold">POSITION:</span> Spot #{signupModal.spotNum}</p>
              </div>
            </div>

            {!successInfo ? (
              <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-[#e2d7c5] bg-[#f5eedc]/50 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition outline-none"
                    placeholder="E.g. S.K. John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-[#e2d7c5] bg-[#f5eedc]/50 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-400 tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-[#e2d7c5] bg-[#f5eedc]/50 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white focus:border-transparent transition outline-none"
                    placeholder="(555) 555-5555"
                  />
                </div>

                <div className="pt-4 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setSignupModal(null)}
                    className="rounded-lg bg-[#f5eedc]/50 text-slate-600 hover:bg-[#f5eedc] px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="rounded-lg bg-secondary hover:bg-secondary-dark border border-accent text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer shadow-sm shadow-primary/20"
                  >
                    Continue &raquo;
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 space-y-6">
                <div className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-emerald-50 text-secondary border border-secondary/25 mb-3 animate-bounce">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-xl text-secondary font-serif">Confirm Your Registration</h4>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed text-center">
                  To complete your volunteer sign-up and notify the event coordinators (<strong>{successInfo.coordinatorName}</strong>), click the button below to dispatch your confirmation email.
                </p>

                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={successInfo.emailLink}
                    onClick={() => setSignupModal(null)}
                    className="w-full text-center rounded-xl bg-secondary hover:bg-secondary-dark border border-accent py-3.5 text-sm font-extrabold uppercase tracking-wider text-white transition shadow-md shadow-primary/20 cursor-pointer"
                  >
                    Send Email & Confirm &raquo;
                  </a>
                  <button
                    type="button"
                    onClick={() => setSignupModal(null)}
                    className="w-full text-center rounded-xl border border-[#e2d7c5] hover:bg-[#f5eedc]/50 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-500 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
