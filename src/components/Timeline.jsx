import React, { useEffect, useRef } from 'react';

const Timeline = () => {
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleTimelineScroll = () => {
      if (!containerRef.current || !progressRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the container
      const scrollPercentage = Math.max(0, Math.min(1, (windowHeight / 2 - containerRect.top) / containerRect.height));
      
      // Update line height
      progressRef.current.style.height = `${scrollPercentage * 100}%`;
      
      // Highlight steps as line reaches them
      const steps = containerRef.current.querySelectorAll('.process-step');
      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        const numberEl = step.querySelector('.process-step__number');
        if (numberEl) {
          if (stepRect.top < windowHeight / 2 + 50) {
            numberEl.style.color = 'var(--color-primary)';
            numberEl.style.transform = 'scale(1.2)';
            numberEl.style.transition = 'all 0.3s ease-out';
          } else {
            numberEl.style.color = 'var(--color-secondary)';
            numberEl.style.transform = 'scale(1)';
          }
        }
      });
    };

    window.addEventListener('scroll', handleTimelineScroll, { passive: true });
    handleTimelineScroll(); // init
    return () => window.removeEventListener('scroll', handleTimelineScroll);
  }, []);

  return (
    <section className="process" id="timeline" style={{ background: 'var(--color-bg)', padding: 'var(--space-4xl) 0' }}>
      <div className="container">
        <div className="process__header">
          <p className="section__label reveal">The Journey</p>
          <h2 className="section__heading reveal reveal-delay-1">
            How We Got <em className="text-gradient">Here</em>
          </h2>
        </div>

        <div className="process__steps" style={{ position: 'relative' }} ref={containerRef}>
          {/* Timeline Line */}
          <div className="timeline-line-base"></div>
          <div className="timeline-line-progress" ref={progressRef}></div>
          
          <div className="process-step reveal" style={{ textAlign: 'center' }}>
            <div className="process-step__number" style={{ fontSize: '1.5rem', border: 'none', background: 'transparent', width: 'auto', height: 'auto', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-secondary)' }}>01</div>
            <h3 className="process-step__title">The Idea</h3>
            <p className="process-step__desc">Late-night conversations and endless curiosity sparking a shared vision.</p>
          </div>

          <div className="process-step reveal reveal-delay-1" style={{ textAlign: 'center' }}>
            <div className="process-step__number" style={{ fontSize: '1.5rem', border: 'none', background: 'transparent', width: 'auto', height: 'auto', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-secondary)' }}>02</div>
            <h3 className="process-step__title">The First Prototype</h3>
            <p className="process-step__desc">Learning from failures, iterating fast, and building the core engine.</p>
          </div>

          <div className="process-step reveal reveal-delay-2" style={{ textAlign: 'center' }}>
            <div className="process-step__number" style={{ fontSize: '1.5rem', border: 'none', background: 'transparent', width: 'auto', height: 'auto', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-secondary)' }}>03</div>
            <h3 className="process-step__title">Product Development</h3>
            <p className="process-step__desc">Crafting every feature with care, simplicity, and intelligence.</p>
          </div>

          <div className="process-step reveal reveal-delay-3" style={{ textAlign: 'center' }}>
            <div className="process-step__number" style={{ fontSize: '1.5rem', border: 'none', background: 'transparent', width: 'auto', height: 'auto', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--color-secondary)' }}>04</div>
            <h3 className="process-step__title">Launching Soon</h3>
            <p className="process-step__desc">A next-generation platform ready to empower businesses worldwide.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
