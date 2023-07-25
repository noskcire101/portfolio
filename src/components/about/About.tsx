import React from "react";
import { FaReact, FaCss3Alt, FaHtml5, FaPhp } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiCplusplus, SiTailwindcss, SiFirebase } from "react-icons/si";

const HomepageAbout = () => {
  return (
    // wrapper
    <div className="wrapper bg-[#000] m-auto">
      <div className="overflow-auto relative flex flex-col w-full md:w-12/12  mx-auto px-[0%] ">
        <div className="flex  flex-wrap">
          <div className="w-full self-center lg:w-6/12 animate-fade-up  px-10 md:px-20 py-10 ">
            <br></br>

            <h2 className="max-w-[700px] mx-auto pb-10 bg-gradient-to-r from-[#f3f3f3] via-[#535353] to-[#000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
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
                  <li>Build websites using company owned platform</li>
                  <li>Maintaining CSS injection library for the team</li>
                  <li>Provide support & learning sessions for the Team</li>
                  <li>Assist in Training</li>
                  <li>Assist with SOP update</li>
                </ul>
              </p>
              <br></br>
              <br></br>
            </div>
            <h2 className=" max-w-[700px] mx-auto pb-10 bg-gradient-to-r from-[#f3f3f3] via-[#535353] to-[#000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
              Technical Skills
            </h2>
            <div className="mx-auto max-w-[700px]">
              <div className="gap-8 sm:grid sm:grid-cols-2">
                <div>
                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <FaReact className="mr-1" /> React + TypeScript{" "}
                      <span className=" ml-2 text-white text-[10px] font-medium mr-2 px-2.5 py-0 rounded">
                        3 years experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[85%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        8.5
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <FaHtml5 className="mr-1" /> HTML5{" "}
                      <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        3 years experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[95%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        9.5
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <FaCss3Alt className="mr-1" /> CSS3{" "}
                      <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        3 years experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[90%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        9.0
                      </span>
                    </dd>
                  </dl>

                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <TbBrandJavascript className="mr-1 text-xl" /> JavaScript{" "}
                      <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        3 years experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[85%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        8.5
                      </span>
                    </dd>
                  </dl>
                </div>
                <div>
                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <SiTailwindcss className="mr-1" /> Tailwind{" "}
                      <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        1 year experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[80%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        8.0
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <SiFirebase className="mr-1" /> Firebase
                      <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        1 year experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[75%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        7.5
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <FaPhp className="mr-1 text-xl" /> PHP
                      <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        1 year experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[45%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        4.5
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt className="text-lg items-center flex font-medium text-white">
                      <SiCplusplus className="mr-1" /> C++{" "}
                      <span className="text-[10px] ml-2 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                        1 year experience
                      </span>
                    </dt>
                    <dd className="flex items-center mb-3">
                      <div className="w-full bg-gray-200 rounded h-2.5  mr-2">
                        <div className="bg-[#777] w-[45%] h-2.5 rounded"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-500 ">
                        4.5
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>

              <br></br>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <img
              className="grayscale opacity-50"
              src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Faboutpage.jpg?alt=media&token=7aba4659-3bc6-4adf-9ed0-7f5938c4943b"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageAbout;
