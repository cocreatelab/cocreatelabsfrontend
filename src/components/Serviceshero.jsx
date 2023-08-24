import React from "react";
import servicehero from "../assets/serviceshero.png";
import img1 from "../assets/services1.png";
import desc from "../assets/Desc.png";
import service1 from "../assets/Work Card (5).png";
import service2 from "../assets/Work Card (4).png";
import service3 from "../assets/Work Card (3).png";
import service4 from "../assets/Work Card (2).png";
import service5 from "../assets/Work Card (1).png";
import service6 from "../assets/Work Card.png";
import servicesregister from "../assets/servicesregister.png";
import serviceslist from "../assets/serviceslist.png";
import Fade from "react-reveal/Fade";
import { Carousel } from "react-bootstrap";
import "./serviceshero.css";
import pricing1 from "../assets/Pricing Card.png";
import pricing2 from "../assets/Pricing Card (1).png";
import pricing3 from "../assets/Pricing Card (3).png";
import pricing4 from "../assets/Pricing Card (6).png";
import pricing5 from "../assets/Pricing Card (2).png";
import pricing6 from "../assets/Pricing Card (5).png";
import services1 from "../assets/Service Cards.png"

const Serviceshero = () => {
  return (
    <>
      <Fade bottom distance="20%" duration={1000} delay={100}>
        <div className="container serviceshero mt-30">
          {/* <img src={servicehero} alt="" /> */}
          <div className="container services-left-container">
            <img src={img1} alt="" class="img-fluid" />
          </div>
          <div className="container services-right-container">
            <p>
              Empowering Entrepreneurs to navigate the complexities of the
              Business Landscape
            </p>
            <h1>
              Unleash Your Startup's Potential with our Comprehensive Solutions
            </h1>
            <div className="container services-left-container1">
              <img src={img1} alt="" class="img-fluid" />
            </div>
            <h6>
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </h6>
          </div>
        </div>
      </Fade>
      <Fade bottom distance="20%" duration={1000} delay={100}>
        <div className="services-desc">
          {/* <img src={desc} alt="" className="w-full" /> */}
          <div className="container service-desc-content">
            <p>Welcome to Co Create Labs Growth Services</p>
            <h1>
              The world's leading provider of business solutions for startup
              founders.
            </h1>
            <h6>
              We understand that launching and growing a successful startup is
              no easy task. That's why we offer a wide range of services
              designed to empower entrepreneurs like you to navigate the
              complexities of the business landscape and achieve your goals.
            </h6>
          </div>
        </div>
      </Fade>
      <Fade bottom distance="20%" duration={1000} delay={100}>
        <div className="container service-card-container">
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

        <Carousel
          className="container service-card-container1"
          nextIcon={<span className="carousel-arrow">&#8250;</span>}
          prevIcon={<span className="carousel-arrow">&#8249;</span>}
        >
          <Carousel.Item>
            <img src={service1} alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={service2} alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={service3} alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={service4} alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={service5} alt="" />
          </Carousel.Item>

          <Carousel.Item>
            <img src={service6} alt="" />
          </Carousel.Item>
        </Carousel>

        <div className="pricing-content">
        <div className="container services-list-container">
          <h1>Our Services</h1>
          <p>Make your startup investment ready Today!</p>
          <div className="container services-card">
          <div className="container services-card-list">
            <img src={pricing1} alt="" />
            <img src={pricing2} alt="" />
            <img src={pricing3} alt="" />
          </div>
          <div className="container services-card-list">
            <img src={pricing4} alt="" />
            <img src={pricing5} alt="" />
            <img src={pricing6} alt="" />
          </div>
          </div>
        </div>
        </div>
        {/* <div className="build-together-btn w-full">
        <img src={servicesregister} alt="" />
      </div> */}
      </Fade>
    </>
  );
};

export default Serviceshero;
