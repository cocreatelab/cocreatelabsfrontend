import React from 'react'
import Arrow from "../assets/Arrow.png";
import card from "../assets/Card.png";
import Tintcover from "../assets/Reccover.png";
import "./changemaker.css";
import ourwork from "../assets/Ourwork.png";

const Changemaker = () => {
  return (
    <>
        <div className="changemaker-parent-container">

            <a href="/"><img src={ourwork} alt="" /></a>
            {/* <div className="changemaker-content-container">
                <div className="changemaker-top-content">
                        <div className="changemaker-top-left"><h2>Our Change Makers</h2></div>
                        <div className="changemaker-top-right"><p>View <img src={Arrow} alt="" /></p></div>
                </div>

                <div className="changemaker-bellow-content">
                    <div className="changemaker-left-container">
                        <img src={card} alt="" className= "card"/>
                        <img src={Tintcover} alt="" className="Tint"/>
                    </div>
                    <div className="changemaker-right-container">
                        <div className="right-conteent1">
                            <img src="" alt="" />
                        </div>
                        <div className="right-content2">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </>
  )
}

export default Changemaker