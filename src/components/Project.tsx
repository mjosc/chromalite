import * as React from 'react';
import { database as db, SchemeCollection } from '../database';
import ProjectMenu from './ProjectMenu';
import LoadingAnimation from './LoadingAnimation';
import ButtonAddScheme from './ButtonAddScheme';
import './Project.css';

interface Props {

}

interface State {
  isLoading: boolean
  schemes: SchemeCollection
}

class Project extends React.Component<Props, State> {
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

  handleClick = (e: MouseEvent) => null;

  render() {
    return this.state.isLoading ? (
      <div className='Project--loading'>
        <LoadingAnimation color='#28425C'/>
      </div>
    ) : (
      <div className='Project'>
        <ProjectMenu />
        <div className='Project__schemes-container'>
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
          <ButtonAddScheme onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default Project;
