import { Quote, ArrowRight, BookOpen } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const timeline = [
  { year: '1400s', title: 'The Beginning', text: 'Pir Sadruddin arrives in Sind, India, laying the foundation of the community.' },
  { year: '1899', title: 'Official Registration', text: 'The Mumbai Jamat is officially registered, becoming the parent Khoja Shia Isnaashari Jamat.' },
  { year: '1901', title: 'Sacrifice & Protection', text: 'Sheth Hirjeebhoy Allarakhia and Sheth Laljeebhoy Sajan martyred protecting the Khoja Masjid.' },
  { year: 'Today', title: 'A Global Legacy', text: 'A vibrant community of 5000+ members across the world, rooted in Mumbai.' },
];

export default function Heritage() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="heritage" ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionTitle
          eyebrow="Our Heritage"
          title="Rooted in Faith, Since 1899"
          subtitle="The Mumbai Jamat is often referred to as the Parent Khoja Shia Isnaashari Jamat — the second oldest Jamat in the world."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '80px',
        }}>
          {/* Image side */}
          <div style={{
            position: 'relative',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            transition: 'all 1s ease',
          }}>
            <div style={{
              borderRadius: '20px', overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              aspectRatio: '4/3',
            }}>
              <img
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80"
                alt="Heritage and history"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: '-30px', right: '-20px',
              background: 'var(--accent-gold)',
              padding: '24px 32px', borderRadius: '16px',
              color: '#fff', boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.15em', opacity: 0.9 }}>ESTABLISHED</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 700, lineHeight: 1 }}>
                1899
              </div>
            </div>
          </div>

          {/* Text side */}
          <div style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            transition: 'all 1s ease 0.2s',
          }}>
            <div style={{
              background: 'var(--bg-tertiary)',
              padding: '28px', borderRadius: '16px',
              borderLeft: '4px solid var(--accent-gold)',
              marginBottom: '28px',
              position: 'relative',
            }}>
              <Quote size={28} style={{ color: 'var(--accent-gold)', marginBottom: '12px' }} />
              <p style={{
                fontFamily: 'var(--font-display)', fontSize: '20px',
                fontStyle: 'italic', lineHeight: 1.6,
                color: 'var(--text-primary)',
              }}>
                "Kindly recite Surah Fatiha for Amar Shaheed Marhoom Sheth Hirjeebhoy Allarakhia and Marhoom Sheth Laljeebhoy Sajan, martyred protecting the Khoja Masjid in 1901."
              </p>
            </div>

            <p style={{
              fontSize: '16px', lineHeight: 1.9,
              color: 'var(--text-secondary)', marginBottom: '20px',
            }}>
              Over 600 years ago, a missionary named Pir Sadruddin arrived in Sind, India. Historians believe he was a Dai of the Nizari Ismaili sect — while others hold he was a Sufi teacher from Iran.
            </p>
            <p style={{
              fontSize: '16px', lineHeight: 1.9,
              color: 'var(--text-secondary)', marginBottom: '32px',
            }}>
              Through centuries of devotion and community building, the Khoja Shia community flourished. The Mumbai Jamat, officially registered in 1899, became a cornerstone for Khoja Shia communities across the world.
            </p>

            <Button variant="outline">
              <BookOpen size={18} /> Read the Full Story
            </Button>
          </div>
        </div>

        {/* Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px',
        }}>
          {timeline.map((item, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-primary)',
                padding: '28px 24px',
                borderRadius: '16px',
                border: '1px solid var(--border-color)',
                transition: 'var(--transition)',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${i * 0.1}s`,
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
                fontFamily: 'var(--font-display)',
                fontSize: '28px', fontWeight: 700,
                color: 'var(--accent-gold)', marginBottom: '12px',
              }}>{item.year}</div>
              <h4 style={{ fontSize: '17px', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {item.title}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}