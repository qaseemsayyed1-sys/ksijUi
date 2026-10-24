export default function CommitteeCard({ committee }) {
  return (
    <div
      style={{
        background: 'var(--bg-secondary)',
        padding: '32px 28px',
        borderRadius: '20px',
        border: '1px solid var(--border-color)',
        transition: 'var(--transition)',
        height: '100%',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
        e.currentTarget.style.borderColor = 'var(--accent-gold)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <div style={{
        width: '56px', height: '56px', borderRadius: '16px',
        background: 'var(--bg-tertiary)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '26px', marginBottom: '18px',
        border: '1px solid var(--border-color)',
      }}>
        {committee.icon}
      </div>
      <h4 style={{
        fontSize: '18px', fontWeight: 600,
        color: 'var(--text-primary)', marginBottom: '8px',
      }}>
        {committee.name}
      </h4>
      <p style={{
        fontSize: '14px', color: 'var(--text-secondary)',
        lineHeight: 1.7,
      }}>
        {committee.description}
      </p>
    </div>
  );
}