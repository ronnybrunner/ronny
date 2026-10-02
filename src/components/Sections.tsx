import { useEffect, useRef, useState } from "react";
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
import { profile, approach, heroIdentities } from "../content/profile";
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
  const [identity, setIdentity] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (
      reduced ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible")
        setIdentity((i) => (i + 1) % heroIdentities.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reduced]);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span>PERSONAL SPACE / RONNY BRUNNER</span>
        <span>BREMEN, DE</span>
      </div>
      <motion.div className="hero-main" style={{ y: reduced ? 0 : y }}>
        <p className="eyebrow hero-identity">
          <span className="sr-only">Engineer, Builder und Dad.</span>
          <span aria-hidden="true" key={identity}>
            {heroIdentities[identity]}
          </span>
        </p>
        <h1 id="hero-title">
          Ronny
          <br />
          Brunner<span className="lavender">.</span>
        </h1>
        <div className="hero-baseline">
          <p>
            Netzwerke. Systeme.
            <br />
            <span className="serif lavender">Und immer eine neue Idee.</span>
          </p>
          <span className="hero-coordinates" aria-hidden="true">
            [ CONNECTING THE DOTS ]<br />
            01 — ∞
          </span>
        </div>
      </motion.div>
      <div className="hero-bottom">
        <a href="#me" className="scroll-link">
          SCROLL TO EXPLORE <ArrowDown size={16} />
        </a>
        <span>Technik im Kopf. Mensch im Mittelpunkt.</span>
      </div>
      <div className="hero-orbit" aria-hidden="true">
        <div />
        <div />
        <div />
        <span>RB</span>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section id="me" className="section about">
      <Label number="01">ME</Label>
      <div className="about-grid">
        <Reveal>
          <h2>{profile.greeting}</h2>
          <p className="lead">{profile.intro}</p>
          <p className="body-copy">{profile.story}</p>
          <p className="body-copy">{profile.personal}</p>
          <div className="chips">
            {profile.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
        </Reveal>
        <Reveal className="portrait-frame" delay={0.15}>
          <Picture />
          <div className="photo-note">
            <span>Der Mensch hinter den Systemen.</span>
            <span>↗</span>
          </div>
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
        <h2>
          Ein Weg.
          <br />
          <span className="serif">Viele Perspektiven.</span>
        </h2>
        <p className="section-intro">
          Von der Technik vor Ort bis zum Blick auf die gesamte Infrastruktur.
        </p>
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
      <Label number="03">WHAT I DO</Label>
      <div className="expertise-layout">
        <div className="sticky-heading">
          <h2>
            Technik.
            <br />
            <span className="serif">Mit Zusammenhang.</span>
          </h2>
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
export function Approach() {
  return (
    <section id="approach" className="section approach">
      <Label number="04">HOW I WORK</Label>
      <Reveal>
        <h2>
          Eine Lösung endet nicht
          <br />
          <span className="serif">mit der Konfiguration.</span>
        </h2>
      </Reveal>
      <div className="approach-grid">
        {approach.map((step, i) => (
          <Reveal delay={i * 0.12} key={step.name}>
            <span className="step-index">
              0{i + 1} {i < 2 && <ArrowRight size={22} />}
            </span>
            <h3>
              {step.name}
              <span>.</span>
            </h3>
            <h4>{step.verb}</h4>
            <p>{step.text}</p>
          </Reveal>
        ))}
      </div>
      <p className="approach-after">
        Und dann: beobachten, lernen, verbessern. <span>↻</span>
      </p>
    </section>
  );
}
export function Projects() {
  const own = projects.filter(
    (p) => p.type.startsWith("OWN SOFTWARE") && p.slug !== "personal-website",
  );
  const engineering = projects.filter(
    (p) => !p.type.startsWith("OWN SOFTWARE"),
  );
  return (
    <section id="projects" className="section projects">
      <Label number="05">THINGS I'VE BUILT</Label>
      <Reveal className="project-intro">
        <h2>
          Aus Ideen
          <br />
          wird <span className="serif lavender">Praxis.</span>
        </h2>
        <p>
          Eigene Software. Und ausgewählte Einblicke in die Infrastrukturarbeit
          dahinter.
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
              <span>DIE IDEE DAHINTER</span>
              <p>{project.problem}</p>
            </div>
            <div className="tags">
              {project.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <Link className="text-link" to={`/projects/${project.slug}`}>
              Projekt entdecken <ArrowUpRight size={19} />
            </Link>
          </div>
          <ProjectVisual project={project} />
        </Reveal>
      ))}
      <p className="website-note">
        Auch diese Website ist ein eigenes Projekt.{" "}
        <Link className="text-link" to="/projects/personal-website">
          Ein Blick hinter die Seite <ArrowUpRight size={15} />
        </Link>
      </p>
      <div className="engineering-heading">
        <span className="eyebrow">AUS DER PRAXIS</span>
        <p>Infrastruktur ist auch etwas, das man baut.</p>
      </div>
      <div className="engineering-grid">
        {engineering.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.08}>
            <Link to={`/projects/${p.slug}`} className="engineering-card">
              <span className="eyebrow">{p.type}</span>
              <Diagram project={p} compact />
              <h3>{p.name}</h3>
              <p>{p.oneLiner}</p>
              <span className="text-link">
                Einblick <ArrowUpRight size={17} />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
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
        Ordnung
        <br />
        im Wandel<span>.</span>
      </span>
      <span className="small-note">
        Eigene Software · Einblick ohne Screenshot
      </span>
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
        <h4>Alles im Blick.</h4>
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
      <Label number="06">TECH UNIVERSE</Label>
      <Reveal>
        <h2 id="universe-title">
          Mein technisches
          <br />
          <span className="serif">Koordinatensystem.</span>
        </h2>
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
          <span className="eyebrow">THE PLAYGROUND</span>
          <h3>
            Lokal ausprobieren.
            <br />
            Bewusst weiterdenken.
          </h3>
          <p>
            Watchtower läuft im Homelab. Ein Ansible-Lernlabor mit
            Ubuntu-Containern bietet Raum für Automatisierung. Und RVoice bringt
            lokale AI direkt auf den Mac.
          </p>
        </div>
        <div
          className="lab-diagram"
          role="img"
          aria-label="Technische Spielwiese: Mac mit RVoice und Ansible, Docker-Container und Watchtower im Homelab. Ohne Netzwerkdetails."
        >
          <span>MAC · RVOICE / ANSIBLE</span>
          <i>↓</i>
          <span>DOCKER · UBUNTU LAB</span>
          <i>↔</i>
          <span>HOMELAB · WATCHTOWER</span>
        </div>
      </div>
      <div className="lab-note">
        <span className="eyebrow">CURIOSITY DOESN'T CLOCK OUT.</span>
        <p>
          Auch abseits des Jobs probiere ich Ideen aus und baue eigene Software.
          Nicht jeder Versuch wird ein Projekt. Aber jeder bringt mich ein Stück
          weiter.
        </p>
      </div>
    </section>
  );
}
export function Beyond() {
  return (
    <section id="beyond" className="section beyond">
      <Label number="07">BEYOND THE KEYBOARD</Label>
      <div className="beyond-grid">
        <Reveal className="outdoor-frame">
          <Picture outdoor />
          <span className="outdoor-caption">Mal eine andere Perspektive.</span>
        </Reveal>
        <Reveal className="beyond-copy">
          <span className="eyebrow">HUSBAND. DAD ×2. HUMAN.</span>
          <h2>
            Das Leben
            <br />
            hat mehr
            <br />
            <span className="serif lavender">als einen Tab.</span>
          </h2>
          <p className="lead">{profile.beyondText}</p>
          <p className="body-copy">
            Und die besten Momente brauchen meistens gar keinen Bildschirm.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="eyebrow">THAT'S ME.</p>
        <p className="footer-name">
          Ronny Brunner<span>.</span>
        </p>
        <p>Network Engineer · Builder · Family Guy</p>
      </div>
      <div className="footer-bottom">
        <span>Mit Neugier gebaut. Und noch lange nicht fertig.</span>
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
  approach: Approach,
  projects: Projects,
  beyond: Beyond,
};
