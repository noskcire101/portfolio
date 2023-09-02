import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {
  const [viewMoreShow, setViewMoreShow] = useState({ display: "none" });
  const [viewMoreShow1, setViewMoreShow1] = useState({ display: "none" });
  const [viewMoreShow2, setViewMoreShow2] = useState({ display: "none" });
  const [viewMoreShow3, setViewMoreShow3] = useState({ display: "none" });
  const [viewMoreShow4, setViewMoreShow4] = useState({ display: "none" });
  const [viewMoreShow5, setViewMoreShow5] = useState({ display: "none" });
  const [viewMoreShowa, setViewMoreShowa] = useState({ display: "none" });
  const [viewMoreShowb, setViewMoreShowb] = useState({ display: "none" });
  const [viewMoreShowc, setViewMoreShowc] = useState({ display: "none" });
  const [viewMoreShowd, setViewMoreShowd] = useState({ display: "none" });
  const [viewMoreShowe, setViewMoreShowe] = useState({ display: "none" });
  const [viewMoreShowf, setViewMoreShowf] = useState({ display: "none" });
  const [viewMoreShowg, setViewMoreShowg] = useState({ display: "none" });

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 729 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 729, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div className="bg-[#000] py-20">
        <span className="absolute mt-[-100px]" id="sample-projects"></span>
        <Fade cascade damping={0.1} direction="up">
          <h2 className=" max-w-full text-center  bg-gradient-to-r from-[#fff] via-[#bebebe] to-[#000000] bg-clip-text text-transparent text-4xl pb-5 sm:text-5xl  lg:text-7xl  font-black">
            Sample Projects
          </h2>
        </Fade>

        <Carousel
          customTransition={"transform 1000ms"}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          containerClass="carousel-container"
          swipeable={true}
          draggable={true}
          itemClass="p-10 px-5 sm:pb-10 "
        >
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://pet-adoption-erickson.vercel.app/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShow5({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShow5({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2Fcrud.png?alt=media&token=757cc8fc-a7f5-4186-90b6-10800fa5367d"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShow5}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShow5}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">
                    CRUD Sample(Test Site)
                  </div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://u9u5z5f4.stackpathcdn.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShowa({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShowa({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FDicker%20Morin%20Group.png?alt=media&token=466b1ccc-92c7-4953-8bf9-98ced9d35068"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShowa}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShowa}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">
                    Dicker Morin Group
                  </div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://nickmurphyboston.com.teamluxurypresence.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShow({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShow({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#1a1a1a] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FNick%20Murphy%20(1).png?alt=media&token=d3611374-1a9c-4587-be21-8b702e9b3d29"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShow}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShow}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Nick Murphy</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://i6y3f2p6.stackpathcdn.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShowb({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShowb({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FBlair%20Heath.png?alt=media&token=7bbb89ff-9551-46ba-8d03-d5fb48fe82b4"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShowb}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShowb}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Blair Heath</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://preview-w-5f3c8da36eb9ec01b687c9d6.teamluxurypresence.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShow1({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShow1({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FRoyal%20Realty%20Group%20(1).png?alt=media&token=1c39d04b-be85-4507-ad16-4a83cdee7136"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShow1}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShow1}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">
                    Royal Realty Group
                  </div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://n9a4q2e4.stackpathcdn.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShowc({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShowc({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FKim%20Warden.png?alt=media&token=c03d083f-4520-458e-8660-3ce7da30e8d4"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShowc}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShowc}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Kim Warden</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://preview-w-5fcee97b58e8c301b64f4953.teamluxurypresence.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShow2({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShow2({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FGretchen%20Swall%20(1).png?alt=media&token=785b6d25-d63e-45da-84d5-271ec94c45a3"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShow2}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShow2}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Gretchen Swall</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://x6d2a3b8.stackpathcdn.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShowd({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShowd({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FSuzzan%20SCott.png?alt=media&token=8cbfda1d-031b-4f86-80ce-d25c7fd6f2cb"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShowd}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShowd}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Suzzane Scott</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://preview-w-5c922393b51fdc0167ae3b43.teamluxurypresence.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShow3({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShow3({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FThe%20Cady%20Team%20(1).png?alt=media&token=85a41578-992d-44dc-86c4-94a3a600d5f8"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShow3}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShow3}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">The Cady Team</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://j2p5w6q6.stackpathcdn.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShowe({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShowe({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FMaryllen%20Griffin.png?alt=media&token=66cf5afd-513f-4dc3-9602-5e2a36c93c8a"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShowe}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShowe}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Maryellen Griffin</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://preview-w-5d378efbdbdf6d016e4939b6.teamluxurypresence.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShow4({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShow4({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FPatek%20%2B%20Jones%20Group%20(1).png?alt=media&token=8b5a6ea0-9c34-4862-b66b-1ec9811c303e"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShow4}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShow4}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">
                    Patek + Jones Group
                  </div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://m6c9y6n2.stackpathcdn.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShowf({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShowf({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FLuisa%20Defeo.png?alt=media&token=6348ab75-c9b7-4788-8def-ed106740b60b"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShowf}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShowf}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Luisa Defeo</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
          <div>
            <article className="overflow-hidden bg-[#171717] rounded-lg shadow-lg">
              <a
                href="https://f3m5a2h3.stackpathcdn.com/"
                target="_blank"
                onMouseEnter={(e) => {
                  setViewMoreShowg({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setViewMoreShowg({ display: "none" });
                }}
              >
                <div className="block h-auto bg-[#f8f8f8] relative w-full">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Fprojects%2FGuillermo%20Jimenez.png?alt=media&token=0ca311a2-f9d2-47f3-9fae-52616709a5ec"
                    className="w-full h-[300px] object-cover m-auto max-w-fit"
                  />
                  <div
                    style={viewMoreShowg}
                    className="-translate-y-1/2 -translate-x-1/2  w-full h-full bg-opacity-50 bg-black absolute text-center m-0 top-1/2 left-1/2"
                  ></div>
                  <p
                    className="-translate-y-1/2 -translate-x-1/2 text-[#ececec] hover:text-white absolute text-center m-0 top-1/2 left-1/2"
                    style={viewMoreShowg}
                  >
                    Goto Website
                  </p>
                </div>
              </a>
              <header className="flex-wrap md:flex items-center text-center md:justify-between p-4  ">
                <h1 className="text-md  break-words items-center p-4 py-2 ">
                  <div className=" text-white font-bold">Guillermo Jimenez</div>
                </h1>
                <div className="flex  place-content-center p-4 py-2 text-black">
                  <div className="inline-flex   items-center">
                    <img
                      className="block textContainer  h-12 rounded-full"
                      src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
                    />
                    <p className="text-white text-sm font-bold min-[1280px]:max-w-auto  ml-2 mr-2 inline-flex">
                      By: Erickson Sernero
                    </p>
                  </div>
                </div>
              </header>
            </article>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Projects;
