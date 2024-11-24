import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const services = [
  { title: 'Software Development', icon: '💻', description: 'Building robust web and mobile apps.' },
  { title: 'Training', icon: '📘', description: 'Upskilling teams for modern tech.' },
  { title: 'Consulting', icon: '🛠️', description: 'Tailored solutions for your business.' },
  { title: 'Hardware Supplies', icon: '🖥️', description: 'Quality hardware for your needs.' },
];

const Services: React.FC = () => (
  <section id="services" className={styles.services}>
    <h2>Our Services</h2>
    <div className={styles.grid}>
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  </section>
);

export default Services;
