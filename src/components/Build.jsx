import React from "react";
import "./build.css";
import Knitting from "../assets/Knitting.png";
import Fade from "react-reveal/Fade";

const Build = () => {
  return (
    <>
      <div className="build-parent-container">
        <div className="build-left-content">
        <Fade top distance='20' duration={100} delay={1000}>
          <h1>Build Connections that help you grow your business</h1>
          <div className="build-primary-text">
            <p>Co - Create Labs is a one of a kind ecosystem of global leaders and
            founders that <span className="text-blue-700">connect businesses, people, expertise and funds.</span> </p>
            </div>
            <p class="font-sans font-normal font-bold text-base leading-normal text-[rgba(23,20,57,1)] mix-blend-normal">All this is within your reach today.</p>
          <div className="build-left-btn-container">
            <button>Explore Connects</button>
            <button>Learn More</button>
          </div>
          </Fade>
        </div>
        <div className="build-right-content">
          <img src={Knitting} alt="" />
        </div>
      </div>
    </>
  );
};

export default Build;
