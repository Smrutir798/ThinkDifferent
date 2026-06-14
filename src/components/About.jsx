import React from 'react';

const VALUES = [
  {
    title: 'Innovation First',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v6M9 10h6" />
      </svg>
    )
  },
  {
    title: 'Customer-Centric Development',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a6 6 0 0 0-3.44-5.32M6 18.72a6 6 0 0 1 3.44-5.32m3.12 7.6a6 6 0 0 0 3.44-5.32M12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-12 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      </svg>
    )
  },
  {
    title: 'Quality Engineering',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.08c-.729.08-1.399-.19-1.929-.68l-2.73-2.52c-.61-.564-.61-1.48 0-2.044l2.73-2.52c.53-.49 1.2-.76 1.929-.68m2.58 8.44c.73-.08 1.4-.35 1.93-.84l2.73-2.52c.61-.564.61-1.48 0-2.044l-2.73-2.52c-.53-.49-1.2-.76-1.93-.68M14 4l-4 16" />
      </svg>
    )
  },
  {
    title: 'Continuous Learning',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    title: 'Long-Term Partnerships',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a6 6 0 0 0-3.44-5.32M6 18.72a6 6 0 0 1 3.44-5.32m3.12 7.6a6 6 0 0 0 3.44-5.32M12 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 14h8M9 17h6" />
      </svg>
    )
  }
];

const About = () => {
  return (
    <section className="about" id="about" style={{ background: 'var(--color-bg)', padding: 'var(--space-4xl) 0' }}>
      <div className="container">
        <div className="about__inner grid-stack-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 'var(--space-3xl)', alignItems: 'start' }}>
          
          {/* Title & Description Panel */}
          <div className="about__text reveal" style={{ position: 'sticky', top: '100px' }}>
            <p className="section__label">Who We Are</p>
            <h2 className="section__heading" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
              Who We Are
            </h2>
            <p className="section__description" style={{ fontSize: '1.05rem', color: 'var(--color-secondary)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }}>
              ThinkDifferent is a technology company dedicated to helping businesses transform ideas into scalable digital solutions. We combine innovation, engineering excellence, and customer-centric development to deliver software that solves real-world challenges.
            </p>
          </div>

          {/* Values Cards Stack */}
          <div className="about__features" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {VALUES.map((val, index) => (
              <div 
                key={val.title}
                className="reveal glass-panel"
                style={{
                  padding: 'var(--space-sm) var(--space-md)',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  gap: 'var(--space-md)',
                  alignItems: 'center',
                  cursor: 'default',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div style={{
                  background: 'var(--color-primary)',
                  color: 'var(--color-bg)',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {val.icon}
                </div>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-body-alt)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    color: 'var(--color-primary)',
                    margin: '0'
                  }}>{val.title}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
