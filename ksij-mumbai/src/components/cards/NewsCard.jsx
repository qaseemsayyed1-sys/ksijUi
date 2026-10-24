import { ArrowUpRight, Calendar } from 'lucide-react';

export default function NewsCard({ item }) {
  return (
    <article
      style={{
        background: 'var(--bg-primary)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        transition: 'var(--transition)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.borderColor = 'var(--accent-gold)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', transition: 'transform 0.6s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      </div>

      <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          fontSize: '12px', fontWeight: 500,
          color: 'var(--accent-gold)', marginBottom: '10px',
        }}>
          <Calendar size={13} /> {item.date}
        </div>
        <h4 style={{
          fontSize: '18px', fontWeight: 600, lineHeight: 1.4,
          color: 'var(--text-primary)', marginBottom: '10px',
        }}>
          {item.title}
        </h4>
        <p style={{
          fontSize: '14px', color: 'var(--text-secondary)',
          lineHeight: 1.7, flex: 1, marginBottom: '16px',
        }}>
          {item.excerpt}
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          fontSize: '13px', fontWeight: 600, color: 'var(--accent-gold)',
        }}>
          Read More <ArrowUpRight size={15} />
        </div>
      </div>
    </article>
  );
}