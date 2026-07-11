import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section, SectionHeading } from "@/components/ui/section";
import { ServiceCard } from "@/components/sections/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ipServices } from "@/content/services";

const path = "/services/intellectual-property";

export const metadata: Metadata = buildMetadata({
  title: "Intellectual Property Services",
  description:
    "Trademark, patent, copyright, design registration, and IP advisory services to protect your ideas, brand, and innovations.",
  path,
});

export default function IntellectualPropertyPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Services", path: "/services" }, { name: "Intellectual Property", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
            <Lightbulb className="h-5 w-5" aria-hidden />
          </span>
        </div>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Intellectual Property Services
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Your brand name, invention, creative work, and product design are business assets. We help you
          search, file, register, and protect them.
        </p>
      </Section>
      <Section>
        <SectionHeading title="Explore IP services" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ipServices.map((s) => (
            <ServiceCard key={s.slug} href={`/services/${s.slug}`} title={s.shortTitle} description={s.summary} />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
