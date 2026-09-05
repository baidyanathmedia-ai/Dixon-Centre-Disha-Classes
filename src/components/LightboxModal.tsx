import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: {
    image: string;
    title: string;
    description?: string;
    tag?: string;
  }[];
  currentIndex: number;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
      if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentItem = images[currentIndex];

  return (
    <div
      id="lightbox-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="lightbox-container"
        className="relative max-w-5xl w-full bg-slate-900 text-white rounded-2xl overflow-hidden shadow-2xl border border-slate-700 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-3">
            {currentItem.tag && (
              <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-blue-600 text-white">
                {currentItem.tag}
              </span>
            )}
            <h3 className="text-base font-bold text-white tracking-tight">
              {currentItem.title}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-mono">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              id="lightbox-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex items-center justify-center bg-black/40 min-h-[300px] max-h-[70vh] overflow-hidden">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[65vh] w-auto max-w-full object-contain mx-auto"
            referrerPolicy="no-referrer"
          />

          {/* Prev Button */}
          {images.length > 1 && (
            <button
              id="lightbox-prev-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex - 1 + images.length) % images.length);
              }}
              className="absolute left-3 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-colors border border-slate-700 shadow-md cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <button
              id="lightbox-next-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNavigate((currentIndex + 1) % images.length);
              }}
              className="absolute right-3 p-2.5 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white transition-colors border border-slate-700 shadow-md cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>

        {/* Bottom Details Bar */}
        {currentItem.description && (
          <div className="px-6 py-4 bg-slate-900 border-t border-slate-800 text-left">
            <p className="text-xs sm:text-sm text-slate-300">
              {currentItem.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
