import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { designRegistration } from "@/content/services/design-registration";

const path = "/services/design-registration";

export const metadata: Metadata = buildMetadata({
  title: designRegistration.title,
  description: designRegistration.metaDescription,
  path,
});

export default function DesignRegistrationPage() {
  return <ServicePageTemplate content={designRegistration} path={path} />;
}
