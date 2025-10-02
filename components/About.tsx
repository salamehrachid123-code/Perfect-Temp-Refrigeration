'use client';

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-surface">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Why Edmonton Homeowners Choose Perfect Temp
            </h2>
          </div>

          <div className="space-y-12">
            {/* Main content row */}
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="card-dark p-8">
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Perfect Temp is a family-owned business with decades of combined experience 
                    in refrigeration and HVAC systems. We understand that when your appliances 
                    break down, you need reliable, fast service you can trust.
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    Our team of licensed technicians specializes in everything from refrigerator 
                    repairs to furnace maintenance, serving Edmonton and surrounding areas with 
                    the expertise and care that only comes from local ownership.
                  </p>
                </div>
              </div>

              <div className="bg-brand-blue rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-sm opacity-90 mb-4">
                  All our technicians are fully licensed and insured for your peace of mind.
                </p>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span>✓</span>
                  <span>Licensed Technicians</span>
                </div>
                <div className="flex items-center gap-2 text-sm mb-2">
                  <span>✓</span>
                  <span>Fully Insured</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>✓</span>
                  <span>Background Checked</span>
                </div>
              </div>
            </div>

            {/* Benefits row */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    We fix it right the first time—no endless callbacks.
                  </h3>
                  <p className="text-text-secondary">
                    Our experienced technicians diagnose issues accurately and provide lasting solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Clear pricing and options before work starts.
                  </h3>
                  <p className="text-text-secondary">
                    No hidden fees or surprises. We provide transparent estimates upfront.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">
                    Technicians who show up on time and respect your home.
                  </h3>
                  <p className="text-text-secondary">
                    Professional, courteous service with attention to cleanliness and your schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise row */}
            <div className="card-dark p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">
                Our Expertise
              </h3>
              <div className="grid md:grid-cols-5 gap-6">
                <div className="flex flex-col items-center text-center">
                  <span className="text-brand-blue text-2xl mb-2">🔧</span>
                  <span className="text-text-secondary text-sm">Appliance Diagnostics & Repair</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-brand-blue text-2xl mb-2">❄️</span>
                  <span className="text-text-secondary text-sm">Refrigeration Systems</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-brand-blue text-2xl mb-2">🔥</span>
                  <span className="text-text-secondary text-sm">Heating & Furnace Service</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-brand-blue text-2xl mb-2">❄️</span>
                  <span className="text-text-secondary text-sm">Air Conditioning & Cooling</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-brand-blue text-2xl mb-2">🧊</span>
                  <span className="text-text-secondary text-sm">Ice Maker & Freezer Repair</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
