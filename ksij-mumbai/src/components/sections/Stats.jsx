import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const stats = [
  { number: '125+', label: 'Years of Legacy' },
  { number: '5000+', label: 'Community Members' },
  { number: '18+', label: 'Active Committees' },
  { number: '1899', label: 'Year Established' },
];

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} style={{
      padding: '80px 0',
      background: 'var(--bg-tertiary)',
      borderTop: '1px solid var(--border-color)',
      borderBottom: '1px solid var(--border-color)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '40px',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              textAlign: 'center',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.8s ease ${i * 0.1}s`,
            }}>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(38px, 5vw, 56px)',
                fontWeight: 700,
                color: 'var(--accent-gold)',
                lineHeight: 1,
                marginBottom: '8px',
              }}>{s.number}</div>
              <div style={{
                fontSize: '13px', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-secondary)',
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}