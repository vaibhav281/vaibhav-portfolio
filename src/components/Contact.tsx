import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const { ref, isVisible } = useInView<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'rate_limited'>('idle');
  const [botcheck, setBotcheck] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Bot Protection (Honeypot check)
    // If a bot checks the hidden field, silently reject
    if (botcheck) {
      console.warn("Bot detected");
      return; 
    }

    // 2. Anti-Spam: Local Rate Limiting (1 message per minute)
    const lastSubmitTime = localStorage.getItem('portfolio_last_submit');
    if (lastSubmitTime) {
      const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime, 10);
      if (timeSinceLastSubmit < 60000) { // 60 seconds
        setStatus('rate_limited');
        setTimeout(() => setStatus('idle'), 5000);
        return;
      }
    }

    setStatus('sending');

    // Web3Forms API implementation (Free, no backend required)
    const formData = new FormData();
    formData.append("access_key", "25510bf6-8a0b-40c2-b4e4-311f209f8b8d");
    
    // Core Data
    formData.append("Name", form.name);
    formData.append("Email", form.email);
    formData.append("Message", form.message);
    
    // UI/UX Email Improvements
    formData.append("from_name", "Vaibhav Portfolio Alerts"); // Makes the sender look professional
    formData.append("subject", `New Opportunity from ${form.name} 🚀`); // Eye-catching subject
    formData.append("replyto", form.email); // Allows you to hit "Reply" directly in Gmail
    formData.append("Platform", "Vaibhav Portfolio (React/Vercel)"); // Extra info card in the email

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        // Save submit time for rate limiting
        localStorage.setItem('portfolio_last_submit', Date.now().toString());
        
        setStatus('success');
        setForm({ name: '', email: '', message: '' }); // reset form
        setTimeout(() => setStatus('idle'), 5000); // reset status after 5s
      } else {
        console.error("Web3Forms Error:", data);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
              
              {/* Honeypot field for bot spam protection */}
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{ display: 'none' }} 
                checked={botcheck}
                onChange={(e) => setBotcheck(e.target.checked)}
              />

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

              <button type="submit" className="form-btn" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>

              {status === 'success' && (
                <div style={{ marginTop: 16, color: 'var(--cyan)', fontSize: '0.9rem', fontWeight: 500 }}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div style={{ marginTop: 16, color: '#ef4444', fontSize: '0.9rem', fontWeight: 500 }}>
                  ✕ Failed to send message. Please try emailing me directly.
                </div>
              )}
              {status === 'rate_limited' && (
                <div style={{ marginTop: 16, color: '#f59e0b', fontSize: '0.9rem', fontWeight: 500 }}>
                  ⏳ Please wait a moment before sending another message.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
