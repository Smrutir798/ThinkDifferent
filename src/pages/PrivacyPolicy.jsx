import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ padding: 'var(--space-4xl) 0', background: 'var(--color-bg)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px', background: 'var(--color-surface)', padding: 'var(--space-2xl)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-secondary)', fontSize: '0.875rem', marginBottom: 'var(--space-xl)', textDecoration: 'none', fontWeight: 500 }}>
          &larr; Back to Home
        </Link>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: 'var(--space-md)', color: 'var(--color-primary)', letterSpacing: '-0.02em' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--color-muted)', marginBottom: 'var(--space-xl)', fontSize: '0.875rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="content" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', color: 'var(--color-secondary)', lineHeight: 1.7 }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>1. Information We Collect</h2>
            <p>We only collect the information you choose to provide to us, such as your email address when you join our waitlist. This helps us notify you when we launch and keep you updated on our progress.</p>
          </section>
          
          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>2. How We Use Your Information</h2>
            <p>Your email address is strictly used for the purpose of communicating important updates about ThinkDifferent. We do not sell, rent, or share your personal information with third parties.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>3. Security</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>4. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: 'var(--space-xs)', fontFamily: 'var(--font-heading-alt)' }}>5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at thinkdiffrentsam@gmail.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
