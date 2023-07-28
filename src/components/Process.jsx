import React from "react";
import "./process.css";
import Processbanner from "../assets/process.png";
import Lineicon from "../assets/lineicon.png";
import { Fade } from "react-reveal";

const Process = () => {
  return (
    <>
      <div className="container process-parent-container">
        <div className="process-top-container">
        <h6 className="container">OUR CORE VALUES</h6>
        <div className="process-top-content">
          <div className="container process-top-left-content">
            <h2>Goal focused</h2>
            <p>
              Our Goal is to Build an equitable, inclusive, sustainable, and
              integrity-inspired global entrepreneurial ecosystem.
            </p>
          </div>
          <div className="container process-top-right-content">
            <h2>
              Continuous improvement
            </h2>
            <p>
              We are committed to continuous improvement as an ongoing process
              for all the members of the CCL community. By continuously striving
              to improve, and providing the best possible experience for all our
              stakeholders, we also set a benchmark for startups to create a
              competitive advantage and achieve their goals.
            </p>
          </div>
        </div>
        </div>
        <div className="process-middle-container">
          <img src={Processbanner} alt="" />
        </div>


        <div className="process-bottom-conntainer">
          <h2>
            The process we follow
          </h2>
          <div className="container process-bottom-content-container">
            <div className="container bottom-content">
              <img src={Lineicon} alt="" />
              <h6>
                Registration
              </h6>
              <p>
                Mentor or Founder, register with us. Delivering value or seeking
                value, we would love to hear from you either ways.
              </p>
            </div>
            <div className="container bottom-content">
              <img src={Lineicon} alt="" />
              <h6>
                Selection
              </h6>
              <p>Get a call from our team for a quick chat.</p>
            </div>
            <div className="container bottom-content">
              <img src={Lineicon} alt="" />
              <h6>
                Onboarding
              </h6>
              <p>
                Once selected, come on board. Join the CCL community.
              </p>
            </div>
            <div className="container bottom-content">
              <img src={Lineicon} alt="" />
              <h6>
                Value Creation
              </h6>
              <p>
                Create a ripple. Add value. Translate an idea into a scalable
                business. Make an impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
