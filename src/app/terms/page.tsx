import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { siteConfig } from "@/config/site";

const path = "/terms";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: "The terms and conditions governing use of the PulsarIP website.",
  path,
});

export default function TermsPage() {
  return (
    <LegalPageLayout title="Terms of Use" path={path} lastUpdated="11 July 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.</p>

      <h2>2. Informational Purpose Only</h2>
      <p>
        Content on this website, including service descriptions, process explanations, and articles, is
        provided for general informational purposes only and does not constitute legal advice. No
        advisor-client relationship is formed by using this website or submitting an enquiry form.
      </p>

      <h2>3. No Guaranteed Outcomes</h2>
      <p>
        {siteConfig.name} does not guarantee the approval, registration, grant, or any specific outcome of
        any application or filing. Timelines, government fees, and outcomes depend on the applicable
        authority and the specific facts of each matter.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>All content on this website, including text, graphics, and logos, is the property of {siteConfig.name} or its licensors and may not be used without permission.</p>

      <h2>5. Third-Party Links</h2>
      <p>This website may link to third-party websites. We are not responsible for the content or practices of any linked third-party site.</p>

      <h2>6. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, {siteConfig.name} shall not be liable for any indirect, incidental, or consequential damages arising from use of this website.</p>

      <h2>7. Governing Law</h2>
      <p>These Terms are governed by the laws of India, without regard to conflict of law principles.</p>

      <h2>8. Changes to These Terms</h2>
      <p>We may update these Terms from time to time. Continued use of the website after changes constitutes acceptance of the revised Terms.</p>

      <h2>9. Contact Us</h2>
      <p>For questions about these Terms, please reach out through our Contact page.</p>
    </LegalPageLayout>
  );
}
