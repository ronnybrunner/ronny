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
  await expect(page.getByText("02 / 05 — EXPERIENCE")).toBeVisible();
  await page.keyboard.press("0");
  await page.getByRole("button", { name: /04 PROJECTS/ }).click();
  await expect(
    page.getByRole("heading", { name: "Watchtower", exact: true }),
  ).toBeVisible();
  await page.evaluate(() =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "instant",
    }),
  );
  await page.keyboard.press("0");
  await expect(
    page.getByRole("heading", { name: "Kapitelübersicht" }),
  ).toBeVisible();
  expect(await page.evaluate(() => window.scrollY)).toBe(0);
  await page.keyboard.press("Escape");
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
  for (const slug of ["watchtower", "release-portal"]) {
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

test("Capability Map passt ohne Scrollen zwischen die Präsentationsleisten", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "Desktop-Geometrie; Mobile darf scrollen",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const [width, height] of [
    [1920, 1080],
    [2560, 1440],
    [1440, 900],
    [1366, 768],
    [1280, 720],
  ]) {
    await page.setViewportSize({ width, height });
    await page.goto("/present");
    await expect(page.getByText("01 / 05 — ME")).toBeVisible();
    await expect(page.locator(".presentation-header .wordmark")).toHaveCount(0);
    await expect(page.locator(".chapter-dots button")).toHaveCount(5);
    await page.keyboard.press("ArrowRight");
    await expect(page.getByText("02 / 05 — EXPERIENCE")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () =>
          document.querySelector(".timeline-stations")!.getBoundingClientRect()
            .bottom <
          document
            .querySelector(".presentation-controls")!
            .getBoundingClientRect().top,
      ),
    ).toBe(true);
    await page.keyboard.press("ArrowRight");
    await expect(page.getByText("03 / 05 — EXPERTISE")).toBeVisible();
    await expect(page.locator(".capability-panel")).toHaveCount(4);
    await expect(page.locator(".capability-slide button")).toHaveCount(0);
    await page.evaluate(() => document.fonts.ready);
    for (const topic of [
      "Cisco Catalyst",
      "CUCM",
      "Cisco Security Advisories",
      "Release Management",
      "TECHNOLOGIEUMFELD",
    ])
      await expect(page.getByText(topic, { exact: true })).toBeVisible();
    const geometry = await page.evaluate(() => {
      const top = document
        .querySelector(".presentation-header")!
        .getBoundingClientRect().bottom;
      const bottom = document
        .querySelector(".presentation-controls")!
        .getBoundingClientRect().top;
      const content = [
        ...document.querySelectorAll(
          ".capability-slide h2,.capability-panel,.capability-panel li,.capability-environment",
        ),
      ].map((el) => el.getBoundingClientRect());
      const header = document
        .querySelector(".presentation-header > span")!
        .getBoundingClientRect();
      return {
        fits: content.every((r) => r.top >= top && r.bottom <= bottom),
        noScroll: document.documentElement.scrollHeight <= innerHeight,
        centered: Math.abs(header.left + header.width / 2 - innerWidth / 2) < 1,
      };
    });
    expect(geometry).toEqual({ fits: true, noScroll: true, centered: true });
  }
});
