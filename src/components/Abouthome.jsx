// import React from "react";
// import "./abouthome.css";
// import Aboutbanner from "../assets/Aboutbanner.png";
// import People from "../assets/People.png";
// import Fist from "../assets/Fist.png";

// function Abouthome() {
//   return (
//     <>
//       <div className="about-header-parent-conatiner">
//         <div className="about-header-left-container">
//           <div className="about-home-main-heading">
//             <h1>
//               About CCL
//             </h1>
//             <h4>A game-changer in the startup ecosystem</h4>
//           </div>
//           <div className="about-home-primary-text">
//             <p>
//               It enables access to a global platform that brings together the
//               best and brightest entrepreneurs, investors, mentors, and
//               philanthropic organizations in an integrated ecosystem.
//             </p>
//             <p>
//               With a network of world-class mentors from companies like Meta,
//               Netflix, Uber, Shell, and Harvard University, along with the World
//               Bank and OECD, and other multi-laterals, Co Create Labs is set to
//               revolutionize the way start-ups are launched and grown.
//             </p>
//           </div>
//           <div about-home-apply-btn>
//             <button className="apply-btn">Apply Now</button>
//           </div>
//           <div className="about-slogan-conatiner">
//             <div className="about-slogan">
//               <img src={Fist} alt="" />
//               <h3>EMPOWER</h3>
//               <p>
//                 Empowering the world’s best entrepreneurs through all stages of
//                 their growth with mentorship, funds and services.
//               </p>
//             </div>
//             <div className="about-slogan">
//               <img src={People} alt="" />
//               <h3>COMMUNITY</h3>
//               <p>
//                 Connecting the investors with a curated list of impactful &
//                 investment ready startups.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="about-header-right-container">
//           <img src={Aboutbanner} alt="" />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Abouthome;


import React from "react";
import "./abouthome.css";
import Aboutbanner from "../assets/Aboutbanner.png";
import People from "../assets/People.png";
import Fist from "../assets/Fist.png";

function Abouthome() {
  return (
    <>
      <div className="about-header-parent-conatiner">
        <div className="about-header-left-container">
          <div className="about-home-main-heading">
            <h1 className="text-4xl lg:text-6xl">
              About CCL
            </h1>
            <h4 className="text-lg lg:text-xl">A game-changer in the startup ecosystem</h4>
          </div>
          <div className="about-home-primary-text">
            <p className="text-sm lg:text-base">
              It enables access to a global platform that brings together the
              best and brightest entrepreneurs, investors, mentors, and
              philanthropic organizations in an integrated ecosystem.
            </p>
              <br />
            <p className="text-sm lg:text-base">
              With a network of world-class mentors from companies like Meta,
              Netflix, Uber, Shell, and Harvard University, along with the World
              Bank and OECD, and other multi-laterals, Co Create Labs is set to
              revolutionize the way start-ups are launched and grown.
            </p>
          </div>
          <div className="about-home-apply-btn">
            <button className="apply-btn text-white py-4 px-5 rounded-full">
              Apply Now
            </button>
          </div>
          <div className="about-slogan-conatiner">
            <div className="about-slogan">
              <img src={Fist} alt="" className="w-8 h-8 lg:w-12 lg:h-12" />
              <h3 className="text-xl lg:text-2xl">EMPOWER</h3>
              <p className="text-sm lg:text-base">
                Empowering the world’s best entrepreneurs through all stages of
                their growth with mentorship, funds, and services.
              </p>
            </div>
            <div className="about-slogan">
              <img src={People} alt="" className="w-8 h-8 lg:w-12 lg:h-12" />
              <h3 className="text-xl lg:text-2xl">COMMUNITY</h3>
              <p className="text-sm lg:text-base">
                Connecting the investors with a curated list of impactful &
                investment-ready startups.
              </p>
            </div>
          </div>
        </div>
        <div className="about-header-right-container">
          <img src={Aboutbanner} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
}

export default Abouthome;
