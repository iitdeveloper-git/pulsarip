import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function buildMetadata({ title, description, path, noIndex = false }: BuildMetadataInput): Metadata {
  const url = new URL(path, siteConfig.domain).toString();
  const fullTitle = path === "/" ? title : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const siteVerificationMeta: Metadata["verification"] = {
  google: siteConfig.analytics.googleSiteVerification || undefined,
  other: siteConfig.analytics.bingSiteVerification
    ? { "msvalidate.01": siteConfig.analytics.bingSiteVerification }
    : undefined,
};
