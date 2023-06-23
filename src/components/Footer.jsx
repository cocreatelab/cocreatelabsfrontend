import React from "react";
import "./footer.css";
import footerlogo from "../assets/logomain.png";
import facebooklogo from "../assets/facebook.png";
import twitterlogo from "../assets/twitter.png";
import instalogo from "../assets/insta.png";
import linkdinlogo from "../assets/linkdin-icon.png";
import rec1 from "../assets/Rectangle1.jpg";
import rec2 from "../assets/Rectangle2.jpg";
import ellipse1 from "../assets/Ellipse1.png";
import ellipse2 from "../assets/Ellipse2.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="Ellipse">
        <img src={ellipse1} alt="" className="Ellipse" class="img-fluid" />
      </div> */}
      <div className="sb-footer ">
        <div className="sb-footer-link">
          <div className="sb-footer-left contener ml-10">
            <div className="sb-footer-logo mb-5">
              <img
                src={footerlogo}
                alt=""
                className="footerlogo"
                class="img-fluid"
              />
            </div>
            <div className="sb-footer-para ml-9 mb-5">
              <p class="font-inter font-normal text-gray-300 font-medium text-base leading-6">
                We create digital experiences for brands and companies by using
                technology.
              </p>
            </div>
            <div className="sb-footer-bellow-center mr-60">
              <p>
                <a
                  href="https://www.facebook.com/cocreatelabs"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {/* <img src={facebooklogo} alt="" className="facebooklogo" /> */}
                  <FacebookIcon color="primary" />
                </a>
              </p>
              <p>
                <a
                  href="https://twitter.com/cocreatelabs1"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {/* <img src={twitterlogo} alt="" className="twitterlogo" /> */}
                  <TwitterIcon color="success" />
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/cocreatelabsofficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {/* <img src={instalogo} alt="" className="instalogo" /> */}
                  <InstagramIcon color="secondary" />
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/co-create-lab/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                >
                  {/* <img src={linkdinlogo} alt="" className="linkdinlogo mt-2" class="img-fluid" /> */}
                  <FaLinkedin color="yellow" className="w-5 h-6 mt-1"/>
                </a>
              </p>
            </div>
          </div>

          <div className="sb-footer-link_div">
            <h4>Company</h4>
            <br />
            <br />
            <a href="#/">
              <p>About company</p>
            </a>
            <br />
            <a href="#/">
              <p>Company services</p>
            </a>
            <br />
            <a href="#/">
              <p>Job opportunities</p>
            </a>
            <br />
            <a href="#/">
              <p>Creative people</p>
            </a>
            <br />
          </div>
          <div className="sb-footer-link_div">
            <h4>Customer</h4>
            <br />
            <br />
            <a href="#/">
              <p>Client support</p>
            </a>
            <br />
            <a href="#/">
              <p>Latest news</p>
            </a>
            <br />
            <a href="#/">
              <p>Company story</p>
            </a>
            <br />
            <a href="#/">
              <p>Pricing packages</p>
            </a>
            <br />
          </div>
          {/* <div className="sb-footer-link-div mb-9">
            <h4>Latest blog</h4>
            <br />
            <div className="rec-container">
              <div className="rec1">
                <img src={rec1} alt="" className="rec-1" />
                <a href="#/">
                  <p class="font-medium text-base leading-6 text-gray-400">
                    I think really important to design with...
                  </p>
                </a>
                <br />
                <br />
                <br />
              </div>
              <div className="rec1">
                <img src={rec2} alt="" className="rec-2" />
                <a href="#/">
                  <p class="font-medium text-base leading-6 text-gray-400">
                    Recognizing the need is the primary...
                  </p>
                </a>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div> */}
        </div>
        <br />
        <hr></hr>
        <div className="sb-footer-bellow">
          <div className="sb-footer-bellow-left">
            <p>Privacy policy</p>
            <p>Legal notice</p>
            <p>Terms of service</p>
          </div>

          <div className="sb-footer-bellow-right">
            <p>@Copyright{new Date().getFullYear()} -Co-Create Labs</p>
          </div>
        </div>

        <div className="ellipse2">
          <img
            src={ellipse2}
            alt=""
            className="ellipse2 ml-80"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
