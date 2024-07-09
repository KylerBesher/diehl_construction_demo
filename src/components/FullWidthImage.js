import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
  const {
    height = '75vh',
    img,
    title,
    subheading,
    imgPosition = "center center",
  } = props;

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
            style={{ gridArea: "1/1", height: height, width: "100%", objectFit: "cover", objectPosition: imgPosition, }}
            alt=""
          />
        ) : (
          <GatsbyImage
            image={img}
            style={{ gridArea: "1/1", height: height, width: "100%", objectFit: "cover", objectPosition: imgPosition, }}
            layout="fullWidth"
            aspectratio={3 / 1}
            alt=""
            formats={["auto", "webp", "avif"]}
          />
        )}
        {(title || subheading) && (
          <div
            className="box-content"
            style={{
              gridArea: "1/1",
              position: "absolute",
              top: "40px",
              bottom: "40px",
              color: "#fff",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            {title && (
              <h1
                className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
                style={{
                  marginBottom: "0.5em",
                  color: "#f79c42",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                {title}
              </h1>
            )}
            {subheading && (
              <h3
                className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
                style={{
                  color: "#f79c42",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
                }}
              >
                {subheading}
              </h3>
            )}
          </div>
        )}
      </div>
      <style jsx>{`
        @media (min-width: 1024px) {
          .box-content {
            width: 50%;
            left: 0;
            right: auto;
            margin-left: 40px;
          }
        }

        @media (max-width: 1023px) {
          .box-content {
            width: calc(100% - 80px);
            left: 40px;
            right: 40px;
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
};
