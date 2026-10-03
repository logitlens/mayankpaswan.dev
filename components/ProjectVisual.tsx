import type { Project } from "@/content/site";

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === "scan") return <div className="project-visual visual-scan"><div className="scan-product"><span>PRODUCT / 8901030</span><strong>Almond granola</strong><div className="score">82<small>/100</small></div><div className="scan-line" /><p>Recognized · analysis ready</p></div><div className="float-chip">better choice ↗</div></div>;
  if (project.visual === "content") return <div className="project-visual visual-content"><div className="content-rail"><i /><i /><i /></div><div className="copy-lines"><span>BRAND VOICE / ACTIVE</span><b /><b /><b /><em>Generate with context</em></div><div className="metric-float">60–70%<small>manual effort ↓</small></div></div>;
  if (project.visual === "mcp") return <div className="project-visual visual-mcp"><code><span>$</span> mcp.connect()</code><div className="mcp-flow"><b>DEV</b><i>→</i><b>MCP</b><i>→</i><b>API</b></div><div className="tool-list"><span>seo.analyze</span><span>keywords.generate</span><span>content.optimize</span></div></div>;
  if (project.visual === "services") return <div className="project-visual visual-services"><div className="service">WEB</div><i>→</i><div className="service">API</div><i>⇄</i><div className="service accent">QUEUE</div><div className="service wide">CONTAINERIZED SERVICES</div></div>;
  if (project.visual === "vision") return <div className="project-visual visual-vision"><div className="speckle" /><div><span>FRAME ANALYSIS</span><strong>Batch 08 / 24</strong><p>processing image signal…</p></div></div>;
  return <div className="project-visual visual-agent"><div className="agent-line"/><div className="agent-nodes"><span>APP</span><b>GATEWAY</b><strong>AGENT</strong><b>GATEKEEPER</b><span>TRACE</span></div><div className="trace">reasoning trace · validate · route · observe</div></div>;
}
