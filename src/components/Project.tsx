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
  componentDidMount() {
    
  }
  render() {
    return (
      <div className='Project'>
        <ProjectMenu />
        <div className='Project_schemes'>
        
        </div>
      </div>
    )
  }
}

export default Project;
