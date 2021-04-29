import React from 'react';
// import PropTypes from 'prop-types';
import SectionHeader from './sectionHeader';
import Dashboard from './dashboard';

const Section = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-0">
      <SectionHeader>Teste</SectionHeader>
      <Dashboard />
    </div>
  );
};

Section.propTypes = {};

export default Section;