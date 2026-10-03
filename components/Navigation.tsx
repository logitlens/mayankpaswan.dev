import Link from "next/link";
import { Github, Linkedin } from "./Icons";
import { links } from "@/content/site";

export function Navigation() {
  return <header className="site-header">
    <Link className="brand" href="/" aria-label="Mayank Paswan home"><span className="brand-mark">MP</span><span>Mayank Paswan</span></Link>
    <nav className="main-nav" aria-label="Main navigation">
      <Link href="/#work">Work</Link><Link href="/#engineering">Engineering</Link><Link href="/#experience">Experience</Link><Link href="/writing">Writing</Link><Link href="/about">About</Link>
    </nav>
    <div className="nav-actions">
      <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
      <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
    </div>
  </header>;
}
