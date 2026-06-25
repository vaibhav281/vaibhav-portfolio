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

import { useState, useEffect } from 'react';

export default function Projects() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects.filter((p) => p.featured);
  const rest     = projects.filter((p) => !p.featured);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <div className="section-header" ref={ref}>
          <div className={`reveal${isVisible ? ' visible' : ''}`}>
            <div className="section-label">Projects</div>
            <h2 className="section-title">Things I've Built</h2>
            <p className="section-subtitle">
              A selection of projects across real-time systems, e-commerce, B2B platforms, and more. Click on any project to see more details.
            </p>
          </div>
        </div>

        {/* Featured grid */}
        <div
          className={`projects-grid stagger${isVisible ? ' visible' : ''}`}
          style={{ marginBottom: 24 }}
        >
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className={`projects-grid stagger${isVisible ? ' visible' : ''}`}>
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
            ))}
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectCard({ project, onClick }: { project: Project, onClick: () => void }) {
  const { ref, isVisible } = useInView<HTMLDivElement>();

  const isPrivate    = (project as any).privateRepo === true;
  const isUnavailable = (project as any).liveUnavailable === true;

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`project-card${project.featured ? ' featured' : ''} reveal${isVisible ? ' visible' : ''} clickable-card`}
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
        <div className="project-unavailable" onClick={(e) => e.stopPropagation()}>
          <span className="unavailable-icon">🔒</span>
          <span className="unavailable-text">
            Company project · Links not public
          </span>
        </div>
      ) : (
        <div className="project-links" onClick={(e) => e.stopPropagation()}>
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
          {(!project.github || project.github === '#') && (!project.live || project.live === '#') && (
            <span className="project-link-soon">🔗 Links coming soon</span>
          )}
        </div>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project, onClose: () => void }) {
  const isPrivate    = (project as any).privateRepo === true;
  const isUnavailable = (project as any).liveUnavailable === true;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="project-icon modal-icon">{ICONS[project.name] ?? '🚀'}</div>
          <div>
            <h3 className="modal-title">{project.name}</h3>
            <div className="modal-tagline">{project.tagline}</div>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{project.description}</p>
          
          <div className="modal-section-title">Key Highlights & Features</div>
          <ul className="modal-highlights">
            {project.highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>

          <div className="modal-section-title">Tech Stack</div>
          <div className="project-tech" style={{ marginBottom: 0 }}>
            {project.tech.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          {isPrivate || isUnavailable ? (
            <div className="project-unavailable" style={{ marginTop: 0, width: '100%' }}>
              <span className="unavailable-icon">🔒</span>
              <span className="unavailable-text">
                Company project · Source &amp; demo not publicly available due to confidentiality
              </span>
            </div>
          ) : (
            <div className="project-links" style={{ marginTop: 0 }}>
              {project.github && project.github !== '#' && (
                <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                  ⌥ View Source Code
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a href={project.live} className="project-link primary-link" target="_blank" rel="noreferrer">
                  ↗ Open Live App
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
