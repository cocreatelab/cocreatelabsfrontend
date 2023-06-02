// import React from "react";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import "./gettingstarted.css";
// import rightarrow from "../assets/line.png";

// const Gettingstarted = () => {
//   return (
//     <div>
//       <div className="section1">
//         <div className="getstarted-content">
//           <div className="text-section">
//             <h1>Find Your Next Dream Connect</h1>
//             <br />
//             <h2>Get started with us Sign up Today!</h2>
//           </div>
//           <div className="button-container">
//             <button id="btn1">
//               Sign Up{" "}
//               <span>
//                 <img src={rightarrow} alt="" />
//               </span>
//             </button>
//             <button id="btn2">Get Free Credit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gettingstarted;


import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./gettingstarted.css";
import rightarrow from "../assets/line.png";

const Gettingstarted = () => {
  return (
    <div className="bg-gray-200">
      <div className="section1 flex justify-center items-center">
        <div className="getstarted-content">
          <div className="text-section">
            <h1 className="text-4xl font-bold">Find Your Next Dream Connect</h1>
            <br />
            <h2 className="text-2xl">Get started with us Sign up Today!</h2>
          </div>
          <div className="button-container mt-8">
            <button
              id="btn1"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
            >
              Sign Up{" "}
              <span>
                <img src={rightarrow} alt="" />
              </span>
            </button>
            <button
              id="btn2"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Get Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gettingstarted;
