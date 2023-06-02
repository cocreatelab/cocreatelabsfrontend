import React from "react";
import "./credit.css";
import Iphone from "../assets/iPhones.png";
import teamimg from "../assets/teamimg.png"
const Credit = () => {
  return (
    <div className="credit-parent-container">
      <div className="credit-left-container">
        <div className="credit-heading-left-container">
          <h3>
            We recognize that your <wrap>time</wrap> is the most expensive
            capital in your startup
          </h3>
        </div>
        <div className="credit-para-left-container">
          <p>
            We introduce a unique credit system so that all this is accessible
            with ease to the busy founding team.
          </p>
        </div>
        <div className="credit-icon-left-container">
          <div className="credit-icon1-left-container">
            <p>✔&nbsp; &nbsp; CCL Credits</p>
            <p>&nbsp;&nbsp;✔&nbsp; &nbsp;  Easy to use</p>
          </div>
          <div className="credit-icon2-left-container">
            <p>✔&nbsp; &nbsp; Access (global experts)</p>
            <p>✔&nbsp; &nbsp;&nbsp;No hidden cost</p>
          </div>
        </div>
        <div className="credit-para2-left-container">
          <p>
            Buy credit with Co-Create Labs and pre book sessions with leaders
            across the globe and begin your entrepreneurial journey with
            guidance & validation!
          </p>
        </div>
        <div className="credit-button-left-container flex gap-3">
          <form className="apply-button">
            <button type="submit" className="Apply-Now rounded-full">
              Apply Now
            </button>
          </form>
          <a href="#/"  className="font-medium text-base leading-6 text-center text-blue-500">
            Avail Free Credits
            </a>
        </div>
      </div>
      <div className="credit-right-container">
        <img src={Iphone} alt="" className="iphone-icon" />
      </div>
    </div>
  );
};

export default Credit;

