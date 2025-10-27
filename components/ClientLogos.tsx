import React from 'react';

const ClientLogos: React.FC = () => {
  const clients = [
    { name: 'EcoPure', industry: 'Sustainable Home' },
    { name: 'Bloom & Root', industry: 'Beauty' },
    { name: 'Artisan Bites', industry: 'Food & Beverage' },
    { name: 'Thread & Co', industry: 'Apparel' },
    { name: 'Wellness Co', industry: 'Health' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-midnight-blue mb-4">
            Trusted by Innovative Brands
          </h2>
          <p className="text-charcoal-gray-light max-w-2xl mx-auto">
            We've helped consumer brands across industries unlock growth through data-driven insights
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="flex flex-col items-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 bg-soft-ivory rounded-full flex items-center justify-center mb-3 group-hover:shadow-soft-lg transition-all duration-300">
                <span className="text-midnight-blue font-bold text-lg">{client.name.split(' ')[0].charAt(0)}</span>
              </div>
              <div className="text-center">
                <div className="font-semibold text-charcoal-gray">{client.name}</div>
                <div className="text-sm text-charcoal-gray-light">{client.industry}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
