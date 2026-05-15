import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import brainBoostLogoLight from '../logo/logo-light.jpg';
import brainBoostLogoDark from '../logo/logo-dark.jpeg';
import './styles.css';

function Icon({ name, size = 18 }) {
  return <span className="ui-icon" style={{ width: size, height: size, fontSize: Math.max(12, size - 4) }} aria-hidden="true">{name}</span>;
}

const ArrowRight = (props) => <Icon name="->" {...props} />;
const BadgeCheck = (props) => <Icon name="OK" {...props} />;
const BookOpen = (props) => <Icon name="B" {...props} />;
const Building2 = (props) => <Icon name="I" {...props} />;
const CalendarCheck = (props) => <Icon name="D" {...props} />;
const CheckCircle2 = (props) => <Icon name="OK" {...props} />;
const ChevronRight = (props) => <Icon name=">" {...props} />;
const CircleDollarSign = (props) => <Icon name="BD" {...props} />;
const GraduationCap = (props) => <Icon name="G" {...props} />;
const Lock = (props) => <Icon name="L" {...props} />;
const Menu = (props) => <Icon name="M" {...props} />;
const Moon = (props) => <Icon name="M" {...props} />;
const Search = (props) => <Icon name="S" {...props} />;
const Settings = (props) => <Icon name="SET" {...props} />;
const ShieldCheck = (props) => <Icon name="P" {...props} />;
const Sparkles = (props) => <Icon name="AI" {...props} />;
const Star = (props) => <Icon name="*" {...props} />;
const Sun = (props) => <Icon name="SUN" {...props} />;
const UserCheck = (props) => <Icon name="U" {...props} />;
const Users = (props) => <Icon name="2" {...props} />;
const X = (props) => <Icon name="X" {...props} />;

const tutors = [
  {
    id: 2,
    name: 'Bahrain STEM Learning Center',
    type: 'Institution',
    subjects: ['Physics', 'Calculus', 'Chemistry', 'SAT Math'],
    levels: ['High school', 'University'],
    rating: 4.8,
    price: 22,
    availability: ['After school', 'Weekend'],
    sessionType: 'Hybrid',
    style: 'Practice-heavy coaching',
    location: 'Seef',
    bio: 'Tutoring center with vetted instructors, parent reporting, and small group options.',
    institution: true
  },
  {
    id: 3,
    name: 'Mariam Hassan',
    type: 'Private tutor',
    subjects: ['English', 'IELTS', 'Academic Writing'],
    levels: ['Grade 9', 'Grade 12', 'University'],
    rating: 4.7,
    price: 18,
    availability: ['Mornings', 'Weeknights'],
    sessionType: 'Online',
    style: 'Patient step-by-step support',
    location: 'Riffa',
    bio: 'Helps students improve essays, comprehension, and test confidence.',
    institution: false
  },
  {
    id: 4,
    name: 'Ahmed Al Arrayed',
    type: 'Private tutor',
    subjects: ['Accounting', 'Economics', 'Business'],
    levels: ['University', 'Professional'],
    rating: 4.6,
    price: 20,
    availability: ['Sunday', 'Tuesday', 'Thursday'],
    sessionType: 'In-person',
    style: 'Real-world examples',
    location: 'Muharraq',
    bio: 'Finance professional tutoring accounting and economics for GCC curricula.',
    institution: false
  },
  {
    id: 5,
    name: 'GCC Exam Prep Institute',
    type: 'Institution',
    subjects: ['Biology', 'Chemistry', 'Mathematics', 'Arabic'],
    levels: ['Grade 6', 'Grade 9', 'Grade 12'],
    rating: 4.5,
    price: 16,
    availability: ['After school', 'Weekend'],
    sessionType: 'Hybrid',
    style: 'Curriculum-aligned revision',
    location: 'Juffair',
    bio: 'Tutoring center for school students with parent approvals and progress updates.',
    institution: true
  },
  {
    id: 6,
    name: 'Fatima Al Doseri',
    type: 'University instructor',
    subjects: ['Computer Science', 'Python', 'Data Science'],
    levels: ['University', 'Professional'],
    rating: 4.9,
    price: 28,
    availability: ['Weeknights', 'Friday'],
    sessionType: 'Online',
    style: 'Project-based learning',
    location: 'Amwaj',
    bio: 'AI and programming instructor focused on practical projects and code reviews.',
    institution: false
  },
  {
    id: 7,
    name: 'Yousef Al Haddad',
    type: 'Private tutor',
    subjects: ['Physics', 'Mathematics', 'SAT Math'],
    levels: ['Grade 9', 'Grade 12'],
    rating: 4.8,
    price: 19,
    availability: ['After school', 'Saturday'],
    sessionType: 'Hybrid',
    style: 'Practice-heavy coaching',
    location: 'Isa Town',
    bio: 'Exam-focused physics and math tutor for secondary students following GCC and international curricula.',
    institution: false
  },
  {
    id: 8,
    name: 'Zainab Ebrahim',
    type: 'Private tutor',
    subjects: ['Arabic', 'English', 'Academic Writing'],
    levels: ['Grade 6', 'Grade 9', 'Grade 12'],
    rating: 4.7,
    price: 15,
    availability: ['Weekend', 'Mornings'],
    sessionType: 'Online',
    style: 'Patient step-by-step support',
    location: 'Hamad Town',
    bio: 'Bilingual language tutor helping students strengthen grammar, reading, and confident writing.',
    institution: false
  },
  {
    id: 9,
    name: 'Khalid Bucheeri',
    type: 'University instructor',
    subjects: ['Economics', 'Statistics', 'Business'],
    levels: ['University', 'Professional'],
    rating: 4.8,
    price: 24,
    availability: ['Weeknights', 'Friday'],
    sessionType: 'Online',
    style: 'Real-world examples',
    location: 'Manama',
    bio: 'University instructor supporting business students with applied economics, data, and case analysis.',
    institution: false
  },
  {
    id: 10,
    name: 'Pearl Academic Hub',
    type: 'Institution',
    subjects: ['English', 'IELTS', 'Arabic', 'SAT Math'],
    levels: ['Grade 9', 'Grade 12', 'University'],
    rating: 4.6,
    price: 17,
    availability: ['After school', 'Weekend'],
    sessionType: 'Hybrid',
    style: 'Structured explanations',
    location: 'Saar',
    bio: 'Tutoring center offering language, admissions, and test-prep programs with parent progress summaries.',
    institution: true
  },
  {
    id: 11,
    name: 'Layla Al Ansari',
    type: 'Private tutor',
    subjects: ['Biology', 'Chemistry', 'Science'],
    levels: ['Grade 9', 'Grade 12'],
    rating: 4.9,
    price: 21,
    availability: ['Sunday', 'Tuesday', 'Thursday'],
    sessionType: 'In-person',
    style: 'Structured explanations',
    location: 'Riffa',
    bio: 'Science tutor known for clear diagrams, lab-style explanations, and school exam revision plans.',
    institution: false
  },
  {
    id: 12,
    name: 'Omar Al Mutawa',
    type: 'Private tutor',
    subjects: ['Computer Science', 'Python', 'Robotics'],
    levels: ['Grade 9', 'Grade 12', 'University'],
    rating: 4.7,
    price: 23,
    availability: ['Weeknights', 'Weekend'],
    sessionType: 'Hybrid',
    style: 'Project-based learning',
    location: 'Amwaj',
    bio: 'Coding mentor helping learners build Python, robotics, and portfolio projects from scratch.',
    institution: false
  },
  {
    id: 13,
    name: 'Gulf Scholars Institute',
    type: 'Institution',
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'],
    levels: ['Grade 6', 'Grade 9', 'Grade 12', 'University'],
    rating: 4.8,
    price: 26,
    availability: ['After school', 'Friday', 'Saturday'],
    sessionType: 'Hybrid',
    style: 'Practice-heavy coaching',
    location: 'Diplomatic Area',
    bio: 'Multi-subject tutoring institution with individual and small-group tracks for STEM learners.',
    institution: true
  },
  {
    id: 14,
    name: 'Hessa Al Kuwaiti',
    type: 'University instructor',
    subjects: ['Accounting', 'Finance', 'Business'],
    levels: ['University', 'Professional'],
    rating: 4.9,
    price: 30,
    availability: ['Mornings', 'Weeknights'],
    sessionType: 'Online',
    style: 'Real-world examples',
    location: 'Seef',
    bio: 'Finance lecturer supporting university students with accounting, corporate finance, and case studies.',
    institution: false
  },
  {
    id: 15,
    name: 'Nasser Al Jaber',
    type: 'Private tutor',
    subjects: ['Mathematics', 'Calculus', 'Statistics'],
    levels: ['Grade 12', 'University'],
    rating: 4.6,
    price: 20,
    availability: ['Weeknights', 'Weekend'],
    sessionType: 'Online',
    style: 'Patient step-by-step support',
    location: 'Muharraq',
    bio: 'Math tutor specializing in foundations, problem-solving confidence, and university calculus practice.',
    institution: false
  },
  {
    id: 16,
    name: 'Bright Path Tutoring Center',
    type: 'Institution',
    subjects: ['English', 'Mathematics', 'Science', 'Arabic'],
    levels: ['Grade 6', 'Grade 9'],
    rating: 4.5,
    price: 14,
    availability: ['After school', 'Weekend'],
    sessionType: 'In-person',
    style: 'Patient step-by-step support',
    location: 'Budaiya',
    bio: 'Family-focused tutoring center for younger learners with structured homework and parent updates.',
    institution: true
  },
  {
    id: 17,
    name: 'Reem Al Saleh',
    type: 'Private tutor',
    subjects: ['IELTS', 'English', 'Academic Writing'],
    levels: ['Grade 12', 'University', 'Professional'],
    rating: 4.8,
    price: 19,
    availability: ['Friday', 'Saturday', 'Mornings'],
    sessionType: 'Online',
    style: 'Structured explanations',
    location: 'Juffair',
    bio: 'IELTS coach helping learners improve speaking, writing structure, and test-day strategy.',
    institution: false
  },
  {
    id: 18,
    name: 'MENA Coding Academy',
    type: 'Institution',
    subjects: ['Computer Science', 'Python', 'Data Science', 'AI'],
    levels: ['Grade 12', 'University', 'Professional'],
    rating: 4.7,
    price: 27,
    availability: ['Weeknights', 'Weekend'],
    sessionType: 'Hybrid',
    style: 'Project-based learning',
    location: 'Manama',
    bio: 'Technology education provider for coding bootcamps, data projects, and AI foundations.',
    institution: true
  }
];

