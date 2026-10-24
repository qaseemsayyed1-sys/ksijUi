import SectionTitle from '../common/SectionTitle';
import CommitteeCard from '../cards/CommitteeCard';
import { committees } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Committees() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="committees" ref={ref} className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Our Committees"
          title="Serving Every Need"
          subtitle="Dedicated committees working together to serve the community in every aspect of life."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px',
        }}>
          {committees.map((c, i) => (
            <div
              key={i}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease ${i * 0.08}s`,
              }}
            >
              <CommitteeCard committee={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}