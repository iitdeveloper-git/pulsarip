import { test, expect } from "@playwright/test";

test.describe("Keyboard navigation & accessibility basics", () => {
  test("skip link is the first focusable element and jumps to main content", async ({ page }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    const skipLink = page.getByRole("link", { name: "Skip to main content" });
    await expect(skipLink).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/#main-content$/);
  });

  test("FAQ accordion is keyboard operable", async ({ page }) => {
    await page.goto("/services/trademark");
    const firstQuestion = page.getByRole("button", { name: "What is a trademark?" });
    await firstQuestion.focus();
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Enter");
    await expect(firstQuestion).toHaveAttribute("aria-expanded", "false");
  });

  test("mobile menu closes on Escape", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.getByRole("dialog", { name: "Mobile navigation" })).toBeHidden();
  });

  test("cookie consent banner can be dismissed", async ({ page }) => {
    await page.goto("/");
    const banner = page.getByRole("dialog", { name: "Cookie consent" });
    await expect(banner).toBeVisible();
    await banner.getByRole("button", { name: "Accept" }).click();
    await expect(banner).toBeHidden();
  });
});
