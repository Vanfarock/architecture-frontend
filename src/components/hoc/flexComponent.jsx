import React from 'react';
import PropTypes from 'prop-types';

const FlexComponent = ({ Component }) => {
  return (
    <div className="flex-shrink">
      <Component />
    </div>
  );
};

FlexComponent.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]).isRequired,
};

export default FlexComponent;