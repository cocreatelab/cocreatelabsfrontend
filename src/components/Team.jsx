import React from "react";
import teamimg from "../assets/teamimg.png"
import "./team.css";
const Team = () => {
  return (
    <>
      <div className="team-parent-container">
        {/* <div className="team-top-container">
          <h5>
            <b>Our Team</b>
          </h5>
          <h2>
            <b>KNOWLEDGE, DEEP EXPERIENCE & DIVERSITY</b>
          </h2>
          <div className="top-primary-text">
            <p>
              At Co Create Labs, we bring our individual expertise and
              collective knowledge to help entrepreneurs thrive, investors find
              value & philanthropists create impact.
            </p>
            <p>
              Over the years,  we have worked across a range of industries and
              across small, medium size and large organizations. We leverage
              this pan-industry and vast organizational experience to create
              extraordinary value for all our stakeholders.
            </p>
          </div>
        </div>
        <team-img-container>
            <div className="team-img">
                <img src="" alt="" />
                <div className="member-info">
                    <img src="" alt="" />
                    <p><b>Coriss Ambady</b></p>
                    <p>Web Developer</p>
                </div>
            </div>
        </team-img-container> */}
        <img src={teamimg} alt="" class="w-full"/>
        {/* <div className="team-bottom-container bg-indigo-700 h-36 text-center" mt-10>
          <p class="font-sans font-normal font-medium text-2xl leading-8 capitalize text-white">What are you waiting for? Start your growth today!</p>
        </div> */}
      </div>
    </>
  );
};

export default Team;
