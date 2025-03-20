import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import ContactForm from "../components/ContactForm";
import UserSearch from "../components/UserSearch";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="services"><Services /></section>
      <section id="pricing"><PricingTable /></section>
      <section id="user-search"><UserSearch /></section>
      <section id="contact"><ContactForm /></section>
    </div>
  );
};

export default Home;
