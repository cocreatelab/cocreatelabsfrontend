import React from "react";
// import eventimg1 from "../assets/eventimg1.png";
import "./upcomingevents.css";
import imgh1 from "../assets/Group 12.png";
import imgh2 from "../assets/Group 13.png";
import imgh3 from "../assets/Group 14.png";

const Upcomingevents = () => {
  return (
    <div>
      <div className="events-parent-container overflow-hidden">
        <div className="upcomingevents-container">
          <div className="event-primary-heading">
            <h3>Upcoming Events</h3>
          </div>
          <div className="event-primary-title">
            <p>
              Co Create Events are a great opportunity to meet investors,
              mentors and community and connect with the right kind of people
              from diverse domains.
            </p>
          </div>
        </div>

        <div className="event-card-container flex flex-wrap flex-row">
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7076850441052958720/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-70 transform scale-100 hover:scale-105"
              src={imgh1}
              alt=""
              // class="img-fluid"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/co-create-lab/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-70 transform scale-100 hover:scale-105"
              src={imgh2}
              alt=""
              // class="img-fluid"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/co-create-lab/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-70 transform scale-100 hover:scale-105"
              src={imgh3}
              alt=""
              // class="img-fluid"
            />
          </a>
        </div>

        <div className="events-button-container">
        <a
            href="https://twitter.com/cocreatelabs1"
            target="_blank"
            rel="noreferrer"
          ><button className="loadmore">Learn More</button></a>
        </div>
      </div>
    </div>
  );
};

export default Upcomingevents;
