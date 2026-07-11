import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/types";

const url = (path = "/") => new URL(path, siteConfig.domain).toString();

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url("/")}#organization`,
    name: siteConfig.name,
    url: url("/"),
    logo: url("/logo.png"),
    description: siteConfig.description,
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
  };
}

export function legalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${url("/")}#legalservice`,
    name: siteConfig.name,
    url: url("/"),
    description: siteConfig.description,
    areaServed: "IN",
    ...(siteConfig.address ? { address: { "@type": "PostalAddress", streetAddress: siteConfig.address } } : {}),
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    priceRange: "Request a quote",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url("/")}#website`,
    url: url("/"),
    name: siteConfig.name,
    publisher: { "@id": `${url("/")}#organization` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: url(item.path),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceJsonLd(input: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: input.name,
    name: input.name,
    description: input.description,
    url: url(input.path),
    provider: { "@id": `${url("/")}#organization` },
    areaServed: "IN",
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  authorName: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: url(input.path),
    author: { "@type": "Person", name: input.authorName },
    publisher: { "@id": `${url("/")}#organization` },
    datePublished: input.publishedAt,
    dateModified: input.updatedAt,
    mainEntityOfPage: url(input.path),
  };
}

export function contactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: url("/contact"),
    about: { "@id": `${url("/")}#organization` },
  };
}

export function jsonLdScriptProps(data: object) {
  return { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify(data) } };
}
