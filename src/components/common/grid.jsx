import React from 'react';
import { PropTypes } from 'prop-types';

const Grid = ({items}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {items.map(item => item.content())}
    </div>
  );
};

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}

export default Grid;