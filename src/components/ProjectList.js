import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';

export default function ProjectList(props) {
  // console.log('ProjectList_props', props);
  const { projects } = props;
  const styles = {
    width: '200px',
    height: '200px',
  }

  return (
    <div className="projects_list">
      {projects.map((project) => (
        <img
          className="project"
          key={uuidv4()}
          src={project.img}
          style={styles}
          alt={project.img}
        />
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};
