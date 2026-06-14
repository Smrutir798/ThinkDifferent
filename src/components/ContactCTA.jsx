import React, { useState } from 'react';

const PROJECT_TYPES = [
  'Custom Software Development',
  'AI & Machine Learning Solutions',
  'Cloud & SaaS Development',
  'Data Analytics',
  'Digital Transformation Consulting'
];

const ContactCTA = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_GOOGLE_SHEETS_URL;

      // Fallback for local testing if the webhook is not configured yet
      if (!webhookUrl || webhookUrl === 'YOUR_WEBHOOK_URL_HERE') {
        console.warn('Webhook URL not found in .env. Falling back to local submission simulation.');
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setFormData({ name: '', email: '', type: '', message: '' });
          // Clear success message after 5 seconds
          setTimeout(() => setIsSuccess(false), 5000);
        }, 1500);
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          type: formData.type,
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      setIsSuccess(true);
      setFormData({ name: '', email: '', type: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting consultation inquiry:', error);
      alert('There was an issue submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-cta" id="contact" style={{ background: 'var(--color-surface)', padding: 'var(--space-4xl) 0', borderTop: '1px solid var(--color-border)', position: 'relative', overflow: 'hidden' }}>
      {/* Visual background design element */}
      <div style={{ position: 'absolute', top: '10%', left: '5%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)', borderRadius: '50%' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Content Box */}
        <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p className="section__label">Get In Touch</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'var(--color-primary)', lineHeight: 1.15, marginBottom: 'var(--space-md)' }}>
            Let's Build Something <br /><em className="text-gradient">Extraordinary</em> Together.
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', lineHeight: 1.6, marginBottom: 'var(--space-xl)', maxWidth: '640px', margin: '0 auto var(--space-xl) auto' }}>
            Whether you need custom software, AI solutions, or a digital transformation partner, ThinkDifferent is ready to help you innovate and grow.
          </p>

          {/* Action buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: showForm ? 'var(--space-xl)' : '0' }}>
            <button 
              onClick={() => setShowForm(!showForm)} 
              className="btn btn--primary magnetic-btn" 
              style={{ borderRadius: 'var(--radius-full)', background: 'var(--color-primary)', color: 'var(--color-bg)', padding: '0.9rem 2.2rem' }}
            >
              {showForm ? 'Close Project Form' : 'Start Your Project'}
            </button>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                setShowForm(true);
                setTimeout(() => {
                  const el = document.getElementById('consultation-form');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
              }}
              className="btn btn--secondary magnetic-btn" 
              style={{ borderRadius: 'var(--radius-full)', padding: '0.9rem 2.2rem' }}
            >
              Contact Us
            </a>
          </div>

          {/* Embedded Project Inquiry Form */}
          {showForm && (
            <div 
              id="consultation-form"
              className="reveal visible glass-panel"
              style={{
                textAlign: 'left',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-xl)',
                maxWidth: '560px',
                margin: 'var(--space-lg) auto 0 auto',
                animation: 'fadeIn 0.3s ease-out'
              }}
            >
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>Project Consultation Inquiry</h3>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Enter your name..." 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'transparent', outline: 'none', color: 'var(--color-primary)', fontSize: '0.9rem' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Business Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Enter your email address..." 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'transparent', outline: 'none', color: 'var(--color-primary)', fontSize: '0.9rem' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="type" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Project Focus Area</label>
                  <select 
                    id="type" 
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'var(--color-bg)', outline: 'none', color: 'var(--color-primary)', fontSize: '0.9rem', cursor: 'pointer' }}
                  >
                    <option value="">Select a service category...</option>
                    {PROJECT_TYPES.map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-secondary)' }}>Project Description</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    placeholder="Briefly describe what you would like to build..." 
                    value={formData.message}
                    onChange={handleChange}
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid var(--color-border)', background: 'transparent', outline: 'none', color: 'var(--color-primary)', fontSize: '0.9rem', resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>

                {isSuccess && (
                  <div style={{ padding: '12px', background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', color: '#166534', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 500, textAlign: 'center' }}>
                    Consultation request received! Our engineering team will reach out within 24 hours.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="btn btn--primary" 
                  style={{ width: '100%', justifyContent: 'center', borderRadius: '8px', padding: '10px 0', fontSize: '0.95rem' }}
                >
                  {isSubmitting ? 'Submitting Request...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
