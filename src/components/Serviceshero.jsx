import React from "react";
import servicehero from "../assets/serviceshero.png";
import desc from "../assets/Desc.png";
import service1 from "../assets/Work Card (5).png"
import service2 from "../assets/Work Card (4).png"
import service3 from "../assets/Work Card (3).png"
import service4 from "../assets/Work Card (2).png"
import service5 from "../assets/Work Card (1).png"
import service6 from "../assets/Work Card.png"
import Fade from "react-reveal/Fade"
import "./serviceshero.css";
const Serviceshero = () => {
  return (
    <>
    <Fade bottom distance='20%' duration={1000} delay={100}>
      <div className="serviceshero">
        <img src={servicehero} alt="" />
      </div>
      </Fade>
      <Fade bottom distance='20%' duration={1000} delay={100}>
      <div className="services-desc">
        <img src={desc} alt="" className="w-full" />
      </div>
      </Fade>
      <Fade bottom distance='20%' duration={1000} delay={100}>
      <div className="service-card-container">
        <h3 className=" text-blue-500">OUR SERVICES</h3>
        <div className="services-card-content">
          <div className="services-card transform scale-100 hover:scale-105 cursor-pointer">
              <img src={service1} alt="" />
          </div>
          <div className="services-card transform scale-100 hover:scale-105 cursor-pointer">
          <img src={service2} alt="" />
          </div>
        </div>
        <div className="services-card-content">
          <div className="services-card transform scale-100 hover:scale-105 cursor-pointer">
          <img src={service3} alt="" />
          </div>
          <div className="services-card transform scale-100 hover:scale-105 cursor-pointer">
          <img src={service4} alt="" />
          </div>
        </div>
        <div className="services-card-content">
          <div className="services-card transform scale-100 hover:scale-105 cursor-pointer">
          <img src={service5} alt="" />
          </div>
          <div className="services-card transform scale-100 hover:scale-105 cursor-pointer">
          <img src={service6} alt="" />
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
};

export default Serviceshero;
