import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { contactConfig } from '../config/contact';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Education',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, type: 'volunteer' }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsModalOpen(true);
        setStatus({ type: 'success', message: 'Thank you for your interest! We will contact you soon.' });
        setFormData({ name: '', email: '', phone: '', interest: 'Education', message: '' });
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Failed to connect to the server. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const helpOptions = [
    {
      icon: "💖",
      title: "Donate",
      description: "Your financial contribution helps us expand our reach and provide more resources to women in need.",
      cta: "Make a Donation"
    },
    {
      icon: "📢",
      title: "Spread the Word",
      description: "Share our mission with your network. Follow us on social media and engage with our content.",
      cta: "Follow Us"
    },
    {
      icon: "🤝",
      title: "Partner With Us",
      description: "We collaborate with businesses and organizations that share our vision for women's empowerment.",
      cta: "Become a Partner"
    }
  ];

  return (
    <div className="join-page">
      <AnimatedSection>
        <section className="join-hero">
          <div className="container">
            <h1 className="hero-title">Join Our Mission</h1>
            <p className="hero-subtitle">Become a part of a global movement to empower women and girls. Your time, skills, and passion can make a real difference.</p>
          </div>
        </section>
      </AnimatedSection>

      <section className="section join-main-section">
        <div className="container join-container">
          <AnimatedSection>
            <div className="join-info">
              <h2>Why Volunteer With Us?</h2>
              <p>Volunteering with She Can Foundation is an opportunity to create lasting impact while growing personally and professionally.</p>

              <ul className="reasons-list">
                <li>
                  <span className="reason-icon">🌟</span>
                  <div>
                    <strong>Make a direct impact</strong>
                    <p>Work directly with women and girls in our programs.</p>
                  </div>
                </li>
                <li>
                  <span className="reason-icon">👥</span>
                  <div>
                    <strong>Join a global community</strong>
                    <p>Connect with like-minded individuals from around the world.</p>
                  </div>
                </li>
                <li>
                  <span className="reason-icon">📈</span>
                  <div>
                    <strong>Develop your skills</strong>
                    <p>Gain valuable experience in leadership, mentoring, and organizing.</p>
                  </div>
                </li>
              </ul>

              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <p>Have questions? Reach out to us directly:</p>
                <ul className="contact-info-details">
                  <li>
                    <span className="contact-info-icon">📍</span>
                    <span>{contactConfig.address}</span>
                  </li>
                  <li>
                    <span className="contact-info-icon">📧</span>
                    <a href={`mailto:${contactConfig.email}`}>{contactConfig.email}</a>
                  </li>
                  <li>
                    <span className="contact-info-icon">📞</span>
                    <a href={`tel:${contactConfig.phoneUrl}`}>{contactConfig.phone}</a>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="volunteer-form-container">
              <form onSubmit={handleSubmit} className="volunteer-form">
                <h3>Volunteer Application</h3>

                {status.message && (
                  <div className={`form-alert alert-${status.type}`}>
                    {status.message}
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Jane Doe" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="jane@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number (Optional)</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 (555) 000-0000" />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">Area of Interest</label>
                  <div className="select-wrapper">
                    <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required>
                      <option value="Education">Education & Mentorship</option>
                      <option value="Career Development">Career Development</option>
                      <option value="Health">Health & Wellness</option>
                      <option value="Technology">Technology & Digital Literacy</option>
                      <option value="Entrepreneurship">Entrepreneurship</option>
                      <option value="Community">Community Building</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Why do you want to join us?</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" placeholder="Tell us a bit about yourself and your motivation..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection>
        <section className="section other-ways-section">
          <div className="container">
            <h2 className="section-title text-center">Other Ways to Help</h2>
            <div className="help-grid">
              {helpOptions.map((option, index) => (
                <div className="help-card" key={index}>
                  <div className="help-icon">{option.icon}</div>
                  <h3>{option.title}</h3>
                  <p>{option.description}</p>
                  <button className="btn btn-outline">{option.cta}</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Success Popup Modal */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={() => setIsModalOpen(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={() => setIsModalOpen(false)} aria-label="Close modal">
            &times;
          </button>
          <div className="modal-success-icon">
            ✓
          </div>
          <h3>Application Submitted!</h3>
          <p>
            Thank you for applying to volunteer with She Can Foundation. We have received your application and will review it shortly. Our outreach team will get in touch with you via email soon.
          </p>
          <button className="btn btn-primary modal-btn" onClick={() => setIsModalOpen(false)}>
            Awesome ✨
          </button>
        </div>
      </div>
    </div>
  );
};

export default Join;
