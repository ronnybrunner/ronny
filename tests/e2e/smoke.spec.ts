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
test("Präsentation, Folienwahl, Tastatur und Ausstieg", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "Die Präsentation benötigt ein Desktopfenster",
  );
  await page.goto("/present");
  await expect(
    page.getByRole("button", { name: "Vorherige Folie" }),
  ).toBeDisabled();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByText("02 / 07 — EXPERIENCE")).toBeVisible();
  await page.keyboard.press("0");
  await expect(page.locator(".chapter-grid button")).toHaveCount(7);
  await page.getByRole("button", { name: /04 RELEASE PORTAL/ }).click();
  await expect(
    page.getByRole("heading", { name: "Release Portal.", exact: true }),
  ).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByText("05 / 07 — WATCHTOWER")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByText("06 / 07 — SMART DISPATCH")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.getByText("07 / 07 — BEYOND")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Nächste Folie" }),
  ).toBeDisabled();
  await page.keyboard.press("ArrowLeft");
  await page.keyboard.press("0");
  await page.keyboard.press("0");
  await expect(page.getByText("06 / 07 — SMART DISPATCH")).toBeVisible();
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
  for (const slug of ["watchtower", "release-portal", "smart-dispatch"]) {
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
    await expect(page.locator(".loading")).toHaveCount(0);
    if (route === "/present")
      await expect(page.locator(".presentation-size-notice")).toBeVisible();
    else await expect(page.locator("main")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `Keine horizontale Überbreite auf ${route}`,
    ).toBe(true);
    for (const diagram of await page
      .locator(".project-detail-grid .diagram")
      .all()) {
      expect(
        await diagram.evaluate(
          (el) =>
            el.getBoundingClientRect().right <=
            el.closest(".project-detail-grid")!.getBoundingClientRect().right,
        ),
        `Architektur bleibt innerhalb des Inhaltsrasters auf ${route}`,
      ).toBe(true);
    }
  }
});

test("Alle sieben Folien passen ohne Scrollen zwischen die Navigationsleisten", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "Die Präsentation benötigt ein Desktopfenster",
  );
  test.setTimeout(90_000);
  const labels = [
    "ME",
    "EXPERIENCE",
    "EXPERTISE",
    "RELEASE PORTAL",
    "WATCHTOWER",
    "SMART DISPATCH",
    "BEYOND",
  ];
  for (const reducedMotion of ["reduce", "no-preference"] as const) {
    await page.emulateMedia({ reducedMotion });
    for (const [width, height] of [
      [1920, 1080],
      [2560, 1440],
      [1440, 900],
      [1366, 768],
      [1280, 720],
    ]) {
      await page.setViewportSize({ width, height });
      await page.goto("/present");
      await expect(page.locator(".chapter-dots button")).toHaveCount(7);
      await expect(page.locator(".presentation-header a")).toHaveCount(0);
      for (const [index, label] of labels.entries()) {
        await expect(
          page.getByText(`0${index + 1} / 07 — ${label}`),
        ).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        await page
          .locator(".deck-slide img")
          .evaluateAll((images) =>
            Promise.all(
              images.map((img) => (img as HTMLImageElement).decode()),
            ),
          );
        const geometry = await page.evaluate(() => {
          const top = document
            .querySelector(".presentation-header")!
            .getBoundingClientRect().bottom;
          const bottom = document
            .querySelector(".presentation-controls")!
            .getBoundingClientRect().top;
          const elements = [
            ...document.querySelectorAll(
              ".deck-slide h2,.deck-slide h3,.deck-slide p,.deck-slide li,.deck-slide img,.deck-slide figcaption,.deck-slide .eyebrow,.deck-slide .text-link,.career-year,.career-period",
            ),
          ];
          const outside = elements
            .filter((el) => {
              const r = el.getBoundingClientRect();
              return (
                r.top < top - 1 ||
                r.bottom > bottom + 1 ||
                r.right > innerWidth + 1
              );
            })
            .map((el) => el.textContent || el.getAttribute("alt"));
          // Scroll height catches content exceeding panels even when the slide itself is fixed.
          const clipped = [
            ...document.querySelectorAll(
              ".deck-slide,.career-panel,.capability-panel,.project-slide-copy",
            ),
          ]
            .filter((el) => el.scrollHeight > el.clientHeight + 1)
            .map((el) => el.className);
          return {
            outside,
            clipped,
            noScroll: document.documentElement.scrollHeight <= innerHeight,
            noOverflow: document.documentElement.scrollWidth <= innerWidth,
          };
        });
        expect(
          geometry,
          `${width}×${height}: ${label} (${reducedMotion})`,
        ).toEqual({
          outside: [],
          clipped: [],
          noScroll: true,
          noOverflow: true,
        });
        if (index < labels.length - 1) await page.keyboard.press("ArrowRight");
      }
      await page.keyboard.press("0");
      await expect(page.locator(".chapter-grid button")).toHaveCount(7);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollHeight <= innerHeight,
        ),
      ).toBe(true);
    }
  }
});

test("Vollbild wird vor dem Präsentationsausstieg beendet", async ({
  page,
}, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop-Vollbild");
  await page.goto("/present");
  await page.getByRole("button", { name: "Vollbild umschalten" }).click();
  await expect
    .poll(() => page.evaluate(() => !!document.fullscreenElement))
    .toBe(true);
  await page.getByRole("button", { name: "Präsentation beenden" }).click();
  await expect(page).toHaveURL(/\/#me$/);
  await expect
    .poll(() => page.evaluate(() => !!document.fullscreenElement))
    .toBe(false);
});

test("Kleine Displays erhalten einen zugänglichen Weg zur normalen Website", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/present");
  await expect(
    page.getByRole("heading", { name: "Mehr Platz für die Präsentation." }),
  ).toBeVisible();
  await expect(page.locator(".presentation-controls")).toBeHidden();
  await page.getByRole("link", { name: "Zur Website ↗" }).click();
  await expect(
    page.getByRole("heading", { name: "Moin, ich bin Ronny." }),
  ).toBeVisible();
});
