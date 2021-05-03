import React from 'react';
import SectionHeader from './sectionHeader';
import Dashboard from './dashboard';
import commonStyles from '../util/commonStyles';
import { PropTypes } from 'prop-types';

const Section = ({label, items, containerClassName}) => {
  return (
    <div className={`pb-6 md:pb-3 ${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin} ${containerClassName || ''}`}>
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