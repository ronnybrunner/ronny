> Bericht zum vorherigen Website-Pass. Änderungen an Präsentation, Portrait und Kapitelzahl beschreibt der neuere [Presentation-Pass](presentation-pass-report.md).

# Design-, Content- und Typography-Pass

Stand: 2. Oktober 2026. Gezielte Überarbeitung des bestehenden Aufbaus; Kapitelstruktur, native Scroll-Navigation, dunkle Flächen, persönliche Fotos, PLAN / BUILD / RUN und Präsentation bleiben erhalten.

## 1. Texte und Informationshierarchie

| Bereich | Vorher | Jetzt |
| --- | --- | --- |
| Hero | Wechselnde Identitäten mit „ENGINEER. BUILDER. DAD.“ und „Und immer eine neue Idee.“ | Statische technische Einordnung; „Netzwerke, Infrastruktur und eigene Software.“ |
| About | Lange Selbsterklärung, zusätzlicher Familienabsatz und „Builder“-/„Dad ×2“-Chips | Begrüßung und Technikgedanke bleiben; ein kompakter Absatz zu Beruf und eigener Software |
| Experience | „Ein Weg. Viele Perspektiven.“ und sloganartige Stationstitel | „Beruflicher Werdegang.“; sachliche Aufgaben und Zeiträume |
| Expertise | „Technik. Mit Zusammenhang.“ und werbliche Themenüberschriften | „Technische Schwerpunkte.“; konkrete Aufgaben und Technologien |
| Arbeitsweise | „Eine Lösung endet nicht mit der Konfiguration.“ | „Von der Planung bis zum Betrieb.“; präzisere Anforderungen, Integration, Tests, Betrieb und Lifecycle |
| Projects | „Aus Ideen wird Praxis.“; mehrere Software- und Infrastrukturkarten | „Eigene Software.“; Release Portal und Watchtower gemäß anschließender Nutzerpräzisierung |
| Release-Portal-Visual | „Ordnung im Wandel.“ | „Inventar. Reviews. Reporting.“ mit sichtbarer Windmill-Anbindung |
| Projektseiten | „Was ich mitnehme.“ als Reflexion | Problem, Ansatz, Architektur, Funktionen und Stack, Ergebnis und Stand |
| Technologien | „Mein technisches Koordinatensystem.“ | „Technologien und Werkzeuge.“; NETWORK, COLLABORATION, OPERATIONS, BUILD, TOOLS |
| Lab | „THE PLAYGROUND“ und „CURIOSITY DOESN’T CLOCK OUT.“ | LAB / AUTOMATION; belegtes Ansible-/Ubuntu-Lernlabor und lokale Softwareentwicklung |
| Beyond | „HUSBAND. DAD ×2. HUMAN.“ und „Das Leben hat mehr als einen Tab.“ | „Abseits der Technik.“; Familie, zwei Kinder, gemeinsame Zeit und Reisen |
| Footer / Metadaten | „Builder / Family Guy“, Neugier-Slogans | Network & Infrastructure Engineer, Softwareentwicklung und Bremen |

Die künstlichen Foto-Captions „Der Mensch hinter den Systemen.“ und „Mal eine andere Perspektive.“ entfallen. „Moin, ich bin Ronny.“ sowie „Ich mag Technik, die funktioniert. Und die Frage, wie sie noch besser werden kann.“ bleiben bewusst erhalten.

## 2. Visuelle Reduktion

- Serifenschrift und Kursivrollen vollständig entfernt.
- Hero von maximal 260 px auf maximal 128 px reduziert; normale Abschnittstitel kleiner als About/Beyond.
- Hero-Orbits und dekorative Monogrammfläche entfernt; keine Glows.
- Neutralgrau statt lavendelfarbener Textflächen, Tags, Diagrammrahmen und großer aktiver Expertise-Titel.
- Lavendel bleibt für kleine Punkte, PLAN/BUILD/RUN-Punkte, aktive Navigation, Timeline, Link-Unterstreichungen, Hover und Fokus.
- Portrait ohne versetzten Dekorahmen; beide Fotos ohne CSS-Farbfilter, ohne Caption.
- Watchtower-Vorschau ohne perspektivische Drehung und Schlagschatten. Release Portal ohne dekorative Kreise/Farbverlauf.
- Sichtbares Branding in Navigation und Präsentation auf „R.“ reduziert.
- Präsentation mit kompakter Topbar, kleineren Symbolen und ruhigen Steuerflächen. Übersicht, sechs Kapitel, Pfeile, Vollbild und Tastatursteuerung erhalten.
- Experience in der Desktop-Präsentation kompakter; längere Kapitel und mobile Ansichten bleiben vertikal scrollbar.

## 3. Fonts

Lokal gebündelte variable WOFF2-Dateien in `public/fonts/`:

- Geist Sans: Body 400, Headlines 500; Hero `clamp(4rem, 8vw, 8rem)`.
- Geist Mono: Metadaten, Kapitelnummern, Labels, Zeitraum, technische Tags, Navigation und Präsentationssteuerung; überwiegend 400.
- Sans-Fallback: `"Geist", "Inter", system-ui, sans-serif`.
- Mono-Fallback: `"Geist Mono", "JetBrains Mono", ui-monospace, monospace`.
- `font-display: swap`, Sans-Preload, variable Gewichte 100–900, keine externen Font-Anfragen.

