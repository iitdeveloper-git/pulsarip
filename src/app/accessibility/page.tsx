import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { LegalPageLayout } from "@/components/sections/legal-page-layout";
import { siteConfig } from "@/config/site";

const path = "/accessibility";

export const metadata: Metadata = buildMetadata({
  title: "Accessibility Statement",
  description: "PulsarIP's commitment to web accessibility and how to report accessibility issues.",
  path,
});

export default function AccessibilityPage() {
  return (
    <LegalPageLayout title="Accessibility Statement" path={path} lastUpdated="11 July 2026">
      <h2>Our Commitment</h2>
      <p>
        {siteConfig.name} is committed to making this website accessible to as many people as possible,
        including people with disabilities. We aim to meet WCAG 2.2 Level AA guidelines as closely as
        practical.
      </p>

      <h2>Accessibility Features</h2>
      <ul>
        <li>Semantic HTML structure with a logical heading hierarchy</li>
        <li>Keyboard-navigable menus, forms, and interactive components</li>
        <li>Visible focus indicators on interactive elements</li>
        <li>A skip-to-content link for keyboard and screen reader users</li>
        <li>Sufficient color contrast for text and interface elements</li>
        <li>Support for reduced-motion preferences</li>
      </ul>

      <h2>Known Limitations</h2>
      <p>
        We are continuously working to improve accessibility. If you encounter any content or functionality
        that is not accessible to you, please let us know.
      </p>

      <h2>Feedback</h2>
      <p>If you experience any accessibility barriers on this website, please contact us through our Contact page so we can address the issue.</p>
    </LegalPageLayout>
  );
}
