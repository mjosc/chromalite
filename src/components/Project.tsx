import * as React from 'react';
import { database as db, SchemeCollection } from '../database';
import ProjectMenu from './ProjectMenu';
import LoadingAnimation from './LoadingAnimation';
import ButtonAddScheme from './ButtonAddScheme';
import ColorContextMenu, { contextMenu } from './ColorContextMenu';
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

  handleContextMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    contextMenu.show({
      id: 'test',
      event: e,
    });
  }

  handleRemoveColor = (e: any) => { // Test
    console.log(e);
  }

  // TODO: Refactor state to match redux store and add the appropriate keys once
  // each project and scheme has the appropriately db-assigned id.

  render() {
    return this.state.isLoading ? (
      <div className='Project--loading'>
        <LoadingAnimation />
      </div>
    ) : (
        <div className='Project'>
          <ProjectMenu />
          <div className='Project__schemes-container'>
            {this.state.schemes.map((scheme, index) => ( // TODO: Add keys
              <div key={'todo'} className='Project__scheme'>
                {scheme.map((color, idx, arr) => ( // TODO: Add keys
                  <div
                    className='Project__color'
                    onContextMenu={this.handleContextMenu}
                    style={{ backgroundColor: color }}>
                    <div className='Project__hexcode'>
                      <p>{color}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <ButtonAddScheme onClick={this.handleClick} />
          </div>
          <ColorContextMenu onClick={this.handleRemoveColor} />
        </div>
      );
  }
}

export default Project;
