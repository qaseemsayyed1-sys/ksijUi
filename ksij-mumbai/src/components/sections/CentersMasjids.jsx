import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import { MapPin, ArrowRight } from 'lucide-react';

const centers = [
  { name: 'Khoja Masjid', location: 'Dongri, Mumbai', desc: 'The historic central mosque of the community.' },
  { name: 'Main Imambada', location: 'Dongri, Mumbai', desc: 'Hosting major Majalis and congregational gatherings.' },
  { name: 'Kearsbaugh Hall', location: 'Bandra, Mumbai', desc: 'Community center for suburban events and classes.' },
  { name: 'Kabrastan (Cemetery)', location: 'Mazgaon, Mumbai', desc: 'The sacred resting place for our community members.' },
];

export default function CentersMasjids() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionTitle 
          eyebrow="Our Network" 
          title="Centers & Masjids" 
          subtitle="Discover our sacred spaces and community centers across Mumbai." 
        />
        
        <div style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease',
        }}>
          {centers.map((center, i) => (
            <div key={i} style={{
              background: 'var(--bg-primary)', 
              padding: '32px', 
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent-gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-gold)', marginBottom: '20px' }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>{center.name}</h3>
              <p style={{ fontSize: '13px', color: 'var(--accent-gold)', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em' }}>{center.location}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{center.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
