# Presentation Mode V3 – eigenständige Gesprächsfolien

Stand: 4. Oktober 2026. **Implementierung und lokale Browser-Abnahme abgeschlossen.** Nach Freigabe der Entwicklungsumgebung konnten Server, Chromium und Git wieder ausgeführt werden. Die frühere Sandbox-Blockade ist behoben; die unten genannten V3-Ergebnisse stammen aus dem neuen Audit, nicht aus V2.

## 1. Aufbau und Layout

Eigene Präsentationskomponenten für alle Inhalte; keine normale Website-Section wird mehr als Folie eingebettet. `src/content/presentation.ts` trennt Slide-Reihenfolge von den fünf Website-Kapiteln. Projekte beziehen sich weiterhin auf das Kapitel PROJECTS.

| Folie | Inhalt |
| --- | --- |
| 01 / 07 | ME |
| 02 / 07 | EXPERIENCE |
| 03 / 07 | EXPERTISE |
| 04 / 07 | RELEASE PORTAL |
| 05 / 07 | WATCHTOWER |
| 06 / 07 | SMART DISPATCH |
| 07 / 07 | BEYOND |

`src/styles/presentation.css` definiert den verfügbaren Inhaltsbereich als Viewport minus obere/untere Navigation. Einheitliche horizontale Abstände, explizite Zwei-Spalten-/2×2-Layouts und Höhenregeln statt `transform: scale()`. Keine Accordion-Controls oder internen Scroller. Overflow wird nicht versteckt, um Layoutfehler nicht zu kaschieren. Die Browser-Geometrietests bestätigen die vollständige Sichtbarkeit aller sieben Folien in fünf Desktopgrößen.

Dark, lokale Geist-Fonts, zurückhaltende Lavender-Akzente und die bisherigen persönlichen Fotos bleiben. Desktop-Ziele bei 1920×1080: Headlines etwa 63 px, wesentliche Inhalte 24 px, sekundäre Texte 19 px, Metadaten 13–15 px. Für kurze Fenster sind Texte zuerst verdichtet; danach werden Abstände und einzelne Schriftgrößen angepasst.

Auf Portrait-Telefonen beziehungsweise unter 761 px Breite/561 px Höhe wird ausdrücklich auf die normale Website verwiesen. Es wird keine unlesbare oder abgeschnittene Desktopfolie erzwungen. Dies ist eine bewusste Desktop-Anforderung des Gesprächsdecks; mobiles Scrollen auf der normalen Website bleibt erhalten.

## 2. ME und BEYOND

Text-/Bildverhältnis etwa 57/43, ME-Fließtext bis 23 px statt vorher maximal 19 px. Intro, Headline und beruflicher Kurztext erhalten klare Abstände. Portrait weiterhin 4:5 mit 28–36 px Radius, dezenter Border und weichem Schatten; kein zweiter Rahmen, Filter oder Glow. Das Originalportrait hat nur 578×585 px; neue Bildinformationen werden nicht künstlich erzeugt.

BEYOND verwendet eine eigene ähnliche Folie, größeren Outdoor-Bildbereich und größeren bestehenden Familienabsatz. Kein neuer Pathos oder längerer Text. Die persönliche Website verwendet weiter ihre bisherige Darstellung.

## 3. Experience

Vier großzügige Karten im 2×2-Raster statt einer schmalen Timeline. Jahresanker, originale Zeiträume und Berufsbezeichnungen, Standort sowie kompakte Beschreibung. Die Hamburg-/Bremen-Verbindungslinie entfällt in der Präsentation.

`src/content/experience.ts` enthält zusätzliche Kurzfassungen neben den unveränderten ausführlichen Beschreibungen. Die vier Stationen und die im CV vorhandene Überlappung 2016/2018 bleiben erhalten. Keine Hobby-/AI-/Automation-Stationen. Die normale Timeline bleibt unverändert.

## 4. Expertise / Quellen

