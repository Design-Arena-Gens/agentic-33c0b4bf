export default function AreaAllocation({ allocation, ratios }) {
  return (
    <div className="grid two">
      {allocation.map((unit) => (
        <article key={unit.label} className="card">
          <h3>{unit.label}</h3>
          <p style={{ color: '#334155' }}>
            Surface attribuée: <strong>{unit.area} m²</strong>
          </p>
          <span className="badge">Typologie {unit.rooms} pièces</span>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            {unit.highlights.map((point) => (
              <li key={point} style={{ color: '#475569' }}>
                • {point}
              </li>
            ))}
          </ul>
        </article>
      ))}
      <article className="card" style={{ background: 'rgba(56, 189, 248, 0.15)' }}>
        <h3>Répartition complémentaire</h3>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
          {ratios.map((item) => (
            <li key={item.label} style={{ color: '#0f172a' }}>
              <strong>{item.label}</strong> : {item.value}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
