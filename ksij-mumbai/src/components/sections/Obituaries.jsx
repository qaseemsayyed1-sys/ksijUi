import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import { Calendar, User } from 'lucide-react';

const obituaries = [
  { name: 'Marhoom Sheth Hirjeebhoy Allarakhia', date: '1901', note: 'Martyred protecting the Khoja Masjid.' },
  { name: 'Marhoom Sheth Laljeebhoy Sajan', date: '1901', note: 'Martyred protecting the Khoja Masjid.' },
  { name: 'Marhoom [Recent Member Name]', date: 'October 2026', note: 'Kindly recite Surah Fatiha for the departed soul.' },
];

export default function Obituaries() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionTitle 
          eyebrow="In Loving Memory" 
          title="Community Obituaries" 
          subtitle="Kindly recite Surah Fatiha for our departed brothers and sisters." 
        />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease',
        }}>
          {obituaries.map((ob, i) => (
            <div key={i} style={{
              background: 'var(--bg-primary)',
              padding: '24px',
              borderRadius: '16px',
              borderLeft: '4px solid var(--accent-green)',
              borderTop: '1px solid var(--border-color)',
              borderRight: '1px solid var(--border-color)',
              borderBottom: '1px solid var(--border-color)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{ob.name}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{ob.note}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>
                <Calendar size={14} /> {ob.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
