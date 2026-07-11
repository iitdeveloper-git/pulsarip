import type { ServiceContent } from "@/types";

export const trademark: ServiceContent = {
  slug: "trademark",
  category: "Intellectual Property",
  title: "Trademark Registration & Protection Services",
  shortTitle: "Trademark",
  metaDescription:
    "Trademark search, filing, objection response, opposition, renewal, and brand protection services for startups and businesses in India.",
  summary:
    "A trademark protects the name, logo, tagline, or symbol that identifies your business in the market. PulsarIP assists with trademark search, filing, prosecution, and ongoing protection so your brand identity stays legally secured as your business grows.",
  whoNeedsThis: [
    "Startups and founders launching a new brand or product name",
    "Businesses expanding into new categories or markets",
    "E-commerce sellers and D2C brands protecting product names and logos",
    "Agencies and creators who have built recognisable brand assets",
    "Companies that have received a trademark objection or opposition notice",
  ],
  benefits: [
    "Exclusive legal right to use the mark for the registered goods or services",
    "Ability to take action against imitation or infringement",
    "Stronger brand credibility with customers, partners, and investors",
    "A registrable asset that can be licensed, assigned, or valued",
    "Nationwide protection across India once registered",
  ],
  eligibility: [
    "Any individual, startup, LLP, partnership, or company can apply",
    "The mark should be distinctive and not identical or deceptively similar to an existing registered or pending mark",
    "The mark must be used or proposed to be used in relation to specific goods or services (classes)",
  ],
  documentsRequired: [
    "Applicant's identity and address proof",
    "Business registration proof (if applying in a company/LLP/firm name)",
    "Logo or wordmark file (if applicable)",
    "Proof of use, such as invoices or website screenshots (if claiming prior use)",
    "Signed authorisation (Power of Attorney / TM-48, where applicable)",
  ],
  process: [
    { title: "Trademark search", description: "We check existing records to assess the mark's availability and distinctiveness before filing." },
    { title: "Class selection & application drafting", description: "We identify the correct trademark classes and prepare the application with supporting details." },
    { title: "Filing with the Trademark Registry", description: "The application is filed and you receive an application number for tracking." },
    { title: "Examination", description: "The Registry examines the application and may raise an objection, which we help you respond to." },
    { title: "Publication & opposition window", description: "Accepted marks are published in the Trademark Journal for a statutory opposition period." },
    { title: "Registration", description: "If unopposed or opposition is resolved in your favour, the Registry issues the registration certificate." },
  ],
  estimatedTimeline:
    "Timelines vary based on Registry workload, objections, and oppositions, and are not within our control. A trademark application can take anywhere from several months to over a year to move from filing to registration.",
  governmentFeeNote: "Government fees vary by applicant type (individual/startup/small enterprise vs company) and number of classes, and are set by the Trademark Registry.",
  professionalFeeNote: "Professional fees depend on the scope of work — search, filing, objection response, or opposition handling. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Filing without a prior search, risking objection due to conflicting marks",
    "Choosing an overly descriptive or generic mark that is hard to register",
    "Selecting incorrect or incomplete trademark classes",
    "Missing statutory deadlines for objection or opposition responses",
    "Not renewing the mark before expiry, resulting in loss of protection",
  ],
  whyPulsarIP: [
    "Structured search and filing process to reduce avoidable objections",
    "Clear, jargon-free updates at every stage of prosecution",
    "Support with objection responses and opposition proceedings",
    "Ongoing trademark watch and renewal reminders on request",
  ],
  faqs: [
    { question: "What is a trademark?", answer: "A trademark is a distinctive sign — such as a name, logo, symbol, or tagline — used to identify goods or services and distinguish them from those of other businesses." },
    { question: "Who needs trademark registration?", answer: "Any business or individual that wants exclusive rights to a brand name, logo, or tagline used to identify their goods or services should consider registration." },
    { question: "What is the difference between objection and opposition?", answer: "An objection is raised by the Trademark Registry examiner during examination. An opposition is filed by a third party after the mark is published in the Trademark Journal. Both require a timely, well-drafted response." },
    { question: "How long does trademark registration take?", answer: "This depends on Registry processing time, whether an objection is raised, and whether the mark is opposed. It is not possible to guarantee a fixed timeline." },
    { question: "Does trademark registration guarantee approval?", answer: "No. Registration is subject to examination by the Trademark Registry and can be refused or opposed. We help strengthen your application, but outcomes depend on the Registry's assessment." },
  ],
  relatedServices: [
    { label: "Patent Services", href: "/services/patents" },
    { label: "Copyright Services", href: "/services/copyright" },
    { label: "IP Advisory & Protection", href: "/services/ip-advisory" },
  ],
  subServices: [
    { title: "Trademark Search", description: "Availability and conflict search before you commit to a brand name." },
    { title: "Trademark Filing", description: "End-to-end application preparation and filing with the Registry." },
    { title: "Objection Response", description: "Drafting and filing responses to examination objections." },
    { title: "Trademark Opposition", description: "Support in defending or filing an opposition proceeding." },
    { title: "Trademark Renewal", description: "Timely renewal filing to keep your registration active." },
    { title: "Trademark Assignment", description: "Transferring ownership of a registered mark to another entity." },
    { title: "Trademark Watch", description: "Ongoing monitoring for potentially conflicting new applications." },
    { title: "Brand Protection", description: "Strategic advisory to guard your brand across classes and markets." },
    { title: "International Trademark Support", description: "Consultation-led guidance for protecting your mark beyond India." },
  ],
};
