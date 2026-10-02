import { test, expect } from "@playwright/test";
test("native Navigation, Projekt und Zurücklink", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Ronny");
  const menu = page.getByRole("button", { name: "Menü öffnen" });
  if (await menu.isVisible()) await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Projekte", exact: true })
    .click();
  await expect(page).toHaveURL(/#projects$/);
  await page.locator('a[href="/projects/watchtower"]').first().click();
  await expect(
    page.getByRole("heading", { name: "Watchtower", exact: true, level: 1 }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Alle Projekte" }).click();
  await expect(page).toHaveURL(/#projects$/);
});
test("Präsentation, Kapitelwahl, Tastatur und Ausstieg", async ({ page }) => {
  await page.goto("/present");
  await expect(
    page.getByRole("button", { name: "Vorheriges Kapitel" }),
  ).toBeDisabled();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByText("02 / 06 — EXPERIENCE")).toBeVisible();
  await page.keyboard.press("o");
  await page.getByRole("button", { name: /05 PROJECTS/ }).click();
  await expect(
    page.getByRole("heading", { name: "Watchtower", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page).toHaveURL(/\/#projects$/);
});
test("Reduced Motion, Mobile-Menü und keine Überbreite", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Moin, ich bin Ronny." }),
  ).toBeVisible();
  const menu = page.getByRole("button", { name: "Menü öffnen" });
  if (await menu.isVisible()) {
    await menu.click();
    await expect(page.getByRole("navigation")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(menu).toBeFocused();
    await expect(page.getByRole("navigation")).toBeHidden();
  }
  await expect(page.locator(".scroll-progress")).toBeHidden();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.keyboard.press("Tab");
});
test("alle Detailseiten laden direkt ohne Laufzeitfehler", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const slug of [
    "watchtower",
    "release-portal",
    "rvoice",
    "campus",
    "uc-modernisierung",
    "lifecycle",
    "personal-website",
  ]) {
    await page.goto(`/projects/${slug}/`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Die Architektur." }),
    ).toBeVisible();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("Tastaturzugang und sehr kleine Displays", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Zum Inhalt springen" }),
  ).toBeFocused();
  await page.setViewportSize({ width: 320, height: 700 });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  for (const route of [
    "/projects/watchtower",
    "/projects/release-portal",
    "/present",
  ]) {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator(".loading")).toHaveCount(0);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
});
