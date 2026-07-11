import { test, expect } from "@playwright/test";

test.describe("Error pages", () => {
  test("shows the custom 404 page for an unknown route", async ({ page }) => {
    const response = await page.goto("/this-page-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Page not found");
    await expect(page.getByRole("link", { name: "Back to Home" })).toBeVisible();
  });

  test("404 page links navigate back into the site", async ({ page }) => {
    await page.goto("/this-page-does-not-exist");
    await page.getByRole("link", { name: "Browse Services" }).click();
    await expect(page).toHaveURL(/\/services$/);
  });
});
