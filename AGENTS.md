# Repository Guidelines

## Project Structure & Module Organization

The application is a React/TypeScript personal website. Application code lives in `src/`, public content models in `src/content/`, reusable components in `src/components/`, route pages in `src/pages/`, and CSS in `src/styles/`. Tests are in `tests/` and optimized photographs in `assets/images/`. Public metadata assets are in `public/`. Source evidence and delivery notes live in `docs/`; build/image helpers live in `scripts/`. Original source documents and photos are private and ignored by Git. Keep generated build, test, and audit artifacts out of version control.

## Build, Test, and Development Commands

`npm install` installs dependencies. `npm run dev` starts Vite; `npm run build` typechecks and builds static route entry points; `npm run preview` serves the production build. `npm run lint`, `npm test`, and `npm run test:e2e` run ESLint, Vitest, and Playwright. Use Node.js 24 or newer. Deployment details are in README.md.

## Coding Style & Naming Conventions

Use TypeScript, focused React components and data-driven content. Run `npm run format` and `npm run lint`. Components use PascalCase names and content modules use lowercase names. Do not introduce unsupported professional claims; follow `docs/content-inventory.md`.

## Testing Guidelines

Vitest and Testing Library cover content rendering, navigation, topic controls and presentation keyboard behavior. Playwright covers desktop/mobile navigation, direct route loading and reduced motion. Run `npx playwright install chromium` once before browser tests. No arbitrary coverage threshold is configured; prioritize meaningful behavioral assertions.

## Commit & Pull Request Guidelines

There is no Git history from which to infer a commit convention. Use concise, imperative commit subjects that describe the change, such as `Add configuration loader`. Keep pull requests focused; include a summary, how the change was tested, and links to relevant issues. Include screenshots when a change affects a visual interface.

## Configuration & Secrets

Do not commit credentials or machine-specific configuration. Provide an example configuration file for required settings and document how contributors can set them locally.
