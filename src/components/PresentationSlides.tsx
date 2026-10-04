import { profile } from "../content/profile";
import { experience } from "../content/experience";
import type { Project } from "../content/projects";
import { capabilities, technologyEnvironment } from "../content/skills";
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

export function PresentationExperienceSlide() {
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
      <div className="career-grid">
        {experience.map((station) => (
          <article
            className="career-panel"
            key={station.year}
            aria-labelledby={`career-${station.year}`}
          >
            <div className="career-meta">
              <span className="career-year">
                {station.year}
                {station.year === "2018" && <small> — HEUTE</small>}
              </span>
              <span>{station.city}</span>
            </div>
            <p className="career-period">{station.period}</p>
            <h3 id={`career-${station.year}`}>{station.role}</h3>
            <p className="career-description">{station.summary}</p>
          </article>
        ))}
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
      <div className="capability-grid">
        {capabilities.map((capability, index) => (
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
      <div className="capability-environment">
        <span className="eyebrow">TECHNOLOGIEUMFELD</span>
        <p>{technologyEnvironment.map((item) => item.name).join(" · ")}</p>
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
