// import React from "react";
// import Card from "../components/cards";
// import mentor from "../assets/mentor.png";
// import map from "../assets/Bitmap.png";
// import profile from "../assets/profile.png";
// import "../CSS/mentor.css";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import welcome from "../assets/Welcome.png";
// import RegisterMentor from "../components/RegisterMentor";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import { useSelector } from "react-redux";
// import howitworks from "../assets/howitworks.png";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 500,
// };

// export const Mentor = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const user = useSelector((state) => state.user);

//   return (
//     <>
//       {/* Section 1 */}
//       <section className="welcome align-center mr-10">
//         <div className="d-flex flex-column justify-content-center h-100 align-items-center">
//           <h1 className="fw-bold welc mt-60 ml-80 mr-10">
//             Learn And Grow With Help From World-Class Mentors
//           </h1>
//           <p className="fs-5 pb-5 mb-5 text-center ml-80" style={{ width: "35%" }}>
//             Book and meet over 6,086+ mentors for 1:1 mentorship in our global
//             community.
//           </p>
//           <div
//             className="grp mx-auto rounded-5 mt-3 align-center"
//             style={{ borderRadius: "50px" }}>
//             <input
//               type="text"
//               className="py-3"
//               placeholder="Search by company, language or role"
//               aria-label="Search"
//             />
//             <span className="py-3">Expertise</span>
//             <span className="py-3">Country</span>
//             <Link to="/mentor">
//               <FontAwesomeIcon
//                 className="p-3  px-5 fw-bold fs-4 text-white"
//                 style={{
//                   backgroundColor: "rgb(74,144,226)",
//                   borderRadius: "50px",
//                 }}
//                 icon={faMagnifyingGlass}
//               />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Section 2 */}
//       <section className="go-to-platform">
//         <img src={welcome} className="w-100 responsive_img" alt="imgw" />
//       </section>

//       <section className="go-to">
//         <img src={howitworks} className="w-100 responsive_img" alt="imgw" />
//       </section>

//       {/* Section 3 */}
//       <section className="overflow-x-hidden position-relative">
//         <div className="session mx-auto my-5">
//           <div className="box"></div>
//           <div className="disc">
//             <div className="disc-int"></div>
//           </div>
//           <img className="profile" src={profile} alt="mentor" />
//           <div className="mx-5">
//             {/* <span style={{ color: "rgb(203,203,203)" }}>ABOUT US</span> */}
//             <h1 className="fw-bold">Book 1:1 Sessions</h1>
//             <h3 className="fw-normal">Game Changing Mentor</h3>
//             <p
//               className="flex-wrap text-break"
//               style={{ color: "rgb(154,161,171)" }}>
//               Our matching algorithm takes the guesswork out of finding the
//               right mentor for your needs. Simply tell us about your business
//               and what you're looking to achieve, and we'll connect you with
//               mentors who have the skills and experience to help you get there.
//             </p>
//             <p
//               className="flex-wrap text-break"
//               style={{ color: "rgb(154,161,171)" }}>
//               But we don't stop there.
//             </p>
//             <p
//               className="flex-wrap text-break"
//               style={{ color: "rgb(154,161,171)" }}>
//               Building a strong mentor-mentee relationship is key to success.
//               Mentor Connect offers a range of tools and resources to help
//               facilitate meaningful connections.
//             </p>
//             <p
//               className="flex-wrap text-break"
//               style={{ color: "rgb(154,161,171)" }}>
//               Personalized calls, progress tracking chats to regular check-ins
//               and feedback sessions, our platform is designed to ensure that you
//               and your mentor are in this growth journey together.
//             </p>
//             <p
//               className="flex-wrap text-break"
//               style={{ color: "rgb(154,161,171)" }}>
//               Sign up for Mentors Connect  today and get ready to take your
//               startup to the next level.
//             </p>
//             <div className="d-flex justify-content-around">
//               {/* {user && ( */}
//                 <button
//                   id="explore"
//                   className="p-3 px-4 text-white border-0 outline-0"
//                   style={{
//                     backgroundColor: "rgb(74,144,226)",
//                     borderRadius: "100px",
//                   }}
//                   onClick={handleOpen}>
//                   APPLY TODAY
//                 </button>
//               {/* )} */}

//               {/* {!user && (
//                 <button
//                   id="explore"
//                   className="p-3 px-4 text-white border-0 outline-0"
//                   style={{
//                     backgroundColor: "rgb(74,144,226)",
//                     borderRadius: "100px",
//                   }}>
//                   APPLY TODAY
//                 </button>
//               )} */}

//               <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description">
//                 <Box sx={style}>
//                   <RegisterMentor />
//                 </Box>
//               </Modal>

//               <Link to="/mentor-connect">
//                 <button
//                   id="explore"
//                   style={{
//                     backgroundColor: "transparent",
//                     borderRadius: "100px",
//                     color: "rgb(74,144,226)",
//                   }}
//                   className="p-3 px-4 border-0 outline-0">
//                   BUY CREDITS
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 4 */}
//       <section className="overflow-x-hidden my-5">
//         <p
//           className="mx-auto"
//           style={{ textAlign: "center", color: "rgb(203,203,203)" }}>
//           GET STARTED
//         </p>
//         <h1 className="skillset mx-auto">
//           Expand your skillset, gain insights, and get support from mentors at
//           no cost.
//         </h1>
//         <img className="px-5 w-100 responsive_img" src={map} alt="map" />
//       </section>

