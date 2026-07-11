export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  items?: NavLink[];
}

export const mainNav: NavGroup[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Intellectual Property",
    href: "/services/intellectual-property",
    items: [
      { label: "Trademark", href: "/services/trademark", description: "Search, filing, protection & renewal" },
      { label: "Patent", href: "/services/patents", description: "Patentability search, drafting & filing" },
      { label: "Copyright", href: "/services/copyright", description: "Registration for creative & software works" },
      { label: "Design Registration", href: "/services/design-registration", description: "Protect product designs" },
      { label: "IP Advisory", href: "/services/ip-advisory", description: "Strategy, audits & portfolio management" },
    ],
  },
  {
    label: "Business Services",
    href: "/services/business-registration",
    items: [
      { label: "Company Registration", href: "/services/business-registration/company-registration" },
      { label: "LLP Registration", href: "/services/business-registration/llp-registration" },
      { label: "One Person Company", href: "/services/business-registration/opc-registration" },
      { label: "Proprietorship", href: "/services/business-registration/proprietorship-registration" },
      { label: "MSME / Udyam", href: "/services/business-registration/msme-udyam-registration" },
      { label: "Import Export Code", href: "/services/business-registration/import-export-code" },
      { label: "Startup India", href: "/services/business-registration/startup-india-registration" },
    ],
  },
  { label: "Legal Documentation", href: "/services/legal-documentation" },
  { label: "Startups", href: "/startups" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavLink[] = [
  { label: "Trademark Registration", href: "/services/trademark" },
  { label: "Patent Filing", href: "/services/patents" },
  { label: "Copyright Registration", href: "/services/copyright" },
  { label: "Design Registration", href: "/services/design-registration" },
  { label: "IP Advisory", href: "/services/ip-advisory" },
];

export const footerBusinessLinks: NavLink[] = [
  { label: "Company Registration", href: "/services/business-registration/company-registration" },
  { label: "LLP Registration", href: "/services/business-registration/llp-registration" },
  { label: "MSME / Udyam Registration", href: "/services/business-registration/msme-udyam-registration" },
  { label: "Import Export Code", href: "/services/business-registration/import-export-code" },
  { label: "Startup India Registration", href: "/services/business-registration/startup-india-registration" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Legal Disclaimer", href: "/legal-disclaimer" },
  { label: "Accessibility Statement", href: "/accessibility" },
];

export const footerUsefulLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Services Overview", href: "/services" },
  { label: "Startups", href: "/startups" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Sitemap", href: "/sitemap-page" },
  { label: "Contact", href: "/contact" },
];
