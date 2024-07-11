import * as React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ConstructionIcon from '@mui/icons-material/Construction';
import OpacityIcon from '@mui/icons-material/Opacity';
import LandscapeIcon from '@mui/icons-material/Landscape';
import WindowIcon from '@mui/icons-material/Window';
import ReactHtmlParser from "react-html-parser";

const getIcon = (icon, name) => {
  const fontSize = '36px';

  const iconMap = {
    foundation: ConstructionIcon,
    waterproofing: OpacityIcon,
    dirtworking: LandscapeIcon,
    windows: WindowIcon,
  };

  const IconComponent = iconMap[icon] || ConstructionIcon;

  return (
    <div>
      <IconComponent style={{ fontSize: '48px' }} />
      <h2 className="has-text-primary" style={{ margin: "10px 0 0 0", fontSize, fontWeight: 'bold' }}>
        {ReactHtmlParser(name)}
      </h2>
    </div>
  );
};

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline" style={{ margin: '0px' }}>
    {gridItems.map((item, index) => {
      const isFullWidth = index === gridItems.length && index % 2 === 1; // Every third item is full width
      const columnClass = isFullWidth ? "column is-12" : "column is-6";
      const imageStyle = {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "0px",
      };

      const { alt = "", childImageSharp, image, text, icon, name, slug, buttonText } = item;
      const imageData = getImage(childImageSharp || (image && image.childImageSharp));

      return (
        <div key={text} className={`${columnClass} p-0`} >
          <div style={{ padding: '3px', position: 'relative', height: '500px' }}>
            <section className="p-0" style={{ width: '100%', height: '100%' }}>
              {imageData ? (
                <GatsbyImage image={imageData} style={imageStyle} alt={alt} />
              ) : (
                image && <img style={imageStyle} src={image} alt={alt} />
              )}
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: "#fff",
                  background: "rgba(0, 0, 0, 0.5)",
                  padding: "20px",
                  borderRadius: "10px",
                  width: "80%",
                }}
                className="overlay"
              >
                <div>
                  {getIcon(icon, name)}
                </div>
                <h2 style={{ margin: "10px 0 0 0" }}>{text}</h2>

                <p style={{ margin: "2em 0 2em 0" }}>{alt}</p>
                <Link className="btn has-background-primary" to={slug} >
                  {buttonText || "Learn More"}
                </Link>
              </div>
            </section>
          </div>
        </div>
      );
    })}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      childImageSharp: PropTypes.object,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
      text: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
