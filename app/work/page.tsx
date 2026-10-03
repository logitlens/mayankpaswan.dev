import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/site";
export const metadata: Metadata = { title: "Work", description: "AI products, enterprise systems, developer infrastructure, and engineering projects by Mayank Paswan." };
export default function WorkPage(){return <main id="content"><header className="page-hero shell"><div className="kicker"><span>{"//"}</span> Work index</div><h1>Built things,<br/>not buzzwords.</h1><p>Products, enterprise systems, infrastructure, and experiments—each grounded in a problem worth solving.</p></header><section className="work-list shell">{projects.map((p,i)=><ProjectCard project={p} large={i<2} key={p.slug}/>)}</section></main>}
