/**
 * All text content sourced from lgwks-frontend MDX packs.
 * Logical Works — strategy, design, and technology studio.
 */

export interface Service {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  features: string[];
  processSteps: string[];
}

export const services: Service[] = [
  {
    slug: "strategy",
    title: "Strategy",
    eyebrow: "How we think",
    description:
      "We align business objectives with user needs through rigorous research, competitive analysis, and roadmap planning. Our strategy practice turns ambiguity into actionable product direction.",
    features: [
      "Market and competitive research",
      "User segmentation and persona development",
      "Product roadmap and prioritisation frameworks",
      "Go-to-market strategy and positioning",
      "KPI definition and measurement planning",
    ],
    processSteps: [
      "Discovery workshops with stakeholders",
      "Qualitative and quantitative research synthesis",
      "Strategic opportunity mapping",
      "Roadmap and milestone definition",
      "Ongoing metrics review and iteration",
    ],
  },
  {
    slug: "brand",
    title: "Brand Identity",
    eyebrow: "How we look",
    description:
      "We build distinctive visual identities that communicate value at a glance. From logo systems to colour strategy, we craft brands that resonate across every channel and surface.",
    features: [
      "Logo and mark design systems",
      "Typography and colour strategy",
      "Brand guidelines and governance documentation",
      "Packaging and environmental graphics",
      "Motion and sonic brand assets",
    ],
    processSteps: [
      "Stakeholder interviews and brand audit",
      "Creative direction and concept exploration",
      "Identity system development",
      "Guideline documentation and toolkits",
      "Launch support and rollout planning",
    ],
  },
  {
    slug: "product",
    title: "Product Design",
    eyebrow: "How we feel",
    description:
      "We design digital products that are intuitive, accessible, and beautiful. We prototype early, test often, and ship experiences that users genuinely enjoy.",
    features: [
      "User experience mapping and wireframing",
      "High-fidelity interface design",
      "Design system creation and maintenance",
      "Accessibility and inclusive design audits",
      "Prototype and usability testing",
    ],
    processSteps: [
      "Problem definition and user research",
      "Information architecture and flow design",
      "Visual design and interaction detailing",
      "Prototype building and user testing",
      "Handoff and design QA during development",
    ],
  },
  {
    slug: "web",
    title: "Web Development",
    eyebrow: "How we build",
    description:
      "We develop fast, secure, and scalable web experiences using modern frameworks and disciplined engineering practices. We treat frontend performance and SEO as first-class concerns.",
    features: [
      "Application development with component-driven architecture",
      "Headless CMS integration and content modelling",
      "Performance optimisation and Core Web Vitals",
      "Serverless and edge deployment architecture",
      "Analytics, SEO, and conversion tracking",
    ],
    processSteps: [
      "Technical discovery and architecture planning",
      "Component-driven development in sprints",
      "Automated testing and continuous integration",
      "Performance auditing and optimisation",
      "Deployment, monitoring, and iteration",
    ],
  },
  {
    slug: "engineering",
    title: "Engineering",
    eyebrow: "How we scale",
    description:
      "We engineer robust backend systems, APIs, and data pipelines that power complex applications. We prioritise observability, fault tolerance, and clean architecture.",
    features: [
      "API design and microservices development",
      "Database architecture and optimisation",
      "Cloud infrastructure and DevOps automation",
      "Real-time data streaming and event pipelines",
      "Security hardening and compliance readiness",
    ],
    processSteps: [
      "Domain modelling and system design",
      "Test-driven development and code review",
      "Infrastructure as code and CI/CD setup",
      "Load testing and resilience validation",
      "Observability, alerting, and support transition",
    ],
  },
];

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  category: string;
  year: string;
  body: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  testimonialAttribution: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "shipbob",
    client: "ShipBob",
    title: "Putting People at the Heart of a Logistics Brand",
    category: "Strategy & Brand",
    year: "2026",
    body: "A full rebrand and website for a $1B logistics provider that made merchant success the brand's centre of gravity.",
    challenge:
      "ShipBob had grown rapidly into one of the leading fulfilment platforms for e-commerce brands. But its identity had not kept pace. In a category dominated by operational language, ShipBob had an opportunity to differentiate on the one thing logistics companies rarely lead with: the merchants and teams whose success depends on getting delivery right.",
    solution:
      "We ran discovery sessions with ShipBob's merchant community, internal teams, and sales organization to identify the emotional and rational drivers that most differentiated ShipBob from its competitors. The result was a brand strategy that centered merchant success as the single most compelling and defensible position in the category.",
    results: [
      "27% improvement in conversion rate following relaunch",
      "$268M raised subsequent to the rebrand",
      "Full rebrand adopted across digital, physical, and brand campaign materials",
    ],
    testimonial:
      "Logical Works understood what makes ShipBob different — and they built a brand that lets us say it clearly without shouting it.",
    testimonialAttribution: "VP of Marketing, ShipBob",
  },
  {
    slug: "cloudzero",
    client: "CloudZero",
    title: "Brand and Website",
    category: "Strategy & Web",
    year: "2025",
    body: "A unified brand and website built for cloud cost intelligence at scale.",
    challenge:
      "CloudZero's existing brand and website were not keeping pace with the company's growth or the sophistication of its platform. A large volume of content made navigation unwieldy, while the visual identity lacked the depth needed to stand out in a competitive category.",
    solution:
      "Stakeholder interviews were conducted across branding and UX in parallel, surfacing challenges early and aligning direction before visual exploration began. Research synthesis and tree testing informed the information architecture, restructuring a content-heavy site into a system users could navigate intuitively.",
    results: [
      "40% increase in demo-request rate following launch",
      "Single source of truth for product marketing, sales, and support teams",
      "Complete brand system covering guidelines, templates, and event materials",
    ],
    testimonial:
      "Logical Works delivered the tightest strategy-to-execution loop we have ever worked with. The site finally matches the product.",
    testimonialAttribution: "VP of Marketing, CloudZero",
  },
  {
    slug: "playbypoint",
    client: "PlayByPoint",
    title: "Bringing the Energy of Sport into SaaS",
    category: "Brand & Platform",
    year: "2025",
    body: "A brand and platform built to match the intensity of competitive sport.",
    challenge:
      "PlayByPoint had built a genuinely capable sports technology platform, but its brand and website felt indistinguishable from any other enterprise SaaS company. For a product serving competitive sports operators and athletes, this was more than an aesthetic problem — it was a credibility gap.",
    solution:
      "We ran a brand strategy sprint grounded in the culture of competitive sport — the intensity, the precision, and the community dynamics that make sport distinct from other commercial categories. This gave the visual and verbal identity a clear pole to orient around.",
    results: [
      "Brand, website, and development delivered as a unified engagement",
      "Identity system adopted across product, marketing, and event materials at launch",
      "Substantial increase in inbound inquiries from sports operators following relaunch",
    ],
    testimonial: "",
    testimonialAttribution: "",
  },
  {
    slug: "cv-maker",
    client: "CV Maker",
    title: "Redesigning a Resume Tool to Level the Playing Field",
    category: "Product & Web",
    year: "2025",
    body: "What started as a brand refresh expanded into a full product and business model transformation.",
    challenge:
      "CV Maker came to us looking for a visual identity refresh. Extensive UX research revealed a much broader opportunity: significant usability gaps, an underperforming pricing model, and a product that was not meeting the needs of its diverse global user base. The scope expanded accordingly — and correctly.",
    solution:
      "We ran mixed-method user research across multiple regions, uncovering patterns in how different user segments were attempting to navigate the tool. These findings reframed the product roadmap, the pricing architecture, and the content strategy simultaneously — giving the client a clear mandate for change grounded in evidence.",
    results: [
      "Full product redesign informed by research across multiple user segments and geographies",
      "Pricing model restructured to align with demonstrated user value patterns",
      "Accessibility and internationalisation built into the foundation, not layered on after",
    ],
    testimonial: "",
    testimonialAttribution: "",
  },
  {
    slug: "enode",
    client: "Enode",
    title: "From Hidden Complexity to a Brand Built for Active Training",
    category: "Brand & Product",
    year: "2025",
    body: "A new name, identity, and product UI for a fitness technology platform entering global markets.",
    challenge:
      "Enode had outgrown its identity. Built around athletes and fitness studios, the brand no longer reflected the platform it had become or the global markets it was ready to enter. A new name, visual identity, and product UI were needed, alongside legal trademark protection across multiple markets.",
    solution:
      "We ran a naming sprint grounded in market positioning and trademark feasibility. With the new name secured across target markets, the strategy phase established the brand architecture and messaging framework that would carry the identity across every digital surface.",
    results: [
      "New name trademarked and cleared across all target markets prior to launch",
      "Brand and product systems delivered simultaneously, ensuring launch-day coherence",
      "3x increase in inbound developer and studio sign-ups following brand launch",
    ],
    testimonial:
      "Logical Works helped us find the voice we already had and give it a shape the market could remember.",
    testimonialAttribution: "CEO, Enode",
  },
  {
    slug: "holocene",
    client: "Holocene",
    title: "Clarity as a Competitive Advantage",
    category: "Strategy & Web",
    year: "2025",
    body: "Making a complex logistics and sustainability platform legible to enterprise buyers and policy teams.",
    challenge:
      "Holocene's climate and logistics platform needed a web experience that could make complex scientific and operational data feel approachable to enterprise buyers and policy teams. The product was genuinely differentiated — but the website wasn't communicating why it mattered or to whom.",
    solution:
      "We restructured the information architecture around buyer use cases, not product features. This reframe made the site navigable for multiple stakeholder types — from procurement leads to sustainability officers — without requiring every visitor to work through the same funnel.",
    results: [
      "55% growth in enterprise pipeline in the six months following launch",
      "Sales team reported shorter qualification cycles as prospects arrived pre-educated",
      "Content system adopted by the marketing team to sustain the site independently",
    ],
    testimonial:
      "Logical Works made our data readable without dumbing it down. That is a rare skill.",
    testimonialAttribution: "Chief Marketing Officer, Holocene",
  },
];