const sessions = [
  { id: 1, tutor: 'Bahrain STEM Learning Center', subject: 'Calculus', date: '2 Dec, 7:00 PM', status: 'Upcoming', price: '22 BHD', approval: 'Approved' },
  { id: 2, tutor: 'Mariam Hassan', subject: 'IELTS Writing', date: '24 Nov, 5:30 PM', status: 'Completed', price: '18 BHD', approval: 'Approved' },
  { id: 3, tutor: 'Bahrain STEM Learning Center', subject: 'Physics', date: '6 Dec, 4:00 PM', status: 'Pending', price: '22 BHD', approval: 'Parent review' },
  { id: 4, tutor: 'Fatima Al Doseri', subject: 'Python', date: '8 Dec, 6:30 PM', status: 'Upcoming', price: '28 BHD', approval: 'Approved' },
  { id: 5, tutor: 'Pearl Academic Hub', subject: 'IELTS', date: '10 Dec, 11:00 AM', status: 'Upcoming', price: '17 BHD', approval: 'Parent review' },
  { id: 6, tutor: 'Layla Al Ansari', subject: 'Chemistry', date: '18 Nov, 4:15 PM', status: 'Completed', price: '21 BHD', approval: 'Approved' },
  { id: 7, tutor: 'Gulf Scholars Institute', subject: 'Biology', date: '12 Dec, 5:00 PM', status: 'Pending', price: '26 BHD', approval: 'Locked until approved' },
  { id: 8, tutor: 'Reem Al Saleh', subject: 'Academic Writing', date: '30 Nov, 9:30 AM', status: 'Completed', price: '19 BHD', approval: 'Approved' }
];

const assignments = [
  {
    id: 1,
    title: 'Calculus limits practice',
    subject: 'Calculus',
    tutor: 'Nasser Al Jaber',
    due: '2 Dec, 8:00 PM',
    status: 'In progress',
    difficulty: 'Medium',
    points: 20,
    prompt: 'Solve the five limit problems below and explain the method used for at least two of them.',
    tasks: ['Evaluate lim x->2 (x^2 - 4) / (x - 2)', 'Evaluate lim x->0 sin(x) / x', 'Explain direct substitution vs factoring'],
    resources: ['Tutor hint sheet', 'Formula summary'],
    answer: 'For question 1, factor the numerator as (x - 2)(x + 2), then cancel...'
  },
  {
    id: 2,
    title: 'IELTS task 2 essay draft',
    subject: 'IELTS',
    tutor: 'Reem Al Saleh',
    due: '4 Dec, 11:59 PM',
    status: 'Not started',
    difficulty: 'Medium',
    points: 30,
    prompt: 'Write a 250-word opinion essay about whether online learning can replace classroom learning.',
    tasks: ['Write an introduction with a clear opinion', 'Add two body paragraphs', 'Use at least five academic linking phrases'],
    resources: ['Band 7 checklist', 'Sample essay structure'],
    answer: ''
  },
  {
    id: 3,
    title: 'Python functions mini-project',
    subject: 'Python',
    tutor: 'Fatima Al Doseri',
    due: '6 Dec, 6:00 PM',
    status: 'Submitted',
    difficulty: 'Hard',
    points: 40,
    prompt: 'Create a grade calculator using functions, conditionals, and a clean output format.',
    tasks: ['Define calculate_average()', 'Define grade_label()', 'Test with three student examples'],
    resources: ['Starter pseudocode', 'Python style guide'],
    answer: 'def calculate_average(scores):\n    return sum(scores) / len(scores)'
  },
  {
    id: 4,
    title: 'Chemistry bonding worksheet',
    subject: 'Chemistry',
    tutor: 'Layla Al Ansari',
    due: '9 Dec, 5:00 PM',
    status: 'Reviewed',
    difficulty: 'Easy',
    points: 15,
    prompt: 'Identify ionic and covalent bonds and draw Lewis structures for the listed compounds.',
    tasks: ['Classify NaCl, H2O, CO2, MgO', 'Draw Lewis structures for H2O and CO2', 'Write one sentence explaining polarity'],
    resources: ['Lewis structure guide', 'Periodic table'],
    answer: 'NaCl is ionic, H2O is covalent and polar...'
  }
];

