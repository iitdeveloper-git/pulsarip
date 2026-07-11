import type { ServiceContent } from "@/types";

export const llpRegistration: ServiceContent = {
  slug: "llp-registration",
  category: "Business Registration",
  title: "LLP Registration Services",
  shortTitle: "LLP Registration",
  metaDescription: "Limited Liability Partnership (LLP) registration services with documentation, filing, and compliance support.",
  summary:
    "A Limited Liability Partnership combines the operational flexibility of a partnership with the limited liability protection of a company, making it a popular choice for professional and services businesses.",
  whoNeedsThis: [
    "Professional services firms and consultancies",
    "Businesses with two or more partners seeking limited liability",
    "Founders who want lower compliance overhead than a company",
  ],
  benefits: [
    "Limited liability protection for partners",
    "Flexible internal management via the LLP agreement",
    "Separate legal entity distinct from its partners",
    "Comparatively lower compliance burden than a private limited company",
  ],
  eligibility: [
    "Minimum two designated partners, at least one resident in India",
    "A registered office address in India",
    "No minimum capital requirement",
  ],
  documentsRequired: [
    "Identity and address proof of designated partners",
    "PAN of Indian partners",
    "Registered office address proof",
    "Digital Signature Certificate (DSC) for designated partners",
  ],
  process: [
    { title: "Name reservation", description: "We help reserve a unique LLP name with the Registrar." },
    { title: "LLP agreement drafting", description: "Preparation of the LLP agreement covering partner rights and responsibilities." },
    { title: "Filing", description: "Incorporation documents filed with the Registrar." },
    { title: "Certificate of Incorporation", description: "On approval, the Registrar issues the Certificate of Incorporation." },
  ],
  estimatedTimeline: "Timelines depend on Registrar processing time and completeness of documentation submitted.",
  governmentFeeNote: "Government fees vary based on contribution amount and state of registration.",
  professionalFeeNote: "Professional fees depend on scope of documentation and support required. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Drafting an LLP agreement without clearly defining partner roles and profit sharing",
    "Choosing a name that conflicts with an existing trademark or entity",
  ],
  whyPulsarIP: [
    "Clear guidance on LLP vs company trade-offs for your business",
    "Coordinated support for brand name protection alongside registration",
  ],
  faqs: [
    { question: "What is an LLP?", answer: "A Limited Liability Partnership is a hybrid business structure offering the flexibility of a partnership with limited liability protection for its partners." },
    { question: "Is an LLP suitable for a startup seeking venture funding?", answer: "LLPs have limitations around equity fundraising compared to private limited companies. Talk to an advisor about which structure fits your growth plans." },
  ],
  relatedServices: [
    { label: "Company Registration", href: "/services/business-registration/company-registration" },
    { label: "Legal Documentation", href: "/services/legal-documentation" },
  ],
};
