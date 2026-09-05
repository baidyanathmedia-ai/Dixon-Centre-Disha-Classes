import React from 'react';
import { Phone, CheckCircle2, MapPin, ArrowRight, ShieldCheck, Sparkles, Building2, Clock, Award } from 'lucide-react';
import {
  CENTRE_DATA,
  HIGHLIGHT_BADGES,
  imgDishaSign,
  imgClassroomStudents,
  imgStpiReception,
  imgDixonLogo
} from '../data/centreData';

interface HeroProps {
  onApplyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/70 via-white to-slate-50 border-b border-slate-200/60"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-200/30 via-indigo-100/40 to-sky-100/30 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Message & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Micro-badge / Location & Dixon Partner Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <div
                id="hero-trust-location-tag"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-300/80 text-blue-900 text-xs sm:text-sm font-semibold shadow-xs"
              >
                <Building2 className="w-4 h-4 text-blue-700" />
                <span>STPI Deoghar, Jasidih • DISHA Program</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-slate-700">
                <img
                  src={imgDixonLogo}
                  alt="Dixon"
                  className="w-4 h-4 object-contain"
                  referrerPolicy="no-referrer"
                />
                <span>Dixon Technologies Placement Partner</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-main-headline"
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4"
            >
              Build Your Skills.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">
                Start Your Career.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheadline"
              className="text-lg sm:text-xl font-medium text-slate-700 leading-relaxed mb-6 max-w-2xl"
            >
              <span className="font-bold text-blue-800">FREE 45-Day BY TRC Course</span> at{' '}
              <span className="font-semibold text-slate-900">Dixon Centre – Disha Classes</span>,{' '}
              STPI Deoghar.
            </p>

            {/* Highlight Badges */}
            <div
              id="hero-highlight-badges"
              className="flex flex-wrap gap-2.5 sm:gap-3 mb-8"
            >
              {HIGHLIGHT_BADGES.map((badge, idx) => (
                <div
                  key={idx}
                  id={`hero-badge-${idx}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-white text-blue-800 shadow-sm border border-blue-200/80"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                id="hero-primary-apply-cta"
                onClick={onApplyClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base shadow-md shadow-blue-600/20 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                id="hero-secondary-call-cta"
                href={CENTRE_DATA.callLink}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-base border border-slate-300 shadow-xs transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call {CENTRE_DATA.contactNumber}</span>
              </a>
            </div>

            {/* Quick Key Facts Bar */}
            <div
              id="hero-quick-facts-strip"
              className="w-full pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm"
            >
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">45 Days</div>
                  <div className="text-slate-500">Focused Training</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-emerald-700">100% Free</div>
                  <div className="text-slate-500">No Course Fee</div>
                </div>
              </div>

              <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-slate-900">Placement Opportunity</div>
                  <div className="text-slate-500">From Dixon Centre</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with Real Drive Photos */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-xl" />

              {/* Main Photo Card */}
              <div
                id="hero-image-card"
                className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-200 group"
              >
                <img
                  src={imgDishaSign}
                  alt="DISHA Program Board at STPI Deoghar"
                  className="w-full h-[320px] sm:h-[390px] object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-600/90 backdrop-blur-sm text-white text-xs font-semibold mb-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>STPI Deoghar Training Centre</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                    DISHA: Dixon Innovation & Skills Program
                  </h3>
                  <p className="text-xs text-slate-200 mt-0.5 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 inline shrink-0" />
                    <span>STPI Deoghar, Near Sawagat Petrol Pump & Sivanta Hotel, Jasidih</span>
                  </p>
                </div>

                {/* Floating Badge (Top-Right) */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md border border-slate-200/80 text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Course Fee
                  </span>
                  <span className="text-sm font-extrabold text-emerald-600">
                    100% FREE
                  </span>
                </div>
              </div>

              {/* Secondary Floating Card with classroom photo */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-200/90 max-w-xs">
                <img
                  src={imgClassroomStudents}
                  alt="Students in classroom"
                  className="w-14 h-14 rounded-lg object-cover border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Active Training Batches
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">
                    Classrooms & computer systems at STPI Deoghar
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
