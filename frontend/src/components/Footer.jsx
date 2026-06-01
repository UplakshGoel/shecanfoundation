import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/shecanimg.avif';
import { contactConfig } from '../config/contact';

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleNewsletter = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <footer className="footer">
      {/* Wave Divider */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill="var(--color-charcoal)"
          />
        </svg>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-col footer-about">
              <Link to="/" className="footer-logo">
                <img src={logoImg} alt="She Can Foundation Logo" className="footer-logo-img" />
                <span className="logo-text">She Can</span>
              </Link>
              <p className="footer-desc">
                Empowering women and girls through education, mentorship, and community support.
                Together, we can create a world where every woman thrives.
              </p>
              <div className="footer-social">
                <a href="#" className="social-link" aria-label="Facebook" title="Facebook">📘</a>
                <a href="#" className="social-link" aria-label="Instagram" title="Instagram">📸</a>
                <a href="#" className="social-link" aria-label="Twitter" title="Twitter">🐦</a>
                <a href="#" className="social-link" aria-label="LinkedIn" title="LinkedIn">💼</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/programs">Programs</Link></li>
                <li><Link to="/join">Join Us</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h4 className="footer-heading">Contact</h4>
              <ul className="footer-contact-list">
                <li>
                  <span className="contact-icon">📍</span>
                  <span>{contactConfig.address}</span>
                </li>
                <li>
                  <span className="contact-icon">📧</span>
                  <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  <a href={`tel:${contactConfig.phoneUrl}`}>{contactConfig.phone}</a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-col">
              <h4 className="footer-heading">Newsletter</h4>
              <p className="footer-newsletter-text">
                Stay updated with our latest news and impact stories.
              </p>
              <form className="newsletter-form" onSubmit={handleNewsletter}>
                <div className="newsletter-input-group">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="newsletter-input"
                    required
                  />
                  <button type="submit" className="newsletter-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? '...' : '→'}
                  </button>
                </div>
                {status === 'success' && (
                  <p className="newsletter-msg success">✨ Thank you for subscribing!</p>
                )}
                {status === 'error' && (
                  <p className="newsletter-msg error">Something went wrong. Try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <p>© 2024 She Can Foundation. All rights reserved. Made with ❤️ for women everywhere.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
