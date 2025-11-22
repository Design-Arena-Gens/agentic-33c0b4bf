export default function ProfessionalCard({ name, mission, livrables, interactions }) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p style={{ color: '#475569', lineHeight: 1.6 }}>{mission}</p>
      <div className="tag-strip">
        {livrables.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>
      {interactions && interactions.length > 0 ? (
        <p style={{ fontSize: '0.85rem', color: '#1e293b' }}>
          Collaboration: <strong>{interactions.join(', ')}</strong>
        </p>
      ) : null}
    </article>
  );
}
