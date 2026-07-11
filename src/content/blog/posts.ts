import type { BlogPost } from "@/types";

const author = { name: "PulsarIP Editorial Team", role: "Content Team" };

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-a-trademark",
    title: "What Is a Trademark? A Plain-English Guide",
    category: "Trademark",
    excerpt: "Understand what a trademark protects, why it matters for your brand, and how it differs from a business name.",
    metaDescription: "A plain-English guide to what a trademark is, what it protects, and why brand owners register one.",
    author,
    publishedAt: "2026-01-12",
    updatedAt: "2026-01-12",
    readingTimeMinutes: 6,
    isDraft: true,
    faqs: [
      { question: "What is a trademark?", answer: "A trademark is a sign — such as a word, logo, or symbol — used to identify and distinguish the goods or services of one business from another." },
      { question: "Is a company name automatically a trademark?", answer: "No. Registering a company name with the Registrar of Companies is separate from trademark registration, which protects the brand identity used in the market." },
    ],
    body: [
      "A trademark is one of the most fundamental tools a business has for protecting its identity in the market. At its core, a trademark is any sign — a word, phrase, logo, symbol, or combination of these — that distinguishes your goods or services from those of another business.",
      "Many founders assume that registering a company name automatically protects their brand. It does not. Company name registration and trademark registration serve different purposes and are governed by different authorities.",
      "A registered trademark gives you the exclusive right to use that mark for the goods or services it covers, and a stronger legal position if someone else tries to use a similar mark in a way that could confuse customers.",
      "This article is a draft outline pending professional legal review before publication.",
    ],
  },
  {
    slug: "provisional-vs-complete-patent-application",
    title: "Provisional vs Complete Patent Application: What's the Difference?",
    category: "Patent",
    excerpt: "A breakdown of when to file a provisional application versus a complete specification, and what each protects.",
    metaDescription: "Understand the difference between a provisional and complete patent application and when each is appropriate.",
    author,
    publishedAt: "2026-01-18",
    updatedAt: "2026-01-18",
    readingTimeMinutes: 7,
    isDraft: true,
    faqs: [
      { question: "Why file a provisional application first?", answer: "A provisional application secures an early priority date while you continue developing and testing the invention, before committing to a full complete specification." },
    ],
    body: [
      "One of the first decisions inventors face is whether to file a provisional or complete patent application. Both have a role depending on how developed your invention is.",
      "A provisional application is a shorter filing that establishes a priority date. It typically gives a fixed window — commonly twelve months — within which a complete specification must be filed to retain that priority date.",
      "A complete specification includes the full technical description and the claims that define the scope of legal protection sought. It requires more upfront detail and precision, since amendments after filing are limited.",
      "This article is a draft outline pending professional legal review before publication.",
    ],
  },
  {
    slug: "copyright-for-software-source-code",
    title: "Copyright for Software: Protecting Your Source Code",
    category: "Copyright",
    excerpt: "How copyright applies to software and source code, and what founders should know before registering.",
    metaDescription: "An overview of how copyright protection applies to software and source code in India.",
    author,
    publishedAt: "2026-01-25",
    updatedAt: "2026-01-25",
    readingTimeMinutes: 5,
    isDraft: true,
    body: [
      "Software is generally protected as a literary work under copyright law, covering the source code as written by its authors.",
      "For founders, the more pressing issue is often not whether copyright exists, but who owns it — especially when code is written by employees, contractors, or co-founders.",
      "Clear IP assignment clauses in employment and contractor agreements are essential to avoid ownership disputes down the line.",
      "This article is a draft outline pending professional legal review before publication.",
    ],
  },
  {
    slug: "why-startups-need-ip-protection",
    title: "Why Startups Need IP Protection From Day One",
    category: "Startup Legal",
    excerpt: "IP protection is often treated as an afterthought by early-stage founders. Here's why that's a costly mistake.",
    metaDescription: "Why intellectual property protection should be part of a startup's legal checklist from the earliest stage.",
    author,
    publishedAt: "2026-02-02",
    updatedAt: "2026-02-02",
    readingTimeMinutes: 6,
    isDraft: true,
    body: [
      "Early-stage founders are often focused on product and traction, with legal protection treated as something to handle 'later'. This can be a costly mistake.",
      "Brand names, product designs, and proprietary technology are all business assets from day one — and each day without protection is a day a competitor could file first.",
      "Investors also increasingly expect a clear IP position during due diligence, particularly for technology and product-led startups.",
      "This article is a draft outline pending professional legal review before publication.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogCategories = Array.from(new Set(blogPosts.map((post) => post.category)));
