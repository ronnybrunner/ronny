# Content-Inventur und Implementierungsplan

Stand: 2. Oktober 2026. Vollständige Dateisuche einschließlich versteckter Dateien vor Implementierung. Kein bestehendes Git-Repository, keine Anwendung.

## Quellen

- `CV Brunner 2026 09 - FINAL-v2.docx`: Ausbildung, Stationen, sechs ausführliche Infrastrukturprojekte, technische Kenntnisse und Qualifikationen. Primärquelle für Projektbeschreibungen.
- `03_Lebenslauf_Ronny_Brunner.pdf`: zwei Seiten, bestätigt Stationen und Kompetenzen, enthält Zertifizierungsdaten. Persönliche Kontaktdaten werden nicht übernommen.
- Auftrag: verheiratet, Vater von zwei Kindern, Familienmensch, Technikenthusiast und eigene Softwareprojekte. Kein Nachweis für konkrete Softwarearchitekturen.
- `Bilder/ronny.png`: authentisches Einzelporträt, für About geeignet.
- `Bilder/20240623_110212.jpg`: Ronny draußen, für persönlichen Bereich geeignet.
- `Bilder/IMG_0845.HEIC`: Architekturaufnahme; geeignet, aber zugunsten einer klaren Dramaturgie nicht verwendet.
- `Bilder/IMG_0585.HEIC`: Familie mit Kindern. Ohne ausdrückliche Freigabe nicht veröffentlicht.
- Keine Battlecard-Datei, keine Software-Projektdokumente, keine Software-Screenshots, keine separaten Zertifikatsnachweise im Ordner.

## Belegbare Inhalte

Timeline: 2011 Ausbildung; 2014 Privatkundentechnik; 2016 Messe/Event-IT; 2018 Operations Manager II; 2026 AI-Qualifikation laut CV. Die Rollen 2016/2018 überlappen im CV; nicht künstlich auflösen. Projekte haben nur Dauern, keine Startdaten. Keine Zuordnung zu 2017, 2022 oder 2024 erfinden. G20 nicht belegt: nur internationales Großevent.

Auswahl: UC-Modernisierung, Campus Cisco/Meraki, Lifecycle/Release. Kunden anonymisiert. Teambeiträge ausdrücklich als Teambeiträge darstellen. Keine internen Inventarzahlen, Kundennamen, Netzwerkpläne oder Kontaktdaten veröffentlichen. Architekturillustrationen sind vereinfachte Prinzipbilder, keine Kundenarchitektur.

Zertifizierungen im CV: CCNP Enterprise, CCNP Collaboration, CCNA Automation, AITECH/AIBIZ. Keine unabhängige Verifikation; keine Behauptung über aktuelle Gültigkeit. CCNP Automation in Vorbereitung, nicht erworben. Öffentlich nur zurückhaltende Qualifikationsliste mit Stand September 2026.

## Battlecard-Abgleich anhand der Themen im Auftrag

1. **Persönlich belegt:** Cisco Routing/Switching/LAN/WLAN, Meraki, CUCM, Cisco ISR, Voice Gateways, VMware/vCenter, Windows Server, Lifecycle/Release, Cisco Advisories/EoX, Kundenworkshops, Angebot/Aufwandsschätzung, Bereitschaft im Eventprojekt, PLAN–BUILD–RUN.
2. **Berufliches Umfeld:** Cisco UCS als Plattform der UC-Modernisierung; Security als Kontext aus Security Advisories und Cisco Security-Kenntnissen. Keine konkrete Firepower-/Fortigate-Expertise daraus ableiten. WLAN-AP-Bestand im Campusprojekt ist Umfeld; nicht behaupten, alle APs persönlich implementiert zu haben.
3. **Nicht ausreichend belegt:** UCS-C/B im Einzelnen, Storage, Fortinet/Fortigate, Audiocodes, Aspiria, CASERIS, Dell, Enghouse, NTW, Ferrari, C4B, ASC, ASCOM, Firepower, ASA, FTD/FMC, Umbrella, SecureX, SNORT, MFA/DUO, Zabbix, 24/7-Monitoring, SPOC, CUC/CUP/UCCX/Expressway/CMS, Webex Calling/DI/Hybrid, Teams Direct Routing, CUBE, OTC, einzelne Branchen und Eskalationsverantwortung. Nicht als persönliche Kompetenz veröffentlicht.

