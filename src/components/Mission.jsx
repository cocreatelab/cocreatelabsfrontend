import React from "react";
import "./mission.css";
import mission from "../assets/mission (2).png";
import vision from "../assets/vision (2).png";

const Mission = () => {
  return (
    <>
      <div className="mission-parent-container">
        <div className="mission-content-container">

          <div className="container mission-content">
            <div className="container mission-left-content">
              <h6>Our Mission </h6>
              <h3>Inspire, Innovate, Share</h3>
              <p>
                Building a thriving community of mentors, investors,
                entrepreneurs, startups, evangelists and nonprofits through our
                integrated platform vis-à-vis 3 verticals of our company: Mentor
                Connect, Investor Connect & Grants Connect.
              </p>
            </div>
            <div className="container mission-right-content">
              <img src={mission} alt="" class="img-fluid" />
            </div>
          </div>

          <div className="container mission-content">
            <div className="container mission-left-content1">
              <img src={vision} alt="" />
            </div>
            <div className="container mission-right-content1">
              <h6>Our Vision</h6>
              <h3>Laser focus</h3>
              <p>
                Democratizing access to global expertise and funding
                opportunities for aspiring entrepreneurs, startups, and
                nonprofits.
              </p>
            </div>
            <div className="container mission-left-content12">
              <img src={vision} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