//       {/* Section 5 */}
//       <section className="overflow-x-hidden my-5">
//         <p
//           className="mx-auto"
//           style={{ textAlign: "center", color: "rgb(203,203,203)" }}>
//           OUR TESTIMONALS
//         </p>
//         <h1 className="test mx-auto">Wins from all around the globe</h1>
//         <div id="cards">
//           <Card
//             style={{ backgroundColor: "rgb(74,144,226)", color: "white" }}
//           />
//           <Card />
//           <Card />
//         </div>
//       </section>

//       {/* Section 6 */}
//       <section
//         id="mentorship"
//         className="d-flex align-items-center justify-content-center my-5">
//         <div
//           style={{ opacity: "" }}
//           className="d-flex justify-content-center align-items-center flex-column">
//           <h1 className=" mx-auto">
//             Your Next Chapter, Made Possible With Mentorship.
//           </h1>
//           <h4 className="fw-normal mentors my-2">
//             Explore 4000+ mentors from 60+ countries, to help you achieve and
//             overcome any challenges you face.
//           </h4>
//           <Link to="/mentor">
//             <button
//               id="start"
//               className="p-3 my-2 px-4 text-white rounded-3 border-0 outline-0"
//               style={{ backgroundColor: "rgb(74,144,226)" }}>
//               GET STARTED
//             </button>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// };

import React from "react";
import "../CSS/mentor.css";
import howitworks from "../assets/howitworks.png";
import welcome from "../assets/welcomebg.png";
import maninblue from "../assets/man-in-blue.png";
import globalpresence from "../assets/Global Presence.png";
import Fade from "react-reveal/Fade";

export const Mentor = () => {
  return (
    <>
      <section>
      <Fade bottom distance='30%' duration={1000} delay={100}>
        <div className="mentor-parent-container p-80 scroll-smooth overflow-hidden">
          <div className="mentor-content-container">
            <div className="mentor-main-heading font-dm-sans font-bold  text-4xl leading-tight text-center capitalize text-black-1100 text-center w-3/4 ml-20">
              Find mentors as invested in you, as you are in your business
            </div>

            <div className="mentor-primary-text font-dm-sans font-normal text-gray-400 text-23 leading-34 text-center mr-15 mt-10">
              Connect on your own schedule, from anywhere in the world.
            </div>
            
            <div class="bg-white border border-gray-200 shadow-sm rounded-full p-2 w-3/4 flex flex-1 m grid-row gap-2-row mt-10 ml-20">
              <input
                type="text"
                placeholder="Search by company, language or role"
                class="border-none text-center w-4/5 mr-1 font-dm-sans font-normal text-gray-400 text-base leading-6 tracking-wider"
              />
              <input
                type="text"
                placeholder="Expertise"
                class="border-none w-1/5 mr-2 font-dm-sans font-normal text-gray-400 text-base leading-6 tracking-wider"
              />
              <input
                type="text"
                placeholder="Country"
                class="border-none w-1/5 font-dm-sans font-normal text-gray-400 text-base leading-6 tracking-wider"
              />
              
              <div className="srch-btn rounded border-outline">
                <button> Search </button>
              </div>
            </div>
        
          </div>
        
        </div>
        </Fade>
      </section>

      <section className="mentor-welcome">
      <Fade bottom distance='30%' duration={1000} delay={100}>
        <div className="mentor-welcome-parent-container p-40">
          <div className="welcome-content-container rounded bg-white mx-auto max-w-lg w-full max-h-lg h-full">
            <div className="mentor-welcome-content mt-10 mb-20 ml-10">
              <p className="welcome-message">WELCOME TO MENTOR CONNECT</p>
              <h1 class="welcome-startup w-80">
                The go-to platform for ambitious startups
              </h1>
              <div className="welcome-primary-text mt-5">
                Looking to find and connect with experienced mentors who can
                help take their business to the next level?
                <br />
                <br />
                Building a successful business is no easy feat. You face
                countless challenges, from developing a winning product to
                attracting and retaining customers, to managing cash flow and
                scaling your operations. 
                <br />
                <br />
                Our platform connects startups with vetted and experienced
                mentors who have a proven track record of success in a range of
                industries and functions.
              </div>
              <div className="welcome-button-container mt-10 flex-1">
                <button className="bg-blue-500 rounded-lg p-4 text-white hover:border-blue-500 border-2">
                  Discover Now
                </button>
                <a
                  href="./"
                  className="font-inter font-normal font-bold text-lg hover:text-blue-500 leading-tight text-gray-700 ml-5"
                >
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </section>
        <Fade bottom distance='30%' duration={1000} delay={100}>
      <section className="go-to flex">
        <img src={howitworks} className="w-100 responsive_img" alt="imgw" />
      </section>
      </Fade>
      <Fade bottom distance='30%' duration={1000} delay={100}>
      <section className="go-to flex">
        <img src={maninblue} className="w-full h-full responsive_img" alt="imgw" />
      </section>
      </Fade>
      <Fade bottom distance='30%' duration={2000} delay={100}>
      <section className="go-to-presence flex p-40 mx-auto">
        <img src={globalpresence} className="w-full h-full responsive_img" alt="imgw" />
      </section>
      </Fade>
    </>
  );
};

// export default Mentor;
