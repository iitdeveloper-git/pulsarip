import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/sections/legal-page-layout";

const path = "/refund-policy";

export const metadata: Metadata = buildMetadata({
  title: "Refund & Cancellation Policy",
  description: "Learn about the refund and cancellation policies of PulsarIP.",
  path,
});

export default function RefundPolicyPage() {
  return (
    <LegalPageLayout title="Refund & Cancellation Policy" path={path} lastUpdated="12 July 2026">
      <h2>No Online Payments</h2>
      <p>
        As we do not process payments directly on this website, no online transactions or billing takes place on this platform. Consequently, no refund claims can be raised via this site.
      </p>

      <h2>Free Initial Consultation</h2>
      <p>
        PulsarIP offers free initial consultations (up to 5-15 minutes) to understand your business objectives and clarify next steps. Because these sessions are offered completely free of charge, there are no refund or billing cancellation terms applicable.
      </p>

      <h2>Professional Engagements</h2>
      <p>
        If you choose to retain Advocate Lucky Singh / PulsarIP for legal, intellectual property, or business registration services, the terms regarding professional fees, government filings, progress billings, refunds, and cancellations will be fully defined in a custom professional engagement agreement executed directly between you and our office.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any enquiries regarding refunds, cancellations, or professional service engagements, please reach out to us at <a href="mailto:info@pulsarIP.com">info@pulsarIP.com</a> or use the details on our <a href="/contact">Contact page</a>.
      </p>
    </LegalPageLayout>
  );
}
