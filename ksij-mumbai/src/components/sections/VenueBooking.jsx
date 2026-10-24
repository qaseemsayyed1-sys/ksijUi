import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import { Calendar, X, CheckCircle2, MapPin, ArrowRight, ArrowLeft, ShieldCheck, Download } from 'lucide-react';

const events = [
  {
    date: '14 OCT 2026',
    venue: 'Khoja Masjid Hall',
    location: 'DONGRI, MUMBAI',
    performance: 'Congregational Commemoration',
    access: 'LIMITED',
    image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=400&auto=format&fit=crop'
  },
  {
    date: '28 OCT 2026',
    venue: 'Kearsbaugh Hall',
    location: 'BANDRA, MUMBAI',
    performance: 'Annual Festive Reception',
    access: 'RESERVE',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop'
  },
  {
    date: '11 NOV 2026',
    venue: 'Main Imambada',
    location: 'DONGRI, MUMBAI',
    performance: 'Scholarly Majlis & Assembly',
    access: 'AVAILABLE',
    image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=400&auto=format&fit=crop'
  },
  {
    date: '02 DEC 2026',
    venue: 'Kabrastan Grounds',
    location: 'MAZGAON, MUMBAI',
    performance: 'Cultural Heritage Exhibition',
    access: 'SOLD OUT',
    image: 'https://images.unsplash.com/photo-1590059346617-7c3423e447e3?q=80&w=400&auto=format&fit=crop'
  }
];

const eventTypes = [
  { title: 'Majlis-e-Aza & Commemoration', urdu: 'مجلس عزاء و مصائب' },
  { title: 'Mehfil-e-Adab & Jashan', urdu: 'محفل جشن و نعت و منقبت' },
  { title: 'Tatfeen / Funeral & Soyem', urdu: 'تشیع و تکفین و فاتحہ' },
  { title: 'Marriage & Nikah Reception', urdu: 'عقد نکاح و ولیمہ' },
  { title: 'Matamdari & Shab-bedari', urdu: 'شب بیداری و ماتمداری' },
  { title: 'Milad-un-Nabi & Wiladat', urdu: 'میلاد النبی و ولادت' },
  { title: 'Religious Program & Dua Assembly', urdu: 'دعائیہ محفل و توسل و زیارات' },
  { title: 'Community Gathering & Feasts', urdu: 'اجتماع و دعوت عام' },
  { title: 'Educational Seminar & Conference', urdu: 'تعلیمی سیمینار و ورکشاپ' },
  { title: 'Special Program / Other', urdu: 'پروگرام خاص' }
];

