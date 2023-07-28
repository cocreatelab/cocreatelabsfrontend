import React from "react";
import "./joinnow.css";
import Iphoneimg from "../assets/iphoneimg.png";
import Greenellipse from "../assets/greenellipse.png";
import Blueellipse from "../assets/blueellipse.png";
import iphoneimg from "../assets/joinimgphone.png"

const Joinnow = () => {
  return (
    <div>
      <div className="conatainer joinnow-parent-container">
        <div className="joinnow-background">
          <p></p>
        </div>
        <div className="joinnow-rectangular-card">
          <div className="joinnow-rectangle-content">
            <div className="joinnow-rectangle-content-left">
              <div>
                <p className="container joinnow-primary-heading">
                  Join now & Become member Apply For Credit !
                </p>
                <br />
                <br />
                <br />
              </div>
              
              <div>
                <p className="joinnow-primary-text">
                  Avail mentoring sessions on demand. Buy credits to avail
                  access easily. Anytime. Anywhere.
                </p>
                <br />
                <br />
              </div>
              <div className="joinnow-button-container">
                <button className="buynow"> Buy Now </button>
                <button className="getcredits">Get Credits</button>
              </div>
            </div>

            <div className="joinnow-rectangle-content-right">
              <div className="green-ellipse">
                <img src={Greenellipse} alt="" />
              </div>
              <div className="blue-ellipse">
                <img src={Blueellipse} alt="" />
              </div>
              <div className="iphone-img">
                <img src={Iphoneimg} alt="" />
              </div>
              {/* <img src={iphoneimg} alt="" class="img-fluid" className="mr-60"/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Joinnow;
