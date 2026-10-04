import { useState } from "react";
import { profile } from "../content/profile";
import { experience } from "../content/experience";
import type { Project } from "../content/projects";
import { presentationCapabilities } from "../content/skills";
import { Label } from "./Sections";
import { Picture } from "./Picture";
import { Link } from "./Link";
import { Diagram } from "./Diagram";

export function PresentationAboutSlide() {
  return (
    <section
      id="me"
      className="deck-slide personal-slide presentation-about-slide"
      aria-labelledby="presentation-about-title"
    >
      <div className="personal-copy presentation-about-copy">
        <Label number="01">ME</Label>
        <h2 id="presentation-about-title">{profile.greeting}</h2>
        <p className="lead">{profile.intro}</p>
        <p className="body-copy">{profile.story}</p>
        <span className="eyebrow presentation-location">
          TELEKOM · BREMEN / DE
        </span>
      </div>
      <div className="presentation-portrait">
        <Picture />
      </div>
    </section>
  );
}

function GermanyMap({
  activeCity,
  onSelect,
}: {
  activeCity: string;
  onSelect: (index: number) => void;
}) {
  const bremenIndex = experience.findIndex((stage) => stage.city === "Bremen");
  return (
    <svg
      className="germany-map"
      viewBox="0 0 260 310"
      role="group"
      aria-label="Karte Deutschlands mit beruflichen Stationen in Hamburg und Bremen"
    >
      <path
        className="germany-outline"
        d="M123 13 143 23 153 20 164 36 177 39 180 55 196 62 193 78 210 88 205 103 220 115 213 128 220 145 209 157 214 173 202 184 208 200 195 211 196 226 181 233 174 251 160 255 151 271 135 266 123 283 107 275 96 283 84 270 68 274 60 257 44 254 43 237 27 231 32 213 20 201 30 185 22 170 32 155 24 139 39 126 34 111 49 99 43 82 57 73 53 56 71 50 75 34 92 37 103 23 116 28Z"
      />
      <path
        className="germany-north"
        d="M61 58 119 39 174 51 193 81 169 113 108 115 60 95Z"
      />
      <path className="germany-route" d="M102 83 Q119 91 136 70" />
      <g
        className={`map-marker ${activeCity === "Hamburg" ? "active" : ""}`}
        transform="translate(136 70)"
        role="button"
        tabIndex={0}
        aria-label="Hamburg: Ausbildung ab 2011"
        aria-pressed={activeCity === "Hamburg"}
        onClick={() => onSelect(0)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onSelect(0);
          }
        }}
      >
        <circle className="map-marker-hit" r="13" />
        <circle className="map-marker-dot" r="4.5" />
      </g>
      {bremenIndex >= 0 && (
        <g
          className={`map-marker ${activeCity === "Bremen" ? "active" : ""}`}
          transform="translate(102 83)"
          role="button"
          tabIndex={0}
          aria-label="Bremen: aktuelle berufliche Station"
          aria-pressed={activeCity === "Bremen"}
          onClick={() => onSelect(bremenIndex)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onSelect(bremenIndex);
            }
          }}
        >
          <circle className="map-marker-hit" r="13" />
          <circle className="map-marker-dot" r="4.5" />
        </g>
      )}
      <text className="map-city-label" x="148" y="67">
        Hamburg
      </text>
      <text className="map-city-label" x="70" y="83">
        Bremen
      </text>
      <text className="map-country-label" x="129" y="170">
        DE
      </text>
    </svg>
  );
}

