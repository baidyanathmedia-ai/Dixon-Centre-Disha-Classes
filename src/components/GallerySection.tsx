import React, { useState } from 'react';
import { Camera, Maximize2, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/centreData';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Classroom', 'Workstations', 'STPI Campus', 'Notices & Syllabus', 'Cafeteria'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const lightboxImages = filteredItems.map((item) => ({
    image: item.image,
    title: item.caption,
    description: item.description,
    tag: item.category
  }));

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Centre Gallery</span>
          </div>
          <h2
            id="gallery-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Photos from STPI Deoghar Training Centre
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Glimpse into our real classrooms, practical electronic repair stations, and computer facilities at STPI Deoghar.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`gallery-filter-${cat.toLowerCase()}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid/Masonry Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-sm text-[11px] font-semibold text-blue-200 border border-slate-700">
                    <Tag className="w-3 h-3" />
                    <span>{item.category}</span>
                  </span>
                </div>

                {/* Expand Icon Top Right */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-lg bg-white/90 text-slate-900 backdrop-blur-sm shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Caption & Description at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-left text-white">
                  <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                    {item.caption}
                  </h3>
                  {item.description && (
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <span className="inline-block mt-2 text-[11px] font-semibold text-blue-300 group-hover:text-blue-200 underline">
                    Click to view full photo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        images={lightboxImages}
        currentIndex={lightboxIndex ?? 0}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
};
