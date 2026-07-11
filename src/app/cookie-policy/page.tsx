import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/sections/legal-page-layout";

const path = "/cookie-policy";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description: "How PulsarIP uses cookies and similar technologies on this website.",
  path,
});

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout title="Cookie Policy" path={path} lastUpdated="11 July 2026">
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files stored on your device that help websites function and, where enabled, understand how visitors use them.</p>

      <h2>2. Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential cookies</strong> — required for core website functionality, such as remembering your cookie consent choice.</li>
        <li><strong>Analytics cookies</strong> — help us understand site usage (e.g. Google Analytics, Microsoft Clarity), and are only activated with your consent.</li>
      </ul>

      <h2>3. Managing Cookies</h2>
      <p>
        You can accept or decline optional cookies via the cookie banner shown on your first visit. You can
        also control cookies through your browser settings, though disabling essential cookies may affect
        site functionality.
      </p>

      <h2>4. Changes to This Policy</h2>
      <p>We may update this Cookie Policy from time to time. Material changes will be reflected by updating the &ldquo;Last updated&rdquo; date above.</p>
    </LegalPageLayout>
  );
}
