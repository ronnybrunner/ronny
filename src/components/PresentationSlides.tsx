import { profile } from "../content/profile";
import { capabilities, technologyEnvironment } from "../content/skills";
import { Label } from "./Sections";
import { Picture } from "./Picture";

export function PresentationAboutSlide() {
  return (
    <section
      id="me"
      className="presentation-about-slide"
      aria-labelledby="presentation-about-title"
    >
      <div className="presentation-about-copy">
        <Label number="01">ME</Label>
        <h2 id="presentation-about-title">{profile.greeting}</h2>
        <p className="lead">{profile.intro}</p>
        <p className="body-copy">{profile.story}</p>
        <span className="eyebrow presentation-location">BREMEN / DE</span>
      </div>
      <div className="presentation-portrait">
        <Picture />
      </div>
    </section>
  );
}

export function PresentationExpertiseSlide() {
  return (
    <section
      id="expertise"
      className="capability-slide"
      aria-labelledby="capability-title"
    >
      <div className="capability-heading">
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
