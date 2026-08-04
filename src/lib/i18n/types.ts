export type Locale = 'en-US' | 'fr-CA';

export interface NavDictionary {
  home: string; work: string; services: string; team: string;
  journal: string; about: string; contact: string;
}

export interface FooterColumnLink { label: string; href: string; }
export interface FooterColumn { title: string; links: FooterColumnLink[]; }

export interface FooterDictionary {
  copyright: string;
  wordmark: string;
  tagline: string;
  columns: FooterColumn[];
  legalLinks: FooterColumnLink[];
  newsletterEyebrow: string;
  newsletterTitle: string;
  newsletterPlaceholder: string;
  newsletterCta: string;
  newsletterSubmittedMessage: string;
  languageLabel: string;
}

export interface ButtonDictionary {
  readCaseStudy: string; viewAllWork: string; viewAllPosts: string;
  getInTouch: string; learnMore: string; back: string;
  startAConversation: string;
}

export interface MetaLabelDictionary {
  caseStudy: string; journalPost: string; teamMember: string; service: string;
}

export interface Dictionary {
  nav: NavDictionary;
  footer: FooterDictionary;
  buttons: ButtonDictionary;
  meta: MetaLabelDictionary;
}
