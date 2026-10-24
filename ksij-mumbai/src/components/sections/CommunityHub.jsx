import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import { Calendar, ChevronRight } from 'lucide-react';

const pillars = [
  { id: 'careers', tag: 'CAREER // 01', title: 'Career & Apprenticeship', desc: 'Direct interviews, vocational skill placements, and professional advancement.', img: '/images/Kearsbaughall.jpg' },
  { id: 'education', tag: 'EDUCATION // 02', title: 'Youth Learning & Digital Literacy', desc: 'After-school study cohorts, digital tools, and collective knowledge sharing.', img: '/images/KhojaMasjid.jpg' },
  { id: 'heritage', tag: 'HERITAGE // 03', title: 'Heritage Assemblies', desc: 'Documentary audio reels, cultural lectures, and preserved oral history.', img: '/images/shrine.jpg' },
  { id: 'majlis', tag: 'MAJLIS // 04', title: 'Scholarly Majlis & Keynote', desc: 'Spiritual discourses, ethical guidance, and community congregation.', img: '/images/KhojaMasjid.jpg' },
  { id: 'celebrations', tag: 'EVENTS // 05', title: 'Grand Pavilion & Receptions', desc: 'Annual festive banquets, communal milestones, and celebratory gatherings.', img: '/images/Kearsbaughall.jpg' },
];

// USING YOUR EXACT FILENAMES HERE
const venueEvents = [
  {
    date: '14 OCT 2026',
    location: 'DONGRI, MUMBAI',
    venue: 'Khoja Masjid Hall',
    performance: 'Congregational Commemoration',
    access: 'LIMITED',
    image: '/images/KhojaMasjid.jpg' 
  },
  {
    date: '28 OCT 2026',
    location: 'BANDRA, MUMBAI',
    venue: 'Kearsbaugh Hall',
    performance: 'Annual Festive Reception',
    access: 'RESERVE',
    image: '/images/Kearsbaughall.jpg'
  },
  {
    date: '11 NOV 2026',
    location: 'DONGRI, MUMBAI',
    venue: 'Main Imambada',
    performance: 'Scholarly Majlis & Assembly',
    access: 'AVAILABLE',
    image: '/images/shrine.jpg'
  },
  {
    date: '02 DEC 2026',
    location: 'MAZGAON, MUMBAI',
    venue: 'Kabrastan Grounds',
    performance: 'Cultural Exhibition',
    access: 'SOLD OUT',
    image: '/images/Kabrastan.jpg'
  }
];

export default function CommunityHub() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeTab, setActiveTab] = useState(pillars[0].id);
  const activeData = pillars.find(p => p.id === activeTab);

  return (
    <>
      <section id="hub" ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="One Community"
            title="Empowering Every Phase of Life"
            subtitle="From careers and education to sacred gatherings, explore the pillars that unite our community."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {pillars.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setActiveTab(p.id)}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    background: activeTab === p.id ? 'var(--accent-green)' : 'var(--bg-tertiary)',
                    border: `1px solid ${activeTab === p.id ? 'var(--accent-green)' : 'var(--border-color)'}`,
                    transition: 'var(--transition)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                  onMouseEnter={e => { if(activeTab !== p.id) e.currentTarget.style.borderColor = 'var(--accent-gold)' }}
                  onMouseLeave={e => { if(activeTab !== p.id) e.currentTarget.style.borderColor = 'var(--border-color)' }}
                >
                  <div>
                    <div style={{ fontSize: '10px', letterSpacing: '0.15em', fontWeight: 600, color: activeTab === p.id ? '#d4b483' : 'var(--text-muted)', marginBottom: '4px' }}>
                      {p.tag}
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: activeTab === p.id ? '#fff' : 'var(--text-primary)' }}>
                      {p.title}
                    </div>
                  </div>
                  <ChevronRight size={20} style={{ color: activeTab === p.id ? '#d4b483' : 'var(--text-muted)' }} />
                </div>
              ))}
            </div>

            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '40px',
            }}>
              <img
                src={activeData.img}
                alt={activeData.title}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'opacity 0.5s ease',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(15,20,25,0.95) 0%, rgba(15,20,25,0.2) 100%)',
              }} />
              <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                <h3 style={{ fontSize: '28px', fontFamily: 'var(--font-display)', marginBottom: '12px' }}>
                  {activeData.title}
                </h3>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '20px' }}>
                  {activeData.desc}
                </p>
                <button style={{
                  background: 'var(--accent-gold)', color: '#fff',
                  padding: '10px 24px', borderRadius: '50px',
                  fontSize: '14px', fontWeight: 600,
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                }}>
                  View Section <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="venues" className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <SectionTitle
            eyebrow="Physical Editions // Catalogue"
            title="Venue & Event Reservations"
            subtitle="Seamless reservations for sacred gatherings, educational cohorts, and matrimonial celebrations."
          />

          <div style={{
            borderTop: '1px solid var(--border-color)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 1s ease 0.2s',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr 3fr 1fr',
              padding: '16px 0',
              borderBottom: '1px solid var(--border-color)',
              fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-muted)',
            }}>
              <div>Date</div>
              <div>Location / Venue</div>
              <div>Performance / Event</div>
              <div style={{ textAlign: 'right' }}>Access</div>
            </div>

            {venueEvents.map((ev, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 2fr 3fr 1fr',
                alignItems: 'center',
                padding: '24px 0',
                borderBottom: '1px solid var(--border-color)',
                transition: 'var(--transition)',
                cursor: 'pointer',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'var(--bg-secondary)';
                e.currentTarget.style.paddingLeft = '16px';
                e.currentTarget.style.paddingRight = '16px';
                e.currentTarget.style.borderRadius = '12px';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.paddingLeft = '0px';
                e.currentTarget.style.paddingRight = '0px';
                e.currentTarget.style.borderRadius = '0px';
              }}
              >
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  {ev.date}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '64px', height: '48px', borderRadius: '8px',
                    overflow: 'hidden', flexShrink: 0
                  }}>
                    <img src={ev.image} alt={ev.venue} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{ev.venue}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{ev.location}</div>
                  </div>
                </div>

                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', paddingRight: '20px' }}>
                  {ev.performance}
                </div>

                <div style={{ textAlign: 'right' }}>
                  <button style={{
                    background: ev.access === 'SOLD OUT' ? 'transparent' : 'var(--accent-gold)',
                    color: ev.access === 'SOLD OUT' ? 'var(--text-muted)' : '#fff',
                    border: ev.access === 'SOLD OUT' ? '1px solid var(--text-muted)' : 'none',
                    padding: '8px 16px', borderRadius: '50px',
                    fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em',
                    transition: 'var(--transition)',
                  }}>
                    {ev.access}
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{
            marginTop: '40px',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '14px 32px', borderRadius: '50px',
              background: 'var(--accent-green)', color: '#fff',
              fontWeight: 600, fontSize: '14px', transition: 'var(--transition)'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Calendar size={18} /> Open Booking Portal
            </button>
          </div>
        </div>
      </section>
    </>
  );
}