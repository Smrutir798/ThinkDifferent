import React, { useEffect, useRef } from 'react';

const STORY_MILESTONES = [
  {
    number: '01',
    title: 'Why We Started',
    subtitle: 'Our Core Belief',
    desc: 'We started ThinkDifferent with a simple belief: Every business deserves access to modern, scalable, and affordable technology.'
  },
  {
    number: '02',
    title: 'The Challenge',
    subtitle: 'Outdated Systems & Inefficiency',
    desc: 'As developers and problem-solvers, we saw businesses struggling with outdated systems and inefficient processes.'
  },
  {
    number: '03',
    title: 'Our Actions',
    subtitle: 'Simplifying Operations',
    desc: 'We set out to create solutions that simplify operations, improve efficiency, and accelerate growth through technology.'
  },
  {
    number: '04',
    title: 'Empowering Today',
    subtitle: 'Embracing Digital Transformation',
    desc: 'Today, ThinkDifferent delivers IT services and builds innovative products that empower businesses to embrace digital transformation.'
  }
];

const Story = () => {
  const containerRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !progressRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate vertical scroll progress inside the timeline container
      const totalHeight = rect.height;
      const scrolledAmount = windowHeight / 2 - rect.top;
      const percentage = Math.max(0, Math.min(1, scrolledAmount / totalHeight));

      progressRef.current.style.height = `${percentage * 100}%`;

      // Highlight active elements
      const steps = containerRef.current.querySelectorAll('.story-timeline__item');
      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        if (stepRect.top < windowHeight / 2 + 50) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on load to position initial elements
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="story-section" id="story" style={{ background: 'var(--color-bg)', padding: 'var(--space-4xl) 0', overflow: 'hidden' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <p className="section__label reveal visible">Why We Started</p>
          <h2 className="section__heading reveal reveal-delay-1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 600, color: 'var(--color-primary)' }}>
            Our Journey & <em className="text-gradient">Core Story</em>
          </h2>
          <p className="section__description" style={{ margin: '0 auto', maxWidth: '600px', color: 'var(--color-secondary)' }}>
            We started with a goal to build technology that simplifies operational complexity. Here is how we turned a vision into an IT service and product reality.
          </p>
        </div>

        {/* Timeline Container */}
        <div 
          className="story-timeline" 
          ref={containerRef}
          style={{ 
            position: 'relative', 
            padding: 'var(--space-xl) 0', 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'var(--space-2xl)' 
          }}
        >
          {/* Vertical progress line */}
          <div 
            style={{ 
              position: 'absolute', 
              left: '50%', 
              top: '0', 
              bottom: '0', 
              width: '2px', 
              background: 'rgba(0,0,0,0.06)', 
              transform: 'translateX(-50%)',
              zIndex: 1
            }}
            className="story-line-base"
          >
            <div 
              ref={progressRef}
              style={{ 
                width: '100%', 
                height: '0%', 
                background: 'var(--color-primary)', 
                transition: 'height 0.1s ease-out' 
              }} 
            />
          </div>

          {/* Timeline Cards */}
          {STORY_MILESTONES.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={milestone.number}
                className={`story-timeline__item reveal`}
                style={{
                  display: 'flex',
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  position: 'relative',
                  width: '100%',
                  zIndex: 2
                }}
              >
                {/* Visual Circle Indicator on the line */}
                <div 
                  className="story-timeline__dot"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '30px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--color-bg)',
                    border: '3px solid var(--color-border)',
                    transform: 'translateX(-50%)',
                    transition: 'all 0.3s ease-out',
                    zIndex: 3
                  }}
                />

                {/* Card Content Box */}
                <div 
                  className="story-timeline__card glass-panel"
                  style={{
                    width: '45%',
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--space-lg)'
                  }}
                >
                  <span style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '1.25rem', 
                    fontWeight: 700, 
                    color: 'var(--color-muted)',
                    display: 'block',
                    marginBottom: '4px' 
                  }}>
                    {milestone.number}
                  </span>
                  <h3 style={{ 
                    fontFamily: 'var(--font-body-alt)', 
                    fontSize: '1.2rem', 
                    fontWeight: 600, 
                    color: 'var(--color-primary)', 
                    marginBottom: '8px' 
                  }}>
                    {milestone.title}
                  </h3>
                  <h4 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 500, 
                    color: 'var(--color-secondary)', 
                    lineHeight: 1.4,
                    marginBottom: '12px',
                    borderLeft: '2px solid var(--color-primary)',
                    paddingLeft: '10px'
                  }}>
                    {milestone.subtitle}
                  </h4>
                  <p style={{ 
                    fontSize: '0.875rem', 
                    color: 'var(--color-secondary)', 
                    lineHeight: 1.6 
                  }}>
                    {milestone.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Story;
