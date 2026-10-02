# Presentation Mode: Gesprächsorientierter Pass

Stand: 2. Oktober 2026. Dark, Geist und dezentes Lavender bleiben erhalten. Die Präsentation hat eigene Darstellungen für Vorstellung und Expertise; die übrigen Kapitel verwenden die vorhandenen Inhalte. Die berufliche Timeline wurde inhaltlich nicht verändert.

## 1. Entfernte Komponenten und Inhalte

- Branding-Link „R.“ aus der Präsentations-Topbar entfernt. Der Kapitelstatus sitzt unabhängig von den rechten Icons exakt mittig.
- `Approach` und seine PLAN-/BUILD-/RUN-Inhalte vollständig aus Anwendung, normaler Startseite, Kapitelregister und CSS entfernt. Historische Dokumentation und ältere Screenshots bleiben als interne Historie erhalten.
- Kein HOW I WORK in Kapitelübersicht, Tastaturreihenfolge oder Progress Dots.
- Präsentations-Expertise verwendet keine Accordion-Komponente, keine Plus-/Minus-Controls und keine Tech-Chips.
- Die normale Website behält ihr Expertise-Accordion und nutzt die geprüften Technologie-Listen aus demselben Inhaltsmodul.

## 2. Neue Kapitelstruktur

| Nummer | Kapitel |
| --- | --- |
| 01 / 05 | ME |
| 02 / 05 | EXPERIENCE |
| 03 / 05 | EXPERTISE |
| 04 / 05 | PROJECTS |
| 05 / 05 | BEYOND |

Fünf Progress Dots; kleine aktive Markierung und dezente Pfeile. Links/Rechts wechseln Kapitel, `0` öffnet/schließt die Übersicht, Escape schließt zuerst die Übersicht und verlässt anschließend die Präsentation. `O` bleibt als kompatibles Tastenkürzel erhalten. Die Übersicht beginnt auch nach Scrollen eines längeren Kapitels wieder am oberen Rand. Vollbild und direkte Projektlinks bleiben nutzbar.

## 3. Expertise-Layout

Eigene `PresentationExpertiseSlide` in `src/components/PresentationSlides.tsx`. Kleine Kapitelzeile, kompakte Überschrift, 2×2 Capability Map mit vier Panels. Dunkler Hintergrund, dünne Border, 18 px Radius, Lavender nur an den Nummern. Pro Panel Beschreibung und vier bis fünf Themen als Textliste.

Desktop-Höhe: Viewport minus 56 px Topbar minus 56 px Bottom Navigation. Der Grid erhält die tatsächlich verbleibende Höhe; für kleinere Fenster gibt es kompaktere Abstände und Schriftgrößen. Keine versteckten Overflow-Crops. Mobile zeigt die vier Panels untereinander und darf scrollen.

## 4. Battlecard-Bereiche und Quellenabgrenzung

Eine eigenständige Battlecard-Datei ist weiterhin nicht im Repository vorhanden. Die Themenliste im Auftrag definiert die Bereiche, ist aber kein pauschaler Nachweis persönlicher Produkterfahrung. Maßgeblich bleibt die bestehende DOCX-/PDF-Quellenprüfung in `docs/content-inventory.md`.

| Bereich | Persönlich belegt und prominent gezeigt (A) |
| --- | --- |
| NETWORKING | Cisco Catalyst, Routing/Switching, LAN/WLAN, Campus Networks, Meraki/SD-WAN; CV-Projekte Campus, SD-WAN Proof of Concept, Eventinfrastruktur |
| COLLABORATION | CUCM, Cisco ISR, Voice Gateways, VoIP/IP-Telefonie, VMware vCenter; UC-Modernisierung und Notfalltelefonie |
| SECURITY | Cisco Security Advisories, Softwarestände, technischer Handlungsbedarf, Upgrade-Maßnahmen; technisches Release-/Lifecycle-Management |
| OPERATIONS & LIFECYCLE | 2nd-/3rd-Level-Support, Troubleshooting, Release Management, Cisco EoX/Lifecycle, technisches Reporting; aktuelle Operations-Rolle und CV-Projekte |

Die schmale Zeile **Technologieumfeld** nennt Cisco UCS als belegte Projektplattform (B), ohne daraus UCS-C-/UCS-B-Spezialisierung abzuleiten. VMware und Microsoft/Windows Server ergänzen den Plattformkontext; praktische Erfahrung damit ist ebenfalls im CV belegt (A). Die A-/B-Kennzeichnung und Quellenreferenzen stehen nur im Datenmodell und im internen Bericht, nicht als Ratings auf der Folie.

