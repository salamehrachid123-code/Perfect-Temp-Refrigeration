'use client';

import { useState, useEffect } from 'react';

const StickyCta = () => {
  const [showFloating, setShowFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloating(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Sticky Bottom Bar */}
      <div className="mobile-cta-bar">
        <div className="section-container py-3">
          <div className="flex gap-3">
            <a
              href="tel:7806555017"
              className="flex-1 btn-primary text-center justify-center"
              aria-label="Call Perfect Temp at (780) 655-5017"
            >
              📞 Call
            </a>
            <button
              onClick={scrollToContact}
              className="flex-1 btn-secondary justify-center"
            >
              💬 Message
            </button>
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      {showFloating && (
        <button
          onClick={() => window.location.href = 'tel:7806555017'}
          className="floating-call"
          aria-label="Call Perfect Temp at (780) 655-5017"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </button>
      )}
    </>
  );
};

export default StickyCta;