Vier Bereiche bleiben als 2×2 Capability Map vollständig vorhanden. Größere Textlisten, kompaktere Innenabstände, ruhige Kategorienummern und separate Technologieumfeld-Zeile. Die DOCX wurde erneut gelesen; weiterhin keine eigene Battlecard-Datei im Projekt oder den gesuchten Geschwisterquellen gefunden.

- **A, persönliche Erfahrung:** Catalyst, Routing/Switching, LAN/WLAN, Campus Networks, Meraki SD-WAN/AutoVPN; CUCM, ISR, Voice Gateways, VoIP, VMware vCenter; Cisco Security Advisories, Cisco Software Releases, EoX/End-of-Life, Upgrade-/Austauschplanung; Support, Troubleshooting, Release Management, Lifecycle, Reporting.
- **B, Kontext:** Cisco UCS als UC-Projektplattform. VMware und Microsoft/Windows Server ergänzen als belegte Technologien den schmalen Kontextbereich.
- **C, nicht veröffentlicht:** weiterhin keine pauschale Firepower-/Fortigate-/Webex-/Zabbix-Kompetenz oder unbelegten Herstellerlisten. Fortinet als Watchtower-Connector ist keine berufliche Firewall-Expertise.

„Technischer Handlungsbedarf“ wurde in der Kompetenzliste durch konkrete Cisco EoX-/End-of-Life-Themen ersetzt. Quellenmetadaten bleiben intern im gemeinsamen Modell.

## 5. Drei Projektfolien

Ein gemeinsames Layout: Titel, kurze Problem-/Lösungsdarstellung, zwei technische Besonderheiten, Stack, transparente AI-Unterstützung und Link zur ausführlichen Projektseite; rechts große Produktaufnahme beziehungsweise Architekturillustration. Kompaktfassungen stehen beim jeweiligen Projekt im gemeinsamen Inhaltsmodell.

- **Release Portal:** Bestand/Lifecycle, Security-/Bug-/Lifecycle-Reviews, Reporting/Export und Windmill-Automatisierung. Stack bleibt aus den bestehenden Projektdateien übernommen.
- **Watchtower:** öffentliche Herstellerdaten, Connectoren, revisionsbasierte Änderungen und nachvollziehbare Quellen. Eigene Produktaufnahme ersetzt auf der Präsentationsfolie das bisherige Mock-Dashboard.
- **Smart Dispatch:** neu geklonter Ordner `../Smart-Dispatch` auf ausdrücklichen Nutzerhinweis geprüft. Quellen: `README.md`, `SmartDispatch.WinUI/SmartDispatch.WinUI.csproj`, `SmartDispatch.Data/SmartDispatch.Data.csproj`, `docs/smart-release.md`. C#/.NET 8, WinUI 3, SQLite, WebView2, Outlook COM und ClosedXML sind belegt. Outlook-Entwürfe/Kalender gehören zum Meldungsworkflow; Smart-Release-Reports sind Excel-/PDF-Exporte und werden manuell versendet. Kein erfundener automatischer Report-Mailversand oder Produktionsfreigabe. Allgemeine vierstufige Architekturillustration, ausdrücklich kein Screenshot; keine interne Software oder Quelldateien werden öffentlich verteilt.

`projectCatalog` umfasst die drei Projekte. Die normale Homepage verwendet weiterhin die vorhandene Auswahl von Release Portal und Watchtower. Smart Dispatch hat eine zusätzliche Detailroute für den Präsentationslink. Die statischen Build-Einstiegspunkte werden aus dem gemeinsamen Katalog erzeugt.

## 6. Bildquellen

Nach erfolglosen Netzwerk-/Browser-Zugriffsversuchen hat Ronny ausdrücklich die Desktop-Aufnahmen freigegeben:

