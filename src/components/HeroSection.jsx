import React from "react";
import "../styles.css";

const HeroSection = () => {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to MyApp</h1>
        <p>Your one-stop solution for all services</p>
        <button className="cta-button" onClick={handleScrollToServices}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
