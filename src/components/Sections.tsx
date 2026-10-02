import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import { profile } from "../content/profile";
import { experience } from "../content/experience";
import { expertise, universe, qualifications } from "../content/skills";
import { projects } from "../content/projects";
import { Reveal } from "./Reveal";
import { Picture } from "./Picture";
import { Diagram } from "./Diagram";
import { Link } from "./Link";
export function Label({
  number,
  children,
}: {
  number: string;
  children: string;
}) {
  return (
    <div className="section-label">
      <span>{number} /</span> {children}
    </div>
  );
}
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span>NETWORK & INFRASTRUCTURE</span>
        <span>BREMEN, DE</span>
      </div>
      <motion.div className="hero-main" style={{ y: reduced ? 0 : y }}>
        <p className="eyebrow">NETWORK ENGINEER · SOFTWARE DEVELOPMENT</p>
        <h1 id="hero-title">
          Ronny
          <br />
          Brunner<span className="lavender">.</span>
        </h1>
        <div className="hero-baseline">
          <p>
            Netzwerke, Infrastruktur
            <br />
            und eigene Software.
          </p>
        </div>
      </motion.div>
      <div className="hero-bottom">
        <a href="#me" className="scroll-link">
          ÜBER MICH <ArrowDown size={16} />
        </a>
        <span>Cisco · Collaboration · Operations</span>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="me" className="section about">
      <Label number="01">ABOUT</Label>
      <div className="about-grid">
        <Reveal>
          <h2>{profile.greeting}</h2>
          <p className="lead">{profile.intro}</p>
          <p className="body-copy">{profile.story}</p>
          <div className="chips">
            {profile.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="portrait-frame" delay={0.15}>
          <Picture />
        </Reveal>
      </div>
    </section>
  );
}
export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 70%"],
  });
  return (
    <section id="experience" className="section experience">
      <Label number="02">EXPERIENCE</Label>
      <Reveal>
        <h2>Beruflicher Werdegang.</h2>
        <p className="section-intro">Deutsche Telekom · seit 2011</p>
      </Reveal>
      <Reveal className="experience-route">
        <div>
          <MapPin size={18} aria-hidden="true" />
          <span>
            Hamburg<small>Ausbildung · Technik · Events</small>
          </span>
        </div>
        <ArrowRight className="route-arrow" size={24} aria-hidden="true" />
        <div>
          <MapPin size={18} aria-hidden="true" />
          <span>
            Bremen<small>Operations · seit 2018</small>
          </span>
        </div>
      </Reveal>
      <div ref={ref} className="timeline">
        <div className="timeline-track">
          <motion.div style={{ scaleY: reduced ? 1 : scrollYProgress }} />
        </div>
        <ol className="timeline-stations">
          {experience.map((item) => (
            <li key={item.year}>
              <Reveal className="timeline-row">
                <div className="timeline-time">
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-period">{item.period}</span>
                </div>
                <div className="timeline-content">
                  <span className="timeline-dot" aria-hidden="true" />
                  {item.city && (
                    <span className="timeline-city">
                      <MapPin size={14} aria-hidden="true" />
                      {item.city}
                    </span>
                  )}
                  <p className="eyebrow">{item.role}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
export function Expertise() {
  const [selected, setSelected] = useState(0);
  return (
    <section id="expertise" className="section expertise">
      <Label number="03">EXPERTISE</Label>
      <div className="expertise-layout">
        <div className="sticky-heading">
          <h2>Technische Schwerpunkte.</h2>
          <p className="section-intro">
            Mein Schwerpunkt liegt dort, wo Infrastruktur und Betrieb
            zusammenkommen.
          </p>
          <span className="small-note">
            Wähle ein Thema, um mehr zu erfahren.
          </span>
        </div>
        <div className="expertise-list">
          {expertise.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.03}>
              <article
                className={
                  selected === i ? "expertise-item selected" : "expertise-item"
                }
              >
                <h3>
                  <button
                    aria-expanded={selected === i}
                    aria-controls={`topic-${item.id}`}
                    onClick={() => setSelected(selected === i ? -1 : i)}
                  >
                    <span className="topic-number">0{i + 1}</span>
                    {item.label}
                    {selected === i ? <Minus size={19} /> : <Plus size={19} />}
                  </button>
                </h3>
                {selected === i && (
                  <div className="topic-content" id={`topic-${item.id}`}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                    <div className="tags">
                      {item.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Projects() {
  const own = projects;
  return (
    <section id="projects" className="section projects">
      <Label number="04">PROJECTS</Label>
      <Reveal className="project-intro">
        <h2>Eigene Software.</h2>
        <p>
          Werkzeuge für technische Reviews, Security Advisories und
          Software-Releases. Mit AI-Unterstützung entwickelt.
        </p>
      </Reveal>
      {own.map((project, i) => (
        <Reveal className="project-feature" key={project.slug}>
          <div className="project-copy">
            <p className="eyebrow">
              0{i + 1} /{" "}
              {project.type.replace("OWN SOFTWARE", "EIGENE SOFTWARE")}
            </p>
            <h3>{project.name}</h3>
            <p className="lead">{project.oneLiner}</p>
            <div className="project-problem">
              <span>PROBLEM</span>
              <p>{project.problem}</p>
            </div>
            <div className="tags">
              {project.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link className="text-link" to={`/projects/${project.slug}`}>
              Technischer Einblick <ArrowUpRight size={19} />
            </Link>
          </div>
          <ProjectVisual project={project} />
        </Reveal>
      ))}
    </section>
  );
}
export function ProjectVisual({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return project.slug === "watchtower" ? (
    <WatchtowerPreview />
  ) : project.slug === "release-portal" ? (
    <div className="release-visual">
      <span className="eyebrow">RELEASE PORTAL</span>
      <span className="release-title">
        Inventar.
        <br />
        Reviews.
        <br />
        Reporting.
      </span>
      <div
        className="release-flow"
        aria-label="Windmill synchronisiert Daten für den Review-Workspace und automatisiert Exporte"
      >
        <span>Windmill · Automatisierung</span>
        <ArrowDown size={16} aria-hidden="true" />
        <span>Review-Workspace</span>
        <ArrowDown size={16} aria-hidden="true" />
        <span>Reporting & Export</span>
      </div>

      <span className="small-note">Architekturüberblick · vereinfacht</span>
    </div>
  ) : (
    <Diagram project={project} />
  );
}
function WatchtowerPreview() {
  return (
    <div
      className="watchtower-preview"
      role="img"
      aria-label="Nachgestellte Watchtower-Ansicht mit Beispieldaten, keine echten Betriebsdaten"
    >
      <div className="preview-bar">
        <span>
          WATCHTOWER <b>2</b>
        </span>
        <span className="signal" />
      </div>
      <div className="preview-nav">
        <span>Overview</span>
        <span>Advisories</span>
        <span>Releases</span>
      </div>
      <div className="preview-content">
        <p className="eyebrow">ADVISORY INTELLIGENCE</p>
        <h4>Advisory-Übersicht</h4>
        <div className="preview-stats">
          <div>
            <span>Advisories</span>
            <b>128</b>
          </div>
          <div>
            <span>New today</span>
            <b>12</b>
          </div>
          <div>
            <span>Critical</span>
            <b>8</b>
          </div>
        </div>
        <p className="preview-subheading">Latest advisory changes</p>
        {[
          "Cisco · Security Advisory",
          "Broadcom · Software Update",
          "Fortinet · Security Advisory",
        ].map((x, i) => (
          <div className="preview-row" key={x}>
            <span>{x}</span>
            <span>{["UPDATED", "NEW", "UPDATED"][i]}</span>
          </div>
        ))}
        <div className="preview-source">
          <span className="signal" /> Sources connected <span>→</span>
        </div>
      </div>
      <span className="preview-caption">
        Nachgestellte Ansicht · Beispieldaten
      </span>
    </div>
  );
}
export function Universe() {
  return (
    <section className="section universe" aria-labelledby="universe-title">
      <div className="section-label">TECH / TOOLS</div>
      <Reveal>
        <h2 id="universe-title">Technologien und Werkzeuge.</h2>
      </Reveal>
      <div className="universe-grid">
        {universe.map((group, i) => (
          <Reveal key={group.name} delay={i * 0.08}>
            <h3>{group.name}</h3>
            <div>
              {group.items.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="qualifications">
        <span className="eyebrow">QUALIFIKATIONEN · STAND SEPTEMBER 2026</span>
        <p>{qualifications.join(" / ")}</p>
        <span className="small-note">CCNP Automation: in Vorbereitung.</span>
      </div>
      <div className="homelab">
        <div>
          <span className="eyebrow">LAB / AUTOMATION</span>
          <h3>Software und Automatisierung.</h3>
          <p>
            Watchtower betreibe ich im lokalen Lab. Mit Ansible und
            Ubuntu-Containern erprobe ich Automatisierung. AI unterstützt die
            Entwicklung meiner eigenen Softwareprojekte.
          </p>
        </div>
        <div
          className="lab-diagram"
          role="img"
          aria-label="Lokales Ansible-Lernlabor mit Docker und Ubuntu sowie Watchtower im Homelab"
        >
          <span>ANSIBLE · AUTOMATION</span>
          <i aria-hidden="true">↓</i>
          <span>DOCKER · UBUNTU LAB</span>
          <i aria-hidden="true">↓</i>
          <span>HOMELAB · WATCHTOWER</span>
        </div>
      </div>
    </section>
  );
}
export function Beyond() {
  return (
    <section id="beyond" className="section beyond">
      <Label number="05">BEYOND</Label>
      <div className="beyond-grid">
        <Reveal className="outdoor-frame">
          <Picture outdoor />
        </Reveal>
        <Reveal className="beyond-copy">
          <h2>Abseits der Technik.</h2>
          <p className="lead">{profile.beyondText}</p>
        </Reveal>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">RONNY BRUNNER</p>
        <p className="footer-name">
          Ronny Brunner<span>.</span>
        </p>
        <p>Network & Infrastructure Engineer · Softwareentwicklung</p>
      </div>
      <div className="footer-bottom">
        <span>Bremen, Deutschland</span>
        <a href="#top">
          Zurück nach oben <ArrowUpRight size={15} />
        </a>
        <Link to="/privacy">Datenschutz</Link>
        <span>© {new Date().getFullYear()} Ronny Brunner</span>
      </div>
    </footer>
  );
}
export const sectionComponents = {
  me: About,
  experience: Experience,
  expertise: Expertise,
  projects: Projects,
  beyond: Beyond,
};
