import React from 'react';
import PropTypes from 'prop-types';

const Image = ({image, description, containerClass, descriptionClass, imageClass, hover=true, ...other}) => {
  const formatImageClass = () => {
    if (hover)
      return `z-0 transition duration-300 filter group-hover:grayscale group-hover:brightness-50 group-hover:blur-xs ${imageClass || ''}`;
    return `z-0 pointer transition duration-300 transform lg:group-hover:scale-103 ${imageClass || ''}`;
  }

  return (
    <div className={`relative group ${containerClass || ''}`}>
      {hover && <h1 className={`absolute z-10 text-white underline hidden group-hover:block group-hover: top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 ${descriptionClass || ''}`}>{description}</h1>}
      <img className={formatImageClass()} {...other} src={image} alt={description || "Projeto"}/>
    </div>
  );
};

Image.propTypes = {
  image: PropTypes.node.isRequired,
  description: PropTypes.string,
  containerClass: PropTypes.string,
  descriptionClass: PropTypes.string,
  imageClass: PropTypes.string,
};

export default Image;