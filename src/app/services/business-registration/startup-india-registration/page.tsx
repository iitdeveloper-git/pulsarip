import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { startupIndiaRegistration } from "@/content/services/startup-india-registration";

const path = "/services/business-registration/startup-india-registration";

export const metadata: Metadata = buildMetadata({
  title: startupIndiaRegistration.title,
  description: startupIndiaRegistration.metaDescription,
  path,
});

export default function StartupIndiaRegistrationPage() {
  return <ServicePageTemplate content={startupIndiaRegistration} path={path} />;
}
