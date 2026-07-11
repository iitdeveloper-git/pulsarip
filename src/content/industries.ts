import type { IndustryContent } from "@/types";

export const industries: IndustryContent[] = [
  {
    slug: "technology-saas",
    name: "Technology & SaaS",
    description: "Protecting software, source code, product names, and proprietary technology as you scale.",
    relevantServices: [
      { label: "Copyright for Software", href: "/services/copyright" },
      { label: "Trademark Registration", href: "/services/trademark" },
      { label: "Patent Services", href: "/services/patents" },
    ],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    description: "Brand protection, product design registration, and legal documentation for online sellers and marketplaces.",
    relevantServices: [
      { label: "Trademark Registration", href: "/services/trademark" },
      { label: "Design Registration", href: "/services/design-registration" },
      { label: "Legal Documentation", href: "/services/legal-documentation" },
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Patent, design, and trademark protection for products, processes, and manufacturing methods.",
    relevantServices: [
      { label: "Patent Services", href: "/services/patents" },
      { label: "Design Registration", href: "/services/design-registration" },
      { label: "MSME / Udyam Registration", href: "/services/business-registration/msme-udyam-registration" },
    ],
  },
  {
    slug: "consumer-brands",
    name: "Consumer Brands",
    description: "Trademark and design protection for brand identity, packaging, and product lines.",
    relevantServices: [
      { label: "Trademark Registration", href: "/services/trademark" },
      { label: "Design Registration", href: "/services/design-registration" },
      { label: "IP Advisory", href: "/services/ip-advisory" },
    ],
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    description: "Copyright registration and licensing for creative, musical, and audiovisual works.",
    relevantServices: [
      { label: "Copyright Registration", href: "/services/copyright" },
      { label: "Legal Documentation", href: "/services/legal-documentation" },
    ],
  },
  {
    slug: "education",
    name: "Education",
    description: "Protecting course content, curriculum, and brand identity for educational businesses.",
    relevantServices: [
      { label: "Copyright Registration", href: "/services/copyright" },
      { label: "Trademark Registration", href: "/services/trademark" },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "IP protection and business registration support for healthcare products, devices, and services.",
    relevantServices: [
      { label: "Patent Services", href: "/services/patents" },
      { label: "Trademark Registration", href: "/services/trademark" },
    ],
  },
  {
    slug: "food-hospitality",
    name: "Food & Hospitality",
    description: "Brand and recipe-adjacent protection, business registration, and franchise-ready documentation.",
    relevantServices: [
      { label: "Trademark Registration", href: "/services/trademark" },
      { label: "Company Registration", href: "/services/business-registration/company-registration" },
    ],
  },
  {
    slug: "export-import",
    name: "Export & Import Businesses",
    description: "IEC registration, brand protection, and cross-border trade documentation.",
    relevantServices: [
      { label: "Import Export Code", href: "/services/business-registration/import-export-code" },
      { label: "Trademark Registration", href: "/services/trademark" },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    description: "Business structuring, brand protection, and client-facing legal documentation for firms and consultancies.",
    relevantServices: [
      { label: "LLP Registration", href: "/services/business-registration/llp-registration" },
      { label: "Legal Documentation", href: "/services/legal-documentation" },
    ],
  },
];
