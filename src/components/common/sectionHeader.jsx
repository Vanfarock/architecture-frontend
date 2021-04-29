import React from 'react';
import { PropTypes } from 'prop-types';

const SectionHeader = ({children, className, ...other}) => {
  return (
    <h1 {...other} className={`text-lg underline hover:font-bold ${className}`}>{children}</h1>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SectionHeader;