'use client';

import { useState } from 'react';

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create the mailto link to send details to Grand Knight
    const emailSubject = encodeURIComponent(`KofC 11099 Contact Form: ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Hello Council Leadership,\n\nYou have received a message via the website contact form:\n\n` +
      `From: ${formData.name} (${formData.email})\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\nSubmitted from kofc11099.org contact form.`
    );
    
    window.location.href = `mailto:gk11099@mikofc.org?subject=${emailSubject}&body=${emailBody}`;
    setIsSubmitted(true);
  };

  return (
    <div className="py-12 bg-light min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Banner Title */}
        <div className="bg-secondary text-white p-8 rounded-t-lg shadow-md border-b-4 border-accent text-center sm:text-left">
          <h1 className="text-3xl font-bold font-serif tracking-wide">Contact Us</h1>
          <p className="text-sm text-white/80 mt-1">Msgr. John A. Gabriels Council #11099</p>
        </div>

        {/* Page Content Wrapper */}
        <div className="bg-white rounded-b-lg shadow-sm border-x border-b border-[#e2d7c5] overflow-hidden">
          
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
            
            {/* Left Column: Contact Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              <h2 className="text-2xl font-bold font-serif text-secondary mb-2">Send a Message</h2>
              <p className="text-sm text-gray-500 mb-6">
                Have questions about membership, events, or volunteer activities? Send us a message directly.
              </p>

              {isSubmitted ? (
                <div className="p-6 bg-secondary/10 border border-secondary/20 rounded-md text-center">
                  <svg className="mx-auto h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-bold text-secondary mt-2">Message Drafted!</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Your mail application has been opened with a pre-filled draft. If it didn&apos;t open automatically, please send your email directly to <a href="mailto:gk11099@mikofc.org" className="text-secondary font-bold hover:underline">gk11099@mikofc.org</a>.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 rounded bg-primary text-white hover:bg-primary-dark px-4 py-2 text-xs font-bold transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Subject</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Membership inquiry, Golf Outing, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded bg-primary text-white hover:bg-primary-dark px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Send Message &raquo;
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Contact Details & Info */}
            <div className="lg:col-span-5 p-8 sm:p-12 bg-light/50 space-y-8">
              <div>
                <h2 className="text-xl font-bold font-serif text-secondary mb-6 border-b pb-2">Council Leadership</h2>
                
                <div className="space-y-6">
                  {/* Grand Knight */}
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Grand Knight</h3>
                    <p className="text-base text-secondary font-medium">S.K. Christopher Hanson</p>
                    <a href="mailto:gk11099@mikofc.org" className="text-xs font-semibold text-secondary hover:underline">
                      gk11099@mikofc.org
                    </a>
                  </div>

                  {/* Deputy Grand Knight */}
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Deputy Grand Knight & Program Director</h3>
                    <p className="text-base text-secondary font-medium">S.K. Tony Cherniawski</p>
                    <a href="mailto:pd11099@mikofc.org" className="text-xs font-semibold text-secondary hover:underline">
                      pd11099@mikofc.org
                    </a>
                  </div>

                  {/* Chancellor */}
                  <div>
                    <h3 className="font-bold text-gray-800 text-sm">Chancellor & Membership Director</h3>
                    <p className="text-base text-secondary font-medium">S.K. Russell Pate Jr.</p>
                    <a href="mailto:md11099@mikofc.org" className="text-xs font-semibold text-secondary hover:underline">
                      md11099@mikofc.org
                    </a>
                  </div>

                  {/* Insurance Rep */}
                  <div className="p-4 bg-white rounded border border-gray-150 shadow-xs">
                    <h3 className="font-bold text-gray-800 text-xs uppercase tracking-wider text-accent-dark">
                      KofC Insurance Representative
                    </h3>
                    <p className="text-base font-bold text-secondary mt-1">Brennan Hayden</p>
                    <p className="text-sm text-gray-600 font-medium">Phone: 517.505.7300</p>
                    <a href="mailto:brennan.hayden@kofc.org" className="text-xs font-semibold text-secondary hover:underline">
                      brennan.hayden@kofc.org
                    </a>
                  </div>
                </div>
              </div>

              {/* Parish details */}
              <div className="pt-4 border-t border-[#e2d7c5]">
                <h2 className="text-lg font-bold font-serif text-secondary mb-4">Parish Affiliate</h2>
                <div className="flex gap-4 items-start">
                  <img src="/wp-content/uploads/2017/06/Res-Shield.png" alt="Parish Shield" className="h-14 w-auto flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-secondary">
                      <a href="http://www.resurrectionlansing.org/" target="_blank" rel="noreferrer" className="hover:underline">
                        Church of the Resurrection
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600 font-medium leading-relaxed">
                      1514 E. Michigan Ave.<br />
                      Lansing, MI 48912
                    </p>
                  </div>
                </div>
                
                {/* Resurrection Image */}
                <div className="mt-4 rounded-md overflow-hidden border border-[#e2d7c5]">
                  <img
                    src="/wp-content/uploads/2017/06/Lansing.ResurrectionCath..jpg"
                    alt="Resurrection Cathedral"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
