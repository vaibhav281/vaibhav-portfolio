import { useInView } from '../hooks/useInView';
import { projects } from '../data/portfolioData';

type Project = typeof projects[number];

const ICONS: Record<string, string> = {
  'Limitless Chats': '💬',
  'Bharat Bidding':  '⚡',
  'FitRaptors':      '🏋',
  'Wiko India':      '🌾',
  'Brick Breaker':   '🎮',
  'MegaConnect Platform': '🔗',
};

export default function Projects() {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const featured = projects.filter((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header" ref={ref}>
          <div className={`reveal${isVisible ? ' visible' : ''}`}>
            <div className="section-label">Projects</div>
            <h2 className="section-title">Things I've Built</h2>
            <p className="section-subtitle">
              A selection of projects across real-time systems, e-commerce, B2B platforms, and more.
            </p>
          </div>
        </div>

        {/* Featured grid */}
        <div
          className={`projects-grid stagger${isVisible ? ' visible' : ''}`}
          style={{ marginBottom: 24 }}
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className={`projects-grid stagger${isVisible ? ' visible' : ''}`}>
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const isPrivate    = (project as any).privateRepo === true;
  const isUnavailable = (project as any).liveUnavailable === true;

  return (
    <div
      ref={ref}
      className={`project-card${project.featured ? ' featured' : ''} reveal${isVisible ? ' visible' : ''}`}
    >
      {/* Header */}
      <div className="project-header">
        <div className="project-icon">
          {ICONS[project.name] ?? '🚀'}
        </div>
        <div className="project-badges">
          {project.featured && <span className="badge-featured">Featured</span>}
          <span className="badge-type">{project.type}</span>
        </div>
      </div>

      {/* Info */}
      <div className="project-name">{project.name}</div>
      <div className="project-tagline">{project.tagline}</div>
      <p className="project-desc">{project.description}</p>

      {/* Tech */}
      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      {/* Links or Unavailable notice */}
      {isPrivate || isUnavailable ? (
        <div className="project-unavailable">
          <span className="unavailable-icon">🔒</span>
          <span className="unavailable-text">
            Company project · Source &amp; demo not publicly available
          </span>
        </div>
      ) : (
        <div className="project-links">
          {project.github && project.github !== '#' ? (
            <a
              href={project.github}
              className="project-link"
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} GitHub`}
            >
              ⌥ GitHub
            </a>
          ) : null}
          {project.live && project.live !== '#' ? (
            <a
              href={project.live}
              className="project-link primary-link"
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.name} live demo`}
            >
              ↗ Live Demo
            </a>
          ) : null}
          {/* Fallback if both are still # placeholders */}
          {(!project.github || project.github === '#') && (!project.live || project.live === '#') && (
            <span className="project-link-soon">🔗 Links coming soon</span>
          )}
        </div>
      )}
    </div>
  );
}
