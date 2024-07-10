import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

import AboutUs from "../components/AboutUs";
import CarouselWrapper from "../components/Carousel";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  images,
}) => {
  const heroImage = getImage(image) || image;
  const aboutImage = getImage(mainpitch.image) || mainpitch.image;
  return (
    <div>
      <FullWidthImage img={heroImage} title={heading} subheading={subheading} />
      <AboutUs img={aboutImage} title={mainpitch.title} subheading={mainpitch.description} />
      <Features gridItems={intro.blurbs} />
      <CarouselWrapper images={images} />
      {/* <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        Gallery
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  images: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const images = data.allFile.edges.map(edge => edge.node);

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        images={images}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            publicURL: PropTypes.string,
          }),
        })
      ),
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            icon
            name
            text
          }
          heading
          description
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
      edges {
        node {
          id
          name
          publicURL
          childImageSharp {
            gatsbyImageData(width: 600, quality: 80, layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;