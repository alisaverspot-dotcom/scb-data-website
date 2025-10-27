import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-midnight-blue to-charcoal-gray text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Start Your Project
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Ready to unlock insights that will transform your business? 
              Schedule a free consultation to discuss your goals and how we can help.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-warm-coral/20 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-warm-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Schedule a Call</h3>
                  <p className="text-blue-100">30-minute free consultation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-warm-coral/20 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-warm-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                  <p className="text-blue-100">hello@scbdata.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-warm-coral/20 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-warm-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Response Time</h3>
                  <p className="text-blue-100">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-soft-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-charcoal-gray font-medium mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-coral focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-charcoal-gray font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-coral focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-charcoal-gray font-medium mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-coral focus:border-transparent transition-all"
                  placeholder="Enter your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-charcoal-gray font-medium mb-2">
                  How Can We Help? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-coral focus:border-transparent transition-all"
                  placeholder="Tell us about your project or challenges..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-warm-coral hover:bg-warm-coral-dark text-white py-4 rounded-lg font-semibold text-lg transition-colors shadow-soft transform hover:-translate-y-1 transition-all duration-300"
              >
                Send Message
              </button>
              
              <p className="text-charcoal-gray-light text-sm text-center">
                We'll get back to you within 24 hours to schedule your free consultation.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
