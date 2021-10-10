import React from 'react';
import PropTypes from 'prop-types'

export default function Toolbar(props) {
  // console.log('Toolbar_props', props);
  const { filters, selected, onSelectFilter } = props;
  return (
    <div className="toolbar">
      {filters.map((filter) => (
        <button
          className={
            selected === filter ? "selected toolbar_button" : "toolbar_button"
          }
          key={filter}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
  }
