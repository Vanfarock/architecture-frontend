import React from 'react';
import SectionHeader from './sectionHeader';
import Dashboard from './dashboard';
import { PropTypes } from 'prop-types';

const Section = ({label, items, containerClassName}) => {
  return (
    <div className={`max-w-screen-2xl mx-1 sm:mx-2 md:mx-3 lg:mx-4 xl:mx-5 2xl:mx-4 2xl:mx-auto sm:mb-10 ${containerClassName || ''}`}>
      <SectionHeader className="pb-1">{label}</SectionHeader>
      <Dashboard items={items} />
    </div>
  );
};

Section.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  containerClassName: PropTypes.string
};

export default Section;