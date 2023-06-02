// import React from "react";
// import icon1 from "../assets/Icon.png";
// import icon2 from "../assets/Icon1.png";
// import icon3 from "../assets/Icon2.png";
// import Banner from "../assets/banner1.png";
// import Banner2 from "../assets/banner2.png";
// import Banner3 from "../assets/manworking.png";
// import "./whyjoin.css";

// const Whyjoin = () => {
//   return (
//     <div className="whyjoin-container">
//       <div className="join-primary-heading">
//           Why Join <br /> 
//           Co-Create Labs?
//       </div>

//       <div className="card-container">
//         <div className="card">
//           <img src={icon1} alt="" />
//           <h2>Connections</h2>
//         </div>
//         <div className="card">
//           <img src={icon2} alt="" />
//           <h2>Growth</h2>
//         </div>
//         <div className="card">
//           <img src={icon3} alt="" />
//           <h2>Community</h2>
//         </div>
//       </div>
      

      
//       <div className="whyjoin-parent-container">
//         <div className="join-parent-conatainer">
//           <div className="join-text-section">
//             <div className="join-primary-title">
//               <h4>Connections</h4>
//             </div>
//             <div className="join-primary-text">
//               <b>
//                 {" "}
//                 Connect with
//                 <span className="join-text-primary">
//                   {" "}
//                   global impact makers{" "}
//                 </span>{" "}
//                 and achieve excellence in all spheres of{" "}
//                 <span className="join-text-primary">
//                   business & personal development
//                 </span>{" "}
//               </b>
//             </div>
//             <div className="join-primary-text1">
//               Our global reach and network can help you discover and forge
//               meaningful connections for mentorship, fundraise, growth and
//               propel you on a journey of personal and professional evolution.
//             </div>
//           </div>
//           <div className="join-img-section">
//             <img src={Banner} alt="" className="responsive-imag" />
//           </div>
//         </div>
        
//         <div className="join-parent-conatainer2">
//           <div className="join-img-section">
//             <img src={Banner2} alt="" className="responsive-imag"/>
//           </div>
//           <div className="join-text-section">
//             <div className="join-primary-title">
//               <h4>Growth</h4>
//             </div>
//             <div className="join-primary-text">
//               <b>
//                 Master Your Craft & Grow With
//                 <span className="join-text-primary">
//                   {" "}
//                   Every Mentoring Interaction{" "}
//                 </span>{" "}
//               </b>
//             </div>
//             <div className="join-primary-text1">
//               Find opportunities to expand your skills and explore new avenues
//               of development with amazing outcomes. Seek and get support from a
//               thriving ecosystem of like minded people.
//             </div>
//           </div>
//         </div>

//         <div className="join-parent-conatainer">
//           <div className="join-text-section">
//             <div className="join-primary-title">
//               <h4>Community</h4>
//             </div>
//             <div className="join-primary-text">
//               <b>
//                 {" "}
//                 Be Part Of A
//                 <span className="join-text-primary"> Caring Community </span> ,
//                 develop key{" "}
//                 <span className="join-text-primary">
//                   Social/Business Relationships & Opportunities
//                 </span>{" "}
//               </b>
//             </div>
//             <div className="join-primary-text1">
//               Level up your startup with a world class community that supports
//               you in pursuing your dream of building value driven business.
//             </div>
//           </div>
//           <div className="join-img-section">
//             <img src={Banner3} alt="" className="responsive-imag"/>
//           </div>
//         </div>
//       </div>



//     </div>
//   );
// };

// export default Whyjoin;


import React from "react";
import icon1 from "../assets/Icon.png";
import icon2 from "../assets/Icon1.png";
import icon3 from "../assets/Icon2.png";
import Banner from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/manworking.png";
import "./whyjoin.css";
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Group2549 from "../assets/Group 2549.png"
import Growth from "../assets/Growth.png";
import Community from "../assets/Community.png";

