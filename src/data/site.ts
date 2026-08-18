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
      'Yes. Every enquiry — from an owner, lender, insolvency practitioner or advisor — is treated in strict confidence from first contact through to completion.',
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
    title: 'Professional Advisors',
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

/** "The Businesses We Buy" acquisitions page */
export const acquisitionsIntro =
  'We acquire companies across the UK and Europe, working directly with owners and alongside lenders, insolvency practitioners and professional advisors. Every business is different, but the situations we buy into fall into one of three categories.';

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

export const footerLinks = {
  col1: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Acquisitions', href: '/businesses-we-buy' },
    { label: 'Approach', href: '#approach' },
  ],
  col2: [{ label: 'FAQ', href: '#faq' }, { label: 'Contact', href: '#contact' }],
};
