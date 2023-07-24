import React from "react";

const HomepageAbout = () => {
  return (
    // wrapper
    <div className="wrapper bg-[#000] m-auto">
      <div className="overflow-auto relative flex flex-col w-full md:w-12/12  mx-auto px-[0%] ">
        <div className="flex  flex-wrap">
          <div className="w-full self-center lg:w-6/12 animate-fade-up  px-10 md:px-20 py-10 ">
            <br></br>
            <br></br>
            <h2 className="animate-text max-w-[700px] mx-auto pb-10 bg-gradient-to-r from-[#f3f3f3] via-[#535353] to-[#000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
              Personal Skills
            </h2>
            <div className="mx-auto max-w-[700px]">
              <p className="text-white text-2xl ">
                I have a strong interest in computer programming and am always
                open to learning new skills, especially if they would improve
                productivity. Aside from a great desire to learn, I am confident
                in my ability to easily adjust to a new work environment.
                Furthermore, I can also say that I am capable of multitasking;
                my previous role required me to attend numerous meetings,
                conduct scheduled training, taking some side projects, assist
                new hires, and build a website all within the same shift.
              </p>
              <br></br>
              <br></br>
              <br></br>
              <a
                href="#_"
                className="relative px-6 pt-3 pb-4 font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                <span className="relative">Learn More</span>
              </a>
              <br></br>
              <br></br>
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
