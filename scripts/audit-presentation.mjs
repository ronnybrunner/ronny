/* global document, innerWidth, innerHeight */
import { chromium, expect } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";

const base = process.env.PRESENTATION_AUDIT_URL || "http://127.0.0.1:4173";
const output = "artifacts/presentation-v3";
await mkdir(output, { recursive: true });
const browser = await chromium.launch();
const audit = [];
try {
  for (const [width, height] of [
    [1920, 1080],
    [2560, 1440],
    [1440, 900],
    [1366, 768],
    [1280, 720],
  ]) {
    const page = await browser.newPage({
      viewport: { width, height },
      reducedMotion: "reduce",
    });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`${base.replace(/\/$/, "")}/present/`);
    await expect(page.locator(".chapter-dots button")).toHaveCount(7);
    const slideCount = await page.locator(".chapter-dots button").count();
    for (let index = 0; index < slideCount; index++) {
      await expect(page.locator(".presentation-header > span")).toContainText(
        `0${index + 1} / 07 —`,
      );
      const slideId = await page.locator(".deck-slide").getAttribute("id");
      await page.evaluate(() => document.fonts.ready);
      await page
        .locator(".deck-slide img")
        .evaluateAll((images) =>
          Promise.all(images.map((img) => img.decode())),
        );
      const geometry = await page.evaluate(() => {
        const top = document
          .querySelector(".presentation-header")
          .getBoundingClientRect().bottom;
        const bottom = document
          .querySelector(".presentation-controls")
          .getBoundingClientRect().top;
        const selectors =
          ".deck-slide h2,.deck-slide h3,.deck-slide p,.deck-slide li,.deck-slide img,.deck-slide figcaption,.deck-slide .eyebrow,.deck-slide .text-link";
        const outside = [...document.querySelectorAll(selectors)]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            return (
              r.top < top - 1 ||
              r.bottom > bottom + 1 ||
              r.left < -1 ||
              r.right > innerWidth + 1
            );
          })
          .map((el) => el.textContent || el.getAttribute("alt"));
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
      const screenshot = `${output}/${width}x${height}-${String(index + 1).padStart(2, "0")}-${slideId}.png`;
      await page.screenshot({ path: screenshot });
      audit.push({ width, height, slide: slideId, screenshot, geometry });
      if (index < slideCount - 1) await page.keyboard.press("ArrowRight");
    }
    await page.keyboard.press("0");
    await expect(page.locator(".chapter-grid button")).toHaveCount(7);
    await page.screenshot({
      path: `${output}/${width}x${height}-overview.png`,
    });
    await page.keyboard.press("0");
    await page.getByRole("button", { name: "Vollbild umschalten" }).click();
    await expect
      .poll(() => page.evaluate(() => !!document.fullscreenElement))
      .toBe(true);
    await page.getByRole("button", { name: "Vollbild umschalten" }).click();
    await expect
      .poll(() => page.evaluate(() => !!document.fullscreenElement))
      .toBe(false);
    audit.push({ width, height, errors, fullscreen: true });
    await page.close();
  }
} finally {
  await writeFile(`${output}/audit.json`, JSON.stringify(audit, null, 2));
  await browser.close();
}
const failures = audit.filter(
  (row) =>
    row.geometry &&
    (row.geometry.outside.length ||
      row.geometry.clipped.length ||
      !row.geometry.noScroll ||
      !row.geometry.noOverflow),
);
if (failures.length || audit.some((row) => row.errors?.length)) {
  console.error(JSON.stringify(failures, null, 2));
  process.exitCode = 1;
} else
  console.log(
    `Verified ${audit.filter((row) => row.slide).length} slide viewports. Screenshots: ${output}`,
  );
