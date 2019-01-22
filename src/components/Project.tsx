import * as React from 'react';

import ProjectMenu from './ProjectMenu';
import LoadingAnimation from './LoadingAnimation';

import './Project.css';

import { database as db, SchemeCollection, Scheme } from '../database';

interface Props {

}

interface State {
  isLoading: boolean
  schemes: SchemeCollection
}

class Project extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = {
      isLoading: true,
      schemes: []
    }
  }

  componentDidMount() {
    const start = Date.now();
    db.get('api/schemes')
      .then(res => setTimeout(() => this.setState({
        isLoading: false,
        schemes: res.data as SchemeCollection
      }), 2000 - (Date.now() - start))) // Minimum wait time (ms).
  }

  render() {
    return this.state.isLoading ? (
      <div className='Project--loading'>
        <LoadingAnimation color='#28425C'/>
      </div>
    ) : (
      <div className='Project'>
        <ProjectMenu />
        <div className='Project__schemes'>
          {this.state.schemes.map((scheme, index) => (
            <div className='Project__scheme'>
              {scheme.map((color, idx, arr) => (
                <div className='Project__color' style={{ backgroundColor: color }}>
                  <div className='Project__hexcode'>
                    <p>{color}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
