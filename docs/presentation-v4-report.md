# Presentation Mode V4

Stand: 4. Oktober 2026. Die normale Portfolio-Navigation und die ausführlichen Projektseiten bleiben erhalten.

## Folien

Der Präsentationsmodus hat jetzt sechs Kapitel: ME, EXPERIENCE, EXPERTISE, RELEASE PORTAL, WATCHTOWER und BEYOND. Smart Dispatch bleibt über seine Projektseite auf der normalen Website erreichbar, erscheint aber weder als Folie noch in der Übersicht. Nummern, Fortschrittsanzeige und direkte Auswahl leiten sich aus der Folienliste ab.

Folienwechsel verwenden `motion`, das bereits im Projekt installiert ist: 12 px horizontale Bewegung mit Fade, gespiegelt bei Rückwärtsnavigation. `AnimatePresence` zeigt währenddessen jeweils nur eine Folie und wartet kurz auf das Ausblenden. Bei `prefers-reduced-motion` fällt die Animation auf 80 ms ohne Bewegung zurück. Die Portraitfolie hat einen einmaligen leichten Fade und 12 px Entrance; der Lavender-Schein liegt als schwacher, unscharfer Hintergrund hinter dem Foto.

## Berufliche Stationen

Die 2×2-Karten wurden im Presentation Mode durch eine eigene SVG-Deutschlandkarte plus Stationsansicht ersetzt. Der Umriss ist aus den [Natural Earth Admin 0 Countries](https://www.naturalearthdata.com/downloads/10m-cultural-vectors/10m-admin-0-countries/) vereinfacht und auf das Kartenformat projiziert (Public Domain). Die Komponente liest weiterhin die vier Einträge aus `src/content/experience.ts` samt originalen Zeiträumen, Berufsbezeichnungen, Standorten und Kurzbeschreibungen. Hamburg und Bremen sind aus ihren Koordinaten geografisch korrekt relativ zueinander eingezeichnet. Hamburg wählt die Ausbildung 2011; Bremen die Station ab 2018. Die vier Stationspunkte und die Schaltflächen Vor/Zurück wählen auch die Zwischenstationen 2014 und 2016. Globale Pfeiltasten wechseln weiter die Folien; die Station wechselt ausdrücklich per Klick.

## Technische Schwerpunkte

Die Folie zeigt ein 3×2-Raster: Networking, Collaboration, Security & Lifecycle, Operations, Platforms & Vendors sowie Development & Automation. Die Inhalte liegen als Präsentationsdatensatz bei den technischen Quelldaten in `src/content/skills.ts`; die normale Website nutzt weiterhin ihre bisherigen Abschnitte.

Persönliche Erfahrung und Projektkontext bleiben getrennt. Belegt sind unter anderem Catalyst, Routing/Switching, LAN/WLAN, Meraki SD-WAN, CUCM, ISR/Voice Gateways, VMware vCenter, Security-Advisory- und Release-Bewertung sowie Operations/Lifecycle. Cisco UCS ist ausdrücklich als Projektplattform eingeordnet. Microsoft/Windows Server ist im CV belegt. Eigene Entwicklung führt React, TypeScript, Fastify API, PostgreSQL, Docker, Git/GitHub, Python/Bash und Linux; Windmill ist anhand der Release-Portal-Synchronisations- und Exportjobs belegt. Ansible wird als Lernlabor geführt. Für n8n, Zabbix, Firepower, Fortinet Firewall, AudioCodes, Enghouse und ASCOM wurde keine hinreichende persönliche Belegstelle festgestellt; sie werden nicht als Expertise aufgeführt. Eine separate Battlecard-Datei liegt weiterhin nicht in den Quellen.

## Bilder und visuelle Prüfung

Das Portrait ist im ME-Raster näher am Textbereich zentriert. Die bisherigen runden Kanten bleiben erhalten. Der Lavender-Glow liegt hinter dem Bild, ohne Filter auf dem Foto.

`npm run lint`, `npm test` (11 bestanden), `npm run build` und `PLAYWRIGHT_PORT=4174 npm run test:e2e` (13 bestanden, drei mobile Überspringungen für Desktoppräsentationsprüfungen) liefen erfolgreich. Die Browserprüfung deckt Keyboardsteuerung, interne Stationsauswahl, schnelle Folienwechsel, Overview, Fullscreen und Reduced Motion ab.

Der Browser-Audit bestätigt 30 Folienansichten (sechs Slides × fünf Viewports) mit gelesenen Fonts und geladenen Bildern: 1920×1080, 2560×1440, 1440×900, 1366×768 und 1280×720. Die Seiten haben dabei keine vertikale/horizontale Überbreite und keinen Inhalt außerhalb des Folienbereichs. Die drei neuen Schlüsselfolien wurden bei 1920×1080 und die kritischen Layouts zusätzlich bei 1366×768 visuell geprüft. Screenshotdateien liegen im ignorierten Ordner `artifacts/presentation-v4/`; sie werden nicht in die öffentliche Website ausgeliefert.
