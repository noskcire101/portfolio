import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Skills from "../../components/skills/Skills";
import Testimonials from "../../components/testimonials/Testimonials";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import Socials from "../../components/socials/Socials";
import Logos from "../../components/logos/Logos";

const LandingPage = () => {
  return (
    <>
      <Header />

      <Skills />
      <Logos />
      <Testimonials />
      <Education />
      <Projects />
      <Socials />
    </>
  );
};

export default LandingPage;
