import type { ServiceContent } from "@/types";

export const legalDocumentation: ServiceContent = {
  slug: "legal-documentation",
  category: "Legal Documentation",
  title: "Legal Documentation Services",
  shortTitle: "Legal Documentation",
  metaDescription: "Drafting of NDAs, founders' agreements, employment agreements, service agreements, IP assignment agreements, and website legal policies.",
  summary:
    "Well-drafted legal documents protect relationships, clarify expectations, and reduce disputes. PulsarIP drafts and reviews the core legal documents that startups and businesses rely on day to day.",
  whoNeedsThis: [
    "Founders formalising co-founder and equity arrangements",
    "Businesses hiring employees or engaging vendors",
    "Companies launching a website or app that needs legal policies",
    "Businesses licensing or assigning IP rights",
  ],
  benefits: [
    "Clear, enforceable terms that reduce ambiguity and disputes",
    "Documents tailored to your specific business relationship",
    "Stronger protection of confidential information and IP",
    "Compliance-ready policies for your website or app",
  ],
  eligibility: ["Available to individuals, startups, and businesses of any size and structure"],
  documentsRequired: ["Details of the parties involved", "Key commercial terms to be documented", "Any existing draft or reference document, if available"],
  process: [
    { title: "Requirement discussion", description: "We understand the relationship and commercial terms to be documented." },
    { title: "Drafting", description: "A tailored draft is prepared based on your requirements." },
    { title: "Review & revision", description: "You review the draft and we incorporate feedback." },
    { title: "Finalisation", description: "The final document is shared for signature." },
  ],
  estimatedTimeline: "Drafting timelines depend on document complexity and the number of review rounds required.",
  governmentFeeNote: "Most legal documentation does not carry government fees; stamping/registration fees may apply for specific document types under applicable law.",
  professionalFeeNote: "Professional fees depend on document type and complexity. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Using generic templates that don't reflect your actual commercial terms",
    "Missing IP assignment clauses in employment or contractor agreements",
    "Publishing a website/app without required legal policies",
  ],
  whyPulsarIP: ["Practical, business-first drafting rather than generic templates", "Coordinated support linking documentation to your broader IP and business strategy"],
  faqs: [
    { question: "Do I need a founders' agreement even for a small team?", answer: "Yes. A founders' agreement helps prevent disputes over equity, roles, and exit terms — issues that are far harder to resolve after they arise." },
    { question: "Does every website need a privacy policy?", answer: "Businesses that collect personal data through a website or app should have a privacy policy and terms of use appropriate to their data practices and applicable law." },
  ],
  relatedServices: [
    { label: "IP Advisory & Protection", href: "/services/ip-advisory" },
    { label: "Startups", href: "/startups" },
    { label: "Copyright Services", href: "/services/copyright" },
  ],
  subServices: [
    { title: "NDA", description: "Non-disclosure agreements to protect confidential information." },
    { title: "Founders' Agreement", description: "Equity, roles, and exit terms between co-founders." },
    { title: "Employment Agreement", description: "Terms of engagement, IP assignment, and confidentiality for employees." },
    { title: "Service Agreement", description: "Terms for delivering services to clients or customers." },
    { title: "Vendor Agreement", description: "Terms for engaging vendors and suppliers." },
    { title: "Privacy Policy", description: "Data collection and usage disclosures for your website or app." },
    { title: "Terms and Conditions", description: "Usage terms governing your website, app, or service." },
    { title: "Website/App Legal Policies", description: "A complete legal policy suite for digital products." },
    { title: "IP Assignment Agreement", description: "Formal transfer of IP ownership between parties." },
    { title: "Licensing Agreement", description: "Terms for licensing IP or technology to third parties." },
  ],
};
