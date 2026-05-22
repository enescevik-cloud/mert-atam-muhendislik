export default function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      {eyebrow && <span className="eyebrow dark">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
