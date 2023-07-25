const Information = () => {
  return (
    <>
      <div className="wrapper bg-fixed ... bg-[url('https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2FElement%20BG%20(1)%20(1)%20(2).jpg?alt=media&token=3b9f6de7-a76d-4a61-99ce-9ecc8b100428')] pb-15 m-auto">
        <div className="container overflow-auto relative max-w-[1600px] flex flex-col w-full md:w-12/12  mx-auto px-[0%] md:px-12 ">
          <div className="flex  flex-wrap">
            <div className="w-full px-4 py-10 md:py-20">
              <section className="bg-[#000] pb-10 bg-opacity-50">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                  <h2 className=" max-w-full mb-10 text-center bg-gradient-to-r from-[#f3f3f3] via-[#535353] to-[#000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
                    Educational Attainment
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#000]  rounded-lg p-8 md:p-12">
                      <h2 className="text-white text-xl sm:text-3xl font-extrabold mb-2">
                        Cavite State University Imus Campus
                      </h2>
                      <p className="text-lg font-normal text-white mb-4">
                        Bachelor of Science in Information Technology Graduate
                        <br></br>2017 – 2020
                      </p>
                    </div>
                    <div className="bg-[#000]  rounded-lg p-8 md:p-12">
                      <h2 className="text-white text-xl sm:text-3xl font-extrabold mb-2">
                        Datacom Institute of Computer Technology
                      </h2>
                      <p className="text-lg font-normal text-white  mb-4">
                        Multimedia and Information Technology Graduate <br></br>
                        2015 – 2017
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
