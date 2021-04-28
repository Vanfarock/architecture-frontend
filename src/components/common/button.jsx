import React from 'react';

const Button = ({children, className, ...other}) => {
  return (
    <button {...other} className={`bg-indigo-500 rounded-md text-white ${className}`}>
      {children}
    </button>
  );
};

export default Button;