import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo-mark">V</div>
          <div>
            <div className="footer-name">{personalInfo.name}</div>
            <div className="footer-tagline">Frontend Developer · React.js · Next.js</div>
          </div>
        </div>

        {/* Nav links */}
        <div className="footer-links">
          {['about', 'skills', 'experience', 'projects', 'contact'].map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="footer-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(s)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="footer-copy">
          © {year} Vaibhav Chavan · Built with React + Vite ⚡
        </div>
      </div>
    </footer>
  );
}
