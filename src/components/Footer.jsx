import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ background: 'var(--color-bg)', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: 'var(--space-3xl)', paddingBottom: 'var(--space-xl)' }}>
      <div className="container">
        <div className="footer__inner" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', marginBottom: 'var(--space-3xl)' }}>
          <div className="footer__brand">
            <a href="#" className="nav__logo" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', display: 'inline-flex', alignItems: 'center', marginBottom: '1rem' }}>
              ThinkDiffrent<span className="nav__logo-dot" style={{ display: 'inline-block', width: '6px', height: '6px', background: 'var(--color-primary)', borderRadius: '50%', marginLeft: '4px' }}></span>
            </a>
            <p style={{ color: 'var(--color-secondary)', fontSize: '0.875rem', maxWidth: '350px' }}>
              Building next-generation platforms to empower the future of business.
            </p>
          </div>
        </div>
        <div className="footer__bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 'var(--space-lg)', borderTop: '1px solid rgba(0,0,0,0.05)', color: 'var(--color-secondary)', fontSize: '0.75rem' }}>
          <p>&copy; {new Date().getFullYear()} ThinkDiffrent. All rights reserved.</p>
          <div className="footer__legal" style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
