import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projectCatalog as projects } from "../content/projects";
import { Navigation } from "../components/Navigation";
import { Link } from "../components/Link";
import { Reveal } from "../components/Reveal";
import { ProjectVisual, Footer } from "../components/Sections";
import { Diagram } from "../components/Diagram";
export default function Project({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  useEffect(() => {
    document.title = project
      ? `${project.name} — Ronny Brunner`
      : "Projekt nicht gefunden — Ronny Brunner";
  }, [project]);
  if (!project)
    return (
      <>
        <Navigation home={false} />
        <main id="main" className="section not-found">
          <h1>Projekt nicht gefunden.</h1>
          <Link to="/">Zur Startseite</Link>
        </main>
      </>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <>
      <Navigation home={false} />
      <main id="main" className="project-page">
        <div className="project-page-hero">
          <Link className="text-link" to="/#projects">
            <ArrowLeft size={17} /> Alle Projekte
          </Link>
          <p className="eyebrow">
            {project.type.replace("OWN SOFTWARE", "EIGENE SOFTWARE")}
          </p>
          <h1>{project.name}</h1>
          <p className="lead">{project.oneLiner}</p>
          <div className="project-meta">
            <div>
              <span>MEINE ROLLE</span>
              <p>{project.role}</p>
            </div>
            <div>
              <span>STATUS</span>
              <p>{project.status}</p>
            </div>
          </div>
        </div>
        <Reveal className="project-page-visual">
          <ProjectVisual project={project} />
        </Reveal>
        <div className="project-detail-grid">
          <span className="eyebrow">HINTER DEM PROJEKT</span>
          <div>
            <Reveal>
              <h2>Das Problem.</h2>
              <p>{project.problem}</p>
            </Reveal>
            <Reveal>
              <h2>Der Ansatz.</h2>
              <p>{project.approach}</p>
            </Reveal>
            <Reveal>
              <h2>Die Architektur.</h2>
              <Diagram project={project} />
            </Reveal>
            <Reveal>
              <h2>Funktionen und Stack.</h2>
              <ul>
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <div className="tags">
                {project.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
            <Reveal>
              <h2>Ergebnis und Stand.</h2>
              <p>{project.result}</p>
            </Reveal>
          </div>
        </div>
        <Link className="next-project" to={`/projects/${next.slug}`}>
          <span className="eyebrow">NÄCHSTES PROJEKT</span>
          <span>
            {next.name} <ArrowUpRight />
          </span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
