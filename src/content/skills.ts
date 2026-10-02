// Evidence levels are editorial metadata, never a skill rating.
// A: CV-backed personal work. B: project platform/context. C: omitted.
export interface Capability {
  id: string;
  label: string;
  description: string;
  topics: string[];
  evidence: "A";
  source: string;
}
export const capabilities: Capability[] = [
  {
    id: "network",
    label: "NETWORKING",
    description:
      "Campus-Infrastruktur aufbauen und Standortanbindungen prüfen.",
    topics: [
      "Cisco Catalyst",
      "Routing & Switching",
      "LAN / WLAN",
      "Campus Networks",
      "Meraki / SD-WAN",
    ],
    evidence: "A",
    source:
      "CV: Cisco-/Meraki-Campus, Meraki SD-WAN Proof of Concept, Eventinfrastruktur",
  },
  {
    id: "collaboration",
    label: "COLLABORATION",
    description: "Cisco Unified Communications modernisieren und integrieren.",
    topics: [
      "CUCM",
      "Cisco ISR",
      "Voice Gateways",
      "VoIP / IP-Telefonie",
      "VMware vCenter",
    ],
    evidence: "A",
    source: "CV: UC-Lifecycle-Modernisierung und UC-Notfalltelefonie",
  },
  {
    id: "security",
    label: "SECURITY",
    description:
      "Security Advisories und Softwarestände bewerten, Maßnahmen ableiten.",
    topics: [
      "Cisco Security Advisories",
      "Softwarestände",
      "Technischer Handlungsbedarf",
      "Upgrade-Maßnahmen",
    ],
    evidence: "A",
    source:
      "CV: Technisches Release- und Lifecycle-Management; keine spezifische Firewall-Implementierung belegt",
  },
  {
    id: "operations",
    label: "OPERATIONS & LIFECYCLE",
    description:
      "Infrastruktur betreuen und technische Änderungen nachverfolgen.",
    topics: [
      "2nd- / 3rd-Level-Support",
      "Troubleshooting",
      "Release Management",
      "Cisco EoX / Lifecycle",
      "Technisches Reporting",
    ],
    evidence: "A",
    source:
      "CV: Operations Manager II, Release-/Lifecycle-Management und Eventbetrieb",
  },
];
export const technologyEnvironment = [
  {
    name: "Cisco UCS",
    evidence: "B",
    source: "CV: Plattform der UC-Modernisierung, ohne UCS-C/B-Spezialisierung",
  },
  {
    name: "VMware",
    evidence: "A",
    source: "CV: vCenter-Migration und Virtualisierung",
  },
  {
    name: "Microsoft / Windows Server",
    evidence: "A",
    source: "CV: UC-Notfalltelefonie und IT-Kenntnisse",
  },
] as const;

export const expertise = [
  {
    id: "network",
    label: "NETWORKING",
    title: "Campus-Netzwerke und Standortanbindung",
    text: "Cisco LAN/WLAN, Routing und Switching. Campus-Infrastrukturen aufbauen und Meraki SD-WAN in einem Proof of Concept prüfen.",
    tags: capabilities.find((c) => c.id === "network")!.topics,
  },
  {
    id: "collaboration",
    label: "COLLABORATION",
    title: "Cisco Unified Communications",
    text: "Cisco Unified Communications modernisieren, Router aktualisieren und Telefonie kontrolliert in den Betrieb überführen.",
    tags: capabilities.find((c) => c.id === "collaboration")!.topics,
  },
  {
    id: "operations",
    label: "OPERATIONS",
    title: "Analyse und technischer Support",
    text: "Störungen analysieren, Kundenanforderungen verstehen und Infrastruktur im 2nd- und 3rd-Level-Support begleiten.",
    tags: ["Troubleshooting", "Kundenberatung", "Systemintegration"],
  },
  {
    id: "lifecycle",
    label: "LIFECYCLE",
    title: "Release- und Lifecycle-Management",
    text: "Cisco EoX, Security Advisories und neue Releases bewerten. Technischen Handlungsbedarf verständlich machen und Maßnahmen nachverfolgen.",
    tags: ["Release Management", "Cisco EoX", "Security Advisories"],
  },
  {
    id: "building",
    label: "BUILDING",
    title: "Eigene Software und Automatisierung",
    text: "Neben dem Beruf entwickle ich Web-Anwendungen mit React, TypeScript und Fastify. Python, Bash und ein Ansible-Lernlabor nutze ich für Automatisierung; AI unterstützt mich beim Entwickeln.",
    tags: [
      "React / TypeScript",
      "Fastify",
      "Python / Bash",
      "AI-assisted Development",
    ],
  },
];
export const universe = [
  {
    name: "NETWORK",
    items: [
      "Cisco",
      "Catalyst",
      "Meraki",
      "Routing",
      "Switching",
      "LAN / WLAN",
    ],
  },
  {
    name: "COLLABORATION",
    items: ["CUCM", "Cisco ISR", "Voice Gateways", "VoIP"],
  },
  {
    name: "OPERATIONS",
    items: [
      "Lifecycle",
      "Release Management",
      "Troubleshooting",
      "Funktionstests",
    ],
  },
  {
    name: "BUILD",
    items: ["React", "TypeScript", "Fastify", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    name: "TOOLS",
    items: [
      "Python",
      "Bash",
      "Linux",
      "Windows Server",
      "macOS",
      "Git",
      "GitHub",
    ],
  },
];
export const qualifications = [
  "CCNP Enterprise",
  "CCNP Collaboration",
  "CCNA Automation",
  "Cisco AI Technical Practitioner",
];
