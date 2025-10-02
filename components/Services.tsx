'use client';

const Services = () => {
  const services = [
    {
      icon: '🔧',
      title: 'Appliance Repair',
      description: 'Comprehensive repair services for all major home appliances.',
      details: 'We fix dishwashers, washing machines, dryers, ovens, and more. Same-day service available with genuine parts and expert technicians.',
      features: ['Same-day service', 'Genuine parts', 'Warranty included']
    },
    {
      icon: '❄️',
      title: 'Refrigerator Repair',
      description: 'Keep your food fresh with professional refrigerator maintenance.',
      details: 'From temperature issues to compressor problems, we diagnose and fix all refrigerator issues quickly and efficiently.',
      features: ['Temperature calibration', 'Compressor repair', 'Seal replacement']
    },
    {
      icon: '🧊',
      title: 'Freezer Repair',
      description: 'Restore deep-freeze performance and prevent food spoilage.',
      details: 'Freezer not cooling properly? We fix defrost systems, temperature controls, and all freezer components.',
      features: ['Defrost system repair', 'Temperature control', 'Seal maintenance']
    },
    {
      icon: '🧊',
      title: 'Ice Maker Repair',
      description: 'Get crystal-clear ice flowing again with expert repairs.',
      details: 'Ice maker not working? We fix water line issues, ice production problems, and all ice maker components.',
      features: ['Water line repair', 'Ice production fix', 'Filter replacement']
    },
    {
      icon: '🔥',
      title: 'Heating & Furnace',
      description: 'Efficient, safe heating solutions for your home.',
      details: 'Furnace not heating? We provide repairs, maintenance, and installations for all heating systems.',
      features: ['Furnace repair', 'Heat pump service', 'Thermostat installation']
    },
    {
      icon: '❄️',
      title: 'Air Conditioning',
      description: 'Stay cool with dependable AC service and maintenance.',
      details: 'AC not cooling? We repair all air conditioning systems and provide regular maintenance to keep you comfortable.',
      features: ['AC repair', 'Maintenance plans', 'Duct cleaning']
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-bg">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Professional refrigeration, heating, cooling, and appliance repair services 
            for Edmonton homeowners and businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-dark card-hover p-8 group">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">{service.icon}</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary mb-4 text-lg">
                {service.description}
              </p>
              <p className="text-text-muted mb-6">
                {service.details}
              </p>
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-text-muted">
                    <span className="text-brand-blue mr-2">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={scrollToContact}
                className="btn-outline w-full text-sm"
              >
                Get Service Quote
              </button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="card-dark p-8 text-center border-brand-blue/20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-3xl">📞</span>
            <h3 className="text-2xl font-bold text-text-primary">
              Not sure what you need?
            </h3>
          </div>
          <p className="text-lg text-text-secondary mb-6">
            Call our experts at{' '}
            <a 
              href="tel:7806555017" 
              className="font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors duration-200"
            >
              (780) 655-5017
            </a>
          </p>
          <p className="text-text-muted mb-6">
            We'll help diagnose the issue and provide a solution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:7806555017"
              className="btn-primary"
              aria-label="Call Perfect Temp at (780) 655-5017"
            >
              Call Now
            </a>
            <button
              onClick={scrollToContact}
              className="btn-secondary"
            >
              Request Service
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
