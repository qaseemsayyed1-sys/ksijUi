export default function SectionTitle({ eyebrow, title, subtitle, align = 'center' }) {
  return (
    <div style={{ textAlign: align, marginBottom: '60px' }}>
      {eyebrow && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          color: 'var(--accent-gold)', fontSize: '13px', fontWeight: 600,
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '16px',
        }}>
          <span style={{ width: '30px', height: '1px', background: 'var(--accent-gold)' }} />
          {eyebrow}
          <span style={{ width: '30px', height: '1px', background: 'var(--accent-gold)' }} />
        </div>
      )}
      <h2 style={{
        fontSize: 'clamp(32px, 5vw, 52px)',
        marginBottom: '16px',
        color: 'var(--text-primary)',
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{
          fontSize: '17px', color: 'var(--text-secondary)',
          maxWidth: '640px',
          margin: align === 'center' ? '0 auto' : '0',
          lineHeight: 1.7,
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}