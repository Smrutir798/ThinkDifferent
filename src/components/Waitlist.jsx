import React, { useState, useEffect } from 'react';

const Waitlist = () => {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [pulse, setPulse] = useState(false);
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check localStorage for existing signup
    if (localStorage.getItem('twobrothers_waitlist_email')) {
      setIsSuccess(true);
    }

    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 14);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, '0'),
        hours: h.toString().padStart(2, '0'),
        minutes: m.toString().padStart(2, '0'),
        seconds: s.toString().padStart(2, '0')
      });

      // Trigger pulse animation
      setPulse(false);
      setTimeout(() => setPulse(true), 10);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    // Honeypot check: If this visually hidden field is filled, it's a bot.
    if (honeypot) {
      console.warn('Spam bot detected by honeypot.');
      setIsSuccess(true); // Silently "succeed" for the bot
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;
      
      // Fallback for local testing if the user hasn't added the webhook yet
      if (!webhookUrl || webhookUrl === 'YOUR_WEBHOOK_URL_HERE') {
        console.warn('Webhook URL not found in .env. Falling back to local storage.');
        setTimeout(() => {
          localStorage.setItem('twobrothers_waitlist_email', email);
          setIsSuccess(true);
          setIsSubmitting(false);
        }, 1200);
        return;
      }

      // Using mode: 'no-cors' and text/plain to bypass CORS preflight. 
      // The Apps Script will parse the raw JSON string.
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify({ email: email, timestamp: new Date().toISOString() })
      });

      localStorage.setItem('twobrothers_waitlist_email', email);
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('There was an issue joining the waitlist. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="cta" id="waitlist" style={{ background: 'var(--color-surface)', padding: 'var(--space-4xl) 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '50%', height: '80%', background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60%', height: '90%', background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)', borderRadius: '50%' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="cta__card reveal" style={{ background: 'var(--color-glass-strong)', backdropFilter: 'blur(20px)', border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'var(--shadow-xl)', maxWidth: '800px', margin: '0 auto', color: 'var(--color-primary)' }}>
          <p className="cta__label" style={{ color: 'var(--color-secondary)' }}>Join The Movement</p>
          <h2 className="cta__heading" style={{ color: 'var(--color-primary)' }}>
            Something Extraordinary<br /><em className="text-gradient">Is Coming</em>
          </h2>
          <p className="cta__description" style={{ color: '#555', marginBottom: 'var(--space-xl)', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            We're working behind the scenes to create a platform that transforms the way businesses operate. Be among the first to experience it.
          </p>

          <div className="countdown-timer" style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <div className="countdown-item">
              <span className={`countdown-value ${pulse ? 'pulse' : ''}`}>{timeLeft.days}</span>
              <span className="countdown-label">Days</span>
            </div>
            <div className="countdown-item">
              <span className={`countdown-value ${pulse ? 'pulse' : ''}`}>{timeLeft.hours}</span>
              <span className="countdown-label">Hours</span>
            </div>
            <div className="countdown-item">
              <span className={`countdown-value ${pulse ? 'pulse' : ''}`}>{timeLeft.minutes}</span>
              <span className="countdown-label">Minutes</span>
            </div>
            <div className="countdown-item">
              <span className={`countdown-value ${pulse ? 'pulse' : ''}`}>{timeLeft.seconds}</span>
              <span className="countdown-label">Seconds</span>
            </div>
          </div>
          
          <div className="cta__actions" style={{ justifyContent: 'center', width: '100%', maxWidth: '480px', margin: '0 auto' }}>
            <form className={`waitlist-form ${isSuccess ? 'success' : ''}`} onSubmit={handleSubmit} style={{ width: '100%' }}>
              <div className="waitlist-form__group">
                {/* Honeypot field - visually hidden to catch bots */}
                <input 
                  type="text" 
                  name="website" 
                  style={{ display: 'none' }} 
                  tabIndex="-1" 
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
                <input 
                  type="email" 
                  placeholder="Enter your best email address..." 
                  className="waitlist-form__input" 
                  style={{ color: 'var(--color-primary)' }} 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting || isSuccess}
                />
                <button type="submit" className="waitlist-form__btn magnetic-btn" style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 'var(--radius-full)', padding: '0.75rem 2rem' }} disabled={isSubmitting || isSuccess}>
                  {isSubmitting ? 'Securing...' : 'Join Waitlist'}
                </button>
              </div>
              <div className="waitlist-form__success" style={{ background: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.2)', color: '#166534' }}>
                <span style={{ fontWeight: 600 }}>Success!</span> You're on the list! We'll be in touch soon.
              </div>
            </form>
          </div>

          <div className="signatures" style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', opacity: 0.8 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: '"Mrs Saint Delafield", cursive', fontSize: '2.5rem', color: 'var(--color-primary)', lineHeight: 1 }}>Smruti</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-muted)', marginTop: '0.5rem' }}>Founder</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: '"Mrs Saint Delafield", cursive', fontSize: '2.5rem', color: 'var(--color-primary)', lineHeight: 1 }}>Umashanker</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-muted)', marginTop: '0.5rem' }}>Co-Founder</div>
            </div>
          </div>

          <div className="social-icons" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            {/* SVG icons shortened for brevity */}
            <a href="#" className="social-icon" style={{ color: 'var(--color-primary)' }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </a>
            <a href="#" className="social-icon" style={{ color: 'var(--color-primary)' }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="social-icon" style={{ color: 'var(--color-primary)' }}>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
