import * as React from 'react';

import ProjectMenu from './ProjectMenu';
import './Project.css';

import { database as db, SchemeCollection, Scheme } from '../database';

interface Props {

}

interface State {
  schemesWidth: number
  schemes: SchemeCollection
}

class Project extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      schemesWidth: 0,
      schemes: []
    }
  }

  componentWillMount() {
    db.get('api/schemes')
      .then(res => this.setState({ schemes: res.data as SchemeCollection }))
      .catch(err => console.log(err.response.data))
  }

  render() {
    return (
      <div className='Project'>
        <ProjectMenu />
        <div className='Project__schemes'>
          {this.state.schemes.map((scheme, index) => (
            <div className='Project__scheme'>
              {scheme.map((color, idx, arr) => (
                <div
                  className='Project__color'
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
