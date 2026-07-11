import type { ServiceContent } from "@/types";

export const proprietorshipRegistration: ServiceContent = {
  slug: "proprietorship-registration",
  category: "Business Registration",
  title: "Proprietorship Registration Services",
  shortTitle: "Proprietorship",
  metaDescription: "Sole proprietorship registration and business identity setup for individual entrepreneurs.",
  summary:
    "A sole proprietorship is the simplest business structure, suited to individual entrepreneurs and small businesses that want to start operating quickly with minimal compliance.",
  whoNeedsThis: ["Individual entrepreneurs and freelancers formalising their business", "Small, owner-operated businesses and local service providers"],
  benefits: [
    "Simple and quick to set up",
    "Minimal ongoing compliance compared to companies and LLPs",
    "Complete control over business decisions",
  ],
  eligibility: ["Open to any individual Indian resident wanting to operate a business under their own name or a trade name"],
  documentsRequired: [
    "Identity and address proof of the proprietor",
    "PAN of the proprietor",
    "Business address proof",
    "Relevant registrations such as GST or Shop & Establishment, depending on business activity",
  ],
  process: [
    { title: "Business identity setup", description: "We help determine the appropriate registrations for your business activity and location." },
    { title: "Documentation", description: "Preparation of applications for applicable registrations (e.g. GST, MSME, Shop & Establishment)." },
    { title: "Filing", description: "Applications are filed with the relevant authorities." },
    { title: "Confirmation", description: "You receive registration confirmations to operate and open a business bank account." },
  ],
  estimatedTimeline: "Timelines vary depending on which registrations apply to your business and the relevant authority's processing time.",
  governmentFeeNote: "Government fees vary depending on the specific registrations required for your business activity.",
  professionalFeeNote: "Professional fees depend on scope of registrations required. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Operating without required local or activity-specific registrations",
    "Mixing personal and business finances without clear records",
    "Not registering a business name as a trademark, leaving the brand unprotected",
  ],
  whyPulsarIP: ["Guidance on exactly which registrations your specific business needs", "Coordinated brand name protection through trademark filing"],
  faqs: [
    { question: "Does a proprietorship have limited liability?", answer: "No. A sole proprietorship is not a separate legal entity, and the proprietor is personally liable for business obligations." },
    { question: "What registrations does a proprietorship need?", answer: "This depends on the nature and location of the business — common registrations include GST, MSME/Udyam, and Shop & Establishment licences." },
  ],
  relatedServices: [
    { label: "MSME / Udyam Registration", href: "/services/business-registration/msme-udyam-registration" },
    { label: "One Person Company", href: "/services/business-registration/opc-registration" },
  ],
};
