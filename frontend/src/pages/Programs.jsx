import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programsList = [
    {
      icon: "🎓",
      title: "Education & Scholarships",
      description: "Providing access to quality education, funding, and resources for young women to pursue higher education.",
      participants: "2,000+"
    },
    {
      icon: "💼",
      title: "Career Development",
      description: "Professional skills training, resume building, and mentorship from industry leaders to advance careers.",
      participants: "1,500+"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Workshops and resources focusing on physical and mental well-being, reproductive health, and self-care.",
      participants: "3,000+"
    },
    {
      icon: "👩‍💻",
      title: "Digital Literacy",
      description: "Bridging the digital divide by teaching essential technology skills for the modern workforce.",
      participants: "800+"
    },
    {
      icon: "🌱",
      title: "Entrepreneurship",
      description: "Supporting women-led businesses through microgrants, business planning, and networking opportunities.",
      participants: "400+"
    },
    {
      icon: "🤝",
      title: "Community Building",
      description: "Creating safe spaces and support networks for women to connect, share experiences, and grow together.",
      participants: "5,000+"
    }
  ];

  const steps = [
    {
      number: "1",
      icon: "📝",
      title: "Apply",
      description: "Fill out our simple application form to tell us about your goals and interests."
    },
    {
      number: "2",
      icon: "📚",
      title: "Learn",
      description: "Get matched with a program and start attending workshops and training sessions."
    },
    {
      number: "3",
      icon: "⭐",
      title: "Grow",
      description: "Apply your new skills, connect with mentors, and achieve your full potential."
    }
  ];

  return (
    <div className="programs-page">
      <AnimatedSection>
        <section className="programs-hero">
          <div className="container">
            <h1 className="hero-title">Our Programs</h1>
            <p className="hero-subtitle">Discover how we empower women through targeted initiatives designed to foster growth, education, and independence.</p>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="section programs-grid-section">
          <div className="container">
            <h2 className="section-title text-center">What We Offer</h2>
            <div className="programs-grid">
              {programsList.map((program, index) => (
                <div className="program-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="program-icon">{program.icon}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="program-stats">
                    <strong>{program.participants}</strong> Participants Impacted
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="section how-it-works-section">
          <div className="container">
            <h2 className="section-title text-center">How It Works</h2>
            <div className="steps-container">
              {steps.map((step, index) => (
                <div className="step-item" key={index}>
                  <div className="step-number-circle">{step.number}</div>
                  <div className="step-content">
                    <div className="step-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                  {index < steps.length - 1 && <div className="step-connector"></div>}
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="programs-cta section">
          <div className="container text-center">
            <h2 className="section-title">Ready to take the next step?</h2>
            <p className="section-subtitle">Join thousands of women who are changing their lives and their communities.</p>
            <Link to="/join" className="btn btn-primary btn-large cta-btn">Join a Program</Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Programs;
