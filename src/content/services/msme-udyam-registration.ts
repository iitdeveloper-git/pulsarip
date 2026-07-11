import type { ServiceContent } from "@/types";

export const msmeUdyamRegistration: ServiceContent = {
  slug: "msme-udyam-registration",
  category: "Business Registration",
  title: "MSME / Udyam Registration Services",
  shortTitle: "MSME / Udyam",
  metaDescription: "MSME/Udyam registration services to help small and medium businesses access government schemes and benefits.",
  summary:
    "Udyam (MSME) registration is an official recognition for micro, small, and medium enterprises that can unlock access to government schemes, subsidies, and easier credit facilitation.",
  whoNeedsThis: ["Manufacturing and service businesses within MSME investment/turnover thresholds", "Startups and SMEs seeking easier access to loans and government tenders"],
  benefits: [
    "Access to government schemes and subsidy programmes for MSMEs",
    "Easier access to collateral-free credit facilitation",
    "Protection against delayed payments under applicable MSME provisions",
    "Priority consideration in certain government tenders",
  ],
  eligibility: ["Businesses that fall within the applicable MSME investment and turnover thresholds for micro, small, or medium enterprises"],
  documentsRequired: ["PAN and Aadhaar of the business owner/authorised signatory", "Business address and bank account details", "Basic details of business activity and investment/turnover"],
  process: [
    { title: "Eligibility check", description: "We confirm your business qualifies under current MSME thresholds." },
    { title: "Documentation", description: "Preparation of the Udyam registration application." },
    { title: "Filing", description: "Online filing on the Udyam registration portal." },
    { title: "Registration certificate", description: "You receive your Udyam registration number and certificate." },
  ],
  estimatedTimeline: "Udyam registration is typically processed quickly once documentation is complete, subject to portal availability.",
  governmentFeeNote: "Udyam/MSME registration itself does not typically carry a government fee; related certifications may have separate costs.",
  professionalFeeNote: "Professional fees depend on the scope of documentation support required. Talk to an advisor for a scope-based quote.",
  commonRisks: ["Misclassifying business investment/turnover, leading to incorrect MSME category", "Not updating registration details as the business grows"],
  whyPulsarIP: ["Accurate classification guidance based on current thresholds", "Support linking MSME status to broader business and IP strategy"],
  faqs: [
    { question: "Who is eligible for Udyam/MSME registration?", answer: "Businesses that fall within the applicable investment and turnover thresholds defined for micro, small, and medium enterprises." },
    { question: "What are the benefits of MSME registration?", answer: "Access to government schemes, easier credit facilitation, and protections such as timely payment provisions, among others." },
  ],
  relatedServices: [
    { label: "Proprietorship Registration", href: "/services/business-registration/proprietorship-registration" },
    { label: "Import Export Code", href: "/services/business-registration/import-export-code" },
  ],
};
