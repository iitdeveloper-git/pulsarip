import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { trademark } from "@/content/services/trademark";

const path = "/services/trademark";

export const metadata: Metadata = buildMetadata({
  title: trademark.title,
  description: trademark.metaDescription,
  path,
});

export default function TrademarkPage() {
  return <ServicePageTemplate content={trademark} path={path} />;
}
