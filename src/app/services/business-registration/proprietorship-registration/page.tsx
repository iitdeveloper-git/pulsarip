import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { proprietorshipRegistration } from "@/content/services/proprietorship-registration";

const path = "/services/business-registration/proprietorship-registration";

export const metadata: Metadata = buildMetadata({
  title: proprietorshipRegistration.title,
  description: proprietorshipRegistration.metaDescription,
  path,
});

export default function ProprietorshipRegistrationPage() {
  return <ServicePageTemplate content={proprietorshipRegistration} path={path} />;
}
