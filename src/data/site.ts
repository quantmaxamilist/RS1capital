export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  blurb: string;
  gradient: string;
  expanded?: boolean;
  /** Optional link — turns the card into a gateway to a dedicated page */
  href?: string;
  cta?: string;
}

/** Retained for the animated counter helper in scripts/animations.ts (no stats section currently rendered). */
export interface StatItem {
  label: string;
  placeholder?: boolean;
  displayValue?: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
}

export interface AudienceCard {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** A titled block of guidance text on a service page. */
export interface GuidanceSection {
  id: string;
  title: string;
  paragraphs: string[];
  /** A closing caution, shown set apart from the paragraphs above it. */
  note?: string;
}

/** The closing call to action on a service page. The button always goes to the contact form. */
export interface PageCtaContent {
  heading: string;
  text: string;
  action: string;
  related?: { label: string; href: string };
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Acquisitions', href: '/businesses-we-buy' },
  { label: 'Approach', href: '#approach' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const marqueeKeywords: string[] = [
  'Direct Lending',
  'Structured Finance',
  'Investment',
  'Special Situations',
  'Business Turnaround',
  'Restructuring',
  'Corporate Rescue',
  'Distressed M&A',
  'Strategic Advisory',
];

export const services: ServiceItem[] = [
  {
    id: 'direct-lending',
    name: 'Direct Lending & Structured Finance',
    blurb: 'Flexible, fast debt facilities for growth, acquisitions and special situations.',
    gradient: 'linear-gradient(135deg, #1a1a1a 0%, #c9a227 35%, #080808 100%)',
    expanded: true,
  },
  {
    id: 'investment',
    name: 'Investment & Special Situations',
    blurb: 'Equity and hybrid capital for complex, time-sensitive opportunities.',
    gradient: 'linear-gradient(145deg, #080808 0%, #111111 40%, #e6c458 70%, #080808 100%)',
  },
  {
    id: 'turnaround',
    name: 'Business Turnaround & Restructuring',
    blurb: 'Hands-on operational and financial restructuring to stabilise and rebuild.',
    gradient: 'linear-gradient(160deg, #1a1a1a 0%, #c9a227 50%, #080808 100%)',
    href: '/business-turnaround',
    cta: 'Business turnaround support',
  },
  {
    id: 'rescue',
    name: 'Corporate Rescue & Distressed Situations',
    blurb: 'Decisive support for businesses in distress, including accelerated M&A.',
    gradient: 'linear-gradient(120deg, #080808 0%, #c9a227 45%, #1a1a1a 100%)',
  },
  {
    id: 'advisory',
    name: 'Strategic & Financial Advisory',
    blurb: 'Pragmatic advice for owners, lenders and insolvency practitioners.',
    gradient: 'linear-gradient(135deg, #111111 0%, #e6c458 30%, #080808 100%)',
  },
  {
    id: 'acquisitions',
    name: 'Acquisitions',
    blurb: 'Outright purchase of businesses in time-critical, retirement or distressed situations.',
    gradient: 'linear-gradient(150deg, #080808 0%, #c9a227 40%, #e6c458 62%, #080808 100%)',
    href: '/businesses-we-buy',
    cta: 'The businesses we buy',
  },
];

/** Qualitative "Why RS1" points — replaces the old placeholder stats. No figures published. */
export const whyRs1: string[] = [
  'Substantial capital deployed into special situations',
  'A track record across time-critical, retirement and distressed sales',
  'Decisive terms — agreed in days, not months',
  'Decades of combined experience across investment, turnaround and insolvency',
  'UK & Europe',
  '100% confidential, every time',
];

export const faqs: FaqItem[] = [
  {
    question: 'What size of business do you acquire or invest in?',
    answer: 'We consider opportunities from £1m to £50m in turnover, across most sectors.',
  },
  {
    question: 'How quickly can you move?',
    answer:
      'Indicative terms are typically agreed within two working days of first contact; full completion depends on complexity.',
  },
  {
    question: 'Do you buy businesses outright, or invest alongside existing owners?',
    answer:
      "Both. Depending on the situation we'll acquire outright, take an equity stake, or provide lending or structured finance.",
  },
  {
    question: 'Is my enquiry confidential?',
    answer:
      'Yes. Every enquiry — from an owner, lender, insolvency practitioner or adviser — is treated in strict confidence from first contact through to completion.',
  },
  {
    question: 'Do you work with insolvency practitioners on accelerated or distressed sales?',
    answer:
      'Yes — we regularly support insolvency practitioners on time-critical and distressed M&A.',
  },
  {
    question: 'Which sectors do you cover?',
    answer:
      "We're sector-agnostic — we assess every opportunity on its fundamentals, not its industry.",
  },
  {
    question: 'What areas do you cover?',
    answer: 'UK and Europe, with offices in London and Mahón, Spain.',
  },
  {
    question: 'How do I get in touch?',
    answer:
      'Email info@rs1.uk or use the contact form — we aim to respond the same day.',
  },
];

export const audienceCards: AudienceCard[] = [
  {
    title: 'Business Owners',
    description: 'Capital, breathing room and a plan when time is short.',
  },
  {
    title: 'Lenders & Funders',
    description: 'A pragmatic partner for special situations and distressed exposures.',
  },
  {
    title: 'Insolvency Practitioners',
    description: 'Speed and certainty on time-critical processes and asset sales.',
  },
  {
    title: 'Professional Advisers',
    description: 'A responsive capital and turnaround partner for your clients.',
  },
];

export const pillars = [
  {
    id: 'capital',
    title: 'Capital',
    description: 'Direct lending, structured finance and investment for special situations and distress.',
    link: 'LEARN MORE',
    href: '#contact',
  },
  {
    id: 'turnaround',
    title: 'Turnaround',
    description: 'Hands-on operational turnaround and restructuring to stabilise and rebuild value.',
    link: 'LEARN MORE',
    href: '#contact',
  },
  {
    id: 'advisory',
    title: 'Advisory',
    description: 'Strategic and financial advice for owners, lenders and insolvency practitioners.',
    link: 'LEARN MORE',
    href: '#contact',
  },
] as const;

/** WhatsApp click-to-chat (business mobile 07500 111500 → +44 7500 111500) */
export const whatsapp = {
  display: '07500 111500',
  href: `https://wa.me/447500111500?text=${encodeURIComponent(
    "Hi RS1 Capital, I'd like to discuss an enquiry.",
  )}`,
};

/** "The Businesses We Buy" acquisitions page */
export const acquisitionsIntro =
  'We acquire companies across the UK and Europe, working directly with owners and alongside lenders, insolvency practitioners and professional advisers. Every business is different, but the situations we buy into fall into one of three categories.';

export const acquisitionSituations = [
  {
    id: 'time-critical',
    title: 'Time-Critical Situations',
    description:
      "A sale that can't wait for a conventional process — a funding deadline, a lease event, a departing shareholder, or a window that's about to close. Our capital and decision-making are built to move at the pace the situation demands, with terms agreed in days, not months.",
  },
  {
    id: 'retirement',
    title: 'Retirement & Succession',
    description:
      "An owner ready to step back, with no family successor or management buyout in place. We offer a clean, confidential exit that protects what's been built — continuity for staff, customers and suppliers — without the long timelines and uncertainty of a conventional sale.",
  },
  {
    id: 'financial-distress',
    title: 'Financial Distress',
    description:
      'Businesses under real financial pressure: covenant breaches, cash-flow strain, or formal insolvency risk. We work alongside lenders and insolvency practitioners to act with the speed and certainty these situations demand, including accelerated and distressed M&A.',
  },
] as const;

/*
 * Acquisitions page — guidance, questions and closing call to action.
 * Text supplied by the client (acquisitions-content.md, 23 Nov 2026) and used as written.
 */
export const acquisitionGuidance: GuidanceSection[] = [
  {
    id: 'discussing-an-acquisition',
    title: 'Discussing a business acquisition',
    paragraphs: [
      'The right starting point is a clear explanation of the business and the situation behind the proposed sale. A retirement sale, a funding deadline and a business in financial distress can require different approaches. Tell us what the business does, why a sale is being considered and what deadlines may affect the available options.',
      'RS1 considers outright acquisitions as well as investment and lending opportunities. An initial discussion helps establish whether the situation falls within our approach and what further information may be needed. Any transaction is subject to assessment, due diligence and agreed terms.',
    ],
  },
  {
    id: 'what-to-prepare',
    title: 'What to prepare before contacting us',
    paragraphs: [
      "A short business overview is useful for the first conversation. Include the sector, operating locations, approximate turnover and the reason for considering a sale. Explain whether you are the owner or a professional adviser acting on the owner's behalf.",
      'Where available, recent management accounts, a cash-flow forecast and a summary of borrowing can help explain the circumstances. Identify material deadlines, shareholder issues or operational pressures. Further information can be discussed privately once the appropriate arrangements are in place.',
    ],
    note: 'Please contact us privately to agree how confidential business information should be shared.',
  },
  {
    id: 'professional-advisers',
    title: 'Working with professional advisers',
    paragraphs: [
      'RS1 works with owners, lenders, insolvency practitioners and professional advisers considering business sales and special situations. If you are introducing an opportunity, explain your role, the relevant transaction timetable and any process requirements.',
    ],
  },
];

export const acquisitionFaqs: FaqItem[] = [
  {
    question: 'Does a business need to be in distress?',
    answer:
      'No. We also consider retirement, succession and time-critical sales. Explain the circumstances so the opportunity can be assessed on its own facts.',
  },
  {
    question: 'Can I discuss a sale before deciding to proceed?',
    answer:
      'Contact RS1 to explain the situation and discuss whether there is a potential fit. A discussion does not guarantee an offer, funding or a completed transaction.',
  },
  {
    question: 'What if there is an urgent deadline?',
    answer:
      'Make the deadline clear in your initial enquiry and explain what it relates to. The options and timetable depend on the business, the information available and the transaction requirements.',
  },
  {
    question: 'Do you consider UK and European businesses?',
    answer:
      "We consider businesses across the UK and Europe. Include the business's operating locations in your enquiry so the opportunity can be assessed.",
  },
];

export const acquisitionsCta: PageCtaContent = {
  heading: 'Discuss your situation in confidence',
  text: 'Considering a sale or introducing an acquisition opportunity? Contact RS1 Capital with a brief overview of the business and any relevant deadlines.',
  action: 'Contact RS1',
  related: { label: 'Business turnaround and restructuring support', href: '/business-turnaround' },
};

/*
 * Business turnaround page.
 * Text supplied by the client (turnaround-content.md, 23 Nov 2026) and used as written.
 */
export const turnaround = {
  title: 'Business Turnaround & Restructuring | RS1 Capital',
  description:
    'Explore business turnaround and restructuring support from RS1 Capital for businesses across the UK and Europe. Discuss your situation in confidence.',
  heading: 'Business turnaround and restructuring support',
  intro:
    'Financial pressure rarely affects only one part of a business. Cash-flow constraints, operational disruption and funding requirements can overlap, making it difficult to decide what to address first. RS1 Capital supports businesses across the UK and Europe with operational turnaround, restructuring, investment and lending discussions shaped around the situation.',
  faqHeading: 'Questions about turnaround support',
};

export const turnaroundGuidance: GuidanceSection[] = [
  {
    id: 'understanding-the-pressures',
    title: 'Understanding the pressures',
    paragraphs: [
      'A useful turnaround discussion starts with the facts: the trading position, immediate cash requirements, operational problems and any deadlines. Understanding these together helps establish which options deserve further assessment.',
      'For an initial enquiry, explain what has changed and what support you are seeking. Recent financial information and a clear picture of commitments can help inform the next conversation. Detailed confidential records should be shared through an agreed private process.',
    ],
  },
  {
    id: 'available-options',
    title: 'Considering the available options',
    paragraphs: [
      'Different businesses require different responses. The discussion may involve operational changes, financial restructuring, investment, lending or a possible sale. Availability depends on assessment, the stakeholders involved and the terms that can be agreed. No single solution is suitable for every business.',
      "RS1's approach combines capital, operational capability and strategic advice. We work with business owners and alongside lenders, insolvency practitioners and professional advisers. Any proposed engagement needs a clear scope, responsibilities and agreed next steps.",
    ],
  },
  {
    id: 'when-to-contact',
    title: 'When to contact RS1',
    paragraphs: [
      'You may wish to discuss a situation involving cash-flow pressure, an approaching funding deadline, operational underperformance or a need to assess investment or sale options. Explain any urgent dates at the start of the conversation.',
    ],
    note: "If insolvency may be involved, seek advice from an appropriately qualified professional about your specific position. This page provides general information and does not replace advice on directors' duties or insolvency obligations.",
  },
];

export const turnaroundFaqs: FaqItem[] = [
  {
    question: 'Can you guarantee a business will recover?',
    answer:
      'No. Outcomes depend on the business and its circumstances. An initial discussion is intended to assess the situation and possible fit, not to guarantee rescue, funding or a transaction.',
  },
  {
    question: 'Can investment or lending form part of a turnaround?',
    answer:
      'RS1 considers investment and lending opportunities alongside operational support. Any funding is subject to assessment and agreed terms.',
  },
  {
    question: 'Can advisers introduce a business?',
    answer:
      "RS1 works with professional advisers as well as owners. Explain your role, the business's circumstances and any relevant timetable when making contact.",
  },
];

export const turnaroundCta: PageCtaContent = {
  heading: 'Discuss the next step',
  text: "Contact RS1 Capital with a brief overview of the business, the pressures it faces and any deadlines. We can then discuss whether the situation fits RS1's approach.",
  action: 'Discuss your situation',
  related: { label: 'Business acquisitions', href: '/businesses-we-buy' },
};

export const footerLinks = {
  col1: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Acquisitions', href: '/businesses-we-buy' },
    { label: 'Approach', href: '#approach' },
  ],
  col2: [{ label: 'FAQ', href: '#faq' }, { label: 'Contact', href: '#contact' }],
};

/** Company details — single source for metadata, structured data and the privacy page. */
export const company = {
  name: 'RS1 Capital',
  legalName: 'RS1 Capital Limited',
  /** Confirmed by the client and checked against the Companies House register (24 Nov 2026). */
  number: '11159104',
  jurisdiction: 'England and Wales',
  registeredOffice: '160 City Road, London, EC1V 2NX',
  email: 'info@rs1.uk',
  description:
    'RS1 Capital Limited is a specialist investment, lending and advisory firm supporting businesses across the UK and Europe — providing capital, operational turnaround and strategic advice where speed, certainty and pragmatism matter.',
} as const;

/**
 * Verified social profiles only. Leave a value empty until the real URL is confirmed:
 * an empty value hides the footer icon and keeps the profile out of structured data.
 */
export const social: { linkedin: string } = {
  linkedin: '',
};
