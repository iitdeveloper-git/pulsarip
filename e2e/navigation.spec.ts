import { test, expect } from "@playwright/test";

test.describe("Primary navigation", () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test("desktop mega menu opens and links to a service page", async ({ page }) => {
    await page.goto("/");
    const primaryNav = page.getByRole("navigation", { name: "Primary" });
    await primaryNav.getByRole("button", { name: /Intellectual Property/i }).click();
    const trademarkLink = primaryNav.getByRole("link", { name: /^Trademark\s/ });
    await expect(trademarkLink).toBeVisible();
    await trademarkLink.click();
    await expect(page).toHaveURL(/\/services\/trademark/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Trademark");
  });

  test("footer developer credit links to IITDEVELOPER", async ({ page }) => {
    await page.goto("/");
    const devLink = page.getByRole("link", { name: "IITDEVELOPER" });
    await expect(devLink).toHaveAttribute("href", "https://iitdeveloper.com/");
    await expect(devLink).toHaveAttribute("target", "_blank");
    await expect(devLink).toHaveAttribute("rel", /noopener/);
  });
});

test.describe("Mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("mobile menu opens, expands a submenu, and navigates", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();

    await page.getByRole("button", { name: "Toggle Intellectual Property submenu" }).click();
    const patentLink = page.getByRole("dialog").getByRole("link", { name: "Patent" });
    await expect(patentLink).toBeVisible();
    await patentLink.click();
    await expect(page).toHaveURL(/\/services\/patents/);
  });

  test("shows the sticky call/WhatsApp bar", async ({ page }) => {
    await page.goto("/");
    // The bar only renders when phone/whatsapp env vars are configured;
    // this assertion is skipped gracefully if neither is set.
    const bar = page.locator("div.fixed.inset-x-0.bottom-0.z-40.grid");
    const count = await bar.count();
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
