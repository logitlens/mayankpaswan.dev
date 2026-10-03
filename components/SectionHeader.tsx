export function SectionHeader({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <div className="section-head"><div className="kicker"><span>{"//"}</span> {label}</div><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>;
}