Quelle: [Vercel Geist](https://github.com/vercel/geist-font), unveränderte Dateien aus Commit `10dc7658f13c38a474cde201bb09a4617267545b`, `packages/next/dist/fonts/{geist-sans,geist-mono}`. SIL Open Font License 1.1 liegt vollständig in `public/fonts/OFL.txt` bei.

## 4. Experience vor / nach

| Jahr | Vorher | Nachher |
| --- | --- | --- |
| 2011 | Ausbildung, Hamburg, „Der Anfang: Technik zum Anfassen.“ | Ausbildung zum IT-Systemelektroniker · Telekom; 09/2011–02/2014, Hamburg |
| 2014 | Senior Fachkraft Technik, „Dort, wo Technik gebraucht wird.“ | Senior Fachkraft Technik Privatkunden; 02/2014–01/2016, Hamburg |
| 2016 | Messe-/Eventmanagement, „Wenn der Termin nicht warten kann.“ | IT-Infrastruktur Spezialist · Messe- und Eventmanagement; 01/2016–07/2018, Hamburg |
| 2018 | Operations Manager II, „Das Ganze im Blick.“ | Operations Manager II · Network & Infrastructure Services; seit 06/2018, Bremen; aktueller Aufgabenbereich im Text |
| 2026 | Weiterbildung „Automatisierung & AI“ als Timeline-Station | Entfernt; AI-Qualifikation weiterhin im separaten Qualifikationsbereich, Entwicklung im Software-/Lab-Kontext |

DOCX und PDF erneut abgeglichen. Das DOCX benennt die Eventrolle als IT-Infrastruktur Spezialist; das PDF als Sachbearbeiter Messe- und Eventmanagement. Die technische Einordnung folgt dem ausführlicheren DOCX. Die von Ronny bereits bestätigten Orte haben Vorrang vor abweichenden Originalangaben. Die Überlappung Juni/Juli 2018 bleibt entsprechend den Quellen erhalten. Keine erfundenen Stationen für 2017, 2022, 2024 oder 2026; keine unbelegte G20-Zuordnung.

## 5. Projektauswahl und entfernte Verweise

Öffentlich ausgewählt: **Release Portal** und **Watchtower**. Smart Dispatch entfällt auf Nutzerwunsch. Die weiteren bisherigen Projektkarten und Detailrouten entfallen zugunsten dieser Auswahl.

RVoice aus Projektmodell, Projektübersicht, Diagramm-Sonderbehandlung, Tech-Liste, Lab-Text und Lab-Illustration entfernt. Die generierten Routen und Präsentationslinks beziehen sich ausschließlich auf das reduzierte Projektmodell. Kein Suchindex ist implementiert; keine separaten RVoice-Screenshotassets werden öffentlich verwendet. Private Geschwisterordner wurden nicht verändert. Historische interne Inventurnotizen bleiben als Quellenhistorie erhalten und werden nicht ausgeliefert.

Windmill wird als angebundene Automatisierungsplattform für Synchronisation und Export genannt, im Stack und Architekturüberblick sichtbar. Quellen erneut geprüft: `release-portal/docs/operations/sync-jobs-architecture.md` und `docs/reviews/report-export-jobs.md`. Keine Kundendaten oder konkreten Verbindungsparameter übernommen.

## 6. Verifikation

- `npm run format`, `npm run lint`, `npm test`: bestanden; sieben Komponententests.
- `npm run build`: TypeScript, Vite und statische Route-Einstiegspunkte bestanden.
- `npm run test:e2e`: zehn Playwright-Tests bestanden, Desktop und Mobile; Navigation, direkte Detailseiten, Tastatur, Reduced Motion und zusätzlich 320 px.
- Visueller Browseraudit: 2560×1440, 1920×1080, 1440×900 als typische MacBook-CSS-Auflösung, 390×844 und 430×932. Alle sechs Präsentationskapitel, Übersicht, Startseite und beide Detailseiten geprüft. Keine horizontale Überbreite oder Browser-Laufzeitfehler.
- Lokales Laden beider Fonts im Browser bestätigt. Vollbild-Eintritt/-Austritt für alle drei Desktopgrößen bestätigt.
- GitHub-Pages-Unterpfad `/ronny/` separat gebaut und mit passend konfigurierter Preview geprüft: Startseite, Präsentation, beide direkte Projektaufrufe und beide Fonts; keine fehlgeschlagenen Requests. Anschließend normalen lokalen Build wiederhergestellt.
- Build-Inhalte auf entfernte Texte, RVoice, WhisperKit und Serif-Font-Namen geprüft; keine Treffer in ausgelieferten JS/CSS-Dateien. Öffentliche Projektrouten: `release-portal`, `watchtower`.
- Screenshotdateien und maschinenlesbarer Audit unter `artifacts/design-pass/`; dieser Ordner ist Git-ignoriert.

## 7. Screenshots

Repräsentative Dateien:

- `artifacts/design-pass/desktop-me-section.png`
- `artifacts/design-pass/desktop-experience-section.png`
- `artifacts/design-pass/desktop-approach-section.png`
- `artifacts/design-pass/desktop-projects-section.png`
- `artifacts/design-pass/desktop-beyond-section.png`
- `artifacts/design-pass/macbook-present-2.png`
- `artifacts/design-pass/mobile390-present-1-full.png`
- `artifacts/design-pass/mobile430-beyond.png`

Zusätzlich liegen beide Projektseiten, alle Kapitel in fünf Auflösungen und kompakte Review-Bögen vor. Responsive Prüfung in Chromium; keine separate Safari-/Firefox-Prüfung und kein Deployment in diesem Auftrag.