## Informationsarchitektur und Phasen

1. Quelleninventur, Belegregeln, datengetriebenes Modell.
2. Dunkles Editorial-Design, große Schrift, Lavendelakzente, kompakte Navigation, Hero.
3. About, Timeline mit belegten Jahren, Expertise, Arbeitsweise.
4. Drei anonymisierte Engineering-Projekte + diese Website; Detailseiten mit Prinzipbildern. Keine fiktiven Software-Screenshots. Fehlende Softwareprojekte bleiben erweiterbar.
5. Einzelporträt + Outdoor-Foto; Familie im Text. Kein erfundenes Homelab-Setup.
6. Motion Reveal, native Scroll, Progress, reduzierte Bewegung.
7. Präsentation aus denselben Sections, Tastatur, Kapitelwahl, Projektlinks, Fullscreen.
8. Vitest, Playwright, Responsive, Accessibility, Produktionsprüfung und Lighthouse.
9. GitHub Pages mit Base-Konfiguration und statischen Einstiegspunkten für alle Detailrouten.

## Erweiterte Quellen nach Nutzerhinweis

Der Nutzer hat die Analyse der Geschwisterordner unter `Programming` ausdrücklich freigegeben. Es wurden nur Dokumentation, Paketdateien und relevante Quellstruktur gelesen; keine produktiven Datenbanken oder Secret-Dateien.

- `watchtower_2/README.md`, `docs/ARCHITECTURE.md`, `apps/{web,api,worker}/package.json`: local-first Advisory-/Release-Plattform, React, Fastify, PostgreSQL/Prisma, modularer Monolith mit Web/API/Worker, Herstellerconnectoren. Live-Oberfläche lokal visuell geprüft. Öffentlich eine nachgestellte Ansicht mit Beispieldaten; kein Firmenlogo, keine lokalen Adressen. Fortinet/F5 sind hier Connector-Implementierungen, keine Behauptung beruflicher Firewall-Expertise.
- `release-portal/apps/{web,bff}/package.json`, `docs/dashboard.md`, `docs/reviews/overview.md`, `docs/operations/sync-jobs-architecture.md`: Inventar, Review-Zyklen, Security/Bug/Lifecycle, Reporting, Windmill. Nur allgemeine Architektur, keine Tabellen-/Endpointdetails. Screenshot entfällt ausdrücklich auf Nutzerwunsch.
- `rvoice/README.md`: Swift/macOS/WhisperKit, lokale Transkription; als drittes eigenes Projekt ausgewählt.
- `ansible-lab/README.md`: lokales Lernlabor mit Docker/Ubuntu, nur als Experimentierumfeld dargestellt.
- `kiezlegende/README.md`, `docs/ARCHITECTURE.md`: spielbarer Browsergame-Prototyp; nicht ausgewählt, um den Projektbereich zu fokussieren.
- `videoload/README.md`: lokale Videoanalyse; nicht ausgewählt.
- `bewerbung/README.md`: privates Bewerbungs-Cockpit/Job Hub; nicht ausgewählt, weil die Seite langfristig persönlich und nicht bewerbungsbezogen wirken soll. Keine dort gespeicherten persönlichen Daten gelesen.
- `tts_server` und Release-Portal-Worktrees/Backups gefunden; keine zusätzlichen öffentlichen Claims daraus.
- Smart Dispatch nicht als Projektordner gefunden.

Die eigene Rolle folgt der Nutzerangabe „Alle meine Projekte“. Keine alleinige manuelle Code-Autorenschaft behauptet. AI-Unterstützung wird transparent benannt. „Was ich mitnehme“ beschreibt Architekturentscheidungen aus den Quellen als redaktionelle Reflexion, keine erfundenen Erfolgsmetriken.
