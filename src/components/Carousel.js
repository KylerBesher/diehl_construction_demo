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
    height: '500px', // Set this to your desired height
    width: '100%',
  };

  return (
    <>
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        dynamicHeight={false}
        swipeable={true}
        useKeyboardArrows={true}
        className="custom-carousel"
        onClickItem={(index) => {
          setPhotoIndex(index);
          setIsOpen(true);
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
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
    </>
  );
};

export default CarouselWrapper;
