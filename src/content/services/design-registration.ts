import type { ServiceContent } from "@/types";

export const designRegistration: ServiceContent = {
  slug: "design-registration",
  category: "Intellectual Property",
  title: "Industrial Design Registration Services",
  shortTitle: "Design Registration",
  metaDescription:
    "Design search, filing, registration, renewal, and opposition support to protect the visual appearance of your products.",
  summary:
    "Industrial design registration protects the unique visual appearance of a product — its shape, configuration, pattern, or ornamentation. It is especially valuable for manufacturers and product-based businesses whose competitive edge lies in distinctive design.",
  whoNeedsThis: [
    "Manufacturers with distinctive product shapes or forms",
    "Consumer brands launching new packaging or product designs",
    "D2C and e-commerce businesses with original product aesthetics",
    "Furniture, appliance, and industrial equipment makers",
  ],
  benefits: [
    "Exclusive right to the registered design for the statutory protection period",
    "Deterrent against visual copying by competitors",
    "Added commercial value for licensing or manufacturing partnerships",
  ],
  eligibility: [
    "The design must be new or original and not previously published or used",
    "It must be applied to an article by an industrial process",
    "It should be distinguishable from known designs and should not include purely functional features",
  ],
  documentsRequired: [
    "Representation sheets or drawings of the design from multiple views",
    "Applicant identity and address proof",
    "Statement of novelty describing the distinctive features",
    "Assignment deed, if the applicant is not the original designer",
  ],
  process: [
    { title: "Design search", description: "We check for conflicting or prior-published designs before filing." },
    { title: "Application preparation", description: "Representation sheets and statement of novelty are prepared." },
    { title: "Filing", description: "The application is filed with the Design Office." },
    { title: "Examination", description: "The Office examines novelty and formal requirements; objections are addressed if raised." },
    { title: "Registration", description: "On acceptance, the design is registered and a certificate is issued." },
  ],
  estimatedTimeline: "Timelines depend on the Design Office's examination queue and whether objections are raised.",
  governmentFeeNote: "Government fees vary based on applicant category and number of designs/classes filed.",
  professionalFeeNote: "Professional fees depend on the number of designs and complexity of representation sheets. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Publishing or selling the product before filing, which can affect novelty",
    "Registering only one view of a multi-feature design",
    "Confusing design registration with patent or trademark protection",
    "Missing the renewal deadline, causing the registration to lapse",
  ],
  whyPulsarIP: [
    "Practical guidance on what is and isn't registrable as a design",
    "Support preparing clear, examiner-ready representation sheets",
    "Coordinated protection strategy alongside trademark and patent filings",
  ],
  faqs: [
    { question: "What can be protected under design registration?", answer: "The visual features of shape, configuration, pattern, or ornamentation applied to an article — not its underlying function or technical working." },
    { question: "Is design registration the same as a patent?", answer: "No. A patent protects how something works (a technical invention); design registration protects how a product looks." },
    { question: "How long does design registration protection last?", answer: "Design registrations are granted for a statutory term and can typically be renewed within the applicable period — talk to an advisor for current renewal timelines." },
  ],
  relatedServices: [
    { label: "Patent Services", href: "/services/patents" },
    { label: "Trademark Services", href: "/services/trademark" },
    { label: "IP Advisory & Protection", href: "/services/ip-advisory" },
  ],
  subServices: [
    { title: "Design Search", description: "Checking novelty against existing registered designs." },
    { title: "Design Filing", description: "Preparing and filing the design application." },
    { title: "Design Registration", description: "End-to-end prosecution through to registration." },
    { title: "Renewal", description: "Timely renewal to maintain protection." },
    { title: "Opposition / Cancellation Support", description: "Support in contesting or defending a design registration." },
    { title: "Product Design Protection Strategy", description: "Advisory on protecting a product line's visual identity." },
  ],
};
