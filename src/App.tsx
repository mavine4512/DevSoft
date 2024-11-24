import React from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import ContactForm from './components/ContactForm/ContactForm';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
