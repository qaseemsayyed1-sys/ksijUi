import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import SectionTitle from '../common/SectionTitle';
import { Users, HeartHandshake, BookOpen, Briefcase } from 'lucide-react';

const projects = [
  { icon: Users, title: 'Youth Committee', desc: 'Empowering the next generation through leadership programs, sports, and networking events.' },
  { icon: HeartHandshake, title: 'Welfare & Relief', desc: 'Financial assistance, medical aid, and support for families in need within our community.' },
  { icon: BookOpen, title: 'Education Board', desc: 'Scholarships, after-school cohorts, and digital literacy programs for students.' },
  { icon: Briefcase, title: 'Career & Mentorship', desc: 'Connecting youth with professionals for apprenticeships, resume building, and job placements.' },
];

export default function YouthProjects() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionTitle 
          eyebrow="How We Help" 
          title="Youth & Community Projects" 
          subtitle="From welfare to education, we build a stronger community through dedicated initiatives." 
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 1s ease',
        }}>
          {projects.map((proj, i) => (
            <div key={i} style={{
              background: 'var(--bg-secondary)',
              padding: '32px',
              borderRadius: '20px',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)' }}>
                <proj.icon size={28} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: 'var(--text-primary)' }}>{proj.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>{proj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
