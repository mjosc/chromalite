import * as React from 'react';

import ProjectMenu from './ProjectMenu';
import './Project.css';

interface IProps {

}

interface IState {

}

class Project extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    return (
      <div className='Project'>
        <ProjectMenu />
        <div className='Project_schemes' />
      </div>
    )
  }
}

export default Project;
