// import React from "react";
// import Navbars from "./components/Navbars";
// import "./App.css";
// import { Landing } from "./pages/Landing";
// import { Mentors } from "./pages/Mentors";
// import { Mentor } from "./pages/Mentor";
// import { Investor } from "./pages/Investor";
// import { Connect } from "./pages/Connect";
// import { About } from "./pages/About";
// // import { SignUp } from "./pages/SignUp";
// import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
// import Fade from "react-reveal/Fade";
// import Flip from "react-reveal/Flip";
// const App = () => {
//   return (
//     <>
//       <Navbars />
//       <flip top distance="10%" duration={1000} delay={500}>
//         <Routes>
//           <Route exact path="/" element={<Landing />} />
//           <Route exact path="/about" element={<About />} />
//           {/* <Route exact path="/register" element={<SignUp />} /> */}
//           <Route exact path="/mentor" element={<Mentors />} />
//           <Route exact path="/mentor-connect" element={<Mentor />} />
//           <Route exact path="/investor-connect" element={<Investor />} />
//           <Route exact path="/grant-connect" element={<Connect />} />
//         </Routes>
//       </flip>
//       <Footer />
//     </>
//   );
// };

// export default App;

import React from "react";
import Navbars from "./components/Navbars";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Mentors } from "./pages/Mentors";
import { Mentor } from "./pages/Mentor";
import { Investor } from "./pages/Investor";
import { Connect } from "./pages/Connect";
import { About } from "./pages/About";
// import { SignUp } from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const App = () => {
  return (
    <>
    <Fade bottom distance='20%' delay={100} duration={1000}> 
      <div className="fixed-navbar">
        <Navbars />
      </div>
      </Fade>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<About />} />
          {/* <Route exact path="/register" element={<SignUp />} /> */}
          <Route exact path="/mentor" element={<Mentors />} />
          <Route exact path="/mentor-connect" element={<Mentor />} />
          <Route exact path="/investor-connect" element={<Investor />} />
          <Route exact path="/grant-connect" element={<Connect />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
