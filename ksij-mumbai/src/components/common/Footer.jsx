import { Heart, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-tertiary)', padding: '60px 0 30px',
      borderTop: '1px solid var(--border-color)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px', marginBottom: '50px',
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '16px' }}>
              KSIJ Mumbai
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
              A Century of Faith, Unity & Service. Serving the Khoja Shia Ithna Asheri community of Mumbai since 1899.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: '15px', marginBottom: '16px', letterSpacing: '0.1em' }}>QUICK LINKS</h4>
            {['Office Bearers', 'Projects & Bookings', 'Committees', 'News & Updates'].map(l => (
              <a key={l} href="#" style={{
                display: 'block', color: 'var(--text-secondary)',
                fontSize: '14px', padding: '6px 0', transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >{l}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '15px', marginBottom: '16px', letterSpacing: '0.1em' }}>GET INVOLVED</h4>
            {['Make Donation', 'Lifetime Membership', 'Qaumi Sahayak', 'Volunteer'].map(l => (
              <a key={l} href="#" style={{
                display: 'block', color: 'var(--text-secondary)',
                fontSize: '14px', padding: '6px 0', transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-gold)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >{l}</a>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: '15px', marginBottom: '16px', letterSpacing: '0.1em' }}>CONTACT</h4>
            <div style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>
              <MapPin size={18} style={{ flexShrink: 0, color: 'var(--accent-gold)' }} />
              <span>66/70, Hazrat Abbas (a.s.) Street, Dongri, Mumbai, Maharashtra, India 400 009</span>
            </div>
            <div style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '12px' }}>
              <Mail size={18} style={{ color: 'var(--accent-gold)' }} /> info@ksijmumbai.org
            </div>
            <div style={{ display: 'flex', gap: '10px', color: 'var(--text-secondary)', fontSize: '14px' }}>
              <Phone size={18} style={{ color: 'var(--accent-gold)' }} /> +91 22 XXXX XXXX
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--border-color)', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px',
          color: 'var(--text-muted)', fontSize: '13px',
        }}>
          <div>© {new Date().getFullYear()} KSIJ Mumbai. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Crafted with <Heart size={14} style={{ color: 'var(--accent-gold)' }} /> for the community
          </div>
        </div>
      </div>
    </footer>
  );
}