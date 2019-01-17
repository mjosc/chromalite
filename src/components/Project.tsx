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
    db.post('api/hello', ['#456789'])
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response.data));
    db.get('api/schemes')
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data))
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
