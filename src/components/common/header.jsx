import React from 'react';

const Header = ({children, className, ...other}) => {
  return (
    <h1 {...other} className={`text-white text-xl md:text-4xl lg:text-6xl mb-2 ${className}`}>{children}</h1>
  );
};

export default Header;