const initialRequest = {
  subject: 'Calculus',
  level: 'University',
  budget: 25,
  availability: 'Weeknights',
  sessionType: 'Online',
  learningStyle: 'Structured explanations',
  notes: 'I have a calculus test on 2 December and I am a university student. I prefer online sessions and I want to pay 25 BHD per hour.'
};

const translations = {
  en: {
    dir: 'ltr',
    nav: { home: 'Pitch', onboarding: 'Onboarding', matches: 'AI Match', filter: 'Find Tutors', assignments: 'Assignments', dashboard: 'Dashboard', auth: 'Login' },
    common: {
      startup: 'Startup Bahrain Pitch MVP',
      startMatching: 'Start matching',
      browseTutors: 'Browse tutors',
      parentApprovals: 'Parent approvals',
      vettedProfiles: 'Vetted profiles',
      sessionTracking: 'Session tracking',
      problem: 'The Problem',
      solution: 'The Solution',
      howItWorks: 'How It Works',
      benefits: 'Benefits',
      demoReady: 'Demo Ready',
      aiMatchRequest: 'AI Match Request',
      subject: 'Subject',
      level: 'Education level',
      budget: 'Budget per hour',
      availability: 'Availability',
      sessionType: 'Preferred session type',
      learningStyle: 'Learning style',
      notes: 'Describe what you need help with',
      generate: 'Generate AI matches',
      editRequest: 'Edit request',
      viewDashboard: 'View session dashboard',
      maxPrice: 'Max price',
      minRating: 'Minimum rating',
      tutorType: 'Tutor type',
      all: 'All',
      login: 'Login',
      register: 'Register',
      profileSettings: 'Open profile settings',
      saveSettings: 'Save mock settings',
      accountType: 'Account type',
      email: 'Email',
      password: 'Password',
      parentEmail: 'Parent email for underage students',
      name: 'Name',
      role: 'Role',
      defaultCity: 'Default city',
      safetyPayments: 'Safety and payments',
      studentProfile: 'Student profile',
      parentalControl: 'Parental Control',
      sessions: 'Sessions',
      upcoming: 'Upcoming',
      completed: 'Completed',
      pending: 'Pending',
      approved: 'Approved',
      parentReview: 'Parent review',
      locked: 'Locked until approved',
      registration: 'Student registration',
      booking: 'Booking sessions',
      payments: 'Payments',
      parentLinked: 'Parent account linked',
      bookingPermission: 'Booking permission',
      paymentPermission: 'Payment permission'
      , assignments: 'Assignments',
      due: 'Due',
      points: 'points',
      difficulty: 'Difficulty',
      assignedBy: 'Assigned by',
      workArea: 'Work area',
      submitWork: 'Submit work',
      saveDraft: 'Save draft',
      answer: 'Your answer',
      assignmentTasks: 'Tasks',
      resources: 'Resources',
      progress: 'Progress',
      notStarted: 'Not started',
      inProgress: 'In progress',
      submitted: 'Submitted',
      reviewed: 'Reviewed'
    },
    home: {
      title: 'BrainBoost',
      lede: 'AI-powered tutor matching for Bahrain and the GCC, built to help students find the right academic support without messy WhatsApp threads or unreliable word of mouth.',
      problemTitle: 'Private tutoring discovery is still too informal.',
      problemText: 'Students and parents in Bahrain often depend on family referrals, WhatsApp groups, and fragmented personal networks. That makes tutor discovery slow, hard to compare, and difficult to manage once sessions begin.',
      solutionTitle: 'One guided flow from student need to trusted session.',
      stepsTitle: 'Built for a live demo in three steps.',
      benefitsTitle: 'Designed for the whole education marketplace.',
      ctaTitle: 'Match a student to the right tutor in under a minute.',
      launch: 'Launch onboarding',
      features: [
        ['Discover', 'Match by subject, level, budget, availability, learning style, and session type.'],
        ['AI ranking', 'Simple AI-feeling recommendations explain why each tutor fits the student.'],
        ['Approve', 'Underage accounts include parent approval for registration, bookings, and payments.'],
        ['Track', 'Students and parents can see upcoming, completed, and pending sessions clearly.']
      ],
      steps: [
        ['Tell BrainBoost what you need', 'Students enter academic goals, budget, preferred format, and learning style.'],
        ['Review AI-ranked tutor matches', 'Each card shows match score, price, rating, and a clear matching reason.'],
        ['Book and track sessions with approvals', 'The dashboard keeps families, tutors, and institutions aligned.']
      ],
      audiences: [
        ['Students', 'Faster discovery and better-fit academic support.'],
        ['Parents', 'Approval controls, visibility, and confidence before payment.'],
        ['Tutors', 'Qualified leads matched to expertise, availability, and price.'],
        ['Institutions', 'Tutoring centers can present verified programs next to individual tutors.']
      ]
    },
    pages: {
      onboarding: ['Student Onboarding', 'Tell BrainBoost what academic help you need.', 'This frontend-only form powers the AI matching demo with simple mock logic.', 'Student Need', 'Example request'],
      matches: ['AI Tutor Matching', 'Recommended tutors for your student request.', 'Scores are generated from local mock data by comparing subject, level, budget, availability, session type, and learning style.'],
      filter: ['Manual Filtering', 'Browse tutors, instructors, and institutions.', 'Use familiar marketplace filters when students or parents want direct control.'],
      dashboard: ['Session Tracking', 'Family-ready dashboard with approvals.', 'A simple operational view for sessions, booking status, and parent controls.'],
      auth: ['Mock Authentication', 'Secure-looking access for students, parents, tutors, and institutions.', 'Frontend-only screens for the MVP pitch. No real authentication is performed.'],
      profile: ['Profile Settings', 'Manage account, role, and approvals.', 'A mock settings surface for demoing user roles and safety controls.']
      , assignments: ['Assignment Workspace', 'View assignments and solve them directly on BrainBoost.', 'Students can open tutor-assigned work, write answers, save drafts, and submit from one clean workspace.']
    },
    reason: {
      recommendedFor: 'Recommended for',
      fallback: 'Recommended as a nearby high-rated option with flexible academic support.',
      subject: (subject) => `strong ${subject} expertise`,
      level: (level) => `supports ${level} students`,
      budget: (budget) => `fits the ${budget} BHD budget`,
      session: (type) => `offers ${type.toLowerCase()} sessions`,
      availability: (availability) => `available during ${availability.toLowerCase()}`,
      style: 'matches the preferred learning style',
      match: 'match'
    }
  },
  ar: {
    dir: 'rtl',
    nav: { home: 'العرض', onboarding: 'التسجيل', matches: 'المطابقة الذكية', filter: 'البحث', assignments: 'الواجبات', dashboard: 'الجلسات', auth: 'الدخول' },
    common: {
      startup: 'نسخة عرض لستارتب بحرين',
      startMatching: 'ابدأ المطابقة',
      browseTutors: 'تصفح المدرسين',
      parentApprovals: 'موافقات ولي الأمر',
      vettedProfiles: 'ملفات موثوقة',
      sessionTracking: 'متابعة الجلسات',
      problem: 'المشكلة',
      solution: 'الحل',
      howItWorks: 'آلية العمل',
      benefits: 'الفوائد',
      demoReady: 'جاهز للعرض',
      aiMatchRequest: 'طلب مطابقة ذكي',
      subject: 'المادة',
      level: 'المرحلة الدراسية',
      budget: 'الميزانية بالساعة',
      availability: 'الأوقات المتاحة',
      sessionType: 'نوع الجلسة المفضل',
      learningStyle: 'أسلوب التعلم',
      notes: 'صف ما تحتاج المساعدة فيه',
      generate: 'اعرض المطابقات الذكية',
      editRequest: 'تعديل الطلب',
      viewDashboard: 'عرض لوحة الجلسات',
      maxPrice: 'أعلى سعر',
      minRating: 'أقل تقييم',
      tutorType: 'نوع المدرس',
      all: 'الكل',
      login: 'دخول',
      register: 'تسجيل',
      profileSettings: 'فتح إعدادات الملف',
      saveSettings: 'حفظ الإعدادات التجريبية',
      accountType: 'نوع الحساب',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      parentEmail: 'بريد ولي الأمر للطلاب القصر',
      name: 'الاسم',
      role: 'الدور',
      defaultCity: 'المدينة الافتراضية',
      safetyPayments: 'الأمان والدفع',
      studentProfile: 'ملف الطالب',
      parentalControl: 'رقابة ولي الأمر',
      sessions: 'الجلسات',
      upcoming: 'قادمة',
      completed: 'مكتملة',
      pending: 'معلقة',
      approved: 'تمت الموافقة',
      parentReview: 'بانتظار ولي الأمر',
      locked: 'مغلق حتى الموافقة',
      registration: 'تسجيل الطالب',
      booking: 'حجز الجلسات',
      payments: 'المدفوعات',
      parentLinked: 'حساب ولي الأمر مرتبط',
      bookingPermission: 'صلاحية الحجز',
      paymentPermission: 'صلاحية الدفع'
      , assignments: 'الواجبات',
      due: 'الموعد',
      points: 'درجة',
      difficulty: 'المستوى',
      assignedBy: 'بواسطة',
      workArea: 'مساحة الحل',
      submitWork: 'تسليم الحل',
      saveDraft: 'حفظ مسودة',
      answer: 'إجابتك',
      assignmentTasks: 'المهام',
      resources: 'المراجع',
      progress: 'التقدم',
      notStarted: 'لم يبدأ',
      inProgress: 'قيد الحل',
      submitted: 'تم التسليم',
      reviewed: 'تمت المراجعة'
    },
    home: {
      title: 'BrainBoost',
      lede: 'منصة مطابقة مدرسين مدعومة بالذكاء الاصطناعي للبحرين ودول الخليج، تساعد الطلاب على إيجاد الدعم الأكاديمي المناسب بدون فوضى مجموعات واتساب أو الاعتماد على المعارف.',
      problemTitle: 'البحث عن مدرس خصوصي ما زال غير منظم.',
      problemText: 'يعتمد الطلاب وأولياء الأمور في البحرين غالبا على الترشيحات العائلية ومجموعات واتساب والعلاقات الشخصية. هذا يجعل البحث بطيئا وصعب المقارنة، ويصعب إدارة الجلسات بعد بدايتها.',
      solutionTitle: 'رحلة واضحة من حاجة الطالب إلى جلسة موثوقة.',
      stepsTitle: 'مصمم لعرض حي في ثلاث خطوات.',
      benefitsTitle: 'مصمم لكل أطراف سوق التعليم.',
      ctaTitle: 'طابق الطالب مع المدرس المناسب خلال أقل من دقيقة.',
      launch: 'ابدأ التسجيل',
      features: [
        ['اكتشاف', 'مطابقة حسب المادة والمرحلة والميزانية والوقت وأسلوب التعلم ونوع الجلسة.'],
        ['ترتيب ذكي', 'توصيات تبدو ذكية وتوضح سبب مناسبة كل مدرس للطالب.'],
        ['موافقة', 'حسابات القصر تشمل موافقة ولي الأمر للتسجيل والحجز والدفع.'],
        ['متابعة', 'يمكن للطلاب والأهالي رؤية الجلسات القادمة والمكتملة والمعلقة بوضوح.']
      ],
      steps: [
        ['أخبر BrainBoost بما تحتاجه', 'يدخل الطالب أهدافه الأكاديمية والميزانية ونوع الجلسة وأسلوب التعلم.'],
        ['راجع المدرسين المرتبين ذكيا', 'كل بطاقة تعرض درجة المطابقة والسعر والتقييم وسبب الترشيح.'],
        ['احجز وتابع الجلسات بالموافقات', 'لوحة التحكم تبقي العائلة والمدرسين والمؤسسات على نفس المسار.']
      ],
      audiences: [
        ['الطلاب', 'اكتشاف أسرع ودعم أكاديمي أنسب.'],
        ['أولياء الأمور', 'موافقات ووضوح وثقة قبل الدفع.'],
        ['المدرسون', 'طلبات مناسبة للخبرة والوقت والسعر.'],
        ['المؤسسات', 'تستطيع مراكز التعليم عرض برامج موثوقة بجانب المدرسين الأفراد.']
      ]
    },
    pages: {
      onboarding: ['تسجيل الطالب', 'أخبر BrainBoost بنوع المساعدة الأكاديمية التي تحتاجها.', 'هذا النموذج الأمامي يشغل عرض المطابقة ببيانات تجريبية ومنطق بسيط.', 'حاجة الطالب', 'طلب تجريبي'],
      matches: ['مطابقة المدرسين الذكية', 'مدرسون مقترحون حسب طلب الطالب.', 'يتم حساب الدرجات من بيانات محلية تجريبية بمقارنة المادة والمرحلة والميزانية والوقت ونوع الجلسة وأسلوب التعلم.'],
      filter: ['التصفية اليدوية', 'تصفح المدرسين والمحاضرين والمؤسسات.', 'استخدم فلاتر مألوفة عندما يريد الطالب أو ولي الأمر تحكما مباشرا.'],
      dashboard: ['متابعة الجلسات', 'لوحة مناسبة للعائلة مع حالات الموافقة.', 'واجهة تشغيلية بسيطة للجلسات وحالة الحجز ورقابة ولي الأمر.'],
      auth: ['تسجيل دخول تجريبي', 'وصول يبدو آمنا للطلاب والأهالي والمدرسين والمؤسسات.', 'شاشات أمامية فقط لعرض النسخة الأولية، بدون مصادقة حقيقية.'],
      profile: ['إعدادات الملف', 'إدارة الحساب والدور والموافقات.', 'واجهة إعدادات تجريبية لعرض الأدوار وضوابط الأمان.']
      , assignments: ['مساحة الواجبات', 'اعرض الواجبات وحلها مباشرة على BrainBoost.', 'يمكن للطلاب فتح واجبات المدرسين، كتابة الإجابات، حفظ المسودات، وتسليم الحل من واجهة واحدة.']
    },
    reason: {
      recommendedFor: 'موصى به بسبب',
      fallback: 'موصى به كخيار قريب عالي التقييم مع دعم أكاديمي مرن.',
      subject: (subject) => `خبرة قوية في ${optionLabels.ar[subject] || subject}`,
      level: (level) => `يدعم طلاب ${optionLabels.ar[level] || level}`,
      budget: (budget) => `يناسب ميزانية ${budget} د.ب`,
      session: (type) => `يوفر جلسات ${optionLabels.ar[type] || type}`,
      availability: (availability) => `متاح في ${optionLabels.ar[availability] || availability}`,
      style: 'يناسب أسلوب التعلم المفضل',
      match: 'مطابقة'
    }
  }
};

