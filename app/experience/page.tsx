import type { Metadata } from "next";
import { experience } from "@/content/site";
export const metadata: Metadata={title:"Experience",description:"Professional engineering experience of Mayank Paswan."};
export default function Experience(){return <main id="content"><header className="page-hero shell"><div className="kicker"><span>{"//"}</span> Experience</div><h1>Work, in context.</h1><p>From product interfaces and enterprise AI to the gateways, events, and controls underneath.</p></header><section className="section shell"><div className="timeline">{experience.map((x,i)=><article key={x.company}><div className="timeline-marker"><span>0{i+1}</span></div><div><p>{x.period}</p><h3>{x.company}</h3><strong>{x.role}</strong></div><p>{x.detail}</p></article>)}</div></section></main>}
