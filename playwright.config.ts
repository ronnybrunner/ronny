import { defineConfig, devices } from "@playwright/test";
const port = Number(process.env.PLAYWRIGHT_PORT || 4173);
const baseURL = `http://127.0.0.1:${port}`;
export default defineConfig({
  testDir: "tests/e2e",
  fullyParallel: true,
  use: { baseURL, trace: "retain-on-failure" },
  webServer: {
    command: `npm run preview -- --port ${port} --strictPort`,
    url: baseURL,
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: "desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: "mobile",
      use: { ...devices["iPhone 13"], defaultBrowserType: "chromium" },
    },
  ],
});
