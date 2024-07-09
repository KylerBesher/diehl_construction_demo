import React, { useState } from "react";
import { Link } from "gatsby";
import { Facebook as FacebookIcon, Phone as PhoneIcon, Email as EmailIcon } from '@mui/icons-material';
import logo from "../img/diehl_logo.png";

const height = '100px';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav
        className="overflow-x-scroll overflow-x-visible-ns flex justify-between items-center bg-white relative"
        role="navigation"
        aria-label="main-navigation"
        style={{ borderBottom: "2px solid #555", height: height }}
      >
        {/* Logo */}
        <Link to="/" className="pa3 db mr4 h-100 w4 flex-none">
          <img src={logo} alt="Diehl logo" className="br0 db mb0 w-100" />
        </Link>

        {/* Primary Nav */}
        <ul className="flex b pr2 grey-3">
          <li><Link className="pv3 ph2 no-underline dn db-l" to="/about">Basement & Foundation Repair</Link></li>
          <li><Link className="pv3 ph2 no-underline dn db-l" to="/products">Waterproofing</Link></li>
          <li><Link className="pv3 ph2 no-underline dn db-l" to="/blog">Dirt Work</Link></li>
          <li><Link className="pv3 ph2 no-underline dn db-l" to="/contact">Egress Window Installation</Link></li>
          <li><Link className="pv3 ph2 no-underline dn db-l" to="/contact/examples">Contact</Link></li>
        </ul>

        <div className="flex items-center">
          <a
            className="link dim"
            href="https://www.facebook.com/basementrepair"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon color="primary" className="mr3" />
          </a>
          <a href="tel:785-827-3804" className="link dim ml3 flex items-center">
            <PhoneIcon className="mr2" /> 785.827.3804
          </a>
          <a href="mailto:diehlconstructionks@gmail.com" className="link dim ml3 flex items-center">
            <EmailIcon className="mr2" /> diehlconstructionks@gmail.com
          </a>
        </div>

        <div className="dn-l">
          <button
            id="navBurger"
            className={`hamburger hamburger--collapse ${isActive ? "is-active" : ""}`}
            type="button"
            aria-expanded={isActive}
            onClick={() => setIsActive(!isActive)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </nav>

      <div id="sideNav" className={`dn ${isActive ? "db" : ""}`}>
        <ul className="">
          <li><Link className="pv3 tc bg-grey-1 ph2 no-underline db" to="/about">Basement & Foundation Repair</Link></li>
          <li><Link className="pv3 tc ph2 no-underline db" to="/products">Waterproofing</Link></li>
          <li><Link className="pv3 tc ph2 no-underline db" to="/blog">Dirt Work</Link></li>
          <li><Link className="pv3 tc bg-grey-1 ph2 no-underline db" to="/contact">Egress Window Installation</Link></li>
          <li><Link className="pv3 tc ph2 no-underline db" to="/contact/examples">Contact</Link></li>
        </ul>
      </div>
      <div style={{ height: height }}></div>
    </>
  );
};

export default Navbar;
