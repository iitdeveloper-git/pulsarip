import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("loads with the primary headline and hero CTAs", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Protect Your Ideas");
    await expect(page.getByRole("link", { name: "Book a Consultation" }).first()).toBeVisible();
    await expect(page.getByRole("link", { name: "Explore Services" })).toBeVisible();
  });

  test("has no duplicate H1 and a logical heading structure", async ({ page }) => {
    await page.goto("/");
    const h1Count = await page.getByRole("heading", { level: 1 }).count();
    expect(h1Count).toBe(1);
  });

  test("renders featured insights linking to article pages", async ({ page }) => {
    await page.goto("/");
    const articleLink = page.getByRole("link", { name: /What Is a Trademark/i });
    await expect(articleLink).toBeVisible();
    await articleLink.click();
    await expect(page).toHaveURL(/\/insights\/what-is-a-trademark/);
  });
});
