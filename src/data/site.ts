export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  /** PLACEHOLDER stats — confirm with client before publishing */
  placeholder?: boolean;
  displayValue?: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  blurb: string;
  gradient: string;
  expanded?: boolean;
}

export interface AudienceCard {
  title: string;
  description: string;
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Approach', href: '#approach' },
  { label: 'Case Studies', href: '#case-studies' },
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

/** PLACEHOLDER — confirm all figures with client before publishing */
export const stats: StatItem[] = [
  { label: 'Capital deployed', placeholder: true, displayValue: '£[X]m' },
  { label: 'Businesses supported', placeholder: true, displayValue: '[X]+' },
  { label: 'Typical time to terms', placeholder: true, displayValue: '[X] days' },
  { label: "Years' combined experience", placeholder: true, displayValue: '[X]+' },
  { label: 'Coverage', placeholder: true, displayValue: 'UK & EU' },
  { label: 'Confidential', placeholder: true, displayValue: '100%' },
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
    icon: 'fa-solid fa-coins',
    title: 'Capital',
    description: 'Direct lending, structured finance and investment for special situations and distress.',
    link: 'LEARN MORE',
    href: '#contact',
  },
  {
    id: 'turnaround',
    icon: 'fa-solid fa-arrows-rotate',
    title: 'Turnaround',
    description: 'Hands-on operational turnaround and restructuring to stabilise and rebuild value.',
    link: 'LEARN MORE',
    href: '#contact',
  },
  {
    id: 'advisory',
    icon: 'fa-solid fa-handshake',
    title: 'Advisory',
    description: 'Strategic and financial advice for owners, lenders and insolvency practitioners.',
    link: 'LEARN MORE',
    href: '#contact',
  },
] as const;

export const footerLinks = {
  col1: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Approach', href: '#approach' },
  ],
  col2: [
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Contact', href: '#contact' },
  ],
};
