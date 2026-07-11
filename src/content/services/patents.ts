import type { ServiceContent } from "@/types";

export const patents: ServiceContent = {
  slug: "patents",
  category: "Intellectual Property",
  title: "Patent Search, Drafting & Filing Services",
  shortTitle: "Patent",
  metaDescription:
    "Patentability search, prior-art search, provisional and complete specification drafting, patent filing, and prosecution support for inventors and companies.",
  summary:
    "A patent protects a new invention that is novel, involves an inventive step, and is capable of industrial application. PulsarIP supports inventors, startups, and companies through patentability assessment, drafting, filing, and prosecution.",
  whoNeedsThis: [
    "Inventors and engineers with a new product, process, or technical solution",
    "Startups building proprietary technology or hardware",
    "Manufacturers developing new methods, formulations, or mechanisms",
    "Companies wanting to build a defensible patent portfolio",
    "Businesses responding to a patent examination report or opposition",
  ],
  benefits: [
    "Exclusive right to prevent others from making, using, or selling the invention without permission",
    "A valuable, transferable, and licensable business asset",
    "Stronger position during fundraising and technology partnerships",
    "Deterrent effect against copying by competitors",
  ],
  eligibility: [
    "The invention must be novel (not previously disclosed or known)",
    "It must involve an inventive step (not obvious to a person skilled in the field)",
    "It must be capable of industrial application",
    "It should not fall under categories excluded from patentability under applicable law",
  ],
  documentsRequired: [
    "Detailed description of the invention, including drawings or diagrams if available",
    "Applicant and inventor identity details",
    "Prior-art or existing solution references, if known",
    "Assignment deed (if the applicant is not the inventor)",
    "Proof of startup/small entity status, if claiming applicable fee benefits",
  ],
  process: [
    { title: "Patentability & prior-art search", description: "We assess novelty and inventive step against existing patents and public disclosures." },
    { title: "Application strategy", description: "We advise on filing a provisional or complete specification based on your development stage." },
    { title: "Specification drafting", description: "Technical and legal drafting of the patent specification and claims." },
    { title: "Filing", description: "The application is filed with the Patent Office and a filing/application number is issued." },
    { title: "Examination request & prosecution", description: "On request for examination, we help respond to office actions and examination reports." },
    { title: "Grant", description: "If the application satisfies all requirements and is unopposed, the patent is granted." },
  ],
  estimatedTimeline:
    "Patent prosecution timelines vary significantly and depend entirely on the Patent Office's examination queue, the technology area, and how the application is prosecuted. This can range from a few years to longer, and outcomes are not guaranteed.",
  governmentFeeNote: "Government fees vary by applicant category (individual, startup, small entity, or large entity) and the type of application filed.",
  professionalFeeNote: "Professional fees depend on the technical complexity of the invention and scope of drafting/prosecution work. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Public disclosure of the invention before filing, which can affect novelty",
    "Weak or overly broad claims that are difficult to defend during examination",
    "Missing the deadline to convert a provisional application to a complete specification",
    "Inadequate prior-art search leading to avoidable objections",
    "Delayed response to examination reports resulting in application abandonment",
  ],
  whyPulsarIP: [
    "Structured patentability assessment before you invest in drafting",
    "Clear explanation of provisional vs complete specification trade-offs",
    "Coordinated support through filing and prosecution stages",
    "Portfolio-level thinking for companies filing multiple applications",
  ],
  faqs: [
    { question: "What is patentability?", answer: "Patentability refers to whether an invention meets the legal requirements for a patent — novelty, inventive step, and industrial applicability — and does not fall under excluded categories." },
    { question: "What is the difference between a provisional and complete patent application?", answer: "A provisional application secures an early filing date and gives up to twelve months to file the complete specification with full technical and legal detail. A complete specification must be filed within that window to retain the priority date." },
    { question: "What is a prior-art search?", answer: "A prior-art search looks at existing patents, publications, and public disclosures to assess whether an invention is genuinely novel before filing." },
    { question: "How long does patent filing and grant take?", answer: "This depends on the Patent Office's examination timeline, the technical field, and how prosecution proceeds. Timelines and outcomes depend on the applicable authority and case facts and cannot be guaranteed." },
    { question: "Does filing a patent guarantee it will be granted?", answer: "No. Every application is examined on its merits and may face objections or opposition. We help build the strongest possible application, but grant is never guaranteed." },
  ],
  relatedServices: [
    { label: "Trademark Services", href: "/services/trademark" },
    { label: "IP Advisory & Protection", href: "/services/ip-advisory" },
    { label: "Industrial Design Registration", href: "/services/design-registration" },
  ],
  subServices: [
    { title: "Patentability Search", description: "Assessing whether your invention is likely to meet patentability criteria." },
    { title: "Prior-Art Search", description: "Comprehensive search of existing patents and publications." },
    { title: "Provisional Patent Application", description: "Securing an early priority date while development continues." },
    { title: "Complete Patent Specification", description: "Full technical and legal specification with claims." },
    { title: "Patent Drafting", description: "Precise, defensible claim and specification drafting." },
    { title: "Patent Filing", description: "End-to-end filing with the Patent Office." },
    { title: "Patent Prosecution", description: "Responding to examination reports and Office actions." },
    { title: "Patent Opposition Support", description: "Assistance responding to pre-grant or post-grant opposition." },
    { title: "Patent Portfolio Advisory", description: "Strategic guidance for companies building multiple patents." },
  ],
};
