import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>DevSoft</div>
      <button className={styles.menuButton} onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className={styles.navItem}
            onClick={toggleMenu}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            className={styles.navItem}
            onClick={toggleMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={styles.navItem}
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className={styles.navItem}
            onClick={toggleMenu}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
