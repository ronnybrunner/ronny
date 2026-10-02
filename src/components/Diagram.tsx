import type { Project } from "../content/projects";
import {
  Network,
  Radio,
  Server,
  Layers,
  ArrowDown,
  Code2,
  ScanLine,
  RefreshCw,
} from "lucide-react";
export function Diagram({
  project,
  compact = false,
}: {
  project: Project;
  compact?: boolean;
}) {
  const Icon =
    project.kind === "campus"
      ? Network
      : project.kind === "uc"
        ? Radio
        : project.kind === "website"
          ? Code2
          : RefreshCw;
  return (
    <div
      className={`diagram diagram-${project.kind} ${compact ? "compact" : ""}`}
      role="img"
      aria-label={`Vereinfachte Illustration: ${project.architecture.join(", ")}. Keine reale Kundenarchitektur.`}
    >
      <div className="diagram-top">
        <span>
          <span className="signal" />{" "}
          {project.kind === "website"
            ? "PERSONAL PROJECT"
            : "ENGINEERING NOTES"}
        </span>
        <ScanLine size={17} />
      </div>
      <div className="diagram-symbol">
        <Icon strokeWidth={1} size={70} />
        <span>
          {project.kind === "campus"
            ? "CAMPUS"
            : project.kind === "uc"
              ? "COLLABORATION"
              : project.kind === "lifecycle"
                ? "LIFECYCLE"
                : "ARCHITECTURE"}
        </span>
      </div>
      <div className="diagram-nodes">
        {project.architecture.map((node, i) => (
          <div className="node-wrap" key={node}>
            {i > 0 && <ArrowDown size={15} className="node-arrow" />}
            <div className="diagram-node">
              {i % 2 === 0 ? <Server size={16} /> : <Layers size={16} />}
              <span>{node}</span>
              <small>0{i + 1}</small>
            </div>
          </div>
        ))}
      </div>
      <span className="diagram-caption">
        {project.kind === "website"
          ? "Architektur · vereinfacht"
          : "Prinzipbild · bewusst vereinfacht"}
      </span>
    </div>
  );
}
