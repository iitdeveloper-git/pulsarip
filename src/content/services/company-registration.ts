import type { ServiceContent } from "@/types";

export const companyRegistration: ServiceContent = {
  slug: "company-registration",
  category: "Business Registration",
  title: "Private Limited Company Registration",
  shortTitle: "Company Registration",
  metaDescription: "Private Limited Company registration services for startups and businesses, including documentation, filing, and compliance guidance.",
  summary:
    "A Private Limited Company is one of the most common structures for startups and growing businesses, offering limited liability, a separate legal identity, and easier access to funding.",
  whoNeedsThis: [
    "Founders building a venture-fundable startup",
    "Businesses seeking limited liability protection",
    "Teams with multiple co-founders or investors",
  ],
  benefits: [
    "Limited liability protection for shareholders",
    "Separate legal entity distinct from its owners",
    "Easier access to equity funding and ESOPs",
    "Perpetual succession regardless of ownership changes",
  ],
  eligibility: [
    "Minimum two directors and two shareholders (can be the same individuals)",
    "At least one director must be resident in India",
    "A registered office address in India",
  ],
  documentsRequired: [
    "Identity and address proof of directors and shareholders",
    "PAN of Indian directors/shareholders",
    "Registered office address proof and no-objection certificate",
    "Digital Signature Certificate (DSC) for proposed directors",
  ],
  process: [
    { title: "Name reservation", description: "We help reserve a unique company name with the Registrar of Companies." },
    { title: "Documentation", description: "Preparation of incorporation documents, MOA, and AOA." },
    { title: "Filing", description: "Incorporation application filed with the Registrar of Companies." },
    { title: "Certificate of Incorporation", description: "On approval, the Registrar issues the Certificate of Incorporation." },
    { title: "Post-incorporation compliance", description: "PAN, TAN, and bank account setup guidance to get you operational." },
  ],
  estimatedTimeline: "Timelines depend on Registrar processing time and completeness of documentation submitted.",
  governmentFeeNote: "Government fees vary based on authorised capital and state of registration.",
  professionalFeeNote: "Professional fees depend on the scope of documentation and support required. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Choosing a company name that conflicts with an existing trademark or company name",
    "Incomplete or inconsistent director/shareholder documentation",
    "Not planning share structure and founder agreements before incorporation",
  ],
  whyPulsarIP: [
    "Coordinated support across incorporation and IP protection for your brand name",
    "Clear guidance on post-incorporation compliance essentials",
  ],
  faqs: [
    { question: "What is a Private Limited Company?", answer: "It is a business structure with limited liability, a separate legal identity, and shares that are not publicly traded, commonly used by startups and growing businesses." },
    { question: "How many directors are required?", answer: "A minimum of two directors is generally required, with at least one being a resident of India." },
    { question: "How long does company registration take?", answer: "This depends on Registrar processing time and the completeness of submitted documentation." },
  ],
  relatedServices: [
    { label: "LLP Registration", href: "/services/business-registration/llp-registration" },
    { label: "Startup India Registration", href: "/services/business-registration/startup-india-registration" },
    { label: "Trademark Services", href: "/services/trademark" },
  ],
};
