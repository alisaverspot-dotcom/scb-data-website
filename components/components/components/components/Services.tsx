import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '📊',
      title: 'Market Research',
      description: 'Deep dive into your market landscape, customer needs, and competitive positioning to identify growth opportunities.',
      features: ['Customer segmentation', 'Competitive analysis', 'Market sizing']
    },
    {
      icon: '👥',
      title: 'Consumer Insights',
      description: 'Understand your customers\' behaviors, motivations, and pain points through qualitative and quantitative research.',
      features: ['User interviews', 'Surveys & questionnaires', 'Behavioral analysis']
    },
    {
      icon: '🚀',
      title: 'Growth Strategy',
      description: 'Turn insights into actionable strategies for product development, marketing, and business expansion.',
      features: ['Go-to-market strategy', 'Pricing optimization', 'Product roadmap']
    }
  ];

  return (
    <section id="services" className="py-20 bg-soft-ivory">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
            How We Help You Grow
          </h2>
          <p className="text-xl text-charcoal-gray-light max-w-3xl mx-auto">
            Comprehensive research services designed specifically for small consumer brands
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">
                {service.title}
              </h3>
              <p className="text-charcoal-gray-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-charcoal-gray">
                    <svg className="w-5 h-5 text-sage-green mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
