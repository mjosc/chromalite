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

  private schemesRef = React.createRef<HTMLDivElement>();

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
        <div className='Project__schemes' ref={this.schemesRef}>
          {this.state.schemes.map((scheme, index) => (
            <div className='Project__scheme' style={{ width: '25em' }}>
              {scheme.map((color, idx, arr) => (
                <div
                  className='Project__color'
                  style={{ width: `${400 / arr.length}em`, backgroundColor: color }}
                >test</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
