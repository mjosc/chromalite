import * as React from 'react';

import './ProjectMenu.css';

class ProjectMenu extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }
  render() {
    return (
      <div className='ProjectMenu'>
        <h1>PROJECT NAME</h1>
      </div>
    );
  }
}

export default ProjectMenu;