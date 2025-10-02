const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah M.',
      location: 'Edmonton',
      rating: 5,
      text: 'Perfect Temp fixed our refrigerator in no time! The technician was professional, explained everything clearly, and the pricing was fair. Highly recommend!',
      service: 'Refrigerator Repair'
    },
    {
      name: 'Mike R.',
      location: 'Edmonton',
      rating: 5,
      text: 'Our furnace was acting up during the cold snap. They came out same day and had it running perfectly. Great service and reasonable rates.',
      service: 'Furnace Repair'
    },
    {
      name: 'Jennifer L.',
      location: 'Edmonton',
      rating: 5,
      text: 'Fast, reliable, and honest. They diagnosed the issue quickly and gave us options. No pressure, just good service. Will definitely call again.',
      service: 'Appliance Repair'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-dark-surface">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-text-secondary">
            Real reviews from Edmonton homeowners who trust Perfect Temp
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="card-dark p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-lg">
                  {renderStars(review.rating)}
                </div>
                <span className="ml-2 text-sm text-text-muted">
                  {review.rating}.0
                </span>
              </div>
              
              <p className="text-text-secondary mb-6 italic">
                "{review.text}"
              </p>
              
              <div className="border-t border-dark-surface-light pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-text-primary">{review.name}</p>
                    <p className="text-sm text-text-muted">{review.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-brand-blue font-medium">
                      {review.service}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Ready to experience our 5-star service?
          </p>
          <a
            href="tel:7806555017"
            className="btn-primary"
            aria-label="Call Perfect Temp at (780) 655-5017"
          >
            Call (780) 655-5017
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
