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
      <div className="container investor-parent-container">
        <Fade bottom distance="20%" duration={1000} delay={100}>
          <div className="container investor-left-content">
            <Fade left distance="20%" duration={1000} delay={100}>
                <h5>
                  Value | Impact | Scale 
                </h5>
                <h1>
                  Creating the next generation of changemakers
                </h1>
                <div className="container invest-right-content1">
            <Fade right distance="20%" duration={1000} delay={100}>
              <img src={investbanner} alt="" class="img-fluid"/>
            </Fade>
          </div>
                <p>
                  Get Access to Pitch in front of global investors to launch/
                  scale up your start-up initiatives with investment caps
                  ranging from 10,000 USD- 1.2 M USD.
                </p>
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

          <div className="container invest-right-content">
            <Fade right distance="20%" duration={1000} delay={100}>
              <img src={investbanner} alt="" class="img-fluid"/>
            </Fade>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Investhero;
