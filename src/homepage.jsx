import React, { useState } from "react";
import "./homepage.css";
import ClientShowcase from "./ClientShowcase.jsx";


const Homepage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="gaming-container">
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo">
           <img className="image_pinacle" style={{width: "100px", height: "80px",objectFit: "contain"}} src = "./logopin.jpeg" alt="logo" /> 
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#mobile" onClick={() => setMenuOpen(false)}>
                Mobile
              </a>
            </li>
            {/* <li><a href="#desktop" onClick={() => setMenuOpen(false)}>Desktop</a></li>
            <li><a href="#gaming" onClick={() => setMenuOpen(false)}>Gaming</a></li>
            <li><a href="#process" onClick={() => setMenuOpen(false)}>How We Build</a></li>
            <li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li> */}
          </ul>

          <button
            className="cta-btn"
            onClick={() => {
              window.location.href =
                "mailto:muhammadmajidzia@pinnaklestudioz.com?subject=Getting%20Started&body=Hi,%20I%20want%20to%20get%20started!";
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">NEXT-GEN GAMING</span>
            <h1 className="hero-title">
              Play Beyond <span className="gradient-text">Limits</span>
            </h1>
            <p className="hero-description">
              Experience the ultimate gaming revolution across all platforms.
              Dive into immersive worlds, compete globally, and dominate the
              leaderboards.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Start Playing</button>
              <button className="btn-secondary">Watch Trailer</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <h3>10M+</h3>
                <p>Active Players</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Games Available</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-card card-1"></div>
            <div className="floating-card card-2"></div>
            <div className="floating-card card-3"></div>
          </div>
        </div>
      </section>

      <section id="mobile" className="platform-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">📱 MOBILE</span>
          </div>
          <div className="platform-content">
            <div className="platform-visual">
              <div className="mobile-mockup"></div>
            </div>
            <div className="platform-text">
              <h3>Mobile Revolution</h3>
              <p>
                The mobile game industry is constantly increasing as users'
                engagement towards apps is increasing at the same time
              </p>

              <button className="btn-primary">Download Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="gaming" className="platform-section alternate">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">🎮 GAMING</span>
           
          </div>
          <div className="platform-content reverse">
            <div className="platform-text">
              <h3>Immersive Gaming Universe</h3>
              <p>
                The mobile game industry is constantly increasing as users' engagement
                towards apps is increasing at the same time.
              </p>
             
              <button className="btn-primary">Explore Games</button>
            </div>
            <div className="platform-visual">
              <div className="gaming-mockup"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section id="desktop" className="platform-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">💻 DESKTOP</span>
           
          </div>
          <div className="platform-content">
            <div className="platform-visual">
              <div className="desktop-mockup"></div>
            </div>
            <div className="platform-text">
              <h3>Maximum Performance</h3>
              <p>
                The mobile game industry is constantly increasing as users' engagement
                towards apps is increasing at the same time.
              </p>
             
              <button className="btn-primary">Join Community</button>
            </div>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      {/* <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">🏢 ABOUT</span>
            <h2 className="section-title">Pinnacle Studioz</h2>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>We craft worlds players love to return to</h3>
              <p>
                We are a game studio and technology company building cross‑platform experiences
                for mobile and desktop. Our teams combine design, art, and engineering to deliver
                gameplay that feels amazing from the first tap to the final boss.
              </p>
              <ul className="feature-list">
                <li><span className="check-icon">✔</span> Player‑first design and accessibility</li>
                <li><span className="check-icon">✔</span> Data‑informed iteration and live‑ops</li>
                <li><span className="check-icon">✔</span> Scalable backend and fair monetization</li>
              </ul>
              <div className="hero-stats about-stats">
                <div className="stat">
                  <h3>15+</h3>
                  <p>Launched Titles</p>
                </div>
                <div className="stat">
                  <h3>120+</h3>
                  <p>Team Members</p>
                </div>
                <div className="stat">
                  <h3>4</h3>
                  <p>Studios Worldwide</p>
                </div>
              </div>
            </div>
            <div className="about-visual" aria-hidden="true">
              <div className="about-showcase"></div>
            </div>
          </div>
        </div>
      </section> */}

      {/* How We Build Section */}
      {/* <section id="process" className="process-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">🛠️ PROCESS</span>
            <h2 className="section-title">How We Build Our Games</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-icon" aria-hidden="true">💡</div>
              <h4>Concept & Vision</h4>
              <p>We explore mechanics, narrative pillars, and audience needs to define a clear vision.</p>
            </div>
            <div className="process-step">
              <div className="step-icon" aria-hidden="true">🧪</div>
              <h4>Prototype Fast</h4>
              <p>Playable prototypes validate fun early with user testing and rapid iteration.</p>
            </div>
            <div className="process-step">
              <div className="step-icon" aria-hidden="true">🎨</div>
              <h4>Build & Polish</h4>
              <p>Art, audio, and engineering come together with CI/CD and performance budgets.</p>
            </div>
            <div className="process-step">
              <div className="step-icon" aria-hidden="true">🧭</div>
              <h4>Playtest & Balance</h4>
              <p>Telemetry and community feedback tune difficulty curves and core loops.</p>
            </div>
            <div className="process-step">
              <div className="step-icon" aria-hidden="true">🚀</div>
              <h4>Launch & Live‑Ops</h4>
              <p>Seasonal content, events, and fair monetization keep players engaged long‑term.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section id="team" className="team-section alternate">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">👥 TEAM</span>
            <h2 className="section-title">Meet Our Leadership</h2>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="avatar" aria-hidden="true">AR</div>
              <h4>Aria Reynolds</h4>
              <p className="role">Studio Director</p>
              <p>Focuses on player‑first culture and cross‑platform excellence.</p>
            </div>
            <div className="team-card">
              <div className="avatar" aria-hidden="true">KM</div>
              <h4>Kai Malik</h4>
              <p className="role">Head of Game Design</p>
              <p>Builds compelling core loops and progression systems.</p>
            </div>
            <div className="team-card">
              <div className="avatar" aria-hidden="true">SS</div>
              <h4>Sana Shah</h4>
              <p className="role">Art Director</p>
              <p>Leads visual identity and worldbuilding across titles.</p>
            </div>
            <div className="team-card">
              <div className="avatar" aria-hidden="true">JT</div>
              <h4>Jonas Tao</h4>
              <p className="role">Engineering Lead</p>
              <p>Owns engine integration, tooling, and performance.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="features-grid">
        <div className="section-container">
          <div className="section-header">
            <span className="section-badge">⭐ FEATURES</span>
            <h2 className="section-title">Why Choose Us</h2>
          </div>
          <div className="grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance across all devices with minimal latency</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Platform</h3>
              <p>Advanced security measures to protect your account and data</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>Global Community</h3>
              <p>Connect with players worldwide in real-time multiplayer</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Smart Matchmaking</h3>
              <p>AI-powered system pairs you with players at your skill level</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Achievements</h3>
              <p>Unlock rewards, earn badges, and climb the leaderboards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Social Features</h3>
              <p>Chat, team up, and build lasting friendships with gamers</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Start Your Gaming Journey?</h2>
          <p>Join millions of players and experience gaming like never before</p>
          <div className="cta-buttons">
            <button className="btn-primary large">Create Free Account</button>
            <button className="btn-secondary large">Learn More</button>
          </div>
        </div>
      </section> */}
      {/* --- CLIENT SHOWCASE SECTION --- */}
      <ClientShowcase />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
            <div className="logo">
           <img style={{width: "100px", height: "80px",objectFit: "contain"}} src = "./logopin.jpeg" alt="logo" /> 
          </div>
            </div>
            <p>The ultimate gaming platform for players worldwide.</p>
            <div style={{marginTop: '10px'}}>
              <div style={{fontWeight: '600', color: '#444', fontSize: '1.08rem', marginBottom: '2px'}}>+351 910 554 305</div>
              <div style={{color:'#62637a', fontSize: '1.01rem'}}>Lisbon, Portugal</div>
            </div>
            {/* <div className="social-links">
              <a href="#" className="social-icon">🎮</a>
              <a href="#" className="social-icon">📱</a>
              <a href="#" className="social-icon">💬</a>
              <a href="#" className="social-icon">🎬</a>
            </div> */}
          </div>
          <div className="footer-section">
            <h4>Platform</h4>
            <ul>
              <li><a href="#mobile">Mobile Gaming</a></li>
              {/* <li><a href="#desktop">Desktop Gaming</a></li>
              <li><a href="#gaming">Console Gaming</a></li>
              <li><a href="#about">Cloud Gaming</a></li> */}
            </ul>
          </div>
          {/* <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#press">Press</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div> */}
          {/* <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#community">Community</a></li>
            </ul>
          </div> */}
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 PINNACLESTUDIOZ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
