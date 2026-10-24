import SectionTitle from '../common/SectionTitle';
import NewsCard from '../cards/NewsCard';
import Button from '../common/Button';
import { news } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

export default function News() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="news" ref={ref} className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px',
          marginBottom: '50px',
        }}>
          <SectionTitle
            eyebrow="News & Updates"
            title="Latest From Our Community"
            align="left"
          />
          <Button variant="outline" href="#">
            View All <ArrowRight size={16} />
          </Button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
        }}>
          {news.map((item, i) => (
            <div
              key={i}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.8s ease ${i * 0.1}s`,
              }}
            >
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}