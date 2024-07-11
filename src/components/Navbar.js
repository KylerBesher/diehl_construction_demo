import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import logoAlt from "../img/diehl_logo_alt.png";
import ScrollLink from "./ScrollToFooter";
import ReactHtmlParser from "react-html-parser";

export default function Header() {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order, frontmatter___title] }
        filter: { frontmatter: { templateKey: { eq: "general-page" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              navTitle
              order
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const pages = data?.allMarkdownRemark?.edges || [];
  const height = '40px';
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav
        style={{ position: "fixed", width: "100%", zIndex: "1000", height: height }}
        className="navbar has-background-black"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-ite" title="Logo">
              <img src={logoAlt} style={{ height: '55px', marginTop: '10px', marginRight: '15px' }} alt="Diehl Construction" />
            </Link>
            <button
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
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
            className={`navbar-start has-text-centered navbar-menu has-background-black ${isActive ? "is-active" : ""}`}
          >
            {pages.map(({ node: page }) => (
              <li key={page.id} className="navbar-item" style={{ padding: "0px" }}>
                <Link className=" navbar-item " to={page.fields.slug} activeClassName="is-active-link">
                  {ReactHtmlParser(page.frontmatter.navTitle || page.frontmatter.title)}
                </Link>
              </li>
            ))}
            <li key={'contact'} className="navbar-item" style={{ padding: "0px" }}>
              <ScrollLink classes="navbar-item" targetId="footer">
                Contact
              </ScrollLink>
            </li>

            <li className="navbar-end has-text-centered">
              <a className="navbar-item   " href="tel:+17858273804">
                <span className="icon">
                  <PhoneIcon />
                </span>
                <span style={{ marginLeft: '5px' }}>Call us</span>
              </a>
            </li>
            <li className="navbar-item has-text-centered">
              <a className="navbar-item   " href="mailto:diehlconstructionks@gmail.com">
                <span className="icon">
                  <EmailIcon />
                </span>
                <span style={{ marginLeft: '5px' }}>Email us</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div style={{ height: height }}></div>
    </>
  );
}
