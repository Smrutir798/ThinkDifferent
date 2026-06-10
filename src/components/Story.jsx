import React from 'react';

const Story = () => {
  return (
    <section className="about" id="story" style={{ background: 'var(--color-surface)', paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div className="container">
        <div className="about__inner" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p className="section__label reveal" style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--color-primary)' }}>Our Story</p>
          <h2 className="section__heading reveal reveal-delay-1" style={{ fontSize: '3rem' }}>
            Every Great Journey Starts with a <br /><em className="text-gradient">Simple Idea</em>
          </h2>
          <div className="section__description reveal reveal-delay-2" style={{ fontSize: '1.125rem', color: '#444', maxWidth: '100%', textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ marginBottom: '1.5rem' }}>We are ThinkDifferent, a team united by a passion for technology, innovation, and solving meaningful problems. For years, we explored ideas, built projects, learned from failures, and dreamed about creating something that could make a real impact.</p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', textAlign: 'center' }}>Today, that dream is becoming reality.</p>
            <p style={{ marginBottom: '1.5rem' }}>We're building a SaaS platform focused on simplicity, intelligence, and exceptional user experiences. Every feature is crafted with care, every decision driven by purpose, and every step taken with our future customers in mind.</p>
            <p style={{ fontWeight: 600, textAlign: 'center', fontSize: '1.25rem' }}>This is more than a startup.<br />It's our vision, our commitment, and our journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
