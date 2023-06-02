// import React, { useState } from "react";
// import { questions } from "./Faq";
// import "./accordion.css";
// import Myacoordion from "./Myacoordion";
// const Accordion = () => {
//   const [data] = useState(questions);
//   return (
//     <>
//     <div className="faq-container">
//       <div className="faq-parent-heading">
//         <h2>FAQs</h2>
//       </div>

//       <div className="faq-button-container">
//         <button className="mentconnect">Mentor Connect</button>
//         <button className="investconnect">Investor Connect</button>
//         <button className="grantconnect">Grants Connect</button>
//       </div>

//         <div className="faq-bottom-container">
//         {data.map((curElem) => {
//         const { id } = curElem;
//         return <Myacoordion key={id} {...curElem} />;
//       })}
//         </div>
      
//       </div>
//     </>
//   );
// };

// export default Accordion;

import React, { useState } from "react";
import { questions } from "./Faq";
import "./accordion.css";
import Myacoordion from "./Myacoordion";

const Accordion = () => {
  const [data] = useState(questions);
  return (
    <>
      <div className="faq-container">
        <div className="faq-parent-heading">
          <h2 className="text-2xl md:text-3xl">FAQs</h2>
        </div>

        <div className="faq-button-container">
          <button className="mentconnect btn">Mentor Connect</button>
          <button className="investconnect btn">Investor Connect</button>
          <button className="grantconnect btn">Grants Connect</button>
        </div>

        <div className="faq-bottom-container">
          {data.map((curElem) => {
            const { id } = curElem;
            return <Myacoordion key={id} {...curElem} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Accordion;
