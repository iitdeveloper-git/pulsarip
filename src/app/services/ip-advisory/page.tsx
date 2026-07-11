import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { ipAdvisory } from "@/content/services/ip-advisory";

const path = "/services/ip-advisory";

export const metadata: Metadata = buildMetadata({
  title: ipAdvisory.title,
  description: ipAdvisory.metaDescription,
  path,
});

export default function IpAdvisoryPage() {
  return <ServicePageTemplate content={ipAdvisory} path={path} />;
}
