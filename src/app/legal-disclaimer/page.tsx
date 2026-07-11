import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { siteConfig } from "@/config/site";

const path = "/legal-disclaimer";

export const metadata: Metadata = buildMetadata({
  title: "Legal Disclaimer",
  description: "Important disclaimers regarding the information provided on the PulsarIP website.",
  path,
});

export default function LegalDisclaimerPage() {
  return (
    <LegalPageLayout title="Legal Disclaimer" path={path} lastUpdated="11 July 2026">
      <h2>General Information Only</h2>
      <p>
        The content on this website, including service descriptions, process explanations, FAQs, and blog
        articles, is provided for general informational purposes only. It does not constitute legal advice
        and should not be relied upon as a substitute for advice from a qualified professional familiar with
        your specific circumstances.
      </p>

      <h2>No Advisor-Client Relationship</h2>
      <p>Use of this website, including submission of an enquiry or consultation form, does not create an advisor-client relationship between you and {siteConfig.name}.</p>

      <h2>No Guaranteed Outcomes</h2>
      <p>
        {siteConfig.name} does not guarantee the approval, registration, grant, or any specific outcome of
        any trademark, patent, copyright, design, or business registration application. Timelines,
        government fees, and outcomes depend entirely on the applicable government authority and the
        specific facts of each case.
      </p>

      <h2>Professional Verification</h2>
      <p>
        Any professional qualifications, registrations, or affiliations referenced on this website are
        subject to independent verification and are not asserted unless confirmed. Please request verification
        directly if this is material to your decision to engage our services.
      </p>

      <h2>Draft Content</h2>
      <p>
        Certain content on this website, including blog articles marked as drafts, is prepared for structural
        and SEO planning purposes and is pending review by a qualified legal professional before being
        treated as final guidance.
      </p>

      <h2>Contact</h2>
      <p>If you have questions about this disclaimer, please reach out through our Contact page.</p>
    </LegalPageLayout>
  );
}
