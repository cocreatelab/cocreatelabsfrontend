import React from "react";
import "./investhero.css";
import investbanner from "../assets/Investbanner.png";
import Fade from "react-reveal/Fade";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import InvestorForm from "./Investorform";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
};

const Investhero = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="investor-parent-container">
        <Fade bottom distance="20%" duration={1000} delay={100}>
          <div className="investor-left-content">
            <Fade left distance="20%" duration={1000} delay={100}>
              <div className="invest-lefttop-content">
                <h5 class="font-inter font-semibold text-base uppercase leading-normal text-blue-500">
                  Value | Impact | Scale 
                </h5>
                <h1 class="font-dm-sans font-bold text-5xl leading-tight flex items-center capitalize text-navy w-full mt-4">
                  Creating the next generation of changemakers
                </h1>
                <p class="font-dm-sans font-normal text-base leading-relaxed flex  text-navy mt-5">
                  Get Access to Pitch in front of global investors to launch/
                  scale up your start-up initiatives with investment caps
                  ranging from 10,000 USD- 1.2 M USD.
                </p>
                <p class="font-dm-sans font-normal text-base leading-relaxed  text-navy-900 mt-6">
                  XXX Investors | XXX VC
                </p>
              </div>
              <div className="invest-btn-container">
                <button
                  className="ibtn rounded-full bg-bluee-400 tex-white"
                  onClick={handleOpen}
                >
                  Apply Now
                </button>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <InvestorForm />
                </Box>
              </Modal>
            </Fade>
          </div>

          <div className="invest-right-content">
            <Fade right distance="20%" duration={1000} delay={100}>
              <img src={investbanner} alt="" />
            </Fade>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Investhero;
