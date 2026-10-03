import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata={title:"Résumé",description:"Résumé overview for Mayank Paswan."};
export default function Resume(){return <main id="content" className="plain-page shell"><div className="kicker"><span>{"//"}</span> Résumé</div><h1>Experience,<br/>without the PDF.</h1><p className="lead">A concise, web-native overview is available on the experience page. A downloadable résumé will be added when the source document is available in this repository.</p><div className="hero-actions"><Link className="button primary" href="/experience">View experience</Link><Link className="button" href="/work">View work</Link></div></main>}
