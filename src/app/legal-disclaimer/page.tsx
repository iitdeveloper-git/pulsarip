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

      <h2>Professional Credentials</h2>
      <p>
        Advocate Lucky Singh is registered with the Bar Council of Rajasthan. Credentials, qualifications, and active practice statuses are verified. Enrolment details and related professional certifications are available upon request.
      </p>

      <h2>Contact Us</h2>
      <p>If you have questions about this disclaimer, please reach out through our <a href="/contact">Contact page</a>.</p>
    </LegalPageLayout>
  );
}
