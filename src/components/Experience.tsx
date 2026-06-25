import { useInView } from '../hooks/useInView';
import { experience } from '../data/portfolioData';

export default function Experience() {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header" ref={ref}>
          <div className={`reveal${isVisible ? ' visible' : ''}`}>
            <div className="section-label">Work Experience</div>
            <h2 className="section-title">Where I've Worked</h2>
            <p className="section-subtitle">
              Real-world experience building production applications used by real users.
            </p>
          </div>
        </div>

        <div className="timeline">
          {experience.map((job, idx) => (
            <TimelineItem key={job.id} job={job} delay={idx * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  job,
  delay,
}: {
  job: typeof experience[number];
  delay: number;
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`timeline-item reveal${isVisible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="timeline-dot" />

      <div className="exp-card">
        {/* Header */}
        <div className="exp-header">
          <div>
            <div className="exp-role">{job.role}</div>
            <div className="exp-company">{job.company}</div>
          </div>
          <div className="exp-meta">
            <div className="exp-period">{job.period}</div>
            <div className="exp-location">
              <span>📍</span> {job.location}
            </div>
          </div>
        </div>

        {/* Bullet points */}
        <ul className="exp-points">
          {job.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="exp-tech">
          {job.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
          <span className="tag tag-cyan">{job.type}</span>
        </div>
      </div>
    </div>
  );
}
