/**
 * Terms of Service metadata — ported verbatim from lgwks-frontend/src/app/terms/page.tsx.
 * Full legal body loaded from terms-of-service.md.
 */

import termsMarkdown from './terms-of-service.md?raw';
import { parseMarkdownSections } from './markdown';

export const termsHero = {
  eyebrow: 'Legal & Operating Rules',
  title: 'Terms of Service.',
  body: 'Effective May 25, 2026. These terms set the operating rules for Logical Works, including device-bound capability grants, local vault architecture, billing, privacy, ML assistance, integrations, and dispute handling.',
};

export const termsSummary = {
  eyebrow: 'Logical Works Incorporated',
  title: 'Structured for clarity before consent.',
  body: 'The revised terms are presented as a navigable legal document instead of a wall of loose cards. Long-form sections use a constrained reading width, stable anchors, and shared legal-page classes so future policy pages can follow the same system.',
};

export const termsCta = {
  title: 'Legal and Compliance',
  body: 'For formal legal notices, privacy requests, or compliance inquiries.',
  href: 'mailto:legal@logicalworks.ca',
  label: 'legal@logicalworks.ca',
};

export const termsSupplementalLinks = [
  { href: '#/terms/email', label: 'Email & Communications Terms', tag: 'Supplement', description: 'Email, chat, messaging, content confidentiality, retention, abuse handling, and anti-spam obligations.' },
  { href: '#/terms/sellers', label: 'Reseller & Channel Partner Terms', tag: 'Supplement', description: 'Partner authorisation, end-customer obligations, billing, brand use, support, and channel compliance.' },
];

export const termsRelatedLinks = [
  { href: '#/privacy', label: 'Privacy Policy', tag: 'Legal', description: 'How we collect, use, share, protect, and manage personal information in Canada.' },
  { href: '#/contact', label: 'Contact', tag: 'Requests', description: 'Direct contact details for business inquiries, legal requests, and compliance questions.' },
];

export const termsSections = parseMarkdownSections(termsMarkdown);
export { termsMarkdown };
