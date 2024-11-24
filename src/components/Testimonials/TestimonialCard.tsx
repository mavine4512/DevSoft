import React from "react";
import styles from "./Testimonials.module.css";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  role,
  image,
  testimonial,
}) => (
  <div className={styles.card}>
    <img
      src={image}
      alt={name}
      className={styles.image}
    />
    <h3 className={styles.name}>{name}</h3>
    <h4 className={styles.role}>{role}</h4>
    <p className={styles.testimonial}>{testimonial}</p>
  </div>
);

export default TestimonialCard;
