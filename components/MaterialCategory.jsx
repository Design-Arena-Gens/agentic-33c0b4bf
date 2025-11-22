export default function MaterialCategory({ category, items, notes }) {
  return (
    <article className="card" style={{ gap: '1rem' }}>
      <div className="summary-block">
        <h3>{category}</h3>
        {notes ? <p style={{ color: '#475569' }}>{notes}</p> : null}
      </div>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
        {items.map((item) => (
          <li key={item} style={{ color: '#1f2937', lineHeight: 1.5 }}>
            • {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
