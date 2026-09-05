import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';
import { FAQ_DATA, CENTRE_DATA } from '../data/centreData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2
            id="faq-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
            Clear, verified answers regarding the FREE 45-Day BY TRC Course at Dixon Centre STPI Deoghar.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden text-left ${
                  isOpen
                    ? 'border-blue-300 bg-blue-50/40 shadow-xs'
                    : 'border-slate-200 bg-slate-50 hover:bg-white'
                }`}
              >
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {item.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-600 text-white rotate-180'
                        : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-700 leading-relaxed border-t border-blue-100/70"
                  >
                    <p className="font-medium">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-5 rounded-2xl bg-slate-100/90 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Have another question about the course?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Centre Head <strong>{CENTRE_DATA.centreHead}</strong> is available to assist you.
            </p>
          </div>
          <a
            id="faq-call-helpline-btn"
            href={CENTRE_DATA.callLink}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-xs shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call {CENTRE_DATA.contactNumber}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
