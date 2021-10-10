import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class PortfolioClass extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
      })
    ).isRequired,
    filters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {selected: 'All', projects: this.props.projects};
    this.onSelectFilter = this.onSelectFilter.bind(this);
    // экономим память на невызове стрелки ()=>{onSelectFilter} в render()
  }

  onSelectFilter(filter) { 
    // для сведения1:      
    // this.setState((prevState) => ({
    //   selected: filter,
    //   projects:
    //     filter === 'All'
    //       ? this.props.projects
    //       : this.props.projects.filter(
    //           (project) => project.category === filter
    //         ),
    // }));
      
    // для сведения2:  
    // this.setState((prevState) => {
    //   return {
    //     selected: filter,
    //     projects:
    //       filter === 'All'
    //         ? this.props.projects
    //         : this.props.projects.filter(
    //             (project) => project.category === filter
    //           ),
    //   };
    // });

        this.setState((prevState) => {
          // console.log('prevState.selected, filter ', prevState.selected, filter);
          // если фильтр уже выбран, то state не меняем
          if (filter === prevState.selected) return;
          // если фильтр не 'All', то меняем state (фильтруем)
          if (filter !== 'All')
            return {
              selected: filter,
              projects: this.props.projects.filter(
                (project) => project.category === filter
              ),
            };
          // если фильтр 'All', то меняем state (выдаем исходный пропс)
          return {
            selected: filter,
            projects: this.props.projects,
          };
        });
  }

  render() {
    const { filters } = this.props;
    const { selected, projects } = this.state;
    
    return (
      <>
        <Toolbar
          filters={filters}
          selected={selected}
          onSelectFilter={this.onSelectFilter}
        />
        <ProjectList projects={projects} />
      </>
    );
  }
}
