export default function SectionTitle({ title, subtitle }) {
  return (
    <header>
      <h2>{title}</h2>
      {subtitle ? <p style={{ marginTop: '0.5rem', color: '#475569' }}>{subtitle}</p> : null}
    </header>
  );
}
