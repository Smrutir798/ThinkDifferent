import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/' + targetId);
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navHeight = 80; // Approximate nav height
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`} id="mainNav">
      <div className="nav__inner">
        <Link to="/" className="nav__logo" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em', textDecoration: 'none' }}>
          ThinkDifferent<span className="nav__logo-dot"></span>
        </Link>

        <ul className={`nav__links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" className="nav__link" onClick={(e) => handleSmoothScroll(e, '#about')}>Who We Are</a></li>
          <li><a href="#story" className="nav__link" onClick={(e) => handleSmoothScroll(e, '#story')}>Why We Started</a></li>
          <li><a href="#services" className="nav__link" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
          <li><a href="#products" className="nav__link" onClick={(e) => handleSmoothScroll(e, '#products')}>Products</a></li>
        </ul>

        <a href="#contact" className="nav__cta" style={{ borderRadius: 'var(--radius-full)', fontWeight: 500 }} onClick={(e) => handleSmoothScroll(e, '#contact')}>
          Contact Us
        </a>

        <button 
          className={`nav__toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          aria-label="Toggle navigation menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
