import React from "react";
import "./credit.css";
import Iphone from "../assets/iPhones.png";
import teamimg from "../assets/teamimg.png"
const Credit = () => {
  return (
    <div className="container credit-parent-container">
      <div className="container credit-left-container">
          <h3>
            We recognize that your <wrap>time</wrap> is the most expensive
            capital in your startup
          </h3>
          <p>
            We introduce a unique credit system so that all this is accessible
            with ease to the busy founding team.
          </p>
        
        <div className="container credit-icon-left-container">
          <div className="credit-icon1-left-container">
            <p>✔ CCL Credits</p>
            <p>✔ Easy to use</p>
          </div>
          <div className="credit-icon2-left-container">
            <p>✔ Access (global experts)</p>
            <p>✔ No hidden cost</p>
          </div>
        </div>
        
          <p className="text1">
            Buy credit with Co-Create Labs and pre book sessions with leaders
            across the globe and begin your entrepreneurial journey with
            guidance & validation!
          </p>
        
        <div className="credit-button-left-container">
          
            <button type="submit" className="Apply-Now rounded-full">
              Apply Now
            </button>
          
          <a href="#/"  className="font-medium text-base leading-6 text-center text-blue-500">
            Avail Free Credits
            </a>
        </div>
      </div>
      <div className="container credit-right-container">
        <img src={Iphone} alt="" class="img-fluid" />

        <p className="text2">
            Buy credit with Co-Create Labs and pre book sessions with leaders
            across the globe and begin your entrepreneurial journey with
            guidance & validation!
          </p>
        
        <div className="credit-button-left-container1">
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


      
    </div>
  );
};

export default Credit;