export function PresentationExperienceSlide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const station = experience[activeIndex];
  const activeCity = station.city;
  const select = (index: number) => setActiveIndex(index);
  return (
    <section
      id="experience"
      className="deck-slide experience-slide"
      aria-labelledby="presentation-experience-title"
    >
      <div className="deck-heading">
        <Label number="02">EXPERIENCE</Label>
        <h2 id="presentation-experience-title">Beruflicher Werdegang</h2>
      </div>
      <div className="career-map-layout">
        <div className="career-map-panel">
          <GermanyMap activeCity={activeCity} onSelect={select} />
          <div
            className="map-location-legend"
            aria-label="Berufliche Standorte"
          >
            <button
              className={activeCity === "Hamburg" ? "active" : ""}
              onClick={() => select(0)}
            >
              <span /> Hamburg
            </button>
            <button
              className={activeCity === "Bremen" ? "active" : ""}
              onClick={() =>
                select(experience.findIndex((item) => item.city === "Bremen"))
              }
            >
              <span /> Bremen
            </button>
          </div>
        </div>
        <article
          className="career-stage-panel"
          aria-live="polite"
          aria-atomic="true"
        >
          <div key={station.year} className="career-stage-content">
            <p className="career-stage-kicker">
              {station.city.toUpperCase()} <span>·</span> STATION 0
              {activeIndex + 1}
            </p>
            <p className="career-stage-year">{station.year}</p>
            <p className="career-stage-period">{station.period}</p>
            <h3>{station.role}</h3>
            <p className="career-stage-description">{station.summary}</p>
          </div>
          <div className="career-stage-footer">
            <div
              className="career-stage-dots"
              aria-label="Berufliche Stationen"
            >
              {experience.map((item, index) => (
                <button
                  key={item.year}
                  className={activeIndex === index ? "active" : ""}
                  aria-label={`${item.year}: ${item.city}`}
                  aria-current={activeIndex === index ? "step" : undefined}
                  onClick={() => select(index)}
                />
              ))}
            </div>
            <div className="career-stage-actions">
              <button
                onClick={() => select(Math.max(0, activeIndex - 1))}
                disabled={activeIndex === 0}
              >
                Zurück
              </button>
              <button
                onClick={() =>
                  select(Math.min(experience.length - 1, activeIndex + 1))
                }
                disabled={activeIndex === experience.length - 1}
              >
                Nächste Station <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export function PresentationExpertiseSlide() {
  return (
    <section
      id="expertise"
      className="deck-slide capability-slide"
      aria-labelledby="capability-title"
    >
      <div className="deck-heading capability-heading">
        <Label number="03">EXPERTISE</Label>
        <h2 id="capability-title">Technische Schwerpunkte</h2>
      </div>
      <div className="capability-grid capability-grid-six">
        {presentationCapabilities.map((capability, index) => (
          <article
            className="capability-panel"
            key={capability.id}
            aria-labelledby={`capability-${capability.id}`}
          >
            <h3 id={`capability-${capability.id}`}>
              <span>0{index + 1}</span>
              {capability.label}
            </h3>
            <p>{capability.description}</p>
            <ul>
              {capability.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PresentationProjectSlide({
  project,
  number,
}: {
  project: Project;
  number: number;
}) {
  const image = project.presentation.image;
  return (
    <section
      id={project.slug}
      className="deck-slide project-slide"
      aria-labelledby={`slide-${project.slug}`}
    >
      <div className="deck-heading">
        <Label number={String(number).padStart(2, "0")}>
          SELECTED PROJECTS
        </Label>
        <h2 id={`slide-${project.slug}`}>{project.name}.</h2>
      </div>
      <div className="project-slide-grid">
        <div className="project-slide-copy">
          <p className="project-slide-intro">{project.presentation.intro}</p>
          <div className="project-slide-story">
            <div>
              <h3>Problem</h3>
              <p>{project.presentation.problem}</p>
            </div>
            <div>
              <h3>Lösung</h3>
              <p>{project.presentation.solution}</p>
            </div>
          </div>
          <ul className="project-slide-features">
            {project.presentation.highlights.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div className="project-slide-stack">
            <span className="eyebrow">STACK</span>
            <p>{project.stack.join(" · ")}</p>
          </div>
          <div className="project-slide-footnote">
            <span>Eigene Entwicklung · AI-unterstützt</span>
            <Link to={`/projects/${project.slug}`} className="text-link">
              Technischer Einblick ↗
            </Link>
          </div>
        </div>
        <figure className="project-slide-visual">
          {image ? (
            <img
              src={`${import.meta.env.BASE_URL}images/${image.src}`}
              alt={image.alt}
            />
          ) : (
            <Diagram project={project} />
          )}
          <figcaption>
            {image
              ? image.caption
              : "Architekturillustration · vereinfacht, kein Produktscreenshot"}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export function PresentationBeyondSlide({ number }: { number: number }) {
  return (
    <section
      id="beyond"
      className="deck-slide personal-slide beyond-slide"
      aria-labelledby="presentation-beyond-title"
    >
      <div className="personal-copy">
        <Label number={String(number).padStart(2, "0")}>BEYOND</Label>
        <h2 id="presentation-beyond-title">Abseits der Technik.</h2>
        <p className="lead">{profile.beyondText}</p>
      </div>
      <div className="presentation-outdoor">
        <Picture outdoor />
      </div>
    </section>
  );
}
