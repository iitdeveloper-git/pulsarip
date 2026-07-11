import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, CalendarDays } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, articleJsonLd, faqJsonLd } from "@/lib/seo/jsonld";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ArticleCard } from "@/components/sections/article-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { blogPosts, getPostBySlug } from "@/content/blog/posts";

type PageParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return buildMetadata({ title: "Article not found", description: "This article could not be found.", path: `/insights/${slug}`, noIndex: true });
  return buildMetadata({
    title: post.title,
    description: post.metaDescription,
    path: `/insights/${post.slug}`,
    noIndex: post.isDraft,
  });
}

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  const path = `/insights/${post.slug}`;

  return (
    <>
      <Breadcrumb items={[{ name: "Insights", path: "/insights" }, { name: post.title, path }]} />

      <Section className="bg-gradient-to-b from-navy-50 to-white pb-10">
        <div className="flex items-center gap-2">
          <Badge>{post.category}</Badge>
          {post.isDraft && <Badge className="bg-gold-100 text-gold-700">Draft — Pending Legal Review</Badge>}
        </div>
        <h1 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">{post.title}</h1>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>By {post.author.name}</span>
          {post.reviewer && <span>Reviewed by {post.reviewer.name}</span>}
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-4 w-4" aria-hidden />
            Updated {post.updatedAt}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden />
            {post.readingTimeMinutes} min read
          </span>
        </div>
      </Section>

      <Section className="pt-0">
        {post.isDraft && (
          <div className="mb-8 rounded-xl2 border border-gold-300 bg-gold-50 p-5 text-sm leading-relaxed text-navy-800">
            This article is a draft outline prepared for structure and SEO planning. It is pending review by
            a qualified legal professional and should not be treated as final legal guidance until reviewed
            and approved.
          </div>
        )}
        <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-navy-900">
          {post.body.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-navy-900">Frequently asked questions</h2>
            <div className="mt-6">
              <FaqAccordion items={post.faqs} />
            </div>
          </div>
        )}
      </Section>

      {related.length > 0 && (
        <Section className="bg-navy-50/60">
          <h2 className="text-xl font-bold text-navy-900">Related articles</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ArticleCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}

      <CtaBanner />

      <script
        {...jsonLdScriptProps(
          articleJsonLd({
            title: post.title,
            description: post.metaDescription,
            path,
            authorName: post.author.name,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
          }),
        )}
      />
      {post.faqs && <script {...jsonLdScriptProps(faqJsonLd(post.faqs))} />}
    </>
  );
}
