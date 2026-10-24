import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import { ArrowRight } from 'lucide-react';

const halls = [
  { name: 'Khoja Masjid Hall', img: '/images/KhojaMasjid.jpg', capacity: '500+ Guests', feature: 'Majlis & Congregations' },
  { name: 'Kearsbaugh Hall', img: '/images/Kearsbaughall.jpg', capacity: '300 Guests', feature: 'Banquets & Receptions' },
  { name: 'Kabrastan Grounds', img: '/images/Kabrastan.jpg', capacity: 'Outdoor', feature: 'Heritage & Exhibitions' },
];

export default function VenueShowcase() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionTitle
          eyebrow="Our Spaces"
          title="Explore Our Venues"
          subtitle="From grand celebrations to solemn gatherings, find the perfect space for your next event."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease',
        }}>
          {halls.map((hall, i) => (
            <div key={i} style={{
              borderRadius: '24px',
              overflow: 'hidden',
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition)',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
            }}>
              <div style={{ height: '240px', overflow: 'hidden' }}>
                <img 
                  src={hall.img} 
                  alt={hall.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.1em', marginBottom: '8px' }}>
                  {hall.feature}
                </div>
                <h3 style={{ fontSize: '22px', fontFamily: 'var(--font-display)', marginBottom: '8px' }}>
                  {hall.name}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                  Capacity: {hall.capacity}
                </p>
                <a href="#venues" style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)',
                  textDecoration: 'none', transition: 'var(--transition)',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                >
                  Book This Hall <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}