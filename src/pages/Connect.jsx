import React from "react";
import Granthero from "../components/Granthero";
import Grantlogo from "../components/Grantlogo";
import StepperMark from "../components/Stepper.jsx";
import Step from "../components/Steps.jsx"

export const Connect = () => {
  return (
    <>
      {<Granthero />}
      {<Grantlogo/>}
      {<Step/>}
    </>
  );
};
