import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Building from "../assets/Component 38.png"
import "./home.css";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Home = () => {
  return (
    <>
      <div className="parent-container-home">  
        <div className="home-container px-4 md:px-8 lg:px-16 xl:px-20 ">
        <Fade bottom distance='2%' delay={100} duration={1000}>  
          <div className="home-left-content flex flex-col md:flex-col">
          
            <h5 className="home-primary-heading">
              Best Place In The World To Build Your Startup
            </h5>
            <p className="home-primary-text">
              Co Create Labs is a game-changer in the startup ecosystem. It
              enables access to a global platform that brings together the best
              and brightest entrepreneurs, investors, mentors, and philanthropic
              organizations in an integrated ecosystem.
            </p>
            <div className="wrapper">
              <Link to="/">
                <button className="secondary-button1">Start Growing</button>
              </Link>
              <Link to="/about">
                <button className="secondary-button2">
                  <BsFillPlayCircleFill
                    size={300}
                    style={{ width: 50, height: 30 }}
                  />
                  Who are we
                </button>
              </Link>
            </div>
            {/* </div> */}
            
          </div>

          <div className="home-right-content">
            {/* <iframe
              width="700"
              height="500"
              className="video-player-container"
              src="https://www.youtube.com/embed/OCnFnBtlg-c"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe> */}
            <img src={Building} alt="" className="building-img"/>
          </div>
          </Fade>
        </div>
      </div>

    </>
  );
};

export default Home;