const optionLabels = {
  ar: {
    Calculus: 'تفاضل وتكامل',
    Mathematics: 'رياضيات',
    Physics: 'فيزياء',
    Chemistry: 'كيمياء',
    English: 'إنجليزي',
    Accounting: 'محاسبة',
    'Computer Science': 'علوم الحاسوب',
    Statistics: 'إحصاء',
    IELTS: 'آيلتس',
    'Academic Writing': 'كتابة أكاديمية',
    Economics: 'اقتصاد',
    Business: 'إدارة أعمال',
    Finance: 'تمويل',
    Biology: 'أحياء',
    Science: 'علوم',
    Arabic: 'عربي',
    Python: 'بايثون',
    Robotics: 'روبوتات',
    'Data Science': 'علم البيانات',
    AI: 'ذكاء اصطناعي',
    'IELTS Writing': 'كتابة آيلتس',
    University: 'جامعة',
    'Grade 6': 'الصف السادس',
    'Grade 9': 'الصف التاسع',
    'Grade 12': 'الصف الثاني عشر',
    Professional: 'مهني',
    'High school': 'ثانوي',
    Online: 'عن بعد',
    'In-person': 'حضوري',
    Hybrid: 'هجين',
    Weeknights: 'أمسيات أيام العمل',
    'After school': 'بعد المدرسة',
    Weekend: 'نهاية الأسبوع',
    Mornings: 'صباحا',
    Friday: 'الجمعة',
    Saturday: 'السبت',
    Sunday: 'الأحد',
    Tuesday: 'الثلاثاء',
    Thursday: 'الخميس',
    'Structured explanations': 'شرح منظم',
    'Practice-heavy coaching': 'تدريب عملي مكثف',
    'Patient step-by-step support': 'شرح صبور خطوة بخطوة',
    'Real-world examples': 'أمثلة واقعية',
    'Project-based learning': 'تعلم بالمشاريع',
    'Private tutor': 'مدرس خاص',
    'University instructor': 'محاضر جامعي',
    Institution: 'مؤسسة',
    Student: 'طالب',
    Parent: 'ولي أمر',
    Tutor: 'مدرس',
    Manama: 'المنامة',
    Seef: 'السيف',
    Riffa: 'الرفاع',
    Muharraq: 'المحرق',
    Amwaj: 'أمواج',
    Juffair: 'الجفير',
    'Isa Town': 'مدينة عيسى',
    'Hamad Town': 'مدينة حمد',
    Saar: 'سار',
    'Diplomatic Area': 'المنطقة الدبلوماسية',
    Budaiya: 'البديع'
  }
};

