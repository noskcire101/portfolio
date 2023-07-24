import { Carousel } from "flowbite-react";
import React from "react";

const Testimonials = () => {
  return (
    <div className="wrapper h-[800px] bg-[#101010] pt-20 m-auto">
      <h2 className="animate-text max-w-full text-center bg-gradient-to-r from-[#f3f3f3] via-[#535353] to-[#000] bg-clip-text text-transparent text-4xl sm:text-5xl  lg:text-7xl  font-black">
        Recommendations
      </h2>
      <Carousel>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md  sm:text-2xl font-medium text-white">
                    Erickson's dedication and work ethic were truly exceptional
                    during his time at Luxury Presence. As a Web Builder Product
                    Expert, he consistently demonstrated his ability to take on
                    leadership roles and deliver high-quality websites.
                    Erickson’s attention to detail and critical thinking skills
                    made him a valuable asset to our team. He consistently
                    upheld our company's values and served as a role model for
                    his peers...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://media.licdn.com/dms/image/C5603AQHh44FKDpDcKA/profile-displayphoto-shrink_200_200/0/1638745286958?e=1695859200&v=beta&t=kmCjqbqjwuhqbSbi8ACuH91ezaMzLTce5J_cOnAre0o"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Chloe Trang
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Design Product Manager
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is a highly talented professional who excels in
                    training, creative thinking, design, and incorporating new
                    technologies. His empathy towards team members and his
                    availability for support make him a reliable and
                    indispensable asset to any organization. I wholeheartedly
                    recommend Erickson for any opportunity he pursues, as I am
                    confident he will continue to thrive and make significant
                    contributions in his professional journey...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fjed.jpg?alt=media&token=f7edecb6-9719-4e9c-b59b-10fa2d471ca9"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Jed Christian Palad
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Technical Project Coordinator
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    I highly recommend Erickson for any web development/web
                    expert position. As a Web Builder Product Expert at Luxury
                    Presence, Erickson consistently demonstrated exceptional
                    work ethic, kindness, and expertise. His proficiency in CSS
                    and HTML was outstanding, and he consistently went above and
                    beyond to create impressive client sites. Erickson's eye for
                    design and commitment to delivering his best work make him
                    an invaluable asset to any company...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fwill.jpg?alt=media&token=928b7e7e-36da-4ec9-89d4-ce630f538345"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      William Howard
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Design Product Coordinator
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is one of the best (if not the best) professionals
                    one could ever ask to get trained for, he provided me
                    personal training and support until I was capable to get 0
                    revisions from the websites I've made! He also made a lot of
                    training videos for the company and a full website teaching
                    the fundamentals (that's amazing). Thank you so much,
                    Erickson!, it was a pleasure working with you, the best
                    teacher I've ever had so far...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fsebastian.jpg?alt=media&token=b1cb2dda-772f-4561-ba0a-efb2cc08b23d"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Sebastián Antonio Fontana
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Web Developer
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is proficient in programming languages such as
                    HTML, CSS, and JavaScript. He has a deep understanding of
                    front-end and back-end development, and He can easily tackle
                    complex challenges. Aside from his technical skills,
                    Erickson is a pleasure to work with. He maintains a positive
                    attitude, approaches challenges with enthusiasm, and is
                    always willing to lend a helping hand to team members. His
                    strong work ethic and commitment to excellence make him an
                    invaluable asset to any web development team...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fjoemar.jpg?alt=media&token=2c1e3043-1129-40d5-a314-6244bda9486d"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Joemar Esplana
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Training Manager
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is amazing to work with! It is rare to have someone
                    as talented as him. Even for a short time, I learned a lot
                    from Erickson, his techniques, methods and values. Apart
                    from creating beautiful and extravagant websites for our
                    clients, Erickson has also shown strong leadership and has
                    taken initiative to further improve our process as a team.
                    He made sure that even the tiniest issue is covered with a
                    solution...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fduane.jpg?alt=media&token=c4d44a4c-b474-4051-b8b3-fcff2acb3254"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Duane Iza Macadat-Arnobit
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Design Project Associate
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is a very talented developer. We worked together
                    for several months. He was the head coach for the LATAM web
                    builders in the company and I had the chance to learn so
                    much from him. Even when we weren't part of the same team,
                    he was always there to help others and teach new skills in
                    the process. I strongly recommend Erickson as a colleague
                    and as a person...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fsebastian2.jpg?alt=media&token=7f3a1aea-c37f-47ec-a9bc-4ba59248c9b8"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Sebastian Gaudelli
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Web Developer
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    I used to worked with Erickson for 3 years and he is one of
                    the best in my team. He was a valuable member of my team at
                    Luxury Presence. I had the pleasure of working closely with
                    Erickson since his Day 1. He was under my team as data
                    specialist then got promoted as Website Builder and then as
                    our Product Expert. I can confidently attest to his
                    exceptional skills, work ethic, and dedication...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fdanica.jpg?alt=media&token=e4676602-3657-4a71-9af3-f683ffcf1f9d"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Danica Jovan Saavedra
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Pod Manager
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Thank you so much for being there for me. Not only are you
                    an amazing coworker, but also an incredible mentor and true
                    friend. I am so grateful for everything you have done to
                    help me advance my career. Your ability to work so well with
                    others is truly a gift. It's truly been great getting to
                    know you better and I look forward to the opportunity to
                    work with you again...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fjaena.jpg?alt=media&token=9f6249b3-d9b2-47fe-8bc5-d4616f8140dd"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Jaena Alferes
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Web Builder
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    I had the privilege of getting to know Erickson and working
                    with him. I confidently attest to his exceptional skills,
                    qualities, and character. I have seen his outstanding work
                    ethic and consistent drive for excellence. He is remarkable
                    at creating websites that are both attractive and
                    well-designed. Erickson consistently goes above and beyond
                    and ensures the successful completion of any tasks...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fjasmin.jpg?alt=media&token=cbc0afc0-d59f-4bf5-b941-e55dcc2eb8d9"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Jasmin Ricablanca
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Design Project Associate
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    I am writing to wholeheartedly recommend Erickson for his
                    exceptional skills in designing websites using CSS and HTML.
                    I have had the pleasure of working closely with Erickson for
                    3 years at Luxury Presence and have been consistently
                    impressed by his remarkable abilities in this field...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fcarl.jpg?alt=media&token=4a536869-2cf0-4911-8789-a004c42de135"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Carl Francis
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Pod Manager
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>

        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is really good at designing our websites using CSS,
                    HTML, and CMS. Making our clients love their sites with his
                    design, he even has his own title which is design product
                    expert. He is also part of the training team where he trains
                    the new hire to be production ready. His knowledge and
                    expertise in our company are undoubtedly exceptional. Thank
                    you, sir!
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fpeter.jpg?alt=media&token=2065d8dd-2924-4c92-a222-d957a6a885f3"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Peter Cruz
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Pod Manager
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is an excellent person with remarkable technical
                    and personal skills. He is a leader who works together with
                    his team to get the best results. He is always willing to
                    help and contribute his valuable knowledge to each
                    teammate...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fenrique.jpg?alt=media&token=6d8d623c-b955-4b08-b41c-c48e7775ac28"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Enrrique Elin Parada González
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Web Developer
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is one of the best professionals that I've worked
                    with, i worked one year and a half with him, he has a great
                    knowledge about the company's product and processes and is
                    always willing to help. He has a big role on training new
                    hires being the main point of contact for any doubts,
                    questions, issues and requests; also used to be in charge of
                    making the sites for the most demanding clients because of
                    his creativity designing and programing skills, always
                    delivering high quality work and with the best attitude...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Falejandro.jpg?alt=media&token=bfeab0eb-dd12-4fd8-b254-a923ff65b951"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Alejandro Tovar Lamilla
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Design Project Associate
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    I can describe Erickson as an excellent employee and an even
                    better teammate. Not only he is committed to the growth of
                    the company and invested in delivering good work, but he is
                    also always willing to help his teammates when they need it.
                    It was a pleasure being trained by him because his patience
                    knows no limits and his will to help never diminishes. He is
                    also very knowledgeable and takes the company standards and
                    requirements in a very serious way, approaching tasks with
                    great care and dedication...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fmanuel.jpg?alt=media&token=a6135ae9-2e03-4637-b0c6-f5564dab6341"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Manuel Costales
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Web Developer
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>

        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    I’ve worked with Erickson for almost 2 years. Erickson is
                    hard working with a very positive attitude at work, he is
                    always taking the extra mile and making sure that his work
                    is always of great quality. He is a team player, problem
                    solver, and proactive, because of his characteristics
                    Erickson immediately becomes a trainer for new builders. As
                    a trainer, He always makes sure that he gave quality
                    training to them to make sure that they become efficient
                    website builders for our company by giving them proper
                    materials like videos, documents, and techniques...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fdanilen.jpg?alt=media&token=d6e2ce64-af0c-49f1-9a83-af872a254759"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Danilen San Diego
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Pod Manager
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>

        <div className="flex h-full items-center justify-center bg-[#101010]">
          <section className="bg-[#101010] textContainer">
            <div className="max-w-screen-xl px-4 pb-8 mx-auto text-center lg:pb-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-white"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-md sm:text-2xl font-medium text-white">
                    Erickson is somebody that is very loyal to the company for
                    he has worked for years in Luxury Presence! He is happy to
                    teach newer members like me to get better at HTML, CSS, and
                    Javascript to some degree! I can safely say that I got
                    better at using the company's software for me to create
                    better websites with different clients and got better at my
                    coding skills in the process!...
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 mb-10 space-x-3">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/webproject-6f2f2.appspot.com/o/portfolio%2Frecommendations%2Fmiguel.jpg?alt=media&token=fb410bdd-6913-4ad2-ba10-64c9285b8505"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-[#f9f9f9] ">
                    <div className="pr-3 font-medium text-sm text-white">
                      Miguel Alfonso T. Crispino
                    </div>
                    <div className="pl-3 text-sm font-light text-white ">
                      Web Builder
                    </div>
                  </div>
                </figcaption>
                <a
                  href="https://www.linkedin.com/in/ericksonsernero777/"
                  target="_blank"
                  className="relative px-6 pt-3 pb-4 font-bold text-black group"
                >
                  <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-1 -translate-y-1 bg-[#fff] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full border-4 border-[#777]"></span>
                  <span className="relative">View in LinkedIn</span>
                </a>
              </figure>
            </div>
          </section>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
