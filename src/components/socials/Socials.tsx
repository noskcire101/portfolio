import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";
import { Flip, JackInTheBox } from "react-awesome-reveal";

const Socials = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div data-dial-init className="fixed z-[9999] right-6 bottom-6 group">
        <div
          id="speed-dial-menu-default"
          className={
            show
              ? "flex flex-col items-center transition-all mb-4 space-y-2"
              : " flex-col hidden items-center transition-all  mb-4 space-y-2"
          }
        >
          <JackInTheBox>
            <a
              href="mailto:esernero@outlook.com"
              className="flex cursor-pointer justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200   shadow-sm  hover:bg-gray-50"
            >
              <SiMicrosoftoutlook className="w-5 h-5" />
            </a>

            <a
              href="mailto:esernero@gmail.com"
              className="flex cursor-pointer justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200   shadow-sm  hover:bg-gray-50"
            >
              <SiGmail className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/ericksonsernero777/"
              target="_blank"
              className="flex cursor-pointer justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200   shadow-sm  hover:bg-gray-50"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
          </JackInTheBox>
        </div>
        <Flip delay={5000} duration={1000}>
          <button
            type="button"
            onClick={() => setShow(!show)}
            className={
              !show
                ? "animate-text z-[99] bg-gradient-to-r from-[#fff] via-[#b4b4b4] to-[#686868] flex items-center justify-center transition-all rounded-full w-[57px] h-[57px] sm:w-[77px] sm:h-[77px] text-gray-500 hover:text-gray-900 bg-white border border-gray-200  shadow-sm  hover:bg-gray-50"
                : " flex items-center justify-center rounded-full w-[57px] h-[57px] sm:w-[77px] sm:h-[77px] text-gray-500 hover:text-gray-900 bg-white border transition-all border-gray-200  shadow-sm  hover:bg-gray-50"
            }
          >
            <BiSolidContact className="w-8 h-8 sm:w-10 sm:h-10" />
          </button>
        </Flip>
      </div>
    </>
  );
};

export default Socials;
