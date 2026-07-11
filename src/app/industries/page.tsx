import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { LinkButton } from "@/components/ui/button";
import { industries } from "@/content/industries";

const path = "/industries";

export const metadata: Metadata = buildMetadata({
  title: "Industries We Serve",
  description: "IP protection and business registration services tailored to technology, e-commerce, manufacturing, consumer brands, and more.",
  path,
});

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Industries", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">Industries We Serve</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Different industries face different IP and legal priorities. Here&apos;s how PulsarIP&apos;s services map to
          the sectors we work with most.
        </p>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div key={industry.slug} className="rounded-xl2 border border-navy-100 bg-white p-6 shadow-card">
              <h2 className="text-base font-semibold text-navy-900">{industry.name}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{industry.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {industry.relevantServices.map((service) => (
                  <LinkButton key={service.href} href={service.href} variant="outline" size="sm">
                    {service.label}
                  </LinkButton>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
