import React from 'react';
import PropTypes from 'prop-types';

const FlexComponent = ({ Component, ...other }) => {
  return (
    <div className="flex-1">
      <Component {...other} />
    </div>
  );
};

FlexComponent.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default FlexComponent;