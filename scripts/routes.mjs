import { readFile, writeFile, mkdir } from "node:fs/promises";
import { projects } from "../src/content/projects.ts";
const html = await readFile("dist/index.html", "utf8");
const paths = [
  "present",
  "privacy",
  ...projects.map((p) => `projects/${p.slug}`),
];
function escape(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}
for (const path of paths) {
  const project = projects.find((p) => path === `projects/${p.slug}`);
  const title = project
    ? `${project.name} — Ronny Brunner`
    : path === "present"
      ? "Präsentation — Ronny Brunner"
      : "Datenschutz — Ronny Brunner";
  const page = html
    .replace(/<title>.*?<\/title>/, `<title>${escape(title)}</title>`)
    .replace(
      /(<meta property="og:title" content=")[^"]*/,
      `$1${escape(title)}`,
    );
  const output = project
    ? page
        .replace(
          /(<meta name="description" content=")[^"]*/,
          `$1${escape(project.oneLiner)}`,
        )
        .replace(
          /(<meta property="og:description" content=")[^"]*/,
          `$1${escape(project.oneLiner)}`,
        )
    : page;
  await mkdir(`dist/${path}`, { recursive: true });
  await writeFile(`dist/${path}/index.html`, output);
}
await writeFile("dist/404.html", html);
