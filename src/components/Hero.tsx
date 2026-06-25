import { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolioData';

const techStack = ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed,  setDisplayed]  = useState('');
  const [deleting,   setDeleting]   = useState(false);

  // Typewriter effect
  useEffect(() => {
    const full = personalInfo.titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((i) => (i + 1) % personalInfo.titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, titleIndex]);

  return (
    <section id="home" className="hero">
      {/* Animated aurora background */}
      <div className="hero-aurora">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>
      <div className="hero-grid" />

      <div className="container">
        <div className="hero-content">
          {/* Available badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Open to Work — Available for React / Next.js Roles
          </div>

          {/* Name */}
          <p className="hero-greeting">Hi, I'm 👋</p>
          <h1 className="hero-name gradient-text">
            Vaibhav Chavan
          </h1>

          {/* Typing role */}
          <div className="hero-role-wrapper">
            <div className="hero-role">
              <span className="hero-role-prefix">→&nbsp;</span>
              <span className="hero-role-typing">{displayed}</span>
              <span className="hero-cursor" />
            </div>
          </div>

          {/* Description */}
          <p className="hero-desc">
            Frontend Developer with <strong style={{ color: 'var(--text)' }}>2+ years</strong> building
            scalable, high-performance web apps. Passionate about clean UI, great UX,
            and leveraging modern tools — including AI — to ship faster and smarter.
          </p>

          {/* CTA buttons */}
          <div className="hero-actions">
            <a
              href="#projects"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View My Work ↓
            </a>
            <a
              href="#contact"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get in Touch
            </a>
            <a
              href={personalInfo.resumeLink}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              ↗ Resume
            </a>
          </div>

          {/* Tech stack chips */}
          <div className="hero-tech">
            <p className="hero-tech-label">Tech I work with</p>
            <div className="hero-tech-chips">
              {techStack.map((tech) => (
                <span key={tech} className="hero-tech-chip">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
