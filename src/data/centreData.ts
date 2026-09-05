// Authentic photos from Google Drive folder (STPI Deoghar & Dixon Centre)
import imgDishaSign from '../assets/images/drive/drive_img_1.jpg';
import imgClassroomStudents from '../assets/images/drive/drive_img_2.jpg';
import imgTrainingNotice from '../assets/images/drive/drive_img_3.jpg';
import imgCourseSyllabus from '../assets/images/drive/drive_img_4.jpg';
import imgDixonRecruitment from '../assets/images/drive/drive_img_5.jpg';
import imgClassroomTimetable from '../assets/images/drive/drive_img_6.jpg';
import imgNoticeBoard from '../assets/images/drive/drive_img_7.jpg';
import imgClassroomDesks from '../assets/images/drive/drive_img_8.jpg';
import imgStpiCafeteria from '../assets/images/drive/drive_img_9.jpg';
import imgStpiCorridor from '../assets/images/drive/drive_img_10.jpg';
import imgStpiReception from '../assets/images/drive/drive_img_11.jpg';
import imgDixonLogo from '../assets/images/drive/dixon_logo.png';

// Fallback campus & lab images
import imgCampusFallback from '../assets/images/stpi_deoghar_campus_1788582752935.jpg';
import imgPracticalLabFallback from '../assets/images/practical_electronics_lab_1788582766699.jpg';
import imgComputerLabFallback from '../assets/images/computer_lab_centre_1788582780148.jpg';
import imgClassroomFallback from '../assets/images/training_classroom_1788582793100.jpg';
import imgEquipmentFallback from '../assets/images/hands_on_equipment_1788582808685.jpg';

import { CentreInfo, FacilityItem, GalleryItem, FAQItem, TimelineStep, FeatureItem } from '../types';

export {
  imgDixonLogo,
  imgDishaSign,
  imgClassroomStudents,
  imgTrainingNotice,
  imgCourseSyllabus,
  imgDixonRecruitment,
  imgClassroomTimetable,
  imgNoticeBoard,
  imgClassroomDesks,
  imgStpiCafeteria,
  imgStpiCorridor,
  imgStpiReception,
  imgCampusFallback,
  imgPracticalLabFallback,
  imgComputerLabFallback,
  imgClassroomFallback,
  imgEquipmentFallback
};

export const CENTRE_DATA: CentreInfo = {
  centreName: "Dixon Centre – Disha Classes",
  courseName: "BY TRC Course",
  courseDuration: "Only 45 Days",
  courseFee: "FREE",
  location: "STPI Deoghar",
  landmark: "Near Sawagat Petrol Pump & Sivanta Hotel, Jasidih, Deoghar",
  fullAddress: "Dixon Centre – Disha Classes, STPI Deoghar, Near Sawagat Petrol Pump & Sivanta Hotel, Jasidih, Deoghar, Jharkhand",
  centreHead: "Jayoti Kumari",
  contactNumber: "+91 62079 14998",
  displayContactNumber: "+91 62079 14998",
  callLink: "tel:+916207914998",
  whatsappLink: "https://wa.me/916207914998?text=Hello%20Jayoti%20Kumari%20ji,%20I%20am%20interested%20in%20the%20FREE%2045-Day%20BY%20TRC%20Course%20at%20Dixon%20Centre%20STPI%20Deoghar.%20Please%20share%20enrolment%20details.",
  directionsLink: "https://www.google.com/maps/search/?api=1&query=STPI+Deoghar+Jasidih+Jharkhand",
  keyBenefit: "Job placement opportunity/offer from Dixon Centre after successful completion of the course."
};

export const HIGHLIGHT_BADGES = [
  "100% FREE COURSE",
  "45 DAYS ONLY",
  "JOB PLACEMENT OPPORTUNITY"
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: "01",
    title: "Enrol",
    description: "Submit your simple enquiry or reach out directly to register for the free 45-day training batch at STPI Deoghar."
  },
  {
    step: "02",
    title: "Learn",
    description: "Attend guided classroom sessions with instructor explanations, theory fundamentals, and live demonstrations."
  },
  {
    step: "03",
    title: "Practice",
    description: "Work directly on hands-on equipment, computer setups, and electronic testing benches in the practical laboratory."
  },
  {
    step: "04",
    title: "Complete the Course",
    description: "Successfully wrap up your intensive 45-day training curriculum, skill assessments, and practical tasks."
  },
  {
    step: "05",
    title: "Placement Opportunity",
    description: "Eligible/qualified participants can receive a job placement opportunity/offer from Dixon Centre, subject to the applicable selection and placement process."
  }
];

