import React from "react";
import "./offerings.css";
import Offeringsimg from "../assets/rectangle.png";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import single from "../assets/Single PF.png";
import single1 from "../assets/Single PF (1).png";

const Offerings = () => {
  return (
    <Fade top distance="2%" delay={100} duration={1000}>
      <div className="container offerings-parent-container">
        <p className="offerings-primary-heading">
          Our Offerings
        </p>
        <br />
        <div className="offerings-secondary-heading">
          Connecting with{" "}
          <span className="blue__text">
            leaders across the GLOBE
          </span>
        </div>
        <br />
        <div className="offerings-primary-text">
          <p>
            A first of its kind integrated global matchmaking platform to bring
            aspiring entrepreneurs, start-ups, mentors, investors, non-profits
            and philanthropists together to build a thriving community of
            entrepreneurship. We focus on ideas where technology, talent and
            capital can unlock long-term value and drive business growth.
          </p>
        </div>
        <div className="container offeringsbutton-container">
          <Link to="/mentor-connect">
            
            <button type="button" class="btn btn-primary rounded text-dark" className="mentorconnect">
              Mentor Connect
            </button>
          </Link>
          <Link to="/investor-connect">
            
            <button type="button" class="btn btn-primary rounded text-dark" className="investorconnect">
              Investor Connect
            </button>
          </Link>
          <Link to="/grant-connect">
            
            <button type="button" class="btn btn-primary rounded text-dark" className="grantsconnect">
              Grants Connect
            </button>
          </Link>
        </div>
        <div className="container offerings-rectangle-box mt-8">
          <div className="offerings-box-content">
            <div className="offerings-left-content">
              <Link to="/">
                <img
                  src={single}
                  alt=""
                  className="offeringsimg1"
                  class="img-fluid"
                />
              </Link>
              </div>
              <div className="offerings-left-content2">
              <Link to="/">
                <img
                  src={single1}
                  alt=""
                  className="offeringsimg2"
                  class="img-fluid"
                />
              </Link>
              </div>
          
            <div className="offerings-right-content">
              <div className="offerings-right-primary-title text-xl">
                What is Mentor Connect
              </div>
              <br />
              <div className="offerings-right-primary-heading">
                Get Access to 1-on-1 Mentorship Sessions
              </div>
              <br />
              <div className="offerings-right-primary-text">
                Get Access to one-on-one mentorship sessions to accelerate your
                journey with sector-specific (health tech, ed-tech etc) & cross
                sector (marketing, branding, legal services etc.) vetted
                experts.
              </div>
              <div className="offerings-right-button-container">
                <Link to="/mentor">
                 
                            <button type="button" class="btn btn-primary rounded"className="findmentor">Find Mentor</button>

                </Link>
                <Link to="/mentor-connect">
                  
                            <button type="button" class="btn btn-primary rounded" className="becomementor">Become Mentor</button>

                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Offerings;
