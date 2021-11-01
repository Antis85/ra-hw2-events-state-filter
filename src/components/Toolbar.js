import React from 'react';
import PropTypes from 'prop-types';

export default function Toolbar(props) {
  // console.log('Toolbar_props', props);
  const { filters, selected, onSelectFilter } = props;
  const filtersList = filters.map((filter) => (
    <button
      className={
        selected === filter ? 'selected toolbar_button' : 'toolbar_button'
      }
      key={filter}
      onClick={() => onSelectFilter(filter)}
    >
      {filter}
    </button>
  ));
  return <div className="toolbar">{filtersList}</div>;
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};
