import Script from "next/script";
import { siteConfig } from "@/config/site";

/**
 * GTM script — placed in <head> as early as possible per GTM install docs.
 * `beforeInteractive` injects this into the initial HTML <head>.
 */
export function GoogleTagManagerScript() {
  const { gtmId } = siteConfig.analytics;
  if (!gtmId) return null;

  return (
    <Script id="gtm-init" strategy="beforeInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `}
    </Script>
  );
}

/**
 * GA4 script — placed in <head> with beforeInteractive so Google's
 * verification crawler detects it on first page load.
 * Matches the "Install manually" snippet from Google Analytics setup.
 */
export function GoogleAnalyticsScript() {
  const { gaId } = siteConfig.analytics;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="beforeInteractive"
      />
      <Script id="ga4-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

/**
 * GTM noscript fallback — must render immediately after the opening <body>
 * tag per GTM install instructions (for users with JS disabled).
 */
export function GoogleTagManagerNoscript() {
  const { gtmId } = siteConfig.analytics;
  if (!gtmId) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

/**
 * Microsoft Clarity — loads after page is interactive (doesn't need
 * to be in <head>, lazy loading is fine for session recording).
 */
export function Analytics() {
  const { clarityId } = siteConfig.analytics;

  if (!clarityId) return null;

  return (
    <Script id="ms-clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarityId}");
      `}
    </Script>
  );
}
