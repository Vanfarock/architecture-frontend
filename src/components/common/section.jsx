import React from 'react';
import SectionHeader from './sectionHeader';
import Dashboard from './dashboard';
import commonStyles from '../util/commonStyles';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const Section = ({label, items, path, containerClassName}) => {
  
  const renderHeader = () => {
    if (path) {
      return (
        <Link to={path}>
          <SectionHeader className="pb-1">{label}</SectionHeader>
        </Link>
      );
    }
    return <SectionHeader className="pb-1">{label}</SectionHeader>;
  }

  return (
    <div className={`pb-6 md:pb-3 ${commonStyles.responsiveWidth} ${commonStyles.responsiveMargin} ${containerClassName || ''}`}>
      {renderHeader()}
      <Dashboard items={items} />
    </div>
  );
};

Section.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  path: PropTypes.string,
  containerClassName: PropTypes.string
};

export default Section;