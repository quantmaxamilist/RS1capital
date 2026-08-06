export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  numericTarget: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface PortfolioCompany {
  id: string;
  name: string;
  blurb: string;
  quote?: string;
  attribution?: string;
  gradient: string;
  expanded?: boolean;
}

export interface NetworkMember {
  name: string;
  title: string;
  initials: string;
}

export interface BuzzItem {
  category: string;
  headline: string;
  company: string;
}

export const navLinks: NavLink[] = [
  { label: 'Fund', href: '#fund' },
  { label: 'Network', href: '#network' },
  { label: 'Fellowship', href: '#fellowship' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Insights', href: '#insights' },
  { label: 'Team', href: '#team' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export const marqueeLogos: string[] = [
  'Aerloom',
  'Northwind',
  'Cobalt',
  'Verity',
  'Measurely',
  'Attesta',
  'Qora',
  'Superset',
  'Ledgera',
  'Vireo',
  'Xenon',
  'Lumina',
];

export const stats: StatItem[] = [
  { value: '6', numericTarget: 6, label: 'Funds' },
  { value: '175+', numericTarget: 175, suffix: '+', label: 'Investments' },
  { value: '30+', numericTarget: 30, suffix: '+', label: 'Portfolio Exits' },
  { value: '1,500+', numericTarget: 1500, suffix: '+', label: 'Executives & Corporate Partners' },
  { value: '$4B+', numericTarget: 4, prefix: '$', suffix: 'B+', label: 'Commercial Value Created' },
  { value: '$1B+', numericTarget: 1, prefix: '$', suffix: 'B+', label: 'Enterprise Revenue Across the Portfolio' },
];

export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: 'aerloom',
    name: 'Aerloom',
    blurb: 'Robotics, software and advanced materials that build homes in half the time, at half the cost.',
    quote: "Northmark backed us before we'd poured our first wall — an essential partner in our growth.",
    attribution: 'Dana Ellison, Co-Founder & CEO, Aerloom',
    gradient: 'linear-gradient(135deg, #0e2547 0%, #1fb6d6 40%, #22e0b7 70%, #071429 100%)',
    expanded: true,
  },
  {
    id: 'verity',
    name: 'Verity',
    blurb: 'A single platform to verify and secure every customer authorization.',
    gradient: 'linear-gradient(145deg, #071429 0%, #0a1c38 35%, #1fb6d6 65%, #22e0b7 100%)',
  },
  {
    id: 'qora',
    name: 'Qora',
    blurb: 'Cultural-intelligence AI that turns taste data into business insight.',
    quote: "Northmark's industry depth, guidance and network have accelerated everything we do.",
    attribution: 'Alex Moreno, Founder & CEO, Qora',
    gradient: 'linear-gradient(160deg, #0e2547 0%, #22e0b7 45%, #a9def5 75%, #071429 100%)',
  },
  {
    id: 'vireo',
    name: 'Vireo',
    blurb: 'No-code AI that turns raw data into intelligent business decisions.',
    gradient: 'linear-gradient(120deg, #071429 0%, #1fb6d6 50%, #0e2547 100%)',
  },
];

export const networkMembers: NetworkMember[] = [
  { name: 'Marcus Reed', title: 'Senior Advisor & Former Chairman, Harborline', initials: 'MR' },
  { name: 'Ellen Vasquez', title: 'EVP & COO, Camdyn Residential', initials: 'EV' },
  { name: 'Tom Brennan', title: 'Vice Chairman, Meridian RE', initials: 'TB' },
  { name: 'Priya Nair', title: 'Chief Legal Officer & EVP, LeadingEdge', initials: 'PN' },
  { name: 'Robert Vance', title: 'Founder, Chairman & CEO, Graystone', initials: 'RV' },
  { name: 'Ken Ash', title: 'Managing Director, Oakfield', initials: 'KA' },
  { name: 'Laura Kemp', title: 'CEO & President, Avalon Group', initials: 'LK' },
  { name: 'Mark Costa', title: 'Founder/CEO/Chairman, Essential Mortgage', initials: 'MC' },
];

export const buzzItems: BuzzItem[] = [
  {
    category: 'ANNOUNCEMENTS',
    headline: 'Northmark leads $55M Series B in climate-analytics platform Measurely',
    company: 'Measurely',
  },
  {
    category: 'ANNOUNCEMENTS',
    headline: 'Portfolio company Verity raises Series C; reaches $1B valuation',
    company: 'Verity',
  },
  {
    category: 'PORTFOLIO NEWS',
    headline: 'Aerloom awarded major public contract to deliver 3D-printed housing',
    company: 'Aerloom',
  },
];

export const pillars = [
  {
    id: 'fund',
    icon: 'fa-solid fa-chart-line',
    title: 'Northmark Fund',
    description:
      'Multi-stage funds investing across our core verticals and into the broader markets they touch.',
    link: 'EXPLORE NORTHMARK FUND',
    href: '#fund',
  },
  {
    id: 'fellowship',
    icon: 'fa-solid fa-graduation-cap',
    title: 'Northmark Fellowship',
    description:
      'A proprietary six-month immersion program giving portfolio founders exclusive access to the Northmark Network and its customers.',
    link: 'EXPLORE NORTHMARK FELLOWSHIP',
    href: '#fellowship',
  },
  {
    id: 'network',
    icon: 'fa-solid fa-people-group',
    title: 'Northmark Network',
    description:
      'A membership of 1,500+ corporate executives — across real estate, finance, insurance and climate — who invest in, mentor and advise the fund and its portfolio companies.',
    link: 'EXPLORE NORTHMARK NETWORK',
    href: '#network',
  },
] as const;
