import * as React from 'react';

import ProjectMenu from './ProjectMenu';
import './Project.css';

import { database as db } from '../db';

interface Props {

}

interface State {

}

class Project extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
    this.state = {
      
    }
  }
  componentDidMount() {
    db.add(['#456789'])
      .then(res => console.log(res))
      .catch(err => console.log(err));
    db.get(1)
      .then(res => console.log(res))
      .catch(err => console.log(err.response))
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
