import React from "react";
import "./abouthome.css";
import Aboutbanner from "../assets/Aboutbanner.png";
import People from "../assets/People.png";
import Fist from "../assets/Fist.png";

function Abouthome() {
  return (
    <>
      <div className="about-header-parent-conatiner">
        <div className="container about-header-left-container">
          <div className="container about-home-main-heading">
            <h1 className="text-4xl lg:text-6xl">
              About CCL
            </h1>
            <h4 className="text-lg lg:text-xl">A game-changer in the startup ecosystem</h4>
          </div>
          <div className="container about-header-right-container1">
          <img src={Aboutbanner} alt="" className="w-full" />
        </div>
          <div className="container about-home-primary-text">
            <p className="">
              It enables access to a global platform that brings together the
              best and brightest entrepreneurs, investors, mentors, and
              philanthropic organizations in an integrated ecosystem.
            </p>
              <br />
              <br />
            <p className="">
              With a network of world-class mentors from companies like Meta,
              Netflix, Uber, Shell, and Harvard University, along with the World
              Bank and OECD, and other multi-laterals, Co Create Labs is set to
              revolutionize the way start-ups are launched and grown.
            </p>
          </div>
          <div className="about-home-apply-btn">
            <button className="apply-btn">
              Apply Now
            </button>
          </div>
          <div className="container about-slogan-conatiner">
            <div className="about-slogan">
              <img src={Fist} alt="" className="" class="img-fluid" />
              <h3 className="text-xl lg:text-2xl">EMPOWER</h3>
              <p className="text-sm lg:text-base">
                Empowering the world’s best entrepreneurs through all stages of
                their growth with mentorship, funds, and services.
              </p>
            </div>
            <div className="about-slogan">
              <img src={People} alt="" className="" class="img-fluid" />
              <h3 className="text-xl lg:text-2xl">COMMUNITY</h3>
              <p className="text-sm lg:text-base">
                Connecting the investors with a curated list of impactful &
                investment-ready startups.
              </p>
            </div>
          </div>
        </div>
        <div className="container about-header-right-container">
          <img src={Aboutbanner} alt="" className="w-full"/>
        </div>
      </div>
    </>
  );
}

export default Abouthome;