function useLocaleTools(locale) {
  const t = translations[locale];
  const label = (value) => optionLabels[locale]?.[value] || value;
  return { t, label };
}

function App() {
  const [theme, setTheme] = useState(() => getDeviceTheme());
  const [locale, setLocale] = useState('en');
  const [route, setRoute] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [studentRequest, setStudentRequest] = useState(initialRequest);
  const { t, label } = useLocaleTools(locale);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (event) => setTheme(event.matches ? 'dark' : 'light');

    mediaQuery.addEventListener('change', handleThemeChange);
    return () => mediaQuery.removeEventListener('change', handleThemeChange);
  }, []);

  const navigate = (nextRoute) => {
    setRoute(nextRoute);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app ${theme}`} dir={t.dir} lang={locale}>
      <Header route={route} navigate={navigate} theme={theme} setTheme={setTheme} locale={locale} setLocale={setLocale} t={t} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        {route === 'home' && <Landing navigate={navigate} studentRequest={studentRequest} t={t} label={label} />}
        {route === 'onboarding' && <Onboarding request={studentRequest} setRequest={setStudentRequest} navigate={navigate} t={t} label={label} />}
        {route === 'matches' && <Matching request={studentRequest} navigate={navigate} t={t} label={label} />}
        {route === 'filter' && <ManualFilter t={t} label={label} />}
        {route === 'assignments' && <Assignments t={t} label={label} />}
        {route === 'dashboard' && <Dashboard navigate={navigate} t={t} label={label} />}
        {route === 'auth' && <AuthScreens t={t} label={label} />}
        {route === 'profile' && <ProfileSettings t={t} label={label} />}
      </main>
    </div>
  );
}

function getDeviceTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function Header({ route, navigate, theme, setTheme, locale, setLocale, t, menuOpen, setMenuOpen }) {
  const unsolvedAssignments = assignments.filter(item => !['Submitted', 'Reviewed'].includes(item.status)).length;
  const links = [
    ['home', t.nav.home],
    ['onboarding', t.nav.onboarding],
    ['matches', t.nav.matches],
    ['filter', t.nav.filter],
    ['assignments', t.nav.assignments],
    ['dashboard', t.nav.dashboard],
    ['auth', t.nav.auth]
  ];

  return (
    <header className="site-header">
      <button className="brand" onClick={() => navigate('home')} aria-label="Go to landing page">
        <span className="brand-mark">
          <img className="brand-logo-light" src={brainBoostLogoLight} alt="" />
          <img className="brand-logo-dark" src={brainBoostLogoDark} alt="" />
        </span>
        <span className="brand-word">BrainBoost</span>
      </button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {links.map(([key, label]) => (
          <button key={key} className={route === key ? 'nav-link active' : 'nav-link'} onClick={() => navigate(key)}>
            {label}
            {key === 'assignments' && unsolvedAssignments > 0 && <span className="nav-badge">{unsolvedAssignments}</span>}
          </button>
        ))}
      </nav>
      <div className="header-actions">
        <button className="locale-button" onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')} aria-label="Toggle Arabic and English">
          {locale === 'en' ? 'عربي' : 'EN'}
        </button>
        <button className="icon-button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label="Toggle light and dark mode">
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button className="icon-button mobile-only" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}

function Landing({ navigate, studentRequest, t, label }) {
  const preview = scoreTutors(studentRequest, t).slice(0, 3);

  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={16} /> {t.common.startup}</span>
          <h1>{t.home.title}</h1>
          <p className="hero-lede">{t.home.lede}</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => navigate('onboarding')}>{t.common.startMatching} <ArrowRight size={18} /></button>
            <button className="secondary-button" onClick={() => navigate('filter')}>{t.common.browseTutors}</button>
          </div>
          <div className="trust-row">
            <span>{t.common.parentApprovals}</span>
            <span>{t.common.vettedProfiles}</span>
            <span>{t.common.sessionTracking}</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="BrainBoost AI tutor matching preview">
          <div className="match-panel">
            <div className="panel-top">
              <div>
                <p>{t.common.aiMatchRequest}</p>
                <strong>{label('Calculus')}, {label('University')}</strong>
              </div>
              <span>25 BHD/hr</span>
            </div>
            {preview.map((tutor) => <MiniTutor key={tutor.id} tutor={tutor} label={label} />)}
          </div>
        </div>
      </section>

      <section className="split-section">
        <div>
          <span className="section-label">{t.common.problem}</span>
          <h2>{t.home.problemTitle}</h2>
        </div>
        <p>{t.home.problemText}</p>
      </section>

      <section className="solution-band">
        <div className="section-heading">
          <span className="section-label">{t.common.solution}</span>
          <h2>{t.home.solutionTitle}</h2>
        </div>
        <div className="feature-grid">
          {[Search, Sparkles, ShieldCheck, CalendarCheck].map((IconComponent, index) => <Feature key={t.home.features[index][0]} icon={<IconComponent />} title={t.home.features[index][0]} text={t.home.features[index][1]} />)}
        </div>
      </section>

      <section className="steps-section">
        <div className="section-heading">
          <span className="section-label">{t.common.howItWorks}</span>
          <h2>{t.home.stepsTitle}</h2>
        </div>
        <div className="steps">
          {t.home.steps.map((step, index) => (
            <div className="step" key={step[0]}>
              <span>{index + 1}</span>
              <h3>{step[0]}</h3>
              <p>{step[1]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="audience-section">
        <div className="section-heading">
          <span className="section-label">{t.common.benefits}</span>
          <h2>{t.home.benefitsTitle}</h2>
        </div>
        <div className="audience-grid">
          {[GraduationCap, Users, UserCheck, Building2].map((IconComponent, index) => <Audience key={t.home.audiences[index][0]} icon={<IconComponent />} title={t.home.audiences[index][0]} text={t.home.audiences[index][1]} />)}
        </div>
      </section>

      <section className="cta-band">
        <div>
          <span className="section-label">{t.common.demoReady}</span>
          <h2>{t.home.ctaTitle}</h2>
        </div>
        <button className="primary-button" onClick={() => navigate('onboarding')}>{t.home.launch} <ArrowRight size={18} /></button>
      </section>
    </>
  );
}

function Onboarding({ request, setRequest, navigate, t, label }) {
  const update = (key, value) => setRequest({ ...request, [key]: value });
  const page = t.pages.onboarding;

  return (
    <section className="page-shell">
      <PageTitle label={page[0]} title={page[1]} text={page[2]} />
      <div className="form-layout">
        <form className="smart-form" onSubmit={(event) => { event.preventDefault(); navigate('matches'); }}>
          <Field label={t.common.subject}>
            <select value={request.subject} onChange={(e) => update('subject', e.target.value)}>
              {['Calculus', 'Mathematics', 'Physics', 'Chemistry', 'English', 'Accounting', 'Computer Science'].map(option => <option key={option} value={option}>{label(option)}</option>)}
            </select>
          </Field>
          <Field label={t.common.level}>
            <select value={request.level} onChange={(e) => update('level', e.target.value)}>
              {['Grade 6', 'Grade 9', 'Grade 12', 'University', 'Professional'].map(option => <option key={option} value={option}>{label(option)}</option>)}
            </select>
          </Field>
          <Field label={t.common.budget}>
            <input type="number" min="5" max="60" value={request.budget} onChange={(e) => update('budget', Number(e.target.value))} />
          </Field>
          <Field label={t.common.availability}>
            <select value={request.availability} onChange={(e) => update('availability', e.target.value)}>
              {['Weeknights', 'After school', 'Weekend', 'Mornings', 'Friday', 'Saturday'].map(option => <option key={option} value={option}>{label(option)}</option>)}
            </select>
          </Field>
          <Field label={t.common.sessionType}>
            <div className="segmented">
              {['Online', 'In-person', 'Hybrid'].map(option => (
                <button type="button" className={request.sessionType === option ? 'selected' : ''} onClick={() => update('sessionType', option)} key={option}>{label(option)}</button>
              ))}
            </div>
          </Field>
          <Field label={t.common.learningStyle}>
            <select value={request.learningStyle} onChange={(e) => update('learningStyle', e.target.value)}>
              {['Structured explanations', 'Practice-heavy coaching', 'Patient step-by-step support', 'Real-world examples', 'Project-based learning'].map(option => <option key={option} value={option}>{label(option)}</option>)}
            </select>
          </Field>
          <label className="field wide">
            <span>{t.common.notes}</span>
            <textarea value={request.notes} onChange={(e) => update('notes', e.target.value)} rows="5" />
          </label>
          <button className="primary-button wide" type="submit">{t.common.generate} <Sparkles size={18} /></button>
        </form>
        <aside className="request-preview">
          <span className="section-label">{page[3]}</span>
          <h3>{page[4]}</h3>
          <p>{request.notes}</p>
          <div className="chips">
            <span>{label(request.subject)}</span>
            <span>{label(request.level)}</span>
            <span>{request.budget} BHD/hr</span>
            <span>{label(request.sessionType)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Matching({ request, navigate, t, label }) {
  const ranked = useMemo(() => scoreTutors(request, t), [request, t]);
  const page = t.pages.matches;

  return (
    <section className="page-shell">
      <PageTitle label={page[0]} title={page[1]} text={page[2]} />
      <div className="match-summary">
        <div>{label(request.subject)}</div>
        <div>{label(request.level)}</div>
        <div>{request.budget} BHD/hr</div>
        <div>{label(request.availability)}</div>
      </div>
      <div className="cards-grid tutor-grid">
        {ranked.map((tutor) => <TutorCard key={tutor.id} tutor={tutor} showReason t={t} label={label} />)}
      </div>
      <div className="inline-actions">
        <button className="secondary-button" onClick={() => navigate('onboarding')}>{t.common.editRequest}</button>
        <button className="primary-button" onClick={() => navigate('dashboard')}>{t.common.viewDashboard} <ChevronRight size={18} /></button>
      </div>
    </section>
  );
}

function ManualFilter({ t, label }) {
  const [filters, setFilters] = useState({ subject: 'All', price: 30, rating: 4.5, sessionType: 'All', availability: 'All', type: 'All' });
  const subjects = ['All', ...new Set(tutors.flatMap(tutor => tutor.subjects))];
  const filtered = tutors.filter(tutor => {
    const subjectOk = filters.subject === 'All' || tutor.subjects.includes(filters.subject);
    const priceOk = tutor.price <= filters.price;
    const ratingOk = tutor.rating >= filters.rating;
    const sessionOk = filters.sessionType === 'All' || tutor.sessionType === filters.sessionType;
    const availabilityOk = filters.availability === 'All' || tutor.availability.includes(filters.availability);
    const typeOk = filters.type === 'All' || tutor.type === filters.type;
    return subjectOk && priceOk && ratingOk && sessionOk && availabilityOk && typeOk;
  });

  const update = (key, value) => setFilters({ ...filters, [key]: value });
  const page = t.pages.filter;

  return (
    <section className="page-shell">
      <PageTitle label={page[0]} title={page[1]} text={page[2]} />
      <div className="filter-layout">
        <aside className="filters-panel">
          <Field label={t.common.subject}>
            <select value={filters.subject} onChange={(e) => update('subject', e.target.value)}>{subjects.map(item => <option key={item} value={item}>{item === 'All' ? t.common.all : label(item)}</option>)}</select>
          </Field>
          <Field label={`${t.common.maxPrice}: ${filters.price} BHD`}>
            <input type="range" min="10" max="35" value={filters.price} onChange={(e) => update('price', Number(e.target.value))} />
          </Field>
          <Field label={`${t.common.minRating}: ${filters.rating}`}>
            <input type="range" min="4" max="5" step="0.1" value={filters.rating} onChange={(e) => update('rating', Number(e.target.value))} />
          </Field>
          <Field label={t.common.sessionType}>
            <select value={filters.sessionType} onChange={(e) => update('sessionType', e.target.value)}>{['All', 'Online', 'In-person', 'Hybrid'].map(item => <option key={item} value={item}>{item === 'All' ? t.common.all : label(item)}</option>)}</select>
          </Field>
          <Field label={t.common.availability}>
            <select value={filters.availability} onChange={(e) => update('availability', e.target.value)}>{['All', 'Weeknights', 'After school', 'Weekend', 'Mornings', 'Friday', 'Saturday'].map(item => <option key={item} value={item}>{item === 'All' ? t.common.all : label(item)}</option>)}</select>
          </Field>
          <Field label={t.common.tutorType}>
            <select value={filters.type} onChange={(e) => update('type', e.target.value)}>{['All', 'Private tutor', 'University instructor', 'Institution'].map(item => <option key={item} value={item}>{item === 'All' ? t.common.all : label(item)}</option>)}</select>
          </Field>
        </aside>
        <div className="cards-grid tutor-grid">
          {filtered.map((tutor) => <TutorCard key={tutor.id} tutor={tutor} t={t} label={label} />)}
        </div>
      </div>
    </section>
  );
}

function Assignments({ t, label }) {
  const [selectedId, setSelectedId] = useState(assignments[0].id);
  const [statusFilter, setStatusFilter] = useState('All');
  const [drafts, setDrafts] = useState(() => Object.fromEntries(assignments.map(item => [item.id, item.answer])));
  const selected = assignments.find(item => item.id === selectedId) || assignments[0];
  const filtered = assignments.filter(item => statusFilter === 'All' || item.status === statusFilter);
  const page = t.pages.assignments;
  const statusLabel = (status) => ({
    'Not started': t.common.notStarted,
    'In progress': t.common.inProgress,
    Submitted: t.common.submitted,
    Reviewed: t.common.reviewed
  }[status] || status);

  const updateDraft = (value) => setDrafts({ ...drafts, [selected.id]: value });

  return (
    <section className="page-shell">
      <PageTitle label={page[0]} title={page[1]} text={page[2]} />
      <div className="assignment-stats">
        <StatusCard label={t.common.assignments} value={assignments.length} />
        <StatusCard label={t.common.inProgress} value={assignments.filter(item => item.status === 'In progress').length} />
        <StatusCard label={t.common.submitted} value={assignments.filter(item => item.status === 'Submitted' || item.status === 'Reviewed').length} />
      </div>
      <div className="assignment-layout">
        <aside className="assignment-list">
          <div className="assignment-filter">
            {['All', 'Not started', 'In progress', 'Submitted', 'Reviewed'].map(status => (
              <button key={status} className={statusFilter === status ? 'selected' : ''} onClick={() => setStatusFilter(status)}>
                {status === 'All' ? t.common.all : statusLabel(status)}
              </button>
            ))}
          </div>
          {filtered.map(item => (
            <button key={item.id} className={selected.id === item.id ? 'assignment-item active' : 'assignment-item'} onClick={() => setSelectedId(item.id)}>
              <span className={`status ${item.status.toLowerCase().replaceAll(' ', '-')}`}>{statusLabel(item.status)}</span>
              <strong>{item.title}</strong>
              <small>{label(item.subject)} · {t.common.due} {item.due}</small>
            </button>
          ))}
        </aside>
        <section className="assignment-workspace">
          <div className="assignment-head">
            <div>
              <span className="section-label">{label(selected.subject)}</span>
              <h2>{selected.title}</h2>
              <p>{t.common.assignedBy} {selected.tutor} · {t.common.due} {selected.due}</p>
            </div>
            <div className="assignment-score">
              <strong>{selected.points}</strong>
              <span>{t.common.points}</span>
            </div>
          </div>
          <div className="assignment-meta">
            <span>{t.common.difficulty}: {selected.difficulty}</span>
            <span>{t.common.progress}: {statusLabel(selected.status)}</span>
          </div>
          <p className="assignment-prompt">{selected.prompt}</p>
          <div className="assignment-columns">
            <div>
              <h3>{t.common.assignmentTasks}</h3>
              <ul className="task-list">
                {selected.tasks.map(task => <li key={task}>{task}</li>)}
              </ul>
            </div>
            <div>
              <h3>{t.common.resources}</h3>
              <div className="resource-list">
                {selected.resources.map(resource => <button key={resource}>{resource}</button>)}
              </div>
            </div>
          </div>
          <label className="field assignment-answer">
            <span>{t.common.answer}</span>
            <textarea value={drafts[selected.id] || ''} onChange={(event) => updateDraft(event.target.value)} rows="9" placeholder={t.common.workArea} />
          </label>
          <div className="inline-actions">
            <button className="secondary-button">{t.common.saveDraft}</button>
            <button className="primary-button">{t.common.submitWork} <ArrowRight size={18} /></button>
          </div>
        </section>
      </div>
    </section>
  );
}

function Dashboard({ navigate, t, label }) {
  const counts = {
    Upcoming: sessions.filter(s => s.status === 'Upcoming').length,
    Completed: sessions.filter(s => s.status === 'Completed').length,
    Pending: sessions.filter(s => s.status === 'Pending').length
  };
  const page = t.pages.dashboard;
  const statusLabel = (status) => ({ Upcoming: t.common.upcoming, Completed: t.common.completed, Pending: t.common.pending }[status] || status);
  const approvalLabel = (approval) => ({ Approved: t.common.approved, 'Parent review': t.common.parentReview, 'Locked until approved': t.common.locked }[approval] || approval);

  return (
    <section className="page-shell">
      <PageTitle label={page[0]} title={page[1]} text={page[2]} />
      <div className="status-grid">
        <StatusCard label={t.common.upcoming} value={counts.Upcoming} />
        <StatusCard label={t.common.completed} value={counts.Completed} />
        <StatusCard label={t.common.pending} value={counts.Pending} />
      </div>
      <div className="dashboard-layout">
        <section className="sessions-panel">
          <h3>{t.common.sessions}</h3>
          {sessions.map(session => (
            <div className="session-row" key={session.id}>
              <div>
                <strong>{label(session.subject)}</strong>
                <p>{session.tutor} · {session.date}</p>
              </div>
              <span className={`status ${session.status.toLowerCase()}`}>{statusLabel(session.status)}</span>
              <span>{session.price}</span>
              <span className="approval">{approvalLabel(session.approval)}</span>
            </div>
          ))}
        </section>
        <aside className="approval-panel">
          <h3>{t.common.parentalControl}</h3>
          <ApprovalItem title={t.common.registration} status={t.common.approved} />
          <ApprovalItem title={t.common.booking} status={t.common.parentReview} />
          <ApprovalItem title={t.common.payments} status={t.common.locked} />
          <button className="primary-button" onClick={() => navigate('profile')}>{t.common.profileSettings} <Settings size={18} /></button>
        </aside>
      </div>
    </section>
  );
}

function AuthScreens({ t, label }) {
  const page = t.pages.auth;
  return (
    <section className="page-shell auth-page">
      <PageTitle label={page[0]} title={page[1]} text={page[2]} />
      <div className="auth-grid">
        <AuthCard mode="Login" t={t} label={label} />
        <AuthCard mode="Register" t={t} label={label} />
      </div>
    </section>
  );
}

function ProfileSettings({ t, label }) {
  const page = t.pages.profile;
  return (
    <section className="page-shell">
      <PageTitle label={page[0]} title={page[1]} text={page[2]} />
      <div className="settings-grid">
        <div className="settings-panel">
          <h3>{t.common.studentProfile}</h3>
          <Field label={t.common.name}><input defaultValue="Sara Al Mahmood" /></Field>
          <Field label={t.common.role}><select defaultValue="Student"><option value="Student">{label('Student')}</option><option value="Parent">{label('Parent')}</option><option value="Tutor">{label('Tutor')}</option><option value="Institution">{label('Institution')}</option></select></Field>
          <Field label={t.common.level}><input defaultValue={label('University')} /></Field>
          <Field label={t.common.defaultCity}><input defaultValue={label('Manama')} /></Field>
        </div>
        <div className="settings-panel">
          <h3>{t.common.safetyPayments}</h3>
          <ApprovalItem title={t.common.parentLinked} status={t.common.approved} />
          <ApprovalItem title={t.common.bookingPermission} status={t.common.parentReview} />
          <ApprovalItem title={t.common.paymentPermission} status={t.common.locked} />
          <button className="secondary-button">{t.common.saveSettings}</button>
        </div>
      </div>
    </section>
  );
}

function TutorCard({ tutor, showReason = false, t, label }) {
  return (
    <article className={tutor.institution ? 'tutor-card institution-card' : 'tutor-card'}>
      <div className="card-header">
        <div className={tutor.institution ? 'avatar institution-avatar' : 'avatar tutor-avatar'} />
        <div>
          <h3>{tutor.name}</h3>
          <p>{label(tutor.type)} · {tutor.location}</p>
        </div>
      </div>
      <p className="bio">{tutor.bio}</p>
      <div className="meta-grid">
        <span><Star size={15} /> {tutor.rating}</span>
        <span>{tutor.price} BHD/hr</span>
        <span>{label(tutor.sessionType)}</span>
        <span>{tutor.availability.map(label).join(', ')}</span>
      </div>
      <div className="chips">
        {tutor.subjects.slice(0, 3).map(subject => <span key={subject}>{label(subject)}</span>)}
      </div>
      {showReason && (
        <div className="reason-box">
          <strong>{tutor.matchScore}% {t.reason.match}</strong>
          <p>{tutor.reason}</p>
        </div>
      )}
    </article>
  );
}

function scoreTutors(request, t = translations.en) {
  return tutors.map(tutor => {
    let score = 45;
    const reasons = [];
    if (tutor.subjects.includes(request.subject)) {
      score += 18;
      reasons.push(t.reason.subject(request.subject));
    }
    if (tutor.levels.includes(request.level)) {
      score += 12;
      reasons.push(t.reason.level(request.level));
    }
    if (tutor.price <= request.budget) {
      score += 10;
      reasons.push(t.reason.budget(request.budget));
    }
    if (tutor.sessionType === request.sessionType || tutor.sessionType === 'Hybrid') {
      score += 8;
      reasons.push(t.reason.session(request.sessionType));
    }
    if (tutor.availability.includes(request.availability)) {
      score += 5;
      reasons.push(t.reason.availability(request.availability));
    }
    if (tutor.style === request.learningStyle) {
      score += 5;
      reasons.push(t.reason.style);
    }
    const matchScore = Math.min(score, 98);
    return {
      ...tutor,
      matchScore,
      reason: reasons.length ? `${t.reason.recommendedFor} ${reasons.slice(0, 3).join(', ')}.` : t.reason.fallback
    };
  }).sort((a, b) => b.matchScore - a.matchScore);
}

function MiniTutor({ tutor, label }) {
  return (
    <div className="mini-tutor">
      <div>
        <strong>{tutor.name}</strong>
        <p>{label(tutor.type)} · {tutor.price} BHD/hr</p>
      </div>
      <span>{tutor.matchScore}%</span>
    </div>
  );
}

function Feature({ title, text }) {
  return <article className="feature-card"><h3>{title}</h3><p>{text}</p></article>;
}

function Audience({ title, text }) {
  return <article className="audience-card"><h3>{title}</h3><p>{text}</p></article>;
}

function PageTitle({ label, title, text }) {
  return <div className="page-title"><span className="section-label">{label}</span><h1>{title}</h1><p>{text}</p></div>;
}

function Field({ label, children }) {
  return <label className="field"><span>{label}</span>{children}</label>;
}

function StatusCard({ label, value }) {
  return <article className="status-card"><div><strong>{value}</strong><span>{label}</span></div></article>;
}

function ApprovalItem({ title, status }) {
  return <div className="approval-item"><span>{title}</span><strong>{status}</strong></div>;
}

function AuthCard({ mode, t, label }) {
  const displayMode = mode === 'Login' ? t.common.login : t.common.register;
  return (
    <form className="auth-card" onSubmit={(event) => event.preventDefault()}>
      <div className="lock-icon" />
      <h3>{displayMode}</h3>
      {mode === 'Register' && <Field label={t.common.accountType}><select><option>{label('Student')}</option><option>{label('Parent')}</option><option>{label('Tutor')}</option><option>{label('Institution')}</option></select></Field>}
      <Field label={t.common.email}><input type="email" placeholder="name@example.com" /></Field>
      <Field label={t.common.password}><input type="password" placeholder="password" /></Field>
      {mode === 'Register' && <Field label={t.common.parentEmail}><input type="email" placeholder="parent@example.com" /></Field>}
      <button className="primary-button">{displayMode}</button>
    </form>
  );
}

createRoot(document.getElementById('root')).render(<App />);
