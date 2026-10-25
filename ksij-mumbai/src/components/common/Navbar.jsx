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
  { label: 'Venues', href: '#venues' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'relative',
        width: '100%',
        background: 'transparent',
        padding: '24px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      {/* LOGO (Top Left) */}
      <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img 
          src="/images/logo.png" 
          alt="KSIJ Mumbai Logo" 
          style={{ height: '50px', width: 'auto', objectFit: 'contain' }} 
          onError={(e) => { e.target.style.display = 'none'; }} // Hides if logo not found
        />
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '20px', lineHeight: 1, color: 'var(--text-primary)' }}>
            KSIJ
          </div>
          <div style={{ fontSize: '10px', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '2px' }}>
            MUMBAI · 1899
          </div>
        </div>
      </a>

      {/* RIGHT SIDE: Theme Toggle & Menu Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <ThemeToggle />
        
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)',
            padding: '10px 24px', borderRadius: '50px',
            color: 'var(--text-primary)', fontWeight: 600, fontSize: '14px',
            cursor: 'pointer', transition: 'var(--transition)',
            backdropFilter: 'blur(10px)',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        >
          {open ? <X size={18} /> : <Menu size={18} />} Menu
        </button>
      </div>

      {/* Full Screen Menu Overlay */}
      {open && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'rgba(10, 18, 14, 0.95)',
          backdropFilter: 'blur(20px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '24px',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position: 'absolute', top: '32px', right: '32px',
            background: 'transparent', border: '1px solid var(--border-color)',
            borderRadius: '50%', width: '48px', height: '48px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', cursor: 'pointer',
          }}>
            <X size={24} />
          </button>

          {links.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-display)', fontSize: '32px',
              color: '#fff', fontWeight: 600, textDecoration: 'none',
              transition: 'var(--transition)',
              animation: `fadeUp 0.5s ease-out ${i * 0.05}s forwards`,
              opacity: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
            onMouseLeave={e => e.currentTarget.style.color = '#fff'}
            >
              {l.label}
            </a>
          ))}
          
          <div style={{ marginTop: '32px' }}>
            <Button variant="primary" href="#donate" onClick={() => setOpen(false)}>
              <Heart size={18} /> Donate Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
            }
