import React from 'react';
import { PropTypes } from 'prop-types';

const SectionHeader = ({children, className, ...other}) => {
  return (
    <h1 {...other} className={`inline-block text-xl md:text-2xl underline hover:font-bold ${className || ''}`}>{children}</h1>
  );
};

SectionHeader.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SectionHeader;