import type { Metadata } from "next";
import { Lightbulb, Building2, FileSignature, Rocket } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section, SectionHeading } from "@/components/ui/section";
import { ServiceCard } from "@/components/sections/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ipServices, businessRegistrationServices, legalDocumentation } from "@/content/services";

const path = "/services";

export const metadata: Metadata = buildMetadata({
  title: "Services — Intellectual Property, Business Registration & Legal Documentation",
  description:
    "Explore PulsarIP's full range of intellectual property, business registration, legal documentation, and startup advisory services.",
  path,
});

const categories = [
  {
    icon: Lightbulb,
    name: "Intellectual Property",
    description: "Trademark, patent, copyright, design, and IP advisory services to protect what makes your business unique.",
    services: ipServices.map((s) => ({ title: s.shortTitle, href: `/services/${s.slug}`, description: s.summary.slice(0, 100) + "…" })),
  },
  {
    icon: Building2,
    name: "Business Registration",
    description: "Company, LLP, OPC, proprietorship, MSME, IEC, and Startup India registration support.",
    services: businessRegistrationServices.map((s) => ({
      title: s.shortTitle,
      href: `/services/business-registration/${s.slug}`,
      description: s.summary.slice(0, 100) + "…",
    })),
  },
  {
    icon: FileSignature,
    name: "Legal Documentation",
    description: "NDAs, founders' agreements, employment and service agreements, and website legal policies.",
    services: legalDocumentation.subServices?.map((s) => ({ title: s.title, href: "/services/legal-documentation", description: s.description })) ?? [],
  },
  {
    icon: Rocket,
    name: "Startup & Corporate Advisory",
    description: "Business setup, brand protection, founder agreements, and investor-ready legal documentation for startups.",
    services: [{ title: "Startup Legal Toolkit", href: "/startups", description: "A guided path through the legal essentials every startup needs." }],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Services", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Services designed to protect ideas and empower businesses
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          From protecting your brand and inventions to registering your business and formalising legal
          relationships — explore PulsarIP&apos;s complete service categories below.
        </p>
      </Section>

      {categories.map((category) => (
        <Section key={category.name} className="border-t border-navy-100">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
              <category.icon className="h-5 w-5" aria-hidden />
            </span>
            <SectionHeading title={category.name} description={category.description} />
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.services.map((service) => (
              <ServiceCard key={service.href + service.title} href={service.href} title={service.title} description={service.description} />
            ))}
          </div>
        </Section>
      ))}

      <CtaBanner />
    </>
  );
}
