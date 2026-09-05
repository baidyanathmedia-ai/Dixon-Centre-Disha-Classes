/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CourseSection } from './components/CourseSection';
import { PlacementSection } from './components/PlacementSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacilitiesSection } from './components/FacilitiesSection';
import { GallerySection } from './components/GallerySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export default function App() {
  const formRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToApply = () => {
    const target = document.getElementById('application-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Focus on first input after scrolling
      setTimeout(() => {
        const input = document.getElementById('field-fullName');
        if (input) {
          input.focus();
        }
      }, 400);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar onApplyClick={handleScrollToApply} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onApplyClick={handleScrollToApply} />
        <AboutSection />
        <CourseSection onApplyClick={handleScrollToApply} />
        <PlacementSection onEnquireClick={handleScrollToApply} />
        <WhyChooseUs />
        <FacilitiesSection />
        <GallerySection />
        <LocationSection />
        <ContactSection formRef={formRef} />
        <FAQSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Fixed Sticky Mobile CTA Bar */}
      <StickyMobileCTA onApplyClick={handleScrollToApply} />
    </div>
  );
}
