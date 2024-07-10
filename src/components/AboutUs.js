import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function AboutUs(props) {
  const {
    img,
    title,
    subheading,
    mainText,
    imgPosition = "left center", // Change default position to left center
  } = props;

  const image = getImage(img) || img;

  return (
    <React.Fragment>
      <div className="columns is-vcentered" style={{ marginTop: '6px', marginBottom: '3px' }}>
        <div className="column is-half" style={{ padding: 0, display: 'flex', alignItems: 'stretch' }}>
          {!img?.url ? (
            <GatsbyImage
              image={image}
              style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'left center' }} // Set objectPosition to left center
              objectPosition={imgPosition}
              layout="fullWidth"
              aspectratio={2 / 1}
              alt=""
              formats={["auto", "webp", "avif"]}
            />
          ) : (
            <div
              style={{
                backgroundImage: `url(${img.url})`,
                backgroundPosition: 'left center', // Set backgroundPosition to left center
                backgroundSize: "cover",
                height: '100%',
                width: '100%',
              }}
            ></div>
          )}
        </div>
        <div className="column is-half has-text-left is-flex is-align-items-center" style={{ padding: '0px' }}>
          <div className="content" style={{ width: '100%', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            {title && (
              <h1 className="title is-1 has-text-weight-bold has-text-primary" style={{ marginBottom: '20px' }}>
                {title}
              </h1>
            )}
            {subheading && (
              <p className="subtitle is-5 has-text-grey-dark" style={{ marginBottom: '20px' }}>
                {subheading}
              </p>
            )}
            {mainText && (
              <p className="is-size-5 has-text-grey">
                {mainText}
              </p>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .columns.is-vcentered {
          align-items: stretch;
        }
        .column.is-half {
          display: flex;
          align-items: stretch;
        }
      `}</style>
    </React.Fragment>
  );
}

AboutUs.propTypes = {
  img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subheading: PropTypes.string,
  mainText: PropTypes.string,
  imgPosition: PropTypes.string,
};
