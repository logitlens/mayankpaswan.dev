export function SystemDiagram({ compact = false }: { compact?: boolean }) {
  return <div className={`system-diagram ${compact ? "compact" : ""}`} aria-label="Conceptual AI system architecture">
    <div className="diagram-grid" aria-hidden="true" />
    <div className="node node-client"><span>01</span>Application<small>product surface</small></div>
    <div className="connector c1" /><div className="node node-gateway"><span>02</span>Gateway<small>auth · routing</small></div>
    <div className="connector c2" /><div className="node node-agent"><span>03</span>AI system<small>reason · act</small></div>
    <div className="connector c3" /><div className="node node-data"><span>04</span>Data<small>context · memory</small></div>
    <div className="connector c4" /><div className="node node-events"><span>05</span>Events<small>async · observable</small></div>
    {!compact && <div className="diagram-caption"><span>Conceptual system</span><p>Interfaces stay simple. Complexity is controlled at the boundaries.</p></div>}
  </div>;
}
