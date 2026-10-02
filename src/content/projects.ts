export interface Project {
  slug: string;
  name: string;
  type: string;
  oneLiner: string;
  problem: string;
  approach: string;
  architecture: string[];
  stack: string[];
  features: string[];
  result: string;
  role: string;
  status: string;
  kind: "campus" | "uc" | "lifecycle" | "website";
}
export const projects: Project[] = [
  {
    slug: "release-portal",
    name: "Release Portal",
    type: "OWN SOFTWARE · LIFECYCLE WORKSPACE",
    oneLiner:
      "Bestand, Lifecycle und technische Reviews in einem gemeinsamen Arbeitsbereich.",
    problem:
      "Bestandsinformationen, Security Advisories, Bugs und Lifecycle-Daten müssen für regelmäßige technische Reviews zusammengeführt werden.",
    approach:
      "Das Release Portal verbindet Inventar und kundenbezogene Review-Zyklen. Security-, Bug- und Lifecycle-Bewertungen münden in Reporting und Export. Windmill ist als Automatisierungsplattform angebunden und führt die Synchronisations- und Exportjobs aus. Dieser Einblick zeigt ausschließlich das allgemeine Konzept, keine Kundendaten.",
    architecture: [
      "React · Review-Workspace",
      "Fastify · Backend-for-Frontend",
      "Prisma · PostgreSQL",
      "Windmill · Automatisierungsplattform",
    ],
    stack: [
      "React",
      "TypeScript",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Windmill",
      "Docker",
    ],
    features: [
      "Technische Reviews für Security, Bugs und Lifecycle",
      "Review-Entscheidungen und Reporting-Vorschau",
      "Windmill-Anbindung für Synchronisation und Export mit sichtbarem Jobstatus",
    ],
    result:
      "Ein gemeinsamer Workspace für technische Reviews, dokumentierte Bewertungen und Reporting. Synchronisationsjobs liefern die benötigten Informationen; das Projekt wird weiterentwickelt.",
    role: "Eigenes Softwareprojekt, mit AI-Unterstützung entwickelt.",
    status: "In Weiterentwicklung",
    kind: "website",
  },
  {
    slug: "watchtower",
    name: "Watchtower",
    type: "OWN SOFTWARE · ADVISORY INTELLIGENCE",
    oneLiner:
      "Security Advisories und Software-Releases an einem Ort – mit nachvollziehbaren Änderungen.",
    problem:
      "Hersteller veröffentlichen Sicherheitsinformationen in unterschiedlichen Formaten. Neue Meldungen, spätere Änderungen und Softwarestände müssen unterscheidbar bleiben.",
    approach:
      "Watchtower sammelt öffentliche Herstellerinformationen, bewahrt Quelldokumente auf und normalisiert die Inhalte. Materielle Änderungen werden als Revisionen erfasst. Die Plattform arbeitet local-first und enthält bewusst keine Kunden-, Geräte- oder Installationsdaten.",
    architecture: [
      "React · Web-Oberfläche",
      "Fastify · REST API",
      "Worker · Connectoren & Revisionen",
      "PostgreSQL · Prisma",
    ],
    stack: [
      "TypeScript",
      "React",
      "Fastify",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "TanStack Query",
    ],
    features: [
      "Connectoren für Cisco, Fortinet, Broadcom und F5",
      "Nachvollziehbare Advisory- und Release-Revisionen",
      "Quellenstatus, Wiederverarbeitung und Benachrichtigungen",
    ],
    result:
      "Die lokale Plattform führt Advisories und Releases zusammen. Quelldokumente und Revisionen bleiben nachvollziehbar; die Weiterentwicklung läuft.",
    role: "Eigenes Softwareprojekt, mit AI-Unterstützung entwickelt.",
    status: "Im lokalen Lab betrieben · aktive Weiterentwicklung",
    kind: "website",
  },
];
