import { useState, useEffect } from 'react';
import { Clock, Megaphone } from 'lucide-react';

const announcements = [
  "Important: LEAP Conference 2026 registration is now open.",
  "KSIJ Mumbai Annual General Meeting scheduled for next Sunday.",
  "New Youth Committee initiatives launching this month."
];

export default function TopBanners() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'relative', zIndex: 1001 }}>
      {/* Sliding Announcement Banner */}
      <div style={{
        background: 'var(--accent-gold)',
        color: '#fff',
        padding: '8px 16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '10px',
        fontSize: '13px',
        fontWeight: 500,
        overflow: 'hidden',
      }}>
        <Megaphone size={14} />
        <div style={{ 
          animation: 'slideUp 0.5s ease-out',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {announcements[currentAnnouncement]}
        </div>
      </div>

      {/* Fixed Namaz Times Banner */}
      <div style={{
        background: 'var(--accent-green)',
        color: '#fff',
        padding: '10px 24px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
        fontSize: '12px',
        fontWeight: 500,
        flexWrap: 'wrap',
        letterSpacing: '0.05em',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Clock size={14} style={{ color: '#34c785' }} /> <span>Today's Namaz Times (Dongri)</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', opacity: 0.9 }}>
          <span>Fajr: 5:15 AM</span>
          <span>Zuhr: 12:45 PM</span>
          <span>Asr: 4:10 PM</span>
          <span>Maghrib: 6:55 PM</span>
          <span>Isha: 8:15 PM</span>
        </div>
      </div>
    </div>
  );
      }
