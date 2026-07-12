import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle, Scale, Globe } from "lucide-react";
import { buildMetadata } from "@/lib/seo/metadata";
import { jsonLdScriptProps, contactPageJsonLd } from "@/lib/seo/jsonld";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Section } from "@/components/ui/section";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { siteConfig, telHref, whatsappHref } from "@/config/site";

const path = "/contact";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us — Book a Consultation",
  description: "Get in touch with PulsarIP to book a consultation on trademark, patent, copyright, business registration, or legal documentation services.",
  path,
});

const practiceLocations = [
  "Rajasthan High Court, Jodhpur",
  "District & Sessions Courts",
  "Consumer Commissions",
  "Tribunals & Authorities",
  "PAN India Advisory & Corporate Legal Services",
];

export default function ContactPage() {
  const tel = telHref();
  const wa = whatsappHref();

  const contactItems = [
    tel && { icon: Phone, label: "Phone", value: siteConfig.phone, href: tel },
    wa && { icon: MessageCircle, label: "WhatsApp", value: "Chat with us on WhatsApp", href: wa },
    siteConfig.email && { icon: Mail, label: "General Enquiries", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    siteConfig.enquiryEmail && { icon: Mail, label: "Services & Consultation", value: siteConfig.enquiryEmail, href: `mailto:${siteConfig.enquiryEmail}` },
    siteConfig.supportEmail && { icon: Mail, label: "Support", value: siteConfig.supportEmail, href: `mailto:${siteConfig.supportEmail}` },
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
          <div className="space-y-4">

            {/* Contact links — only shown when env vars are set */}
            {contactItems.length > 0 && (
              <div className="space-y-3">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="focus-ring flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card hover:shadow-card-hover"
                  >
                    <item.icon className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                      <p className="text-sm text-muted">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Office Addresses */}
            {(siteConfig.address || siteConfig.correspondenceAddress) && (
              <div className="flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card">
                <MapPin className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
                <div className="space-y-3">
                  {siteConfig.address && (
                    <div>
                      <p className="text-sm font-semibold text-navy-900">Registered Office Address</p>
                      <p className="text-sm text-muted">{siteConfig.address}</p>
                    </div>
                  )}
                  {siteConfig.correspondenceAddress && (
                    <div>
                      <p className="text-sm font-semibold text-navy-900">Correspondence Address</p>
                      <p className="text-sm text-muted">{siteConfig.correspondenceAddress}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Business Hours — only shown when set */}
            {siteConfig.businessHours && (
              <div className="flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card">
                <Clock className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-navy-900">Office Hours</p>
                  <p className="text-sm text-muted">{siteConfig.businessHours}</p>
                </div>
              </div>
            )}

            {/* Practice Locations */}
            <div className="flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card">
              <Scale className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy-900">Practice Locations</p>
                <ul className="mt-1 space-y-1">
                  {practiceLocations.map((loc) => (
                    <li key={loc} className="text-sm text-muted">{loc}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Online Consultation */}
            <div className="flex items-start gap-3 rounded-xl2 border border-navy-100 bg-white p-5 shadow-card">
              <Globe className="mt-0.5 h-5 w-5 text-navy-700" aria-hidden />
              <div>
                <p className="text-sm font-semibold text-navy-900">Online Consultation</p>
                <p className="text-sm text-muted">Google Meet &amp; Zoom — available for clients across India</p>
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
