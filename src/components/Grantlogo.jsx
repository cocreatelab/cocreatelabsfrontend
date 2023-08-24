import React from "react";
import "./grantlogo.css";
import img10 from "../assets/Amazon2x@2x.png"
import img11 from "../assets/Netfilx2x@2x.png"
import img12 from "../assets/Mashable2x@2x.png"
import img13 from "../assets/Atlassian2x@2x.png"
import img14 from "../assets/Forbes2x@2x.png"

const Grantlogo = () => {
  return (
   <>
      <div className="grantlogo-parent-container">
        <div className="container grantlogo-content">
              <p>Our ECOSYSTEM</p>
              <h3>Folks all these Awesome Companies are Already Using our Grants Connect!</h3>
              <div className="grantlogo-container">
              <div className="grantlogo1">
              <img src={img10} alt="" />
              <img src={img11} alt="" />
              <img src={img12} alt="" />
                </div>
              <div className="grantlogo2">
              <img src={img13} alt="" />
              <img src={img14} alt="" />
              </div>
              </div>
        </div>
      </div>
   </>
  );
};

export default Grantlogo;
