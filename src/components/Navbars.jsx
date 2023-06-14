import React, { useState } from "react";
import Logo from "../assets/Logo1.png";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Fade } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbars.css";
import { Drawer } from "@mui/material";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openOfferingsDropdown, setOpenOfferingsDropdown] = useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const menuOptions = [
    {
      text: "Home",
    },
    {
      text: "About",
    },
    {
      text: "Offerings",
      dropdown: true,
      options: ["Mentor Connect", "Investor Connect", "Grant Connect"],
    },
    {
      text: "Services",
      dropdown: true,
      options: [
        "Business Canvas",
        "Financial Modelling",
        "Pitch Deck creation",
        "Investor ready Kit",
        "Startup Tech Kit",
      ],
    },
    {
      text: "Contact",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleOpenOfferingsDropdown = () => {
    setOpenOfferingsDropdown(true);
    setOpenServicesDropdown(false);
  };

  const handleCloseOfferingsDropdown = () => {
    setOpenOfferingsDropdown(false);
  };

  const handleOpenServicesDropdown = () => {
    setOpenServicesDropdown(true);
    setOpenOfferingsDropdown(false);
  };

  const handleCloseServicesDropdown = () => {
    setOpenServicesDropdown(false);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    handleCloseOfferingsDropdown();
    handleCloseServicesDropdown();
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2">
      <div className="navbar-logo-container">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-10 h-auto" />
        </Link>
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) =>
          item.dropdown ? (
            <div
              key={item.text}
              className="navbar-dropdown relative"
              onMouseEnter={
                item.text === "Offerings"
                  ? handleOpenOfferingsDropdown
                  : handleOpenServicesDropdown
              }
              // onMouseLeave={
              //   item.text === "Offerings"
              //     ? handleCloseOfferingsDropdown
              //     : handleCloseServicesDropdown
              // }
            >
              <Link className="text-gray-800 cursor-pointer hover:text-blue-500">
                {item.text}
              </Link>
              {item.text === "Offerings" && openOfferingsDropdown && (
                <Menu
                  anchorEl={document.querySelector(".navbar-dropdown")}
                  open={openOfferingsDropdown}
                  onClose={handleCloseOfferingsDropdown}
                  MenuListProps={{
                    "aria-labelledby": "dropdown-offerings",
                  }}
                >
                  {item.options.map((option) => (
                    <MenuItem
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                    >
                      <Link
                        to={
                          option === "Mentor Connect"
                            ? "/mentor-connect"
                            : option === "Investor Connect"
                            ? "/investor-connect"
                            : option === "Grant Connect"
                            ? "/grant-connect"
                            : "/offerings"
                        }
                      >
                        {option}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              )}
              {item.text === "Services" && openServicesDropdown && (
                <Menu
                  anchorEl={document.querySelector(".navbar-dropdown")}
                  open={openServicesDropdown}
                  onClose={handleCloseServicesDropdown}
                  MenuListProps={{
                    "aria-labelledby": "dropdown-services",
                  }}
                >
                  {item.options.map((option) => (
                    <MenuItem
                      key={option}
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </div>
          ) : (
            <Link
              key={item.text}
              to={
                item.text === "About"
                  ? "/about"
                  : item.text === "Contact"
                  ? "/contact"
                  : "/"
              }
              className="text-gray-800 hover:text-blue-500"
            >
              {item.text}
            </Link>
          )
        )}
        <Link to="/register">
          <button className="primary-button">Join Now</button>
        </Link>
      </div>

      {isMobile ? (
        <div className="navbar-menu-container">
          <IconButton onClick={() => setOpenMenu(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      ) : (
        <div className="navbar-menu-container">
          <IconButton onClick={() => setOpenMenu(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      )}

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Fade in={openMenu}>
          <Box sx={{ width: 250 }}>
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  {item.dropdown ? (
                    <ListItemButton>
                      <button className="primary-button">{item.text}</button>
                    </ListItemButton>
                  ) : (
                    <ListItemButton
                      component={Link}
                    to={
                      item.text === "About"
                        ? "/about"
                        : item.text === "Contact"
                        ? "/contact"
                        : "/"
                    }
                  >
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  )}
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Fade>
      </Drawer>
    </nav>
  );
};

export default Navbar;
