const BadgeStrip = () => {
  const badges = [
    {
      icon: '⚡',
      title: 'Same-Day Availability',
      description: 'Quick response when you need it most'
    },
    {
      icon: '💰',
      title: 'Upfront, Fair Pricing',
      description: 'No surprises, clear costs before we start'
    },
    {
      icon: '🔧',
      title: 'Certified Technicians',
      description: 'Licensed professionals you can trust'
    },
    {
      icon: '⭐',
      title: '5-Star Local Service',
      description: 'Rated by Edmonton homeowners'
    }
  ];

  return (
    <section className="bg-surface py-16">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-3">{badge.icon}</div>
              <h3 className="font-semibold text-text-primary mb-2">{badge.title}</h3>
              <p className="text-sm text-text-secondary">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BadgeStrip;
