import { expect, test } from "@playwright/test";

test("E2E Test", async ({ page }) => {
  await test.step("access the test page", async () => {
    await page.goto("http://localhost:3000/");
    const el = page.locator(`#title`);
    await expect(el).toBeVisible();
    await expect(el).toHaveText("Homepage");
  });

  await test.step("go to page 1 (link)", async () => {
    await page.click("#go-to-link-1");
  });

  await test.step("check page of link 1", async () => {
    const el = page.locator(`#title`);
    await expect(el).toBeVisible();
    await expect(el).toHaveText("Link 01");
  });

  await test.step("go back to homepage", async () => {
    await page.click(`#go-to-homepage`);
    const el = page.locator(`#title`);
    await expect(el).toBeVisible();
    await expect(el).toHaveText("Homepage");
  });

  await test.step("go to page 2 (hook)", async () => {
    await page.click("#go-to-link-2");
  });

  await test.step("check page of link 2", async () => {
    const el = page.locator(`#title`);
    await expect(el).toBeVisible();
    await expect(el).toHaveText("Link 02");
  });
});

test("E2E Test With State", async ({ page }) => {
  await test.step("access the test page", async () => {
    await page.goto("http://localhost:3000/with-states");
    const el = page.locator(`#counter-value`);
    await expect(el).toBeVisible();
    await expect(el).toHaveText("0");
  });

  await test.step("increase to 1", async () => {
    await page.click("#increase-btn");
    const el = page.locator(`#counter-value`);
    await page.waitForTimeout(200);
    await expect(el).toBeVisible();
    await expect(el).toHaveText("1");
  });

  await test.step("increase to 2", async () => {
    await page.click("#increase-btn");
    const el = page.locator(`#counter-value`);
    await expect(el).toBeVisible();
    await expect(el).toHaveText("2");
  });
});
