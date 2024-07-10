import React from "react";
import PropTypes from "prop-types";

export default function AboutUs(props) {
  const {
    title,
    subheading,
    mainText,
    buttonText = "Learn More",
    buttonLink = "#",
  } = props;

  return (
    <React.Fragment>
      <div className="about-us-container">
        <div className="main-content">
          {mainText && (
            <p className="main-text">
              {mainText}
            </p>
          )}
          <a href={buttonLink} className="learn-more-button">
            {buttonText}
          </a>
        </div>
        <div className="about-us-content">
          {title && (
            <h2 className="about-title">
              {title}
            </h2>
          )}
          {subheading && (
            <p className="about-subheading">
              {subheading}
            </p>
          )}
        </div>
      </div>
      <style jsx>{`
        .about-us-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 50vh;
          color: #4A4A4A;
        }
        .main-content {
          background-color: #07407B;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          color: #fff;
        }
        .main-text {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .learn-more-button {
          display: inline-block;
          padding: 10px 20px;
          color: #fff;
          background-color: transparent;
          border: 2px solid #f79c42;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
        }
        .about-us-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .about-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .about-subheading {
          font-size: 1.25rem;
          font-weight: normal;
        }
        @media (max-width: 768px) {
          .about-us-container {
            grid-template-columns: 1fr;
          }
          .main-content {
            align-items: center;
            text-align: center;
          }
          .about-us-content {
            text-align: center;
          }
        }
      `}</style>
    </React.Fragment>
  );
}

AboutUs.propTypes = {
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainText: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};
