/**
 * Central place for every business detail that may not yet be confirmed by
 * the client. Nothing here is fabricated — blank values are rendered as
 * "coming soon" states or simply omitted, never shown as empty/broken UI.
 * See docs/PENDING_CLIENT_INPUTS.md for the list of blanks to fill in.
 */

const env = (key: string, fallback = "") => process.env[key]?.trim() || fallback;

export const siteConfig = {
  name: "PulsarIP",
  legalName: "PulsarIP",
  domain: env("NEXT_PUBLIC_SITE_URL", "https://pulsarip.com"),
  tagline: "Protecting Ideas. Empowering Businesses.",
  description:
    "PulsarIP helps startups, creators, inventors, and businesses protect intellectual property, register businesses, and navigate essential legal processes with clarity and confidence.",
  locale: "en-IN",
  market: "India",

  phone: env("NEXT_PUBLIC_PHONE"),
  whatsapp: env("NEXT_PUBLIC_WHATSAPP_NUMBER"),
  email: env("NEXT_PUBLIC_CONTACT_EMAIL"),
  address: env("NEXT_PUBLIC_OFFICE_ADDRESS"),
  businessHours: env("NEXT_PUBLIC_BUSINESS_HOURS"),
  founderName: env("NEXT_PUBLIC_FOUNDER_NAME", "Advocate Lucky Singh"),

  socialLinks: {
    linkedin: env("NEXT_PUBLIC_LINKEDIN_URL"),
    instagram: env("NEXT_PUBLIC_INSTAGRAM_URL"),
    facebook: env("NEXT_PUBLIC_FACEBOOK_URL"),
    youtube: env("NEXT_PUBLIC_YOUTUBE_URL"),
  },

  developer: {
    name: "IITDEVELOPER",
    url: "https://iitdeveloper.com/",
  },

  analytics: {
    gaId: env("NEXT_PUBLIC_GA_ID"),
    gtmId: env("NEXT_PUBLIC_GTM_ID"),
    clarityId: env("NEXT_PUBLIC_CLARITY_ID"),
    googleSiteVerification: env("NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION"),
    bingSiteVerification: env("NEXT_PUBLIC_BING_SITE_VERIFICATION"),
  },
} as const;

export const whatsappHref = (message = "Hi PulsarIP, I'd like to book a consultation.") =>
  siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(message)}`
    : undefined;

export const telHref = () => (siteConfig.phone ? `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` : undefined);

export const mailHref = () => (siteConfig.email ? `mailto:${siteConfig.email}` : undefined);

export type SiteConfig = typeof siteConfig;
