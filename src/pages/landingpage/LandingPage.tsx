import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Skills from "../../components/skills/Skills";
import Testimonials from "../../components/testimonials/Testimonials";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import Socials from "../../components/socials/Socials";
import Logos from "../../components/logos/Logos";
import Loader from "../../components/loader/loader";
const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, [isLoading]);

  return !isLoading ? (
    <>
      <Header />

      <Skills />
      <Logos />
      <Testimonials />
      <Education />
      <Projects />
      <Socials />
    </>
  ) : (
    <>
      <Loader />
    </>
  );
};

export default LandingPage;
