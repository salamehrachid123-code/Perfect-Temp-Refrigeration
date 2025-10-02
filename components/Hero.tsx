'use client';

import { useState } from 'react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mock API call
    console.log('Quick quote submitted:', formData);
    alert('Thank you! We\'ll contact you shortly.');
    setFormData({ name: '', phone: '', issue: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-bg min-h-screen flex items-center pt-20 lg:pt-24">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
              Perfect Temp—Fast, Reliable{' '}
              <span className="text-brand-blue">Heating</span>,{' '}
              <span className="text-brand-red">Cooling</span> &{' '}
              <span className="text-brand-blue">Appliance Repair</span> in Edmonton
            </h1>
            
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Same-day diagnostics • Refrigeration & HVAC • Fridge/Freezer/Ice-maker repair. 
              Licensed & insured.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="tel:7806555017"
                className="btn-primary text-lg px-8 py-4"
                aria-label="Call Perfect Temp at (780) 655-5017"
              >
                Call (780) 655-5017
              </a>
              <button
                onClick={scrollToContact}
                className="btn-secondary text-lg px-8 py-4"
              >
                Request Service
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <span className="text-brand-blue">✓</span>
                <span>Verified by Business</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-blue">✓</span>
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-blue">✓</span>
                <span>Serving Edmonton Area</span>
              </div>
            </div>

            <p className="text-sm text-text-muted mt-4">
              Open Mon–Fri 7:00 AM–5:00 PM • Emergency after-hours by appointment
            </p>
          </div>

          {/* Right side - Quick quote card */}
          <div className="hidden lg:block">
            <div className="card-dark p-8 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
                Get a Quick Quote
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary placeholder-text-muted"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary placeholder-text-muted"
                    placeholder="(780) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-text-secondary mb-2">
                    Issue *
                  </label>
                  <select
                    id="issue"
                    name="issue"
                    value={formData.issue}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary"
                  >
                    <option value="">Select an issue</option>
                    <option value="appliance">Appliance Repair</option>
                    <option value="refrigerator">Refrigerator Repair</option>
                    <option value="freezer">Freezer Repair</option>
                    <option value="ice-maker">Ice Maker Repair</option>
                    <option value="heating">Heating & Furnace</option>
                    <option value="cooling">Air Conditioning</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary py-3"
                >
                  Request Service
                </button>
              </form>

              {/* Trust mini-badges */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap justify-center gap-4 text-xs text-text-muted">
                  <span>✓ Verified by Business</span>
                  <span>✓ Licensed & Insured</span>
                  <span>✓ Serving Edmonton Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
