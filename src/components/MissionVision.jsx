import React from 'react';

const MissionVision = () => {
  return (
    <section className="mission-vision" id="mission-vision" style={{ background: 'var(--color-bg)', padding: 'var(--space-3xl) 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }} className="grid-stack-mobile">
          
          {/* Mission Card */}
          <div 
            className="reveal glass-panel"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-2xl) var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background design ornament */}
            <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(0,0,0,0.02)', border: '1px dashed var(--color-border)', pointerEvents: 'none' }}></div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'var(--color-primary)', color: 'var(--color-bg)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.61 3.51a14.98 14.98 0 00-6.16 12.12 14.98 14.98 0 0012.14 6.16v-4.8m5.84-2.58A14.98 14.98 0 0012 9.75" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>Our Mission</h3>
            </div>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--color-secondary)', lineHeight: 1.7, margin: '0' }}>
              To empower businesses with innovative, scalable, and user-centric technology solutions that simplify operations, accelerate growth, and drive digital transformation.
            </p>
          </div>

          {/* Vision Card */}
          <div 
            className="reveal reveal-delay-1 glass-panel"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--space-2xl) var(--space-xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-md)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background design ornament */}
            <div style={{ position: 'absolute', right: '-30px', bottom: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(0,0,0,0.02)', border: '1px dashed var(--color-border)', pointerEvents: 'none' }}></div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ background: 'var(--color-primary)', color: 'var(--color-bg)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyItems: 'center', justifyContent: 'center' }}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-primary)' }}>Our Vision</h3>
            </div>
            
            <p style={{ fontSize: '1.05rem', color: 'var(--color-secondary)', lineHeight: 1.7, margin: '0' }}>
              To become a trusted global technology partner, delivering impactful software solutions and building products that help businesses thrive in the digital era.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
