import React from "react";
import Navbars from "./components/Navbars";
import "./App.css";
import { Landing } from "./pages/Landing";
import { Mentors } from "./pages/Mentors";
import { Mentor } from "./pages/Mentor";
import { Investor } from "./pages/Investor";
import { Connect } from "./pages/Connect";
import { About } from "./pages/About";
import {Services} from "./pages/Services";
// import { SignUp } from "./pages/signUp";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Fade from "react-reveal/Fade";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Flip from "react-reveal/Flip";
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
          <Route exact path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
