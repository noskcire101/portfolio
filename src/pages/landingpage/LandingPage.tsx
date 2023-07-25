import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Testimonials from "../../components/testimonials/Testimonials";
import Education from "../../components/education/Education";
const LandingPage = () => {
  return (
    <>
      <Header />

      <About />

      <Testimonials />
      <Education />
    </>
  );
};

export default LandingPage;