const venues = [
  { name: 'Khoja Masjid Hall', location: 'Dongri, Mumbai', capacity: '500+ Guests', price: '₹15,000 – ₹45,000', image: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=400&auto=format&fit=crop' },
  { name: 'Kearsbaugh Hall', location: 'Bandra, Mumbai', capacity: '300 Guests', price: '₹12,000 – ₹35,000', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop' },
  { name: 'Main Imambada', location: 'Dongri, Mumbai', capacity: '1000+ Guests', price: '₹20,000 – ₹60,000', image: 'https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=400&auto=format&fit=crop' }
];

export default function VenueBooking() {
  const { ref, isVisible } = useScrollAnimation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false); // Naya state success ke liye
  
  const [selectedType, setSelectedType] = useState('');
  const [selectedVenue, setSelectedVenue] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [eventDate, setEventDate] = useState('');

  const openModal = (initialVenue = '') => {
    setSelectedVenue(initialVenue);
    setStep(initialVenue ? 2 : 1);
    setIsModalOpen(true);
    setIsConfirmed(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setStep(1);
      setIsConfirmed(false);
      setSelectedType('');
      setSelectedVenue('');
      setGuestCount('');
      setEventDate('');
    }, 300);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsConfirmed(true);
  };

  return (
    <>
      <section id="venues" ref={ref} className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <SectionTitle eyebrow="Reservations // Portal" title="Live Gatherings & Venues" align="left" />
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Secure your space</div>
          </div>

          <div style={{ borderTop: '1px solid var(--border-color)', opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'all 1s ease' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 3fr 1fr', padding: '20px 0', borderBottom: '1px solid var(--border-color)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
              <div>Date</div>
              <div>Location / Venue</div>
              <div>Performance</div>
              <div style={{ textAlign: 'right' }}>Access</div>
            </div>

            {events.map((ev, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 3fr 1fr', alignItems: 'center', padding: '24px 0', borderBottom: '1px solid var(--border-color)', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-secondary)'; e.currentTarget.style.paddingLeft = '24px'; e.currentTarget.style.paddingRight = '24px'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.paddingLeft = '0px'; e.currentTarget.style.paddingRight = '0px'; }}
              >
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)' }}>{ev.date}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '80px', height: '56px', borderRadius: '8px', overflow: 'hidden', flexShrink: 0, border: '1px solid var(--border-color)', background: 'var(--bg-tertiary)' }}>
                    <img src={ev.image} alt={ev.venue} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{ev.venue}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{ev.location}</div>
                  </div>
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)', paddingRight: '20px' }}>{ev.performance}</div>
                <div style={{ textAlign: 'right' }}>
                  <button onClick={() => ev.access !== 'SOLD OUT' && openModal(ev.venue)} style={{
                    background: ev.access === 'SOLD OUT' ? 'transparent' : 'var(--accent-gold)', color: ev.access === 'SOLD OUT' ? 'var(--text-muted)' : '#fff',
                    border: ev.access === 'SOLD OUT' ? '1px solid var(--text-muted)' : 'none', padding: '10px 20px', borderRadius: '50px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', cursor: ev.access === 'SOLD OUT' ? 'not-allowed' : 'pointer'
                  }}>{ev.access}</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
            <button onClick={() => openModal()} style={{
              display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 40px', borderRadius: '50px', background: 'var(--accent-green)', color: '#fff',
              fontWeight: 600, fontSize: '15px', letterSpacing: '0.05em', transition: 'var(--transition)', border: 'none', cursor: 'pointer'
            }} onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }} onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <Calendar size={18} /> Open Booking Portal
            </button>
          </div>
        </div>
      </section>

      {/* --- PROFESSIONAL BOOKING MODAL --- */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', padding: '20px' }}>
          <div style={{ background: 'var(--bg-secondary)', width: '100%', maxWidth: '900px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', maxHeight: '90vh', overflow: 'hidden', animation: 'fadeUp 0.3s ease-out' }}>
            
            {!isConfirmed ? (
              <>
                {/* Modal Header & Tabs */}
                <div style={{ display: 'flex', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-primary)' }}>
                  <div style={{ flex: 1, padding: '20px', textAlign: 'center', borderRight: '1px solid var(--border-color)', color: step === 1 ? 'var(--accent-gold)' : 'var(--text-muted)', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', borderBottom: step === 1 ? '3px solid var(--accent-gold)' : 'none' }}>
                    <Calendar size={18} /> 1. Venue & Slot
                  </div>
                  <div style={{ flex: 1, padding: '20px', textAlign: 'center', color: step === 2 ? 'var(--accent-gold)' : 'var(--text-muted)', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', borderBottom: step === 2 ? '3px solid var(--accent-gold)' : 'none' }}>
                    <ShieldCheck size={18} /> 2. Confirm Details
                  </div>
                  <button onClick={closeModal} style={{ padding: '0 24px', background: 'transparent', border: 'none', borderLeft: '1px solid var(--border-color)', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <X size={24} />
                  </button>
                </div>

                <div style={{ padding: '32px', overflowY: 'auto' }}>
                  {step === 1 && (
                    <>
                      <div style={{ marginBottom: '32px' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>1. Select Event Type & Religious Ritual <span style={{ color: 'red' }}>*</span></h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                          {eventTypes.map((type, i) => (
                            <div key={i} onClick={() => setSelectedType(type.title)} style={{
                              padding: '16px', borderRadius: '12px', border: `1px solid ${selectedType === type.title ? 'var(--accent-gold)' : 'var(--border-color)'}`,
                              background: selectedType === type.title ? 'rgba(14, 122, 75, 0.05)' : 'var(--bg-primary)', cursor: 'pointer', transition: 'var(--transition)'
                            }}>
                              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{type.title}</div>
                              <div style={{ fontSize: '13px', color: 'var(--text-muted)', textAlign: 'right' }}>{type.urdu}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>2. Select Shia Venue / Mosque / Imambargah <span style={{ color: 'red' }}>*</span></h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                          {venues.map((v, i) => (
                            <div key={i} onClick={() => setSelectedVenue(v.name)} style={{
                              padding: '16px', borderRadius: '12px', border: `2px solid ${selectedVenue === v.name ? 'var(--accent-green)' : 'var(--border-color)'}`,
                              background: 'var(--bg-primary)', cursor: 'pointer', display: 'flex', gap: '16px', transition: 'var(--transition)'
                            }}>
                              <img src={v.image} alt={v.name} style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
                              <div>
                                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '4px' }}>{v.name}</div>
                                <div style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}><MapPin size={12}/> {v.location} • Capacity: {v.capacity}</div>
                                <div style={{ fontSize: '13px', color: 'var(--accent-gold)', fontWeight: 500 }}>Suggested: {v.price} per session</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <div style={{ padding: '20px 0' }}>
                      <h4 style={{ fontSize: '22px', fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: '24px', color: 'var(--text-primary)' }}>Review & Confirm Your Reservation</h4>
                      
                      {/* BOOKING SUMMARY RECEIPT */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                        
                        {/* Left Side: Form Inputs */}
                        <form id="bookingForm" onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', background: 'var(--bg-primary)', padding: '24px', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Full Name</label>
                            <input type="text" required placeholder="e.g. Ali Akbar" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }} />
                          </div>
                          <div>
                            <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Phone Number</label>
                            <input type="tel" required placeholder="+91 XXXXX XXXXX" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }} />
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Event Date</label>
                              <input type="date" required value={eventDate} onChange={(e) => setEventDate(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }} />
                            </div>
                            <div>
                              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, marginBottom: '6px', color: 'var(--text-secondary)' }}>Expected Guests</label>
                              <input type="number" required placeholder="100" value={guestCount} onChange={(e) => setGuestCount(e.target.value)} style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: 'var(--text-primary)', outline: 'none' }} />
                            </div>
                          </div>
                        </form>

                        {/* Right Side: Live Summary Ticket */}
                        <div style={{ background: 'var(--accent-green)', borderRadius: '16px', padding: '32px', color: '#fff', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                          <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                          <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '24px', opacity: 0.8 }}>Reservation Summary</div>
                          
                          <div style={{ marginBottom: '20px' }}>
                            <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '4px' }}>VENUE</div>
                            <div style={{ fontSize: '18px', fontWeight: 600 }}>{selectedVenue || 'Not Selected'}</div>
                          </div>

                          <div style={{ marginBottom: '20px' }}>
                            <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '4px' }}>EVENT TYPE</div>
                            <div style={{ fontSize: '15px', fontWeight: 500 }}>{selectedType || 'Not Selected'}</div>
                          </div>

                          <div style={{ display: 'flex', gap: '32px', marginBottom: '32px' }}>
                            <div>
                              <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '4px' }}>DATE</div>
                              <div style={{ fontSize: '14px', fontWeight: 500 }}>{eventDate || 'Pending'}</div>
                            </div>
                            <div>
                              <div style={{ fontSize: '11px', opacity: 0.7, marginBottom: '4px' }}>GUESTS</div>
                              <div style={{ fontSize: '14px', fontWeight: 500 }}>{guestCount || 'Pending'}</div>
                            </div>
                          </div>

                          <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px dashed rgba(255,255,255,0.3)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ fontSize: '12px', opacity: 0.8 }}>Status</div>
                            <div style={{ fontSize: '13px', fontWeight: 600, background: 'rgba(255,255,255,0.2)', padding: '4px 12px', borderRadius: '50px' }}>Awaiting Confirmation</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  )}
                </div>

                {/* Modal Footer Navigation */}
                <div style={{ padding: '20px 32px', borderTop: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', background: 'var(--bg-primary)' }}>
                  {step === 2 ? (
                    <button onClick={() => setStep(1)} style={{ background: 'transparent', color: 'var(--text-secondary)', padding: '12px 24px', borderRadius: '50px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--border-color)', cursor: 'pointer' }}>
                      <ArrowLeft size={18} /> Back
                    </button>
                  ) : <div />}

                  {step === 1 ? (
                    <button onClick={() => setStep(2)} disabled={!selectedType || !selectedVenue} style={{
                      background: (!selectedType || !selectedVenue) ? 'var(--border-color)' : 'var(--accent-green)', color: (!selectedType || !selectedVenue) ? 'var(--text-muted)' : '#fff',
                      padding: '12px 32px', borderRadius: '50px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: (!selectedType || !selectedVenue) ? 'not-allowed' : 'pointer'
                    }}>
                      Next Step <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button type="submit" form="bookingForm" style={{
                      background: 'var(--accent-gold)', color: '#fff', padding: '12px 32px', borderRadius: '50px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', border: 'none', cursor: 'pointer'
                    }}>
                      <CheckCircle2 size={18} /> Final Confirmation
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* --- SUCCESS SCREEN AFTER CONFIRMATION --- */
              <div style={{ padding: '60px 40px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(14, 122, 75, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--accent-green)' }}>
                  <CheckCircle2 size={40} />
                </div>
                <h2 style={{ fontSize: '32px', fontFamily: 'var(--font-display)', color: 'var(--text-primary)', marginBottom: '12px' }}>Booking Confirmed!</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', marginBottom: '32px', lineHeight: 1.6 }}>
                  Your reservation request for <strong>{selectedVenue}</strong> has been received successfully. Our team will contact you shortly to finalize the payments.
                </p>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <button onClick={closeModal} style={{ padding: '14px 32px', borderRadius: '50px', background: 'var(--accent-green)', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
                    Done
                  </button>
                  <button style={{ padding: '14px 32px', borderRadius: '50px', background: 'transparent', color: 'var(--text-primary)', fontWeight: 600, border: '1px solid var(--border-color)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Download size={18} /> Download Receipt
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}