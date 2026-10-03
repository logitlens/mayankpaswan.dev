import type { Metadata } from "next";
import { SystemDiagram } from "@/components/SystemDiagram";
import { techGroups } from "@/content/site";
export const metadata: Metadata={title:"Engineering",description:"How Mayank Paswan works across AI systems, backend, frontend, cloud, and infrastructure."};
export default function Engineering(){return <main id="content"><header className="page-hero shell"><div className="kicker"><span>{"//"}</span> Engineering</div><h1>How I build.</h1><p>Capability is more useful than a list of tools. This is the system context behind the stack.</p></header><section className="section shell"><div className="tech-grid">{techGroups.map((g,i)=><article key={g.name}><div className="tech-index">0{i+1}</div><h3>{g.name}</h3><div className="tech-list">{g.items.map(x=><span key={x}>{x}</span>)}</div><p>USED IN<br/><b>{g.used}</b></p></article>)}</div></section><section className="section shell"><SystemDiagram/></section></main>}
