import React from "react";
import { Link } from "gatsby";
import { Facebook as FacebookIcon } from '@mui/icons-material';
import logo from "../img/diehl_logo.png";

const Footer = () => {
  return (
    <footer className="footer has-background-white has-text-black-ter">
      <div className="content has-text-centered has-text-black">
        <img
          src={logo}
          alt="Diehl Construction"
          style={{ width: "14em" }}
        />
      </div>
      <div className="content has-background-white has-text-black-ter">
        <div className="container has-background-white has-text-black-ter">
          <div className="columns is-centered">
            <div className="column is-half has-text-centered">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link className="navbar-item has-text-black" to="/privacy-policy">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item has-text-black" to="/terms-of-use">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item has-text-black" to="/cookie-policy">
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-half has-text-centered">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <a
                      className="navbar-item has-text-black"
                      href="https://www.facebook.com/basementrepair"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="icon">
                        <FacebookIcon color="primary" />
                      </span>
                      &nbsp;Follow us on Facebook
                    </a>
                  </li>
                  <li>
                    <span className="navbar-item has-text-black">
                      Call us: (555) 123-4567
                    </span>
                  </li>
                  <li>
                    <span className="navbar-item has-text-black">
                      Email: info@diehlconstruction.com
                    </span>
                  </li>
                  <li>
                    <span className="navbar-item has-text-black">
                      Address: 123 Main St, Salina, KS 67401
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
