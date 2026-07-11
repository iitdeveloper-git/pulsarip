import { test, expect } from "@playwright/test";

const servicePages = [
  { path: "/services/trademark", heading: "Trademark" },
  { path: "/services/patents", heading: "Patent" },
  { path: "/services/business-registration/company-registration", heading: "Company Registration" },
  { path: "/services/legal-documentation", heading: "Legal Documentation" },
];

test.describe("Service pages follow the standard template", () => {
  for (const { path, heading } of servicePages) {
    test(`${path} renders breadcrumb, hero, FAQ, and CTA`, async ({ page }) => {
      await page.goto(path);
      await expect(page.getByRole("heading", { level: 1 })).toContainText(heading);
      await expect(page.getByRole("navigation", { name: "Breadcrumb" })).toBeVisible();
      await expect(page.getByText(/Frequently asked questions/i)).toBeVisible();
      await expect(page.getByRole("link", { name: "Book a Consultation" }).first()).toBeVisible();
      await expect(page.getByText(/does not constitute legal advice/i).first()).toBeVisible();
    });
  }
});

test.describe("Services overview page", () => {
  test("lists all four service categories", async ({ page }) => {
    await page.goto("/services");
    const main = page.locator("#main-content");
    await expect(main.getByRole("heading", { name: "Intellectual Property" })).toBeVisible();
    await expect(main.getByRole("heading", { name: "Business Registration" })).toBeVisible();
    await expect(main.getByRole("heading", { name: "Legal Documentation" })).toBeVisible();
    await expect(main.getByRole("heading", { name: "Startup & Corporate Advisory" })).toBeVisible();
  });
});
