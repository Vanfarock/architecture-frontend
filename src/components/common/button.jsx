import React from 'react';
import PropTypes from 'prop-types';
import commonStyles from './../util/commonStyles';

const Button = ({children, className}) => {
  return (
    <>
      <button className={`bg${commonStyles.primaryColor} hover:bg${commonStyles.primaryColorHover} transition rounded-md text-white ${className || ''}`}>
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