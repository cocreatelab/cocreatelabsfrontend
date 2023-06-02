import React from "react";
import knowledgeimg1 from "../assets/knowledgeimg1.png";
import knowledgeimg2 from "../assets/grouppeople.png";
import knowledgeimg3 from "../assets/topview.png";
import "./knowledge.css";
import { MdArrowRightAlt } from "react-icons/md";
import Fade from "react-reveal/Fade"
const Knowledge = () => {
  return (
    <div>
        <Fade top distance='20%' delay={100} duration={1000}>
      <div className="knowledge-parent-container">
      <div className="knowledge-heading">
            Our Knowledge Center
        </div>
        <div className="knowledge-card-container">
          
          <div className="knowledge-card">
            <div className="knowledge-img">
              <img src={knowledgeimg1} alt="" />
            </div>
            <div className="knowledge-date-container">
              <p>27 Jan 2021</p>
            </div>
            <div className="knowledge-card-heading">
              <h5>
                How one CCL user grew his consultancy from $0-100K in 12 months
              </h5>
            </div>
            <div className="knowledge-card-primary-text">
              <p>
                See how pivoting to CCL changed one person’s sales strategy &
                allowed
              </p>
            </div>
            <div className="card-readmore-conatainer">
              <button className="readmore">
                
                  Read More &nbsp; &nbsp; &nbsp; &nbsp;<MdArrowRightAlt/>
                
              </button>
            </div>
          </div>


          <div className="knowledge-card">
            <div className="knowledge-img">
              <img src={knowledgeimg2} alt="" />
            </div>
            <div className="knowledge-date-container">
              <p>27 Jan 2021</p>
            </div>
            <div className="knowledge-card-heading">
              <h5>
                How one CCL user grew his consultancy from $0-100K in 12 months
              </h5>
            </div>
            <div className="knowledge-card-primary-text">
              <p>
                See how pivoting to CCL changed one person’s sales strategy &
                allowed
              </p>
            </div>
            <div className="card-readmore-conatainer">
              <button className="readmore">
                
                  Read More &nbsp; &nbsp; &nbsp; &nbsp;<MdArrowRightAlt/>
                
              </button>
            </div>
          </div>


          <div className="knowledge-card">
            <div className="knowledge-img">
              <img src={knowledgeimg3} alt="" />
            </div>
            <div className="knowledge-date-container">
              <p>27 Jan 2021</p>
            </div>
            <div className="knowledge-card-heading">
              <h5>
                How one CCL user grew his consultancy from $0-100K in 12 months
              </h5>
            </div>
            <div className="knowledge-card-primary-text">
              <p>
                See how pivoting to CCL changed one person’s sales strategy &
                allowed
              </p>
            </div>
            <div className="card-readmore-conatainer">
              <button className="readmore">
                
                  Read More &nbsp; &nbsp; &nbsp; &nbsp;<MdArrowRightAlt/>
                
              </button>
            </div>
          </div>

          
        </div>
          <br />
          <br />
          <br />
        <div className="events-button-container">
          <button className="loadmore">Learn More</button>
        </div>

      </div>
      </Fade>
    </div>
  );
};

export default Knowledge;
