import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
import About from './components/About';
import SuccessStories from './components/SuccessStories';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import ScrollToTopButton from './components/ScrollToTopButton';
import CallToActionBlock from './components/CallToActionBlock';

const SectionDivider: React.FC = () => (
    <div className="w-full max-w-6xl mx-auto px-6">
        <div className="h-px bg-sage-green/30"></div>
    </div>
);


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <SectionDivider />
        <Services />
        <CallToActionBlock />
        <About />
        <SectionDivider />
        <WhoWeWorkWith />
        <SuccessStories />
        <SectionDivider />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
