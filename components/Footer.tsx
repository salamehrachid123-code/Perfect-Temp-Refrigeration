'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-bg border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <Image
                src="./perfect-temp-logo-transparent.png"
                alt="Perfect Temp - Refrigeration, Heating & Air Conditioning"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              Fast, reliable refrigeration, heating, cooling, and appliance repair 
              services for Edmonton homeowners and businesses.
            </p>
            <div className="space-y-2">
              <a 
                href="tel:7806555017" 
                className="block text-brand-blue hover:text-brand-blue-dark transition-colors duration-200 font-medium"
              >
                (780) 655-5017
              </a>
              <p className="text-text-muted text-sm">
                Mon–Fri: 7:00 AM – 5:00 PM
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="text-text-secondary hover:text-brand-blue transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-text-secondary hover:text-brand-blue transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="text-text-secondary hover:text-brand-blue transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-semibold mb-4 text-text-primary">Service Area</h3>
            <p className="text-text-secondary mb-2">
              Edmonton and surrounding areas
            </p>
            <p className="text-text-muted text-sm">
              Licensed & Insured<br />
              Same-day service available
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2024 Perfect Temp. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="tel:7806555017"
                className="btn-primary text-sm"
                aria-label="Call Perfect Temp at (780) 655-5017"
              >
                Call (780) 655-5017
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
