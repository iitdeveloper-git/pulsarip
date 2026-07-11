import { CheckCircle2, Circle, FileText, ShieldAlert } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section, SectionHeading } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/button";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBanner } from "@/components/sections/cta-banner";
import { jsonLdScriptProps, faqJsonLd, serviceJsonLd } from "@/lib/seo/jsonld";
import type { ServiceContent } from "@/types";

export function ServicePageTemplate({ content, path }: { content: ServiceContent; path: string }) {
  return (
    <>
      <Breadcrumb items={[{ name: content.category, path: "/services" }, { name: content.shortTitle, path }]} />

      <Section className="bg-gradient-to-b from-navy-50 to-white pb-14 pt-14 sm:pb-16">
        <Badge>{content.category}</Badge>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">{content.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{content.summary}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contact" variant="gold" size="lg">
            Book a Consultation
          </LinkButton>
          <LinkButton href="/services" variant="outline" size="lg">
            View All Services
          </LinkButton>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Who needs this service</h2>
            <ul className="mt-4 space-y-3">
              {content.whoNeedsThis.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy-900">Key benefits</h2>
            <ul className="mt-4 space-y-3">
              {content.benefits.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {content.subServices && (
        <Section className="bg-navy-50/60 pt-0">
          <SectionHeading title="What's covered under this service" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.subServices.map((sub) => (
              <div key={sub.title} className="rounded-xl2 border border-navy-100 bg-white p-6 shadow-card">
                <h3 className="text-base font-semibold text-navy-900">{sub.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{sub.description}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-xl font-bold text-navy-900">Eligibility / applicability</h2>
            <ul className="mt-4 space-y-3">
              {content.eligibility.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <Circle className="mt-1.5 h-2 w-2 flex-shrink-0 fill-current text-gold-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy-900">Documents required</h2>
            <ul className="mt-4 space-y-3">
              {content.documentsRequired.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <FileText className="mt-0.5 h-4 w-4 flex-shrink-0 text-navy-500" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <SectionHeading title="Step-by-step process" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.process.map((step, index) => (
            <li key={step.title} className="rounded-xl2 border border-navy-100 bg-white p-6 shadow-card">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl2 border border-navy-100 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">Estimated Timeline</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{content.estimatedTimeline}</p>
          </div>
          <div className="rounded-xl2 border border-navy-100 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">Government Fees</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{content.governmentFeeNote}</p>
          </div>
          <div className="rounded-xl2 border border-navy-100 p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-navy-500">Professional Fees</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{content.professionalFeeNote}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-navy-50/60">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="flex items-center gap-2 text-xl font-bold text-navy-900">
              <ShieldAlert className="h-5 w-5 text-gold-600" aria-hidden />
              Common risks and mistakes
            </h2>
            <ul className="mt-4 space-y-3">
              {content.commonRisks.map((item) => (
                <li key={item} className="text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-navy-900">Why choose PulsarIP</h2>
            <ul className="mt-4 space-y-3">
              {content.whyPulsarIP.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-muted">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-navy-600" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Frequently asked questions" />
        <div className="mt-10">
          <FaqAccordion items={content.faqs} />
        </div>
      </Section>

      {content.relatedServices.length > 0 && (
        <Section className="bg-navy-50/60">
          <SectionHeading title="Related services" />
          <div className="mt-8 flex flex-wrap gap-3">
            {content.relatedServices.map((service) => (
              <LinkButton key={service.href} href={service.href} variant="outline" size="sm">
                {service.label}
              </LinkButton>
            ))}
          </div>
        </Section>
      )}

      <CtaBanner
        title={`Get expert guidance on ${content.shortTitle}`}
        description="Talk to an advisor about your specific requirement — no unrealistic promises, just a clear path forward."
      />

      <Section className="py-10">
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-muted">
          This page is for general informational purposes only and does not constitute legal advice.
          Eligibility, documentation, timelines, government fees, and outcomes depend on the applicable
          authority and the specific facts of your matter. PulsarIP does not guarantee approval, registration,
          or any specific outcome. Please consult a qualified professional before acting on this information.
        </p>
      </Section>

      <script {...jsonLdScriptProps(faqJsonLd(content.faqs))} />
      <script {...jsonLdScriptProps(serviceJsonLd({ name: content.title, description: content.metaDescription, path }))} />
    </>
  );
}
