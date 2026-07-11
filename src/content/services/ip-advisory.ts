import type { ServiceContent } from "@/types";

export const ipAdvisory: ServiceContent = {
  slug: "ip-advisory",
  category: "Intellectual Property",
  title: "IP Advisory & Protection Services",
  shortTitle: "IP Advisory",
  metaDescription:
    "IP audits, strategy, portfolio management, licensing, assignment agreements, infringement assessment, and cease-and-desist support.",
  summary:
    "Beyond individual filings, businesses need a coherent strategy for identifying, protecting, and commercialising their intellectual property. PulsarIP provides advisory support to help startups and companies build and manage a resilient IP portfolio.",
  whoNeedsThis: [
    "Startups preparing for fundraising or IP due diligence",
    "Companies with multiple trademarks, patents, or copyrights to manage",
    "Businesses entering licensing or technology transfer arrangements",
    "Companies that have discovered potential infringement of their IP",
    "Businesses that have received a cease-and-desist notice",
  ],
  benefits: [
    "A clear picture of what IP assets exist and where gaps remain",
    "Structured licensing and assignment agreements that protect commercial interests",
    "Informed decisions when facing or raising infringement concerns",
    "Better investor and partner confidence through organised IP records",
  ],
  eligibility: [
    "Open to startups, SMEs, and established companies at any stage of IP maturity",
    "Particularly useful before fundraising rounds, M&A, or major licensing deals",
  ],
  documentsRequired: [
    "Existing IP registration certificates and application records, if any",
    "Business and product/service overview",
    "Existing licensing or assignment agreements, if any",
    "Details of the suspected infringement or dispute, where applicable",
  ],
  process: [
    { title: "IP audit", description: "We review your existing and potential IP assets across trademarks, patents, copyrights, and designs." },
    { title: "Strategy & gap analysis", description: "We identify protection gaps and prioritise filings based on business goals." },
    { title: "Portfolio structuring", description: "We help organise ownership, renewals, and documentation across your IP portfolio." },
    { title: "Commercialisation support", description: "Licensing, assignment, and infringement assessment as needed." },
  ],
  estimatedTimeline: "Advisory engagements are scoped individually based on portfolio size and objectives.",
  governmentFeeNote: "Advisory engagements themselves do not carry government fees; individual filings recommended as part of the strategy will have their own applicable fees.",
  professionalFeeNote: "Professional fees depend on the scope of the audit or advisory engagement. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Treating IP filings as one-off tasks instead of an ongoing portfolio",
    "Missing renewal deadlines across multiple registrations",
    "Entering licensing or assignment deals without clear IP ownership documentation",
    "Delayed response to infringement, weakening your legal position",
  ],
  whyPulsarIP: [
    "Portfolio-level thinking rather than isolated, one-off filings",
    "Practical, business-first advisory rather than generic legal theory",
    "Support across the full IP lifecycle — from audit to enforcement",
  ],
  faqs: [
    { question: "What is an IP audit?", answer: "An IP audit is a structured review of a business's existing and potential intellectual property assets to identify what is protected, what is at risk, and where gaps exist." },
    { question: "Do startups need an IP strategy before fundraising?", answer: "Investors often review IP ownership and protection status during due diligence. Having a clear, documented IP position can support a smoother fundraising process." },
    { question: "What should I do if I receive a cease-and-desist notice?", answer: "Do not ignore it, and avoid responding without professional guidance. Consult an advisor to assess the claim and determine an appropriate response." },
  ],
  relatedServices: [
    { label: "Trademark Services", href: "/services/trademark" },
    { label: "Patent Services", href: "/services/patents" },
    { label: "Legal Documentation", href: "/services/legal-documentation" },
  ],
  subServices: [
    { title: "IP Audit", description: "Comprehensive review of existing and potential IP assets." },
    { title: "IP Strategy", description: "Prioritised roadmap for protecting business-critical IP." },
    { title: "IP Portfolio Management", description: "Ongoing tracking of registrations, renewals, and ownership." },
    { title: "Licensing & Commercialisation", description: "Structuring deals to monetise IP assets." },
    { title: "Assignment Agreements", description: "Documenting transfer of IP ownership between parties." },
    { title: "Infringement Assessment", description: "Evaluating potential infringement of your or a third party's IP." },
    { title: "Cease-and-Desist Support", description: "Guidance on responding to or issuing cease-and-desist notices." },
    { title: "Startup IP Advisory", description: "Founder-focused guidance on building an IP-aware business from day one." },
  ],
};