export interface JournalPost {
  slug: string;
  title: string;
  eyebrow: string;
  excerpt: string;
  date: string;
  tags: string[];
}

export const journalPosts: JournalPost[] = [
  {
    slug: "strategy-before-sprints",
    title: "Strategy Before Sprints",
    eyebrow: "Journal — Strategy",
    excerpt: "Sprint velocity is a vanity metric without strategic clarity.",
    date: "March 2026",
    tags: ["Strategy", "Product", "Agile"],
  },
  {
    slug: "brand-before-the-rebrand",
    title: "Brand Archaeology: What to Protect Before You Rebuild",
    eyebrow: "Journal — Brand",
    excerpt:
      "A rebrand is not a reset. The most valuable work happens before anything is designed.",
    date: "February 2026",
    tags: ["Brand", "Strategy", "Rebrand"],
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale",
    eyebrow: "Journal — Product Design",
    excerpt:
      "Why most design systems fail within two years, and how to build them to last.",
    date: "April 2026",
    tags: ["Design", "Product", "Design System"],
  },
  {
    slug: "engineering-for-resilience",
    title: "Engineering for Resilience",
    eyebrow: "Journal — Development",
    excerpt:
      "Every project begins with a resilience model: what happens when a dependency fails?",
    date: "March 2026",
    tags: ["Engineering", "Resilience", "Architecture"],
  },
  {
    slug: "feedback-that-moves-forward",
    title: "Feedback That Moves Forward",
    eyebrow: "Journal — Process",
    excerpt: "Critique that ships better work instead of stopping it.",
    date: "January 2026",
    tags: ["Process", "Collaboration"],
  },
  {
    slug: "competition-vs-collaboration",
    title: "Competition vs. Collaboration",
    eyebrow: "Journal — Strategy",
    excerpt: "The most ambitious companies rarely win by going it alone.",
    date: "January 2026",
    tags: ["Strategy", "Partnerships"],
  },
];

