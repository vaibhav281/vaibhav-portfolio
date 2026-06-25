import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body    = encodeURIComponent(`Hi Vaibhav,\n\n${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header" ref={ref}>
          <div className={`reveal${isVisible ? ' visible' : ''}`}>
            <div className="section-label">Contact</div>
            <h2 className="section-title">Let's Work Together</h2>
            <p className="section-subtitle">
              Open to new opportunities. Whether it's a full-time role, freelance project, or just a chat — I'd love to hear from you.
            </p>
          </div>
        </div>

        <div className="contact-grid">
          {/* Left — Info */}
          <div className={`reveal-left${isVisible ? ' visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <h3 className="contact-info" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 14, color: 'var(--text)' }}>
              Get in Touch
            </h3>
            <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 32, fontSize: '0.97rem' }}>
              I'm currently looking for Frontend / React / MERN Stack roles — remote or hybrid.
              If you have a project or opportunity that matches, let's connect!
            </p>

            <div className="contact-items">
              <a href={`mailto:${personalInfo.email}`} className="contact-item" style={{ textDecoration: 'none' }}>
                <div className="contact-item-icon">✉</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">{personalInfo.email}</div>
                </div>
              </a>
              <div className="contact-item">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">{personalInfo.location}</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">📞</div>
                <div className="contact-item-text">
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">{personalInfo.phone}</div>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href={personalInfo.github}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                ⌥ GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                in LinkedIn
              </a>
              <a
                href={personalInfo.resumeLink}
                className="social-link"
                target="_blank"
                rel="noreferrer"
              >
                ↗ Resume
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`reveal-right${isVisible ? ' visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder="Hi Vaibhav, I have an exciting opportunity..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form-btn">
                {sent ? '✓ Opening Email Client...' : 'Send Message →'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
