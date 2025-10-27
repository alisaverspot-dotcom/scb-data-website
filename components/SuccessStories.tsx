import React from 'react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      company: 'EcoPure',
      industry: 'Sustainable Home',
      challenge: 'Low conversion rates despite high website traffic',
      solution: 'Customer journey analysis and A/B testing',
      result: '45% increase in conversion rate',
      metrics: ['45%', 'Conversion Rate Increase', '3 months']
    },
    {
      company: 'Bloom & Root',
      industry: 'Beauty',
      challenge: 'Unclear target audience and messaging',
      solution: 'Customer segmentation and positioning research',
      result: '2x customer acquisition efficiency',
      metrics: ['2x', 'Acquisition Efficiency', '6 months']
    },
    {
      company: 'Artisan Bites',
      industry: 'Food & Beverage',
      challenge: 'Stagnant growth in existing markets',
      solution: 'Market expansion research and strategy',
      result: 'New market entry with 30% market share',
      metrics: ['30%', 'New Market Share', '1 year']
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-charcoal-gray-light max-w-3xl mx-auto">
            Real results for real brands. See how data-driven insights transformed their businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.company}
              className="bg-soft-ivory rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-midnight-blue">{story.company}</h3>
                  <span className="bg-sage-green/20 text-sage-green px-3 py-1 rounded-full text-sm font-medium">
                    {story.industry}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-charcoal-gray mb-1">Challenge</h4>
                    <p className="text-charcoal-gray-light text-sm">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal-gray mb-1">Our Solution</h4>
                    <p className="text-charcoal-gray-light text-sm">{story.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-charcoal-gray mb-1">Result</h4>
                    <p className="text-warm-coral font-semibold">{story.result}</p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="border-t border-sage-green/30 pt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {story.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex}>
                      <div className="text-lg font-bold text-midnight-blue">{metric}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-charcoal-gray-light mb-6">
            Ready to write your success story?
          </p>
          <a
            href="#contact"
            className="bg-warm-coral hover:bg-warm-coral-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-soft inline-block"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
