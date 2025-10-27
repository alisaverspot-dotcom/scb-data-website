import React from 'react';

const CallToActionBlock: React.FC = () => {
  return (
    <section className="py-16 bg-midnight-blue text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make Data-Driven Decisions?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Stop guessing and start knowing. Let's uncover the insights that will transform your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-warm-coral hover:bg-warm-coral-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-soft transform hover:-translate-y-1 transition-all duration-300"
          >
            Book a Free Consultation
          </a>
          <a
            href="#success-stories"
            className="border-2 border-white text-white hover:bg-white hover:text-midnight-blue px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
          >
            See Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBlock;
