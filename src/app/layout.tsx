import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { buildMetadata, siteVerificationMeta } from "@/lib/seo/metadata";
import { jsonLdScriptProps, organizationJsonLd, legalServiceJsonLd, websiteJsonLd } from "@/lib/seo/jsonld";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-button";
import { MobileStickyCallBar } from "@/components/layout/mobile-call-bar";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { Analytics, GoogleTagManagerScript, GoogleTagManagerNoscript, GoogleAnalyticsScript } from "@/components/layout/analytics";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    path: "/",
  }),
  metadataBase: new URL(siteConfig.domain),
  verification: siteVerificationMeta,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <head>
        <GoogleTagManagerScript />
        <GoogleAnalyticsScript />
        <script {...jsonLdScriptProps(organizationJsonLd())} />
        <script {...jsonLdScriptProps(legalServiceJsonLd())} />
        <script {...jsonLdScriptProps(websiteJsonLd())} />
      </head>
      <body className="flex min-h-screen flex-col">
        <GoogleTagManagerNoscript />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1 pb-16 sm:pb-0">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        <MobileStickyCallBar />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
