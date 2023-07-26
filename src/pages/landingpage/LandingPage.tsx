import React from "react";
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Testimonials from "../../components/testimonials/Testimonials";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import Socials from "../../components/socials/Socials";
const LandingPage = () => {
  return (
    <>
      <Header />

      <About />

      <Testimonials />
      <Education />
      <Projects />
      <Socials />
    </>
  );
};

export default LandingPage;
