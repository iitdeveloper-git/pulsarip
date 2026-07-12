import type { Metadata } from "next";
import { Target, Eye, HeartHandshake, Compass, Scale, Globe, Phone, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps } from "@/lib/seo/jsonld";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section, SectionHeading } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { siteConfig, telHref, whatsappHref } from "@/config/site";

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

const practiceLocations = [
  "Rajasthan High Court, Jodhpur",
  "District & Sessions Courts",
  "Consumer Commissions",
  "Tribunals & Authorities",
  "PAN India Advisory & Corporate Legal Services",
];

const consultationTypes = [
  { label: "In-Person", detail: "At our Jodhpur office" },
  { label: "Online", detail: "Google Meet / Zoom" },
  { label: "Phone", detail: "Direct call consultation" },
];

// Founder JSON-LD Person schema
function founderJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.domain}#founder`,
    name: siteConfig.founderName || "Advocate Lucky Singh",
    jobTitle: "Founder & Advocate",
    worksFor: { "@id": `${siteConfig.domain}#organization` },
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressRegion: "Rajasthan", addressCountry: "IN" } } : {}),
  };
}

export default function AboutPage() {
  const tel = telHref();
  const wa = whatsappHref("Hi PulsarIP, I'd like to book a consultation with Advocate Lucky Singh.");

  return (
    <>
      <Breadcrumb items={[{ name: "About", path }]} />

      {/* Hero */}
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">About PulsarIP</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          PulsarIP is an intellectual-property and corporate legal-services brand built to help startups,
          founders, creators, inventors, and businesses protect what they&apos;ve built — their brand, their
          inventions, their creative work, and their business structure.
        </p>
      </Section>

      {/* Founder Section */}
      <Section className="pt-0">
        <SectionHeading eyebrow="Leadership" title="Meet our founder" />
        <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white text-3xl font-bold">
            LS
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-navy-900">Advocate Lucky Singh</h2>
            <p className="mt-1 text-sm font-medium text-gold-600">Founder &amp; Lead Advocate</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">
              Lucky Singh is the Founder of PulsarIP and an Advocate practicing before the High Court of Rajasthan. He specializes in intellectual property law, with experience in trademark prosecution, copyright protection, IP litigation, commercial disputes, and intellectual property advisory. He holds an LL.M. in International Law from South Asian University, New Delhi, and an LL.B. from Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi. His academic research focused on intellectual property rights and technology transfer. Lucky has also completed specialized intellectual property certification programs through the World Intellectual Property Organization (WIPO) and the Korea Intellectual Property Office (KIPO) IP PANORAMA initiative. Through PulsarIP, he is committed to helping businesses protect, manage, and commercialize their intellectual property assets with practical, business-focused legal solutions.
            </p>

            {/* Contact shortcuts */}
            <div className="mt-6 flex flex-wrap gap-3">
              {tel && (
                <a href={tel} className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 shadow-sm hover:bg-navy-50">
                  <Phone className="h-4 w-4" aria-hidden /> Call directly
                </a>
              )}
              {wa && (
                <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-medium text-navy-700 shadow-sm hover:bg-navy-50">
                  WhatsApp
                </a>
              )}
            </div>

            {/* Practice locations */}
            <div className="mt-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                <Scale className="h-4 w-4 text-navy-700" aria-hidden />
                Practice Locations
              </div>
              <ul className="mt-2 flex flex-wrap gap-2">
                {practiceLocations.map((loc) => (
                  <li key={loc} className="rounded-full border border-navy-100 bg-white px-3 py-1 text-xs text-navy-700">
                    {loc}
                  </li>
                ))}
              </ul>
            </div>

            {/* Consultation types */}
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-navy-900">
                <Globe className="h-4 w-4 text-navy-700" aria-hidden />
                Consultation Available By
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                {consultationTypes.map((c) => (
                  <div key={c.label} className="rounded-lg border border-navy-100 bg-white px-4 py-2 text-sm shadow-sm">
                    <span className="font-medium text-navy-900">{c.label}</span>
                    <span className="ml-1 text-muted">— {c.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Office addresses */}
            {(siteConfig.address || siteConfig.correspondenceAddress) && (
              <div className="mt-6 space-y-3 text-sm text-muted">
                {siteConfig.address && (
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" aria-hidden />
                    <span><strong>Registered Office:</strong> {siteConfig.address}</span>
                  </div>
                )}
                {siteConfig.correspondenceAddress && (
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-navy-700" aria-hidden />
                    <span><strong>Correspondence Address:</strong> {siteConfig.correspondenceAddress}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section className="bg-navy-50/60">
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-xl2 border border-navy-100 bg-white p-8">
            <Eye className="h-7 w-7 text-gold-600" aria-hidden />
            <h2 className="mt-4 text-xl font-bold text-navy-900">Our Vision</h2>
            <p className="mt-3 leading-relaxed text-muted">
              To be a trusted partner for businesses across India in protecting their ideas and building a
              strong legal and intellectual-property foundation.
            </p>
          </div>
          <div className="rounded-xl2 border border-navy-100 bg-white p-8">
            <Target className="h-7 w-7 text-gold-600" aria-hidden />
            <h2 className="mt-4 text-xl font-bold text-navy-900">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted">
              To make intellectual-property protection and essential legal processes accessible, clear, and
              manageable for startups, creators, and businesses of every size.
            </p>
          </div>
        </div>
      </Section>

      {/* Why PulsarIP */}
      <Section>
        <SectionHeading eyebrow="Why PulsarIP Exists" title="Ideas deserve protection from day one" />
        <p className="mt-6 max-w-3xl leading-relaxed text-muted">
          Too often, brand names go unprotected, inventions go undocumented, and businesses operate without
          the legal documentation that protects their relationships and assets — until a dispute or
          opportunity forces the issue. PulsarIP exists to change that: to make IP protection and essential
          legal processes a proactive part of how businesses operate, not an afterthought.
        </p>
      </Section>

      {/* Values */}
      <Section className="bg-navy-50/60">
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

      {/* Approach */}
      <Section>
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

      {/* Industries */}
      <Section className="bg-navy-50/60">
        <SectionHeading title="Industries we serve" align="center" />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span key={industry} className="rounded-full border border-navy-100 bg-white px-4 py-2 text-sm text-navy-700 shadow-card">
              {industry}
            </span>
          ))}
        </div>
      </Section>

      {/* Disclaimer */}
      <Section>
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

      <script {...jsonLdScriptProps(founderJsonLd())} />
    </>
  );
}
