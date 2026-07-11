import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Compass } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";

const path = "/about";

export const metadata: Metadata = buildMetadata({
  title: "About PulsarIP",
  description:
    "Learn about PulsarIP's mission to help startups, creators, inventors, and businesses protect intellectual property and navigate essential legal processes.",
  path,
});

const values = [
  { title: "Clarity", description: "We explain legal processes in plain language, without unnecessary jargon." },
  { title: "Integrity", description: "We do not make guarantees we cannot keep — every recommendation is honest and realistic." },
  { title: "Diligence", description: "We follow structured, repeatable processes for every filing and engagement." },
  { title: "Partnership", description: "We work alongside founders and businesses as a long-term advisory partner, not a one-time vendor." },
];

const industries = [
  "Technology and SaaS",
  "E-commerce and D2C",
  "Manufacturing",
  "Consumer brands",
  "Media and entertainment",
  "Education",
  "Healthcare",
  "Food and hospitality",
  "Export and import businesses",
  "Professional services",
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "About", path }]} />

      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">About PulsarIP</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          PulsarIP is an intellectual-property and corporate legal-services brand built to help startups,
          founders, creators, inventors, and businesses protect what they&apos;ve built — their brand, their
          inventions, their creative work, and their business structure.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl2 border border-navy-100 p-8">
            <Eye className="h-7 w-7 text-gold-600" aria-hidden />
            <h2 className="mt-4 text-xl font-bold text-navy-900">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted">
              To be a trusted partner for businesses across India in protecting their ideas and building a
              strong legal and intellectual-property foundation.
            </p>
          </div>
          <div className="rounded-xl2 border border-navy-100 p-8">
            <Target className="h-7 w-7 text-gold-600" aria-hidden />
            <h2 className="mt-4 text-xl font-bold text-navy-900">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted">
              To make intellectual-property protection and essential legal processes accessible, clear, and
              manageable for startups, creators, and businesses of every size.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <SectionHeading eyebrow="Why PulsarIP Exists" title="Ideas deserve protection from day one" />
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          Too often, brand names go unprotected, inventions go undocumented, and businesses operate without
          the legal documentation that protects their relationships and assets — until a dispute or
          opportunity forces the issue. PulsarIP exists to change that: to make IP protection and essential
          legal processes a proactive part of how businesses operate, not an afterthought.
        </p>
      </Section>

      <Section>
        <SectionHeading title="Our values" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl2 border border-navy-100 bg-white p-6 text-center shadow-card">
              <HeartHandshake className="mx-auto h-7 w-7 text-navy-700" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-navy-900">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <div className="flex items-center gap-3">
          <Compass className="h-6 w-6 text-navy-700" aria-hidden />
          <SectionHeading title="Our approach to client service" />
        </div>
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          We start every engagement by understanding your business and objectives, not just the filing you
          think you need. We explain the process, the realistic timeline, and the applicable fees upfront,
          and keep you informed at every stage — from search and drafting through to filing and prosecution.
        </p>
      </Section>

      <Section>
        <SectionHeading title="Industries we serve" align="center" />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm text-navy-700 shadow-card">
              {industry}
            </span>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <div className="rounded-xl2 border border-navy-100 bg-white p-8">
          <h2 className="text-lg font-bold text-navy-900">Professional Disclaimer</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            PulsarIP provides intellectual-property and corporate legal-services support. Information on this
            website is for general informational purposes only and does not constitute legal advice, nor
            does it create an advisor-client relationship. Specific qualifications, registrations, or bar
            memberships of individual professionals are available on request and are not asserted on this
            website unless independently verified. Please consult a qualified professional for advice
            specific to your situation.
          </p>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
