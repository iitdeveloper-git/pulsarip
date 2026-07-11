export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface RelatedService {
  label: string;
  href: string;
}

export interface ServiceContent {
  slug: string;
  category: "Intellectual Property" | "Business Registration" | "Legal Documentation" | "Startup & Corporate Advisory";
  title: string;
  shortTitle: string;
  metaDescription: string;
  summary: string;
  whoNeedsThis: string[];
  benefits: string[];
  eligibility: string[];
  documentsRequired: string[];
  process: ProcessStep[];
  estimatedTimeline: string;
  governmentFeeNote: string;
  professionalFeeNote: string;
  commonRisks: string[];
  whyPulsarIP: string[];
  faqs: FaqItem[];
  relatedServices: RelatedService[];
  subServices?: { title: string; description: string }[];
}

export interface BlogAuthor {
  name: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  metaDescription: string;
  author: BlogAuthor;
  reviewer?: BlogAuthor;
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  isDraft: boolean;
  faqs?: FaqItem[];
  body: string[];
}

export interface IndustryContent {
  slug: string;
  name: string;
  description: string;
  relevantServices: RelatedService[];
}