Weiterhin ausgeschlossen (C): CUC/CUP/UCCX, Expressway, CMS, CUBE, Webex Calling/DI/Hybrid, Teams Direct Routing, ASA/Firepower/FTD/FMC, Umbrella, SecureX, SNORT, MFA/Duo, Fortigate als berufliche Kompetenz, Zabbix, SPOC/Eskalationsverantwortung, UCS-C/B im Einzelnen, Storage, Dell, Audiocodes, ASCOM und Enghouse. Auch Branchenlabels wurden mangels ausreichender Nachweise nicht ergänzt. Der eigene Watchtower-Fortinet-Connector belegt keine berufliche Fortigate-Expertise.

## 5. Portrait und Vorstellung

Eigene `PresentationAboutSlide`, mit unveränderter Begrüßung „Moin, ich bin Ronny.“ und kompaktem bestehenden Vorstellungstext. Keine zusätzlichen Chips; nur Bremen als kleine Metadatenzeile. Grid-Verteilung etwa 57 % Text / 43 % Bild.

Portrait deutlich größer, vertikal 4:5 mit natürlichem Crop. Responsiver Radius 28–36 px, sehr subtile 1 px Border und weicher Schatten. Keine zweite Rahmenkonstruktion, kein Glow, keine Farbfilter, Körnung oder Vignette. Die normale Website behält ihre bisherige Portraitdarstellung.

## 6. Tests und Build

- Format und ESLint bestanden.
- Acht Vitest-Komponententests bestanden, einschließlich fünf Kapitel, entfernte Branding-/Marketingfolie, sichtbare Capability-Bereiche, Quellenabgrenzung und Tastatursteuerung.
- Playwright: elf Tests bestanden; ein Desktop-Geometrietest wird in der Mobile-Testkonfiguration absichtlich übersprungen, weil dort Scrollen vorgesehen ist.
- Expertise-Geometrie mit geladenen Fonts geprüft: 1920×1080, 2560×1440, 1440×900, 1366×768 und 1280×720. Alle Panel-/Text-/Kontext-Inhalte zwischen den Leisten, gesamte Expertise ohne vertikales Scrollen; Kapitelstatus geometrisch mittig.
- Visueller Chromium-Audit aller fünf Kapitel und Übersicht zusätzlich bei 390×844 und 430×932. Keine horizontale Überbreite oder Browser-Laufzeitfehler. Mobile-Inhalte bleiben bis zum Ende scrollbar.
- Vollbild-Eintritt und -Austritt in allen fünf Desktopgrößen bestätigt.
- `npm run build`: TypeScript, Vite und statische Routen erfolgreich. Kein HOW I WORK oder PLAN BUILD RUN in den ausgelieferten Anwendungsinhalten.

Die strikte Anforderung „ohne Scrollen“ gilt für die Expertise-Folie. Projekte behalten die vertikalen technischen Geschichten; Mobile bleibt scrollbar. Auch die vier Experience-Stationen passen in den fünf geprüften Desktopgrößen über die Navigation; in kurzen Fenstern entfällt dazu die redundante Hamburg-/Bremen-Übersichtszeile, die Ortsangaben pro Station bleiben sichtbar. Keine Veröffentlichung und kein separater Safari-/Firefox-Test in diesem Pass.

## 7. Screenshots und Prüfdaten

Unter `artifacts/presentation-pass/` (Git-ignoriert): alle fünf Kapitel und Übersicht in sieben Größen, Mobile zusätzlich als vollständige Seitenaufnahme, sowie `audit.json`.

Repräsentativ: `desktop-me.png`, `desktop-expertise.png`, `macbook-experience.png`, `compact-expertise.png`, `mobile390-expertise-full.png` und `desktop-overview.png`.

## 8. Veröffentlichung: ergänzende Mobile-Korrektur

Der erste GitHub-Lauf fand bei 320 px eine Überbreite im Release-Portal-Architekturdiagramm. Der lange Windmill-Labeltext vergrößerte die intrinsische Mindestbreite des Inhaltsrasters. Grid-Kinder dürfen jetzt schrumpfen; Diagrammtexte können lange Wörter umbrechen. Der Browser-Test wartet auf geladene Fonts und prüft zusätzlich, dass das Diagramm innerhalb des Inhaltsrasters bleibt. Format, Lint, acht Komponententests, Build sowie elf Browser-Tests mit einem vorgesehenen Mobile-Skip wurden danach lokal erneut erfolgreich ausgeführt.
