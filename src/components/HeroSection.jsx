import React from "react";
import "../styles.css";

const HeroSection = ({ scrollToServices }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Our Service</h1>
        <p>Your gateway to innovative solutions</p>
        <button className="cta-button" onClick={scrollToServices}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
