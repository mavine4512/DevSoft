import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => (
  <section id="about" className={styles.hero}>
    <div className={styles.content}>
      <h1>Empowering Your Business with Technology Solutions</h1>
      <p>Tailored services in development, training, consulting, and hardware.</p>
      <div className={styles.actions}>
        <button className={styles.cta}>Get Started</button>
        <button className={styles.secondary}>Learn More</button>
      </div>
    </div>
  </section>
);

export default Hero;
