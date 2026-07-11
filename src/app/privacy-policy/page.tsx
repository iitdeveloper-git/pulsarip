import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { siteConfig } from "@/config/site";

const path = "/privacy-policy";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How PulsarIP collects, uses, and protects your personal information.",
  path,
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout title="Privacy Policy" path={path} lastUpdated="11 July 2026">
      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) collects, uses, discloses,
        and safeguards information when you visit our website or use our consultation and enquiry forms.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following categories of information:</p>
      <ul>
        <li>Contact details you provide, such as name, email, phone number, and company name</li>
        <li>Details of the service you enquire about and the message you submit</li>
        <li>Technical information such as IP address, browser type, and pages visited, via analytics tools</li>
        <li>Marketing attribution data, such as UTM parameters and referring page, where applicable</li>
      </ul>

      <h2>3. How We Use Information</h2>
      <ul>
        <li>To respond to consultation and contact form enquiries</li>
        <li>To provide the services requested</li>
        <li>To improve our website and understand how it is used</li>
        <li>To comply with applicable legal obligations</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        Our website uses essential cookies necessary for core functionality, and optional analytics cookies
        (such as Google Analytics and Microsoft Clarity) that are only activated with your consent. See our{" "}
        Cookie Policy for details.
      </p>

      <h2>5. Data Sharing</h2>
      <p>
        We do not sell personal information. We may share information with service providers who help us
        operate our website and respond to enquiries (such as email delivery providers), and where required
        by law.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We apply reasonable technical and organisational measures to protect personal information. However,
        no method of transmission or storage is completely secure.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Subject to applicable law, you may request access to, correction of, or deletion of your personal
        information by contacting us using the details on our{" "}
        <a href="/contact">Contact page</a>.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Material changes will be reflected by updating the &ldquo;Last updated&rdquo; date above.</p>

      <h2>9. Contact Us</h2>
      <p>For questions about this Privacy Policy, please reach out through our Contact page.</p>
    </LegalPageLayout>
  );
}
