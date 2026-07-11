import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";
import { blogPosts, blogCategories } from "@/content/blog/posts";
import { InsightsBrowser } from "./insights-browser";

const path = "/insights";

export const metadata: Metadata = buildMetadata({
  title: "Insights — IP & Legal Guides for Startups and Businesses",
  description: "Articles on trademark, patent, copyright, and startup legal essentials, written to help founders and businesses understand IP protection.",
  path,
});

export default function InsightsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Insights", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white pb-10">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">Insights</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Practical, plain-English guides on trademarks, patents, copyright, and startup legal essentials.
        </p>
        <p className="mt-4 max-w-2xl text-sm text-muted">
          Articles marked <span className="font-semibold text-gold-700">Draft</span> are outlines pending
          review by a qualified legal professional before being treated as final guidance.
        </p>
      </Section>
      <Section className="pt-0">
        <InsightsBrowser posts={blogPosts} categories={blogCategories} />
      </Section>
    </>
  );
}
