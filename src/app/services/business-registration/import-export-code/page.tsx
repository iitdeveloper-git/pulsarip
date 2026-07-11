import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { importExportCode } from "@/content/services/import-export-code";

const path = "/services/business-registration/import-export-code";

export const metadata: Metadata = buildMetadata({
  title: importExportCode.title,
  description: importExportCode.metaDescription,
  path,
});

export default function ImportExportCodePage() {
  return <ServicePageTemplate content={importExportCode} path={path} />;
}
