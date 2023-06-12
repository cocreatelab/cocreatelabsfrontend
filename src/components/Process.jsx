import React from "react";
import "./process.css";
import Processbanner from "../assets/process.png";
import Lineicon from "../assets/lineicon.png";
import { Fade } from "react-reveal";

const Process = () => {
  return (
    <>
      <div className="process-parent-container">
        <div className="process-top-container">
          <div className="process-top-left-content">
            <h6 class="font-sans font-normal font-medium text-base leading-9 text-center text-blue-800">
              OUR CORE VALUES
            </h6>
            <h2 class="font-sans font-normal font-bold text-4xl leading-14 text-blue-1000">
              Goal focused
            </h2>
            <p class="font-dm-sans font-normal font-normal text-base leading-7 text-dark-blue">
              Our Goal is to Build an equitable, inclusive, sustainable,
              <p class="font-dm-sans font-normal font-normal text-base leading-7 text-dark-blue">
                {" "}
                and integrity-inspired global entrepreneurial ecosystem.
              </p>
            </p>
          </div>
          <div className="process-top-right-content">
            <h3 class="font-sans font-normal font-bold text-4xl leading-14 text-blue-1000">
              Continuous improvement
            </h3>
            <p class="font-dm-sans font-normal font-normal text-base leading-7 text-dark-blue">
              We are committed to continuous improvement as an ongoing process
              for all the members of the CCL community. By continuously striving
              to improve, and providing the best possible experience for all our
              stakeholders, we also set a benchmark for startups to create a
              competitive advantage and achieve their goals.
            </p>
          </div>
        </div>
        <div className="process-middle-container">
          <img src={Processbanner} alt="" />
        </div>
        <div className="process-bottom-conntainer">
          <h2 class="font-sans font-normal font-semibold text-6xl leading-16 text-blue-900">
            The process we follow
          </h2>
          <div className="process-bottom-content-container">
            <div className="bottom-content">
              <img src={Lineicon} alt="" />
              <h6>
                <b>Registration</b>
              </h6>
              <p>
                Mentor or Founder, register with us. Delivering value or seeking
                value, we would love to hear from you either ways.
              </p>
            </div>
            <div className="bottom-content mt mr-10">
              <img src={Lineicon} alt="" />
              <h6 class="font-sans font-normal font-medium text-lg leading-9 text-blue-900">
              Selection
              </h6>
              <p class="w-80">Get a call from our team for a quick chat.</p>
            </div>
            <div className="bottom-content">
              <img src={Lineicon} alt="" />
              <h6 class="font-sans font-normal font-medium text-lg leading-9 text-blue-900">
              Onboarding 
              </h6>
              <p class="w-80">Once selected, come on board. Join the CCL  community.</p>
            </div>
            <div className="bottom-content">
              <img src={Lineicon} alt="" />
              <h6 class="font-sans font-normal font-medium text-lg leading-9 text-blue-900">
              Value Creation 
              </h6>
              <p class="5/6">Create a ripple. Add value. Translate an idea into a scalable business. Make an impact.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
