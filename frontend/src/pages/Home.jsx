import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

/* ---- Counter Hook ---- */
function useCounter(end, duration = 2000, startCounting = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    let startTime = null;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, startCounting]);

  return count;
}

/* ---- Stats Counter Component ---- */
function StatCounter({ icon, end, suffix, label }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  const count = useCounter(end, 2200, visible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-icon">{icon}</span>
      <span className="stat-number">{count.toLocaleString()}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

/* ---- Testimonial Data ---- */
const testimonials = [
  {
    quote: "She Can Foundation changed my life. Through their scholarship program, I was able to complete my degree and now I'm a software engineer helping other women in tech.",
    name: "Amara Johnson",
    role: "Program Graduate, 2022",
    initials: "AJ",
  },
  {
    quote: "The mentorship I received gave me the confidence to start my own business. Today, I employ 15 women in my community. None of this would have been possible without She Can.",
    name: "Priya Sharma",
    role: "Entrepreneur & Mentor",
    initials: "PS",
  },
  {
    quote: "Being a volunteer with She Can has been the most rewarding experience. Seeing the impact we make together is truly incredible and keeps me inspired every single day.",
    name: "Sofia Martinez",
    role: "Lead Volunteer",
    initials: "SM",
  },
];

function Home() {
  const [stats, setStats] = useState({
    womenEmpowered: 5000,
    programs: 25,
    volunteers: 300,
    countries: 12
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/stats');
        if (response.ok) {
          const result = await response.json();
          if (result.success && result.data) {
            setStats(result.data);
          }
        }
      } catch (err) {
        console.warn('Failed to fetch dynamic stats from API. Using fallback defaults.', err);
      }
    };
    fetchStats();
  }, []);

  /* ---- Testimonial Carousel ---- */
  const [activeSlide, setActiveSlide] = useState(0);
  const timerRef = useRef(null);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timerRef.current);
  }, [nextSlide]);

  const goToSlide = (index) => {
    setActiveSlide(index);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 5000);
  };

  return (
    <div className="home">
      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="hero-dot hero-dot-1"></div>
          <div className="hero-dot hero-dot-2"></div>
          <div className="hero-dot hero-dot-3"></div>
          <div className="hero-dot hero-dot-4"></div>
          <div className="hero-dot hero-dot-5"></div>
          <div className="hero-circle hero-circle-1"></div>
          <div className="hero-circle hero-circle-2"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <AnimatedSection>
              <span className="hero-badge">✨ Empowering Women Since 2018</span>
            </AnimatedSection>
            <AnimatedSection>
              <h1 className="hero-title">
                Empowering Women to <span className="text-gradient">Change the World</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection>
              <p className="hero-subtitle">
                We believe every woman has the power to shape a better future. Through education, 
                mentorship, and community, we help women unlock their full potential.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="hero-buttons">
                <Link to="/join" className="btn btn-primary btn-lg">
                  Join Us ✨
                </Link>
                <Link to="/about" className="btn btn-outline btn-lg">
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="hero-image-wrapper">
            <AnimatedSection className="slide-right">
              <div className="hero-image-blob">
                <img src="/images/hero.png" alt="Empowered women" className="hero-image" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== IMPACT STATS ==================== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <StatCounter icon="👩‍🎓" end={stats.womenEmpowered} suffix="+" label="Women Empowered" />
            <StatCounter icon="📚" end={stats.programs} suffix="" label="Programs" />
            <StatCounter icon="🤝" end={stats.volunteers} suffix="+" label="Volunteers" />
            <StatCounter icon="🌍" end={stats.countries} suffix="" label="Countries" />
          </div>
        </div>
      </section>

      {/* ==================== ABOUT PREVIEW ==================== */}
      <section className="section about-preview">
        <div className="container">
          <div className="about-preview-grid">
            <AnimatedSection className="slide-left">
              <div className="about-image-placeholder">
                <div className="about-image-inner">
                  <span className="about-image-icon">💜</span>
                  <span className="about-image-text">Who We Are</span>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection className="slide-right">
              <div className="about-preview-content">
                <span className="section-badge">About Us</span>
                <h2 className="about-preview-title">We Believe in the Power of Women</h2>
                <p className="about-preview-text">
                  She Can Foundation is a global nonprofit dedicated to empowering women and girls 
                  through education, professional development, and community building. Since 2018, 
                  we have impacted over 5,000 women across 12 countries.
                </p>
                <p className="about-preview-text">
                  Our programs are designed to break barriers, build confidence, and create lasting 
                  change in communities around the world.
                </p>
                <Link to="/about" className="btn btn-outline">
                  Learn More About Us →
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== PROGRAMS PREVIEW ==================== */}
      <section className="section programs-preview">
        <div className="container">
          <AnimatedSection>
            <span className="section-badge text-center" style={{ display: 'block' }}>What We Do</span>
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              Comprehensive programs designed to empower women at every stage of their journey.
            </p>
          </AnimatedSection>

          <div className="programs-cards">
            <AnimatedSection className="stagger-1">
              <Link to="/programs" className="program-card card">
                <span className="card-icon">🎓</span>
                <h3 className="card-title">Education & Scholarships</h3>
                <p className="card-text">
                  Providing access to quality education and financial support for women pursuing their academic dreams.
                </p>
                <span className="card-link">Learn More →</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="stagger-2">
              <Link to="/programs" className="program-card card">
                <span className="card-icon">💼</span>
                <h3 className="card-title">Career Development</h3>
                <p className="card-text">
                  Professional skills training, mentorship programs, and networking opportunities for career growth.
                </p>
                <span className="card-link">Learn More →</span>
              </Link>
            </AnimatedSection>

            <AnimatedSection className="stagger-3">
              <Link to="/programs" className="program-card card">
                <span className="card-icon">🏥</span>
                <h3 className="card-title">Health & Wellness</h3>
                <p className="card-text">
                  Promoting women's health awareness, mental wellness, and access to healthcare resources.
                </p>
                <span className="card-link">Learn More →</span>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="section testimonials-section">
        <div className="container">
          <AnimatedSection>
            <span className="section-badge text-center" style={{ display: 'block' }}>Testimonials</span>
            <h2 className="section-title">Stories of Impact</h2>
            <p className="section-subtitle">
              Hear from the incredible women whose lives have been transformed.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="testimonial-carousel">
              <div className="testimonial-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <div className="testimonial-slide" key={i}>
                    <div className="testimonial-card">
                      <div className="testimonial-quote-mark">"</div>
                      <p className="testimonial-quote">{t.quote}</p>
                      <div className="testimonial-author">
                        <div className="testimonial-avatar">{t.initials}</div>
                        <div>
                          <h4 className="testimonial-name">{t.name}</h4>
                          <p className="testimonial-role">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonial-dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="cta-section">
        <div className="cta-shapes">
          <div className="cta-circle cta-circle-1"></div>
          <div className="cta-circle cta-circle-2"></div>
          <div className="cta-circle cta-circle-3"></div>
        </div>
        <div className="container">
          <AnimatedSection className="scale-in">
            <div className="cta-content">
              <h2 className="cta-title">Ready to Make a Difference?</h2>
              <p className="cta-text">
                Join thousands of volunteers, mentors, and supporters who are helping women 
                around the world reach their full potential. Your contribution matters.
              </p>
              <Link to="/join" className="btn btn-white btn-lg">
                Volunteer Now ✨
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

export default Home;
