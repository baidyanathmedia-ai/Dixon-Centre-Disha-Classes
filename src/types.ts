export interface CentreInfo {
  centreName: string;
  courseName: string;
  courseDuration: string;
  courseFee: string;
  location: string;
  landmark: string;
  fullAddress: string;
  centreHead: string;
  contactNumber: string;
  displayContactNumber: string;
  whatsappLink: string;
  callLink: string;
  directionsLink: string;
  keyBenefit: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tag: string;
}

export interface GalleryItem {
  id: string;
  caption: string;
  category: string;
  image: string;
  description?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ApplicationFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  city: string;
  preferredContact: 'Phone Call' | 'WhatsApp' | 'SMS';
  message: string;
}
