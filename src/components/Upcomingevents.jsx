import React from "react";
import eventimg1 from "../assets/eventimg1.png";
import "./upcomingevents.css";
import imgh1 from "../assets/Group 12.png";
import imgh2 from "../assets/Group 13.png";
import imgh3 from "../assets/Group 14.png";

const Upcomingevents = () => {
  return (
    <div>
      <div className="events-parent-container">
      <div className="upcomingevents-container">
          <div className="event-primary-heading">
            <h3>
              Upcoming Events
            </h3>
          </div>
          <div className="event-primary-title">
            <p>
              Co Create Events are a great opportunity to meet investors,
              mentors and community and connect with the right kind of people
              from diverse domains.
            </p>
          </div>
        </div>

        <div className="event-card-container flex flex-wrap">
        <img className="w-70 transform scale-100 hover:scale-105" src={imgh1} alt="" />
        <img className="w-70 transform scale-100 hover:scale-105" src={imgh2} alt="" />
        <img className="w-70 transform scale-100 hover:scale-105" src={imgh3} alt="" />
        </div>
        
        <div className="events-button-container">
          <button className="loadmore">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Upcomingevents;
