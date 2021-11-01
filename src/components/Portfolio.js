import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default function Portfolio(props) {
  const { filtersList, projectsList } = props;
  const [state, setState] = useState({
    selected: 'All',
    projects: projectsList,
  });
  const onSelectFilter = (filter) => {
    setState((prevState) => {
      if (filter === prevState.selected) return prevState;
      return {
        selected: filter,
        projects:
          filter !== 'All'
            ? projectsList.filter((project) => project.category === filter)
            : projectsList,
      };
    });
  };

  return (
    <>
      <Toolbar
        filters={filtersList}
        selected={state.selected}
        onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={state.projects} />
    </>
  );
}

Portfolio.propTypes = {
  projectsList: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  filtersList: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
