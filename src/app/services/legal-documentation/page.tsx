import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { legalDocumentation } from "@/content/services/legal-documentation";

const path = "/services/legal-documentation";

export const metadata: Metadata = buildMetadata({
  title: legalDocumentation.title,
  description: legalDocumentation.metaDescription,
  path,
});

export default function LegalDocumentationPage() {
  return <ServicePageTemplate content={legalDocumentation} path={path} />;
}
