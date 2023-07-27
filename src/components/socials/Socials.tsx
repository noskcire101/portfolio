import React, { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { SiIndeed, SiGmail, SiMicrosoftoutlook } from "react-icons/si";
import { BiSolidContact } from "react-icons/bi";

const Socials = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div data-dial-init className="fixed z-[9999] right-6 bottom-6 group">
        <div
          id="speed-dial-menu-default"
          className={
            show
              ? "flex flex-col items-center  mb-4 space-y-2"
              : " flex-col hidden items-center  mb-4 space-y-2"
          }
        >
          <a
            href="mailto:esernero@outlook.com"
            className="flex cursor-pointer justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          >
            <SiMicrosoftoutlook className="w-5 h-5" />
          </a>

          <a
            href="mailto:esernero@gmail.com"
            className="flex cursor-pointer justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 dark:hover:text-white shadow-sm dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
          >
            <SiGmail className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/in/ericksonsernero777/"
            target="_blank"
            className="flex cursor-pointer justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200  shadow-sm dark:text-gray-400 hover:bg-gray-50"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
        </div>
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={
            !show
              ? "animate-text z-[99] bg-gradient-to-r from-[#f3f3f3] via-[#b4b4b4] to-[#686868] flex items-center justify-center transition-all rounded-full w-[57px] h-[57px] text-gray-500 hover:text-gray-900 bg-white border border-gray-200  shadow-sm dark:text-gray-400 hover:bg-gray-50"
              : " flex items-center justify-center rounded-full w-[57px] h-[57px] text-gray-500 hover:text-gray-900 bg-white border transition-all border-gray-200  shadow-sm dark:text-gray-400 hover:bg-gray-50"
          }
        >
          <BiSolidContact className="w-8 h-8" />
        </button>
      </div>
    </>
  );
};

export default Socials;
