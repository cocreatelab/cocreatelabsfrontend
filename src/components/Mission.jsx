import React from "react";
import "./mission.css";
import mission from "../assets/mission.png";
import vision from "../assets/vision.png";

const Mission = () => {
  return (
    <>
      <div className="mission-parent-container">
        <div className="mission-content-container">
          <div className="mission-content">
            <div className="mission-left-content">
              <b>
                <h6>Our Mission </h6>
              </b>
              <h3>Inspire, Innovate, Share</h3>
              <p>
                Building a thriving community of mentors, investors,
                entrepreneurs, startups, evangelists and nonprofits through our
                integrated platform vis-à-vis 3 verticals of our company: Mentor
                Connect, Investor Connect & Grants Connect.
              </p>
            </div>
            <div className="mission-right-content">
              <img src={mission} alt="" />
            </div>
          </div>

          <div className="mission-content">
            <div className="mission-left-content1">
              <img src={vision} alt="" />
            </div>
            <div className="mission-right-content1">
              <b>
                <h6>Our Mission </h6>
              </b>
              <h3>Inspire, Innovate, Share</h3>
              <p>
                Building a thriving community of mentors, investors,
                entrepreneurs, startups, evangelists and nonprofits through our
                integrated platform vis-à-vis 3 verticals of our company: Mentor
                Connect, Investor Connect & Grants Connect.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
