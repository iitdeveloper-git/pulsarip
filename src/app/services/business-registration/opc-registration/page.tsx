import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { opcRegistration } from "@/content/services/opc-registration";

const path = "/services/business-registration/opc-registration";

export const metadata: Metadata = buildMetadata({
  title: opcRegistration.title,
  description: opcRegistration.metaDescription,
  path,
});

export default function OpcRegistrationPage() {
  return <ServicePageTemplate content={opcRegistration} path={path} />;
}
