import React from "react";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaReact, FaCss3Alt, FaHtml5, FaPhp } from "react-icons/fa";
import { TbBrandJavascript, TbBrandRedux } from "react-icons/tb";
import {
  SiCplusplus,
  SiTailwindcss,
  SiFirebase,
  SiVisualstudiocode,
  SiAdobephotoshop,
} from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandTypescript } from "react-icons/tb";

const Logos = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1024, min: 729 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 729, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <div className="bg-[#171717] py-2">
        <Carousel
          customTransition={"transform 3500ms"}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          containerClass="carousel-container"
          swipeable={true}
          draggable={true}
          removeArrowOnDeviceType={["superLargeDesktop", "desktop"]}
          itemClass="p-10 px-5 sm:pb-10 "
        >
          <div>
            <FaReact className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
          <div>
            <TbBrandRedux className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>

          <div>
            <TbBrandTypescript className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>

          <div>
            <GrNode className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
          <div>
            <TbBrandJavascript className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px]  text-white" />
          </div>
          <div>
            <BsGit className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
          <div>
            <BsGithub className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
          <div>
            <SiVisualstudiocode className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>

          <div>
            <FaHtml5 className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
          <div>
            <FaCss3Alt className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>

          <div>
            <SiTailwindcss className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px]  text-white" />
          </div>
          <div>
            <SiFirebase className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
          <div>
            <SiAdobephotoshop className=" text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
          <div>
            <FaPhp className="text-[70px] m-auto sm:text-[90px] lg:text-[100px]  text-white" />
          </div>
          <div>
            <SiCplusplus className="text-[70px] m-auto sm:text-[90px] lg:text-[100px] text-white" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Logos;
