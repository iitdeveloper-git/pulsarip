import type { ServiceContent } from "@/types";

export const importExportCode: ServiceContent = {
  slug: "import-export-code",
  category: "Business Registration",
  title: "Import Export Code (IEC) Registration",
  shortTitle: "Import Export Code",
  metaDescription: "Import Export Code (IEC) registration services for businesses engaged in cross-border trade.",
  summary:
    "An Import Export Code is a mandatory registration for businesses engaged in importing or exporting goods and services across India's borders.",
  whoNeedsThis: ["Manufacturers and traders exporting goods internationally", "Businesses importing raw materials, components, or finished goods", "Service exporters where IEC is applicable"],
  benefits: [
    "Enables legal import and export of goods and services",
    "Required for availing export incentives and benefits under applicable schemes",
    "No mandatory periodic renewal once issued, subject to periodic updates as required",
  ],
  eligibility: ["Any individual, proprietorship, partnership, LLP, or company engaged in cross-border trade"],
  documentsRequired: ["PAN of the business/individual", "Business address proof", "Bank account details and a cancelled cheque", "Digital signature, where applicable, for online filing"],
  process: [
    { title: "Eligibility & documentation check", description: "We confirm required documents based on your business type." },
    { title: "Application filing", description: "The IEC application is filed with the Directorate General of Foreign Trade (DGFT)." },
    { title: "Issuance", description: "On approval, the IEC is issued and linked to your PAN." },
  ],
  estimatedTimeline: "Processing timelines depend on DGFT's portal and documentation completeness.",
  governmentFeeNote: "Government fees apply as prescribed by DGFT at the time of application.",
  professionalFeeNote: "Professional fees depend on the scope of documentation support required. Talk to an advisor for a scope-based quote.",
  commonRisks: ["Incomplete bank or address documentation causing delays", "Not updating IEC details after business changes"],
  whyPulsarIP: ["Straightforward, document-first filing support", "Guidance connecting IEC setup with broader export compliance needs"],
  faqs: [
    { question: "Is IEC mandatory for all exporters?", answer: "IEC is generally required for most businesses engaged in the import or export of goods and services, with certain exemptions specified by DGFT." },
    { question: "Does IEC need to be renewed?", answer: "IEC does not typically require periodic renewal, but details may need periodic confirmation as per DGFT requirements. Talk to an advisor for current requirements." },
  ],
  relatedServices: [
    { label: "MSME / Udyam Registration", href: "/services/business-registration/msme-udyam-registration" },
    { label: "Company Registration", href: "/services/business-registration/company-registration" },
  ],
};
