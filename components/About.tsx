import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-midnight-blue mb-6">
              Why Small Brands Choose Us
            </h2>
            <p className="text-lg text-charcoal-gray-light mb-6 leading-relaxed">
              At SCB Data, we understand the unique challenges faced by small consumer brands. 
              You're competing with established players while building your brand from the ground up.
            </p>
            <p className="text-lg text-charcoal-gray-light mb-8 leading-relaxed">
              We bridge the gap between enterprise-level insights and startup budgets, delivering 
              research that's both affordable and actionable.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-sage-green/20 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-sage-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-1">Industry Expertise</h4>
                  <p className="text-charcoal-gray-light">Deep understanding of consumer brands across categories</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sage-green/20 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-sage-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-1">Actionable Insights</h4>
                  <p className="text-charcoal-gray-light">Clear recommendations you can implement immediately</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-sage-green/20 rounded-full p-2 mr-4">
                  <svg className="w-5 h-5 text-sage-green" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal-gray mb-1">Startup-Friendly Pricing</h4>
                  <p className="text-charcoal-gray-light">Packages designed for growing brands</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-warm-beige to-sage-green/20 rounded-2xl p-8 h-full">
            <div className="bg-white rounded-xl p-6 shadow-soft">
              <h3 className="text-2xl font-bold text-midnight-blue mb-4">Our Approach</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-midnight-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray mb-1">Discovery & Planning</h4>
                    <p className="text-charcoal-gray-light text-sm">We start by understanding your unique challenges and objectives</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-midnight-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray mb-1">Research & Analysis</h4>
                    <p className="text-charcoal-gray-light text-sm">Comprehensive data collection and deep analysis</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-midnight-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray mb-1">Insight Delivery</h4>
                    <p className="text-charcoal-gray-light text-sm">Clear, actionable recommendations and strategic guidance</p>
                  </div>
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
