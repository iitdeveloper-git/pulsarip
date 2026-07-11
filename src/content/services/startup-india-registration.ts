import type { ServiceContent } from "@/types";

export const startupIndiaRegistration: ServiceContent = {
  slug: "startup-india-registration",
  category: "Business Registration",
  title: "Startup India Registration Services",
  shortTitle: "Startup India Registration",
  metaDescription: "Startup India (DPIIT) recognition services to help eligible startups access tax, compliance, and IP-related benefits.",
  summary:
    "Startup India recognition (DPIIT registration) is available to eligible startups and can unlock benefits such as fast-tracked IP applications, self-certification for certain compliances, and access to specific funding schemes.",
  whoNeedsThis: ["Early-stage startups meeting DPIIT's eligibility criteria", "Founders looking to access startup-specific IP fee benefits and schemes"],
  benefits: [
    "Access to government startup schemes and funding facilitation",
    "Fee benefits and fast-track examination for certain IP applications",
    "Self-certification for select labour and environmental law compliances",
    "Easier access to the Startup India ecosystem and networking opportunities",
  ],
  eligibility: [
    "The entity must be incorporated as a private limited company, LLP, or registered partnership",
    "The business must be within the age threshold defined by DPIIT from incorporation",
    "Turnover must be within the threshold prescribed by DPIIT",
    "The entity should be working towards innovation, improvement of products/services, or a scalable business model",
  ],
  documentsRequired: [
    "Certificate of Incorporation / Registration",
    "Details of directors/partners",
    "A brief write-up describing the innovative nature of the business",
    "Website, pitch deck, or product details, if available",
  ],
  process: [
    { title: "Eligibility assessment", description: "We confirm your startup meets DPIIT's current eligibility criteria." },
    { title: "Application preparation", description: "We help draft the business description highlighting innovation and scalability." },
    { title: "Filing", description: "The recognition application is filed on the Startup India portal." },
    { title: "Recognition certificate", description: "On approval, DPIIT issues the Startup Recognition Certificate." },
  ],
  estimatedTimeline: "Timelines depend on DPIIT's review process and the completeness of the submitted application.",
  governmentFeeNote: "Startup India (DPIIT) recognition itself does not typically carry a government fee.",
  professionalFeeNote: "Professional fees depend on the scope of documentation and advisory support required. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Submitting a generic business description that doesn't clearly demonstrate innovation",
    "Applying after exceeding the age or turnover threshold",
    "Not leveraging available IP fee benefits after recognition is granted",
  ],
  whyPulsarIP: ["Support crafting a clear, criteria-aligned application narrative", "Coordinated guidance on IP fee benefits available to recognised startups"],
  faqs: [
    { question: "What is DPIIT recognition?", answer: "DPIIT (Department for Promotion of Industry and Internal Trade) recognition is an official status granted to eligible startups, unlocking access to specific schemes and benefits." },
    { question: "Does Startup India registration guarantee funding?", answer: "No. Recognition provides access to certain schemes and benefits, but funding decisions rest with individual investors or scheme administrators." },
  ],
  relatedServices: [
    { label: "Company Registration", href: "/services/business-registration/company-registration" },
    { label: "IP Advisory & Protection", href: "/services/ip-advisory" },
    { label: "Startups", href: "/startups" },
  ],
};
