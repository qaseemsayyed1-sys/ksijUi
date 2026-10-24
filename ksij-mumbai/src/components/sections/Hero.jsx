import { ArrowRight, Star } from 'lucide-react';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" ref={ref} style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: '100px',
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(184, 147, 90, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-15%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30, 58, 47, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '60px', alignItems: 'center',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 18px', borderRadius: '50px',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-color)',
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: 'var(--accent-gold)',
            marginBottom: '28px',
          }}>
            <Star size={12} fill="var(--accent-gold)" /> Since 1899
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 6vw, 78px)',
            lineHeight: 1.05, marginBottom: '28px',
            fontWeight: 600,
          }}>
            A Century of{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}>Faith, Unity</span>{' '}
            & Service.
          </h1>

          <p style={{
            fontSize: '18px', color: 'var(--text-secondary)',
            lineHeight: 1.8, marginBottom: '40px',
            maxWidth: '540px',
          }}>
            For over 125 years, KSIJ Mumbai has nurtured a vibrant community rooted in the teachings of the Ahlul Bayt (a.s) — serving with compassion, preserving heritage, and empowering generations.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="primary" href="#donate">
              Support Our Mission <ArrowRight size={18} />
            </Button>
            <Button variant="outline" href="#heritage">
              Explore Our Story
            </Button>
          </div>
        </div>

        <div style={{
          position: 'relative',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease 0.3s',
        }}>
          <div style={{
            position: 'relative', borderRadius: '20px',
            overflow: 'hidden', boxShadow: 'var(--shadow-lg)',
            aspectRatio: '4/5',
            background: 'var(--bg-tertiary)', 
          }}>
            
            {/* KARBALA / SHRINE IMAGE (Direct Web Link for immediate display) */}
            <img
              src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?w=800&q=80"
              alt="Holy Shrine"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 70%)',
            }} />
            <div style={{
              position: 'absolute', bottom: '24px', left: '24px', right: '24px',
              color: '#fff',
            }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.2em', opacity: 0.9, marginBottom: '4px' }}>
                ESTABLISHED
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '42px', fontWeight: 700, lineHeight: 1 }}>
                1899
              </div>
            </div>
          </div>

          <div style={{
            position: 'absolute', bottom: '40px', left: '-20px',
            background: 'var(--bg-secondary)',
            padding: '16px 20px', borderRadius: '16px',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-color)',
            animation: 'float 6s ease-in-out infinite',
          }}>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>Community Members</div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: 'var(--accent-gold)' }}>5,000+</div>
          </div>
        </div>
      </div>
    </section>
  );
}