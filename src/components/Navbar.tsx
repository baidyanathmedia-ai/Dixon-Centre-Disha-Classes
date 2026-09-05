import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { CENTRE_DATA, imgDixonLogo } from '../data/centreData';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Course', href: '#course' },
    { label: 'Placement', href: '#placement' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3.5'
      }`}
    >
      {/* Top micro-bar for STPI Deoghar quick badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Centre identity */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-11 h-11 rounded-xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-200 shrink-0">
              <img
                src={imgDixonLogo}
                alt="Dixon Technologies Logo"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="font-extrabold text-base sm:text-lg text-slate-900 tracking-tight">
                  Dixon Centre
                </span>
                <span className="text-[11px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                  Disha Classes
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-blue-600 inline shrink-0" />
                <span>STPI Deoghar, Jasidih</span>
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              id="nav-call-button"
              href={CENTRE_DATA.callLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-700 hover:bg-slate-100 transition-colors border border-slate-200"
              title="Call Centre Helpline"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>{CENTRE_DATA.contactNumber}</span>
            </a>
            <button
              id="nav-apply-btn"
              onClick={onApplyClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="nav-apply-btn-mobile-header"
              onClick={onApplyClick}
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 cursor-pointer"
            >
              Apply Free
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="lg:hidden mt-3 pt-3 pb-4 border-t border-slate-200 flex flex-col gap-1 bg-white rounded-xl shadow-lg px-3 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            <div className="py-1 px-3 bg-blue-50/80 rounded-lg mb-2 text-xs font-medium text-blue-900 flex items-center justify-between">
              <span>FREE 45-Day BY TRC Course</span>
              <span className="font-bold text-blue-700">100% Free</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`mobile-nav-link-${link.label.toLowerCase()}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:text-blue-700 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                id="mobile-nav-call-btn"
                href={CENTRE_DATA.callLink}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 text-sm font-bold hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {CENTRE_DATA.contactNumber}</span>
              </a>
              <button
                id="mobile-nav-apply-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onApplyClick();
                }}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Enrol / Apply Free Course</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
