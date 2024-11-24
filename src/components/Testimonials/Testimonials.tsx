import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonials.module.css";
import Cto from "../../assets/cto.jpeg";
import IT from "../../assets/IT.jpeg"
import PM from "../../assets/PM.jpeg";
import software from "../../assets/software.jpeg";

export default class Testimonials extends Component {
  testimonials = [
    {
      name: "Ken Smith",
      role: "CTO",
      image:Cto,
      testimonial:
        "We would like to express our satisfaction on the cooperation regarding the development of our web application. Mavine and the development team did a very professional job. We are satisfied with the solution given to us and with the communication flow through the project.",
    },
    {
      name: "Daniel Keystone",
      role: "IT Manager",
      image:IT,
      testimonial:
        "The software has transformed the way our team works, streamlining our processes and improving productivity. The support team is also incredibly responsive, ensuring we always have help when needed.",
    },
    {
      name: "Faith Kepyegon",
      role: "Designer",
      image:PM,
      testimonial:
        "This platform has significantly improved our workflow. It’s easy to implement and keeps our operations running smoothly. We can always count on it to get the job done without any issues.",
    },
    {
      name: "Akinyi Emily",
      role: "Production Manager",
      image:software,
      testimonial:
        "The product itself is great, but what really makes this company stand out is their customer service. Anytime we have a question or issue, they are quick to respond and provide a solution.",
    },
  ];

  render() {
    return (
      <section className={styles.testimonials} id="testimonials">
        <div className={styles.header}>
          <h2>What Our Clients Say!</h2>
          <p>
            Hear from our clients about how we have helped them achieve their
            goals with our services.
          </p>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={5100}
          className={styles.carousel}
        >
          {this.testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Carousel>
      </section>
    );
  }
}
