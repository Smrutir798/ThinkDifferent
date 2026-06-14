import React from 'react';

const SERVICES_DATA = [
  {
    title: 'Custom Software Development',
    desc: 'Building web applications, enterprise software, and tailored business solutions.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    )
  },
  {
    title: 'AI & Machine Learning Solutions',
    desc: 'Developing intelligent systems, automation platforms, and predictive analytics solutions.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21m0 0l-.813-5.096M9 21h3m-3 0H6m9.813-5.096L15 21m0 0l.813-5.096M15 21h3m-3 0h-3M9.813 15.904a4.502 4.502 0 01-1.097-2.33M15 21a3 3 0 00-6 0m6 0a3 3 0 01-6 0m6-5.096a4.5 4.5 0 001.097-2.33M9.813 15.904h4.374M9.813 15.904l-1.097-2.33m5.471 2.33l1.097-2.33M8.716 13.574A9.011 9.011 0 013 12h3.188M15.284 13.574A9.012 9.012 0 0021 12h-3.188" />
      </svg>
    )
  },
  {
    title: 'Cloud & SaaS Development',
    desc: 'Building secure, scalable, and cloud-native applications.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
      </svg>
    )
  },
  {
    title: 'Data Analytics & Business Intelligence',
    desc: 'Converting data into actionable insights and decision-making tools.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v5.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 0 1 3 18.375v-5.25ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125v-9.75ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v14.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    )
  },
  {
    title: 'Web & Mobile Development',
    desc: 'Creating high-performance and responsive applications.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    )
  },
  {
    title: 'Digital Transformation Consulting',
    desc: 'Helping organizations modernize operations using technology.',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="services" id="services" style={{ background: 'var(--color-bg)', padding: 'var(--space-4xl) 0' }}>
      <div className="container">
        
        {/* Title & Section Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <p className="section__label reveal">Expertise</p>
          <h2 className="section__heading reveal reveal-delay-1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 600 }}>
            Our IT & Product <em className="text-gradient">Services</em>
          </h2>
          <p className="section__description" style={{ margin: '0 auto', maxWidth: '600px', color: 'var(--color-secondary)' }}>
            We design, develop, and integrate specialized solutions to modernise software architectures and drive business growth.
          </p>
        </div>

        {/* Services Glassmorphism Cards Grid */}
        <div className="services__grid grid-stack-tablet" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)' }}>
          {SERVICES_DATA.map((srv, idx) => (
            <div 
              key={srv.title} 
              className="service-card glass-panel reveal" 
              style={{ 
                animationDelay: `${idx * 0.08}s`,
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl) var(--space-lg)',
                cursor: 'default'
              }}
            >
              <div 
                className="service-card__icon" 
                style={{ 
                  width: '46px', 
                  height: '46px', 
                  background: 'var(--color-primary)', 
                  color: 'var(--color-bg)', 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: 'var(--space-md)' 
                }}
              >
                {srv.icon}
              </div>
              <h3 
                className="service-card__title" 
                style={{ 
                  fontFamily: 'var(--font-body-alt)', 
                  fontWeight: 600, 
                  fontSize: '1.25rem', 
                  color: 'var(--color-primary)', 
                  marginBottom: '10px',
                  letterSpacing: '-0.015em'
                }}
              >
                {srv.title}
              </h3>
              <p 
                className="service-card__desc" 
                style={{ 
                  fontSize: '0.925rem', 
                  color: 'var(--color-secondary)', 
                  lineHeight: 1.6 
                }}
              >
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
