import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

const info = [
  { icon: MapPin, label: 'Address', value: '66/70, Hazrat Abbas (a.s.) Street, Dongri, Mumbai 400 009' },
  { icon: Mail, label: 'Email', value: 'info@ksijmumbai.org' },
  { icon: Phone, label: 'Phone', value: '+91 22 XXXX XXXX' },
  { icon: Clock, label: 'Office Hours', value: 'Mon – Sat, 10:00 AM – 6:00 PM' },
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact Us"
          title="Get in Touch"
          subtitle="We would love to hear from you. Reach out for any questions or to get involved."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease',
        }}>
          <div>
            {info.map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: '16px', alignItems: 'flex-start',
                padding: '20px 0',
                borderBottom: '1px solid var(--border-color)',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '12px',
                  background: 'var(--bg-tertiary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-gold)',
                }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div style={{
                    fontSize: '12px', fontWeight: 600,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--text-muted)', marginBottom: '4px',
                  }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize: '15px', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            style={{
              background: 'var(--bg-secondary)',
              padding: '36px',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
            }}
            onSubmit={e => e.preventDefault()}
          >
            {['Full Name', 'Email Address', 'Subject'].map(label => (
              <div key={label} style={{ marginBottom: '18px' }}>
                <label style={{
                  display: 'block', fontSize: '13px',
                  fontWeight: 500, marginBottom: '6px',
                  color: 'var(--text-secondary)',
                }}>{label}</label>
                <input
                  type={label === 'Email Address' ? 'email' : 'text'}
                  style={{
                    width: '100%', padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'var(--transition)',
                  }}
                  onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
                />
              </div>
            ))}
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block', fontSize: '13px',
                fontWeight: 500, marginBottom: '6px',
                color: 'var(--text-secondary)',
              }}>Message</label>
              <textarea
                rows={4}
                style={{
                  width: '100%', padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  fontSize: '14px', resize: 'vertical',
                  outline: 'none', transition: 'var(--transition)',
                  fontFamily: 'var(--font-body)',
                }}
                onFocus={e => e.currentTarget.style.borderColor = 'var(--accent-gold)'}
                onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
              />
            </div>
            <Button variant="primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}