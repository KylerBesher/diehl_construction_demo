import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import PropTypes from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Testimonials({ testimonials }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [maxHeight, setMaxHeight] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    if (autoAdvance) {
      const timer = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length, autoAdvance]);

  useEffect(() => {
    const heights = refs.current.map(ref => ref.clientHeight);
    setMaxHeight(Math.max(...heights));
  }, [testimonials]);

  const handlePrev = () => {
    setAutoAdvance(false);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoAdvance(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="has-text-centered">
          <h2 className="title is-2 has-text-primary" style={{marginBottom: '2rem'}}>Customer Showcase</h2>
        </div>
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeable={false}
          autoPlay
          infiniteLoop
          interval={10000}
          showArrows={false}
          useKeyboardArrows
          centerMode={false}
          centerSlidePercentage={50} // Adjust to show 3 images at a time
          selectedItem={currentTestimonial}
          onChange={(index) => setCurrentTestimonial(index)}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="carousel-item">
              <div className="tbox" style={{ height: `${maxHeight}px` }}>
                <div
                  className="content has-text-centered"
                  ref={(el) => (refs.current[index] = el)}
                >
                  <p className="title is-6 has-text-weight-bold">
                    {testimonial.name}
                  </p>
                  <p className="is-italic">{testimonial.quote}</p>
                  <div className="stars">
                    {[...Array(5)].map((_, starIndex) => (
                      <StarIcon
                        key={starIndex}
                        style={{ fontSize: '20px', color: '#f79c42' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="buttons are-centered">
          <button className="button is-primary" onClick={handlePrev}>
            <ArrowBackIcon />
          </button>
          <button className="button is-primary" onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <style jsx>{`
        .testimonials-section {
          padding: 3rem 1.5rem;
        }
        .tbox {
          background-color: #ffffff;
          border: 1px solid #e1e1e1;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 20px;
          box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .content {
          padding: 20px;
          position: relative;
          text-align: center;
        }
        .title.is-6 {
          color: #4a4a4a;
        }
        .is-italic {
          font-size: 1.25rem;
          color: #4a4a4a;
        }
        .stars {
          margin-top: 10px;
        }
        .button.is-primary {
          background-color: $primary;
          border-color: #f79c42;
          color: #000000;
          margin: 0 5px;
        }
        .button.is-primary:hover {
          border-color: #f89d4b;
          color: #ffffff;
        }

        .buttons.are-centered {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        @media (max-width: 768px) {
          .buttons.are-centered {
            width: 100%;
            justify-content: space-between;
          }
          .button.is-primary {
            flex: 1;
            margin: 0 5px;
          }
        }
      `}</style>
    </section>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
    })
  ).isRequired,
};
