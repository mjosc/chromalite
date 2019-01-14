import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'reset-css';
import registerServiceWorker from './registerServiceWorker';

import Project from './components/Project';

ReactDOM.render(
  <Project />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
