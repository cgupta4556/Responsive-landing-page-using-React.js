import React, { useRef } from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import ContactForm from "../components/ContactForm";
import UserSearch from "../components/UserSearch";

const Home = () => {
  const servicesRef = useRef(null);

  return (
    <div>
      <HeroSection scrollToServices={() => servicesRef.current.scrollIntoView({ behavior: "smooth" })} />
      <Services refProp={servicesRef} />
      <PricingTable />
      <UserSearch />
      <ContactForm />
    </div>
  );
};

export default Home;
