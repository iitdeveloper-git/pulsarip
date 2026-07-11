import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { copyright } from "@/content/services/copyright";

const path = "/services/copyright";

export const metadata: Metadata = buildMetadata({
  title: copyright.title,
  description: copyright.metaDescription,
  path,
});

export default function CopyrightPage() {
  return <ServicePageTemplate content={copyright} path={path} />;
}
