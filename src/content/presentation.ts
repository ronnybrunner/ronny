import { projectCatalog as projects } from "./projects";

// Slides are independent of the normal site's five chapter anchors.
// Project slides share the same verified project model and map back to PROJECTS.
export const presentationSlides = [
  { id: "me", chapter: "me", label: "ME", title: "Über mich" },
  {
    id: "experience",
    chapter: "experience",
    label: "EXPERIENCE",
    title: "Beruflicher Werdegang",
  },
  {
    id: "expertise",
    chapter: "expertise",
    label: "EXPERTISE",
    title: "Technische Schwerpunkte",
  },
  ...projects.map((project) => ({
    id: project.slug,
    chapter: "projects",
    label: project.name.toUpperCase(),
    title: project.name,
  })),
  {
    id: "beyond",
    chapter: "beyond",
    label: "BEYOND",
    title: "Abseits der Technik",
  },
];
