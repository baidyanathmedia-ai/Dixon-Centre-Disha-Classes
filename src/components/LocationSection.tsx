import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Bus, Building, Phone } from 'lucide-react';
import { CENTRE_DATA } from '../data/centreData';
import imgCampus from '../assets/images/stpi_deoghar_campus_1788582752935.jpg';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Centre Location</span>
          </div>
          <h2
            id="location-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Find Us at STPI Deoghar
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Conveniently situated in Jasidih, Deoghar near prominent landmarks with accessible transit options.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Address Card & Landmarks */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30 mb-4">
                <Compass className="w-3.5 h-3.5 text-blue-300" />
                <span>Verified Training Campus</span>
              </div>

              {/* Exact Name and Address as requested */}
              <div id="location-exact-address-block" className="space-y-1 mb-6 text-left">
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Dixon Centre – Disha Classes
                </h3>
                <div className="text-base font-bold text-blue-400">
                  STPI Deoghar
                </div>
                <div className="text-sm font-semibold text-slate-200 pt-1">
                  Near Sawagat Petrol Pump & Sivanta Hotel
                </div>
                <div className="text-sm text-slate-300">
                  Jasidih, Deoghar, Jharkhand
                </div>
              </div>

              {/* Key Landmark Details */}
              <div className="space-y-3 pt-4 border-t border-slate-800 text-left text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <Building className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Prominent Landmarks</span>
                    <span className="text-slate-300">Near Sawagat Petrol Pump & Sivanta Hotel</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Bus className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Accessibility</span>
                    <span className="text-slate-300">Jasidih junction & main Deoghar transit routes</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Assistance on Arrival</span>
                    <span className="text-slate-300">Call {CENTRE_DATA.contactNumber} (Jayoti Kumari)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direction Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
              <a
                id="location-get-directions-btn"
                href={CENTRE_DATA.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
              </a>

              <a
                id="location-call-centre-btn"
                href={CENTRE_DATA.callLink}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Call for Directions</span>
              </a>
            </div>
          </div>

          {/* Right: Map View & STPI Facility Visual */}
          <div className="lg:col-span-7 flex flex-col rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm">
            {/* Map Frame / Interactive Map Embed */}
            <div className="relative w-full h-80 sm:h-96 bg-slate-200 overflow-hidden">
              <iframe
                title="STPI Deoghar Location Map"
                id="stpi-google-map-iframe"
                src="https://maps.google.com/maps?q=STPI%20Deoghar%20Jasidih%20Jharkhand&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-[1.02]"
                loading="lazy"
                aria-label="Google Map showing STPI Deoghar, Jasidih"
              />
              
              {/* Map Floating Card */}
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md border border-slate-200 max-w-xs text-left">
                <div className="text-xs font-bold text-blue-800 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span>STPI Deoghar Centre</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-medium">
                  Near Sawagat Petrol Pump & Sivanta Hotel, Jasidih
                </div>
              </div>
            </div>

            {/* Map footer note */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="text-xs text-slate-600">
                <strong className="text-slate-800">Campus Note:</strong> Visitors and applicants are welcome to visit during training hours at STPI Deoghar.
              </div>
              <a
                href={CENTRE_DATA.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 shrink-0"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
