'use client';

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    dateTime: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Mock API call
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          service: '',
          dateTime: '',
          message: '',
          consent: false
        });

        // Fire GTM event
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'formSubmit',
            formName: 'contact',
            formData: formData
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-bg">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card-dark p-8 border-brand-blue/20">
              <div className="text-4xl mb-4">✅</div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Thank You for Your Request!
              </h2>
              <p className="text-text-secondary mb-6">
                We've received your service request and will contact you within 24 hours 
                to schedule your appointment.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:7806555017"
                  className="btn-primary"
                  aria-label="Call Perfect Temp at (780) 655-5017"
                >
                  Call (780) 655-5017
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-outline ml-3"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-bg">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Need Service? Send Us a Message.
            </h2>
            <p className="text-xl text-text-secondary">
              Get a free quote for your refrigeration, heating, cooling, or appliance repair needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-brand-blue text-xl">📞</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Phone</h4>
                    <a 
                      href="tel:7806555017" 
                      className="text-brand-blue hover:text-brand-blue-dark transition-colors duration-200"
                    >
                      (780) 655-5017
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-blue text-xl">🕒</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Hours</h4>
                    <p className="text-text-secondary">
                      Mon–Fri: 7:00 AM – 5:00 PM<br />
                      Sat & Sun: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-brand-blue text-xl">📍</div>
                  <div>
                    <h4 className="font-semibold text-text-primary">Service Area</h4>
                    <p className="text-text-secondary">
                      Edmonton and surrounding areas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-brand-blue rounded-xl p-8 text-white">
                <h4 className="font-semibold mb-4">Why Choose Perfect Temp?</h4>
                <ul className="text-sm space-y-2 opacity-90">
                  <li>• Same-day service available</li>
                  <li>• Licensed & insured technicians</li>
                  <li>• Upfront, fair pricing</li>
                  <li>• 5-star local service</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
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
                      placeholder="Your full name"
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
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary placeholder-text-muted"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-text-secondary mb-2">
                    Address/Neighborhood
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary placeholder-text-muted"
                    placeholder="Your address or neighborhood"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-text-secondary mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary"
                  >
                    <option value="">Select a service</option>
                    <option value="appliance">Appliance Repair</option>
                    <option value="refrigerator">Refrigerator Repair</option>
                    <option value="freezer">Freezer Repair</option>
                    <option value="ice-maker">Ice Maker Repair</option>
                    <option value="heating">Heating/Furnace</option>
                    <option value="cooling">Cooling/AC</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dateTime" className="block text-sm font-medium text-text-secondary mb-2">
                    Preferred Date/Time
                  </label>
                  <input
                    type="text"
                    id="dateTime"
                    name="dateTime"
                    value={formData.dateTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary placeholder-text-muted"
                    placeholder="e.g., Tomorrow morning, Friday afternoon"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue text-text-primary placeholder-text-muted"
                    placeholder="Describe your issue or any specific requirements..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1 h-4 w-4 text-brand-blue focus:ring-brand-blue border-border rounded bg-surface"
                  />
                  <label htmlFor="consent" className="text-sm text-text-secondary">
                    You agree to be contacted about your request. *
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Get a Free Quote'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
