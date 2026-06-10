import React, { useEffect } from 'react'
import './index.css'
import PageLoader from './components/PageLoader'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Timeline from './components/Timeline'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Magnetic Button Logic
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    const handleMagneticMove = (e) => {
      const btn = e.currentTarget;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMagneticLeave = (e) => {
      const btn = e.currentTarget;
      btn.style.transform = `translate(0px, 0px)`;
    };

    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', handleMagneticMove);
      btn.addEventListener('mouseleave', handleMagneticLeave);
    });

    return () => {
      revealObserver.disconnect();
      magneticBtns.forEach(btn => {
        btn.removeEventListener('mousemove', handleMagneticMove);
        btn.removeEventListener('mouseleave', handleMagneticLeave);
      });
    };
  }, []);

  return (
    <>
      <PageLoader />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <Timeline />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}

export default App
