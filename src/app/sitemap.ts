import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { allServices, ipServices, businessRegistrationServices } from "@/content/services";
import { blogPosts } from "@/content/blog/posts";
import { industries } from "@/content/industries";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.domain;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/services/intellectual-property",
    "/services/business-registration",
    "/startups",
    "/industries",
    "/insights",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/legal-disclaimer",
    "/accessibility",
    "/sitemap-page",
  ];

  const ipRoutes = ipServices.map((s) => `/services/${s.slug}`);
  const bizRoutes = businessRegistrationServices.map((s) => `/services/business-registration/${s.slug}`);
  const legalDocRoute = allServices.find((s) => s.slug === "legal-documentation") ? ["/services/legal-documentation"] : [];
  const blogRoutes = blogPosts.filter((p) => !p.isDraft).map((p) => `/insights/${p.slug}`);
  const industryRoutes = industries.map(() => "/industries");

  const routes = [...staticRoutes, ...ipRoutes, ...bizRoutes, ...legalDocRoute, ...blogRoutes, ...new Set(industryRoutes)];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
  }));
}
