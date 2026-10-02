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
  learned: string;
  role: string;
  status: string;
  kind: "campus" | "uc" | "lifecycle" | "website";
}
export const projects: Project[] = [
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
    learned:
      "Ein erneuter Abruf ist noch keine inhaltliche Änderung. Die Trennung von Quelldokument, Beobachtung und Revision macht diese Unterscheidung nachvollziehbar.",
    role: "Eigenes Softwareprojekt, mit AI-Unterstützung entwickelt.",
    status: "Im lokalen Lab betrieben · aktive Weiterentwicklung",
    kind: "website",
  },
  {
    slug: "release-portal",
    name: "Release Portal",
    type: "OWN SOFTWARE · LIFECYCLE WORKSPACE",
    oneLiner:
      "Bestand, Lifecycle und technische Reviews in einem gemeinsamen Arbeitsbereich.",
    problem:
      "Bestandsinformationen, Security Advisories, Bugs und Lifecycle-Daten müssen für regelmäßige technische Reviews zusammengeführt werden.",
    approach:
      "Das Release Portal verbindet Inventar und kundenbezogene Review-Zyklen. Security-, Bug- und Lifecycle-Bewertungen münden in Reporting und Export. Hintergrundprozesse synchronisieren die benötigten Informationen. Dieser Einblick zeigt ausschließlich das allgemeine Konzept, keine Kundendaten.",
    architecture: [
      "React · Review-Workspace",
      "Fastify · Backend-for-Frontend",
      "Prisma · PostgreSQL",
      "Windmill · Sync & Export",
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
      "Synchronisationsjobs mit sichtbarem Status",
    ],
    learned:
      "Informationen sammeln und Entscheidungen dokumentieren sind zwei unterschiedliche Aufgaben. Ein Review-Workspace braucht beides und einen klaren Weg zum Report.",
    role: "Eigenes Softwareprojekt, mit AI-Unterstützung entwickelt.",
    status: "In Weiterentwicklung",
    kind: "website",
  },
  {
    slug: "rvoice",
    name: "RVoice",
    type: "OWN SOFTWARE · LOCAL AI",
    oneLiner:
      "Sprechen, lokal transkribieren, weiterschreiben. Eine Diktier-App für den Mac.",
    problem:
      "Diktieren soll schnell erreichbar sein und ohne Übertragung der Audioaufnahme an einen Cloud-Dienst funktionieren.",
    approach:
      "RVoice ist eine native App für Apple-Silicon-Macs. Push-to-talk und freihändige Aufnahme sind über Tastenkürzel erreichbar. WhisperKit transkribiert lokal; das Ergebnis wird in die aktive Anwendung eingefügt. Audio bleibt im Arbeitsspeicher und wird anschließend verworfen.",
    architecture: [
      "Tastenkürzel · Aufnahme",
      "Audio · Arbeitsspeicher",
      "WhisperKit · lokale Transkription",
      "Text · aktive Anwendung",
    ],
    stack: ["Swift", "SwiftUI", "WhisperKit", "macOS", "Apple Silicon"],
    features: [
      "Push-to-talk und freihändige Aufnahme",
      "Lokale Transkription nach einmaligem Modelldownload",
      "Abbrechen mit Escape und Status in der Menüleiste",
    ],
    learned:
      "Ein kleines Werkzeug kann tief in den Alltag greifen. Tastenkürzel, klare Zustände und das Zusammenspiel mit macOS sind dabei genauso wichtig wie das Modell.",
    role: "Eigenes Softwareprojekt, mit AI-Unterstützung entwickelt.",
    status: "Lokal nutzbare macOS-App",
    kind: "website",
  },
  {
    slug: "campus",
    name: "Ein Campus. Viele Verbindungen.",
    type: "NETWORK ENGINEERING",
    oneLiner:
      "Cisco und Meraki vom vorbereiteten Gerät in den produktiven Betrieb bringen.",
    problem:
      "Ein neuer Unternehmensstandort brauchte eine zentral administrierbare, redundant ausgelegte Netzwerkinfrastruktur.",
    approach:
      "Im Projektteam wurden die Komponenten vorbereitet. Mein Schwerpunkt lag auf Aufbau, Verkabelung und Inbetriebnahme der Core-, Security- und Access-Komponenten vor Ort. Dazu gehörten die Prüfung der Konnektivität und die Unterstützung der Inhouse-Verkabelung.",
    architecture: [
      "Core · Catalyst 9500",
      "Security · Meraki MX",
      "Distribution · MS425",
      "Access · MS355",
    ],
    stack: [
      "Cisco Catalyst 9500",
      "Meraki MX105",
      "MS425 / MS355",
      "Meraki Dashboard",
      "10 GbE / SFP+",
    ],
    features: [
      "Vorbereitung der Komponenten im Team",
      "Temporäre Erreichbarkeit über LTE-Backup",
      "Konnektivitätsprüfung vor der Betriebsübergabe",
    ],
    learned:
      "Dieses Projekt verbindet die technische Vorbereitung mit der Realität vor Ort: Verkabelung, Erreichbarkeit und Funktionsprüfung gehören genauso zur Lösung wie die Konfiguration.",
    role: "Projektmitarbeit; Aufbau, Verkabelung und Inbetriebnahme im Team.",
    status: "In produktiven Betrieb überführt",
    kind: "campus",
  },
  {
    slug: "uc-modernisierung",
    name: "Ein neues Kapitel für die Telefonie.",
    type: "COLLABORATION & LIFECYCLE",
    oneLiner:
      "Eine Cisco-UC-Umgebung modernisieren – mit einem klaren Weg von Analyse bis Migration.",
    problem:
      "Für eine bestehende Telefonieplattform musste geklärt werden, ob die Zukunft in der Cloud oder in einer modernisierten On-Premises-Umgebung liegt.",
    approach:
      "In Kundenworkshops wurden Anforderungen und Alternativen besprochen. Nach der Entscheidung für On-Premises führte ich das CUCM-Upgrade von 12.5 auf 15 eigenständig durch, aktualisierte acht ISR-Router und migrierte die Plattform in das vCenter-Datacenter des Kunden.",
    architecture: [
      "Anforderungen & Entscheidung",
      "CUCM 12.5 → 15",
      "VMware vCenter",
      "Funktionsprüfung & Betrieb",
    ],
    stack: [
      "CUCM 12.5 / 15",
      "Cisco ISR 4331",
      "Cisco UCS · Plattform",
      "VMware vCenter",
      "Datenimport",
    ],
    features: [
      "Cloud-/On-Premises-Abwägung im Workshop",
      "Neue virtuelle Maschinen und Datenmigration",
      "Softwareaktualisierung und abschließende Funktionsprüfung",
    ],
    learned:
      "Die technische Migration beginnt lange vor dem ersten Upgrade. Eine gemeinsam getroffene Plattformentscheidung macht die weitere Umsetzung nachvollziehbar.",
    role: "Technische Beratung und Planung im Team; eigenständiges CUCM-Upgrade und Migration.",
    status: "Modernisiert und in Betrieb überführt",
    kind: "uc",
  },
  {
    slug: "lifecycle",
    name: "Den nächsten Schritt früher sehen.",
    type: "OPERATIONS & RELEASE MANAGEMENT",
    oneLiner:
      "Aus Softwareständen, Advisories und Lifecycle-Daten wird verständlicher Handlungsbedarf.",
    problem:
      "Unterschiedliche Produktlebenszyklen, neue Releases und Sicherheitsinformationen müssen kontinuierlich bewertet und für die jeweiligen Kunden verständlich aufbereitet werden.",
    approach:
      "Ich prüfe relevante Cisco-EoX-Informationen, Security Advisories und Software-Releases. Daraus entstehen kundenspezifische Reports, Hinweise auf Nachfolgeprodukte und die Unterstützung bei Priorisierung und Nachverfolgung von Maßnahmen.",
    architecture: [
      "Cisco EoX / Advisories / Releases",
      "Technische Bewertung",
      "Kundenspezifischer Report",
      "Priorisierung & Maßnahmen",
    ],
    stack: [
      "Cisco EoX",
      "Cisco Security Advisories",
      "Cisco Software Releases",
      "Microsoft Excel",
    ],
    features: [
      "Regelmäßige Bewertung neuer Informationen",
      "Monatliche kundenspezifische Reports",
      "Replacement-Produkte und technische Maßnahmen",
    ],
    learned:
      "Ein Report hilft dann, wenn er eine nächste Entscheidung ermöglicht. Technische Informationen brauchen einen klaren Bezug zum betreuten Bestand.",
    role: "Kontinuierliche technische Prüfung, Bewertung und Reporting; Unterstützung der Maßnahmenplanung.",
    status: "Kontinuierliche Aufgabe",
    kind: "lifecycle",
  },
  {
    slug: "personal-website",
    name: "Ein persönlicher Platz im Web.",
    type: "OWN SOFTWARE · THIS WEBSITE",
    oneLiner:
      "Netzwerke, Projekte und Persönlichkeit in einer eigenen Website zusammenbringen.",
    problem:
      "Eine persönliche Website soll auch jenseits eines einzelnen beruflichen Moments funktionieren und Raum für neue Projekte lassen.",
    approach:
      "Diese Seite verbindet datengetriebene Inhalte mit einer ruhigen Scroll-Erzählung. Projektansichten und Präsentationsmodus greifen auf dieselben Inhalte zurück. Entwickelt mit AI-Unterstützung und einem Fokus auf Lesbarkeit, Privatsphäre und Zugänglichkeit.",
    architecture: [
      "Inhaltsdaten · TypeScript",
      "React · Komponenten",
      "Vite · statischer Build",
      "GitHub Pages · Deployment",
    ],
    stack: ["React", "TypeScript", "Vite", "Motion", "Vitest", "Playwright"],
    features: [
      "Präsentationsmodus mit Tastatursteuerung",
      "Eigenständige Projektansichten",
      "Responsive Bilder und Reduced Motion",
    ],
    learned:
      "Belegbare Inhalte und gute Dramaturgie müssen zusammenpassen. Eine klare Trennung von Inhalten und Darstellung hält die Seite erweiterbar.",
    role: "Persönliches Website-Projekt; Umsetzung mit AI-Unterstützung.",
    status: "Erste Version",
    kind: "website",
  },
];
