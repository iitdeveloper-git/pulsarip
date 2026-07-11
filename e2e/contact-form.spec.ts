import { test, expect } from "@playwright/test";

test.describe("Consultation / contact form", () => {
  test("shows validation errors on empty submit", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: "Book Consultation" }).click();
    await expect(page.getByText("Please enter your full name.")).toBeVisible();
    await expect(page.getByText("Please enter a valid email address.")).toBeVisible();
  });

  test("submits successfully and redirects to the thank-you page", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("Full Name").fill("Test User");
    await page.getByLabel("Email").fill("test.user@example.com");
    await page.getByLabel("Phone").fill("+91 98765 43210");
    await page.getByLabel("Service Required").selectOption("Trademark");
    await page.getByLabel("Message").fill("This is a test enquiry submitted by the automated test suite.");
    await page.getByLabel(/I agree to the/).check();

    await page.getByRole("button", { name: "Book Consultation" }).click();

    await expect(page).toHaveURL(/\/thank-you/, { timeout: 15000 });
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Thank you");
  });

  test("requires consent before submission", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel("Full Name").fill("Test User");
    await page.getByLabel("Email").fill("test.user@example.com");
    await page.getByLabel("Phone").fill("+91 98765 43210");
    await page.getByLabel("Service Required").selectOption("Trademark");
    await page.getByLabel("Message").fill("This is a test enquiry without checking the consent box.");

    await page.getByRole("button", { name: "Book Consultation" }).click();
    await expect(page.getByText("Please accept the privacy policy to continue.")).toBeVisible();
    await expect(page).toHaveURL(/\/contact/);
  });
});
