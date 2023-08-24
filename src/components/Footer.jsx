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
      <div className="container footer-content">
        <div className="container footer-top-content">
          <div className="container footer-left-content">
            <img src={footerlogo} alt="" />
            <p>
              We create digital experiences for brands and companies by using
              technology.
            </p>

            <div className="container social-media">
              <p>
                <a
                  href="https://www.facebook.com/cocreatelabs"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  // class="img-fluid"
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
                  // class="img-fluid"
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
                  // class="img-fluid"
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
                  // class="img-fluid"
                >
                  {/* <img src={linkdinlogo} alt="" className="linkdinlogo mt-2" class="img-fluid" /> */}
                  <FaLinkedin color="yellow" className="w-5 h-6 mt-1" />
                </a>
              </p>
            </div>
          </div>

          <div className="container footer-right-content">
            <div className="container list">
              <h6>Company</h6>
              <a href="">About company</a>
              <a href="">Company services</a>
              <a href="">Job opportunities</a>
              <a href="">Creative people</a>
            </div>

            <div className="container list">
              <h6>Customer</h6>
              <a href="">Client support</a>
              <a href="">Latest news</a>
              <a href="">Company story</a>
              <a href="">Pricing packages</a>
            </div>
          </div>
        </div>
        <br />
        <hr></hr>
        <div className="container sb-footer-bellow">
          <div className="container sb-footer-bellow-left">
            <p>Privacy policy</p>
            <p>Legal notice</p>
            <p>Terms of service</p>
          </div>

          <div className="container sb-footer-bellow-right">
            <p>@Copyright{new Date().getFullYear()} -Co-Create Labs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
