import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { patents } from "@/content/services/patents";

const path = "/services/patents";

export const metadata: Metadata = buildMetadata({
  title: patents.title,
  description: patents.metaDescription,
  path,
});

export default function PatentsPage() {
  return <ServicePageTemplate content={patents} path={path} />;
}
