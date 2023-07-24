import React from "react";

const HomepageHeader = () => {
  return (
    // wrapper
    <div className="wrapper   bg-[#101010]  pb-15 m-auto">
      <div className="container overflow-auto relative max-w-[1600px] flex flex-col w-full md:w-12/12  mx-auto px-[0%] md:px-12 ">
        <div className="flex  flex-wrap">
          <div className="w-full lg:w-6/12 px-4 py-0 md:py-20">
            <img
              className="animate-fade-up  textContainer"
              src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2F20200217_172241_IMG%20(2)%20(1)%20(2)-modified%20(1).png?alt=media&token=def150dd-a7fd-4338-b7f2-12056ecf6be6"
            />
          </div>
          <div className="  w-full self-center lg:w-6/12 px-10 md:px-20 py-10  ">
            <h2 className="animate-text   pb-10 bg-gradient-to-r from-[#f3f3f3] via-[#535353] to-[#000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl font-black">
              Hello, my name is Erickson. I'm a Front-End Developer
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageHeader;
