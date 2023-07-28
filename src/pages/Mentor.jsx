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
        <Fade bottom distance="30%" duration={1000} delay={100}>
          <div className="container mentor-parent-container">
            <div className="container mentor-content">
              <h1>
                Find mentors as invested in you, as you are in your business
              </h1>
              <p>Connect on your own schedule, from anywhere in the world.</p>
            </div>
          </div>
        </Fade>
      </section>

      <section className="mentor-welcome">
        <Fade bottom distance="30%" duration={1000} delay={100}>
          <div className="welcome-content">
            <p className="welcome-msg">WELCOME TO MENTOR CONNECT</p>
            <h1>The go-to platform for ambitious startups</h1>
            <p className="welcome-msg1">
              Looking to find and connect with experienced mentors who can help
              take their business to the next level?
            </p>

            <p className="welcome-msg1">
              Building a successful business is no easy feat. You face countless
              challenges, from developing a winning product to attracting and
              retaining customers, to managing cash flow and scaling your
              operations.{" "}
            </p>

            <p className="welcome-msg1">
              Our platform connects startups with vetted and experienced mentors
              who have a proven track record of success in a range of industries
              and functions.
            </p>
            <div className="welcome-btn-container">
            <button className="welcome-apply">Apply Now</button>
            <a href="">Explore Mentors</a>
            </div>
          </div>
        </Fade>
      </section>

      <Fade bottom distance="30%" duration={1000} delay={100}>
        <section className="go-to">
          <img src={howitworks} className="container"/>
        </section>
      </Fade>
      <Fade bottom distance="30%" duration={1000} delay={100}>
        <section className="go-to flex">
          <img
            src={maninblue}
            className=""
            alt="imgw"
          />
        </section>
      </Fade>
      <Fade bottom distance="30%" duration={2000} delay={100}>
        <section className="go-to-presence flex p-40 mx-auto">
          <img
            src={globalpresence}
            className="w-full h-full responsive_img"
            alt="imgw"
          />
        </section>
      </Fade>
    </>
  );
};

// export default Mentor;
