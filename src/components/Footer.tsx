import React from 'react';
import { MapPin, Phone, MessageSquare, Building2, UserCheck, ShieldCheck, Heart } from 'lucide-react';
import { CENTRE_DATA, imgDixonLogo } from '../data/centreData';

export const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Centre', href: '#about' },
    { label: 'BY TRC Course', href: '#course' },
    { label: 'Placement Opportunity', href: '#placement' },
    { label: 'Facilities & Labs', href: '#facilities' },
    { label: 'Centre Gallery', href: '#gallery' },
    { label: 'Location & Map', href: '#location' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Apply / Enquire', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Key details */}
          <div className="lg:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-white p-1 border border-slate-700 flex items-center justify-center shrink-0">
                <img
                  src={imgDixonLogo}
                  alt="Dixon Technologies Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-xl font-black text-white tracking-tight">
                  {CENTRE_DATA.centreName}
                </h3>
                <p className="text-xs text-blue-400 font-semibold">
                  {CENTRE_DATA.courseName} • STPI Deoghar
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-6">
              Empowering motivated learners through the FREE 45-Day BY TRC Course. Conducted inside STPI Deoghar with hands-on laboratory infrastructure and placement opportunities from Dixon Centre.
            </p>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>STPI Deoghar, Jasidih, Deoghar, Jharkhand</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Near Sawagat Petrol Pump & Sivanta Hotel</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Centre Head: <strong className="text-white">{CENTRE_DATA.centreHead}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Helpline: <strong className="text-white">{CENTRE_DATA.contactNumber}</strong></span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Course & Placement Highlights */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Course Highlights
            </h4>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Course Fee:</span>
                <span className="font-extrabold text-emerald-400">100% FREE</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Course Duration:</span>
                <span className="font-extrabold text-blue-300">Only 45 Days</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Training Venue:</span>
                <span className="font-bold text-slate-200">STPI Deoghar</span>
              </div>
              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 leading-snug">
                Job placement opportunity/offer from Dixon Centre after successful completion of the course (subject to applicable selection and placement process).
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              <a
                href={CENTRE_DATA.callLink}
                className="flex-1 py-2.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center transition-colors"
              >
                Call Helpline
              </a>
              <a
                href={CENTRE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-left">
          <p id="footer-copyright">
            © 2026 Dixon Centre – Disha Classes. All Rights Reserved.
          </p>
          <p className="text-[11px] text-slate-400">
            Dixon Centre – Disha Classes • BY TRC Course • STPI Deoghar, Jasidih, Deoghar
          </p>
        </div>

      </div>
    </footer>
  );
};
