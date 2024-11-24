import React from 'react';
import styles from './Services.module.css';

type ServiceCardProps = {
  title: string;
  icon: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description }) => (
  <div className={styles.card}>
    <div className={styles.icon}>{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServiceCard;
