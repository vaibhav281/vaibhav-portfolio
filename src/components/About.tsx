import { useInView } from '../hooks/useInView';
import { personalInfo, stats, education } from '../data/portfolioData';

export default function About() {
  const { ref: leftRef,  isVisible: leftVis  } = useInView<HTMLDivElement>();
  const { ref: rightRef, isVisible: rightVis } = useInView<HTMLDivElement>();

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">

          {/* ── Left: Text + Stats ── */}
          <div
            ref={leftRef}
            className={`about-left reveal-left${leftVis ? ' visible' : ''}`}
          >
            <div className="section-label" style={{ justifyContent: 'flex-start', marginBottom: 16 }}>
              About Me
            </div>

            <h2 className="about-heading">
              Crafting experiences that{' '}
              <span className="gradient-text">users love</span>
            </h2>

            <div className="about-text">
              <p>{personalInfo.bio}</p>
              <p>
                I've shipped production-grade apps at{' '}
                <strong style={{ color: 'var(--purple-light)', fontWeight: 600 }}>Creddos</strong>{' '}
                and{' '}
                <strong style={{ color: 'var(--purple-light)', fontWeight: 600 }}>MegaConnect Technologies</strong>
                —from role-based admin dashboards to real-time, end-to-end encrypted chat systems.
              </p>
              <p>
                When I'm not coding, I'm exploring new tech, experimenting with AI tools,
                and building personal projects that solve my own problems.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`about-stats stagger${leftVis ? ' visible' : ''}`}
            >
              {stats.map((s) => (
                <div key={s.label} className="stat-card">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="edu-card">
              <div className="edu-icon">🎓</div>
              <div className="edu-info">
                <h4>{education.degree}</h4>
                <p>{education.institution}, {education.location}</p>
                <p className="edu-cgpa">
                  CGPA: {education.cgpa} · Class of {education.year}
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Terminal Card ── */}
          <div
            ref={rightRef}
            className={`about-visual reveal-right${rightVis ? ' visible' : ''}`}
          >
            <div className="terminal">
              <div className="terminal-bar">
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <div className="terminal-dot" />
                <span className="terminal-title">vaibhav.json</span>
              </div>
              <div className="terminal-body">
                <div className="t-line"><span className="t-arr">{'{'}</span></div>

                <div className="t-line t-indent">
                  <span className="t-key">"name"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span className="t-str">"Vaibhav Dilip Chavan"</span>
                  <span className="t-val">,</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"role"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span className="t-str">"Frontend Developer"</span>
                  <span className="t-val">,</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"experience"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span className="t-str">"2+ years"</span>
                  <span className="t-val">,</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"location"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span className="t-str">"Nashik, India"</span>
                  <span className="t-val">,</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"available"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span style={{ color: '#86efac', fontWeight: 600 }}>true</span>
                  <span className="t-val">,</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"stack"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span className="t-arr">['</span>
                  <span className="t-str">React</span>
                  <span className="t-arr">', '</span>
                  <span className="t-str">Next.js</span>
                  <span className="t-arr">', '</span>
                  <span className="t-str">TS</span>
                  <span className="t-arr">'],</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"openTo"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span className="t-arr">['</span>
                  <span className="t-str">Remote</span>
                  <span className="t-arr">', '</span>
                  <span className="t-str">Hybrid</span>
                  <span className="t-arr">'],</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"cgpa"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span className="t-num">8.02</span>
                  <span className="t-val">,</span>
                </div>

                <div className="t-line t-indent">
                  <span className="t-key">"lovesBuilding"</span>
                  <span className="t-val">:&nbsp;</span>
                  <span style={{ color: '#86efac', fontWeight: 600 }}>true</span>
                </div>

                <div className="t-line"><span className="t-arr">{'}'}</span></div>

                <div className="t-line t-comment-line">
                  <span className="t-prompt">▶</span>
                  <span className="t-comment">&nbsp;// Let's build something great!</span>
                </div>
              </div>
            </div>

            {/* Quick-action buttons */}
            <div className="about-cta">
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn btn-primary"
              >
                ✉ Email Me
              </a>
              <a
                href={personalInfo.github}
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
