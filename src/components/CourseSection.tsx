import React from 'react';
import { Clock, Gift, MapPin, CheckCircle, ArrowRight, ShieldCheck, BookOpen, Layers } from 'lucide-react';
import { CENTRE_DATA, COURSE_MODULE_PLACEHOLDERS } from '../data/centreData';

interface CourseSectionProps {
  onApplyClick: () => void;
}

export const CourseSection: React.FC<CourseSectionProps> = ({ onApplyClick }) => {
  return (
    <section id="course" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100/90 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            Featured Training Program
          </div>
          <h2
            id="course-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Vocational Skill Training at STPI Deoghar
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            A focused, practical curriculum crafted to build essential technical confidence within 45 days, followed by job placement opportunities.
          </p>
        </div>

        {/* PROMINENT COURSE CARD */}
        <div
          id="course-highlight-card"
          className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-blue-600 shadow-xl overflow-hidden relative"
        >
          {/* Top Badge Strip */}
          <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 px-6 py-4 text-white flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-200" />
              <span className="font-bold text-sm sm:text-base tracking-wide uppercase">
                Official Course Spotlight
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-extrabold text-white border border-white/30">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Dixon Centre – Disha Classes</span>
            </div>
          </div>

          <div className="p-6 sm:p-10">
            {/* Big Program Title & 3 Core Pills */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-blue-700 tracking-wider uppercase block mb-1">
                  Skill Development Program
                </span>
                <h3
                  id="course-title"
                  className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight"
                >
                  {CENTRE_DATA.courseName}
                </h3>
                <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl font-medium">
                  Learn practical skills in a focused 45-day training program and take your next step toward career opportunities.
                </p>
              </div>

              {/* 3 Core Metric Highlights */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 shrink-0">
                <div className="p-3 sm:p-4 rounded-2xl bg-blue-50/90 border border-blue-200 text-center flex flex-col items-center justify-center">
                  <Gift className="w-5 h-5 text-blue-600 mb-1" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Fee</span>
                  <span className="text-sm sm:text-lg font-black text-blue-700">FREE</span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-amber-50/90 border border-amber-200 text-center flex flex-col items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-600 mb-1" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Duration</span>
                  <span className="text-sm sm:text-lg font-black text-amber-700">45 DAYS</span>
                </div>

                <div className="p-3 sm:p-4 rounded-2xl bg-emerald-50/90 border border-emerald-200 text-center flex flex-col items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-600 mb-1" />
                  <span className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase">Venue</span>
                  <span className="text-xs sm:text-sm font-black text-emerald-800">STPI DEOGHAR</span>
                </div>
              </div>
            </div>

            {/* Course Structure / Syllabus Placeholders */}
            <div className="py-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <h4 className="text-base font-bold text-slate-900">
                    Curriculum Framework
                  </h4>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                  Practical Hands-on Syllabus
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {COURSE_MODULE_PLACEHOLDERS.map((item, idx) => (
                  <div
                    key={idx}
                    id={`course-module-${idx}`}
                    className="p-4 rounded-xl bg-slate-50 hover:bg-blue-50/40 border border-slate-200/90 transition-colors text-left"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                        {item.moduleNumber}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                    <div className="text-sm font-bold text-slate-900 mb-1">
                      {item.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Note on Course Syllabus Transparency */}
              <p className="mt-3 text-[11px] text-slate-500 text-left italic">
                * Note: Course modules focus on hands-on practical skill development, electronics testing, and computer applications as scheduled by the centre.
              </p>
            </div>

            {/* Action Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <div className="text-xs font-bold text-slate-500 uppercase">Immediate Batch Enrolment</div>
                <div className="text-sm font-extrabold text-blue-900">No Admission Fee • Zero Course Charges</div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  id="course-apply-now-btn"
                  onClick={onApplyClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all cursor-pointer"
                >
                  <span>Apply for BY TRC Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
