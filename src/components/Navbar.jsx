import React, { useState, useEffect } from "react";
import "../styles.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTo = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo" onClick={(e) => handleScrollTo(e, "home")}>MyApp</div>
      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => handleScrollTo(e, "home")}>Home</a></li>
        <li><a href="#services" onClick={(e) => handleScrollTo(e, "services")}>Services</a></li>
        <li><a href="#pricing" onClick={(e) => handleScrollTo(e, "pricing")}>Pricing</a></li>
        <li><a href="#user-search" onClick={(e) => handleScrollTo(e, "user-search")}>Search</a></li>
        <li><a href="#contact" onClick={(e) => handleScrollTo(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
