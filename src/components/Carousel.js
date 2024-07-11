import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-image-lightbox/style.css';
import Lightbox from 'react-image-lightbox';

const CarouselWrapper = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const imageStyle = {
    objectFit: 'cover',
    height: '300px', // Adjust this height as needed
    width: '100%',
  };

  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        autoPlay
        infiniteLoop
        swipeable={false}
        interval={10000}
        useKeyboardArrows
        className="custom-carousel"
        centerMode
        centerSlidePercentage={33.33} // Adjust to show 3 images at a time
        onClickItem={(index) => {
          setPhotoIndex(index);
          setIsOpen(true);
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image.publicURL} alt={image.name} style={imageStyle} />
            {image.caption && <p className="legend">{image.caption}</p>}
          </div>
        ))}
      </Carousel>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].publicURL}
          nextSrc={images[(photoIndex + 1) % images.length].publicURL}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].publicURL}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      <style jsx>{`
        .custom-carousel .carousel .slide {
          background: none;
        }
        .carousel-image-container {
          padding: 0 5px; /* Adjust spacing between images */
        }
        .custom-carousel .carousel .thumbs-wrapper {
          margin: 0;
        }
        .custom-carousel .carousel .control-dots .dot {
          background: #f79c42;
        }
        .legend {
          background: rgba(0, 0, 0, 0.5);
          color: #fff;
          padding: 10px;
          font-size: 14px;
        }
      `}</style>
    </>
  );
};

export default CarouselWrapper;
