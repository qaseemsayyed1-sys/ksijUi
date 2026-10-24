import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import Button from './Button';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Heritage', href: '#heritage' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'News', href: '#news' },
  { label: 'Committees', href: '#committees' },
  { label: 'Venues', href: '#venues' }, // Added Venues Link
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? 'var(--bg-secondary)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'var(--transition)',
      }}
    >
      <div className="container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: '80px',
      }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '44px', height: '44px', borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff',
            fontSize: '18px',
          }}>K</div>
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', lineHeight: 1 }}>
              KSIJ
            </div>
            <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '2px' }}>
              MUMBAI · 1899
            </div>
          </div>
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: '14px', fontWeight: 500, color: 'var(--text-secondary)',
              transition: 'var(--transition)', position: 'relative',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="nav-actions">
          <ThemeToggle />
          <div className="nav-cta">
            <Button variant="primary" href="#donate" style={{ padding: '10px 24px', fontSize: '14px' }}>
              <Heart size={16} /> Donate
            </Button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="mobile-toggle"
            style={{ display: 'none', color: 'var(--text-primary)' }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div style={{
          background: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border-color)',
          padding: '20px 24px',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0', fontSize: '15px',
              borderBottom: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
            }}>{l.label}</a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}