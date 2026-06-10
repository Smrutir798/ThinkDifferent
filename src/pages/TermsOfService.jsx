import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ padding: 'var(--space-4xl) 0', background: 'var(--color-bg)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', background: 'var(--color-surface)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)', fontSize: '0.875rem', marginBottom: 'var(--space-xl)', textDecoration: 'none', fontWeight: 500 }}>
          &larr; Back to Home
        </Link>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: 'var(--space-md)', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>Terms of Service</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: 'var(--space-xl)', fontSize: '0.875rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--color-secondary)', lineHeight: 1.7 }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>1. Acceptance of Terms</h2>
            <p>By accessing or using the ThinkDiffrent landing page and joining our waitlist, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>
          </section>
          
          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>2. Description of Service</h2>
            <p>ThinkDiffrent provides an informational landing page and a waitlist form to collect interest for an upcoming SaaS platform. We reserve the right to modify or discontinue any part of this service at any time without notice.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>3. User Conduct</h2>
            <p>You agree to use the website only for lawful purposes. You must not use the site in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>4. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of ThinkDiffrent or its content suppliers and is protected by intellectual property laws.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>5. Limitation of Liability</h2>
            <p>ThinkDiffrent shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
