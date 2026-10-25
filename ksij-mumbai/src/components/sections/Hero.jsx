import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="home" ref={ref} style={{
      minHeight: '85vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      background: '#0a120e', // Dark Green/Black background
      textAlign: 'center',
      padding: '40px 20px',
    }}>
      
      {/* Background Image with Dark Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        opacity: 0.3,
      }}>
        <img 
          src="https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=1920&auto=format&fit=crop" 
          alt="Background" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a120e 10%, transparent 100%)' }} />
      </div>

      <div style={{
        position: 'relative', zIndex: 1,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 1s ease',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        
        {/* CENTER LOGO BOX (As requested in reference) */}
        <div style={{
          width: '120px', height: '120px',
          background: 'var(--bg-secondary)',
          borderRadius: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: '32px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          padding: '16px',
          border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <img 
            src="/images/logo.png" 
            alt="KSIJ Logo" 
            style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
          />
        </div>

        <div style={{
          fontSize: '13px', letterSpacing: '0.3em',
          color: 'var(--accent-gold-light)', fontWeight: 600,
          textTransform: 'uppercase', marginBottom: '16px',
        }}>
          KSIJ · MUMBAI
        </div>

        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 64px)',
          lineHeight: 1.1, marginBottom: '24px',
          color: '#fff', fontWeight: 600,
          fontFamily: 'var(--font-display)',
          maxWidth: '800px',
        }}>
          Khoja Shia Ithna Asheri <br />
          <span style={{ fontStyle: 'italic' }}>Jamaat, Mumbai.</span>
        </h1>

        <p style={{
          fontSize: '18px', color: 'rgba(255,255,255,0.7)',
          lineHeight: 1.6, marginBottom: '40px',
          maxWidth: '600px',
        }}>
          Projects, bookings and donations for our community. Serving with compassion, preserving heritage, and empowering generations.
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button variant="primary" href="#venues" style={{ background: '#fff', color: '#0a120e' }}>
            Explore Venues <ArrowRight size={18} />
          </Button>
          <Button variant="outline" href="#heritage" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>
            Our Heritage
          </Button>
        </div>

      </div>
    </section>
  );
}
