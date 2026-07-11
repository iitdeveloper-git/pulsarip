import type { ServiceContent } from "@/types";

export const copyright: ServiceContent = {
  slug: "copyright",
  category: "Intellectual Property",
  title: "Copyright Registration Services",
  shortTitle: "Copyright",
  metaDescription:
    "Copyright registration for literary works, software and source code, artistic works, music, and audiovisual works, plus assignment and licensing support.",
  summary:
    "Copyright protects original literary, artistic, musical, and software works from the moment of creation. Registration creates an official public record of ownership that strengthens your position in licensing, assignment, and infringement matters.",
  whoNeedsThis: [
    "Software companies and developers protecting source code",
    "Writers, publishers, and content creators",
    "Designers, illustrators, and artists",
    "Musicians, composers, and audiovisual producers",
    "Businesses licensing or assigning creative or technical works",
  ],
  benefits: [
    "Official record of authorship and ownership",
    "Stronger evidentiary position in case of infringement",
    "Ability to license or assign the work commercially",
    "Added credibility during investor or partner due diligence",
  ],
  eligibility: [
    "The work must be original and fixed in a tangible or recorded form",
    "The applicant must be the author, owner, or an authorised assignee of the rights",
    "Different categories (literary, artistic, musical, software, audiovisual) have specific documentation requirements",
  ],
  documentsRequired: [
    "Copy or extract of the work (manuscript, source code, artwork, recording, etc.)",
    "Applicant identity and address proof",
    "Details of authorship and, if applicable, employer/employee or commissioning arrangement",
    "No-objection certificate from co-authors or publishers, where relevant",
    "Assignment deed, if rights are being registered in the name of an assignee",
  ],
  process: [
    { title: "Work classification", description: "We identify the correct category — literary, artistic, musical, software, or audiovisual." },
    { title: "Application preparation", description: "We prepare the statement of particulars and supporting documentation." },
    { title: "Filing", description: "The application is filed with the Copyright Office." },
    { title: "Examination & objection window", description: "The Registry reviews the application; any objections are addressed during this stage." },
    { title: "Registration", description: "Once cleared, the Copyright Office issues the registration certificate." },
  ],
  estimatedTimeline:
    "Timelines depend on the Copyright Office's processing queue and whether any objection is raised, and are not within our control.",
  governmentFeeNote: "Government fees vary by category of work and number of works being registered.",
  professionalFeeNote: "Professional fees depend on the type of work and complexity of the filing. Talk to an advisor for a scope-based quote.",
  commonRisks: [
    "Unclear chain of ownership, especially for commissioned or employee-created works",
    "Filing without addressing co-author or joint-ownership documentation",
    "Confusing copyright with trademark or patent protection",
    "Delayed registration after publication, weakening the evidentiary timeline",
  ],
  whyPulsarIP: [
    "Guidance on correctly classifying and documenting each type of work",
    "Support with assignment and licensing agreements alongside registration",
    "Practical advice for software and source-code protection",
  ],
  faqs: [
    { question: "Is copyright registration mandatory?", answer: "Copyright protection exists automatically upon creation of an original work. Registration is not mandatory but creates a valuable public record that helps in enforcement and licensing." },
    { question: "Can source code be copyrighted?", answer: "Yes, source code is typically registrable as a literary work, subject to the applicable authority's requirements." },
    { question: "Who owns the copyright in work created by an employee?", answer: "This depends on the terms of employment or engagement. Employment and IP assignment agreements should clearly address ownership to avoid disputes." },
    { question: "How long does copyright registration take?", answer: "This depends on the Copyright Office's processing timeline and whether any objection is raised during examination." },
  ],
  relatedServices: [
    { label: "IP Advisory & Protection", href: "/services/ip-advisory" },
    { label: "Legal Documentation", href: "/services/legal-documentation" },
    { label: "Trademark Services", href: "/services/trademark" },
  ],
  subServices: [
    { title: "Literary Works", description: "Books, articles, manuscripts, and written content." },
    { title: "Software & Source Code", description: "Registration of proprietary software and codebases." },
    { title: "Artistic Works", description: "Illustrations, designs, paintings, and visual works." },
    { title: "Music & Audiovisual Works", description: "Compositions, recordings, and video/film works." },
    { title: "Copyright Assignment", description: "Transferring ownership rights to another party." },
    { title: "Licensing", description: "Structuring licences for commercial use of copyrighted works." },
    { title: "Infringement Consultation", description: "Advisory support when facing or raising an infringement concern." },
  ],
};
