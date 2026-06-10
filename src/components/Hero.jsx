import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <div className="hero__badge reveal" style={{ background: 'rgba(255,255,255,0.8)', color: 'var(--color-primary)', borderColor: 'rgba(0,0,0,0.1)', backdropFilter: 'blur(10px)' }}>
          <span className="hero__badge-dot" style={{ background: '#22c55e' }}></span>
          Coming Soon
        </div>

        <h1 className="hero__headline reveal reveal-delay-1" style={{ color: 'var(--color-primary)', textShadow: '0 4px 24px rgba(255,255,255,0.4)', maxWidth: '900px' }}>
          Built by ThinkDiffrent.<br />Designed for the <em className="text-gradient">Future</em>.
        </h1>

        <p className="hero__description reveal reveal-delay-2" style={{ color: '#333', fontWeight: 500, textShadow: '0 2px 12px rgba(255,255,255,0.6)' }}>
          What started as late-night conversations, endless curiosity, and a shared dream is becoming something bigger. We are building a next-generation SaaS platform that empowers businesses to work smarter, grow faster, and achieve more.
        </p>

        <div className="hero__actions reveal reveal-delay-3" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          <a href="#waitlist" className="btn btn--primary magnetic-btn" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-full)', fontSize: '1rem' }}>Join the Waitlist</a>
          <a href="#story" className="btn btn--secondary magnetic-btn" style={{ padding: '1rem 2rem', borderRadius: 'var(--radius-full)', fontSize: '1rem', background: 'var(--color-glass-strong)', color: 'var(--color-primary)', border: '1px solid rgba(0,0,0,0.1)' }}>Learn Our Story</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
