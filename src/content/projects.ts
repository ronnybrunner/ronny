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
  presentation: {
    intro: string;
    problem: string;
    solution: string;
    highlights: string[];
    image?: { src: string; alt: string; caption: string };
  };
  kind: "campus" | "uc" | "lifecycle" | "website";
}
export const projectCatalog: Project[] = [
  {
    slug: "release-portal",
    presentation: {
      intro: "Bestand, Lifecycle und Reviews in einem Workspace.",
      problem:
        "Inventar, Advisories und Softwarestände für regelmäßige Reviews zusammenführen.",
      solution:
        "Bewertungen, Reporting und Exporte in einem Workspace mit Windmill-Automatisierung.",
      highlights: [
        "Security-, Bug- und Lifecycle-Reviews",
        "Windmill-Jobs für Synchronisation und Export",
      ],
      image: {
        src: "release-portal-workspace.webp",
        alt: "Echte Release-Portal-Oberfläche: Lifecycle-Verteilung für Hardware und Software; Ausschnitt ohne Kunden- oder Gerätekennungen",
        caption: "Echte Produktoberfläche · Ausschnitt, Stand Oktober 2026",
      },
    },
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
    presentation: {
      intro: "Herstellerinformationen mit nachvollziehbaren Änderungen.",
      problem:
        "Advisories und Releases verteilen sich auf unterschiedliche Herstellerquellen.",
      solution:
        "Connectoren erfassen öffentliche Quellen; Revisionen dokumentieren Änderungen.",
      highlights: [
        "Cisco-, Fortinet-, Broadcom- und F5-Connectoren",
        "Quelldokumente, Revisionen und Wiederverarbeitung",
      ],
      image: {
        src: "watchtower-advisories.webp",
        alt: "Echte Watchtower-Oberfläche mit öffentlichen Hersteller-Advisories und nachvollziehbaren Revisionen",
        caption:
          "Echte Produktoberfläche · öffentliche Herstellerdaten, Oktober 2026",
      },
    },
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
  {
    slug: "smart-dispatch",
    name: "Smart Dispatch",
    type: "OWN SOFTWARE · WINDOWS DESKTOP",
    oneLiner: "Betriebsmeldungen vorbereiten, prüfen und an Outlook übergeben.",
    problem:
      "Wiederkehrende Meldungen brauchen konsistente Vorlagen, strukturierte Stammdaten und nachvollziehbare Abläufe.",
    approach:
      "Eine Windows-Desktop-App verbindet Templates, Validierung und HTML-Vorschau mit lokaler Datenhaltung. Outlook COM übernimmt Mail-Entwürfe und Kalendertermine. Das separate Smart-Release-Modul ergänzt Bestands- und Lifecycle-Verwaltung sowie Excel- und PDF-Exporte; dessen Reports werden manuell versendet.",
    architecture: [
      "WinUI 3 · Meldung & Vorschau",
      "C# / .NET 8 · Validierung & Templates",
      "SQLite · Lokale Datenhaltung",
      "Outlook COM · Entwürfe & Kalender",
    ],
    stack: [
      "C#",
      ".NET 8",
      "WinUI 3",
      "SQLite",
      "WebView2",
      "Outlook COM",
      "ClosedXML",
    ],
    features: [
      "Templates, Validierung und HTML-Vorschau",
      "Outlook-Entwürfe, Kalender und Meldungshistorie",
      "Smart Release: Bestand, Lifecycle, Excel-/PDF-Export",
    ],
    result:
      "Die WinUI-3-Implementierung bündelt Meldungsworkflows und lokale Datenhaltung. Smart Release ergänzt strukturierte Bestandsverwaltung und Reports. Aus dem Repository wird keine produktive Freigabe abgeleitet.",
    role: "Eigenes Softwareprojekt, mit AI-Unterstützung entwickelt.",
    status: "WinUI-3-Implementierung · in Weiterentwicklung",
    kind: "website",
    presentation: {
      intro: "Strukturierte Betriebsmeldungen direkt vom Windows-Desktop.",
      problem:
        "Betriebsmeldungen konsistent erstellen und Arbeitsschritte nachvollziehen.",
      solution:
        "Templates, Vorschau und Outlook COM; Smart Release für Bestand und Reports.",
      highlights: [
        "Outlook-Entwürfe und Kalendertermine",
        "Smart Release: Excel- und PDF-Exporte",
      ],
    },
  },
];
// Keep the normal homepage's selected projects unchanged. All detail pages and
// presentation slides use the same catalog, including the desktop project.
export const projects = projectCatalog.filter(
  (project) => project.slug !== "smart-dispatch",
);
