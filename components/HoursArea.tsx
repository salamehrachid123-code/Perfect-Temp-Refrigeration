'use client';

import { isCurrentlyOpen, getNextOpenTime } from '@/lib/hours';

const HoursArea = () => {
  const isOpen = isCurrentlyOpen();
  const nextOpen = getNextOpenTime();

  const hours = [
    { day: 'Monday', time: '7:00 AM – 5:00 PM' },
    { day: 'Tuesday', time: '7:00 AM – 5:00 PM' },
    { day: 'Wednesday', time: '7:00 AM – 5:00 PM' },
    { day: 'Thursday', time: '7:00 AM – 5:00 PM' },
    { day: 'Friday', time: '7:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hours" className="py-20 bg-dark-bg">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div>
            <h2 className="text-4xl font-bold text-text-primary mb-8">
              Service Area & Hours
            </h2>
            
            <div className="card-dark p-8 mb-8">
              <div className="aspect-video bg-dark-surface-light rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-text-secondary font-medium">Serving Edmonton Area</p>
                  <p className="text-sm text-text-muted">Edmonton, AB T5T 5X9</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-text-secondary mb-6">
                We proudly serve Edmonton and surrounding areas with fast, reliable service.
              </p>
              <a
                href="https://maps.google.com/?q=Edmonton,AB,T5T5X9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Hours Section */}
          <div>
            <div className="card-dark p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-text-primary">Business Hours</h3>
                <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                  isOpen 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {isOpen ? 'Open now' : 'Closed'}
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {hours.map((hour, index) => (
                  <div key={index} className="flex justify-between items-center py-2">
                    <span className="font-medium text-text-primary">{hour.day}</span>
                    <span className={`${
                      hour.time === 'Closed' ? 'text-text-muted' : 'text-text-secondary'
                    }`}>
                      {hour.time}
                    </span>
                  </div>
                ))}
              </div>

              {!isOpen && (
                <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-brand-blue">
                    <strong>Next available:</strong> {nextOpen}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <a
                  href="tel:7806555017"
                  className="btn-primary w-full justify-center"
                  aria-label="Call Perfect Temp at (780) 655-5017"
                >
                  Call (780) 655-5017
                </a>
                <button
                  onClick={scrollToContact}
                  className="btn-secondary w-full justify-center"
                >
                  Request Service
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursArea;
