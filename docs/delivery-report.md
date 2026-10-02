> Historischer Bericht zur Erstversion. Den aktuellen Stand nach dem Korrekturauftrag dokumentiert [Design-, Content- und Typography-Pass](design-pass-report.md).

# Abschlussbericht

Stand: 2. Oktober 2026.

## 1. Gebaute Website

Persönliche Website in Deutsch mit dunklem Editorial-Design, großzügigen Abständen, großen Überschriften und gezielten Lavendelakzenten. Der Einstieg stellt Ronny als Engineer, Builder und Dad vor. Native Scroll-Navigation führt durch About, Erfahrung, technische Themen, PLAN–BUILD–RUN, eigene Software, Infrastrukturbeispiele, Tech Universe, Homelab und den persönlichen Abschluss. Keine Bewerbungsaufforderung und kein CV-Download.

Subtile Reveals, Hero-Textwechsel, eine beim Scrollen wachsende Timeline-Linie, Scroll-Progress und ein leichter Hero-Parallax-Effekt. Reduced Motion deaktiviert die Bewegung und den automatischen Textwechsel. Technische Themen sind per zugänglichen Buttons aufklappbar.

Der Präsentationsmodus unter `/present` oder `?present=true` verwendet dieselben Inhaltsbereiche: links/rechts, Kapitelübersicht über `O`, Projekt-Direktlinks, Escape und optionaler Vollbildmodus. Die Website bleibt die Quelle; längere Kapitel behalten native Scroll-Bedienung.

## 2. Verwendete Quellen

Die vollständige Inventur und der Abgleich stehen in [content-inventory.md](content-inventory.md). Primärquellen im Projekt: `CV Brunner 2026 09 - FINAL-v2.docx` und der zweitseitige `03_Lebenslauf_Ronny_Brunner.pdf`. Zusätzlich die persönlichen Angaben im Auftrag und die beiden verwendeten Originalfotos.

Nach ausdrücklicher Freigabe der Geschwisterordner: READMEs, Architektur-/Review-Dokumentation und Paketdateien von `watchtower_2`, `release-portal`, `rvoice` und `ansible-lab`. Weitere Projekte wurden zur Auswahl gesichtet. Watchtower wurde lokal visuell geprüft. Kein Zugriff auf produktive Kundendatenbanken oder Secret-Dateien war nötig.

## 3. Übernommene CV-Inhalte

Orte nach Ronnys ausdrücklicher Korrektur: Ausbildung, Privatkundentechnik und Messe-/Eventmanagement in Hamburg; Operations Manager II in Bremen. Timeline mit 2011 Ausbildung, 2014 Privatkundentechnik, 2016 Messe-/Event-IT, 2018 Operations Manager II und 2026 AI-Qualifikationen. Cisco Routing/Switching/LAN/WLAN, Meraki, Collaboration, Betrieb im 2nd-/3rd-Level, technische Kundenberatung und Lifecycle/Release. Aus der DOCX stammen Campus-Infrastruktur, UC-Modernisierung und kontinuierliches Release-/Lifecycle-Management.

Die Projektbeschreibungen trennen eigenständige Arbeit von Teambeiträgen. Keine erfundenen Projektjahre. Qualifikationen werden als Stand September 2026 dargestellt; CCNP Automation ausschließlich „in Vorbereitung“. Zertifikatdateien lagen nicht vor; die CV-Angaben wurden nicht unabhängig bei Cisco verifiziert. Telefonnummern, Geburtsdaten und private Kontaktdaten wurden nicht übernommen.

## 4. Übernommene Battlecard-Themen

Eine Battlecard-Datei wurde weder im Website-Ordner noch bei der erweiterten Dateisuche gefunden. Die vom Nutzer im Auftrag aufgelisteten Themen wurden systematisch gegen Lebensläufe und Projekte geprüft.

Persönlich belegt und verwendet: Cisco/Meraki, Routing/Switching/LAN/WLAN, CUCM/ISR/Voice Gateways, VMware, Operations, Release/Lifecycle, Cisco EoX/Security Advisories, Anforderungsanalyse, Workshops und technische Umsetzung. PLAN–BUILD–RUN beschreibt Ronnys Arbeitsweise und ist auch durch das Notfalltelefonieprojekt in der DOCX belegt. Cisco UCS wird als Plattformkontext der UC-Modernisierung benannt, ohne spezielle UCS-C/B-Kompetenz zu behaupten.

