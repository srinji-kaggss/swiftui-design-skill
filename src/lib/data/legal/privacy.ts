/**
 * Privacy Policy — ported verbatim from lgwks-frontend/src/app/privacy/page.tsx.
 * Source: Logical Works Inc. All text carried without edits.
 */

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  body: string[];
}

function slugify(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const policySections = [
  {
    title: 'What personal information means',
    body: [
      'Personal information is information that identifies an individual, or that can reasonably be linked with other information to identify an individual. It can include business contact details, account information, transaction records, communications, documents, usage information, device or browser information, and other information provided to us or generated through the use of our services.',
      'Some information may be more sensitive depending on the context, including financial information, identity documents, signatures, employment details, security credentials, or information included in files, notes, forms, messages, and records that customers choose to store or process through our services.',
    ],
  },
  {
    title: 'How we collect personal information',
    body: [
      'We collect personal information directly from you when you visit our websites, contact us, request a demo, create or use an account, submit a form, communicate with our team, sign or upload documents, or otherwise use our services.',
      'We may also collect personal information from customers, administrators, authorized users, service providers, partners, public sources, and other organizations where they are permitted to provide it to us. When a customer gives us information about another person, the customer is responsible for ensuring they have the authority or consent required to do so.',
      'When you use our websites and online services, we may collect technical and usage information such as IP address, browser type, device information, pages viewed, session activity, preferences, and security logs. No analytics or advertising cookies are loaded on the temporary MVP surface.',
    ],
  },
  {
    title: 'How we use personal information',
    body: [
      'We use personal information to provide, operate, improve, protect, and administer our websites, software, professional services, customer relationships, and business operations.',
      'This includes using personal information to create and manage accounts, verify identity and access, respond to requests, provide support, process transactions, manage leads, contacts, documents, workflows and communications, send service notices, maintain records, improve our products, detect and prevent fraud or misuse, enforce our terms, comply with law, and meet our legal, tax, accounting, security, and regulatory obligations.',
      'We may use business contact information to communicate with you about our services, events, updates, and related offerings. You can unsubscribe from commercial electronic messages where required by law, but we may still send service, security, account, legal, or transactional notices.',
    ],
  },
  {
    title: 'Consent and choices',
    body: [
      'We collect, use, and disclose personal information with consent, where consent is required, or as otherwise permitted or required by law. Consent may be express or implied, depending on the sensitivity of the information and the circumstances.',
      'You may withdraw consent at any time, subject to legal, contractual, security, and operational restrictions. If you withdraw consent for information we need to provide a service, we may not be able to continue providing that service or respond to a request.',
      'We will identify our purposes before or when we collect personal information, and we will seek additional consent if we need to use personal information for a new purpose that is not otherwise permitted by law.',
    ],
  },
  {
    title: 'When we share personal information',
    body: [
      'We do not sell personal information.',
      'We may share personal information with service providers, contractors, professional advisers, affiliates, business partners, and other organizations that help us provide, secure, operate, support, analyze, improve, or administer our services. These organizations may provide hosting, storage, authentication, communications, payment, analytics, customer support, document handling, security, legal, accounting, insurance, compliance, and business operations services.',
      'We may also disclose personal information with your consent, at your direction, to an administrator or customer responsible for the relevant account, in connection with a business transaction, to collect amounts owed, to protect rights, safety, security, or property, to investigate misuse, or where permitted or required by law, court order, regulator, government authority, or law enforcement.',
    ],
  },
  {
    title: 'Storage and processing',
    body: [
      'Logical Works Incorporated is based in Ontario, Canada. We take a Canada-first approach to privacy governance and data handling where commercially and technically feasible.',
      'Personal information may be stored, processed, or accessed in Canada or in other jurisdictions by us or by service providers acting on our behalf. Where information is handled outside Canada, it may be subject to the laws of that jurisdiction, including lawful access by courts, governments, regulators, or law enforcement.',
      'We remain responsible for personal information under our control, including personal information transferred to service providers for processing. We require service providers to protect personal information and use it only for authorized purposes.',
    ],
  },
  {
    title: 'How we protect personal information',
    body: [
      'We use administrative, technical, and organizational safeguards appropriate to the sensitivity of the personal information and the nature of our services. These safeguards are designed to protect personal information against loss, theft, unauthorized access, disclosure, copying, use, or modification.',
      'Access to personal information is limited to people and organizations that need it for authorized purposes. We also use policies, training, access controls, monitoring, vendor review, incident response, and other security practices to support the protection of personal information.',
      'No system is perfectly secure. If we become aware of a privacy or security incident involving personal information, we will assess it and take steps required by applicable law.',
    ],
  },
  {
    title: 'How long we keep personal information',
    body: [
      'We keep personal information for as long as needed for the purposes described in this policy, for the purposes identified when the information was collected, or as required or permitted by law.',
      'Retention periods vary depending on the type of information, the service involved, customer instructions, legal and contractual requirements, security needs, limitation periods, tax and accounting obligations, and whether the information is needed to resolve a dispute or enforce an agreement.',
      'When personal information is no longer required, we will delete, anonymize, or securely dispose of it, subject to lawful retention requirements and backup, audit, or technical constraints.',
    ],
  },
  {
    title: 'Accuracy and access',
    body: [
      'We take reasonable steps to keep personal information as accurate, complete, and up to date as necessary for the purposes for which it is used. We rely on you and our customers to provide accurate information and to update it when it changes.',
      'You may request access to personal information we hold about you and ask that it be corrected if it is inaccurate or incomplete. We may need to verify your identity before responding. In some cases, we may not be able to provide access to all information, including where disclosure would affect another person’s privacy, reveal confidential commercial information, compromise security, or where another legal exception applies.',
    ],
  },
  {
    title: 'Your privacy rights',
    body: [
      'Depending on your location and the nature of your relationship with us, you may have the right to ask about our privacy practices, access your personal information, correct your personal information, withdraw consent, request deletion, ask about automated processing, or make a complaint about how personal information has been handled.',
      'If your information was provided to us by one of our customers or is controlled by one of our customers through our services, we may direct your request to that customer or work with that customer to respond.',
      'We will respond to privacy requests within the timeframe required by applicable law. If we need more time, or if we cannot fulfill a request, we will let you know where required.',
    ],
  },
  {
    title: 'Children',
    body: [
      'Our services are intended for businesses and professional users. They are not directed to children. We do not knowingly collect personal information from children without appropriate consent or authority. If you believe a child has provided personal information to us without appropriate consent, please contact us.',
    ],
  },
  {
    title: 'Changes to this policy',
    body: [
      'We may update this policy from time to time to reflect changes in our services, practices, legal requirements, or business operations. If we make material changes, we will take reasonable steps to provide notice, such as posting the updated policy on our website or notifying affected users where appropriate.',
    ],
  },
];

export const privacySections: LegalSection[] = [
  {
    id: 'privacy-laws-and-accountability',
    number: 'Canada',
    title: 'Privacy laws and accountability',
    body: [
      'We handle personal information in line with applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA), and applicable provincial privacy laws where they apply. Our Privacy Officer is responsible for our privacy program and for responding to privacy questions, requests, and complaints.',
    ],
  },
  ...policySections.map((section, index) => ({
    id: slugify(section.title),
    number: String(index + 1),
    title: section.title,
    body: [...section.body],
  })),
];

export const privacyHero = {
  eyebrow: 'Privacy',
  title: 'Privacy Policy.',
  body: 'We are committed to protecting personal information and being clear about how we collect, use, share, and protect it.',
};

export const privacySummary = {
  eyebrow: 'Last updated May 22, 2026',
  title: 'Our commitment',
  body: [
    'This privacy policy explains how Logical Works Incorporated collects, uses, discloses, stores, and protects personal information in the course of our websites, software, services, customer relationships, and day-to-day business.',
    'In this policy, Logical Works, we, our, and us mean Logical Works Incorporated. You means any person whose personal information we handle, including website visitors, customers, prospective customers, authorized users, business contacts, and individuals whose information is included in customer records, documents, workflows, or communications.',
    'We will not sell your personal information. We collect what we need for identified purposes, use it in ways a reasonable person would expect in the circumstances, and protect it with safeguards appropriate to its sensitivity.',
  ],
};

export const privacyCta = {
  title: 'Privacy questions, requests, and complaints',
  body: 'You can contact our Privacy Officer to ask about this policy, make a privacy request, withdraw consent where available, or raise a concern about how we handled personal information.',
  href: 'mailto:compliance@logicalworks.ca',
  label: 'compliance@logicalworks.ca',
};

export const privacyRelatedLinks = [
  { href: '#/terms', label: 'Terms of Service', tag: 'Legal', description: 'The operating rules for access, accounts, billing, privacy, integrations, and dispute handling.' },
  { href: '#/contact', label: 'Contact', tag: 'Requests', description: 'Direct contact details for business inquiries, privacy requests, and compliance questions.' },
];