export const WHY_CHOOSE_ITEMS: FeatureItem[] = [
  {
    id: "free-course",
    title: "FREE 45-Day Training",
    description: "Comprehensive training program offered 100% free of charge to empower local youth with in-demand practical skills.",
    iconName: "Gift"
  },
  {
    id: "practical-learning",
    title: "Practical Learning",
    description: "Focused on real-world vocational application where learning by doing takes precedence over pure rote theory.",
    iconName: "Wrench"
  },
  {
    id: "lab-environment",
    title: "Professional Lab Environment",
    description: "Housed inside the premier STPI Deoghar facility with modern laboratory desks and specialized testing workstations.",
    iconName: "ShieldCheck"
  },
  {
    id: "computer-facilities",
    title: "Computer Facilities",
    description: "Dedicated computer laboratory equipped with modern PCs for digital tasks, diagnostic learning, and software training.",
    iconName: "Monitor"
  },
  {
    id: "hands-on-skills",
    title: "Hands-on Skill Development",
    description: "Direct practice with testing probes, multimeters, electronic components, and diagnostic tools.",
    iconName: "Cpu"
  },
  {
    id: "career-opportunity",
    title: "Career & Placement Opportunity",
    description: "Placement opportunity/offer from Dixon Centre upon successful course completion, per applicable selection process.",
    iconName: "Briefcase"
  }
];

