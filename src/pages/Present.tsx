import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Grid2X2, Maximize, X } from "lucide-react";
import { chapters } from "../content/profile";
import { projects } from "../content/projects";
import { sectionComponents } from "../components/Sections";
import { Link } from "../components/Link";
import { navigate } from "../hooks/useRoute";
export default function Present() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const [fullscreenError, setFullscreenError] = useState("");
  const heading = useRef<HTMLDivElement>(null);
  const exit = useCallback(() => {
    if (document.fullscreenElement) void document.exitFullscreen();
    navigate(`/#${chapters[index].id}`);
  }, [index]);
  const move = useCallback((n: number) => {
    setIndex((i) => Math.max(0, Math.min(chapters.length - 1, i + n)));
    setOverview(false);
    window.scrollTo(0, 0);
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
        if (overview) setOverview(false);
        else exit();
      }
      if (e.key.toLowerCase() === "o") setOverview((x) => !x);
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [move, exit, overview]);
  useEffect(() => {
    heading.current?.focus({ preventScroll: true });
  }, [index, overview]);
  const chapter = chapters[index];
  const Section =
    sectionComponents[chapter.id as keyof typeof sectionComponents];
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
        <Link to="/" className="wordmark">
          Ronny<span>.</span>
        </Link>
        <span aria-live="polite">
          0{index + 1} / 0{chapters.length} — {chapter.label}
        </span>
        <div>
          <button
            className="icon-button"
            aria-label="Kapitelübersicht"
            aria-expanded={overview}
            onClick={() => setOverview(!overview)}
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
            <h1>Worüber sprechen wir?</h1>
            <div className="chapter-grid">
              {chapters.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setIndex(i);
                    setOverview(false);
                    window.scrollTo(0, 0);
                  }}
                >
                  <span>0{i + 1}</span>
                  <strong>{c.label}</strong>
                  <small>{c.title}</small>
                </button>
              ))}
            </div>
            <h2>Direkt zu einem Projekt</h2>
            <div className="present-project-links">
              {projects.map((p) => (
                <Link key={p.slug} to={`/projects/${p.slug}`}>
                  {p.name} ↗
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <Section />
        )}
      </main>
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
          aria-label="Vorheriges Kapitel"
        >
          <ArrowLeft />
        </button>
        <div className="chapter-dots">
          {chapters.map((c, i) => (
            <button
              key={c.id}
              className={i === index ? "active" : ""}
              aria-current={i === index ? "step" : undefined}
              aria-label={`Kapitel ${i + 1}: ${c.title}`}
              onClick={() => {
                setIndex(i);
                setOverview(false);
                window.scrollTo(0, 0);
              }}
            />
          ))}
        </div>
        <span className="keyboard-hint">
          ← → Kapitel · O Übersicht · ESC Ende
        </span>
        <button
          className="icon-button"
          disabled={index === chapters.length - 1}
          onClick={() => move(1)}
          aria-label="Nächstes Kapitel"
        >
          <ArrowRight />
        </button>
      </footer>
    </div>
  );
}
