import Link from "next/link";
import type { Project } from "@/content/site";
import { Arrow } from "./Icons";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return <article className={`project-card ${large ? "project-large" : ""}`}>
    <div className="project-top"><span>{project.index}</span><span>{project.eyebrow}</span></div>
    <ProjectVisual project={project} />
    <div className="project-copy"><h3>{project.title}</h3><p>{project.summary}</p>{project.metric && <strong className="inline-metric">{project.metric}</strong>}
      <div className="tags">{project.technologies.slice(0, large ? 6 : 4).map(t => <span key={t}>{t}</span>)}</div>
      <Link className="text-link" href={`/work/${project.slug}`}>View case study <Arrow /></Link>
    </div>
  </article>;
}
