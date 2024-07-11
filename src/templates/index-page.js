import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";

import AboutUs from "../components/AboutUs";
import CarouselWrapper from "../components/Carousel";
import Features from "../components/Features";
import FullWidthImage from "../components/FullWidthImage";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  images,
  blurbs,
  testimonials
}) => {
  const heroImage = getImage(image) || image;
  const aboutImage = getImage(mainpitch.image) || mainpitch.image;
  return (
    <div>
      <FullWidthImage img={heroImage} title={heading} subheading={subheading} />
      <AboutUs img={aboutImage} title={mainpitch.title} subheading={mainpitch.description} />
      <Features gridItems={blurbs} />
      <Testimonials testimonials={testimonials} />
      <CarouselWrapper images={images} />
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
  testimonials: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  images: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const images = data.allFile.edges.map(edge => edge.node);
  const blurbs = data.allMarkdownRemark.edges.map(edge => ({
    slug: edge.node.fields.slug,
    text: edge.node.frontmatter.description,
    name: edge.node.frontmatter.title,
    ...edge.node.frontmatter
  }));

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
        blurbs={blurbs}
        testimonials={frontmatter.testimonials}
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
        testimonials{
          name
          quote
        }
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
      }
    }
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
                description
                boxAlign
                buttonText
                image{
                  childImageSharp {
                    gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                  }
                }
                icon
              }
              fields {
                slug
              }
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