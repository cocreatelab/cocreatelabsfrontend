import React from 'react'
import "./investpitch.css";
import Fade from "react-reveal/Fade";

const Investpitch = () => {
  return (
    <>
        <div className="pitch-parent-container">
        <Fade bottom distance='20%' duration={1000} delay={100}>
            <div className="pitch-content-container">
            <h1 class="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl leading-11 sm:leading-12 lg:leading-14 text-center capitalize text-white">Are you ready to pitch your startup?</h1>
            <br />
            <h2>Get Started Now</h2>
            <br />
            <p>Find out now?</p>
            <button className="pitchbtn rounded-full mt-4">Pitch Now</button>
            </div>
            </Fade>
        </div>
    </>
  )
}

export default Investpitch