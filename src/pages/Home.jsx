import React from "react";
import Hero from "../components/layouts/Hero";
import Features from "../components/layouts/Features";
import Testimonials from "../components/layouts/Testimonials";
import Pricing from "../components/layouts/Pricing";
import FAQ from "../components/layouts/FAQ";
import CTA from "../components/layouts/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
