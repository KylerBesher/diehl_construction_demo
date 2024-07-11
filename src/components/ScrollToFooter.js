import React from 'react';

const ScrollLink = ({ targetId, classes, callback, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if(callback){
      callback();
    }
    const targetElement = document.getElementById(targetId);
    const yOffset = -80; // Offset to scroll 80px above the target element
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <a href={`#${targetId}`} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;