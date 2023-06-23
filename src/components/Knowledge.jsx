import React from "react";
import knowledgeimg1 from "../assets/knowledgeimg1.png";
import knowledgeimg2 from "../assets/grouppeople.png";
import knowledgeimg3 from "../assets/topview.png";
import "./knowledge.css";
import { MdArrowRightAlt } from "react-icons/md";
import Fade from "react-reveal/Fade";
const Knowledge = () => {
  return (
    <div>
      <Fade top distance="20%" delay={100} duration={1000}>
        <div className="knowledge-parent-container">
          <div className="knowledge-heading">Our Knowledge Center</div>
          <div className="knowledge-card-container">
            <a
              href="https://www.livemint.com/news/india/starting-your-own-business-these-govt-schemes-can-support-your-startup-in-india-11685418342307.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="knowledge-card">
                <div className="knowledge-img">
                  <img src={knowledgeimg1} alt="" class="img-fluid" />
                </div>
                <div className="knowledge-date-container">
                  <p>30 May 2023</p>
                </div>
                <div className="knowledge-card-heading">
                  <h5>
                    Starting your own business? These govt schemes can support
                    your startup in India
                  </h5>
                </div>
                <div className="knowledge-card-primary-text">
                  <p>
                    The Indian government, under the leadership of Prime
                    Minister Narendra Modi, has begun...
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
                  <img src={knowledgeimg2} alt="" class="img-fluid" />
                </div>
                <div className="knowledge-date-container">
                  <p>02 Feb 2023</p>
                </div>
                <div className="knowledge-card-heading">
                  <h5>
                    Budget 2023 to support India's startup ecosystem: Piyush
                    Goyal
                  </h5>
                </div>
                <div className="knowledge-card-primary-text">
                  <p>
                    The government on Wednesday proposed to extend the period of
                    incorporation...
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

            <a
              href="https://inc42.com/features/meet-the-30-women-torchbearers-of-indias-startup-investment-space/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="knowledge-card">
                <div className="knowledge-img">
                  <img src={knowledgeimg3} alt="" class="img-fluid" />
                </div>
                <div className="knowledge-date-container">
                  <p>19 Jun 2023</p>
                </div>
                <div className="knowledge-card-heading">
                  <h5>
                    Meet The 35 Women Torchbearers Of India’s Startup Investment
                    Space
                  </h5>
                </div>
                <div className="knowledge-card-primary-text">
                  <p>
                    Many of these women investors bring years of experience to
                    the table and have today...
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
