import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";
import { blogPosts } from "@/content/blog/posts";
import { InsightsBrowser } from "./insights-browser";

const path = "/insights";

export const metadata: Metadata = buildMetadata({
  title: "Insights — IP & Legal Guides for Startups and Businesses",
  description: "Articles on trademark, patent, copyright, and startup legal essentials, written to help founders and businesses understand IP protection.",
  path,
});

// Only show published (non-draft) articles publicly
const publishedPosts = blogPosts.filter((p) => !p.isDraft);
const publishedCategories = Array.from(new Set(publishedPosts.map((p) => p.category)));

export default function InsightsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Insights", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white pb-10">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">Insights</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Practical, plain-English guides on trademarks, patents, copyright, and startup legal essentials.
        </p>
      </Section>
      <Section className="pt-0">
        {publishedPosts.length > 0 ? (
          <InsightsBrowser posts={publishedPosts} categories={publishedCategories} />
        ) : (
          <div className="rounded-xl2 border border-navy-100 bg-navy-50 p-10 text-center">
            <p className="text-lg font-semibold text-navy-900">Articles coming soon</p>
            <p className="mt-2 text-sm text-muted">
              We are currently reviewing and finalising our legal guides. Check back shortly.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
