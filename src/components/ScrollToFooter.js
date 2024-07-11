import React from 'react';

const ScrollLink = ({ targetId, classes, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a href={`#${targetId}`} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default ScrollLink;