import React from "react";
import Investhero from "../components/Investhero";
import Investapply from "../components/Investapply";
import Investpitch from "../components/Investpitch";
import FeedbackForm from "../components/FeedbackForm";
import Testimonial from "../components/Investtestimonial";
import Fade from "react-reveal/Fade";
import Investorform from "../components/Investorform";
export const Investor = () => {
  return (
    <>
      {<Investhero />}
      {<Investapply />}
      {<Investpitch />}
      {<Testimonial />}
      {/* {<FeedbackForm/>} */}
      {/* {<Investorform/>} */}
    </>
  );
};
