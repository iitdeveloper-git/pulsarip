import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { companyRegistration } from "@/content/services/company-registration";

const path = "/services/business-registration/company-registration";

export const metadata: Metadata = buildMetadata({
  title: companyRegistration.title,
  description: companyRegistration.metaDescription,
  path,
});

export default function CompanyRegistrationPage() {
  return <ServicePageTemplate content={companyRegistration} path={path} />;
}