const Whyjoin = () => {
  return (
    
    <div className="whyjoin-container">
      <Fade bottom distance='20%' duration={1000} delay={100}>
      <div className="join-primary-heading text-center mt-2 md:mt-7">
        Why Join <br /> Co-Create Labs?
      </div>

      
      <div className="card-container flex  justify-center mt-4 md:mt-10">
        <div className="card flex flex-col items-center mx-4 my-6 md:my-8">
          <img src={icon1} alt="" className="w-16 h-16" />
          <h2 className="text-xl md:text-2xl mt-2">Connections</h2>
        </div>
        <div className="card flex flex-col items-center mx-4 my-6 md:my-8">
          <img src={icon2} alt="" className="w-16 h-16" />
          <h2 className="text-xl md:text-2xl mt-2">Growth</h2>
        </div>
        <div className="card flex flex-col items-center mx-4 my-6 md:my-8">
          <img src={icon3} alt="" className="w-16 h-16" />
          <h2 className="text-xl md:text-2xl mt-2">Community</h2>
        </div>
      </div>
      
      <div className="whyjoin-parent-container mt-12 md:mt-8">
      <Fade bottom distance='20%' duration={1000} delay={100}>
      
         <div className="join-parent-conatainer flex flex-col md:flex-row">
          <div className="join-text-section w-full md:w-1/2 h-full md:h-1/2 text-center md:text-left">
            <div className="join-primary-title">
              <h4 className="">Connections</h4>
            </div>
            <div className="join-primary-text mt-4">
              <b>
                Connect with
                <span className="join-text-primary">
                  {" "}
                  global impact makers{" "}
                </span>{" "}
                and achieve excellence in all spheres of{" "}
                <span className="join-text-primary">
                  business & personal development
                </span>{" "}
              </b>
            </div>
            <div className="join-primary-text1 mt-4">
              Our global reach and network can help you discover and forge
              meaningful connections for mentorship, fundraising, growth, and
              propel you on a journey of personal and professional evolution.
            </div>
          </div>
          <div className="join-img-section w-full md:w-1/2">
            <img src={Banner} alt="" className="responsive-img" />
          </div>
        </div>

          {/* <div className="image-console"><img src={Group2549} alt="" /></div> */}

        <div className="join-parent-conatainer2 flex flex-col md:flex-row">
          <div className="join-img-section w-full md:w-1/2">
            <img src={Banner2} alt="" className="responsive-img" />
          </div>
          <div className="join-text-section w-full h-full md:h-1/2 md:w-1/2 text-center md:text-left">
            <div className="join-primary-title">
              <h4 className="">Growth</h4>
            </div>
            <div className="join-primary-text mt-4">
              <b>
                Master Your Craft & Grow With
                <span className="join-text-primary">
                  {" "}
                  Every Mentoring Interaction{" "}
                </span>{" "}
              </b>
            </div>
            <div className="join-primary-text1 mt-4">
              Find opportunities to expand your skills and explore new avenues
              of development with amazing outcomes. Seek and get support from a
              thriving ecosystem of like-minded people.
            </div>
          </div>
        </div>

        <div className="join-parent-conatainer flex flex-col md:flex-row">
          <div className="join-text-section w-full md:w-1/2 text-center md:text-left">
            <div className="join-primary-title">
              <h4 className="">Community</h4>
            </div>
            <div className="join-primary-text mt-4">
              <b>
                {" "}
                Be Part Of A
                <span className="join-text-primary"> Caring Community </span> ,
                develop key{" "}
                <span className="join-text-primary">
                  Social/Business Relationships & Opportunities
                </span>{" "}
              </b>
            </div>
            <div className="join-primary-text1 mt-4">
              Level up your startup with a world-class community that supports
              you in pursuing your dream of building a value-driven business.
            </div>
          </div>
          <div className="join-img-section w-full md:w-1/2">
            <img src={Banner3} alt="" className="responsive-img" />
          </div>
        </div> 
        </Fade>
      </div>
      </Fade>  
    </div>
    
  );
};

export default Whyjoin;
