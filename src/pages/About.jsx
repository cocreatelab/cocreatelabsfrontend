import React from "react";
import Abouthome from "../components/Abouthome";
import Build from "../components/Build";
import Process from "../components/Process";
import Mission from "../components/Mission";
import Credit from "../components/Credit";
import Team from "../components/Team";

export const About = () => {
  return (
    <>
      {<Abouthome />}
      {<Build />}
      {<Process />}
      {<Mission />}
      {<Credit />}
      {<Team/>}
    </>
  );
};