import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, contactPageJsonLd } from "@/lib/seo/jsonld";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { siteConfig, telHref, mailHref, whatsappHref } from "@/config/site";

const path = "/contact";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Book a Consultation",
  description: "Get in touch with PulsarIP to book a consultation on trademark, patent, copyright, business registration, or legal documentation services.",
  path,
});

export default function ContactPage() {
  const tel = telHref();
  const mail = mailHref();
  const wa = whatsappHref();

  const contactItems = [
    mail && { icon: Mail, label: "Email", value: siteConfig.email, href: mail },
    tel && { icon: Phone, label: "Phone", value: siteConfig.phone, href: tel },
    wa && { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: wa },
  ].filter(Boolean) as { icon: typeof Mail; label: string; value: string; href: string }[];

  return (
    <>
      <Breadcrumb items={[{ name: "Contact", path }]} />
      <Section className="bg-gradient-to-b from-navy-50 to-white">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">Book a Consultation</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Tell us about your requirement and our team will get back to you to discuss the right next step.
        </p>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            {contactItems.length > 0 ? (
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="focus-ring flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card hover:shadow-card-hover">
                    <item.icon className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                      <p className="text-sm text-muted">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="rounded-xl2 border border-navy-100 bg-navy-50 p-5 text-sm text-muted">
                Contact details are being finalised. Please use the consultation form and we&apos;ll get back to you.
              </p>
            )}

            <div className="flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card">
              <MapPin className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy-900">Office Address</p>
                <p className="text-sm text-muted">{siteConfig.address || "To be announced."}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card">
              <Clock className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy-900">Business Hours</p>
                <p className="text-sm text-muted">{siteConfig.businessHours || "To be announced."}</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl2 border border-navy-100 bg-white p-6 shadow-card sm:p-8">
            <ConsultationForm />
          </div>
        </div>
      </Section>

      <script {...jsonLdScriptProps(contactPageJsonLd())} />
    </>
  );
}
