import React from 'react';

const Hero = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="hero" style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', padding: 'var(--space-4xl) 0 var(--space-2xl) 0' }}>
      <div className="container" style={{ width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }} className="grid-stack-mobile">
          
          {/* Left Text Column */}
          <div className="hero__content" style={{ textAlign: 'left', margin: '0', maxWidth: '100%', zIndex: 1 }}>
            <div className="hero__badge reveal visible" style={{ background: 'rgba(0,0,0,0.03)', color: 'var(--color-primary)', border: '1px solid var(--color-border)', backdropFilter: 'blur(10px)', marginBottom: 'var(--space-sm)' }}>
              <span className="hero__badge-dot" style={{ background: 'var(--color-primary)' }}></span>
              Innovate • Build • Scale
            </div>

            <h1 className="hero__headline reveal reveal-delay-1" style={{ color: 'var(--color-primary)', textShadow: 'none', fontSize: 'clamp(2.5rem, 5vw, 4.2rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: 'var(--space-md)' }}>
              Building Technology That Drives <em className="text-gradient">Innovation</em> and Business Growth.
            </h1>

            <p className="hero__description reveal reveal-delay-2" style={{ color: 'var(--color-secondary)', fontWeight: 400, textShadow: 'none', margin: '0 0 var(--space-xl) 0', maxWidth: '640px', fontSize: '1.1rem', lineHeight: 1.6 }}>
              ThinkDifferent is an IT services and product development company specializing in custom software development, AI solutions, cloud applications, and digital transformation services.
            </p>

            <div className="hero__actions reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-start' }}>
              <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="btn btn--primary magnetic-btn" style={{ padding: '0.8rem 1.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.95rem' }}>
                Explore Services
              </a>
              <a href="#products" onClick={(e) => handleSmoothScroll(e, '#products')} className="btn btn--secondary magnetic-btn" style={{ padding: '0.8rem 1.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.95rem' }}>
                View Products
              </a>
              <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="btn btn--secondary magnetic-btn" style={{ padding: '0.8rem 1.8rem', borderRadius: 'var(--radius-full)', fontSize: '0.95rem', background: 'transparent', border: '1.5px solid var(--color-primary)' }}>
                Book a Consultation
              </a>
            </div>
          </div>

          {/* Right SVG Animation Column */}
          <div className="hero__visual reveal reveal-delay-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '420px', filter: 'drop-shadow(var(--shadow-lg))' }}>
              {/* Decorative background grids */}
              <circle cx="250" cy="250" r="210" stroke="var(--color-border)" strokeWidth="1" strokeDasharray="4 8" />
              <circle cx="250" cy="250" r="150" stroke="var(--color-border)" strokeWidth="1" />
              
              {/* Outer Orbit Line with animated node */}
              <circle cx="250" cy="250" r="180" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" />
              <circle cx="250" cy="70" r="6" fill="var(--color-primary)" style={{ transformOrigin: '250px 250px', animation: 'spin 12s linear infinite' }} />

              {/* Central AI Nucleus */}
              <g className="ai-brain-node">
                <circle cx="250" cy="250" r="45" fill="var(--color-primary)" />
                <circle cx="250" cy="250" r="60" stroke="var(--color-primary)" strokeWidth="1.5" strokeDasharray="3 6" style={{ transformOrigin: '250px 250px', animation: 'spin 20s linear infinite' }} />
                
                {/* Microchip nodes inside */}
                <rect x="238" y="238" width="24" height="24" rx="4" fill="var(--color-bg)" />
                <path d="M244 246H256M244 250H256M244 254H256" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* AI Neural Network connections */}
              <g stroke="var(--color-secondary)" strokeWidth="1" opacity="0.6">
                <line x1="250" y1="250" x2="140" y2="170" strokeDasharray="2 4" />
                <line x1="250" y1="250" x2="360" y2="170" strokeDasharray="2 4" />
                <line x1="250" y1="250" x2="180" y2="360" strokeDasharray="2 4" />
                <line x1="250" y1="250" x2="320" y2="360" strokeDasharray="2 4" />
              </g>

              {/* Software Development Node (Left) */}
              <g className="software-node" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <rect x="100" y="130" width="80" height="70" rx="12" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="1.5" />
                <rect x="100" y="130" width="80" height="20" rx="12" fill="rgba(0,0,0,0.03)" />
                <circle cx="115" cy="140" r="3" fill="#ef4444" />
                <circle cx="125" cy="140" r="3" fill="#eab308" />
                <circle cx="135" cy="140" r="3" fill="#22c55e" />
                {/* Code symbol */}
                <path d="M125 165L118 170L125 175M155 165L162 170L155 175" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M143 163L137 177" stroke="var(--color-secondary)" strokeWidth="1.5" strokeLinecap="round" />
              </g>

              {/* Digital Transformation Node (Right) */}
              <g className="transform-node" style={{ transformOrigin: '360px 170px', animation: 'float 7s ease-in-out infinite' }}>
                <circle cx="360" cy="170" r="45" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="1.5" />
                {/* Interlocking Gear Lines */}
                <circle cx="360" cy="170" r="20" stroke="var(--color-secondary)" strokeWidth="1.5" strokeDasharray="4 2" style={{ transformOrigin: '360px 170px', animation: 'spin 10s linear infinite' }} />
                <circle cx="360" cy="170" r="8" fill="var(--color-primary)" />
                {/* Transforming Arrow Orbit */}
                <path d="M335 170A25 25 0 0 1 385 170" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M381 166L385 170L381 174" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </g>

              {/* Cloud Database Node (Bottom Left) */}
              <g className="cloud-node" style={{ animation: 'float 8s ease-in-out infinite' }}>
                <rect x="140" y="320" width="80" height="75" rx="12" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="1.5" />
                {/* Databases stack */}
                <rect x="150" y="335" width="60" height="10" rx="3" fill="rgba(0,0,0,0.03)" stroke="var(--color-primary)" strokeWidth="1.2" />
                <rect x="150" y="350" width="60" height="10" rx="3" fill="rgba(0,0,0,0.03)" stroke="var(--color-primary)" strokeWidth="1.2" />
                <rect x="150" y="365" width="60" height="10" rx="3" fill="rgba(0,0,0,0.03)" stroke="var(--color-primary)" strokeWidth="1.2" />
                <circle cx="158" cy="340" r="2" fill="#22c55e" />
                <circle cx="158" cy="355" r="2" fill="#22c55e" />
                <circle cx="158" cy="370" r="2" fill="#22c55e" />
              </g>

              {/* Data Analytics Growth Chart Node (Bottom Right) */}
              <g className="chart-node" style={{ animation: 'float 5.5s ease-in-out infinite' }}>
                <rect x="280" y="320" width="80" height="75" rx="12" fill="var(--color-bg)" stroke="var(--color-border)" strokeWidth="1.5" />
                {/* Bar chart lines */}
                <line x1="295" y1="375" x2="295" y2="355" stroke="var(--color-secondary)" strokeWidth="6" strokeLinecap="round" />
                <line x1="310" y1="375" x2="310" y2="345" stroke="var(--color-secondary)" strokeWidth="6" strokeLinecap="round" />
                <line x1="325" y1="375" x2="325" y2="335" stroke="var(--color-primary)" strokeWidth="6" strokeLinecap="round" />
                <line x1="340" y1="375" x2="340" y2="350" stroke="var(--color-secondary)" strokeWidth="6" strokeLinecap="round" />
                {/* Growth trend arrow */}
                <path d="M295 350L310 338L325 328L340 335" fill="none" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="340" cy="335" r="2" fill="var(--color-primary)" />
              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
