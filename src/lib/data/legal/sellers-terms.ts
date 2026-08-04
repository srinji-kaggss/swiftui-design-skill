/**
 * Reseller & Channel Partner Terms — ported verbatim from lgwks-frontend/src/app/terms/sellers/page.tsx.
 * Source: Logical Works Inc. All text carried without edits.
 */

import type { LegalSection } from './privacy';

export const sellersTermsSections: LegalSection[] = [
  {
    id: 'scope', number: 'S1', title: 'Scope and Relationship to Main Terms',
    body: [
      'These Reseller & Channel Partner Terms ("Reseller Terms") are a supplement to the Logical Works Inc. Terms of Service (logicalworks.ca/terms) and apply to any individual or organisation acting as an authorised reseller, value-added reseller (VAR), managed service provider (MSP), systems integrator, affiliate, or referral partner ("Partner") who distributes, sub-licenses, or markets Logical Works products and services to third-party customers ("End Customers"). Capitalised terms not defined here have the meanings given in the main Terms.',
      'Reseller status requires a signed Reseller Agreement or written authorisation from Logical Works Inc. These Reseller Terms operate as the baseline terms for any such agreement. If a separate signed Reseller Agreement exists between you and Logical Works, the terms of that agreement govern where they differ from these Reseller Terms; otherwise these Reseller Terms apply.',
      'Partners remain subject to the main Terms as end users. Becoming a Partner does not waive any obligation imposed by the main Terms, these Reseller Terms, or applicable law.',
    ],
  },
  {
    id: 'authorisation', number: 'S2', title: 'Authorisation and Partner Tiers',
    body: [
      'Logical Works may establish one or more Partner tiers (e.g. Referral, Reseller, Premier, Strategic), each with different authorisations, obligations, support requirements, and commercial terms. Your authorised tier is specified in your Reseller Agreement or written authorisation. You may not represent a higher tier than authorised.',
      'Authorisation is non-exclusive unless expressly stated otherwise in your Reseller Agreement. Logical Works retains the right to appoint other Partners, to sell directly to any customer, and to change Partner tier structures with reasonable notice.',
      'Logical Works may at any time, and at its sole discretion, refuse, suspend, or revoke Partner status. Grounds include, without limitation: breach of these Reseller Terms; misrepresentation to End Customers; conduct that damages the Logical Works brand; regulatory non-compliance; or failure to meet applicable tier performance requirements.',
    ],
  },
  {
    id: 'permitted-activities', number: 'S3', title: 'Permitted and Prohibited Activities',
    body: [
      'Permitted activities include: marketing Logical Works products and services within your authorised territory and tier; reselling or sub-licensing seats, licences, or subscriptions to End Customers in accordance with your Reseller Agreement; providing first-line support to End Customers where authorised; and bundling Logical Works with your own complementary services, provided the bundling does not misrepresent the nature or origin of Logical Works products.',
      'You must not: (a) sub-authorise other resellers without Logical Works\' written consent; (b) resell to customers outside your authorised territory or sector without approval; (c) reverse engineer, decompile, modify, or create derivative works from any Logical Works product; (d) white-label or rebrand Logical Works products without express written permission; (e) represent yourself as an employee or agent of Logical Works Inc.; (f) make representations about Logical Works\' roadmap, features, or commitments beyond the current published documentation; or (g) use Logical Works trademarks in a manner that creates confusion about the source of products.',
      'You may not offer discounts, service credits, or refunds to End Customers that exceed your authorised margin or that would require Logical Works to issue a corresponding credit, without Logical Works\' prior written approval.',
    ],
  },
  {
    id: 'end-customer', number: 'S4', title: 'End Customer Obligations and Liability',
    body: [
      'You are responsible for ensuring that every End Customer account you provision or manage is covered by a valid, current Logical Works Terms of Service acceptance. You must present End Customers with Logical Works\' current Terms of Service, Privacy Policy, and any applicable supplemental terms before provisioning their account. You must not accept these policies on behalf of an End Customer without their actual review and acceptance.',
      'You are liable to Logical Works for: (a) all fees owed in respect of End Customer accounts you provision, whether or not you have collected those fees from the End Customer; (b) End Customer misuse of the Services that arises from your failure to adequately screen, onboard, or monitor the End Customer; and (c) any misrepresentation you make to an End Customer about Logical Works\' products, services, pricing, or contractual terms.',
      'You must promptly notify Logical Works at legal@logicalworks.ca if you become aware that an End Customer is using the Services in violation of the main Terms, applicable law, or these Reseller Terms. You must cooperate with Logical Works in any investigation of End Customer misuse, including providing account information reasonably requested.',
    ],
  },
  {
    id: 'privacy-data', number: 'S5', title: 'Privacy and Data Handling',
    body: [
      'To the extent you process personal information of End Customers on behalf of Logical Works, or provide personal information about End Customers to Logical Works for account provisioning, you represent that: (a) you have collected that personal information in compliance with PIPEDA and, where applicable, Québec\'s Act respecting the protection of personal information in the private sector (RLRQ c. P-39.1, as amended); (b) you have authority to provide it to Logical Works; and (c) you have disclosed to End Customers the involvement of Logical Works as a service provider.',
      'You must implement and maintain technical and organisational safeguards appropriate to the sensitivity of End Customer personal information you handle in your capacity as Partner. You may not use End Customer data for your own commercial purposes beyond what is necessary to fulfil your obligations as Partner.',
      'Where you act as a processor or agent for End Customer data on behalf of Logical Works, you must comply with any Data Processing Agreement or Privacy Schedule attached to your Reseller Agreement. In the absence of a separate Data Processing Agreement, the data handling obligations in Section 6 and Section 11 of the main Terms apply to you as if you were the accountable party for the End Customer accounts you manage.',
      'You must notify Logical Works at legal@logicalworks.ca within twenty-four (24) hours of becoming aware of any actual or suspected data breach involving End Customer personal information in your custody, access, or control. This notification obligation is independent of any obligation you may have to notify End Customers or regulatory authorities directly.',
    ],
  },
  {
    id: 'billing', number: 'S6', title: 'Billing, Fees, and Revenue Share',
    body: [
      'The specific fee structure, margin, revenue share percentage, payment schedule, and currency applicable to your Partner tier are set out in your Reseller Agreement. These Reseller Terms establish baseline billing principles that apply unless your Reseller Agreement expressly overrides them.',
      'Partner fees are invoiced monthly or annually in Canadian dollars (CAD) unless otherwise specified. Fees are net of any End Customer discount you are authorised to offer. You are responsible for all taxes, duties, and levies applicable to fees you charge End Customers. Logical Works will charge applicable Canadian sales taxes (GST/HST/QST) on invoices to you as required by law.',
      'Fees are due within thirty (30) days of invoice. Overdue amounts accrue interest at the rate of 1.5% per month (18% per annum), or the maximum lawful rate if lower. Logical Works may suspend provisioning of new End Customer accounts if your account is overdue by more than fifteen (15) days, and may suspend or terminate existing End Customer accounts if your account is overdue by more than thirty (30) days.',
      'Logical Works reserves the right to adjust fees, revenue share rates, and tier thresholds with a minimum of sixty (60) days\' written notice. If you do not accept a fee adjustment, you may terminate your Reseller Agreement upon written notice before the new rates take effect, subject to your wind-down obligations for existing End Customers.',
    ],
  },
  {
    id: 'brand', number: 'S7', title: 'Brand Use and Co-Marketing',
    body: [
      'Subject to these Reseller Terms and any written brand guidelines Logical Works provides, you are granted a limited, non-exclusive, revocable licence to use the Logical Works name, logo, and approved marketing materials solely to identify yourself as an authorised Partner and to market Logical Works products and services in your authorised territory and tier.',
      'You must: (a) use Logical Works marks only in the form approved in current brand guidelines; (b) not alter, modify, or combine Logical Works marks with other elements without prior written approval; (c) not use Logical Works marks in any way that implies endorsement of your unrelated products or services; and (d) promptly modify or remove any use of Logical Works marks if requested.',
      'All goodwill arising from your authorised use of Logical Works marks accrues to Logical Works. You acquire no ownership in Logical Works marks by virtue of your Partner status. Upon termination or expiry of your Reseller Agreement, your licence to use Logical Works marks terminates immediately, and you must cease all use and promptly remove Logical Works marks from your materials.',
      'Co-marketing activities (joint press releases, case studies, event participation, social media campaigns) require written approval from Logical Works marketing. Approval will not be unreasonably withheld but Logical Works retains final editorial control over any content that references Logical Works by name.',
    ],
  },
  {
    id: 'support', number: 'S8', title: 'Support and Training Obligations',
    body: [
      'You are responsible for providing first-line support to your End Customers unless your Reseller Agreement expressly provides that Logical Works will provide direct End Customer support. First-line support includes: account provisioning assistance, user onboarding, basic troubleshooting, and intake of End Customer complaints.',
      'You must not direct End Customers to contact Logical Works directly unless Logical Works has expressly authorised direct support for your tier. Unapproved direct-support requests that create unreasonable burden on Logical Works support operations may result in tier downgrade or termination.',
      'Logical Works will provide you with: access to Partner documentation and training materials; Partner-tier technical support via designated channels; and, where applicable, onboarding sessions. You are responsible for ensuring your team completes required training before reselling or supporting specific products or features.',
    ],
  },
  {
    id: 'representations', number: 'S9', title: 'Representations, Warranties, and Prohibited Misrepresentations',
    body: [
      'You represent and warrant that: (a) you have the legal authority to enter into and perform your obligations as a Partner; (b) your business is in compliance with all applicable laws, including licensing and registration requirements; (c) you will not make false, misleading, or deceptive representations about Logical Works or its products to End Customers or the public; and (d) you have not and will not pay or receive any bribe, kickback, or improper payment in connection with your Partner activities.',
      'You must not represent to End Customers or prospects that: Logical Works products are certified by a regulator if they are not; features exist that are not currently available; prices are lower than what you have agreed with Logical Works; or that any warranty or service level commitment exists beyond what Logical Works expressly provides in its published SLA or your Reseller Agreement.',
      'You are solely responsible for the representations your sales team makes about Logical Works products. Misrepresentation that harms an End Customer may result in you being required to indemnify that End Customer and Logical Works for losses arising from the misrepresentation.',
    ],
  },
  {
    id: 'term-termination', number: 'S10', title: 'Term, Termination, and Wind-Down',
    body: [
      'Your Partner status continues for the initial term specified in your Reseller Agreement and renews automatically on the same terms unless either party provides written notice of non-renewal at least sixty (60) days before the end of the current term.',
      'Either party may terminate for cause upon written notice if the other party materially breaches these Reseller Terms or the Reseller Agreement and fails to cure the breach within thirty (30) days of receiving written notice describing the breach. Logical Works may terminate immediately for cause upon: insolvency or bankruptcy; regulatory action against your business; or a breach involving data security, End Customer harm, or intellectual property misappropriation.',
      'Upon termination or expiry: (a) your authorisation to resell, market, or represent Logical Works terminates; (b) your licence to use Logical Works marks terminates; (c) all outstanding invoices become immediately due; (d) you must cooperate in transitioning End Customer accounts to Logical Works direct control or to a successor partner on a schedule agreed in writing, not to exceed ninety (90) days; and (e) each party must destroy or return confidential information of the other party as specified in your Reseller Agreement. Termination does not affect accrued rights or obligations.',
    ],
  },
  {
    id: 'confidentiality', number: 'S11', title: 'Confidentiality',
    body: [
      'Each party ("Receiving Party") agrees to hold in confidence all non-public information disclosed by the other party ("Disclosing Party") in connection with the Partner relationship, including pricing, margin structures, technical roadmap, End Customer lists, and non-public product information ("Confidential Information"). The Receiving Party will use Confidential Information only as necessary to exercise its rights or perform its obligations as Partner and will not disclose it to any third party without the Disclosing Party\'s prior written consent.',
      'The confidentiality obligation does not apply to information that: (a) is or becomes publicly known through no fault of the Receiving Party; (b) was rightfully known to the Receiving Party before disclosure; (c) is independently developed by the Receiving Party without use of the Confidential Information; or (d) is required to be disclosed by law, regulation, or court order, provided the Receiving Party gives prompt prior notice to the Disclosing Party where legally permitted.',
      'These confidentiality obligations survive termination or expiry of the Reseller Agreement for a period of three (3) years.',
    ],
  },
  {
    id: 'liability-sellers', number: 'S12', title: 'Liability, Indemnification, and Dispute Resolution',
    body: [
      'You agree to indemnify, defend, and hold harmless Logical Works Inc., its directors, officers, and employees from and against any claim, loss, damage, fine, or expense (including reasonable legal fees) arising from: (a) your breach of these Reseller Terms; (b) misrepresentation to End Customers; (c) your failure to comply with applicable law in your distribution activities; (d) End Customer claims arising from your first-line support obligations; or (e) data handling failures in your custody.',
      'The liability caps and mutual limitation of liability set out in Section 14 of the main Terms apply to claims between Logical Works and Partner arising under or in connection with these Reseller Terms, except for claims arising from indemnification obligations, breach of confidentiality, or intellectual property infringement — which are not subject to the cap.',
      'Disputes between Logical Works and Partner arising under these Reseller Terms will be resolved by binding arbitration administered by the ADR Institute of Canada in Toronto, Ontario, under its National Arbitration Rules, before a single arbitrator. Proceedings will be conducted in English. Either party may seek interim or injunctive relief from a court of competent jurisdiction in Ontario without waiving the arbitration obligation.',
      'These Reseller Terms are governed by the laws of the Province of Ontario and the applicable federal laws of Canada, without reference to conflict-of-laws principles.',
    ],
  },
  {
    id: 'contact-sellers', number: 'S13', title: 'Contact',
    body: [
      'Partner programme inquiries, new Partner applications, and notices under these Reseller Terms should be sent to: legal@logicalworks.ca — Logical Works Inc.',
      'To report End Customer misuse or a data security incident involving an End Customer account you manage, use the same contact with the subject line "Partner Security Notice."',
    ],
  },
];

export const sellersTermsHero = {
  eyebrow: 'Supplemental Terms — Partners',
  title: 'Reseller & Channel Partner Terms.',
  body: 'Rules governing authorised resellers, channel partners, and managed service providers distributing Logical Works. Read alongside the main Terms of Service.',
};

export const sellersTermsSummary = {
  eyebrow: 'Supplemental to main Terms',
  title: 'Partner obligations in plain structure.',
  body: 'If you resell, embed, or distribute Logical Works, partner status requires written authorisation. You are liable for provisioned seats and responsible for End Customer compliance with the main terms.',
};
