import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-warm-beige to-soft-ivory py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-midnight-blue mb-6 animate-fade-in-up">
            Insight You Can{' '}
            <span className="text-warm-coral relative">
              Trust
              <svg 
                className="absolute -bottom-2 left-0 w-full h-2 text-sage-green" 
                viewBox="0 0 100 10"
              >
                <path
                  d="M0,5 Q25,0 50,5 T100,5"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="animate-draw-line"
                  strokeDasharray="1000"
                  strokeDashoffset="1000"
                />
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-charcoal-gray-light mb-8 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Helping small consumer brands make confident, data-driven decisions through research that turns insight into action.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <a
              href="#contact"
              className="bg-warm-coral hover:bg-warm-coral-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-soft hover:shadow-soft-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="border-2 border-midnight-blue text-midnight-blue hover:bg-midnight-blue hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-midnight-blue mb-2">50+</div>
              <div className="text-charcoal-gray-light">Brands Transformed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-midnight-blue mb-2">95%</div>
              <div className="text-charcoal-gray-light">Client Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-midnight-blue mb-2">2x</div>
              <div className="text-charcoal-gray-light">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
