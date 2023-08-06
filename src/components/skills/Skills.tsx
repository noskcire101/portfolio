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
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  const [progress5, setProgress5] = useState(0);
  const [progress6, setProgress6] = useState(0);
  const [progress7, setProgress7] = useState(0);
  const [progress8, setProgress8] = useState(0);

  function animateBar() {
    const timeout = setTimeout(function () {
      progress1 < 80 && setProgress1(progress1 + 1);
      progress2 < 90 && setProgress2(progress2 + 1);
      progress3 < 90 && setProgress3(progress3 + 1);
      progress4 < 80 && setProgress4(progress4 + 1);
      progress5 < 80 && setProgress5(progress5 + 1);
      progress6 < 75 && setProgress6(progress6 + 1);
      progress7 < 45 && setProgress7(progress7 + 1);
      progress8 < 45 && setProgress8(progress8 + 1);
    }, 10);
    return function () {
      clearTimeout(timeout);
    };
  }
  useEffect(() => {
    animateBar();
  }, [
    progress1,
    progress2,
    progress3,
    progress4,
    progress5,
    progress6,
    progress7,
    progress8,
  ]);

  return (
    // wrapper
    <div className="wrapper bg-[#000] m-auto">
      <div className="overflow-auto relative flex flex-col w-full md:w-12/12  mx-auto px-[0%] ">
        <div className="flex  flex-wrap">
          <div className="w-full self-center lg:w-6/12 animate-fade-up  px-5 md:px-10 py-10 ">
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
                    <li>Build Websites</li>
                    <li>Maintaining CSS injection library</li>
                    <li>Provide support & learning sessions</li>
                    <li>Assist in Training</li>
                    <li>Assist with SOP update</li>
                  </ul>
                </p>
                <br></br>
                <br></br>
              </div>
            </Fade>
            <Fade cascade damping={0.1} direction="left">
              <h2 className=" max-w-[700px] mx-auto pb-10 bg-gradient-to-r from-[#fff] via-[#bebebe] to-[#000000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
                Technical Skills
              </h2>
            </Fade>
            <Fade
              onVisibilityChange={() => {
                setProgress1(1);
                setProgress2(1);
                setProgress3(1);
                setProgress4(1);
                setProgress5(1);
                setProgress6(1);
                setProgress7(1);
                setProgress8(1);
              }}
              cascade
              damping={0.1}
              direction="left"
            >
              <div className="mx-auto max-w-[700px]">
                <div className="gap-8 sm:grid sm:grid-cols-2">
                  <div>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress1}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress1}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress6}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress6}%
                        </span>
                      </dd>
                    </dl>

                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress6}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress6}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress1}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress1}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress6}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress6}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress6}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress6}%
                        </span>
                      </dd>
                    </dl>

                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress6}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress6}%
                        </span>
                      </dd>
                    </dl>
                  </div>
                  <div>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress5}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress5}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress2}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress2}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress3}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress3}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress5}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress5}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress6}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress6}%
                        </span>
                      </dd>
                    </dl>

                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress7}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress7}%
                        </span>
                      </dd>
                    </dl>
                    <dl>
                      <dt className="text-md items-center flex font-medium text-white">
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
                            progress={progress8}
                            size="md"
                          />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">
                          {progress8}%
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
