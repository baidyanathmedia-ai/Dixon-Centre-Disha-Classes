import React from 'react';
import { 
  Gift, 
  Wrench, 
  ShieldCheck, 
  Monitor, 
  Cpu, 
  Briefcase,
  CheckCircle
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/centreData';

const iconMap: Record<string, React.ElementType> = {
  Gift,
  Wrench,
  ShieldCheck,
  Monitor,
  Cpu,
  Briefcase
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100/80 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            Why Choose Us
          </div>
          <h2
            id="why-choose-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Advantages of Training at Dixon Centre
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Combining STPI Deoghar's institutional tech environment with direct hands-on vocational instruction and post-course placement facilitation.
          </p>
        </div>

        {/* 6 Modern Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.iconName] || CheckCircle;
            return (
              <div
                key={item.id}
                id={`feature-card-${idx}`}
                className="p-6 rounded-2xl bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/40 border border-slate-200/90 hover:border-blue-300 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-600 text-blue-700 group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-4 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-blue-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Centre Benefit</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
