import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import { Calendar, X, CheckCircle2 } from 'lucide-react';

const events = [
  {
    date: '14 OCT 2026',
    venue: 'Khoja Masjid Hall',
    location: 'DONGRI, MUMBAI',
    performance: 'Congregational Commemoration',
    access: 'LIMITED',
    image: '/images/KhojaMasjid.avif'
  },
  {
    date: '28 OCT 2026',
    venue: 'Kearsbaugh Hall',
    location: 'BANDRA, MUMBAI',
    performance: 'Annual Festive Reception',
    access: 'RESERVE',
    image: '/images/Kearsbaughall.avif'
  },
  {
    date: '11 NOV 2026',
    venue: 'Main Imambada',
    location: 'DONGRI, MUMBAI',
    performance: 'Scholarly Majlis & Assembly',
    access: 'AVAILABLE',
    image: '/images/shrine.avif'
  },
  {
    date: '02 DEC 2026',
    venue: 'Kabrastan Grounds',
    location: 'MAZGAON, MUMBAI',
    performance: 'Cultural Heritage Exhibition',
    access: 'SOLD OUT',
    image: '/images/Kabrastan.avif'
  }
];

export default function VenueBooking() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      <section id="venues" ref={ref} className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <SectionTitle
              eyebrow="Reservations // Portal"
              title="Live Gatherings & Venues"
              align="left"
            />
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
              Secure your space
            </div>
          </div>

          <div style={{
            borderTop: '1px solid var(--border-color)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 3fr 1fr',
              padding: '20px 0',
              borderBottom: '1px solid var(--border-color)',
              fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              <div>Date</div>
              <div>Location / Venue</div>
              <div>Performance</div>
              <div style={{ textAlign: 'right' }}>Access</div>
            </div>

            {events.map((ev, i) => (
              <div 
                key={i} 
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr 3fr 1fr',
                  alignItems: 'center',
                  padding: '24px 0',
                  borderBottom: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'var(--bg-secondary)';
                  e.currentTarget.style.paddingLeft = '24px';
                  e.currentTarget.style.paddingRight = '24px';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.paddingLeft = '0px';
                  e.currentTarget.style.paddingRight = '0px';
                }}
              >
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {ev.date}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '80px', height: '56px', borderRadius: '8px',
                    overflow: 'hidden', flexShrink: 0,
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-tertiary)'
                  }}>
                    <img 
                      src={ev.image} 
                      alt={ev.venue} 
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {ev.venue}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
                      {ev.location}
                    </div>
                  </div>
                </div>

                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', paddingRight: '20px' }}>
                  {ev.performance}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button 
                    onClick={() => ev.access !== 'SOLD OUT' && setSelectedEvent(ev)}
                    style={{
                      background: ev.access === 'SOLD OUT' ? 'transparent' : 'var(--accent-gold)',
                      color: ev.access === 'SOLD OUT' ? 'var(--text-muted)' : '#fff',
                      border: ev.access === 'SOLD OUT' ? '1px solid var(--text-muted)' : 'none',
                      padding: '10px 20px', borderRadius: '50px',
                      fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em',
                      transition: 'var(--transition)',
                      cursor: ev.access === 'SOLD OUT' ? 'not-allowed' : 'pointer'
                    }}
                    onMouseEnter={e => {
                      if(ev.access !== 'SOLD OUT') {
                        e.currentTarget.style.background = 'var(--accent-gold-dark)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }
                    }}
                    onMouseLeave={e => {
                      if(ev.access !== 'SOLD OUT') {
                        e.currentTarget.style.background = 'var(--accent-gold)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}
                  >
                    {ev.access}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
            <button 
              onClick={() => setSelectedEvent(events[0])}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '16px 40px', borderRadius: '50px',
                background: 'var(--accent-green)', color: '#fff',
                fontWeight: 600, fontSize: '15px', letterSpacing: '0.05em',
                transition: 'var(--transition)', border: 'none', cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Calendar size={18} /> Open Booking Portal
            </button>
          </div>
        </div>
      </section>

      {selectedEvent && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          padding: '20px',
        }}>
          <div style={{
            background: 'var(--bg-secondary)',
            width: '100%', maxWidth: '500px',
            borderRadius: '24px', padding: '32px',
            boxShadow: 'var(--shadow-lg)',
            position: 'relative',
            animation: 'fadeUp 0.3s ease-out forwards',
          }}>
            <button 
              onClick={() => setSelectedEvent(null)}
              style={{
                position: 'absolute', top: '24px', right: '24px',
                background: 'var(--bg-tertiary)', borderRadius: '50%',
                width: '36px', height: '36px', display: 'flex',
                alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-primary)', transition: 'var(--transition)', border: 'none'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--border-color)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-tertiary)'}
            >
              <X size={18} />
            </button>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                Booking Request
              </div>
              <h3 style={{ fontSize: '26px', fontFamily: 'var(--font-display)', marginBottom: '8px', color: 'var(--text-primary)' }}>
                {selectedEvent.venue}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                {selectedEvent.performance} • {selectedEvent.date}
              </p>
            </div>

            <form onSubmit={(e) => { 
              e.preventDefault(); 
              alert('Booking Request Sent Successfully!'); 
              setSelectedEvent(null); 
            }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Full Name</label>
                <input type="text" required style={{
                  width: '100%', padding: '14px', borderRadius: '10px',
                  border: '1px solid var(--border-color)', background: 'var(--bg-primary)',
                  color: 'var(--text-primary)', fontSize: '14px', outline: 'none'
                }} />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Email Address</label>
                <input type="email" required style={{
                  width: '100%', padding: '14px', borderRadius: '10px',
                  border: '1px solid var(--border-color)', background: 'var(--bg-primary)',
                  color: 'var(--text-primary)', fontSize: '14px', outline: 'none'
                }} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Guests</label>
                  <input type="number" placeholder="100" required style={{
                    width: '100%', padding: '14px', borderRadius: '10px',
                    border: '1px solid var(--border-color)', background: 'var(--bg-primary)',
                    color: 'var(--text-primary)', fontSize: '14px', outline: 'none'
                  }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Phone</label>
                  <input type="tel" required style={{
                    width: '100%', padding: '14px', borderRadius: '10px',
                    border: '1px solid var(--border-color)', background: 'var(--bg-primary)',
                    color: 'var(--text-primary)', fontSize: '14px', outline: 'none'
                  }} />
                </div>
              </div>

              <button type="submit" style={{
                background: 'var(--accent-gold)', color: '#fff',
                padding: '16px', borderRadius: '10px', fontWeight: 600,
                fontSize: '15px', marginTop: '8px', display: 'flex', 
                justifyContent: 'center', alignItems: 'center', gap: '8px',
                transition: 'var(--transition)', border: 'none', cursor: 'pointer'
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent-gold-dark)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent-gold)'}
              >
                <CheckCircle2 size={18} /> Confirm Booking Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}