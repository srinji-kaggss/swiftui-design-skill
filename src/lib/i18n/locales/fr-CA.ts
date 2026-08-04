import type { Dictionary } from '../types';

export const frCA: Dictionary = {
  nav: {
    home: 'Pourquoi nous',
    work: 'Projets',
    services: 'Services',
    team: 'Équipe',
    journal: 'Journal',
    about: 'À propos',
    contact: 'Contact',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} Logical Works Incorporated. Tous droits réservés.`,
    wordmark: 'Logical Works',
    tagline: 'Stratégie technologique, livraison logicielle et systèmes adaptés à la réalité des entreprises.',
    columns: [
      {
        title: 'Entreprise',
        links: [
          { label: 'Pourquoi nous', href: '#/' },
          { label: 'Projets', href: '#/work' },
          { label: 'Équipe', href: '#/team' },
          { label: 'Journal', href: '#/journal' },
          { label: 'Contact', href: '#/contact' },
        ],
      },
      {
        title: 'Légal',
        links: [
          { label: 'Politique de confidentialité', href: '#/privacy' },
          { label: "Conditions d'utilisation", href: '#/terms' },
          { label: 'Conditions courriel', href: '#/terms/email' },
          { label: 'Conditions revendeur', href: '#/terms/sellers' },
        ],
      },
    ],
    legalLinks: [
      { label: 'Politique de confidentialité', href: '#/privacy' },
      { label: "Conditions d'utilisation", href: '#/terms' },
    ],
    newsletterEyebrow: 'Perspectives',
    newsletterTitle: 'Notes de terrain sur la livraison logicielle et le levier opérationnel.',
    newsletterPlaceholder: 'vous@entreprise.com',
    newsletterCta: "S'abonner",
    newsletterSubmittedMessage: "L'inscription n'est pas encore active — revenez bientôt.",
    languageLabel: 'Français',
  },

  buttons: {
    readCaseStudy: "Lire l'étude de cas",
    viewAllWork: 'Voir tous les projets',
    viewAllPosts: 'Voir tous les articles',
    getInTouch: 'Nous contacter',
    learnMore: 'En savoir plus',
    back: 'Retour',
    startAConversation: 'Démarrer une conversation',
  },

  meta: {
    caseStudy: 'Étude de cas',
    journalPost: 'Journal',
    teamMember: 'Équipe',
    service: 'Service',
  },
};
