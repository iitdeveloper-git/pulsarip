import type { Metadata } from "next";
import { Building2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section, SectionHeading } from "@/components/ui/section";
import { ServiceCard } from "@/components/sections/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { businessRegistrationServices } from "@/content/services";

const path = "/services/business-registration";

export const metadata: Metadata = buildMetadata({
  title: "Business Registration Services",
  description:
    "Company, LLP, One Person Company, Proprietorship, MSME/Udyam, Import Export Code, and Startup India registration services.",
  path,
});

export default function BusinessRegistrationPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Services", path: "/services" }, { name: "Business Registration", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
            <Building2 className="h-5 w-5" aria-hidden />
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Business Registration Services
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Choose the right legal structure and registrations for your business, with guidance at every step.
        </p>
      </Section>
      <Section>
        <SectionHeading title="Explore registration services" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessRegistrationServices.map((s) => (
            <ServiceCard key={s.slug} href={`/services/business-registration/${s.slug}`} title={s.shortTitle} description={s.summary} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
