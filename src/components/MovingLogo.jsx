import React, { useEffect, useRef } from 'react';
import "./movingText.css";
import logo1 from "../assets/Shell_logo.png";
import logo2 from "../assets/Tata_Consultancy_Services_Logo.png";
import logo3 from "../assets/World_Bank_Group_logo.png";
import logo4 from "../assets/OECD_logo.png";
import logo5 from "../assets/Netflix_2015_logo.png";
import logo6 from "../assets/IBM_logo.png";

const MovingLogo = () => {

const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const handleAnimation = () => {
      container.style.transform = 'translateX(100%)'; // Adjust the translation distance as needed
    };

    // Start the animation
    const animationId = setInterval(handleAnimation, 3000); // Adjust the animation duration as needed

    // Clean up the animation on component unmount
    return () => clearInterval(animationId);
  }, []);

  return (
      <div className="logo-parent-container">
      <div className="logo-container" ref={containerRef}>
         <img className="mr-5" src={logo1} alt="logo1" class="img-fluid"/>
         <img className="mr-5" src={logo2} alt="logo2" class="img-fluid"/>
         <img className="mr-5" src={logo3} alt="logo3" class="img-fluid"/>
         <img className="mr-5" src={logo4} alt="logo4" class="img-fluid"/>
         <img className="mr-5" src={logo5} alt="logo5" class="img-fluid"/>
         <img className="mr-5" src={logo6} alt="logo6" class="img-fluid"/>
      </div>
      </div>
  );
};

export default MovingLogo;