- `Bildschirmfoto 2026-10-04 um 19.17.13.png`: Watchtower-Advisory-/Quellenansicht. Produktarbeitsbereich ausgeschnitten, ohne Firmenlogo oder Browser-/Desktop-Bereiche. Der Ausschnitt konzentriert sich auf die Advisory-/Revisionsliste, um diese größer lesbar darzustellen. Public Advisories und revisionsbezogene Informationen werden unverändert übernommen; keine Kennzahlen erfunden.
- `Bildschirmfoto 2026-10-04 um 19.17.47.png`: Release Portal. Lifecycle-Panel als Ausschnitt; Kunden-ID, Benutzerleiste, Firmenlogo und Gerätekennungen der rechten Terminliste ausgeschlossen.
- Beide WebP-Dateien sind unter `public/images/` gebündelt. Originale bleiben außerhalb des Repositories, Metadaten werden nicht übernommen. Die finalen Bildausschnitte wurden mit dem Bildbetrachter überprüft. Dies ersetzt keine visuelle Folienabnahme.
- ME/BEYOND: vorhandene authentische Portrait-/Outdoor-Aufnahmen.
- Smart Dispatch: keine passende Aufnahme gefunden; quellenbasierte Illustration.

## 7. Navigation

Sieben Indikatoren mit größeren Trefferflächen, etwas präsentere Pfeile, korrekte Namen/Nummern. Kein Branding links oben, kein HOW I WORK. Links/Rechts wechseln jeweils genau eine Folie. `0`/`O` öffnen/schließen die Übersicht. Escape verlässt die Präsentation auch aus der Übersicht; Fullscreen wird vor dem Routing asynchron beendet. Exit-Ziel einer Projektfolie ist `/#projects`.

## 8. Prüfstatus

- Format, ESLint und elf Vitest-Tests bestanden: sieben Folien, vier Experience-Karten, drei getrennte Projekte, Quellenabgrenzung und Fullscreen-Exit vor Routing auch aus der Übersicht.
- TypeScript und Production Build bestanden; statische Smart-Dispatch-Detailroute und gebündelte WebP-Dateien enthalten.
- Playwright: **13 bestanden, 3 vorgesehen übersprungen**. Die drei Desktop-spezifischen Präsentationsprüfungen laufen nicht in der Telefon-Konfiguration; diese prüft stattdessen den Website-Verweis. Geometrie aller sieben Folien bei 1920×1080, 2560×1440, 1440×900, 1366×768 und 1280×720, jeweils mit und ohne Reduced Motion. Keine Inhalte hinter der Navigation, keine Panel-Clips und kein vertikaler/horizontaler Overflow.
- Screenshot-Audit: **35 Folien-Viewports**, jeweils alle sieben Folien plus Übersicht in fünf Größen. Keine Browser-Laufzeitfehler; Fullscreen-Eintritt und -Austritt in allen fünf Größen bestätigt. Alle sieben Folien bei 1920×1080 sowie die kritischen Inhalte bei 1366×768 visuell geprüft.
- Screenshots und `audit.json` unter `artifacts/presentation-v3/` (Git-ignoriert). Repräsentativ: `1920x1080-02-experience.png`, `1920x1080-05-watchtower.png`, `1366x768-03-expertise.png`; die vollständige Serie enthält jede Folie.
- Port 4173 wird lokal vom Release Portal verwendet. Playwright unterstützt nun `PLAYWRIGHT_PORT`; der erfolgreiche Website-Lauf nutzt 4174. Der erste versehentlich gegen das Release Portal gerichtete Testlauf ist kein Website-Testergebnis. `--strictPort` verhindert unbemerkte Portwechsel des Testservers.
- Zum Wiederholen: Vorschau auf 4174 starten, `PLAYWRIGHT_PORT=4174 npm run test:e2e` und `PRESENTATION_AUDIT_URL=http://127.0.0.1:4174 node scripts/audit-presentation.mjs` ausführen. CI nutzt standardmäßig 4173 und einen eigenen Server.
- Git-Diff auf Whitespacefehler geprüft. Nach lokaler Abnahme erfolgt Commit/Push; GitHub prüft Lint, Unit-/Browser-Tests und Pages-Build nochmals vor automatischer Veröffentlichung.

Es wurde Chromium getestet; kein gesonderter Safari-/Firefox- oder tatsächlicher Teams-Screensharing-Test. Die Telefonansicht verweist ausdrücklich auf die normale Website. Die Präsentationsfolien wurden nicht skaliert oder durch versteckten Overflow passend gemacht.
