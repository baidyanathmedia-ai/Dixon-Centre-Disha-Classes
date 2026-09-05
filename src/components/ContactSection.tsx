import React, { useState } from 'react';
import { 
  Phone, 
  MessageSquare, 
  Send, 
  User, 
  MapPin, 
  Mail, 
  UserCheck, 
  CheckCircle2, 
  Sparkles,
  PhoneCall,
  Clock,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { CENTRE_DATA } from '../data/centreData';
import { ApplicationFormData } from '../types';

interface ContactSectionProps {
  formRef?: React.RefObject<HTMLDivElement | null>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ formRef }) => {
  const [formData, setFormData] = useState<ApplicationFormData>({
    fullName: '',
    mobileNumber: '',
    email: '',
    city: 'Deoghar',
    preferredContact: 'Phone Call',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }

    const cleanPhone = formData.mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate enquiry registration / API dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      city: 'Deoghar',
      preferredContact: 'Phone Call',
      message: ''
    });
    setIsSubmitted(false);
    setErrorMessage('');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-100 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Admissions & Contact</span>
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Ready to Start Your 45-Day Journey?
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            Get in touch directly with our centre team at STPI Deoghar or submit your enquiry below for the FREE BY TRC Course.
          </p>
        </div>

        {/* Contact Banner with Direct Phone & WhatsApp */}
        <div
          id="contact-direct-card"
          className="mb-14 rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white p-6 sm:p-10 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Big Phone & Centre Head */}
            <div className="lg:col-span-7 text-left">
              <span className="inline-block text-xs font-bold tracking-wider uppercase text-blue-200 mb-2">
                Official Centre Helpline
              </span>
              
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
                <a
                  id="contact-large-phone-link"
                  href={CENTRE_DATA.callLink}
                  className="hover:text-blue-200 transition-colors inline-flex items-center gap-3"
                >
                  <PhoneCall className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-300 shrink-0" />
                  <span>{CENTRE_DATA.contactNumber}</span>
                </a>
              </div>

              {/* Centre Head */}
              <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-white border border-white/20">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-200 font-semibold uppercase tracking-wider">
                    Centre Head
                  </div>
                  <div className="text-lg font-bold text-white">
                    {CENTRE_DATA.centreHead}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-blue-100 mt-4 leading-relaxed max-w-xl">
                Dixon Centre – Disha Classes inside STPI Deoghar. Call or WhatsApp directly to ask any questions about course schedules, batch timings, and placement eligibility.
              </p>
            </div>

            {/* Right Column: 3 Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <a
                id="contact-call-now-btn"
                href={CENTRE_DATA.callLink}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-blue-900 font-extrabold text-base hover:bg-blue-50 shadow-md transition-colors"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call Now (+91 62079 14998)</span>
              </a>

              <a
                id="contact-whatsapp-btn"
                href={CENTRE_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-base shadow-md transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </a>

              <a
                id="contact-enquire-now-btn"
                href="#application-form"
                className="flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-blue-950/60 hover:bg-blue-950/80 text-white font-bold text-sm border border-white/20 transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Enquire Now (Online Form)</span>
              </a>
            </div>

          </div>
        </div>

        {/* APPLICATION / ENQUIRY FORM */}
        <div
          ref={formRef as any}
          id="application-form"
          className="max-w-3xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-lg p-6 sm:p-10 text-left"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-6">
            <div>
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block">
                Direct Registration Enquiry
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Submit Course Enquiry
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">
                100% Free Course
              </span>
            </div>
          </div>

          {isSubmitted ? (
            <div
              id="form-success-banner"
              className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-emerald-900 mb-2">
                Enquiry Submitted Successfully!
              </h4>
              <p className="text-sm text-emerald-800 max-w-md mb-6 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your enquiry for the FREE 45-Day BY TRC Course at STPI Deoghar has been recorded. Our centre team led by <strong>Jayoti Kumari</strong> will contact you via {formData.preferredContact}.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={CENTRE_DATA.callLink}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly Now</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-5 py-2.5 rounded-lg bg-white border border-emerald-300 text-emerald-900 hover:bg-emerald-100 text-xs font-bold transition-colors cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div
                  id="form-error-alert"
                  className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label
                  htmlFor="field-fullName"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                >
                  Full Name <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    id="field-fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Mobile Number & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="field-mobileNumber"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    Mobile Number <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="field-mobileNumber"
                      name="mobileNumber"
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="field-email"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    Email Address <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="field-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* City & Preferred Contact Method */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="field-city"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    City / Town / Village
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      id="field-city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Deoghar, Jasidih, Madhupur"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="field-preferredContact"
                    className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="field-preferredContact"
                    name="preferredContact"
                    value={formData.preferredContact}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 bg-white"
                  >
                    <option value="Phone Call">Phone Call</option>
                    <option value="WhatsApp">WhatsApp Message</option>
                    <option value="SMS">SMS</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="field-message"
                  className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                >
                  Message or Question <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <textarea
                  id="field-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ask about batch timings, location directions, or placement details..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm text-slate-900 placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  id="submit-enquiry-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-base shadow-sm hover:shadow transition-all duration-200 disabled:opacity-70 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                </button>
              </div>

              {/* Form Disclaimer */}
              <p className="text-[11px] text-slate-500 text-center">
                * Note: Course fee is completely FREE. No fees are charged for admission or training. Your details will only be used to contact you regarding the BY TRC Course.
              </p>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
