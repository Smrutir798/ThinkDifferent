import React from 'react';
import { Link } from 'react-router-dom';

const AHHAR_FEATURES = [
  'QR Ordering',
  'Smart Billing & POS',
  'Inventory Management',
  'Business Analytics',
  'Customer Management'
];

const Products = () => {
  return (
    <section className="products" id="products" style={{ background: 'var(--color-bg)', padding: 'var(--space-4xl) 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <p className="section__label reveal">Proprietary Assets</p>
          <h2 className="section__heading reveal reveal-delay-1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)', fontWeight: 600 }}>
            Products Built by <em className="text-gradient">ThinkDifferent</em>
          </h2>
          <p className="section__description" style={{ margin: '0 auto', maxWidth: '600px', color: 'var(--color-secondary)' }}>
            Alongside delivering custom IT services, we incubate and scale advanced software platforms solving specific industry bottlenecks.
          </p>
        </div>

        {/* Feature Card AHHAR.Ai */}
        <div 
          className="reveal grid-stack-mobile glass-panel" 
          style={{ 
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--space-2xl) var(--space-xl)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1.3fr',
            gap: 'var(--space-2xl)',
            alignItems: 'center'
          }}
        >
          {/* Details Column */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div 
              style={{ 
                background: 'rgba(249,115,22,0.1)', 
                color: '#f97316', 
                padding: '6px 16px', 
                borderRadius: 'var(--radius-full)', 
                fontSize: '0.8rem', 
                fontWeight: 600, 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                marginBottom: '1rem'
              }}
            >
              Featured Product
            </div>
            
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px', letterSpacing: '-0.02em' }}>
              AHHAR<span style={{ color: '#f97316' }}>.AI</span>
            </h3>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--color-secondary)', marginBottom: 'var(--space-lg)', lineHeight: 1.5, fontWeight: 500 }}>
              AI-powered restaurant management platform.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: 'var(--space-xl)', width: '100%' }}>
              {AHHAR_FEATURES.map((feat) => (
                <div key={feat} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div 
                    style={{ 
                      width: '20px', 
                      height: '20px', 
                      borderRadius: '50%', 
                      background: 'rgba(0,0,0,0.05)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'var(--color-primary)', 
                      fontSize: '0.75rem',
                      flexShrink: 0
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ fontSize: '0.95rem', color: 'var(--color-secondary)', fontWeight: 500 }}>{feat}</span>
                </div>
              ))}
            </div>

            <a 
              href="https://ahharai.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary magnetic-btn" 
              style={{ 
                borderRadius: 'var(--radius-full)', 
                background: 'var(--color-primary)', 
                color: 'var(--color-bg)',
                padding: '0.9rem 2.2rem'
              }}
            >
              Learn More &rarr;
            </a>
          </div>

          {/* Interactive Mock Dashboard Column */}
          <div style={{ display: 'flex', flexDirection: 'column', background: 'rgba(0, 0, 0, 0.02)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: 'var(--space-md)', width: '100%', boxShadow: 'var(--shadow-sm)' }}>
            
            {/* Mock Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }}></span>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }}></span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-muted)', marginLeft: '6px' }}>ahhar.ai/dashboard</span>
              </div>
              <span style={{ fontSize: '0.75rem', background: 'rgba(0,0,0,0.04)', padding: '2px 8px', borderRadius: '10px', color: 'var(--color-secondary)' }}>Live Sync</span>
            </div>

            {/* Mock Dashboard Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '12px' }} className="grid-stack-mobile">
              
              {/* Left pane: Stats */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ padding: '12px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Sales (Today)</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>₹3,480.50</div>
                  <div style={{ fontSize: '0.7rem', color: '#22c55e', fontWeight: 600 }}>↑ +14.2% from yesterday</div>
                </div>

                <div style={{ padding: '12px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Active QR Tables</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginTop: '2px' }}>18 <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--color-secondary)' }}>/ 24 total</span></div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-muted)' }}>Avg. ticket: ₹42.50</div>
                </div>
              </div>

              {/* Right pane: Kitchen queue mock */}
              <div style={{ padding: '12px', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '6px', marginBottom: '8px' }}>Kitchen Tickets</div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: 600 }}>Table #4 • 2m ago</span>
                    <span style={{ color: '#f97316', fontWeight: 600 }}>Prepped</span>
                  </div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--color-secondary)', margin: '0 0 6px 0', borderBottom: '1px dashed var(--color-border)', paddingBottom: '4px' }}>1x Truffle Pizza, 2x Matcha Latte</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: 600 }}>Table #9 • 5m ago</span>
                    <span style={{ color: '#22c55e', fontWeight: 600 }}>Served</span>
                  </div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--color-secondary)', margin: '0' }}>1x Salmon Toast, 1x Tiramisu</p>
                </div>
              </div>

            </div>

            {/* Bottom Alert bar */}
            <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '8px', display: 'flex', justifyItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', color: '#166534', fontWeight: 500 }}>✓ Inventory AI: Auto-ordered 10lbs Salmon based on Sunday forecast.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Products;
