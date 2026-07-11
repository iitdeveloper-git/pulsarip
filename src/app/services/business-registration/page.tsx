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

const structures = [
  {
    name: "Proprietorship",
    bestFor: "Solo freelancers & small local businesses",
    liability: "Unlimited",
    minOwners: "1",
    typicalUse: "Local trade, freelancing",
    href: "/services/business-registration/proprietorship-registration",
  },
  {
    name: "One Person Company",
    bestFor: "Solo founders wanting limited liability",
    liability: "Limited",
    minOwners: "1",
    typicalUse: "Structured solo company",
    href: "/services/business-registration/opc-registration",
  },
  {
    name: "LLP",
    bestFor: "Professional firms & service businesses",
    liability: "Limited",
    minOwners: "2+",
    typicalUse: "Consultancies, agencies, professionals",
    href: "/services/business-registration/llp-registration",
  },
  {
    name: "Private Limited",
    bestFor: "Startups seeking funding or scaling",
    liability: "Limited",
    minOwners: "2+",
    typicalUse: "Venture-funded & high-growth businesses",
    href: "/services/business-registration/company-registration",
  },
];

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

      {/* Comparison Table */}
      <Section>
        <SectionHeading
          eyebrow="Which structure is right for you?"
          title="Business structure comparison"
        />
        <p className="mt-3 max-w-2xl text-sm text-muted">
          A quick comparison to help you understand which structure fits your stage and goals. Every situation
          is different — book a free consultation to get a recommendation specific to your business.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl2 border border-navy-100">
          <table className="min-w-full divide-y divide-navy-100 text-sm">
            <thead className="bg-navy-50">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-navy-900">Structure</th>
                <th className="px-5 py-3 text-left font-semibold text-navy-900">Best For</th>
                <th className="px-5 py-3 text-left font-semibold text-navy-900">Liability</th>
                <th className="px-5 py-3 text-left font-semibold text-navy-900">Min. Owners</th>
                <th className="px-5 py-3 text-left font-semibold text-navy-900">Typical Use</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-50 bg-white">
              {structures.map((s) => (
                <tr key={s.name} className="hover:bg-navy-50/40">
                  <td className="px-5 py-4 font-medium text-navy-900">
                    <a href={s.href} className="hover:underline text-navy-700">{s.name}</a>
                  </td>
                  <td className="px-5 py-4 text-muted">{s.bestFor}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      s.liability === "Limited"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}>
                      {s.liability}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted">{s.minOwners}</td>
                  <td className="px-5 py-4 text-muted">{s.typicalUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted">
          * This table is for general guidance only and does not constitute legal advice. Specific eligibility
          and requirements depend on your individual circumstances.
        </p>
      </Section>

      {/* Service Cards */}
      <Section className="bg-navy-50/60">
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
