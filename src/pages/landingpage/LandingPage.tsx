import React, { useEffect, useState } from "react";
import HomepageHeader from "../../components/header/Header";
import Skills from "../../components/skills/Skills";
import Testimonials from "../../components/testimonials/Testimonials";
import Education from "../../components/education/Education";
import Projects from "../../components/projects/Projects";
import Socials from "../../components/socials/Socials";
import Logos from "../../components/logos/Logos";
import Loader from "../../components/loader/loader";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 5000);
  }, []);

  let delaytime = 4000;
  if (isLoading) {
    delaytime = 4000;
  } else {
    delaytime = 0;
  }

  return (
    <>
      <HomepageHeader delaytime={delaytime} />

      <Skills />
      <Logos />
      <Testimonials />
      <Education />
      <Projects />
      <Socials />
      {isLoading && <Loader />}
    </>
  );
};

export default LandingPage;
