import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Quote, Sparkles } from 'lucide-react';

export default function Features() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
        }}>
          {/* LEAP Conference Card */}
          <div style={{
            background: 'var(--bg-secondary)',
            padding: '40px',
            borderRadius: '24px',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-sm)',
            position: 'relative',
            overflow: 'hidden',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease',
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '4px',
              background: 'linear-gradient(90deg, var(--accent-gold), var(--accent-gold-light))'
            }} />
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              color: 'var(--accent-gold)', fontSize: '13px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px',
            }}>
              <Sparkles size={16} /> Featured Event
            </div>
            <h3 style={{
              fontSize: '32px', fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)', marginBottom: '16px', lineHeight: 1.2
            }}>
              LEAP Conference
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '16px', lineHeight: 1.7, marginBottom: '24px' }}>
              Hosted by KSI Jamat Mumbai. Projects, bookings, and donations for our community. Join us as we leap forward in faith and unity.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <span style={{ padding: '6px 14px', background: 'var(--bg-tertiary)', borderRadius: '50px', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)' }}>Projects</span>
              <span style={{ padding: '6px 14px', background: 'var(--bg-tertiary)', borderRadius: '50px', fontSize: '12px', fontWeight: 500, color: 'var(--text-secondary)' }}>Donations</span>
            </div>
          </div>

          {/* Holy Prophet Quote Card */}
          <div style={{
            background: 'var(--accent-green)',
            padding: '40px',
            borderRadius: '24px',
            color: '#fff',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 0.2s',
          }}>
            <Quote size={32} style={{ color: '#d4b483', marginBottom: '20px' }} />
            <p style={{
              fontSize: '17px', lineHeight: 1.8,
              fontStyle: 'italic', fontFamily: 'var(--font-display)',
              marginBottom: '20px', color: 'rgba(255,255,255,0.95)'
            }}>
              "One who goes out to solve differences between a husband and wife, Allah will grant him reward of 1000 martyrs in the way of Allah."
            </p>
            <div style={{ fontSize: '14px', color: '#d4b483', fontWeight: 600, letterSpacing: '0.1em' }}>
              — Holy Prophet (saww)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}