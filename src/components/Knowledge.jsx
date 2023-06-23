import React from "react";
import knowledgeimg1 from "../assets/Group12.png";
import knowledgeimg2 from "../assets/Group13.png";
import knowledgeimg3 from "../assets/Group14.png";
import "./knowledge.css";
import { MdArrowRightAlt } from "react-icons/md";
import Fade from "react-reveal/Fade";
const Knowledge = () => {
  return (
    <div>
      <Fade top distance="20%" delay={100} duration={1000}>
        <div className="knowledge-parent-container">
          <div className="knowledge-heading">Knowledge Center</div>
          <div className="knowledge-card-container">
            <a
              href="https://inc42.com/features/meet-the-30-women-torchbearers-of-indias-startup-investment-space/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="knowledge-card">
                <div className="knowledge-img">
                  <img src={knowledgeimg1} alt="" class="img-fluid rounded" />
                </div>
                <div className="knowledge-date-container">
                  <p>23 Jun 2023</p>
                </div>
                <div className="knowledge-card-heading">
                  <h5>
                    Gen Z & Millennials – Entrepreneurship, Start Ups, &
                    Mentors, oh my!
                  </h5>
                </div>
                <div className="knowledge-card-primary-text">
                  <p>
                    Starting a business can be a daunting task. For a startup,
                    the initial days are crucial, and...
                  </p>
                </div>
                <div className="card-readmore-conatainer">
                  <button className="readmore">
                    Read More &nbsp; &nbsp; &nbsp; &nbsp;
                    <MdArrowRightAlt />
                  </button>
                </div>
              </div>
            </a>

            <a
              href="https://www.livemint.com/news/india/starting-your-own-business-these-govt-schemes-can-support-your-startup-in-india-11685418342307.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="knowledge-card">
                <div className="knowledge-img">
                  <img src={knowledgeimg2} alt="" class="img-fluid" />
                </div>
                <div className="knowledge-date-container">
                  <p>23 Jun 2023</p>
                </div>
                <div className="knowledge-card-heading">
                  <h5>
                    Finding the Right Entrepreneurship and Start Up Community
                    for Success
                  </h5>
                </div>
                <div className="knowledge-card-primary-text">
                  <p>
                    Entrepreneurship is a challenging but rewarding journey and
                    experience. Starting a business...
                  </p>
                </div>
                <div className="card-readmore-conatainer">
                  <button className="readmore">
                    Read More &nbsp; &nbsp; &nbsp; &nbsp;
                    <MdArrowRightAlt />
                  </button>
                </div>
              </div>
            </a>
            <a
              href="https://economictimes.indiatimes.com/tech/startups/budget-2023-to-give-lot-of-support-to-indias-startup-ecosystem-piyush-goyal/articleshow/97542339.cms?from=mdr"
              target="_blank"
              rel="noreferrer"
            >
              <div className="knowledge-card">
                <div className="knowledge-img">
                  <img src={knowledgeimg3} alt="" class="img-fluid" />
                </div>
                <div className="knowledge-date-container">
                  <p>23 Jun 2023</p>
                </div>
                <div className="knowledge-card-heading">
                  <h5>
                    Embracing Time Off: Cultivating an Environment of Rest and
                    Recharge
                  </h5>
                </div>
                <div className="knowledge-card-primary-text">
                  <p>
                    The notion of taking time off can sometimes feel daunting
                    for leaders. We find ourselves...
                  </p>
                </div>
                <div className="card-readmore-conatainer">
                  <button className="readmore hover:text-blue">
                    Read More &nbsp; &nbsp; &nbsp; &nbsp;
                    <MdArrowRightAlt />
                  </button>
                </div>
              </div>
            </a>
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
