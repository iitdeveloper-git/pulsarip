import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lightbulb, Building2, ShieldCheck, Users, Scale, Sparkles } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, faqJsonLd } from "@/lib/seo/jsonld";
import { siteConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ServiceCard } from "@/components/sections/service-card";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ArticleCard } from "@/components/sections/article-card";
import { ipServices, businessRegistrationServices } from "@/content/services";
import { blogPosts } from "@/content/blog/posts";

export const metadata: Metadata = buildMetadata({
  title: `${siteConfig.name} — Protect Your Ideas. Strengthen Your Business.`,
  description: siteConfig.description,
  path: "/",
});

const whyPoints = [
  { icon: ShieldCheck, title: "Clarity over jargon", description: "We explain every step in plain language, so you always know where your matter stands." },
  { icon: Scale, title: "Structured, process-driven approach", description: "From search to filing to prosecution, every service follows a clear, repeatable process." },
  { icon: Users, title: "Built for founders and businesses", description: "We understand startup timelines and business priorities, not just legal procedure." },
  { icon: Sparkles, title: "Honest guidance", description: "We tell you what's realistic — timelines, fees, and outcomes depend on the facts of your case, and we won't pretend otherwise." },
];

const process = [
  { title: "Share your requirement", description: "Tell us about your business, brand, or invention through the consultation form or WhatsApp." },
  { title: "Get expert guidance", description: "An advisor reviews your requirement and explains the right service, process, and next steps." },
  { title: "We handle the filing", description: "Our team prepares and files your application with the relevant authority." },
  { title: "Stay informed", description: "You receive clear updates at every stage, through to resolution." },
];

const homeFaqs = [
  { question: "What does PulsarIP do?", answer: "PulsarIP helps startups, creators, inventors, and businesses protect intellectual property — trademarks, patents, copyrights, and designs — and navigate essential business registration and legal documentation processes." },
  { question: "Who is PulsarIP for?", answer: "Startups, founders, creators, inventors, SMEs, manufacturers, exporters and importers, technology companies, agencies, and any business that needs IP protection or registration support." },
  { question: "Does PulsarIP guarantee trademark or patent approval?", answer: "No. Registration and grant decisions rest with the relevant government authority and depend on the specific facts of each case. We help build the strongest possible application, but outcomes are never guaranteed." },
  { question: "How do I get started?", answer: "Book a consultation through our contact form, call us, or message us on WhatsApp. We'll understand your requirement and recommend the right next step." },
];

export default function HomePage() {
  return (
    <>
      <div className="border-b border-navy-800 bg-navy-900 py-2.5 text-center text-xs font-medium text-navy-200 sm:text-sm">
        Protecting Ideas. Empowering Businesses. — Book a free initial consultation today.
      </div>

      <Section className="overflow-hidden bg-gradient-to-b from-navy-50 via-white to-white pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Badge className="bg-navy-900 text-white">Intellectual Property & Corporate Legal Services</Badge>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-navy-900 sm:text-5xl lg:text-[3.25rem]">
              Protect Your Ideas. <span className="text-gold-600">Strengthen Your Business.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{siteConfig.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact" variant="gold" size="lg">
                Book a Consultation
              </LinkButton>
              <LinkButton href="/services" variant="outline" size="lg">
                Explore Services
              </LinkButton>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Lightbulb, label: "Trademark, Patent & Copyright" },
                { icon: Building2, label: "Business Registration" },
                { icon: Scale, label: "Legal Documentation" },
                { icon: ShieldCheck, label: "IP Advisory & Protection" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl2 border border-navy-100 bg-white p-6 shadow-card">
                  <item.icon className="h-7 w-7 text-navy-700" aria-hidden />
                  <p className="mt-4 text-sm font-semibold text-navy-900">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-navy-100">
        <SectionHeading eyebrow="What We Do" title="Core service categories" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ServiceCard href="/services/intellectual-property" title="Intellectual Property" description="Trademark, patent, copyright, design registration, and IP advisory." icon={Lightbulb} />
          <ServiceCard href="/services/business-registration" title="Business Registration" description="Company, LLP, OPC, proprietorship, MSME, IEC, and Startup India." icon={Building2} />
          <ServiceCard href="/services/legal-documentation" title="Legal Documentation" description="NDAs, founders' agreements, and business-critical contracts." icon={Scale} />
          <ServiceCard href="/startups" title="Startup Services" description="A guided legal path for early-stage founders." icon={Sparkles} />
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <SectionHeading eyebrow="Why PulsarIP" title="Built for businesses that take their ideas seriously" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyPoints.map((point) => (
            <div key={point.title} className="rounded-xl2 border border-navy-100 bg-white p-6 shadow-card">
              <point.icon className="h-7 w-7 text-gold-600" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-navy-900">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{point.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Intellectual Property" title="Trademark, patent, copyright & design" description="Protect the assets that make your business recognisable and defensible." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ipServices.map((s) => (
            <ServiceCard key={s.slug} href={`/services/${s.slug}`} title={s.shortTitle} description={s.summary} />
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <SectionHeading eyebrow="For Startups & Businesses" title="Registration and advisory services" description="Everything you need to formalise and protect your business." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessRegistrationServices.slice(0, 6).map((s) => (
            <ServiceCard key={s.slug} href={`/services/business-registration/${s.slug}`} title={s.shortTitle} description={s.summary} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/services/business-registration" className="focus-ring inline-flex items-center gap-1 rounded font-semibold text-navy-900 hover:gap-2">
            View all business services <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="How It Works" title="A simple consultation process" align="center" />
        <div className="mt-12">
          <ProcessTimeline steps={process} />
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Insights" title="Featured articles" />
          <Link href="/insights" className="focus-ring inline-flex items-center gap-1 rounded font-semibold text-navy-900 hover:gap-2">
            View all insights <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQs" title="Frequently asked questions" align="center" />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={homeFaqs} />
        </div>
      </Section>

      <CtaBanner
        title="Protect your idea before someone else does"
        description="Book a consultation and get clear, practical guidance on your next step."
      />
      <script {...jsonLdScriptProps(faqJsonLd(homeFaqs))} />
    </>
  );
}
