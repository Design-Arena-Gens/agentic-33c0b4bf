export default function PlanningTimeline({ phases }) {
  return (
    <div className="grid three">
      {phases.map((phase) => (
        <article key={phase.title} className="card" style={{ gap: '1rem' }}>
          <div>
            <h3>{phase.title}</h3>
          </div>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {phase.tasks.map((task) => (
              <li key={task} style={{ color: '#1f2937' }}>
                • {task}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
