import type { ServiceContent } from "@/types";

export const opcRegistration: ServiceContent = {
  slug: "opc-registration",
  category: "Business Registration",
  title: "One Person Company (OPC) Registration",
  shortTitle: "OPC Registration",
  metaDescription: "One Person Company registration services for solo founders seeking limited liability with single ownership.",
  summary:
    "A One Person Company allows a single founder to enjoy limited liability and a separate legal identity without needing additional shareholders or partners.",
  whoNeedsThis: ["Solo founders who want limited liability protection", "Individual entrepreneurs formalising a growing business"],
  benefits: [
    "Limited liability protection with single ownership",
    "Separate legal entity distinct from the founder",
    "Simpler governance than a multi-shareholder company",
  ],
  eligibility: [
    "A single individual as shareholder, who must be an Indian citizen and resident",
    "A nominee must be appointed in case of the owner's incapacity or death",
    "A registered office address in India",
  ],
  documentsRequired: [
    "Identity and address proof of the owner and nominee",
    "PAN of the owner",
    "Registered office address proof",
    "Digital Signature Certificate (DSC)",
  ],
  process: [
    { title: "Name reservation", description: "We help reserve a unique OPC name with the Registrar." },
    { title: "Documentation", description: "Preparation of incorporation documents and nominee consent." },
    { title: "Filing", description: "Incorporation application filed with the Registrar of Companies." },
    { title: "Certificate of Incorporation", description: "On approval, the Registrar issues the Certificate of Incorporation." },
  ],
  estimatedTimeline: "Timelines depend on Registrar processing time and completeness of documentation submitted.",
  governmentFeeNote: "Government fees vary based on authorised capital and state of registration.",
  professionalFeeNote: "Professional fees depend on scope of documentation and support required. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Not appointing or documenting a nominee correctly",
    "Assuming an OPC can have more than one shareholder — it cannot by definition",
  ],
  whyPulsarIP: ["Clear guidance on OPC vs proprietorship vs private limited trade-offs", "Support with conversion planning as the business scales"],
  faqs: [
    { question: "Can an OPC have more than one shareholder?", answer: "No. An OPC is designed for single ownership. If you plan to bring in co-founders or investors, a private limited company may be more suitable." },
    { question: "Can an OPC be converted into a private limited company later?", answer: "Conversion is possible subject to applicable thresholds and procedures. Talk to an advisor about the current requirements." },
  ],
  relatedServices: [
    { label: "Company Registration", href: "/services/business-registration/company-registration" },
    { label: "Proprietorship Registration", href: "/services/business-registration/proprietorship-registration" },
  ],
};
