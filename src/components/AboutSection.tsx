import React from 'react';
import { 
  Wrench, 
  Monitor, 
  Cpu, 
  GraduationCap, 
  Building2, 
  TrendingUp, 
  UserCheck, 
  MapPin,
  CheckCircle 
} from 'lucide-react';
import { CENTRE_DATA, imgStpiReception, imgDishaSign } from '../data/centreData';

export const AboutSection: React.FC = () => {
  const keyPillars = [
    {
      icon: Wrench,
      title: "Practical Learning Environment",
      desc: "Immersive workshop setting designed to develop real-world skills through direct engagement."
    },
    {
      icon: Monitor,
      title: "Computer Facilities",
      desc: "Modern IT laboratory with dedicated desktop workstations for digital training."
    },
    {
      icon: Cpu,
      title: "Electronics & Practical Laboratory",
      desc: "Specialized workstations equipped with testing instruments, soldering kits, and test benches."
    },
    {
      icon: GraduationCap,
      title: "Hands-on Training",
      desc: "Active task-based instruction emphasizing practical device troubleshooting and component handling."
    },
    {
      icon: Building2,
      title: "Professional Infrastructure",
      desc: "Hosted within the STPI Deoghar institutional campus with clean classrooms and testing labs."
    },
    {
      icon: TrendingUp,
      title: "Career-Focused Learning",
      desc: "Curriculum tailored to prepare trainees for real industry workflows and career opportunities."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            About Our Centre
          </div>
          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Welcome to Dixon Centre – Disha Classes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Dixon Centre – Disha Classes delivers the <strong className="text-slate-900 font-bold">DISHA (DIXON Innovation, Skills & Holistic Advancement Program)</strong> inside STPI Deoghar. Our mission is to equip motivated youth with in-demand practical, technical, and digital competencies through an intensive, completely free 45-day curriculum.
          </p>
        </div>

        {/* Highlight Grid & Campus Info Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left: STPI Deoghar Campus context */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-blue-300 text-xs font-bold tracking-wide uppercase mb-3">
                <Building2 className="w-4 h-4" />
                <span>Premier Training Venue</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                Located inside STPI Deoghar
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                The training is conducted within the Software Technology Parks of India (STPI) facility in Jasidih, Deoghar, ensuring access to high-standard technology infrastructure, clean classrooms, and professional labs.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-slate-700/80 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free Course Enrollment</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Only 45 Days Duration</span>
                </div>
                <div className="flex items-center gap-2 text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Job Placement Opportunity from Dixon Centre</span>
                </div>
              </div>
            </div>

            {/* Centre Head card */}
            <div className="mt-8 pt-6 border-t border-slate-700/70 flex items-center gap-3.5 relative z-10">
              <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold shrink-0">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Centre Head</div>
                <div className="text-base font-bold text-white">{CENTRE_DATA.centreHead}</div>
                <div className="text-xs text-blue-300">Dixon Centre – Disha Classes</div>
              </div>
            </div>

            {/* Faded background image behind container */}
            <div className="absolute inset-0 opacity-20 mix-blend-overlay">
              <img
                src={imgStpiReception}
                alt="STPI Deoghar Reception Lobby"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: 6 Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  id={`about-pillar-${idx}`}
                  className="p-5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200/80 hover:border-blue-200 transition-all duration-200 text-left flex flex-col justify-start"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Location Landmark reminder banner */}
        <div
          id="about-location-strip"
          className="p-4 sm:p-5 rounded-xl bg-blue-50/80 border border-blue-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-600 text-white shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Landmark Location: Near Sawagat Petrol Pump & Sivanta Hotel, Jasidih, Deoghar
              </div>
              <div className="text-xs text-slate-600 mt-0.5">
                Easily accessible training campus inside STPI Deoghar with reliable transit links.
              </div>
            </div>
          </div>

          <a
            id="about-directions-btn"
            href={CENTRE_DATA.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-white hover:bg-slate-100 text-blue-800 text-xs sm:text-sm font-bold border border-blue-200 shadow-2xs shrink-0"
          >
            View on Map
          </a>
        </div>

      </div>
    </section>
  );
};
