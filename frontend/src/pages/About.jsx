import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const timeline = [
  { year: '2018', title: 'Founded', desc: 'She Can Foundation was established with a vision to empower women worldwide through education and mentorship.' },
  { year: '2019', title: 'First 100 Women Served', desc: 'Reached our first milestone, supporting 100 women through scholarships and career development programs.' },
  { year: '2020', title: 'Expanded to 5 Countries', desc: 'Grew our reach internationally, launching programs in Kenya, India, Brazil, Philippines, and Nigeria.' },
  { year: '2022', title: '5,000+ Women Impacted', desc: 'Surpassed 5,000 women empowered through our comprehensive suite of programs and initiatives.' },
  { year: '2024', title: 'Global Recognition', desc: 'Received international recognition for our innovative approach to women\'s empowerment and community building.' },
];

const team = [
  { name: 'Dr. Amara Williams', role: 'Founder & CEO', initials: 'AW', color: 'var(--gradient-primary)', bio: 'A passionate advocate for women\'s rights with 15+ years in nonprofit leadership.' },
  { name: 'Sarah Chen', role: 'Director of Programs', initials: 'SC', color: 'var(--gradient-secondary)', bio: 'Expert in education policy with experience across 8 countries in program development.' },
  { name: 'Maya Rodriguez', role: 'Head of Outreach', initials: 'MR', color: 'linear-gradient(135deg, #D4A574, #c49464)', bio: 'Community organizer who has built partnerships with 50+ organizations worldwide.' },
  { name: 'Fatima Al-Hassan', role: 'Chief Impact Officer', initials: 'FA', color: 'linear-gradient(135deg, #8B6FA0, #6d5580)', bio: 'Data-driven leader measuring and maximizing our social impact across all programs.' },
];

const values = [
  { icon: '💪', title: 'Empowerment', desc: 'We believe every woman has inherent strength and potential. We provide the tools and support to help them unleash it.' },
  { icon: '📚', title: 'Education', desc: 'Knowledge is the foundation of change. We invest in accessible, quality education for women at every stage.' },
  { icon: '🤝', title: 'Community', desc: 'Together we are stronger. We build supportive networks where women uplift and inspire each other.' },
  { icon: '⚖️', title: 'Equality', desc: 'We champion equal opportunities for all women regardless of background, location, or circumstance.' },
];

function About() {
  return (
    <div className="about-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>About She Can Foundation</h1>
          <p className="breadcrumb">
            <Link to="/">Home</Link> / About
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <AnimatedSection className="stagger-1">
              <div className="mv-card mission-card">
                <div className="mv-icon">🎯</div>
                <h3 className="mv-label">Our Mission</h3>
                <p className="mv-text">
                  To empower women and girls through education, mentorship, and community support — creating 
                  pathways for lasting change and equal opportunity worldwide.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection className="stagger-2">
              <div className="mv-card vision-card">
                <div className="mv-icon">🌟</div>
                <h3 className="mv-label">Our Vision</h3>
                <p className="mv-text">
                  A world where every woman has the opportunity to reach her full potential, free from 
                  barriers, and empowered to lead, create, and inspire.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Story Timeline */}
      <section className="section story-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-badge text-center" style={{ display: 'block' }}>Our Journey</span>
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">
              From a small initiative to a global movement, here's how we've grown.
            </p>
          </AnimatedSection>

          <div className="timeline">
            {timeline.map((item, i) => (
              <AnimatedSection key={i} className={i % 2 === 0 ? 'slide-left' : 'slide-right'}>
                <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-desc">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-badge text-center" style={{ display: 'block' }}>Our People</span>
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Passionate leaders driving our mission forward every day.
            </p>
          </AnimatedSection>

          <div className="team-grid">
            {team.map((member, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="team-card">
                  <div className="team-avatar" style={{ background: member.color }}>
                    {member.initials}
                  </div>
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-bio">
                    <p>{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-badge text-center" style={{ display: 'block' }}>What Drives Us</span>
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">
              The principles that guide everything we do.
            </p>
          </AnimatedSection>

          <div className="values-grid">
            {values.map((val, i) => (
              <AnimatedSection key={i} className={`stagger-${i + 1}`}>
                <div className="value-card card">
                  <span className="card-icon">{val.icon}</span>
                  <h3 className="card-title">{val.title}</h3>
                  <p className="card-text">{val.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
