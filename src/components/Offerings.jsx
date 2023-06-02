// import React from "react";
// import "./offerings.css";
// import Offeringsimg from "../assets/rectangle.png";
// import { Link } from "react-router-dom";

// const Offerings = () => {
//   return (
//     <div>
//       <div className="offerings-parent-container">
//         <p className="offerings-primary-heading"> <b>Our Offerings</b> </p>
//         <br />
//         <div className="offerings-secondary-heading">Connecting with leaders across the GLOBE</div>
//         <br />
//         <div className="offerings-primary-text">
//           <p className="offerings-text1">
//             A first of its kind integrated global matchmaking platform to bring
//             aspiring entrepreneurs, start-ups, mentors, investors, non-profits
//             and philanthropists together to build a thriving community of
//             entrepreneurship. We focus on ideas where technology, talent and
//             capital can unlock long- term value and drive business growth.
//           </p>
//         </div>
//         <div className="offeringsbutton-container">
//           <Link to="/mentor-connect">
//             <button className="mentorconnect">Mentor Connect</button>
//           </Link>
//           <Link to="/investor-connect">
//             <button className="investorconnect">Investor Connect</button>
//           </Link>
//           <Link to="/grant-connect">
//             <button className="grantsconnect">Grants Connect</button>
//           </Link>
//         </div>
//         <div className="offerings-rectangle-box">
//           <div className="offerings-box-content">
//             <div className="offerings-left-content">
//               <img src={Offeringsimg} alt="" className="offeringsimg1" />
//               <div className="case-study-container">
//                 <div className="case-study-title">
//                   <p>
//                     <b>Case Study</b>
//                   </p>
//                 </div>

//                 <div className="case-study-heading">
//                   Journey to $ 100K with CCL
//                 </div>
//                 <Link to="/">
//                   <button className="case-study-button">Read Story</button>
//                 </Link>
//               </div>
//             </div>
//             <div className="offerings-right-content">
//               <div className="offerings-right-primary-title">
//                 What is Mentor Connect
//               </div>
//               <br />
//               <div className="offerings-right-primary-heading">
//               Get Access to 1-on-1 Mentorship Sessions
//               </div>
//               <br />
//               <div className="offerings-right-primary-text">

//                   Get Access to one-on-one mentorship sessions to accelerate
//                   your journey with sector-specific (health tech, ed-tech etc) &
//                   cross sector (marketing, branding, legal services etc.) vetted
//                   experts.

//               </div>
//               <div className="offerings-right-button-container">
//                 <Link to="/mentor">
//                   <button className="findmentor">Find Mentor</button>
//                 </Link>
//                 <Link to="/mentor-connect">
//                   <button className="becomementor"> Become Mentor</button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Offerings;

import React from "react";
import "./offerings.css";
import Offeringsimg from "../assets/rectangle.png";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Offerings = () => {
  return (
    <Fade top distance='2%' delay={100} duration={1000}>
    <div className="offerings-parent-container">
      <p className="offerings-primary-heading font-bold">
        <b>Our Offerings</b>
      </p>
      <br />
      <div className="offerings-secondary-heading">
        Connecting with leaders across the GLOBE
      </div>
      <br />
      <div className="offerings-primary-text">
        <p className="offerings-text1">
          A first of its kind integrated global matchmaking platform to bring
          aspiring entrepreneurs, start-ups, mentors, investors, non-profits and
          philanthropists together to build a thriving community of
          entrepreneurship. We focus on ideas where technology, talent and
          capital can unlock long-term value and drive business growth.
        </p>
      </div>
      <div className="offeringsbutton-container flex flex-col md:flex-row">
        <Link to="/mentor-connect">
          <button className="mentorconnect hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
            Mentor Connect
          </button>
        </Link>
        <Link to="/investor-connect">
          <button className="investorconnect hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
            Investor Connect
          </button>
        </Link>
        <Link to="/grant-connect">
          <button className="grantsconnect hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
            Grants Connect
          </button>
        </Link>
      </div>
      <div className="offerings-rectangle-box mt-8">
        <div className="offerings-box-content flex flex-col md:flex-row">
          <div className="offerings-left-content">
            <img src={Offeringsimg} alt="" className="offeringsimg1" />
            <div className="case-study-container">
              <div className="case-study-title">
                <p>
                  <b>Case Study</b>
                </p>
              </div>
              <div className="case-study-heading">
                Journey to $ 100K with CCL
              </div>
              <Link to="/">
                <button className="case-study-button hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
                  Read Story
                </button>
              </Link>
            </div>
          </div>
          <div className="offerings-right-content">
            <div className="offerings-right-primary-title text-xl">
              What is Mentor Connect
            </div>
            <br />
            <div className="offerings-right-primary-heading text-lg">
              Get Access to 1-on-1 Mentorship Sessions
            </div>
            <br />
            <div className="offerings-right-primary-text">
              Get Access to one-on-one mentorship sessions to accelerate your
              journey with sector-specific (health tech, ed-tech etc) & cross
              sector (marketing, branding, legal services etc.) vetted experts.
            </div>
            <div className="offerings-right-button-container mt-4">
              <Link to="/mentor">
                <button className="findmentor hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
                  Find Mentor
                </button>
              </Link>
              <Link to="/mentor-connect">
                <button className="becomementor hover:bg-blue-600 text-black font-bold py-2 px-4 rounded">
                  Become Mentor
                </button>
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
