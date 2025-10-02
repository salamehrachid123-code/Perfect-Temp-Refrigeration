'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Make header transparent when scrolling down from hero section
      const heroSection = document.querySelector('.hero-bg');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const triggerPoint = heroHeight * 0.5; // Start transition at 50% of hero height
        setIsScrolled(window.scrollY > triggerPoint);
      } else {
        // Fallback: trigger after 400px scroll
        setIsScrolled(window.scrollY > 400);
      }
    };

    // Initial check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-4">
        <div className={`rounded-xl transition-all duration-500 ${
          isScrolled
            ? 'bg-surface/90 backdrop-blur-md border border-border'
            : 'bg-surface/80 backdrop-blur-sm border border-border'
        }`}>
          <div className="flex items-center justify-between h-16 lg:h-18 px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="./perfect-temp-logo-transparent.png"
                alt="Perfect Temp - Refrigeration, Heating & Air Conditioning"
                width={280}
                height={120}
                className="h-16 lg:h-20 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-text-secondary hover:text-brand-blue font-medium transition-colors duration-200 hover:scale-105"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:7806555017"
              className="btn-primary text-sm px-4 py-2"
              aria-label="Call Perfect Temp at (780) 655-5017"
            >
              Call (780) 655-5017
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-secondary text-sm px-4 py-2"
            >
              Request Service
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-surface-light focus-ring focus-ring-blue text-text-primary"
            aria-label="Toggle mobile menu"
          >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface border-t border-border shadow-lg rounded-b-xl mt-2">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-text-secondary hover:text-brand-blue font-medium py-2 transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:7806555017"
                  className="btn-primary w-full justify-center text-sm"
                  aria-label="Call Perfect Temp at (780) 655-5017"
                >
                  Call (780) 655-5017
                </a>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-secondary w-full justify-center text-sm"
                >
                  Request Service
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
