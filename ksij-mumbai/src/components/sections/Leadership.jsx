import SectionTitle from '../common/SectionTitle';
import LeaderCard from '../cards/LeaderCard';
import { leaders } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export default function Leadership() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="leadership" ref={ref} className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Our Leadership"
          title="Leading With Purpose"
          subtitle="A dedicated team of community members who serve with vision, unity, and compassion."
        />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '28px',
        }}>
          {leaders.map((leader, i) => (
            <div
              key={i}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease ${i * 0.08}s`,
              }}
            >
              <LeaderCard leader={leader} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}