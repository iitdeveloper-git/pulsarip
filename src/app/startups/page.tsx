import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section, SectionHeading } from "@/components/ui/section";
import { ServiceCard } from "@/components/sections/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { Building2, ShieldCheck, FileSignature, Code2, Lightbulb, TrendingUp } from "lucide-react";

const path = "/startups";

export const metadata: Metadata = buildMetadata({
  title: "Legal & IP Services for Startups",
  description:
    "Business setup, brand protection, founder agreements, copyright and software protection, patent support, and investor-ready legal documentation for startups.",
  path,
});

const pillars = [
  { icon: Building2, title: "Business Setup", description: "Choose and register the right legal structure — company, LLP, or OPC — for your stage.", href: "/services/business-registration" },
  { icon: ShieldCheck, title: "Brand Protection", description: "Search and register your trademark before you scale marketing spend around it.", href: "/services/trademark" },
  { icon: FileSignature, title: "Founder Agreements", description: "Document equity, roles, and exit terms clearly before disputes can arise.", href: "/services/legal-documentation" },
  { icon: Code2, title: "Copyright & Software Protection", description: "Protect your codebase and creative assets with proper registration and assignment.", href: "/services/copyright" },
  { icon: Lightbulb, title: "Patent Support", description: "Assess and protect novel technology or product innovations.", href: "/services/patents" },
  { icon: TrendingUp, title: "IP Portfolio Strategy", description: "Build a coherent, investor-ready IP position as you grow.", href: "/services/ip-advisory" },
];

const faqs = [
  { question: "When should a startup start thinking about IP protection?", answer: "As early as possible — ideally before a brand name is publicly used or an invention is disclosed. Early protection avoids conflicts and strengthens your position later." },
  { question: "What legal documents does a startup need before fundraising?", answer: "Commonly a founders' agreement, employee/contractor agreements with IP assignment clauses, and clear documentation of any existing IP. Requirements vary by investor and deal structure." },
  { question: "Can PulsarIP support IP due diligence before a funding round?", answer: "Yes. We can review your existing IP position and help organise documentation as part of your due-diligence preparation." },
];

export default function StartupsPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Startups", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Legal and IP support built for startup timelines
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          From incorporation to fundraising, startups face a specific set of legal and IP decisions. We help
          you get the essentials right without slowing down your momentum.
        </p>
      </Section>

      <Section>
        <SectionHeading title="What startups typically need" align="center" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <ServiceCard key={pillar.title} href={pillar.href} title={pillar.title} description={pillar.description} icon={pillar.icon} />
          ))}
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <SectionHeading title="Frequently asked questions" align="center" />
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </Section>

      <CtaBanner title="Building a startup? Let's get the legal essentials right." description="Talk to an advisor about what your stage of growth actually needs." />
    </>
  );
}
