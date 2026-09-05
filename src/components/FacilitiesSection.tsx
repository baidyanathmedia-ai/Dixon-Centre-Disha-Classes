import React, { useState } from 'react';
import { Maximize2, ShieldCheck, Eye } from 'lucide-react';
import { FACILITIES_DATA } from '../data/centreData';
import { LightboxModal } from './LightboxModal';

export const FacilitiesSection: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const lightboxImages = FACILITIES_DATA.map((item) => ({
    image: item.image,
    title: item.title,
    description: item.description,
    tag: item.tag
  }));

  return (
    <section id="facilities" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            Training Infrastructure
          </div>
          <h2
            id="facilities-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Learn in a Real Practical Environment
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Explore the dedicated labs, testing instruments, computer rooms, and instructional classrooms provided at STPI Deoghar for the BY TRC Course.
          </p>
        </div>

        {/* 6 Facilities Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACILITIES_DATA.map((item, idx) => (
            <div
              key={item.id}
              id={`facility-card-${item.id}`}
              className="group rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg overflow-hidden transition-all duration-300 flex flex-col text-left cursor-pointer"
              onClick={() => setActiveLightboxIndex(idx)}
            >
              {/* Image Container with Hover zoom and badge */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[11px] font-bold text-slate-800 border border-white/60 shadow-2xs">
                    {item.tag}
                  </span>
                </div>

                {/* Inspect Button on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-lg bg-blue-600/90 text-white backdrop-blur-sm shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Category indicator bottom left */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-xs font-semibold text-blue-300 block uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Description & Lightbox CTA */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to inspect lab view</span>
                  </span>
                  <span className="text-slate-400 group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={activeLightboxIndex !== null}
        onClose={() => setActiveLightboxIndex(null)}
        images={lightboxImages}
        currentIndex={activeLightboxIndex ?? 0}
        onNavigate={(newIdx) => setActiveLightboxIndex(newIdx)}
      />
    </section>
  );
};
