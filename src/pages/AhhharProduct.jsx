import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MENU_ITEMS = [
  { id: 1, name: 'Truffle Mushroom Pizza', category: 'Mains', price: 18.50, rating: '⭐ 4.9' },
  { id: 2, name: 'Smoked Salmon Avocado Toast', category: 'Breakfast', price: 14.20, rating: '⭐ 4.8' },
  { id: 3, name: 'Matcha Rose Latte', category: 'Beverages', price: 6.50, rating: '⭐ 4.7' },
  { id: 4, name: 'Crispy Brussels Sprouts', category: 'Sides', price: 9.00, rating: '⭐ 4.6' },
  { id: 5, name: 'Classic Tiramisu', category: 'Desserts', price: 8.50, rating: '⭐ 4.9' },
];

const AhhharProduct = () => {
  const [cart, setCart] = useState([]);
  const [demoState, setDemoState] = useState('idle'); // idle | ordering | billing | complete
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const addToCart = (item) => {
    const existing = cart.find(c => c.id === item.id);
    if (existing) {
      setCart(cart.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    if (demoState === 'idle') setDemoState('ordering');
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(c => c.id !== id));
    if (cart.length <= 1) setDemoState('idle');
  };

  const clearCart = () => {
    setCart([]);
    setDemoState('idle');
  };

  const checkoutOrder = () => {
    setDemoState('billing');
    setTimeout(() => {
      setDemoState('complete');
    }, 2000);
  };

  const total = cart.reduce((acc, c) => acc + c.price * c.quantity, 0);

  return (
    <main style={{ padding: 'var(--space-4xl) 0', background: 'var(--color-bg)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        
        {/* Back Link */}
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <Link to="/" className="btn btn--secondary magnetic-btn" style={{ fontSize: '0.875rem', padding: '0.5rem 1.25rem', borderRadius: 'var(--radius-sm)' }}>
            &larr; Back to ThinkDifferent
          </Link>
        </div>

        {/* Product Hero */}
        <div className="reveal visible" style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <div className="hero__badge" style={{ background: 'rgba(0,0,0,0.03)', color: 'var(--color-primary)', border: '1px solid var(--color-border)' }}>
            <span className="hero__badge-dot" style={{ background: '#f97316' }}></span>
            AI-Powered Restaurant Management
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
            AHHAR<span style={{ color: '#f97316' }}>.AI</span>
          </h1>
          <p style={{ color: 'var(--color-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto var(--space-xl)', lineHeight: 1.6 }}>
            A comprehensive restaurant operating system. Simplify QR ordering, smart billing, inventory tracking, customer relationships, and analytics through integrated intelligence.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="#demo" className="btn btn--primary magnetic-btn" style={{ borderRadius: 'var(--radius-full)', background: 'var(--color-primary)' }}>
              Try Live POS Demo
            </a>
            <a href="#features" className="btn btn--secondary magnetic-btn" style={{ borderRadius: 'var(--radius-full)' }}>
              Explore Features
            </a>
          </div>
        </div>

        {/* Live Interactive POS Sandbox */}
        <section id="demo" style={{ background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: 'var(--space-xl)', marginBottom: 'var(--space-3xl)', boxShadow: 'var(--shadow-lg)', backdropFilter: 'blur(20px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-primary)' }}>Live Interactive POS Sandbox</h2>
            <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>Experience our QR Ordering and Smart Billing engine firsthand. Add items, simulate placing a QR code order, and generate an instant AI billing analysis.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)' }} className="grid-stack-mobile">
            {/* Menu side */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: 'var(--space-md)', color: 'var(--color-primary)' }}>Digital QR Menu</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {MENU_ITEMS.map((item) => (
                  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'rgba(255,255,255,0.4)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', transition: 'all 0.2s' }}>
                    <div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{item.name}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-muted)' }}>{item.rating}</span>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--color-muted)', background: 'rgba(0,0,0,0.04)', padding: '2px 8px', borderRadius: '12px' }}>{item.category}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontWeight: 700, fontSize: '1rem' }}>₹{item.price.toFixed(2)}</span>
                      <button onClick={() => addToCart(item)} className="btn btn--primary" style={{ padding: '6px 12px', fontSize: '0.8rem', borderRadius: '6px' }}>
                        + Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Smart Bill / Checkout side */}
            <div style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: 'var(--space-xl)', display: 'flex', flexDirection: 'column' }} className="pos-checkout-panel">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', marginBottom: 'var(--space-md)', color: 'var(--color-primary)', display: 'flex', justifyContent: 'space-between' }}>
                <span>Smart Receipt</span>
                <span style={{ fontSize: '0.8rem', color: '#f97316', textTransform: 'uppercase', letterSpacing: '1px' }}>Table #12</span>
              </h3>

              {cart.length === 0 ? (
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 0', color: 'var(--color-muted)' }}>
                  <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <p style={{ marginTop: '12px', fontSize: '0.9rem' }}>Scan and add items to begin ordering demo</p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                  <div style={{ maxHeight: '220px', overflowY: 'auto', marginBottom: '16px' }}>
                    {cart.map((c) => (
                      <div key={c.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px dashed var(--color-border)' }}>
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{c.name}</div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)' }}>₹{c.price.toFixed(2)} x {c.quantity}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>₹{(c.price * c.quantity).toFixed(2)}</span>
                          <button onClick={() => removeFromCart(c.id)} style={{ background: 'none', border: 'none', color: '#ef4444', fontSize: '0.8rem', cursor: 'pointer' }}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary info */}
                  <div style={{ padding: '16px 0', borderTop: '2px solid var(--color-primary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.95rem' }}>
                      <span>Subtotal</span>
                      <span>₹{total.toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.95rem' }}>
                      <span>Tax (8%)</span>
                      <span>₹{(total * 0.08).toFixed(2)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '1.1rem', fontWeight: 700 }}>
                      <span>Estimated Total</span>
                      <span>₹{(total * 1.08).toFixed(2)}</span>
                    </div>

                    {demoState === 'ordering' && (
                      <button onClick={checkoutOrder} className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', borderRadius: '8px' }}>
                        Simulate QR Order Placement & Pay
                      </button>
                    )}

                    {demoState === 'billing' && (
                      <div style={{ textAlign: 'center', padding: '12px', background: 'rgba(0,0,0,0.03)', borderRadius: '8px', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        <div className="spinner" style={{ width: '16px', height: '16px', border: '2px solid var(--color-primary)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
                        <span style={{ fontSize: '0.85rem' }}>Processing SmartPOS Bill & AI Sync...</span>
                      </div>
                    )}

                    {demoState === 'complete' && (
                      <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
                        <div style={{ padding: '12px', background: 'rgba(34,197,94,0.1)', color: '#166534', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', textAlign: 'center', marginBottom: '12px', fontSize: '0.85rem' }}>
                          <strong>Order Paid!</strong> QR transaction completed. POS stock counts updated automatically.
                        </div>
                        <div style={{ padding: '12px', background: 'rgba(249,115,22,0.1)', color: '#9a3412', border: '1px solid rgba(249,115,22,0.2)', borderRadius: '8px', fontSize: '0.8rem' }}>
                          <strong>AI Suggestion:</strong> Customer ordered Truffle Mushroom Pizza. Recommend suggesting the Tiramisu dessert coupon automatically on next login.
                        </div>
                        <button onClick={clearCart} className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center', marginTop: '12px', borderRadius: '8px', fontSize: '0.85rem' }}>
                          Reset Simulator
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section id="features" style={{ marginBottom: 'var(--space-3xl)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <p className="section__label">System Components</p>
            <h2 className="section__heading" style={{ fontSize: '2rem' }}>Engineered for Scaling Restaurants</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-md)' }} className="grid-stack-tablet">
            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>📱</div>
              <h4 style={{ fontFamily: 'var(--font-body-alt)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>QR Ordering</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Frictionless browser-based tableside ordering. Customers scan, browse, customize, and order instantly without app downloads.</p>
            </div>
            
            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>⚡</div>
              <h4 style={{ fontFamily: 'var(--font-body-alt)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>Smart Billing & POS</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Robust billing software with smart splitting options, quick payment integrations, and offline syncing safety.</p>
            </div>

            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>📦</div>
              <h4 style={{ fontFamily: 'var(--font-body-alt)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>Inventory Management</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Real-time depletion alerts. Predictive stock ordering suggests shopping lists based on historic menu demand trends.</p>
            </div>

            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>📈</div>
              <h4 style={{ fontFamily: 'var(--font-body-alt)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>Business Analytics</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Deep insights on kitchen speed, table turns, food waste, peak hours, and high-margin dishes.</p>
            </div>

            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>👥</div>
              <h4 style={{ fontFamily: 'var(--font-body-alt)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>Customer CRM</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Keep customers coming back with automated birthday coupons, loyalty level point tracking, and targeted campaigns.</p>
            </div>

            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-xs)' }}>🤖</div>
              <h4 style={{ fontFamily: 'var(--font-body-alt)', fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--space-xs)' }}>AI Agent Optimization</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Automated menu pricing suggestions, ingredient volume prediction, and tableside voice order capturing support.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section style={{ textAlign: 'center', background: 'var(--color-primary)', color: 'var(--color-bg)', padding: 'var(--space-2xl) var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-xl)' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 600, color: 'var(--color-bg)', marginBottom: 'var(--space-xs)' }}>Empower Your Kitchen with Intelligence</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto var(--space-lg)', lineHeight: 1.6 }}>
            Ready to upgrade your restaurant POS system with next-generation QR ordering and inventory forecasting?
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link to="/" className="btn btn--secondary magnetic-btn" style={{ background: '#fff', color: '#000', border: 'none', borderRadius: 'var(--radius-full)' }}>
              Consult ThinkDifferent
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
};

export default AhhharProduct;
