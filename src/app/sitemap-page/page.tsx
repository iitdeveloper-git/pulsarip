import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";
import { ipServices, businessRegistrationServices } from "@/content/services";
import { blogPosts } from "@/content/blog/posts";

const path = "/sitemap-page";

export const metadata: Metadata = buildMetadata({
  title: "Sitemap",
  description: "A complete, human-readable list of all pages on the PulsarIP website.",
  path,
});

const groups: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Startups", href: "/startups" },
      { label: "Industries", href: "/industries" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Intellectual Property",
    links: ipServices.map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` })),
  },
  {
    title: "Business Registration",
    links: [
      { label: "Overview", href: "/services/business-registration" },
      ...businessRegistrationServices.map((s) => ({ label: s.shortTitle, href: `/services/business-registration/${s.slug}` })),
    ],
  },
  {
    title: "Legal & Compliance",
    links: [
      { label: "Legal Documentation", href: "/services/legal-documentation" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Legal Disclaimer", href: "/legal-disclaimer" },
      { label: "Accessibility Statement", href: "/accessibility" },
    ],
  },
  {
    title: "Insights",
    links: blogPosts.map((post) => ({ label: post.title, href: `/insights/${post.slug}` })),
  },
];

export default function SitemapPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Sitemap", path }]} />
      <Section>
        <h1 className="text-3xl font-bold text-navy-900 sm:text-4xl">Sitemap</h1>
        <p className="mt-4 max-w-2xl text-muted">A complete list of pages on this website.</p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-navy-500">{group.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="focus-ring rounded text-sm text-muted hover:text-navy-900">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
