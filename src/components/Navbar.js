import React, { useState } from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
// import { Facebook } from '@mui/icons';
// import { FacebookIcon } from '@mui/icons-material';
import { Facebook as FacebookIcon, Settings as SettingsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';


import logo from "../img/diehl_logo.png";
const height = '80px';
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav
        style={{ position: "fixed", width: "100%", zIndex: "1000", height: height }}
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <button
              className={`navbar-burger burger ${isActive && "is-active"}`}
              aria-expanded={isActive}
              onClick={() => setIsActive(!isActive)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <ul
            id="navMenu"
            className={` navbar-start has-text-centered navbar-menu ${isActive && "is-active"
              }`}
          >
            {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
            <li className="navbar-item" style={{ padding: "0px" }}>
              <Link className="navbar-item" to="/foundation-repair">
                Basement & Foundation Repair
              </Link>
            </li>
            <li className="navbar-item" style={{ padding: "0px" }}>
              <Link className="navbar-item" to="/products">
                Waterproofing
              </Link>
            </li>
            <li className="navbar-item" style={{ padding: "0px" }}>
              <Link className="navbar-item" to="/blog">
                Dirt Work
              </Link>
            </li>
            <li className="navbar-item" style={{ padding: "0px" }}>
              <Link className="navbar-item" to="/contact">
                Egress Window Installation
              </Link>
            </li>
            <li className="navbar-item" style={{ padding: "0px" }}>
              <Link className="navbar-item" to="/contact/examples">
                Contact
              </Link>
            </li>
            <li className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://www.facebook.com/basementrepair"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FacebookIcon color="primary" />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ height: height }}></div >
    </>
  );
};

export default Navbar;
