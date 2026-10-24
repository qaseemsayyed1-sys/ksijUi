import { Heart, ArrowRight, ShieldCheck, Users, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const perks = [
  { icon: ShieldCheck, title: 'Transparent', text: 'Every rupee is accounted for.' },
  { icon: Users, title: 'Community', text: 'Supporting 5000+ members.' },
  { icon: Sparkles, title: 'Impact', text: 'Changing lives every day.' },
];

export default function Donate() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="donate" ref={ref} className="section" style={{
      background: 'var(--accent-green)',
      position: 'relative',
      overflow: 'hidden',
      color: '#fff',
    }}>
      <div style={{
        position: 'absolute', top: '-100px', right: '-100px',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,180,131,0.2), transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-80px', left: '-80px',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(212,180,131,0.15), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '720px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 18px', borderRadius: '50px',
            background: 'rgba(212,180,131,0.15)',
            border: '1px solid rgba(212,180,131,0.4)',
            fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#d4b483',
            marginBottom: '24px',
          }}>
            <Heart size={12} fill="#d4b483" /> Support The Mission
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            marginBottom: '20px', lineHeight: 1.15,
          }}>
            Your Generosity Builds Our Future
          </h2>
          <p style={{
            fontSize: '17px', lineHeight: 1.8,
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '40px',
          }}>
            Every contribution supports education, welfare, and spiritual development for the Khoja Shia community of Mumbai.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button variant="primary" href="#" style={{ background: '#d4b483', color: '#0f1419' }}>
              Make a Donation <ArrowRight size={18} />
            </Button>
            <Button variant="outline" href="#" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
              Become a Member
            </Button>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '24px', marginTop: '70px',
        }}>
          {perks.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: '14px',
              padding: '24px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '16px',
              border: '1px solid rgba(255,255,255,0.1)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: `all 0.8s ease ${i * 0.15}s`,
            }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(212,180,131,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <p.icon size={20} color="#d4b483" />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 600, marginBottom: '4px' }}>{p.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>{p.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}