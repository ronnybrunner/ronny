import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { ArrowLeft, ArrowRight, Grid2X2, Maximize, X } from "lucide-react";
import { presentationSlides as slides } from "../content/presentation";
import { projectCatalog as projects } from "../content/projects";
import {
  PresentationAboutSlide,
  PresentationExpertiseSlide,
  PresentationExperienceSlide,
  PresentationProjectSlide,
  PresentationBeyondSlide,
} from "../components/PresentationSlides";
import "../styles/presentation.css";
import { Link } from "../components/Link";
import { navigate } from "../hooks/useRoute";
export default function Present() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");
  const heading = useRef<HTMLDivElement>(null);
  const exit = useCallback(() => {
    const leave = async () => {
      try {
        if (document.fullscreenElement) await document.exitFullscreen();
        navigate(`/#${slides[index].chapter}`);
      } catch {
        setFullscreenError(
          "Vollbild konnte nicht beendet werden. Bitte verlasse es über die Browsersteuerung.",
        );
      }
    };
    void leave();
  }, [index]);
  const move = useCallback((n: number) => {
    setIndex((i) => Math.max(0, Math.min(slides.length - 1, i + n)));
    setOverview(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  const toggleOverview = useCallback(() => {
    setOverview((value) => !value);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  useEffect(() => {
    document.title = "Präsentation — Ronny Brunner";
    const key = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLElement &&
        e.target.closest("input,textarea,select")
      )
        return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        move(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        move(-1);
      }
      if (e.key === "Escape") {
        e.preventDefault();
        exit();
      }
      if (e.key === "0" || e.key.toLowerCase() === "o") {
        e.preventDefault();
        toggleOverview();
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [move, exit, overview, toggleOverview]);
  useLayoutEffect(() => {
    heading.current?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [index, overview]);
  const chapter = slides[index];
  const project = projects.find((p) => p.slug === chapter.id);
  const content = project ? (
    <PresentationProjectSlide project={project} number={index + 1} />
  ) : chapter.id === "me" ? (
    <PresentationAboutSlide />
  ) : chapter.id === "experience" ? (
    <PresentationExperienceSlide />
  ) : chapter.id === "expertise" ? (
    <PresentationExpertiseSlide />
  ) : (
    <PresentationBeyondSlide number={index + 1} />
  );
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      setFullscreenError("");
    } catch {
      setFullscreenError(
        "Vollbild ist hier nicht verfügbar. Der Präsentationsmodus bleibt nutzbar.",
      );
    }
  }
  return (
    <div className="presentation">
      <header className="presentation-header">
        <span aria-live="polite">
          0{index + 1} / 0{slides.length} — {chapter.label}
        </span>
        <div>
          <button
            className="icon-button"
            aria-label="Kapitelübersicht"
            aria-expanded={overview}
            onClick={toggleOverview}
          >
            <Grid2X2 size={20} />
          </button>
          <button
            className="icon-button"
            aria-label="Vollbild umschalten"
            onClick={fullscreen}
          >
            <Maximize size={19} />
          </button>
          <button
            className="icon-button"
            aria-label="Präsentation beenden"
            onClick={exit}
          >
            <X size={21} />
          </button>
        </div>
      </header>
      <main id="main">
        <div
          ref={heading}
          tabIndex={-1}
          className="presentation-focus"
          aria-label={overview ? "Kapitelübersicht" : chapter.title}
        />
        {overview ? (
          <div className="chapter-overview">
            <h1>Kapitelübersicht</h1>
            <div className="chapter-grid">
              {slides.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setIndex(i);
                    setOverview(false);
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                >
                  <span>0{i + 1}</span>
                  <strong>{c.label}</strong>
                  <small>{c.title}</small>
                </button>
              ))}
            </div>
          </div>
        ) : (
          content
        )}
      </main>
      <aside
        className="presentation-size-notice"
        aria-label="Präsentation auf größeren Bildschirmen"
      >
        <h1>Mehr Platz für die Präsentation.</h1>
        <p>
          Öffne die Folien in einem größeren Fenster oder auf einem
          Desktop-Bildschirm. Auf kleinen Displays findest du alle Inhalte auf
          der Website.
        </p>
        <Link to="/">Zur Website ↗</Link>
      </aside>
      {fullscreenError && (
        <p className="fullscreen-error" role="status">
          {fullscreenError}
        </p>
      )}
      <footer className="presentation-controls">
        <button
          className="icon-button"
          disabled={index === 0}
          onClick={() => move(-1)}
          aria-label="Vorherige Folie"
        >
          <ArrowLeft />
        </button>
        <div className="chapter-dots">
          {slides.map((c, i) => (
            <button
              key={c.id}
              className={i === index ? "active" : ""}
              aria-current={i === index ? "step" : undefined}
              aria-label={`Folie ${i + 1}: ${c.title}`}
              onClick={() => {
                setIndex(i);
                setOverview(false);
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
            />
          ))}
        </div>
        <span className="keyboard-hint">
          ← → Folien · 0 Übersicht · ESC Ende
        </span>
        <button
          className="icon-button"
          disabled={index === slides.length - 1}
          onClick={() => move(1)}
          aria-label="Nächste Folie"
        >
          <ArrowRight />
        </button>
      </footer>
    </div>
  );
}
