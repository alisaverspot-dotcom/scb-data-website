import React from 'react';

const WhoWeWorkWith: React.FC = () => {
  const brandTypes = [
    {
      category: 'Emerging Brands',
      description: 'Pre-launch or recently launched brands looking to validate product-market fit',
      icon: '🌱'
    },
    {
      category: 'Growing Brands',
      description: 'Established brands experiencing growth and needing to scale strategically',
      icon: '📈'
    },
    {
      category: 'Pivoting Brands',
      description: 'Brands looking to enter new markets or reposition their offering',
      icon: '🔄'
    }
  ];

  const industries = [
    'Food & Beverage',
    'Beauty & Personal Care',
    'Health & Wellness',
    'Sustainable Products',
    'Home & Lifestyle',
    'Apparel & Accessories'
  ];

  return (
    <section className="py-20 bg-soft-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
            Who We Work With
          </h2>
          <p className="text-xl text-charcoal-gray-light max-w-3xl mx-auto">
            We partner with ambitious consumer brands at every stage of their journey
          </p>
        </div>

        {/* Brand Types */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {brandTypes.map((type, index) => (
            <div
              key={type.category}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl mb-4">{type.icon}</div>
              <h3 className="text-xl font-bold text-midnight-blue mb-3">
                {type.category}
              </h3>
              <p className="text-charcoal-gray-light">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="bg-white rounded-2xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-midnight-blue text-center mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className="flex items-center justify-center p-4 bg-soft-ivory rounded-lg hover:bg-sage-green/20 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-charcoal-gray font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
