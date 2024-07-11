import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import ScrollLink from "./ScrollToFooter";

export default function FullWidthImage(props) {
  const {
    height = '50vh',
    minHeight = '750px',
    img,
    title,
    subheading,
    imgPosition = "center center",
    boxAlign = "right", // Add new prop for box alignment
  } = props;

  const boxContentStyle = {
    width: "calc(50% - 40px)",
    position: "absolute",
    top: "40px",
    bottom: "40px",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "20px",
    borderRadius: "10px",
    ...(boxAlign === "left" ? { left: "40px" } : { right: "40px" }), // Conditionally set left or right
  };

  return (
    <React.Fragment>
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
          position: "relative",
          height: height,
          minHeight: minHeight,
        }}
      >
        {img?.url ? (
          <img
            src={img}
            style={{ gridArea: "1/1", height: "100%", width: "100%", objectFit: "cover", objectPosition: imgPosition }}
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            style={{ gridArea: "1/1", height: "100%", width: "100%", objectFit: "cover", objectPosition: imgPosition }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            className="box-content"
            style={boxContentStyle}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              {title && (
                <h1
                  className="has-text-weight-bold is-size-2-mobile is-size-2-tablet is-size-2-widescreen has-span-inside"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {ReactHtmlParser(title)}
                </h1>
              )}
              <hr style={{ margin: '.5rem', padding: 0 }} />
              {subheading && (
                <h2
                  className="is-size-6-mobile is-size-6-tablet is-size-5-widescreen"
                  style={{
                    color: "#fff",
                    marginBottom: ".5em",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {subheading}
                </h2>
              )}
              <div style={{ marginTop: "1em" }}>
                <ScrollLink classes="btn has-background-primary" targetId="contact-us">
                  Get a Free Estimate
                </ScrollLink>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        .box-content {
          margin: 20px; // Add margin for spacing around edges
        }

        @media (max-width: 1023px) {
          .box-content {
            width: calc(100% - 60px) !important;
            left: 10px;
            right: 10px ;
            margin: 20px; // Add margin for spacing around edges
          }
        }
      `}</style>
    </React.Fragment>
  );
}

FullWidthImage.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  height: PropTypes.string,
  subheading: PropTypes.string,
  boxAlign: PropTypes.string, // Add new prop type
};
