import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { llpRegistration } from "@/content/services/llp-registration";

const path = "/services/business-registration/llp-registration";

export const metadata: Metadata = buildMetadata({
  title: llpRegistration.title,
  description: llpRegistration.metaDescription,
  path,
});

export default function LlpRegistrationPage() {
  return <ServicePageTemplate content={llpRegistration} path={path} />;
}
