import React, { useEffect, useState } from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaPhp } from "react-icons/fa";
import { TbBrandJavascript, TbBrandRedux } from "react-icons/tb";
import {
  SiCplusplus,
  SiTailwindcss,
  SiFirebase,
  SiVisualstudiocode,
  SiAdobephotoshop,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandTypescript } from "react-icons/tb";

import { Fade } from "react-awesome-reveal";
import { Progress } from "flowbite-react";

const Skills = () => {
  const [progress45, setProgress45] = useState(0);
  const [progress50, setProgress50] = useState(0);
  const [progress55, setProgress55] = useState(0);
  const [progress60, setProgress60] = useState(0);
  const [progress65, setProgress65] = useState(0);
  const [progress70, setProgress70] = useState(0);
  const [progress75, setProgress75] = useState(0);
  const [progress80, setProgress80] = useState(0);
  const [progress85, setProgress85] = useState(0);
  const [progress90, setProgress90] = useState(0);

  function animateBar() {
    const timeout = setTimeout(function () {
      progress45 < 45 && setProgress45(progress45 + 1);
      progress50 < 50 && setProgress50(progress50 + 1);
      progress55 < 55 && setProgress55(progress55 + 1);
      progress60 < 60 && setProgress60(progress60 + 1);
      progress65 < 65 && setProgress65(progress65 + 1);
      progress70 < 70 && setProgress70(progress70 + 1);
      progress75 < 75 && setProgress75(progress75 + 1);
      progress80 < 80 && setProgress80(progress80 + 1);
      progress85 < 85 && setProgress85(progress85 + 1);
      progress90 < 90 && setProgress90(progress90 + 1);
    }, 10);
    return function () {
      clearTimeout(timeout);
    };
  }
  useEffect(() => {
    animateBar();
  }, [
    progress45,
    progress50,
    progress55,
    progress60,
    progress65,
    progress70,
    progress75,
    progress80,
    progress85,
    progress90,
  ]);

  return (
    // wrapper
    <div className="wrapper bg-[#000] m-auto">
      <div className="overflow-auto relative flex flex-col w-full md:w-12/12  mx-auto px-[0%] ">
        <div className="flex  flex-wrap">
          <span id="work-experience"></span>
          <div className="w-full self-center lg:w-6/12   px-5 md:px-10 py-10 ">
            <br></br>

            <Fade cascade damping={0.1} direction="left">
              <h2 className="max-w-[700px] mx-auto pb-10 bg-gradient-to-r from-[#fff] via-[#bebebe] to-[#000000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
                Work Experience
              </h2>
              <div className="mx-auto max-w-[700px]">
                <p className="text-white text-2xl ">
                  <a
                    href="https://www.luxurypresence.com/"
                    target="_blank"
                    className="cursor-pointer text-white text-xl sm:text-3xl font-extrabold"
                  >
                    Web Builder Product Expert
                  </a>
                  <p className="pb-2 font-medium text-lg">
                    Luxury Presence, Inc (April 2020 – May 2023)
                  </p>
                  <ul className="space-y-1 list-disc font-medium text-lg list-inside">
                    <li>
                      Build Websites
                      <ul
                        style={{ listStyle: "inherit" }}
                        className="list-disc indent-6 "
                      >
                        <li className="text-sm">
                          Build websites using company owned platform
                        </li>
                      </ul>
                    </li>
                    <li>
                      Maintaining CSS Injection Library
                      <ul
                        style={{ listStyle: "inherit" }}
                        className="list-disc indent-6 "
                      >
                        <li className="text-sm">
                          This CSS is used to replace or modify global/default
                          CSS
                        </li>
                      </ul>
                    </li>
                    <li>
                      Provide Support & Learning Sessions
                      <ul
                        style={{ listStyle: "inherit" }}
                        className="list-disc indent-6 "
                      >
                        <li className="text-sm">
                          POC on any website-building-related issue
                        </li>
                        <li className="text-sm">
                          Keeping the team informed of new component releases
                          and features
                        </li>
                        <li className="text-sm">
                          Introducing innovative website enhancement strategies
                          and tips
                        </li>
                      </ul>
                    </li>
                    <li>
                      Assist in Training
                      <ul
                        style={{ listStyle: "inherit" }}
                        className="list-disc indent-6 "
                      >
                        <li className="text-sm">
                          Provide training sessions for all new hires for the
                          LATAM and PH teams
                        </li>
                      </ul>
                    </li>
                    <li>
                      Assist with SOP Update
                      <ul
                        style={{ listStyle: "inherit" }}
                        className="list-disc indent-6 "
                      >
                        <li className="text-sm">
                          Participate in the addition and modification of
                          existing SOPs
                        </li>
                      </ul>
                    </li>
                  </ul>
                </p>
                <br></br>
                <br></br>
              </div>
            </Fade>
            <span className="absolute mt-[-100px]" id="technical-skills"></span>
            <Fade cascade damping={0.1} direction="left">
              <h2 className=" max-w-[700px] mx-auto pb-10 bg-gradient-to-r from-[#fff] via-[#bebebe] to-[#000000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
                Technical Skills
              </h2>
            </Fade>
            <Fade
              onVisibilityChange={() => {
                setProgress45(1);
                setProgress50(1);
                setProgress55(1);
                setProgress60(1);
                setProgress65(1);
                setProgress70(1);
                setProgress75(1);
                setProgress80(1);
                setProgress85(1);
                setProgress90(1);
              }}
              cascade
              damping={0.1}
              direction="left"
            >
              <div className="mx-auto max-w-[700px]">
                <div className="gap-8 sm:grid sm:grid-cols-2">
                  <div>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <FaReact />+
                        <TbBrandTypescript className="mr-1" /> React +
                        TypeScript{" "}
                        {/* <span className=" ml-2 text-white text-[10px] font-medium mr-2 px-2.5 py-0 rounded">
                          3 years experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress75}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress75}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <TbBrandRedux className="mr-1" /> Redux Toolkit{" "}
                        {/* <span className=" ml-2 text-white text-[10px] font-medium mr-2 px-2.5 py-0 rounded">
                          3 years experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress75}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress75}%
                        </span>
                      </dd>
                    </dl>

                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <TbBrandJavascript className="mr-1 text-xl" />{" "}
                        JavaScript{" "}
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          3 years experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress60}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress60}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <BsGit /> & <BsGithub className="mr-1" /> Git & Github{" "}
                        {/* <span className=" ml-2 text-white text-[10px] font-medium mr-2 px-2.5 py-0 rounded">
                          3 years experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress75}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress75}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <SiMongodb className="mr-1" /> MongoDB{" "}
                        {/* <span className=" ml-2 text-white text-[10px] font-medium mr-2 px-2.5 py-0 rounded">
                          3 years experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress75}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress75}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <SiFirebase className="mr-1" /> Firebase
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          1 year experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress75}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress75}%
                        </span>
                      </dd>
                    </dl>

                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <GrNode className="mr-1" /> Node Js{" "}
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          1 year experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress45}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress45}%
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <SiVisualstudiocode className="mr-1" /> VS Code{" "}
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          1 year experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress80}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress80}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <FaHtml5 className="mr-1" /> HTML5{" "}
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          3 years experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress90}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress90}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <FaCss3Alt className="mr-1" /> CSS3{" "}
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          3 years experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress90}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress90}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <SiTailwindcss className="mr-1" /> Tailwind{" "}
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          1 year experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress85}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress85}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <SiAdobephotoshop className="mr-1" /> Adobe Photoshop
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          1 year experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress80}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress80}%
                        </span>
                      </dd>
                    </dl>

                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <FaPhp className="mr-1 text-xl" /> PHP
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          1 year experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress60}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress60}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-sm items-center flex font-medium text-white">
                        <SiCplusplus className="mr-1" /> C++{" "}
                        {/* <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                          1 year experience
                        </span> */}
                      </dt>
                      <dd className="flex items-center mb-3">
                        <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                          <Progress
                            color="dark"
                            className="transition-all"
                            progress={progress60}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress60}%
                        </span>
                      </dd>
                    </dl>
                  </div>
                </div>

                <br></br>
              </div>
            </Fade>
          </div>

          <img
            className="grayscale w-full lg:w-6/12 opacity-50 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Faboutpage.jpg?alt=media&token=7aba4659-3bc6-4adf-9ed0-7f5938c4943b"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
