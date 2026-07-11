import { LinkButton } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { whatsappHref } from "@/config/site";

export function CtaBanner({
  title = "Ready to talk to an advisor?",
  description = "Share a few details about your requirement and our team will get back to you.",
  ctaHref = "/contact",
}: {
  title?: string;
  description?: string;
  ctaHref?: string;
}) {
  const wa = whatsappHref();

  return (
    <Section className="bg-navy-900">
      <div className="flex flex-col items-start justify-between gap-6 rounded-xl2 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-navy-200">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <LinkButton href={ctaHref} variant="gold" size="lg">
            Book a Consultation
          </LinkButton>
          {wa && (
            <LinkButton href={wa} variant="whatsapp" size="lg">
              Chat on WhatsApp
            </LinkButton>
          )}
        </div>
      </div>
    </Section>
  );
}