export const FACILITIES_DATA: FacilityItem[] = [
  {
    id: "disha-board",
    title: "DISHA Program Centre Board",
    category: "Centre Identity",
    description: "Official DISHA (DIXON Innovation, Skills & Holistic Advancement Program) board established at the STPI Deoghar facility.",
    image: imgDishaSign,
    tag: "STPI Deoghar"
  },
  {
    id: "training-classroom-real",
    title: "Training Classroom & Computers",
    category: "Classroom & IT",
    description: "Equipped lecture hall and computer training desk where batches learn hardware concepts, testing, and digital workflows.",
    image: imgClassroomStudents,
    tag: "Active Classroom"
  },
  {
    id: "stpi-reception",
    title: "STPI Deoghar Reception & Lobby",
    category: "Campus Infrastructure",
    description: "The welcoming official reception foyer inside Software Technology Parks of India (STPI), Jasidih, Deoghar.",
    image: imgStpiReception,
    tag: "STPI Reception"
  },
  {
    id: "syllabus-notice-board",
    title: "Course Syllabus & Notice Board",
    category: "Curriculum & Notices",
    description: "Clear public notice displays outlining module outlines, daily schedules, technical course criteria, and batch notices.",
    image: imgCourseSyllabus,
    tag: "Course Modules"
  },
  {
    id: "dixon-placement-board",
    title: "Dixon Placement Notice Board",
    category: "Career & Placement",
    description: "Official notice board with Dixon Electro Appliances placement opportunities, candidate guidelines, and company announcements.",
    image: imgDixonRecruitment,
    tag: "Placement Notice"
  },
  {
    id: "practical-lab",
    title: "Electronics & Practical Lab",
    category: "Practical",
    description: "Hands-on workshop benches for circuit testing, multimeter measurements, component soldering, and diagnostics.",
    image: imgPracticalLabFallback,
    tag: "Hands-on Workshop"
  },
  {
    id: "stpi-cafeteria",
    title: "STPI Deoghar Student Cafeteria",
    category: "Amenities",
    description: "Clean and well-maintained dining and break area for students attending batches at the STPI Deoghar campus.",
    image: imgStpiCafeteria,
    tag: "Campus Amenities"
  },
  {
    id: "spacious-classroom",
    title: "Spacious Training Classrooms",
    category: "Learning Environment",
    description: "Comfortable, naturally lit classrooms with individual wooden desks designed for focused batch training.",
    image: imgClassroomDesks,
    tag: "Classroom 02"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    caption: "DISHA Program Board at STPI Deoghar",
    category: "Campus",
    image: imgDishaSign,
    description: "Official DISHA (DIXON Innovation, Skills & Holistic Advancement Program) signage at STPI Deoghar."
  },
  {
    id: "gal-2",
    caption: "Classroom & Computer Training Desk",
    category: "Classroom",
    image: imgClassroomStudents,
    description: "Students engaged in training inside the dedicated classroom and computer facility."
  },
  {
    id: "gal-3",
    caption: "Disha Training Institute Notice",
    category: "Notices",
    image: imgTrainingNotice,
    description: "Official printed announcement on the notice board detailing the free technical repair course."
  },
  {
    id: "gal-4",
    caption: "Course Syllabus & Guidelines Board",
    category: "Curriculum",
    image: imgCourseSyllabus,
    description: "Detailed curriculum breakdown and course milestones pinned on the institute board."
  },
  {
    id: "gal-5",
    caption: "Dixon Placement Announcement",
    category: "Placement",
    image: imgDixonRecruitment,
    description: "Dixon Electro Appliances recruitment and career opportunity notice on the central board."
  },
  {
    id: "gal-6",
    caption: "Classroom No. 2 Timetable",
    category: "Schedule",
    image: imgClassroomTimetable,
    description: "Official batch schedule and daily timetable for Classroom No. 2."
  },
  {
    id: "gal-7",
    caption: "Classroom Desks & Study Space",
    category: "Classroom",
    image: imgClassroomDesks,
    description: "Wide view of student seating, desks, and whiteboard in the training classroom."
  },
  {
    id: "gal-8",
    caption: "STPI Deoghar Reception Lobby",
    category: "Campus",
    image: imgStpiReception,
    description: "The STPI Deoghar reception hall featuring the official Hindi/English STPI installation."
  },
  {
    id: "gal-9",
    caption: "STPI Deoghar Cafeteria & Lounge",
    category: "Amenities",
    image: imgStpiCafeteria,
    description: "Clean cafeteria facilities for trainees and faculty at STPI Deoghar."
  },
  {
    id: "gal-10",
    caption: "Institute Corridor & Classrooms",
    category: "Campus",
    image: imgStpiCorridor,
    description: "Well-lit and maintained hallway leading to lecture halls and practical labs."
  },
  {
    id: "gal-11",
    caption: "Practical Electronics & Testing Lab",
    category: "Practical",
    image: imgPracticalLabFallback,
    description: "Workshop equipped with multimeters, power supplies, and component testing benches."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "How long is the course?",
    answer: "The course duration is 45 days."
  },
  {
    id: "faq-2",
    question: "Is the course free?",
    answer: "Yes, the course is advertised as FREE."
  },
  {
    id: "faq-3",
    question: "Where is the centre located?",
    answer: "The centre is located at STPI Deoghar, near Sawagat Petrol Pump and Sivanta Hotel, Jasidih, Deoghar."
  },
  {
    id: "faq-4",
    question: "Is there a placement opportunity?",
    answer: "A job placement opportunity/offer is available after successful completion, subject to the applicable placement/selection process."
  },
  {
    id: "faq-5",
    question: "How can I contact the centre?",
    answer: "Call +91 62079 14998."
  },
  {
    id: "faq-6",
    question: "Who is the Centre Head?",
    answer: "Jayoti Kumari."
  }
];

// Verified Course Curriculum Outline (with explicit editable placeholder modules as requested)
export const COURSE_MODULE_PLACEHOLDERS = [
  {
    moduleNumber: "Module 01",
    title: "Vocational Fundamentals & Lab Safety",
    description: "Orientation to the STPI Deoghar training environment, laboratory safety rules, and foundational tools."
  },
  {
    moduleNumber: "Module 02",
    title: "Electronics & Hardware Component Fundamentals",
    description: "Hands-on familiarization with circuits, testing instruments, multimeters, and basic assembly procedures."
  },
  {
    moduleNumber: "Module 03",
    title: "Computer Applications & Digital Practice",
    description: "Hands-on sessions in the computer lab covering system navigation, digital workflows, and reporting."
  },
  {
    moduleNumber: "Module 04",
    title: "Device Testing, Diagnostics & Practical Repair",
    description: "Practical fault finding, component testing, and supervised repair workflows in the electronics lab."
  },
  {
    moduleNumber: "Module 05",
    title: "Practical Review & Placement Readiness",
    description: "Comprehensive practical skill evaluation and preparation for Dixon Centre placement opportunities."
  }
];
