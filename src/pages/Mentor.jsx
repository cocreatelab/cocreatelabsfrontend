
import React from "react";
import "../CSS/mentor.css";
import howitworks from "../assets/howitworks.png";
// import welcome from "../assets/welcomebg.png";
import maninblue from "../assets/man-in-blue.png";
import globalpresence from "../assets/Global Presence.png";
import Fade from "react-reveal/Fade";
import srchbtn from "../assets/srchbtn.png";

export const Mentor = () => {
  return (
    <>
      <section>
      <Fade bottom distance='30%' duration={1000} delay={100}>
        <div className="mentor-parent-container p-80 scroll-smooth overflow-hidden">
          <div className="mentor-content-container">
            <div className="mentor-main-heading font-dm-sans font-bold  text-4xl leading-tight text-center capitalize text-black-1100 text-center w-3/4 ml-20">
              Find mentors as invested in you, as you are in your business
            </div>

            <div className="mentor-primary-text font-dm-sans font-normal text-gray-400 text-23 leading-34 text-center mr-15 mt-10">
              Connect on your own schedule, from anywhere in the world.
            </div>
            
            {/* <div class="bg-white border border-gray-200 shadow-sm rounded-full p-2 w-3/4 flex flex-1 m grid-row gap-2-row mt-10 ml-20">
              <input
                type="text"
                placeholder="Search by company, language or role"
                class="border-none text-center w-4/5 mr-1 font-dm-sans font-normal text-gray-400 text-base leading-6 tracking-wider"
              />
              <input
                type="text"
                placeholder="Expertise"
                class="border-none w-1/5 mr-2 font-dm-sans font-normal text-gray-400 text-base leading-6 tracking-wider"
              />
              <input
                type="text"
                placeholder="Country"
                class="border-none w-1/5 font-dm-sans font-normal text-gray-400 text-base leading-6 tracking-wider"
              />
              
              <div className="srch-btn rounded border-outline w-24">
                <button> <img src={srchbtn} alt="" className=""/> </button>
              </div>
            </div> */}
        
          </div>
        
        </div>
        </Fade>
      </section>

      <section className="mentor-welcome">
      <Fade bottom distance='30%' duration={1000} delay={100}>
        <div className="mentor-welcome-parent-container p-40">
          <div className="welcome-content-container rounded bg-white mx-auto max-w-lg w-full max-h-lg h-full">
            <div className="mentor-welcome-content mt-10 mb-20 ml-10">
              <p className="welcome-message">WELCOME TO MENTOR CONNECT</p>
              <h1 class="welcome-startup w-80">
                The go-to platform for ambitious startups
              </h1>
              <div className="welcome-primary-text mt-5">
                Looking to find and connect with experienced mentors who can
                help take their business to the next level?
                <br />
                <br />
                Building a successful business is no easy feat. You face
                countless challenges, from developing a winning product to
                attracting and retaining customers, to managing cash flow and
                scaling your operations. 
                <br />
                <br />
                Our platform connects startups with vetted and experienced
                mentors who have a proven track record of success in a range of
                industries and functions.
              </div>
              <div className="welcome-button-container mt-10 flex-1">
                <button className="bg-blue-500 rounded-lg p-4 text-white hover:border-blue-500 border-2">
                  Discover Now
                </button>
                <a
                  href="./"
                  className="font-inter font-normal font-bold text-lg hover:text-blue-500 leading-tight text-gray-700 ml-5"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </section>
        <Fade bottom distance='30%' duration={1000} delay={100}>
      <section className="go-to flex">
        <img src={howitworks} className="w-100 responsive_img" alt="imgw" />
      </section>
      </Fade>
      <Fade bottom distance='30%' duration={1000} delay={100}>
      <section className="go-to flex">
        <img src={maninblue} className="w-full h-full responsive_img" alt="imgw" />
      </section>

      </Fade>
      <Fade bottom distance='30%' duration={2000} delay={100}>
      <section className="go-to-presence flex p-40 mx-auto">
        <img src={globalpresence} className="w-full h-full responsive_img" alt="imgw" />
      </section>
      </Fade>
    </>
  );
};

// export default Mentor;
