// import React from 'react'
// import "./bluerectangle.css";
// import Doticon from "../assets/Doticon.png";
// import Doticon1 from "../assets/Dottedshape.png";
// import Ayro from "../assets/Ayro.png";
// import Graygrids from "../assets/GrayGrids.png";
// import Lineicons from "../assets/LineIcons.png";
// export const Bluerectangle = () => {
//   return (
//     <div>
//         <div className="blue-rectangle-parent-container">
//         <div className="blue-rectangle-left-icon">
//                     <img src={Doticon} alt="" />
//                 </div>
//             <div className="blue-rectangle-content">
                
//                 <div className="blue-rectangle-contentchild">
//                     <div className="blue-left-content">
//                             <h2>Our Amazing News from Around The World</h2>
//                     </div>
//                     <div className="blue-right-content">
//                         <img src={Graygrids} alt="" />
//                         <img src={Lineicons} alt="" />
//                         <img src={Ayro} alt="" />
//                     </div>

//                 </div>
//             </div>
//             <div className="blue-rectangle-right-icon">
//                 <img src={Doticon1} alt="" />
//                 </div>
//         </div>
//     </div>
//   )
// }


import React from 'react';
import './bluerectangle.css';
import Doticon from '../assets/Doticon.png';
import Doticon1 from '../assets/Dottedshape.png';
import Ayro from '../assets/Ayro.png';
import Graygrids from '../assets/GrayGrids.png';
import Lineicons from '../assets/LineIcons.png';

export const Bluerectangle = () => {
  return (
    <div>
      <div className="blue-rectangle-parent-container">
        <div className="blue-rectangle-left-icon">
          <img src={Doticon} alt="" />
        </div>
        <div className="blue-rectangle-content">
          <div className="blue-rectangle-contentchild">
            <div className="blue-left-content">
              <h2 className="text-xl md:text-2xl">Our Amazing News from Around The World</h2>
            </div>
            <div className="blue-right-content">
              <img className="w-1/3 md:w-auto" src={Graygrids} alt="" />
              <img className="w-1/3 md:w-auto" src={Lineicons} alt="" />
              <img className="w-1/3 md:w-auto" src={Ayro} alt="" />
            </div>
          </div>
        </div>
        <div className="blue-rectangle-right-icon">
          <img src={Doticon1} alt="" />
        </div>
      </div>
    </div>
  );
};
