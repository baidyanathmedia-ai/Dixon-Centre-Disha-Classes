import React from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  ShieldAlert, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  UserCheck
} from 'lucide-react';
import { CENTRE_DATA, TIMELINE_STEPS, imgDixonLogo, imgDixonRecruitment } from '../data/centreData';

interface PlacementSectionProps {
  onEnquireClick: () => void;
}

export const PlacementSection: React.FC<PlacementSectionProps> = ({ onEnquireClick }) => {
  return (
    <section id="placement" className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute -right-24 top-1/3 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
            <span>Career Pathways & Placement</span>
          </div>
          <h2
            id="placement-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Complete the Course. Move Towards Your Career.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mx-auto font-medium">
            After successful completion of the 45-day course, eligible/qualified participants can receive a job placement opportunity/offer from Dixon Centre, subject to the applicable selection and placement process.
          </p>
        </div>

        {/* 5-Step Visual Timeline */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Your 5-Step Journey
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {TIMELINE_STEPS.map((item, idx) => (
              <div
                key={idx}
                id={`timeline-step-${item.step}`}
                className="relative flex flex-col p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-300 transition-all duration-200 text-left group"
              >
                {/* Step number badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-blue-600 font-mono">
                    {item.step}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-blue-100 group-hover:bg-blue-600 text-blue-700 group-hover:text-white flex items-center justify-center transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Bottom active line */}
                <div className="mt-4 h-1 w-12 rounded-full bg-blue-500/40 group-hover:w-full group-hover:bg-blue-600 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Placement Highlight Banner & Verified Policy Card */}
        <div className="max-w-5xl mx-auto rounded-2xl bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 text-left">
              {/* Partner Logo and Tag */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white p-1 border border-slate-700 flex items-center justify-center">
                  <img
                    src={imgDixonLogo}
                    alt="Dixon Technologies"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs text-blue-300 font-bold uppercase tracking-wider">
                    Placement Facilitation Partner
                  </div>
                  <div className="text-sm font-bold text-white">
                    Dixon Electro Appliances / Dixon Centre
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug mb-3">
                Job Placement Opportunity for Eligible Candidates
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Gain direct placement facilitation from Dixon Centre upon successful course completion. Eligible candidates who finish the 45-day BY TRC curriculum are considered for vocational openings.
              </p>

              {/* Verified Placement Transparency Notice */}
              <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-slate-300 mb-6">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Official Criteria:</strong> Job placement opportunity/offer from Dixon Centre after successful completion of the course, subject to the applicable selection and placement process.
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  id="placement-enquire-btn"
                  onClick={onEnquireClick}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Enquire About Placement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="placement-call-head-btn"
                  href={CENTRE_DATA.callLink}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/20 transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-blue-400" />
                  <span>Call Centre Head ({CENTRE_DATA.contactNumber})</span>
                </a>
              </div>
            </div>

            {/* Right: Real notice board recruitment card */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700 shadow-lg relative group">
                <img
                  src={imgDixonRecruitment}
                  alt="Dixon Electro Appliances Recruitment Board"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3.5 text-left">
                  <div className="text-[11px] font-bold text-blue-300 uppercase tracking-wider">
                    Actual Centre Notice Board
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Dixon Electro Appliances Placement & Career Notice at STPI Deoghar
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