## 5. Bewusst nicht persönlich zugeschrieben

Keine Claims für Firepower, ASA, FTD/FMC, Umbrella, SecureX, SNORT, Fortigate, MFA/DUO, Zabbix oder 24/7-Monitoring. Ebenso keine unbelegte Expertise für CUC/CUP/UCCX/Expressway/CMS, CUBE, Webex Calling/Hybrid/Dedicated Instance, Teams Direct Routing, OTC, Storage oder die übrigen Battlecard-Hersteller. Keine pauschalen Branchenclaims, SPOC- oder Eskalationsverantwortung. Fortinet und F5 werden ausschließlich als Herstellerconnectoren des belegten Softwareprojekts Watchtower erwähnt.

## 6. Verwendete Projekte

| Projekt              | Darstellung                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Watchtower           | Eigene Advisory-/Release-Plattform, nachgestellte Ansicht mit Beispieldaten, allgemeine Architektur und Detailseite |
| Release Portal       | Inventar, technische Reviews, Lifecycle und Reporting; ausdrücklich ohne Screenshot                                 |
| RVoice               | Native lokale Diktier-App mit Swift/WhisperKit, Prinzipbild und Detailseite                                         |
| Campus-Infrastruktur | Anonymisierter Cisco-/Meraki-Aufbau mit klarer Teamrolle                                                            |
| UC-Modernisierung    | Belegtes CUCM-Upgrade 12.5 → 15 und Plattformmigration                                                              |
| Lifecycle/Release    | Kontinuierliche Bewertung und Reporting, keine internen Bestandszahlen                                              |
| Diese Website        | Zusätzliche Software-Detailseite; React/TypeScript/Vite und Präsentationsmodus                                      |

Job Hub, Kiezlegende und Video Tool wurden zugunsten der Dramaturgie nicht aufgenommen. Smart Dispatch wurde nicht gefunden. Ansible erscheint als Lernlabor im Homelab-Bereich, nicht als behauptete berufliche Spezialisierung.

## 7. Bilder und Visuals

`Bilder/ronny.png` für About, `Bilder/20240623_110212.jpg` für Beyond. Je zwei responsive WebP-Varianten, Lazy Loading, feste intrinsische Maße und korrekte Seitenverhältnisse. Originale unverändert. Metadatenprüfung aller Varianten: kein EXIF, ICC oder XMP.

Das Familienfoto `IMG_0585.HEIC` bleibt ohne ausdrückliche Freigabe privat. `IMG_0845.HEIC` wurde geprüft und nicht verwendet. Projektillustrationen sind eigene vereinfachte Diagramme; Watchtower zeigt eine ausdrücklich gekennzeichnete Nachstellung statt eines Original-Screenshots. Keine erfundenen UI-Screenshots für Release Portal oder RVoice. OpenGraph-PNG und RB-Favicon sind eigene typografische Assets.

## 8. Datenschutz und Anonymisierung

Keine Kundennamen, internen IPs/URLs/Hostnamen, Credentials, Tokens, privaten Telefonnummern oder Familienidentifikatoren im veröffentlichten Inhalt. Keine echten Kundentopologien. Kein Telekom-Logo und keine Firmenwerbung. Keine Verbindung der Website zur lokalen Watchtower-Instanz. Die Beispielzahlen der Nachstellung sind ausdrücklich keine Betriebsmetriken.

Originalfotos, Quelldokumente, `.env`-Dateien, Audit-/Testartefakte und generierte Builds sind von Git ausgeschlossen. Nur `dist` wird für Pages hochgeladen; keine privaten Quellen. Keine externen Fonts, Analytics, Anwendungs-Cookies oder Kontaktformulare.

## 9. Technische Architektur

React + TypeScript + Vite, eigenes CSS, Motion und Lucide. Datenmodelle in `src/content/`; Darstellung in Komponenten und lazy geladenen Seiten. Kleine History-Routing-Schicht mit Vite-Base-Unterstützung. Der Build erzeugt pro Projekt und für Präsentation/Datenschutz statische Einstiegspunkte. Bekannte Direktlinks und Reloads funktionieren ohne serverseitige SPA-Rewrites. Unbekannte Routen zeigen eine Fehleransicht.

