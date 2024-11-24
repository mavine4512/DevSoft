import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logo}>
        <h3>DevSoft</h3>
        <p>Empowering your business with technology.</p>
      </div>

      <div className={styles.links}>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </div>

      <div className={styles.socials}>
        <h4>Follow Us</h4>
        <div className={styles.icons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>

    <div className={styles.bottomBar}>
      <p>&copy; {new Date().getFullYear()} DevSoft. All rights reserved.</p>
      <p>Developed By <a href="https://www.linkedin.com/in/mavine-naaman/" target="_blank" rel="noopener noreferrer">Mavine Naaman</a> </p>
    </div>
  </footer>
);

export default Footer;