export interface Founder {
  name: string;
  role: string;
  bio: string;
  initials: string;
  socials: { label: string; url: string }[];
}

export const founders: Founder[] = [
  {
    name: "Srinji Gupta",
    role: "Founder & CEO",
    bio: "Turns challenges into impact — with collaboration and a touch of finesse. Finance and PoliSci from Huron University. Built Logical Works so serious operators finally have tools shaped to how they actually work.",
    initials: "SG",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/srinjon-gupta/" },
      { label: "GitHub", url: "https://github.com/srinji-kaggss" },
    ],
  },
  {
    name: "Nicolas Mateus",
    role: "Co-founder & CIO",
    bio: "Full-stack engineer from Western Ontario. Builds scalable, clean systems across Angular, TypeScript, and Cloud Substrate — and architects the platform layer that makes governed work possible at Logical Works.",
    initials: "NM",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nicolas-mateus/" },
      { label: "GitHub", url: "https://github.com/nicoMP" },
    ],
  },
];

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  {
    value: "10+ years",
    label: "Building at the intersection of strategy, design, and engineering",
  },
  {
    value: "$2B+",
    label: "Raised by our clients over the course of our partnerships",
  },
  {
    value: "450M+",
    label: "People who interact with the systems we have helped build, every day",
  },
  {
    value: "50+",
    label: "Strategists, designers, engineers, and researchers on the team",
  },
];

export const siteConfig = {
  name: "Logical Works",
  url: "https://logicalworks.ca",
  email: "hello@logicalworks.ca",
  pressEmail: "press@logicalworks.ca",
  location: "London, Ontario",
  tagline: "Strategy, design, and technology — working as one.",
  description:
    "We work with ambitious companies to build the brands, products, and platforms that define their next chapter.",
};
