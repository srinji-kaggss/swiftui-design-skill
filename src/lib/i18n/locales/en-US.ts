import type { Dictionary } from '../types';

export const enUS: Dictionary = {
  nav: {
    home: 'Why Us',
    work: 'Work',
    services: 'Services',
    team: 'Team',
    journal: 'Journal',
    about: 'About',
    contact: 'Contact',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Logical Works Incorporated. All Rights Reserved.`,
    wordmark: 'Logical Works',
    tagline: 'Technology strategy, software delivery, and systems shaped to how real businesses run.',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'Why Us', href: '#/' },
          { label: 'Work', href: '#/work' },
          { label: 'Team', href: '#/team' },
          { label: 'Journal', href: '#/journal' },
          { label: 'Contact', href: '#/contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '#/privacy' },
          { label: 'Terms of Service', href: '#/terms' },
          { label: 'Email Terms', href: '#/terms/email' },
          { label: 'Reseller Terms', href: '#/terms/sellers' },
        ],
      },
    ],
    legalLinks: [
      { label: 'Privacy Policy', href: '#/privacy' },
      { label: 'Terms of Service', href: '#/terms' },
    ],
    newsletterEyebrow: 'Insights',
    newsletterTitle: 'Field notes on governed software, delivery, and operating leverage.',
    newsletterPlaceholder: 'you@company.com',
    newsletterCta: 'Subscribe',
    newsletterSubmittedMessage: 'Newsletter sign-up isn’t live yet — check back soon.',
    languageLabel: 'English',
  },

  buttons: {
    readCaseStudy: 'Read case study',
    viewAllWork: 'View all work',
    viewAllPosts: 'View all posts',
    getInTouch: 'Get in touch',
    learnMore: 'Learn more',
    back: 'Back',
    startAConversation: 'Start a conversation',
  },

  meta: {
    caseStudy: 'Case study',
    journalPost: 'Journal',
    teamMember: 'Team',
    service: 'Service',
  },
};
