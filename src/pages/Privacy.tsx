import { Navigation } from "../components/Navigation";
import { Link } from "../components/Link";
export default function Privacy() {
  return (
    <>
      <Navigation home={false} />
      <main id="main" className="section privacy">
        <p className="eyebrow">PERSÖNLICHER SPACE</p>
        <h1>Datenschutz.</h1>
        <p>
          Diese Website lädt keine externen Schriftarten, bindet keine
          Tracking-Dienste ein und setzt durch die Anwendung keine Cookies. Es
          gibt keine Formulare und keine Verbindung zu meinen lokalen
          Anwendungen.
        </p>
        <h2>Technische Auslieferung</h2>
        <p>
          Die Website besteht aus statischen Dateien. Beim Aufruf verarbeitet
          der jeweilige Hostinganbieter technisch notwendige Verbindungsdaten,
          zum Beispiel die IP-Adresse und den Zeitpunkt des Zugriffs. Im lokalen
          Betrieb werden die Dateien direkt vom lokalen Entwicklungs- oder
          Vorschau-Server ausgeliefert.
        </p>
        <p>
          Bei einer Veröffentlichung über GitHub Pages gelten zusätzlich die
          Datenschutzinformationen von GitHub.
        </p>
        <a
          className="text-link"
          href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          rel="noreferrer"
        >
          Datenschutzinformationen von GitHub ↗
        </a>

        <Link to="/" className="text-link">
          ← Zurück zu Ronny
        </Link>
      </main>
    </>
  );
}
