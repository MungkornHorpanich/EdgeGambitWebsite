import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import JoinAndCreate from "../components/JoinAndCreate";
import WhyChoose from "../components/WhyChoose";
import GetEarlyAccess from "../components/GetEarlyAccess";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <JoinAndCreate />
      <WhyChoose />
      <GetEarlyAccess />
      <Footer />
    </div>
  );
};

export default LandingPage;
