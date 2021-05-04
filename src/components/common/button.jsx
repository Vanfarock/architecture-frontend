import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children, className}) => {
  return (
    <>
      <button className={`transition bg-indigo-500 hover:bg-indigo-600 rounded-md text-white ${className || ''}`}>
          {children}
        </button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Button;