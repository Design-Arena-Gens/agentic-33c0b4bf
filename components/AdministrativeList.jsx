export default function AdministrativeList({ steps }) {
  return (
    <div className="grid two">
      {steps.map((step) => (
        <article key={step.title} className="card">
          <h3>{step.title}</h3>
          <p style={{ color: '#475569', lineHeight: 1.6 }}>{step.description}</p>
          <span className="badge">À réaliser : {step.deadline}</span>
        </article>
      ))}
    </div>
  );
}
