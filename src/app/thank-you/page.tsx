import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { Section } from "@/components/ui/section";
import { LinkButton } from "@/components/ui/button";
import { whatsappHref } from "@/config/site";

export const metadata: Metadata = buildMetadata({
  title: "Thank You",
  description: "Thank you for contacting PulsarIP. We'll be in touch shortly.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  const wa = whatsappHref();

  return (
    <Section className="flex flex-col items-center py-24 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50">
        <CheckCircle2 className="h-9 w-9 text-green-600" aria-hidden />
      </span>
      <h1 className="mt-6 text-3xl font-bold text-navy-900 sm:text-4xl">Thank you — we&apos;ve received your enquiry</h1>
      <p className="mt-4 max-w-md text-muted">
        A member of our team will review your requirement and get back to you shortly. In the meantime, feel
        free to explore our services or reach out directly on WhatsApp.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <LinkButton href="/services" variant="outline" size="lg">
          Explore Services
        </LinkButton>
        {wa && (
          <LinkButton href={wa} variant="whatsapp" size="lg">
            Chat on WhatsApp
          </LinkButton>
        )}
        <LinkButton href="/" variant="ghost" size="lg">
          Back to Home
        </LinkButton>
      </div>
    </Section>
  );
}
