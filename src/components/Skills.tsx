import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { skills } from '../data/portfolioData';

const categories = [
  { key: 'frontend', label: '⚛ Frontend',  dot: '' },
  { key: 'backend',  label: '🛠 Backend',   dot: 'cyan' },
  { key: 'tools',    label: '🔧 Tools',     dot: 'green' },
  { key: 'ai',       label: '🤖 AI & Dev',  dot: 'pink' },
] as const;

type Category = typeof categories[number]['key'];

export default function Skills() {
  const [active, setActive] = useState<Category>('frontend');
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const dotClass: Record<Category, string> = {
    frontend: '',
    backend:  'cyan',
    tools:    'green',
    ai:       'pink',
  };

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <div className="section-header" ref={ref}>
          <div className={`reveal${isVisible ? ' visible' : ''}`}>
            <div className="section-label">Technical Skills</div>
            <h2 className="section-title">What I Work With</h2>
            <p className="section-subtitle">
              A curated toolkit built through real-world projects and continuous learning.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className={`skills-tabs reveal${isVisible ? ' visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`skills-tab${active === cat.key ? ' active' : ''}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className={`skills-grid reveal${isVisible ? ' visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
          {skills[active].map((skill) => (
            <span key={skill} className="skill-pill">
              <span className={`skill-dot${dotClass[active] ? ` ${dotClass[active]}` : ''}`} />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
