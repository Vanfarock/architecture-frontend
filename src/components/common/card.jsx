import React from 'react';
import PropTypes from 'prop-types';

const Card = ({text, title, containerClassName, titleClassName, textClassName}) => {
  return (
    <div className={`min-h-full max-h-200 overflow-hidden ${containerClassName || ''}`}>
      <h1 className={titleClassName || ''}>{title}</h1>
      <h1 className={`text-overflow ${textClassName || ''}`}>
        {text}
      </h1>
    </div>
  );
};

Card.propTypes = {
  text: PropTypes.string.isRequired,
  containerClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  textClassName: PropTypes.string,
};

export default Card;