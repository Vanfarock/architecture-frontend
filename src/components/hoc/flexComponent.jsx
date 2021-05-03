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
  Component: PropTypes.node.isRequired,
};

export default FlexComponent;