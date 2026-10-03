import { links } from "@/content/site";

export function Footer() {
  return <footer className="footer shell">
    <div><div className="footer-name">Mayank Paswan</div><p>Software Engineer · AI Engineer · Builder</p></div>
    <div className="footer-links"><a href={links.github}>GitHub</a><a href={links.linkedin}>LinkedIn</a></div>
    <div className="footer-meta"><span><i /> Status: building</span><span>© 2026 Mayank Paswan</span></div>
  </footer>;
}
