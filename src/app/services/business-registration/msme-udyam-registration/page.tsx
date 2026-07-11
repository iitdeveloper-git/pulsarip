import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServicePageTemplate } from "@/components/sections/service-page-template";
import { msmeUdyamRegistration } from "@/content/services/msme-udyam-registration";

const path = "/services/business-registration/msme-udyam-registration";

export const metadata: Metadata = buildMetadata({
  title: msmeUdyamRegistration.title,
  description: msmeUdyamRegistration.metaDescription,
  path,
});

export default function MsmeUdyamRegistrationPage() {
  return <ServicePageTemplate content={msmeUdyamRegistration} path={path} />;
}
