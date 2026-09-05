import React from 'react';
import { Phone, MessageSquare, Sparkles } from 'lucide-react';
import { CENTRE_DATA } from '../data/centreData';

interface StickyMobileCTAProps {
  onApplyClick: () => void;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onApplyClick }) => {
  return (
    <div
      id="sticky-mobile-cta-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2.5"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL NOW */}
        <a
          id="mobile-sticky-call-btn"
          href={CENTRE_DATA.callLink}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white active:bg-slate-800 transition-colors shadow-xs"
        >
          <Phone className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight">
            CALL NOW
          </span>
        </a>

        {/* WHATSAPP */}
        <a
          id="mobile-sticky-whatsapp-btn"
          href={CENTRE_DATA.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 transition-colors shadow-xs"
        >
          <MessageSquare className="w-4 h-4 text-white mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight">
            WHATSAPP
          </span>
        </a>

        {/* APPLY NOW */}
        <button
          id="mobile-sticky-apply-btn"
          onClick={onApplyClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 text-white active:bg-blue-700 transition-colors shadow-xs cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300 mb-0.5" />
          <span className="text-[10px] font-extrabold uppercase tracking-tight">
            APPLY NOW
          </span>
        </button>
      </div>
    </div>
  );
};
