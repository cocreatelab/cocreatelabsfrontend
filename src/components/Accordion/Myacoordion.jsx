import React, { useState } from "react";
import "./accordion.css";
import Fade from "react-reveal/Fade";

const Myacoordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="faq-parent-container">
        <div className="main-heading">
          <Fade right distance="20%" delay={100} duration={1000}>
            <h5 onClick={() => setShow(!show)} className="text-lg md:text-xl cursor-pointer hover:text-blue-500 scale-x-110	 ">{question}</h5>
            {/* <p
              onClick={() => setShow(!show)}
              className="cursor-pointer space-2"
             >

              <div className="plus-minus">{show ? "–" : "+"}</div>
            </p>  */}
          </Fade>
        </div>
        {show && <p className="answer">{answer}</p>}
      </div>
    </>
  );
};

export default Myacoordion;


