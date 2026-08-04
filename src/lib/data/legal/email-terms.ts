/**
 * Email & Communications Terms — ported verbatim from lgwks-frontend/src/app/terms/email/page.tsx.
 * Source: Logical Works Inc. All text carried without edits.
 */

import type { LegalSection } from './privacy';

export const emailTermsSections: LegalSection[] = [
  {
    id: 'scope', number: 'E1', title: 'Scope and Relationship to Main Terms',
    body: [
      'These Email & Communications Terms ("Email Terms") are a supplement to the Logical Works Inc. Terms of Service (logicalworks.ca/terms) and apply specifically to any email, chat, messaging, or communications features made available through the Logical Works platform ("Communications Services"). Capitalised terms not defined here have the meanings given in the main Terms.',
      'By enabling, connecting, or using any Communications Service — including the platform\'s built-in messaging layer, any email send/receive feature, or any integration that routes communications through a work object — you agree to these Email Terms in addition to the main Terms. In the event of a conflict between these Email Terms and the main Terms on a communications-specific matter, these Email Terms govern.',
      'These Email Terms do not apply to third-party email accounts (e.g. Gmail, Outlook) that you connect via the browser extension or API integration. Those connections are governed by the third-party provider\'s own terms and your authorisation settings inside Logical Works.',
    ],
  },
  {
    id: 'permitted-use', number: 'E2', title: 'Permitted Use of Communications Services',
    body: [
      'You may use Communications Services only for lawful business purposes and only in connection with a work object or session within Logical Works. You may not use the Communications Services to send unsolicited commercial electronic messages or to conduct any activity that violates Canada\'s Anti-Spam Legislation (CASL, S.C. 2010, c. 23), the CAN-SPAM Act, or any other applicable anti-spam, privacy, or consumer protection law.',
      'You are the sender under CASL for any commercial electronic message you originate, schedule, or trigger through the platform. Logical Works provides the infrastructure; it is not the sender. You are solely responsible for: (a) holding valid express or implied consent for each recipient before sending a commercial electronic message; (b) including an accurate sender identification and physical mailing address; (c) providing a functioning, prominent unsubscribe mechanism in every commercial message; and (d) honouring unsubscribe requests within ten (10) business days.',
      'Logical Works is not a registered email service provider for marketing campaigns. The Communications Services are designed for work-session communications (scheduling, signing workflows, document collaboration, team messaging, transactional notifications) — not bulk promotional distribution. Sending bulk marketing email through Logical Works Communications Services is prohibited and may result in immediate suspension.',
    ],
  },
  {
    id: 'content-standards', number: 'E3', title: 'Content Standards and Prohibited Content',
    body: [
      'You must not transmit through Communications Services any content that: (a) is unlawful, defamatory, threatening, harassing, abusive, obscene, or fraudulent; (b) infringes intellectual property rights; (c) contains malware, viruses, or malicious code; (d) constitutes phishing, spoofing, or impersonation; (e) violates any applicable law or regulation; or (f) violates any provision of the main Terms.',
      'You must not use technical measures to obscure, falsify, or misrepresent the origin, routing, or header information of any message sent through Communications Services.',
      'We reserve the right to investigate suspected violations of these content standards. We may, without notice, suspend delivery of messages we reasonably believe violate these standards, terminate Communications Services access, and report suspected unlawful activity to law enforcement or regulatory authorities. We will reinstate service where we determine no violation occurred.',
    ],
  },
  {
    id: 'encryption', number: 'E4', title: 'Message Encryption and Confidentiality',
    body: [
      'Messages sent between Logical Works accounts through the platform\'s native messaging layer are encrypted in transit using industry-standard protocols (TLS 1.2+). Messages stored on Logical Works infrastructure are subject to the end-to-end encryption architecture described in Section 6 of the main Terms: content is encrypted on your device before it reaches our servers, and Logical Works holds only encrypted bytes — we cannot read the contents of stored messages.',
      'Where you use the email integration to send or receive messages via external mail servers (SMTP/IMAP), encryption in transit depends on the capabilities of the receiving or sending mail server and is outside Logical Works\' control. Logical Works does not guarantee end-to-end encryption for messages routed through external mail systems.',
      'Do not transmit passwords, payment card numbers, government-issued identification numbers, or other highly sensitive credentials via any messaging feature. While messages are encrypted in transit and at rest, messaging systems are not designed as secure credential stores. Use your account\'s key-management or secure-sharing features for sensitive credentials.',
      'Logical Works does not read, scan, or process the content of your messages for advertising, profiling, or commercial intelligence purposes. Any processing of message metadata (sender, recipient, timestamp, subject line) is limited to operating and securing the service, routing messages, detecting abuse, and complying with legal obligations — and is governed by our Privacy Policy.',
    ],
  },
  {
    id: 'retention', number: 'E5', title: 'Message Retention and Deletion',
    body: [
      'Messages and communications content are retained in accordance with the data retention schedule set out in Section 6 of the main Terms and in our Privacy Policy. By default, messages are retained for the life of your account and up to ninety (90) days after account closure. Enterprise customers may configure custom retention schedules through their admin settings.',
      'For platform-native messages: once a message is deleted by all parties with access, it will be removed from active production systems within thirty (30) days and from encrypted backups within ninety (90) days.',
      'For externally routed email (messages relayed through external SMTP/IMAP): copies may remain on external mail servers and recipient systems beyond Logical Works\' control. Deleting a message from within Logical Works does not delete it from external systems.',
      'Governance events — such as the sending of a signing invitation or receipt of a signed document via the Communications Services — are recorded in the WORM audit log described in Section 6 of the main Terms. These audit records are not subject to user deletion and are maintained for the legally required retention period applicable to electronic business records.',
    ],
  },
  {
    id: 'casl-service', number: 'E6', title: 'CASL — Service Notifications From Logical Works to You',
    body: [
      'Logical Works sends service communications to you by electronic message under the implied consent provisions of CASL. These service communications include: account and credential notifications; security alerts; platform status and maintenance notices; transactional and billing notifications; legal and compliance notices; and material changes to these terms or our policies.',
      'Logical Works does not send marketing or promotional messages using your acceptance of these terms as a consent basis. Any marketing communications from Logical Works are subject to a separate, express consent process. Acceptance of these Email Terms does not constitute consent to receive marketing communications.',
      'You cannot opt out of service communications while your account is active, because they are necessary to operate and secure your account. If you close your account, service communications will cease except as required by law.',
    ],
  },
  {
    id: 'casl-user', number: 'E7', title: 'CASL — Your Responsibility as Sender',
    body: [
      'When you use Communications Services to send a commercial electronic message to any recipient — including a prospect, customer, partner, or any natural person — you are the sender under CASL and are solely responsible for compliance. Logical Works provides infrastructure only.',
      'Logical Works does not verify, manage, or maintain your consent records for third-party recipients. It is your responsibility to document and retain records of consent (including the form of consent, date, means, and expiry) for a minimum period sufficient to defend a CASL complaint — generally three (3) years from the date of the message.',
      'If Logical Works receives a complaint or enforcement inquiry related to messages you sent through Communications Services, we may cooperate with the Canadian Radio-television and Telecommunications Commission (CRTC), the Competition Bureau, or the Office of the Privacy Commissioner, including by disclosing information about your account and messages as required by law.',
    ],
  },
  {
    id: 'abuse', number: 'E8', title: 'Abuse Detection and Rate Limits',
    body: [
      'To protect the reputation and deliverability of the platform and all users, Logical Works applies automated and manual controls to detect abuse of Communications Services, including volume limits, bounce-rate monitoring, spam-complaint thresholds, and content-pattern analysis. These controls do not involve reading the substantive content of your messages for purposes other than abuse detection.',
      'If your account exceeds applicable volume or abuse thresholds, Logical Works may, without prior notice: throttle or temporarily suspend outbound message delivery; quarantine flagged messages for review; require you to verify CASL consent records before restoring service; or terminate your Communications Services access.',
      'Persistent abuse, including repeated CASL violations, phishing, spoofing, or sending content that generates CRTC enforcement action, is grounds for immediate account termination under Section 8 of the main Terms.',
    ],
  },
  {
    id: 'integrations', number: 'E9', title: 'Third-Party Email and Calendar Integrations',
    body: [
      'You may connect third-party email accounts (e.g. Google Workspace, Microsoft 365) or calendar services to your Logical Works account using OAuth or API credentials. When you do so: (a) Logical Works acts as an authorised application under that provider\'s developer terms; (b) we access only the scopes you explicitly grant; and (c) your use of the connected service remains subject to that provider\'s terms and privacy policy.',
      'Third-party integrations are islands — they cannot read Logical Works core data flows unless explicitly authorised via a capability grant. Logical Works does not retain a copy of your external email for purposes beyond operating the integration (e.g. displaying threading in the work-object context view).',
      'You may disconnect any integration at any time through your account settings. Disconnecting an integration does not delete historical metadata already attached to work objects; it stops future synchronisation. To delete historical metadata, use the data deletion process described in Section 6 of the main Terms.',
    ],
  },
  {
    id: 'liability', number: 'E10', title: 'Liability and Indemnification for Communications',
    body: [
      'Logical Works provides Communications Services as infrastructure. We are not responsible for the content of messages you send, the decisions you make based on messages you receive, or your compliance with CASL or any other anti-spam or communications law.',
      'You agree to indemnify, defend, and hold harmless Logical Works Inc., its directors, officers, employees, and service providers from and against any claim, fine, penalty, damage, loss, or expense (including reasonable legal fees) arising from or related to: (a) your violation of these Email Terms; (b) any claim by a message recipient relating to messages you sent through Communications Services; (c) any CRTC, Competition Bureau, or other regulatory enforcement action arising from your use of Communications Services; or (d) your violation of any applicable anti-spam, privacy, or communications law.',
      'The liability limitations and caps set out in Section 14 of the main Terms apply to claims arising under or in connection with these Email Terms.',
    ],
  },
  {
    id: 'contact-email', number: 'E11', title: 'Contact',
    body: [
      'For questions about these Email Terms, email or communications abuse reports, or CASL compliance inquiries, contact Logical Works at: legal@logicalworks.ca.',
      'To report a suspected CASL violation by a third party, contact the CRTC Spam Reporting Centre: fightspam.gc.ca.',
    ],
  },
];

export const emailTermsHero = {
  eyebrow: 'Supplemental Terms — Communications',
  title: 'Email & Communications Terms.',
  body: 'Rules governing email, chat, and messaging services on Logical Works. Read alongside the main Terms of Service.',
};

export const emailTermsSummary = {
  eyebrow: 'Supplemental to main Terms',
  title: 'Communications without advertising surveillance.',
  body: 'These terms cover email and messaging features built into Logical Works. You are the sender under CASL for commercial messages you send through the platform; Logical Works provides infrastructure and does not scan message content for ads.',
};
