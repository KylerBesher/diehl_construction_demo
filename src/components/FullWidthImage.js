import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

export default function FullWidthImage(props) {
  const {
    height = '75vh',
    minHeight = '600px',
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
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "40px 40px",
    borderRadius: "5px",
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
        }}
      >
        {img?.url ? (
          <img
            src={img}
            style={{ gridArea: "1/1", height: height, minHeight: minHeight, width: "100%", objectFit: "cover", objectPosition: imgPosition }}
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            style={{ gridArea: "1/1", height: height, minHeight: minHeight, width: "100%", objectFit: "cover", objectPosition: imgPosition }}
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
                  className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen has-span-inside"
                  style={{
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {ReactHtmlParser(title)}
                </h1>
              )}
              <hr />
              {subheading && (
                <h3
                  className="has-text-weight-bold  is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                  style={{
                    color: "#fff",
                    marginBottom: ".5em",
                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  {subheading}
                </h3>
              )}
              <div style={{ marginTop: "1em" }}>
                <Link className="btn has-background-primary" to="/contact">
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <style jsx>{`
        @media (max-width: 1023px) {
          .box-content {
            width: calc(100% - 80px);
            left: ${boxAlign === "left" ? "40px" : "auto"};
            right: ${boxAlign === "right" ? "40px" : "auto"};
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
