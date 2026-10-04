# Ronny Brunner — Personal Website

Persönliche Engineering-Website mit Dark-Editorial-Design, echten Projektgeschichten und einem Präsentationsmodus. React, TypeScript, Vite, Motion und Lucide; eigenes CSS und keine große UI-Library. Inhaltssprache: Deutsch.

## Lokal starten

Node.js 24 oder neuer verwenden.

```sh
npm install
npm run dev
```

Die URL wird im Terminal angezeigt (standardmäßig http://127.0.0.1:5173).

```sh
npm run lint
npm test
npm run build
npm run preview
```

`npm lint` ist kein gültiger npm-Befehl; der dokumentierte Lint-Aufruf ist `npm run lint`.

Browser-Smoke-Tests:

```sh
npx playwright install chromium
npm run test:e2e
```

## Aufbau

- `src/content/`: Profil, Stationen, technische Themen und Projekte. Belegregeln in `docs/content-inventory.md`.
- `src/components/`: Navigation, Inhaltsbereiche, Reveal, Bilder und vereinfachte Architekturillustrationen.
- `src/pages/`: Startseite, lazy geladene Projektseiten, Präsentation und Datenschutz.
- `src/hooks/`: kleine History-Routing-Schicht mit Vite-Base-Unterstützung.
- `src/styles/`: responsives Designsystem mit Reduced Motion und Focus States.
- `assets/images/`: ausschließlich optimierte Bildvarianten ohne EXIF/GPS.
- `scripts/routes.mjs`: erzeugt statische Einstiegspunkte für alle Projektseiten, `/present` und `/privacy` sowie eine 404-Fallback-Datei. Direktaufruf und Reload der bekannten Routen funktionieren dadurch auch auf GitHub Pages.
- `tests/`: Vitest-Komponententests und Playwright-Smoke-Tests.

Normale Kapitelnavigation verwendet native Anker. Die Präsentation unter `/present` oder `?present=true` nutzt dieselben Inhalte. Links/rechts wechseln die sieben Folien, `0` (oder `O`) öffnet/schließt die Übersicht, `Escape` verlässt die Präsentation und beendet zuvor gegebenenfalls Fullscreen. Die Übersicht wählt Folien direkt; Fullscreen ist optional. Die normale Website behält ihre fünf Kapitel. Kleine Displays erhalten einen Link zur normalen Website statt abgeschnittener Folien.

## Inhalt und Datenschutz

Keine Bewerbungsaufforderung, keine Skill-Prozente. Der Projektbereich fokussiert Release Portal und Watchtower; Bilder von Kundenanwendungen wurden nicht übernommen. Watchtower wird als **nachgestellte Ansicht mit Beispieldaten** dargestellt. Release Portal bleibt auf ausdrücklichen Wunsch ohne Screenshot. Die Family-Aufnahme wird ohne Freigabe nicht verwendet. Originale, Lebensläufe, lokale Adressen, Datenbanken und Secrets gehören nicht in Git und nicht in `dist`.

Geist Sans und Geist Mono werden als variable WOFF2-Dateien lokal ausgeliefert; die SIL Open Font License 1.1 liegt in `public/fonts/OFL.txt`. Die Website lädt keine externen Fonts, Analytics oder Remote-Anwendungen. Keine Anwendungs-Cookies und keine Formulare. Die Datenschutzseite beschreibt die technische Auslieferung. Vor einer öffentlichen Veröffentlichung Betreiber-/Hostingangaben und gegebenenfalls erforderliche rechtliche Angaben für die reale Domain ergänzen. Das Projekt liegt im öffentlichen Repository [ronnybrunner/ronny](https://github.com/ronnybrunner/ronny). Die Website wird unter [ronnybrunner.github.io/ronny](https://ronnybrunner.github.io/ronny/) über GitHub Pages ausgeliefert.

Bilder neu optimieren (Originale müssen lokal vorhanden sein): `node scripts/images.mjs`. Die Originaldateien werden nicht verändert. Sharp exportiert WebP ohne übernommene Metadaten.

## GitHub Pages

1. Das Repository `ronnybrunner/ronny` ist verbunden. Änderungen auf Branch `main` pushen. Keine Quelldokumente oder Originalfotos hochladen.
2. Settings → Pages → Source: **GitHub Actions**.
3. Der Workflow prüft Lint, Unit-Tests, Build und Browser-Smoke-Tests und deployt anschließend `dist`.
4. Der Base-Pfad wird automatisch aus dem Repositorynamen abgeleitet. Für `name.github.io` gilt `/`, für Projekt-Repositories `/<repo>/`.
5. Bei einer eigenen Domain Repositoryvariable `VITE_BASE_PATH` auf `/` setzen und die Domain in GitHub Pages konfigurieren.

Lokale Vorschau mit Projekt-Base:

```sh
VITE_BASE_PATH=/ronny/ npm run build
npm run preview
```

Dann http://127.0.0.1:4173/ronny/ öffnen. Für normale lokale Vorschau wieder `npm run build` ohne Variable ausführen.

Der Workflow folgt der [Vite-Dokumentation für GitHub Pages](https://vite.dev/guide/static-deploy). OpenGraph-Bild und Favicon werden lokal ausgeliefert. Eine endgültige kanonische Domain wird erst nach Auswahl der Deployment-URL gesetzt.

## Quellen und Abschlussbericht

[Content-Inventur](docs/content-inventory.md) enthält Quellen, Datenabgleich und bewusst ausgelassene Inhalte. [Abschlussbericht](docs/delivery-report.md) dokumentiert Prüfungen, Datenschutzentscheidungen und bekannte Grenzen.

Der [Design-/Content-Pass](docs/design-pass-report.md) dokumentiert die aktuelle Typografie, den Quellenabgleich der beruflichen Timeline, die reduzierte Projektauswahl und die visuellen Prüfungen.

Der aktuelle [Presentation-Pass V3](docs/presentation-v3-report.md) verwendet sieben eigenständige Folien mit eigenen Layouts, vier Experience-Karten und drei Einzelprojektfolien. HOW I WORK bleibt entfernt. `node scripts/audit-presentation.mjs` erzeugt bei laufender Vorschau die vollständige Screenshot-Serie und prüft die Inhaltsgeometrie; Die Browser-Abnahme ist abgeschlossen. Bei belegtem Standardport kann `PLAYWRIGHT_PORT=4174 npm run test:e2e` verwendet werden; für den Audit dann `PRESENTATION_AUDIT_URL=http://127.0.0.1:4174` setzen.
