import React, {useState} from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Facebook as FacebookIcon } from '@mui/icons-material';
import logo from "../img/diehl_logo.png";

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
                  order
                }
                fields {
                  slug
                }
              }
            }
          }
        }
  `)

  const pages = data?.allMarkdownRemark?.edges || [];
  const height = '80px';
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
              <img src={logo} alt="Diehl Construction" style={{ width: "88px" }} />
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
            className={`navbar-start has-text-centered navbar-menu ${isActive ? "is-active" : ""}`}
          >
            {pages.length ? (
              pages.map(({ node: page }) => (
                <li key={page.id} className="navbar-item" style={{ padding: "0px" }}>
                  <Link className="navbar-item" to={page.fields.slug}>
                    {page.frontmatter.title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="navbar-item" style={{ padding: "0px" }}>
                <span>No pages found</span>
              </li>
            )}
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
      <div style={{ height: height }}></div>
    </>
  );
}

// import React, { useState } from "react";
// import { Link, StaticQuery, graphql } from "gatsby";
// import { Facebook as FacebookIcon } from '@mui/icons-material';
// import logo from "../img/diehl_logo.png";

// const height = '80px';

// const Navbar = () => {
//   const [isActive, setIsActive] = useState(false);

//   return (
//     <StaticQuery
//       query={graphql`
//         query PagesQuery {
//           allMarkdownRemark(
//             sort: { order: ASC, fields: [frontmatter___title] }
//             filter: { frontmatter: { templateKey: { eq: "general-page" } } }
//           ) {
//             edges {
//               node {
//                 id
//                 frontmatter {
//                   title
//                 }
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={data => {
//         // Check if data exists and has the expected structure
//         const pages = data?.allMarkdownRemark?.edges || [];

//         return (
//           <>
//             <nav
//               style={{ position: "fixed", width: "100%", zIndex: "1000", height: height }}
//               className="navbar is-transparent"
//               role="navigation"
//               aria-label="main-navigation"
//             >
//               <div className="container">
//                 <div className="navbar-brand">
//                   <Link to="/" className="navbar-item" title="Logo">
//                     <img src={logo} alt="Diehl Construction" style={{ width: "88px" }} />
//                   </Link>
//                   <button
//                     className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
//                     aria-expanded={isActive}
//                     onClick={() => setIsActive(!isActive)}
//                   >
//                     <span />
//                     <span />
//                     <span />
//                   </button>
//                 </div>
//                 <ul
//                   id="navMenu"
//                   className={`navbar-start has-text-centered navbar-menu ${isActive ? "is-active" : ""}`}
//                 >
//                   {pages.length ? (
//                     pages.map(({ node: page }) => (
//                       <li key={page.id} className="navbar-item" style={{ padding: "0px" }}>
//                         <Link className="navbar-item" to={page.fields.slug}>
//                           {page.frontmatter.title}
//                         </Link>
//                       </li>
//                     ))
//                   ) : (
//                     <li className="navbar-item" style={{ padding: "0px" }}>
//                       <span>No pages found</span>
//                     </li>
//                   )}
//                   <li className="navbar-end has-text-centered">
//                     <a
//                       className="navbar-item"
//                       href="https://www.facebook.com/basementrepair"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <span className="icon">
//                         <FacebookIcon color="primary" />
//                       </span>
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </nav>
//             <div style={{ height: height }}></div>
//           </>
//         );
//       }}
//     />
//   );
// };

// export default Navbar;