Keine große UI-Library. Separate Chunks für Projektseiten, Präsentation und Datenschutz. Produktions-JavaScript initial etwa 127 kB gzip, CSS etwa 6,5 kB gzip. Fotos werden bei Bedarf geladen. Source-Of-Truth für Projekt-Routen ist das Projektmodell.

## 10. Tests

- `npm run lint`: bestanden.
- `npm test`: 7 Vitest-Tests bestanden.
- `npm run build`: TypeScript und Produktionsbuild bestanden.
- `npm run test:e2e`: 10 Playwright-Tests bestanden, Desktop und iPhone-Profil.
- Geprüft: Navigation, Projektseiten samt Direktaufruf/Reload, Präsentationsmodus, Kapitelwahl, Pfeiltasten, Escape, Menüfokus, Skip-Link, Reduced Motion und kleine Displays.
- Extra Pages-Prüfung mit `/ronny/`: Navigation, Detailseite, Reload, Präsentation und Asset-Requests bestanden; keine fehlgeschlagenen Requests.
- Visuelle Prüfung: 1920×1080, 2560×1440, 1440×900, 390×844; zusätzliche Layoutprüfung bei 820×1180 und 320×700. Die auf 320 px zu lange Überschrift wurde angepasst und per E2E nachgeprüft.
- `npm audit`: keine bekannten Schwachstellen im abschließenden Dependency-Stand.

Chromium wurde tatsächlich ausgeführt. Safari/Firefox und echte Mobilgeräte wurden nicht separat getestet.

## 11. Lighthouse

Finale lokale Desktop-Messung auf dem Produktionsbuild mit Lighthouse 13.5 und headless Chromium; Werte in `artifacts/lighthouse-desktop-final.report.json` und `.html`. Die Dateien bleiben lokal und werden nicht eingecheckt. Eine lokale Labormessung garantiert keine identischen Ergebnisse auf einem späteren Hostinganbieter.

| Kategorie      | Ergebnis | Ziel |
| -------------- | -------: | ---: |
| Performance    |      100 | ≥ 90 |
| Accessibility  |      100 | ≥ 95 |
| Best Practices |      100 | ≥ 95 |
| SEO            |      100 | ≥ 90 |

## 12. Git-Status

Das Verzeichnis war anfangs kein Git-Repository. Ein neues Repository mit Branch `main` wurde angelegt. Projektdateien und ausschließlich freigegebene Web-Assets sind versioniert. Private Originale bleiben ignoriert. Abschließender Status nach dem Commit: sauber. Remote `origin` ist mit `https://github.com/ronnybrunner/ronny.git` verbunden. `main` wurde gepusht. Das Repository wurde nach ausdrücklicher Freigabe öffentlich gestellt und GitHub Pages mit GitHub Actions aktiviert.

## 13. Commit

Initialer Commit: `Build personal engineering website`. Die konkrete Commit-ID wird im Abschluss an den Nutzer genannt und ist mit `git log -1 --oneline` abrufbar.

## 14. Lokal starten

```sh
npm install
npm run dev
```

Produktionsvorschau: `npm run build` und `npm run preview`. Node.js 24 oder neuer. Weitere Befehle und Architekturhinweise in [README.md](../README.md).

## 15. GitHub Pages

Workflow in `.github/workflows/deploy.yml`: Lint, Vitest, Root-Build und Playwright, anschließend Build mit dem richtigen Repository-Base-Pfad und Pages-Deployment. Pull Requests werden geprüft; ein Push auf `main` oder manueller Workflow kann deployen. Base-Pfad automatisch aus Repositorynamen; Custom Domain über Repositoryvariable `VITE_BASE_PATH=/`.

Veröffentlichung unter `https://ronnybrunner.github.io/ronny/`. Das Repository und Pages sind eingerichtet; zukünftige Pushes auf `main` starten den geprüften Deployment-Workflow. Eine eigene Domain ist optional. Betreiber-/Hostingangaben und endgültige Domain-Metadaten für die echte Veröffentlichung ergänzen. Die vollständige Anleitung steht in [README.md](../README.md).
