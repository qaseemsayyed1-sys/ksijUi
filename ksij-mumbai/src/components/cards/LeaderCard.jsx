import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

export default function LeaderCard({ leader }) {
  return (
    <div
      style={{
        background: 'var(--bg-secondary)',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid var(--border-color)',
        transition: 'var(--transition)',
        height: '100%',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
        e.currentTarget.style.borderColor = 'var(--accent-gold)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '1/1', overflow: 'hidden' }}>
        <img
          src={leader.image}
          alt={leader.name}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center top',
            transition: 'transform 0.6s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent 50%)',
        }} />
      </div>

      <div style={{ padding: '20px 22px 22px' }}>
        <div style={{
          fontSize: '11px', fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          color: 'var(--accent-gold)', marginBottom: '6px',
        }}>
          {leader.role}
        </div>
        <h4 style={{
          fontSize: '18px', fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '14px', lineHeight: 1.35,
        }}>
          {leader.name}
        </h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-gold)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--bg-tertiary)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <Mail size={14} />
          </button>
          <button
            style={{
              width: '32px', height: '32px', borderRadius: '50%',
              background: 'var(--bg-tertiary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--accent-gold)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--bg-tertiary)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            <FaLinkedin size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}