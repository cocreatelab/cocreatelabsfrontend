import React, { useState, useEffect } from "react";
import { BsList } from "react-icons/bs";
import Logo from "../assets/Logo1.png";
import "./navbars.css";
import { Button, Dropdown, Offcanvas, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import InvestorForm from "./Investorform";
import { Height } from "@mui/icons-material";

const Navbars = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // SCROLL

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setNavbarScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // OFFCANVAS

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

 

  return (
    <>
      <nav className={navbarScrolled ? "scrolled" : ""}>
        <div className="container nav-logo">
        <Link to="/"><img src={Logo} alt="" /></Link>
        </div>
        <div>
          <ul className="container nav-links">
            <a href="/"><li>
              Home
            </li></a>
            <a href="/about"><li>
              About
            </li></a>
            <li className="nav-dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="offerings-dropdown">
                  Offerings
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link to="/mentor-connect">Mentor Connect</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/investor-connect">Investor Connect</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to="/grant-connect">Grant Connect</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <a href="/services"><li>
              Services
            </li></a>
            <a href="/about"><li>
              Contact
            </li></a>
            <li>
              <button
                type="button"
                className="btn bg-black text-white rounded-pill"
                onClick={handleShow}
                
              >
                Join Us
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-menu">
          <button className="menu-icon" onClick={handleToggle}>
            <BsList size={24} />
          </button>
          <Offcanvas
            show={showOffcanvas}
            onHide={() => setShowOffcanvas(false)}
            placement="end"
            style={{ width: "250px" }}
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body className="menu">
              <ul className="nav-menu-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="nav-dropdown">
                  <Dropdown
                  style={{width: "290px"}}
                  >
                    <Dropdown.Toggle variant="light" id="offerings-dropdown">
                      Offerings
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="/mentor-connect">Mentor Connect</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/investor-connect">Investor Connect</Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to="/grant-connect">Grant Connect</Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="btn bg-black text-white rounded-pill"
                    onClick={handleShow}
                    
                  >
                    Join Us
                  </button>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="wide-model"
        centered
        // className="model-view"
        style={{marginTop: '25px'}} 
      >
        <Modal.Body>   
          <InvestorForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="text-black">
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </>
  );
};

export default Navbars;
