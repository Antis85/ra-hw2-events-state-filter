import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function ProjectList(props) {
  // console.log('ProjectList_props', props);
  const { projects } = props;
  const projectsList = projects.map((project) => (
    <img
      className="project"
      key={uuidv4()}
      src={project.img}
      alt={project.img}
    />
  ));

  return <div className="projects_list">{projectsList}</div>;
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
