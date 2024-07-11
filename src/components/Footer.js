import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from '@material-ui/icons/Facebook';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import logo from "../img/diehl_logo_alt.png";
import ContactForm from "./ContactForm";


const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
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
  `);

  const pages = data?.allMarkdownRemark?.edges || [];

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
        <img src={logo} alt="Diehl Construction" style={{ width: "14em" }} />
      </div>
      <div className="content has-text-centered has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-6">
              <div className="container">
                <div className="content">
                  <h2 className="has-text-primary title is-2 ">Get in Touch With Us</h2>
                  <h4 className="has-text-white is-4" style={{ color: 'white' }}>Whether you are looking for an estimate, have a question, or just want to say hello, we would love to hear from you! Fill out the form below and we'll get back to you as soon as we can.</h4>
                  <ContactForm fontColor={'white'} />
                </div>
              </div>

            </div>
            <div className="column is-6">
              <div style={{ padding: "1rem" }}>
                <h2 className="has-text-primary title is-2 ">Find Us</h2>
                <div className="contact-info" style={{ textAlign: "left", color: "white", textDecoration:"underline", marginBottom: '1rem'}}>
                  <div className="contact-item" style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <PhoneIcon className="has-text-primary" />
                    <a href="tel:+17858273804" style={{ marginLeft: "0.5rem", color: "white" }}>(785) 827-3804</a>
                  </div>
                  <div className="contact-item" style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
                    <EmailIcon className="has-text-primary" />
                    <a href="mailto:diehlconstructionks@gmail.com" style={{ marginLeft: "0.5rem", color: "white" }}>diehlconstructionks@gmail.com</a>
                  </div>
                  <div className="contact-item" style={{ display: "flex", alignItems: "center" }}>
                    <LocationOnIcon className="has-text-primary" />
                    <a href="https://www.google.com/maps?q=521+Bishop+St+Salina,+KS+67401" target="_blank" rel="noopener noreferrer" style={{ marginLeft: "0.5rem", color: "white" }}>
                      521 Bishop St Salina, KS 67401
                    </a>
                  </div>
                </div>

                {/* <p className="has-text-white">
                  Diehl Construction is a family-owned and operated business specializing in foundation repair and waterproofing services in Kansas since 1975.
                </p> */}
                <iframe
                  width="100%"
                  height="380"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowfullscreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d562.9534681953385!2d-97.61446857056248!3d38.84712275924419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87bccf61a9bf52d9%3A0x657dededa1d24bf9!2sDiehl%20Construction!5e0!3m2!1sen!2sus!4v1720673169498!5m2!1sen!2sus"

                ></iframe>
                <div className="social-links" style={{ margin: "1rem 0" }}>
                  <a className="button is-light is-fullwidth" style={{ marginBottom: "0.5rem", color: 'blue' }} href="https://www.facebook.com/basementrepair">
                    <FacebookIcon style={{ width: "1em", height: "1em", marginRight: "0.5em" }} />
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
