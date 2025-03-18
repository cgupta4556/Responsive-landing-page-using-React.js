import React from "react";
import "../styles.css";

const Services = ({ refProp }) => {
  const services = [
    { title: "Web Development", desc: "Modern and scalable websites." },
    { title: "App Development", desc: "Cross-platform mobile apps." },
    { title: "UI/UX Design", desc: "Intuitive and beautiful designs." },
  ];

  return (
    <section ref={refProp} className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
